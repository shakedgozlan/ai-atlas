// התנהגות האתר: חלון הפרטים של כל כלי, מצב כהה, והחלון ״מוצאים כיוון״.
// בלי הקובץ הזה כל התוכן עדיין גלוי: הפרטים מוצגים מתחת לכל כרטיס, בלי חלון ובלי חיפוש.
(function () {
  'use strict';
  var doc = document;
  var root = doc.documentElement;
  var $ = function (sel, el) { return (el || doc).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(sel)); };

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
    if (themeLabel) themeLabel.textContent = dark ? 'מצב בהיר' : 'מצב כהה';
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
    // בחירה בתוצאה סוגרת את החיפוש ופותחת את חלון הפרטים של הכלי
    $$('[data-open-tool]', dialog).forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-open-tool');
        var opener = $('#tool-' + id + ' [data-sheet-open]');
        saveRecent(q.value);
        dialog.close();
        if (!opener) return;
        opener.scrollIntoView({ block: 'center' });
        opener.focus({ preventScroll: true });
        opener.click();
      });
    });
  } else if (openBtn) {
    openBtn.hidden = true;
  }
})();
