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
  var reduceMotion = function () { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; };
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
    $$('[data-sheet-jump]', sheet).forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = doc.getElementById(a.getAttribute('href').slice(1));
        if (!target) return;
        e.preventDefault();
        // גוללים רק את אזור התוכן של החלון, כדי שהכותרת הקבועה לא תזוז
        var scroller = $('.sheet-scroll', sheet);
        var top = target.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 16;
        scroller.scrollTo({ top: Math.max(0, top), behavior: reduceMotion() ? 'auto' : 'smooth' });
        var h = $('h4', target);
        if (h) h.focus({ preventScroll: true });
      });
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

  /* ---------- חיפוש וסינון ---------- */
  var dialog = $('#finder');
  var openBtn = $('#finder-open');
  var q = $('#q');
  var catSel = $('#cat-filter');
  var results = $$('[data-result]');
  var cards = $$('.card');
  var sections = $$('[data-cat-section]');
  var finderCount = $('#finder-count');
  var finderEmpty = $('#finder-empty');
  var resultsList = $('#results');
  var filterBar = $('#filter-bar');
  var filterText = $('#filter-text');
  var pageEmpty = $('#page-empty');
  var total = cards.length;

  function words(n) { return n === 1 ? 'כלי אחד' : n + ' כלים'; }
  function matches(el, terms, cat) {
    if (cat && el.dataset.cat !== cat) return false;
    var hay = el.dataset.search || '';
    return terms.every(function (t) { return hay.indexOf(t) !== -1; });
  }
  function applyFilter() {
    var raw = q ? q.value.trim() : '';
    var terms = raw.toLowerCase().split(/\s+/).filter(Boolean);
    var cat = catSel ? catSel.value : '';
    var active = terms.length > 0 || cat !== '';
    var shown = 0;
    results.forEach(function (li) { li.hidden = !matches(li, terms, cat); });
    cards.forEach(function (card) {
      var ok = matches(card, terms, cat);
      card.hidden = !ok;
      if (ok) shown += 1;
    });
    sections.forEach(function (sec) {
      sec.hidden = !$$('.card', sec).some(function (c) { return !c.hidden; });
    });
    if (finderCount) finderCount.textContent = shown === 0 ? 'אין תוצאות' : (active ? 'נמצאו ' + words(shown) + ' מתוך ' + total : 'כל ' + total + ' הכלים');
    if (finderEmpty) finderEmpty.hidden = shown !== 0;
    if (resultsList) resultsList.hidden = shown === 0;
    if (pageEmpty) pageEmpty.hidden = shown !== 0;
    if (filterBar) {
      filterBar.hidden = !active || shown === 0;
      if (active && filterText) {
        var parts = [];
        if (raw) parts.push('החיפוש ״' + raw + '״');
        if (cat && catSel) parts.push('הקטגוריה ״' + catSel.options[catSel.selectedIndex].text + '״');
        filterText.textContent = 'מוצגים ' + words(shown) + ' מתוך ' + total + ', לפי ' + parts.join(' ולפי ') + '.';
      }
    }
  }
  function clearFilter() {
    if (q) q.value = '';
    if (catSel) catSel.value = '';
    applyFilter();
  }

  if (q) q.addEventListener('input', applyFilter);
  if (catSel) catSel.addEventListener('change', applyFilter);
  var form = $('#finder-form');
  if (form) form.addEventListener('submit', function (e) { e.preventDefault(); });
  var finderClear = $('#finder-clear');
  if (finderClear) finderClear.addEventListener('click', function () { clearFilter(); if (q) q.focus(); });
  var filterClear = $('#filter-clear');
  if (filterClear) filterClear.addEventListener('click', function () { clearFilter(); if (openBtn) openBtn.focus(); });
  var pageEmptyClear = $('#page-empty-clear');
  if (pageEmptyClear) pageEmptyClear.addEventListener('click', function () { clearFilter(); if (openBtn) openBtn.focus(); });

  /* ---------- החלון הקופץ ---------- */
  if (dialog && openBtn && typeof dialog.showModal === 'function') {
    openBtn.addEventListener('click', function () {
      dialog.showModal();
      if (q) q.focus();
    });
    $('#finder-close').addEventListener('click', function () { dialog.close(); });
    // לחיצה מחוץ לחלון סוגרת אותו. מקש היציאה והחזרת המיקוד לכפתור מטופלים על ידי הדפדפן.
    dialog.addEventListener('click', function (e) {
      if (e.target !== dialog) return;
      var r = dialog.getBoundingClientRect();
      var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) dialog.close();
    });
    dialog.addEventListener('close', function () {
      if (!dialog.dataset.jump && openBtn) openBtn.focus();
      delete dialog.dataset.jump;
    });
    $$('[data-jump]', dialog).forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        var target = doc.getElementById(id);
        if (!target) return;
        e.preventDefault();
        if (target.hidden || (target.closest('[data-cat-section]') || {}).hidden) clearFilter();
        dialog.dataset.jump = '1';
        dialog.close();
        var heading = target.matches('.card') ? $('.name', target) : $('h2', target);
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        if (heading) heading.focus({ preventScroll: true });
      });
    });
  } else if (openBtn) {
    openBtn.hidden = true;
  }

  applyFilter();
})();
