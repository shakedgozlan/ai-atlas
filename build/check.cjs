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

const audit = () => {
  const cv = document.createElement('canvas'); cv.width = cv.height = 1;
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  const rgba = (c) => { ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = c; ctx.fillRect(0, 0, 1, 1); const d = ctx.getImageData(0, 0, 1, 1).data; return [d[0], d[1], d[2], d[3] / 255]; };
  const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const bgOf = (el) => { for (let e = el; e; e = e.parentElement) { const c = rgba(getComputedStyle(e).backgroundColor); if (c[3] > 0.99) return c; } return rgba(getComputedStyle(document.documentElement).backgroundColor); };
  const visible = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 1 && r.height > 1 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const out = { contrast: [], small: [], clipped: [], targets: [], overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
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
  document.querySelectorAll('button, a.btn, input, select, .results a, .cat-nav a').forEach((el) => {
    if (!visible(el) || el.closest('[hidden]')) return;
    if (el.closest('dialog') && !el.closest('dialog[open]')) return;
    const r = el.getBoundingClientRect();
    if (r.height < 43.5) out.targets.push(`${el.id || el.className} ${Math.round(r.height)}px`);
  });
  document.querySelectorAll('.card-head, .card-body, .panel, .plan, .fact').forEach((el) => {
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
      await page.goto('file://' + file);
      await page.waitForTimeout(300);
      const report = async (label) => {
        const a = await page.evaluate(audit);
        note(a.overflow <= 0, `${tag} ${label} גלילה אופקית`, a.overflow + 'px');
        note(!a.contrast.length, `${tag} ${label} ניגודיות`, a.contrast.slice(0, 6).join(' | '));
        note(!a.small.length, `${tag} ${label} טקסט קטן מ־12`, a.small.slice(0, 4).join(' | '));
        note(!a.clipped.length, `${tag} ${label} טקסט חתוך`, a.clipped.slice(0, 4).join(' | '));
        note(!a.targets.length, `${tag} ${label} יעד מגע קטן`, a.targets.slice(0, 6).join(' | '));
      };
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-1-top.png`) });
      await report('סגור');

      // גודלי טקסט
      const sizes = await page.evaluate(() => Object.fromEntries(['.role', '.price-text', '.detail', '.lead', '.name', '.panel h4', '.src'].map((s) => [s, parseFloat(getComputedStyle(document.querySelector(s)).fontSize)])));
      note(sizes['.role'] >= 16 && sizes['.price-text'] >= 16 && sizes['.detail'] >= 16 && sizes['.lead'] >= 16, `${tag} טקסט רגיל מתחת ל־16`, JSON.stringify(sizes));
      note(sizes['.src'] <= 12, `${tag} מידע טכני מעל 12`, String(sizes['.src']));
      note(sizes['.name'] >= 24, `${tag} שם הכלי קטן`, String(sizes['.name']));

      // ראשי כרטיסים שווים בגובה בשורה, ופתיחה לא מותחת את השכן
      const cards = page.locator('.card');
      const n = await cards.count();
      const box = async (sel) => page.locator(sel).first().boundingBox();
      if (width === 1440) {
        const h1 = (await box('#tool-1 .card-head')).height, h2 = (await box('#tool-2 .card-head')).height;
        note(Math.abs(h1 - h2) < 1, `${tag} גובה כרטיסים סגורים לא אחיד`, `${h1} / ${h2}`);
        await page.click('#tool-2 .btn-open');
        const h1b = (await box('#tool-1')).height;
        const visibleSurface = await page.evaluate(() => { const b = document.querySelector('#body-1'); return b.hidden; });
        note(visibleSurface && Math.abs((await box('#tool-1 .card-head')).height - h1) < 1, `${tag} פתיחה מנפחת את הכרטיס השכן`, String(h1b));
        await page.click('#tool-2 .btn-open');
      }

      // פתיחה וסגירה, ראשונה ומשנית
      const open = page.locator('#tool-2 .btn-open'), full = page.locator('#tool-2 .btn-full');
      note((await open.getAttribute('aria-expanded')) === 'false' && !(await page.locator('#body-2').isVisible()), `${tag} כרטיס לא סגור בהתחלה`);
      await open.focus(); await page.keyboard.press('Enter');
      note((await open.getAttribute('aria-expanded')) === 'true' && await page.locator('#body-2').isVisible(), `${tag} פתיחה במקלדת`);
      note(!(await page.locator('#full-2').isVisible()), `${tag} פתיחה משנית גלויה כברירת מחדל`);
      note((await page.locator('#body-2 .panel').nth(0).locator('.points > li').count()) === 2 && (await page.locator('#body-2 .panel').nth(1).locator('.points > li').count()) === 2, `${tag} לא שני יתרונות ושתי מגבלות`);
      await full.focus(); await page.keyboard.press('Space');
      note((await full.getAttribute('aria-expanded')) === 'true' && await page.locator('#full-2').isVisible(), `${tag} פתיחה משנית`);
      if (shots) { await page.locator('#tool-2').scrollIntoViewIfNeeded(); await page.screenshot({ path: path.join(shots, `${tag}-2-open.png`) }); }
      await full.click();
      note(!(await page.locator('#full-2').isVisible()), `${tag} סגירת הפתיחה המשנית`);
      await open.click();
      note(!(await page.locator('#body-2').isVisible()), `${tag} סגירת כרטיס`);

      // הכול פתוח: כרטיס עם הרבה תוכן, שמות ארוכים, מקור ישן, מחיר לא מאומת
      await page.evaluate(() => document.querySelectorAll('[data-toggle][aria-expanded="false"]').forEach((b) => b.click()));
      await report('הכול פתוח');
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-3-all-open.png`), fullPage: true });
      await page.evaluate(() => document.querySelectorAll('[data-toggle][aria-expanded="true"]').forEach((b) => b.click()));

      // קישורים ולוגואים
      const links = await page.evaluate(() => [...document.querySelectorAll('a[href^="http"]')].filter((a) => a.target !== '_blank' || !/noopener/.test(a.rel)).length);
      note(links === 0, `${tag} קישור חיצוני שלא נפתח בלשונית נפרדת`, String(links));
      const dead = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].filter((a) => !document.getElementById(a.getAttribute('href').slice(1))).map((a) => a.getAttribute('href')));
      note(!dead.length, `${tag} קישור פנימי בלי יעד`, dead.join(' '));
      await page.evaluate(() => document.querySelectorAll('img').forEach((i) => { i.loading = 'eager'; }));
      await page.waitForTimeout(300);
      const badImg = await page.evaluate(() => [...document.querySelectorAll('img')].filter((i) => !i.complete || !i.naturalWidth).map((i) => i.getAttribute('src')));
      note(!badImg.length, `${tag} לוגו שלא נטען`, badImg.join(' '));
      const logoVisible = await page.evaluate(() => [...document.querySelectorAll('.logo')].filter((l) => [...l.querySelectorAll('img')].filter((i) => getComputedStyle(i).display !== 'none').length !== 1).length);
      note(logoVisible === 0, `${tag} לוגו: לא גרסה אחת בדיוק גלויה`, String(logoVisible));

      // החלון הקופץ
      const opener = page.locator('#finder-open');
      await opener.focus(); await page.keyboard.press('Enter');
      note(await page.locator('#finder').evaluate((d) => d.open), `${tag} החלון לא נפתח`);
      note(await page.evaluate(() => document.activeElement.id === 'q'), `${tag} המיקוד לא בשדה החיפוש`);
      await report('חלון פתוח');
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-4-finder.png`) });
      await page.keyboard.type('runway');
      note((await page.locator('#results [data-result]:not([hidden])').count()) === (file.includes('fixture') ? 2 : 1), `${tag} חיפוש לפי שם`);
      await page.fill('#q', 'וידאו');
      note((await page.locator('#results [data-result]:not([hidden])').count()) >= 3, `${tag} חיפוש לפי תפקיד או קטגוריה`);
      await page.fill('#q', 'אין כלי כזה');
      note(await page.locator('#finder-empty').isVisible() && !(await page.locator('#results').isVisible()), `${tag} מצב אין תוצאות בחלון`);
      if (shots) await page.screenshot({ path: path.join(shots, `${tag}-5-empty.png`) });
      await page.click('#finder-clear');
      note((await page.locator('#results [data-result]:not([hidden])').count()) === n && (await page.inputValue('#q')) === '', `${tag} ניקוי`);
      const firstCat = await page.locator('#cat-filter option').nth(1).getAttribute('value');
      await page.selectOption('#cat-filter', firstCat);
      note((await page.locator('#results [data-result]:not([hidden])').count()) >= 1, `${tag} סינון קטגוריה`);
      await page.click('#finder-clear');
      await page.keyboard.press('Escape');
      note(!(await page.locator('#finder').evaluate((d) => d.open)), `${tag} מקש היציאה לא סוגר`);
      note(await page.evaluate(() => document.activeElement.id === 'finder-open'), `${tag} המיקוד לא חוזר לכפתור`);
      await opener.click();
      await page.mouse.click(4, 4);
      note(!(await page.locator('#finder').evaluate((d) => d.open)), `${tag} לחיצה בחוץ לא סוגרת`);
      note(await page.evaluate(() => document.activeElement.id === 'finder-open'), `${tag} המיקוד לא חוזר אחרי לחיצה בחוץ`);
      note((await page.locator('#finder .sources, #finder a[href^="http"]').count()) === 0, `${tag} מקורות בתוך החלון`);

      // סינון בעמוד, מספרים קבועים, מצב ריק ואיפוס
      await opener.click();
      await page.fill('#q', 'pika');
      await page.keyboard.press('Escape');
      note((await page.locator('.card:not([hidden])').count()) === 1 && await page.locator('#filter-bar').isVisible(), `${tag} סינון בעמוד`);
      note((await page.locator('.card:not([hidden]) .num').first().textContent()) === '06', `${tag} המספר משתנה בסינון`);
      await report('מסונן');
      await page.click('#filter-clear');
      note((await page.locator('.card:not([hidden])').count()) === n && !(await page.locator('#filter-bar').isVisible()), `${tag} איפוס הסינון`);
      await opener.click();
      await page.fill('#q', 'qqqq');
      await page.keyboard.press('Escape');
      note(await page.locator('#page-empty').isVisible(), `${tag} מצב אין תוצאות בעמוד`);
      await page.click('#page-empty-clear');
      note((await page.locator('.card:not([hidden])').count()) === n, `${tag} איפוס ממצב ריק`);

      // קפיצה לכלי מתוך החלון
      await opener.click();
      await page.locator('#results a').nth(4).click();
      await page.waitForTimeout(700);
      note(await page.evaluate(() => document.activeElement.closest('.card') && document.activeElement.closest('.card').id === 'tool-5'), `${tag} קפיצה לכלי`);

      // מצב כהה ובהיר
      const before = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
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
  note(await p.locator('#body-1').isVisible() && await p.locator('#full-1').isVisible(), 'בלי סקריפטים התוכן מוסתר');
  await ctx.close();
  await browser.close();

  if (fails.length) { console.log(`נכשלו ${fails.length} בדיקות:`); fails.forEach((f) => console.log(' - ' + f)); process.exit(1); }
  console.log('כל הבדיקות עברו: 320, 390 ו־1440, מצב בהיר ומצב כהה.');
})();
