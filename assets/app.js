// התנהגות האתר: חלון הפרטים של כל כלי, מצב כהה, והחלון ״מוצאים כיוון״.
// בלי הקובץ הזה כל התוכן עדיין גלוי: הפרטים מוצגים מתחת לכל כרטיס, בלי חלון ובלי חיפוש.
(function () {
  'use strict';
  var doc = document;
  var root = doc.documentElement;
  var $ = function (sel, el) { return (el || doc).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(sel)); };

  /* ---------- מקלדת המסך, בפלאפון ---------- */
  // כשהמקלדת נפתחת היא מכסה את תחתית המסך, וחלון שעולה מלמטה נעלם מאחוריה.
  // מודדים כמה מהמסך המקלדת תופסת, והעיצוב מרים את החלונות בדיוק בגובה הזה.
  if (window.visualViewport) {
    var vv = window.visualViewport;
    var setKb = function () {
      var kb = Math.max(0, Math.round(window.innerHeight - vv.height - vv.offsetTop));
      var open = kb > 80;
      root.style.setProperty('--kb', open ? kb + 'px' : '0px');
      root.style.setProperty('--vvh', Math.round(vv.height) + 'px');
      root.classList.toggle('kb-open', open);
    };
    vv.addEventListener('resize', setKb);
    vv.addEventListener('scroll', setKb);
    setKb();
  }

  /* ---------- סגירה בגרירה למטה, בפלאפון ---------- */
  // בפלאפון החלונות עולים מלמטה, ואפשר למשוך את ראשם למטה באצבע כדי לסגור.
  // area הוא האזור שממנו מותר להתחיל גרירה; ok היא בדיקה נוספת (למשל שהתוכן לא גלול).
  function dragToClose(sheet, area, ok) {
    if (!area || !window.matchMedia) return;
    var narrow = window.matchMedia('(max-width:599px)');
    var calm = window.matchMedia('(prefers-reduced-motion:reduce)');
    var y0 = null, dy = 0, t0 = 0;
    var settle = function (to, done) {
      sheet.classList.remove('is-dragging');
      if (calm.matches) { sheet.style.transform = ''; if (done) done(); return; }
      sheet.classList.add('is-settling');
      sheet.style.transform = to;
      setTimeout(function () { sheet.classList.remove('is-settling'); sheet.style.transform = ''; if (done) done(); }, 210);
    };
    area.addEventListener('touchstart', function (e) {
      if (!narrow.matches || e.touches.length !== 1 || e.target.closest('a,button,input,textarea,select,label')) return;
      if (ok && !ok(e)) return;
      y0 = e.touches[0].clientY; dy = 0; t0 = Date.now();
    }, { passive: true });
    area.addEventListener('touchmove', function (e) {
      if (y0 === null) return;
      dy = Math.max(0, e.touches[0].clientY - y0);
      if (dy > 4) { sheet.classList.add('is-dragging'); sheet.style.transform = 'translateY(' + dy + 'px)'; }
    }, { passive: true });
    var end = function () {
      if (y0 === null) return;
      var fast = dy > 40 && dy / Math.max(1, Date.now() - t0) > 0.5;
      y0 = null;
      if (dy > 120 || fast) settle('translateY(100%)', function () { sheet.close(); });
      else if (dy > 0) settle('translateY(0)');
    };
    area.addEventListener('touchend', end);
    area.addEventListener('touchcancel', end);
  }
  window.atlasDragToClose = dragToClose;

  /* ---------- חלון הפרטים של כלי ---------- */
  // הדפדפן מטפל בעצמו במקש היציאה, בכליאת המיקוד בתוך החלון ובהחזרת המיקוד לכפתור שפתח אותו.
  $$('[data-sheet-open]').forEach(function (btn) {
    var sheet = doc.getElementById(btn.getAttribute('aria-controls'));
    if (!sheet || typeof sheet.showModal !== 'function') { btn.hidden = true; return; }
    btn.addEventListener('click', function () {
      sheet.showModal();
      history.replaceState(null, '', '#' + sheet.getAttribute('data-slug'));
      var scroller = $('.sheet-scroll', sheet);
      if (scroller) scroller.scrollTop = 0;
      var title = $('.sheet-title', sheet);
      if (title) title.focus({ preventScroll: true });
    });
  });
  $$('.sheet').forEach(function (sheet) {
    var closeBtn = $('[data-sheet-close]', sheet);
    if (closeBtn) closeBtn.addEventListener('click', function () { sheet.close(); });
    // לחיצה על הרקע המעומעם שמסביב לחלון סוגרת אותו
    sheet.addEventListener('click', function (e) { if (e.target === sheet) sheet.close(); });
    dragToClose(sheet, $('.sheet-head', sheet));
    // בחירה בין חיוב חודשי לשנתי
    var billBtns = $$('[data-bill-set]', sheet);
    billBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var v = b.getAttribute('data-bill-set');
        sheet.setAttribute('data-billing', v);
        billBtns.forEach(function (x) { x.setAttribute('aria-pressed', String(x.getAttribute('data-bill-set') === v)); });
      });
    });
    // כפתורי הפירוט: נשארים במקומם, והחלק שנבחר נפתח מתחתיהם. רק חלק אחד פתוח בכל פעם.
    var moreBtns = $$('.more-btn', sheet);
    var panelOf = function (b) { return doc.getElementById(b.getAttribute('aria-controls')); };
    moreBtns.forEach(function (b) {
      var panel = panelOf(b);
      panel.hidden = true;
      b.addEventListener('click', function () {
        var open = b.getAttribute('aria-expanded') !== 'true';
        moreBtns.forEach(function (x) { x.setAttribute('aria-expanded', 'false'); panelOf(x).hidden = true; });
        if (!open) return;
        b.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
        var scroller = $('.sheet-scroll', sheet);
        var tabs = b.parentNode;
        var top = tabs.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 12;
        var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (panel.getBoundingClientRect().bottom > scroller.getBoundingClientRect().bottom) scroller.scrollTo({ top: Math.max(0, top), behavior: calm ? 'auto' : 'smooth' });
      });
    });
    // קישור ישיר: כשהחלון נפתח הכתובת משתנה ל־#שם-הכלי, וכשהוא נסגר היא חוזרת לעמוד הרגיל
    var shareBtn = $('[data-share]', sheet);
    if (shareBtn) {
      var shareT = $('.share-t', shareBtn);
      var shareTxt = shareT ? shareT.textContent : '';
      shareBtn.addEventListener('click', function () {
        var url = location.href.split('#')[0] + '#' + sheet.getAttribute('data-slug');
        var done = function () {
          if (shareT) shareT.textContent = 'הקישור הועתק';
          setTimeout(function () { if (shareT) shareT.textContent = shareTxt; }, 2200);
        };
        var fallback = function () {
          var ta = doc.createElement('textarea');
          ta.value = url; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;opacity:0';
          sheet.appendChild(ta); ta.select();
          try { if (doc.execCommand('copy')) done(); } catch (e) {}
          sheet.removeChild(ta); shareBtn.focus({ preventScroll: true });
        };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, fallback);
        else fallback();
      });
    }
    sheet.addEventListener('close', function () {
      if (location.hash === '#' + sheet.getAttribute('data-slug')) history.replaceState(null, '', location.pathname + location.search);
      moreBtns.forEach(function (x) { x.setAttribute('aria-expanded', 'false'); panelOf(x).hidden = true; });
    });
  });

  /* ---------- פתיחת כלי לפי הכתובת ---------- */
  // כתובת כמו #runway (או #tool-2 מהקישורים הישנים) פותחת ישר את חלון הפרטים של הכלי, גם בכניסה חדשה לעמוד.
  function openFromHash() {
    var h = decodeURIComponent(location.hash.slice(1));
    if (!h) return;
    var sheet = null;
    $$('.sheet').forEach(function (s) {
      if (s.getAttribute('data-slug') === h || s.id === 'detail-' + h.replace(/^tool-/, '')) sheet = s;
    });
    if (!sheet || sheet.open || typeof sheet.showModal !== 'function') return;
    var card = sheet.closest('.card');
    if (card) card.scrollIntoView({ block: 'center' });
    sheet.showModal();
    var scroller = $('.sheet-scroll', sheet);
    if (scroller) scroller.scrollTop = 0;
    var title = $('.sheet-title', sheet);
    if (title) title.focus({ preventScroll: true });
  }
  openFromHash();
  window.addEventListener('hashchange', function () {
    var open = $('.sheet[open]');
    if (open) open.close();
    openFromHash();
  });

  /* ---------- מצב בהיר וכהה ---------- */
  var themeBtn = $('#theme-toggle');
  var themeLabel = $('[data-theme-label]');
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function isDark() {
    var t = root.dataset.theme;
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return !!(media && media.matches);
  }
  function paintTheme() {
    if (!themeBtn) return;
    var dark = isDark();
    themeBtn.setAttribute('aria-checked', String(dark));
    themeBtn.title = dark ? 'מעבר למצב בהיר' : 'מעבר למצב כהה';
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('atlas-theme', next); } catch (e) { /* בלי שמירה, הבחירה תקפה לביקור הזה */ }
      paintTheme();
    });
    if (media && media.addEventListener) media.addEventListener('change', paintTheme);
    paintTheme();
  }

  /* ---------- תפריט שלוש נקודות (מסך צר): פותח וסוגר את לוח המתגים ---------- */
  var menuBtn = $('#menu-open'), menuPanel = $('#menu-panel');
  function setMenu(open) {
    menuPanel.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
  }
  if (menuBtn && menuPanel) {
    menuBtn.addEventListener('click', function () { setMenu(menuPanel.hidden); });
    document.addEventListener('click', function (e) {
      if (!menuPanel.hidden && !e.target.closest('#menu')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menuPanel.hidden && menuBtn.offsetParent !== null) { setMenu(false); menuBtn.focus(); }
    });
  }

  /* ---------- מתג תצוגה: כרטיסים, אינדקס או גלריה ---------- */
  var viewBtns = $$('[data-view-set]');
  function paintView() {
    var v = root.dataset.view || 'cards';
    viewBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-view-set') === v)); });
  }
  viewBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-view-set');
      if (v === 'cards') delete root.dataset.view; else root.dataset.view = v;
      try { localStorage.setItem('atlas-view', v); } catch (e) { /* בלי שמירה, הבחירה תקפה לביקור הזה */ }
      paintView();
    });
  });
  paintView();

  /* ---------- סננים בדף הראשי ---------- */
  var filterBtns = $$('[data-filter-flag]');
  var catSelect = $('#filter-cat');
  var cards = $$('.card');
  var catSections = $$('[data-cat-section]');
  var filterBar = $('#filter-bar');
  var filterText = $('#filter-text');
  var pageEmpty = $('#page-empty');
  function countWords(n) { return n === 1 ? 'כלי אחד' : n + ' כלים'; }
  function applyFilters() {
    var on = filterBtns.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; });
    var flags = on.map(function (b) { return b.getAttribute('data-filter-flag'); }).filter(Boolean);
    var cats = catSelect && catSelect.value ? [catSelect.value] : [];
    var active = on.length + cats.length;
    var shown = 0;
    cards.forEach(function (card) {
      var have = (card.getAttribute('data-flags') || '').split(' ');
      var ok = flags.every(function (f) { return have.indexOf(f) !== -1; }) && (cats.length === 0 || cats.indexOf(card.getAttribute('data-cat')) !== -1);
      card.hidden = !ok;
      if (ok) shown += 1;
    });
    catSections.forEach(function (sec) {
      var n = $$('.card', sec).filter(function (c) { return !c.hidden; }).length;
      sec.hidden = n === 0;
      var label = $('[data-cat-count]', sec);
      if (label) {
        var all = Number(label.getAttribute('data-total'));
        label.textContent = n === all ? countWords(all) : n + ' מתוך ' + countWords(all);
      }
    });
    if (pageEmpty) pageEmpty.hidden = shown !== 0;
    if (filterBar) {
      filterBar.hidden = active === 0;
      if (filterText) filterText.textContent = active === 0 ? '' : (shown === 0 ? 'אין כלים מתאימים.' : 'מוצגים ' + countWords(shown) + ' מתוך ' + cards.length + '.');
    }
  }
  function clearFilters() {
    filterBtns.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    if (catSelect) setCat('');
    applyFilters();
  }
  filterBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
      applyFilters();
    });
  });
  /* בורר הקטגוריה: רשימה נפתחת של האתר עצמו, לא של המכשיר */
  var catList = $('#cat-list');
  var catCurrent = $('#cat-current');
  var catOpts = catList ? $$('.cat-opt', catList) : [];
  function setCat(v) {
    if (!catSelect) return;
    catSelect.value = v;
    catOpts.forEach(function (o) {
      var on = o.getAttribute('data-cat-opt') === v;
      o.setAttribute('aria-selected', String(on));
      if (on && catCurrent) catCurrent.textContent = $('.cat-opt-name', o).textContent;
    });
    catSelect.classList.toggle('is-set', v !== '');
  }
  function openCat(open, focusBack) {
    if (!catList) return;
    catList.hidden = !open;
    catSelect.setAttribute('aria-expanded', String(open));
    if (open) {
      var cur = catOpts.filter(function (o) { return o.getAttribute('aria-selected') === 'true'; })[0] || catOpts[0];
      cur.focus();
    } else if (focusBack) { catSelect.focus(); }
  }
  if (catSelect && catList) {
    catSelect.addEventListener('click', function () { openCat(catList.hidden); });
    catSelect.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); openCat(true); }
    });
    catOpts.forEach(function (o, i) {
      o.addEventListener('click', function () { setCat(o.getAttribute('data-cat-opt')); openCat(false, true); applyFilters(); });
      o.addEventListener('keydown', function (e) {
        var to = null;
        if (e.key === 'ArrowDown') to = catOpts[Math.min(i + 1, catOpts.length - 1)];
        else if (e.key === 'ArrowUp') to = catOpts[Math.max(i - 1, 0)];
        else if (e.key === 'Home') to = catOpts[0];
        else if (e.key === 'End') to = catOpts[catOpts.length - 1];
        else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); openCat(false, true); return; }
        else if (e.key === 'Tab') { openCat(false); return; }
        if (to) { e.preventDefault(); to.focus(); }
      });
    });
    document.addEventListener('click', function (e) {
      if (!catList.hidden && !$('#cat-pick').contains(e.target)) openCat(false);
    });
  }
  var filterClear = $('#filter-clear');
  if (filterClear) filterClear.addEventListener('click', function () { clearFilters(); (catSelect || filterBtns[0]).focus(); });
  var pageEmptyClear = $('#page-empty-clear');
  if (pageEmptyClear) pageEmptyClear.addEventListener('click', function () { clearFilters(); (catSelect || filterBtns[0]).focus(); });

  /* ---------- חלון החיפוש ---------- */
  // החיפוש מקומי: הוא מתאים את המילים שנכתבו לשם, לתיאור, ליתרונות ולקהל של כל כלי, ומדרג לפי ההתאמה.
  // כדי לחבר מודל בהמשך מחליפים רק את rank, שמקבלת טקסט ומחזירה רשימת כלים מדורגת עם נימוק.
  var dialog = $('#finder');
  var openBtn = $('#finder-open');
  var q = $('#q');
  var index = [];
  try { index = JSON.parse($('#search-index').textContent); } catch (e) { index = []; }
  var rows = {};
  $$('[data-result]').forEach(function (li) { rows[li.getAttribute('data-result')] = li; });
  var resultsList = $('#results');
  var finderCount = $('#finder-count');
  var finderEmpty = $('#finder-empty');
  var finderClear = $('#finder-clear');
  var shortBtns = $$('[data-short]');
  var recentBox = $('#finder-recent');
  var recentList = $('#finder-recent-list');
  var STOP = ['אני', 'רוצה', 'צריך', 'צריכה', 'מחפש', 'מחפשת', 'כלי', 'כלים', 'של', 'עם', 'את', 'על', 'או', 'גם', 'זה', 'מה', 'איך', 'לי', 'כדי', 'שיהיה', 'משהו', 'הכי', 'טוב', 'יש', 'אפשר', 'לעשות', 'ליצור'];
  var PREFIX = 'והבלמשכ';

  function words(n) { return n === 1 ? 'כלי אחד' : n + ' כלים'; }
  function tokens(raw) {
    return flat(raw.toLowerCase()).replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(function (t) { return t.length > 1 && STOP.indexOf(t) === -1; });
  }
  // מילה בעברית מגיעה לעיתים עם אות שימוש בתחילתה (״לסרטון״, ״בחינם״), ולכן בודקים גם בלעדיה
  // וגם ״וידאו״ ו״ווידאו״ הם אותה מילה, ולכן ו״ו כפולה נספרת כאחת
  function flat(v) { return String(v).replace(/ו+/g, 'ו'); }
  index.forEach(function (x) {
    x.name = flat(x.name); x.role = flat(x.role); x.who = flat(x.who);
    x.pros.forEach(function (p) { p.text = flat(p.text); });
  });
  function hit(text, t) {
    if (text.indexOf(t) !== -1) return true;
    return t.length > 3 && PREFIX.indexOf(t.charAt(0)) !== -1 && text.indexOf(t.slice(1)) !== -1;
  }
  function rank(raw, flags) {
    var ts = tokens(raw);
    var out = [];
    index.forEach(function (x) {
      if (flags.some(function (f) { return !x[f]; })) return;
      var score = 0, why = '';
      ts.forEach(function (t) {
        var best = 0;
        if (hit(x.name, t)) best = 6;
        else if (hit(x.role, t)) best = 3;
        else if (hit(x.who, t)) best = 2;
        x.pros.forEach(function (p) { if (hit(p.text, t)) { if (best < 2) best = 2; if (!why) why = p.lead; } });
        score += best;
      });
      if (ts.length === 0 || score > 0) out.push({ id: x.id, score: score, why: why });
    });
    out.sort(function (a, b) { return b.score - a.score || a.id - b.id; });
    return out;
  }
  function activeFlags() {
    return shortBtns.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.getAttribute('data-short'); });
  }
  function readRecent() {
    try { return JSON.parse(localStorage.getItem('atlas-recent') || '[]').filter(function (x) { return typeof x === 'string'; }).slice(0, 5); } catch (e) { return []; }
  }
  function saveRecent(raw) {
    raw = raw.trim();
    if (raw.length < 2) return;
    var list = readRecent().filter(function (x) { return x !== raw; });
    list.unshift(raw);
    try { localStorage.setItem('atlas-recent', JSON.stringify(list.slice(0, 5))); } catch (e) { /* בלי שמירה */ }
  }
  function paintRecent(show) {
    if (!recentBox) return;
    var list = show ? readRecent() : [];
    recentList.textContent = '';
    list.forEach(function (text) {
      var b = doc.createElement('button');
      b.type = 'button'; b.className = 'btn short'; b.textContent = text;
      b.addEventListener('click', function () { q.value = text; search(); q.focus(); });
      recentList.appendChild(b);
    });
    recentBox.hidden = list.length === 0;
  }
  function search() {
    var raw = q.value.trim();
    var flags = activeFlags();
    var active = raw !== '' || flags.length > 0;
    finderClear.hidden = raw === '';
    paintRecent(!active);
    if (!active) {
      resultsList.hidden = true; finderEmpty.hidden = true; finderCount.textContent = '';
      return;
    }
    var found = rank(raw, flags);
    Object.keys(rows).forEach(function (id) { rows[id].hidden = true; });
    found.forEach(function (r) {
      var li = rows[r.id];
      if (!li) return;
      li.hidden = false;
      var why = $('[data-why]', li);
      why.textContent = r.why; why.hidden = !r.why;
      resultsList.appendChild(li);
    });
    resultsList.hidden = found.length === 0;
    finderEmpty.hidden = found.length !== 0;
    finderCount.textContent = found.length === 0 ? 'אין תוצאות' : 'נמצאו ' + words(found.length);
  }

  if (dialog && openBtn && q && typeof dialog.showModal === 'function') {
    q.addEventListener('input', search);
    $('#finder-form').addEventListener('submit', function (e) { e.preventDefault(); saveRecent(q.value); });
    finderClear.addEventListener('click', function () { q.value = ''; search(); q.focus(); });
    shortBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
        search();
      });
    });
    openBtn.addEventListener('click', function () {
      dialog.showModal();
      search();
      q.focus();
    });
    $('#finder-close').addEventListener('click', function () { dialog.close(); });
    // כל פתיחה מתחילה נקייה
    dialog.addEventListener('close', function () {
      q.value = '';
      shortBtns.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    });
    // לחיצה על הרקע המעומעם סוגרת. מקש היציאה והחזרת המיקוד לכפתור מטופלים על ידי הדפדפן.
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
    dragToClose(dialog, $('.finder-top', dialog));
    // בחירה בתוצאה סוגרת את החיפוש ופותחת את חלון הפרטים של הכלי
    $$('[data-open-tool]', dialog).forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-open-tool');
        // בכל כלי יש כפתור פרטים לכל תצוגה. בוחרים את זה שמוצג עכשיו.
        var opener = $$('#tool-' + id + ' [data-sheet-open]').filter(function (b) { return b.offsetParent !== null; })[0] || $('#tool-' + id + ' [data-sheet-open]');
        saveRecent(q.value);
        dialog.close();
        if (!opener) return;
        if (opener.closest('.card').hidden) clearFilters();
        opener.scrollIntoView({ block: 'center' });
        opener.focus({ preventScroll: true });
        opener.click();
      });
    });
  } else if (openBtn) {
    openBtn.hidden = true;
  }
})();
