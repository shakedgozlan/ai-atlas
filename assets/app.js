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
    sheet.addEventListener('close', function () {
      moreBtns.forEach(function (x) { x.setAttribute('aria-expanded', 'false'); panelOf(x).hidden = true; });
    });
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

/* ---------- השוואה בין 2 עד 3 כלים ---------- */
// בוחרים כלים בכרטיסים, וסרגל צף מראה מה נבחר. ההשוואה היא רק בין כלים מאותה קטגוריה.
// הבחירה נשמרת בכתובת (#compare=כלי,כלי), ולכן אפשר לשתף השוואה בקישור.
(function () {
  'use strict';
  var doc = document;
  var $ = function (sel, el) { return (el || doc).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(sel)); };
  var dataEl = doc.getElementById('compare-data');
  var dlg = doc.getElementById('cmp');
  var tray = doc.getElementById('cmp-tray');
  if (!dataEl || !dlg || !tray || typeof dlg.showModal !== 'function') {
    $$('[data-compare]').forEach(function (b) { b.hidden = true; });
    return;
  }
  var data = JSON.parse(dataEl.textContent);
  var MAX = 3;
  var byId = {};
  data.tools.forEach(function (t) { byId[t.id] = t; });
  var chips = doc.getElementById('cmp-chips');
  var hint = doc.getElementById('cmp-hint');
  var goBtn = doc.getElementById('cmp-go');
  var diffBtn = doc.getElementById('cmp-diff');
  var body = doc.getElementById('cmp-body');
  var sel = [];
  var diffOnly = false;
  var UN = /לא (אומת|אומתה|נמצא|נמצאה|מוזכרת|נבדק)/;

  function el(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function logo(t) {
    if (!t.l) return null;
    var wrap = el('span', 'logo');
    var mk = function (src, cls) {
      var i = doc.createElement('img');
      i.src = src; i.alt = ''; i.width = 28; i.height = 28; i.decoding = 'async';
      if (cls) i.className = cls;
      return i;
    };
    if (t.ld) { wrap.appendChild(mk(t.l, 'logo-light')); wrap.appendChild(mk(t.ld, 'logo-dark')); }
    else wrap.appendChild(mk(t.l));
    return wrap;
  }
  function say(msg) { hint.textContent = msg || ''; }

  function toggle(id) {
    var i = sel.indexOf(id);
    if (i !== -1) { sel.splice(i, 1); say(''); paint(); return; }
    if (sel.length >= MAX) { say('אפשר להשוות עד ' + MAX + ' כלים. כדאי להסיר אחד קודם.'); return; }
    if (sel.length && byId[sel[0]].cat !== byId[id].cat) { say('משווים רק כלים מאותה קטגוריה.'); return; }
    sel.push(id); say(''); paint();
  }

  function paint() {
    var cat = sel.length ? byId[sel[0]].cat : null;
    $$('[data-compare]').forEach(function (b) {
      var id = b.getAttribute('data-compare');
      var on = sel.indexOf(id) !== -1;
      var off = !on && ((cat !== null && byId[id].cat !== cat) || sel.length >= MAX);
      b.setAttribute('aria-pressed', String(on));
      b.classList.toggle('is-off', off);
      if (off) b.setAttribute('aria-disabled', 'true'); else b.removeAttribute('aria-disabled');
    });
    tray.hidden = sel.length === 0;
    document.documentElement.classList.toggle('cmp-on', sel.length > 0);
    chips.textContent = '';
    sel.forEach(function (id) {
      var li = el('li', 'cmp-chip');
      var lg = logo(byId[id]);
      if (lg) li.appendChild(lg);
      li.appendChild(el('span', 'cmp-chip-n', byId[id].name));
      var x = el('button', 'cmp-chip-x', '✕');
      x.type = 'button';
      x.setAttribute('aria-label', 'הסרת ' + byId[id].name + ' מההשוואה');
      x.addEventListener('click', function () { toggle(id); });
      li.appendChild(x);
      chips.appendChild(li);
    });
    goBtn.disabled = sel.length < 2;
    if (sel.length === 1 && !hint.textContent) say('בחרו עוד כלי אחד לפחות מאותה קטגוריה.');
    if (sel.length >= 2 && sel.length < MAX && /^בחרו/.test(hint.textContent)) say('');
  }

  function same(k, list) {
    var v = list.map(function (t) { return t.r[k] || 'לא אומת'; });
    return v.every(function (x) { return x === v[0]; }) || v.every(function (x) { return UN.test(x); });
  }

  function render() {
    var list = sel.map(function (id) { return byId[id]; });
    body.textContent = '';
    body.style.setProperty('--n', list.length);
    body.setAttribute('role', 'table');
    body.setAttribute('aria-label', 'השוואה בין ' + list.map(function (t) { return t.name; }).join(', '));
    var head = el('div', 'cmp-row cmp-head');
    head.setAttribute('role', 'row');
    head.appendChild(el('div', 'cmp-label'));
    list.forEach(function (t) {
      var c = el('div', 'cmp-cell cmp-tool');
      c.setAttribute('role', 'columnheader');
      var top = el('div', 'cmp-tool-top');
      var lg = logo(t);
      if (lg) top.appendChild(lg);
      var name = el('div', 'cmp-tool-name');
      name.appendChild(el('span', 'num', t.no));
      var b = el('bdi', null, t.name);
      name.appendChild(b);
      top.appendChild(name);
      c.appendChild(top);
      var acts = el('div', 'cmp-acts');
      var more = el('button', 'btn btn-quiet', 'פרטים נוספים');
      more.type = 'button';
      more.addEventListener('click', function () {
        dlg.close();
        var open = $('#tool-' + t.id + ' .btn-open');
        if (open) { open.scrollIntoView({ block: 'center' }); open.click(); }
      });
      var rm = el('button', 'btn btn-quiet', 'הסרה');
      rm.type = 'button';
      rm.addEventListener('click', function () {
        toggle(t.id);
        if (sel.length < 2) dlg.close(); else { setHash(); render(); }
      });
      acts.appendChild(more); acts.appendChild(rm);
      c.appendChild(acts);
      head.appendChild(c);
    });
    body.appendChild(head);
    var shown = 0;
    data.rows.forEach(function (r) {
      var k = r[0], s = same(k, list);
      if (diffOnly && s) return;
      shown++;
      var row = el('div', 'cmp-row' + (s ? '' : ' is-diff'));
      row.setAttribute('role', 'row');
      var lab = el('div', 'cmp-label', r[1]);
      lab.setAttribute('role', 'rowheader');
      row.appendChild(lab);
      list.forEach(function (t) {
        var v = t.r[k] || 'לא אומת';
        var c = el('div', 'cmp-cell' + (UN.test(v) ? ' is-un' : ''), v);
        c.setAttribute('role', 'cell');
        row.appendChild(c);
      });
      body.appendChild(row);
    });
    if (!shown) body.appendChild(el('p', 'cmp-none', 'אין הבדלים בשדות שנבדקו. הכלים זהים בכל מה שמוצג כאן.'));
    diffBtn.setAttribute('aria-pressed', String(diffOnly));
    diffBtn.textContent = diffOnly ? 'הצגת כל השורות' : 'הצגת הבדלים בלבד';
  }

  function setHash() {
    try { history.replaceState(null, '', '#compare=' + sel.join(',')); } catch (e) { /* בלי כתובת */ }
  }
  function openCompare() {
    if (sel.length < 2) return;
    render(); setHash();
    dlg.showModal();
    var sc = $('.sheet-scroll', dlg); if (sc) sc.scrollTop = 0;
    $('#cmp-title').focus({ preventScroll: true });
  }

  $$('[data-compare]').forEach(function (b) {
    b.addEventListener('click', function () { toggle(b.getAttribute('data-compare')); });
  });
  goBtn.addEventListener('click', openCompare);
  doc.getElementById('cmp-clear').addEventListener('click', function () { sel = []; say(''); paint(); });
  diffBtn.addEventListener('click', function () { diffOnly = !diffOnly; render(); });
  dlg.addEventListener('close', function () {
    if (/^#compare=/.test(location.hash)) {
      try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* בלי כתובת */ }
    }
  });

  // קישור משותף: #compare=כלי,כלי,כלי. מקבלים רק כלים קיימים מאותה קטגוריה, עד שלושה.
  function fromHash() {
    var m = /^#compare=([a-z0-9,\-]+)$/i.exec(location.hash);
    if (!m) return;
    var ids = m[1].split(',').filter(function (id, i, a) { return byId[id] && a.indexOf(id) === i; }).slice(0, MAX);
    if (!ids.length) return;
    var cat = byId[ids[0]].cat;
    sel = ids.filter(function (id) { return byId[id].cat === cat; });
    paint();
    if (sel.length >= 2) openCompare();
  }
  paint();
  fromHash();
  window.addEventListener('hashchange', fromHash);
})();
