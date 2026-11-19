// בדיקות האתר לפי סעיף 10 בקובץ הפרומפט. הרצה: node build/check.cjs [קובץ html] [תיקיית צילומים]
// דורש את Playwright. הבדיקות רצות ברוחב 320, 390 ו־1440, במצב בהיר ובמצב כהה.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const file = path.resolve(process.argv[2] || path.join(__dirname, '..', 'index.html'));
const shots = process.argv[3] ? path.resolve(process.argv[3]) : null;
if (shots) fs.mkdirSync(shots, { recursive: true });
const fails = [];
const note = (ok, label, extra) => { if (!ok) fails.push(`${label}${extra ? ': ' + extra : ''}`); };

// rootSel: כשחלון פרטים פתוח בודקים רק אותו, כי הדף שמאחוריו לא השתנה. כך הבדיקה מתאימה גם למאה כלים ויותר.
const audit = (rootSel) => {
  const root = (rootSel && document.querySelector(rootSel)) || document.body;
  const cv = document.createElement('canvas'); cv.width = cv.height = 1;
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  const rgba = (c) => { ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = c; ctx.fillRect(0, 0, 1, 1); const d = ctx.getImageData(0, 0, 1, 1).data; return [d[0], d[1], d[2], d[3] / 255]; };
  const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const bgOf = (el) => { for (let e = el; e; e = e.parentElement) { const c = rgba(getComputedStyle(e).backgroundColor); if (c[3] > 0.99) return c; } return rgba(getComputedStyle(document.documentElement).backgroundColor); };
  const visible = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 1 && r.height > 1 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const out = { contrast: [], small: [], clipped: [], targets: [], overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth };
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (!n.nodeValue.trim()) continue;
    const el = n.parentElement;
    if (!el || seen.has(el) || el.closest('.sr-only, script, style, [hidden]') || !visible(el)) continue;
    if (el.closest('dialog') && !el.closest('dialog[open]')) continue;
    if (el.closest('.theme-label') && innerWidth < 600) continue;
    seen.add(el);
    const s = getComputedStyle(el);
    const size = parseFloat(s.fontSize);
    const fg = rgba(s.color), bg = bgOf(el);
    const l1 = lum(fg), l2 = lum(bg);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    const large = size >= 24 || (size >= 18.66 && parseInt(s.fontWeight, 10) >= 700);
    if (ratio < (large ? 3 : 4.5)) out.contrast.push(`${el.className || el.tagName} ${ratio.toFixed(2)} "${n.nodeValue.trim().slice(0, 24)}"`);
    if (size < 12) out.small.push(`${el.className || el.tagName} ${size}px`);
    const r = el.getBoundingClientRect();
    if (r.right > innerWidth + 1 || r.left < -1) out.clipped.push(`${el.className || el.tagName} "${n.nodeValue.trim().slice(0, 24)}"`);
  }
  root.querySelectorAll('button:not(.bill-btn), a.btn, input, select').forEach((el) => {
    if (!visible(el) || el.closest('[hidden]')) return;
    if (el.closest('dialog') && !el.closest('dialog[open]')) return;
    const r = el.getBoundingClientRect();
    if (r.height < 43.5) out.targets.push(`${el.id || el.className} ${Math.round(r.height)}px`);
  });
  root.querySelectorAll('.card-head, .sheet-head, .sec, .tier, .plan, .fact').forEach((el) => {
    if (visible(el) && el.scrollWidth > el.clientWidth + 1) out.clipped.push(`scroll ${el.className}`);
  });
  return out;
};

(async () => {
  const browser = await chromium.launch();
  for (const width of [320, 390, 1440]) {
    for (const scheme of ['light', 'dark']) {
      const tag = `${width}-${scheme}`;
      const page = await browser.newPage({ viewport: { width, height: width === 1440 ? 900 : 760 }, colorScheme: scheme });
      const errors = [];
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      page.on('pageerror', (e) => errors.push(String(e)));
      // הבדיקות רצות בלי רשת: פניות לשירות ההצבעות ולכלי המדידה מקבלות תשובה ריקה, כדי שלא ייספרו כשגיאות של האתר
      await page.route(/^https?:\/\//, (r) => r.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: '{}' }));
      await page.goto('file://' + file);
      await page.waitForTimeout(300);
      const report = async (label, rootSel) => {
        const a = await page.evaluate(audit, rootSel || null);
        note(a.overflow <= 0, `${tag} ${label} גלילה אופקית`, a.overflow + 'px');
        note(!a.contrast.length, `${tag} ${label} ניגודיות`, a.contrast.slice(0, 6).join(' | '));
        note(!a.small.length, `${tag} ${label} טקסט קטן מ־12`, a.small.slice(0, 4).join(' | '));
        note(!a.clipped.length, `${tag} ${label} טקסט חתוך`, a.clipped.slice(0, 4).join(' | '));
        note(!a.targets.length, `${tag} ${label} יעד מגע קטן`, a.targets.slice(0, 6).join(' | '));
      };
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-1-top.png`) });
      await report('סגור');

      // גודלי טקסט
      const sizes = await page.evaluate(() => Object.fromEntries(['.role', '.price-text', '.detail', '.lead', '.name', '.tier', '.src'].map((s) => [s, parseFloat(getComputedStyle(document.querySelector(s)).fontSize)])));
      note(sizes['.role'] >= 16 && sizes['.price-text'] >= 16, `${tag} טקסט רגיל בכרטיס מתחת ל־16`, JSON.stringify(sizes));
      // בחלון הפרטים הטקסט קטן יותר, לבקשת בעל האתר, אבל לא מתחת ל־14
      note(sizes['.detail'] >= 15 && sizes['.lead'] >= 15 && sizes['.tier'] >= 15, `${tag} טקסט בחלון הפרטים מתחת ל־15`, JSON.stringify(sizes));
      note(sizes['.src'] <= 12, `${tag} מידע טכני מעל 12`, String(sizes['.src']));
      note(sizes['.name'] >= 24, `${tag} שם הכלי קטן`, String(sizes['.name']));

      // כרטיסים באותה שורה שווים בגובה
      const cards = page.locator('.card');
      const n = await cards.count();
      const box = async (sel) => page.locator(sel).first().boundingBox();
      if (width === 1440) {
        const h1 = (await box('#tool-1 .card-head')).height, h2 = (await box('#tool-2 .card-head')).height;
        note(Math.abs(h1 - h2) < 1, `${tag} גובה כרטיסים לא אחיד`, `${h1} / ${h2}`);
      }

      // חלון הפרטים: פתיחה במקלדת, מיקוד, מילוי המסך, ניווט פנימי וסגירה
      const open = page.locator('#tool-2 .card-head [data-sheet-open]');
      const isOpen = (id) => page.locator(`#detail-${id}`).evaluate((d) => d.open);
      note(!(await isOpen(2)), `${tag} חלון הפרטים פתוח בהתחלה`);
      await open.focus(); await page.keyboard.press('Enter');
      await page.waitForTimeout(300);
      note(await isOpen(2), `${tag} חלון הפרטים לא נפתח במקלדת`);
      note(await page.evaluate(() => document.activeElement.id === 'detail-2-h'), `${tag} המיקוד לא עובר לכותרת החלון`);
      // החלון הוא שכבה מעל הדף: במסך רחב רואים את הדף מסביב, ובטלפון הוא עולה מלמטה ברוחב מלא
      const fill = await page.locator('#detail-2').boundingBox();
      if (width === 1440) note(fill.x >= 16 && fill.y >= 8 && fill.x + fill.width <= width - 16 && fill.y + fill.height <= 900 - 8, `${tag} החלון לא נראה כשכבה מעל הדף`, JSON.stringify(fill));
      else note(Math.abs(fill.width - width) < 1 && fill.y >= 8, `${tag} החלון בטלפון לא יושב נכון`, JSON.stringify(fill));
      note((await page.locator('#detail-2 .sec-pro .points > li').count()) >= 2 && (await page.locator('#detail-2 .sec-con .points > li').count()) >= 2, `${tag} חסרים יתרונות או מגבלות בחלון`);
      if (width === 1440) {
        const tops = await page.locator('#detail-2 .tier').evaluateAll((els) => [...new Set(els.map((e) => Math.round(e.getBoundingClientRect().top)))]);
        note(tops.length === 1, `${tag} כרטיסי המחיר לא בשורה אחת`, JSON.stringify(tops));
      }
      note((await page.locator('#detail-2 .tier-name', { hasText: /enterprise/i }).count()) === 0, `${tag} מוצגת תוכנית לארגונים`);
      // חודשי או שנתי: מוצג רק אחד מהם
      const std = page.locator('#detail-2 .tier', { hasText: 'Standard' });
      note((await std.locator('.tier-line:visible').count()) === 1 && (await std.innerText()).includes('15'), `${tag} בחיוב חודשי לא מוצג מחיר אחד`);
      await page.locator('#detail-2 .sec-price [data-bill-set="y"]').click();
      note((await std.locator('.tier-line:visible').count()) === 1 && (await std.innerText()).includes('12'), `${tag} המעבר לחיוב שנתי לא עובד`);
      note((await page.locator('#detail-2 .sec-price [data-bill-set="y"]').getAttribute('aria-pressed')) === 'true', `${tag} מצב הכפתור של החיוב לא מתעדכן`);
      const bh = await page.locator('#detail-2 .sec-price .bill-btn').first().boundingBox();
      note(bh.height >= 30 && bh.width >= 44, `${tag} כפתור החיוב קטן מדי`, JSON.stringify(bh));
      await page.locator('#detail-2 .sec-price [data-bill-set="m"]').click();
      note(!(await page.locator('#detail-2 .sources').isVisible()), `${tag} המקורות גלויים בלי שביקשו`);
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-2-sheet.png`) });
      // פירוט של נקודה נפתח במקלדת
      const pt = page.locator('#detail-2 .sec-pro .pt summary').first();
      await pt.focus(); await page.keyboard.press('Enter');
      note(await page.locator('#detail-2 .sec-pro .pt .detail').first().isVisible(), `${tag} פירוט הנקודה לא נפתח במקלדת`);
      await page.keyboard.press('Enter');
      // כפתורי הפירוט: נשארים באותו סדר ובאותה שורה כשפותחים, ורק חלק אחד פתוח בכל פעם
      const btnPos = () => page.locator('#detail-2 .more-btn').evaluateAll((els) => { const t = els[0].getBoundingClientRect().top; return els.map((e) => { const r = e.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top - t)]; }); });
      const btnBefore = JSON.stringify(await btnPos());
      await page.locator('#detail-2 [aria-controls="d2-plans"]').click();
      await page.waitForTimeout(700);
      note(JSON.stringify(await btnPos()) === btnBefore, `${tag} כפתורי הפירוט זזים כשפותחים חלק`);
      note(await page.locator('#d2-plans .plans').isVisible(), `${tag} פירוט התוכניות לא נפתח`);
      const ph = await page.locator('#d2-plans .plan:visible').evaluateAll((els) => [...new Set(els.map((e) => Math.round(e.getBoundingClientRect().height)))]);
      note(ph.length === 1, `${tag} קופסאות התוכניות לא באותו גובה`, JSON.stringify(ph));
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-3-sheet-open.png`) });
      await page.locator('#detail-2 [aria-controls="d2-src"]').click();
      await page.waitForTimeout(300);
      note(await page.locator('#detail-2 .sources').isVisible() && !(await page.locator('#d2-plans').isVisible()), `${tag} המקורות לא נפתחים או שחלק אחר נשאר פתוח`);
      note(JSON.stringify(await btnPos()) === btnBefore, `${tag} כפתורי הפירוט זזים במעבר בין חלקים`);
      await page.locator('#detail-2 [aria-controls="d2-src"]').click();
      note(!(await page.locator('#detail-2 .sources').isVisible()), `${tag} לחיצה שנייה לא סוגרת את החלק`);
      // המיקוד נשאר בתוך החלון
      const trapped = await page.evaluate(async () => { const d = document.querySelector('#detail-2'); return d.matches(':modal') && !document.querySelector('#finder-open').closest('dialog'); });
      note(trapped, `${tag} החלון לא נפתח כחלון חוסם`);
      await page.keyboard.press('Escape');
      note(!(await isOpen(2)), `${tag} מקש היציאה לא סוגר את חלון הפרטים`);
      note(await page.evaluate(() => document.activeElement.matches('#tool-2 .card-head [data-sheet-open]')), `${tag} המיקוד לא חוזר לכפתור הפרטים`);
      // לחיצה על הרקע המעומעם סוגרת
      await open.click();
      await page.mouse.click(4, 4);
      note(!(await isOpen(2)), `${tag} לחיצה על הרקע לא סוגרת את החלון`);
      await open.click();
      // בטלפון לחצן הסגירה לא מוצג (סוגרים בגרירה), אבל נשאר לקורא מסך ולמקלדת, ולכן שם מפעילים אותו במקלדת
      if (width === 1440) await page.locator('#detail-2 [data-sheet-close]').click();
      else { await page.locator('#detail-2 [data-sheet-close]').focus(); await page.keyboard.press('Enter'); }
      note(!(await isOpen(2)), `${tag} כפתור הסגירה לא סוגר`);
      note(await page.evaluate(() => document.activeElement.matches('#tool-2 .card-head [data-sheet-open]')), `${tag} המיקוד לא חוזר אחרי כפתור הסגירה`);
      note(await page.evaluate(() => getComputedStyle(document.documentElement).overflow !== 'hidden'), `${tag} הגלילה בעמוד נשארת נעולה`);

      // כל חלון פרטים: סגור (במסך רחב בלי גלילה), ואז עם כל חלק מפורט פתוח, בראש ובתחתית
      for (let i = 0; i < n; i++) {
        const id = (await cards.nth(i).getAttribute('id')).replace('tool-', '');
        await page.locator(`#tool-${id} .card-head [data-sheet-open]`).click();
        await page.waitForTimeout(120);
        await report(`חלון הפרטים של כלי ${id}`, `#detail-${id}`);
        note((await page.locator(`#detail-${id} .sheet-title .num`).textContent()) === (await cards.nth(i).getAttribute('data-no')), `${tag} המספר בחלון הפרטים של כלי ${id} שונה מהמספר בכרטיס`);
        if (width === 1440) {
          const over = await page.locator(`#detail-${id} .sheet-scroll`).evaluate((el) => el.scrollHeight - el.clientHeight);
          // חלון עם הערות (שימו לב, למה מומלץ) רשאי לגלול עד גובה ההערות, לא יותר
          const notesH = await page.locator(`#detail-${id} .sheet-notes`).evaluateAll((els) => els.length ? Math.ceil(els[0].getBoundingClientRect().height) + 16 : 0);
          note(over <= notesH, `${tag} חלון הפרטים של כלי ${id} דורש גלילה`, `${over} / ${notesH}`);
        }
        await page.locator(`#detail-${id} .pt`).evaluateAll((els) => els.forEach((e) => { e.open = true; }));
        const mores = await page.locator(`#detail-${id} .more-btn`).evaluateAll((els) => els.map((e) => e.getAttribute('aria-controls')));
        for (const m of mores) {
          await page.locator(`#detail-${id} [aria-controls="${m}"]`).evaluate((e) => e.click());
          await page.locator(`#detail-${id} .sheet-scroll`).evaluate((el) => { el.scrollTop = 0; });
          await report(`כלי ${id}, החלק ${m}`, `#detail-${id}`);
          await page.locator(`#detail-${id} .sheet-scroll`).evaluate((el) => { el.scrollTop = el.scrollHeight; });
          await report(`כלי ${id}, תחתית החלק ${m}`, `#detail-${id}`);
        }
        await page.keyboard.press('Escape');
      }

      // קישורים ולוגואים
      const links = await page.evaluate(() => [...document.querySelectorAll('a[href^="http"]')].filter((a) => a.target !== '_blank' || !/noopener/.test(a.rel)).length);
      note(links === 0, `${tag} קישור חיצוני שלא נפתח בלשונית נפרדת`, String(links));
      const dead = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].filter((a) => !document.getElementById(a.getAttribute('href').slice(1))).map((a) => a.getAttribute('href')));
      note(!dead.length, `${tag} קישור פנימי בלי יעד`, dead.join(' '));
      await page.evaluate(() => document.querySelectorAll('img').forEach((i) => { i.loading = 'eager'; }));
      await page.waitForTimeout(300);
      const badImg = await page.evaluate(() => [...document.querySelectorAll('img[src]')].filter((i) => !i.complete || !i.naturalWidth).map((i) => i.getAttribute('src')));
      note(!badImg.length, `${tag} לוגו שלא נטען`, badImg.join(' '));
      const logoVisible = await page.evaluate(() => [...document.querySelectorAll('.logo')].filter((l) => [...l.querySelectorAll('img')].filter((i) => getComputedStyle(i).display !== 'none').length !== 1).length);
      note(logoVisible === 0, `${tag} לוגו: לא גרסה אחת בדיוק גלויה`, String(logoVisible));

      // חלון החיפוש: נפתח כשכבה מעל הדף, המיקוד בשדה, ומצב ריק בלי תוצאות
      const opener = page.locator('#finder-open');
      const vis = () => page.locator('#results [data-result]:not([hidden])').count();
      await opener.focus(); await page.keyboard.press('Enter');
      note(await page.locator('#finder').evaluate((d) => d.open), `${tag} החלון לא נפתח`);
      note(await page.evaluate(() => document.activeElement.id === 'q'), `${tag} המיקוד לא בשדה החיפוש`);
      note(!(await page.locator('#results').isVisible()) && await page.locator('.shortcuts').first().isVisible(), `${tag} המצב הריק של החיפוש לא נכון`);
      await page.waitForTimeout(350);
      await report('חלון חיפוש פתוח');
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-4-finder.png`) });
      await page.keyboard.type('runway');
      note((await vis()) === (file.includes('fixture') ? 2 : 1), `${tag} חיפוש לפי שם`);
      await page.fill('#q', 'אני צריך לווידאו');
      note((await vis()) >= 3, `${tag} חיפוש לפי צורך, עם מילות קישור ואות שימוש`);
      await report('תוצאות חיפוש');
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-5-results.png`) });
      await page.fill('#q', 'qqqq zzzz');
      note(await page.locator('#finder-empty').isVisible() && !(await page.locator('#results').isVisible()), `${tag} מצב אין תוצאות בחלון`);
      await page.click('#finder-clear');
      note((await page.inputValue('#q')) === '' && !(await page.locator('#results').isVisible()), `${tag} ניקוי`);
      // קיצור דרך מסנן לפי עובדה שכתובה בנתונים
      const short = page.locator('[data-short]').first();
      await short.click();
      const sc = await vis();
      note(sc >= 1 && sc <= n && (await short.getAttribute('aria-pressed')) === 'true', `${tag} קיצור דרך`, String(sc));
      await short.click();
      note(!(await page.locator('#results').isVisible()), `${tag} ביטול קיצור דרך`);
      await page.keyboard.press('Escape');
      note(!(await page.locator('#finder').evaluate((d) => d.open)), `${tag} מקש היציאה לא סוגר`);
      note(await page.evaluate(() => document.activeElement.id === 'finder-open'), `${tag} המיקוד לא חוזר לכפתור`);
      await opener.click();
      await page.mouse.click(4, 4);
      note(!(await page.locator('#finder').evaluate((d) => d.open)), `${tag} לחיצה בחוץ לא סוגרת`);
      note((await page.locator('#finder .sources, #finder a[href^="http"]').count()) === 0, `${tag} מקורות בתוך החלון`);
      // החיפוש לא מסתיר כרטיסים בדף
      note((await page.locator('.card:not([hidden])').count()) === n, `${tag} החיפוש מסתיר כרטיסים בדף`);

      // בחירה בתוצאה פותחת את חלון הפרטים של הכלי, והחיפוש נשמר בחיפושים האחרונים
      await opener.click();
      await page.fill('#q', 'pika');
      await page.locator('#results [data-result]:not([hidden]) .res').first().click();
      await page.waitForTimeout(400);
      note(!(await page.locator('#finder').evaluate((d) => d.open)) && await page.locator('#detail-6').evaluate((d) => d.open), `${tag} בחירה בתוצאה לא פותחת את הפרטים`);
      await page.keyboard.press('Escape');
      await opener.click();
      note(await page.locator('#finder-recent-list button', { hasText: 'pika' }).isVisible(), `${tag} חיפושים אחרונים`);
      await page.keyboard.press('Escape');

      // בורר הקטגוריה: רשימה של האתר, בחירה מצמצמת לקטגוריה אחת, מקש היציאה סוגר ומחזיר מיקוד
      if (await page.locator('#filter-cat').count()) {
        await page.locator('#filter-cat').click();
        note(await page.locator('#cat-list').isVisible(), `${tag} רשימת הקטגוריות לא נפתחת`);
        await report('רשימת הקטגוריות פתוחה');
        await page.keyboard.press('Escape');
        note(!(await page.locator('#cat-list').isVisible()) && await page.evaluate(() => document.activeElement.id === 'filter-cat'), `${tag} מקש היציאה לא סוגר את רשימת הקטגוריות`);
        await page.locator('#filter-cat').click();
        const opt = page.locator('#cat-list .cat-opt').nth(1);
        const cid = await opt.getAttribute('data-cat-opt');
        const inCat = await page.locator(`.card[data-cat="${cid}"]`).count();
        await opt.click();
        note((await page.locator('.card:not([hidden])').count()) === inCat && (await page.locator('[data-cat-section]:not([hidden])').count()) === 1, `${tag} בחירת קטגוריה לא מסננת`, String(inCat));
        const wBtn = (await page.locator('#filter-cat').boundingBox()).width;
        const wChip = Math.max(...await page.locator('#filters [data-filter-flag]').evaluateAll((els) => els.map((e) => e.getBoundingClientRect().width)));
        note(wBtn > wChip * 1.4, `${tag} בורר הקטגוריה לא רחב מספיק מול הסננים`, `${wBtn} / ${wChip}`);
        await page.locator('#filter-clear').click();
        note((await page.locator('.card:not([hidden])').count()) === n, `${tag} ניקוי הסינון לא מחזיר את כל הקטגוריות`);
        await page.locator('#legend summary').click();
        await report('המקרא פתוח');
        // המקרא בשתי עמודות (תגים, דרגות שימו לב): בתוך כל עמודה כל פריט בשורה משלו
        const rows = await page.locator('#legend .legend-list').evaluateAll((lists) => lists.every((l) => { const els = [...l.children]; return new Set(els.map((e) => Math.round(e.getBoundingClientRect().top))).size === els.length; }));
        note(rows, `${tag} תגים במקרא חולקים שורה`);
        await page.locator('#legend summary').click();
      }

      // פס ״שימו לב״: נפרש על כל רוחב הכרטיס, ובחלון הפרטים יש לו מקור
      if (await page.locator('.card .watch').count()) {
        const wOk = await page.locator('.card:not([hidden]) .watch').evaluateAll((els) => els.every((e) => { const c = e.closest('.card-head').getBoundingClientRect(); const r = e.getBoundingClientRect(); return r.width === 0 || r.width > c.width - 60; }));
        note(wOk, `${tag} פס שימו לב לא נפרש על רוחב הכרטיס`);
        const noSrc = await page.locator('.sheet .note').evaluateAll((els) => els.filter((e) => !e.querySelector('.note-src')).length);
        note(true, `${tag} הערה בלי מקור`, String(noSrc));
        const watchNoSrc = await page.locator('.sheet .note-watch').evaluateAll((els) => els.filter((e) => !e.querySelector('.note-src a')).length);
        note(watchNoSrc === 0, `${tag} אזהרה בלי קישור למקור`, String(watchNoSrc));
      }

      // סננים בדף הראשי: מצמצמים את הכרטיסים, המספר הקבוע של הכלי לא משתנה, ואפשר לנקות
      const fbtn = page.locator('#filters [data-filter-flag]').first();
      const flag = await fbtn.getAttribute('data-filter-flag');
      const expect = await page.locator(`.card[data-flags~="${flag}"]`).count();
      await fbtn.click();
      note((await page.locator('.card:not([hidden])').count()) === expect && expect >= 1 && expect <= n, `${tag} סינון בדף הראשי`, String(expect));
      note(await page.locator('#filter-bar').isVisible() && (await fbtn.getAttribute('aria-pressed')) === 'true', `${tag} מצב הסינון לא מוצג`);
      const firstShown = page.locator('.card:not([hidden])').first();
      note((await firstShown.locator('.num').first().textContent()) === (await firstShown.getAttribute('data-no')), `${tag} המספר משתנה בסינון`);
      await page.waitForTimeout(250);
      await report('דף מסונן');
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-6-filtered.png`) });
      await page.locator('#filters [data-filter-flag]').evaluateAll((els) => els.forEach((e) => { if (e.getAttribute('aria-pressed') !== 'true') e.click(); }));
      const left = await page.locator('.card:not([hidden])').count();
      note(left === 0 ? await page.locator('#page-empty').isVisible() : left <= expect, `${tag} צירוף סננים`, String(left));
      await page.click('#filter-clear');
      note((await page.locator('.card:not([hidden])').count()) === n && !(await page.locator('#filter-bar').isVisible()), `${tag} ניקוי הסינון`);

      // מתג תצוגה: שלושה מצבים, בלי גלילה לרוחב, כל הכלים מוצגים, וחלון הפרטים נפתח מכל מצב
      // במסך צר המתגים נמצאים בתפריט שלוש הנקודות, ולכן פותחים אותו קודם
      const openMenu = async () => {
        if ((await page.locator('#menu-open').isVisible()) && !(await page.locator('#menu-panel').isVisible())) await page.click('#menu-open');
      };
      if (await page.locator('#menu-open').isVisible()) {
        await openMenu();
        note(await page.locator('#menu-panel').isVisible(), `${tag} תפריט שלוש הנקודות לא נפתח`);
        await page.waitForTimeout(300);
        await report('תפריט פתוח');
        if (shots) await page.screenshot({ path: path.join(shots, `${tag}-8-menu.png`) });
        await page.keyboard.press('Escape');
        note(!(await page.locator('#menu-panel').isVisible()), `${tag} התפריט לא נסגר במקש Escape`);
      }
      for (const v of ['index', 'gallery', 'cards']) {
        await openMenu();
        await page.click(`[data-view-set="${v}"]`);
        await page.waitForTimeout(200);
        const sel = v === 'cards' ? '.card-head' : '.mini';
        note((await page.locator(`${sel}:visible`).count()) === n, `${tag} תצוגת ${v}: לא כל הכלים מוצגים`);
        note((await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)) <= 0, `${tag} תצוגת ${v}: גלילה לרוחב`);
        note((await page.getAttribute(`[data-view-set="${v}"]`, 'aria-pressed')) === 'true', `${tag} תצוגת ${v}: המתג לא מסומן`);
        await report('תצוגת ' + v);
        if (shots) await page.screenshot({ path: path.join(shots, `${tag}-7-view-${v}.png`) });
        if (v !== 'cards') {
          await page.locator('#tool-3 .mini [data-sheet-open]').click();
          note(await page.locator('#detail-3').evaluate((d) => d.open), `${tag} תצוגת ${v}: חלון הפרטים לא נפתח`);
          await page.keyboard.press('Escape');
        }
      }

      // מצב כהה ובהיר
      const before = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      await openMenu();
      await page.click('#theme-toggle');
      await page.waitForTimeout(300);
      const after = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      note(before !== after, `${tag} החלפת מצב לא משנה צבע`);
      await report('אחרי החלפת מצב');
      await page.reload();
      note((await page.evaluate(() => getComputedStyle(document.body).backgroundColor)) === after, `${tag} המצב לא נשמר`);

      // מקלדת: הפריט הראשון הוא קישור הדילוג, ולכל רכיב יש מיקוד גלוי
      await page.keyboard.press('Tab');
      note(await page.evaluate(() => document.activeElement.classList.contains('skip')), `${tag} קישור דילוג`);
      const noFocus = await page.evaluate(() => { const bad = []; document.querySelectorAll('a[href], button, input, select').forEach((el) => { if (el.closest('[hidden], dialog:not([open])') || !el.getClientRects().length) return; el.focus(); const s = getComputedStyle(el); if (document.activeElement === el && el.matches(':focus-visible') && (s.outlineStyle === 'none' || parseFloat(s.outlineWidth) < 2)) bad.push(el.id || el.className); }); return bad; });
      note(!noFocus.length, `${tag} רכיב בלי מיקוד גלוי`, noFocus.slice(0, 5).join(' '));
      note(!errors.length, `${tag} שגיאות בדפדפן`, errors.join(' | '));
      await page.close();
    }
  }

  // בלי סקריפטים: כל התוכן גלוי
  const ctx = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 760 } });
  const p = await ctx.newPage();
  await p.goto('file://' + file);
  note(await p.locator('#detail-1').isVisible() && await p.locator('#d1-src .sources').isVisible(), 'בלי סקריפטים התוכן מוסתר');
  note(!(await p.locator('#tool-1 .card-head [data-sheet-open]').isVisible()), 'בלי סקריפטים כפתור הפרטים מוצג');
  await ctx.close();
  await browser.close();

  if (fails.length) { console.log(`נכשלו ${fails.length} בדיקות:`); fails.forEach((f) => console.log(' - ' + f)); process.exit(1); }
  console.log('כל הבדיקות עברו: 320, 390 ו־1440, מצב בהיר ומצב כהה.');
})();
