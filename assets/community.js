// הצבעות הגולשים ולחצן המשוב.
// הקובץ פועל רק כשכתובת השירות מוגדרת (build/community.config.json). בלי כתובת הוא לא מוסיף דבר לעמוד.
(function () {
  'use strict';
  var doc = document;
  var root = doc.documentElement;
  var meta = doc.querySelector('meta[name="atlas-api"]');
  var API = meta ? String(meta.content || '').replace(/\/+$/, '') : '';
  if (!API || !window.fetch) return;

  // הספים של התג ״בחירת הגולשים״ ושל הצגת המספרים. משנים כאן בלבד.
  var PICK_MIN_VOTES = 20;   // כמה הצבעות לפחות צריך כלי כדי לקבל את התג
  var PICK_MIN_SHARE = 0.7;  // איזה חלק מהמצביעים צריך להמליץ (0.7 הוא 70 אחוז)
  var SHOW_MIN_VOTES = 5;    // מכמה הצבעות מציגים את המספרים

  var $ = function (sel, el) { return (el || doc).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(sel)); };
  function el(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function post(path, body) {
    return fetch(API + path, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().then(function (d) { d.httpStatus = r.status; return d; }); });
  }

  /* ---------- הצבעות ---------- */
  var tallies = {};   // מזהה כלי -> [ממליצים, לא ממליצים]
  var mine = {};      // מה הדפדפן הזה הצביע
  try { mine = JSON.parse(localStorage.getItem('atlas-votes') || '{}') || {}; } catch (e) { mine = {}; }
  function saveMine() { try { localStorage.setItem('atlas-votes', JSON.stringify(mine)); } catch (e) { /* בלי שמירה */ } }
  function tally(id) { var t = tallies[id] || [0, 0]; return { up: t[0], down: t[1], total: t[0] + t[1] }; }
  function isPick(id) { var t = tally(id); return t.total >= PICK_MIN_VOTES && t.up / t.total >= PICK_MIN_SHARE; }

  var PICK_LABEL = 'בחירת הגולשים';
  function pickPill() { return el('li', 'verify tag-pick', PICK_LABEL); }
  // בכרטיס: מי שקיבל את התג מציג רק אותו. בחלון הפרטים התג מצטרף לשאר התגים.
  function paintPick(id) {
    var card = doc.getElementById('tool-' + id);
    if (!card) return;
    var on = isPick(id);
    var top = $('.card-top', card);
    if (top) {
      var own = $('.card-tags-pick', top);
      var rest = $$('.card-tags', top).filter(function (u) { return !u.classList.contains('card-tags-pick'); });
      if (on && !own) {
        own = el('ul', 'card-tags card-tags-pick');
        own.setAttribute('role', 'list'); own.setAttribute('aria-label', 'תגים');
        own.appendChild(pickPill());
        top.appendChild(own);
      } else if (!on && own) { own.remove(); }
      rest.forEach(function (u) { u.hidden = on; });
    }
    var sheet = doc.getElementById('detail-' + id);
    if (!sheet) return;
    $$('.tag-pick', sheet).forEach(function (n) { var u = n.parentNode; n.remove(); if (u.hasAttribute('data-made') && !u.children.length) u.remove(); });
    if (!on) return;
    [['.sheet-tags-head', ' sheet-tags-head', $('.sheet-id', sheet), null], ['.sheet-tags-body', ' sheet-tags-body', $('.sheet-body', sheet), $('.sheet-body > .sheet-row, .sheet-body > .sec-price', sheet)]].forEach(function (x) {
      var list = $(x[0], sheet);
      if (!list && x[2]) {
        list = el('ul', 'card-tags sheet-tags' + x[1]);
        list.setAttribute('role', 'list'); list.setAttribute('aria-label', 'תגים'); list.setAttribute('data-made', '');
        x[2].insertBefore(list, x[3]);
      }
      if (list) list.insertBefore(pickPill(), list.firstChild);
    });
  }
  function paintAllPicks() { $$('.card').forEach(function (c) { paintPick(c.id.replace('tool-', '')); }); }

  function countText(id) {
    var t = tally(id);
    if (t.total < SHOW_MIN_VOTES) return mine[id] ? 'ההצבעה נשמרה. המספרים יוצגו אחרי ' + SHOW_MIN_VOTES + ' הצבעות.' : '';
    return t.up + ' מתוך ' + t.total + ' גולשים ממליצים';
  }
  function paintVote(box) {
    var id = box.getAttribute('data-vote');
    $$('[data-vote-set]', box).forEach(function (b) { b.setAttribute('aria-pressed', String(mine[id] === b.getAttribute('data-vote-set'))); });
    var c = $('.vote-count', box);
    var text = countText(id);
    c.textContent = text; c.hidden = !text;
  }
  // הצבעה אחת, משני מקומות: הכרטיס בדף הראשי וחלון הפרטים. שניהם מתעדכנים יחד.
  var busy = {};
  function paintCardVote(id) {
    var card = doc.getElementById('tool-' + id);
    if (!card) return;
    $$('.card-vote [data-vote-set]', card).forEach(function (b) {
      b.setAttribute('aria-pressed', String(mine[id] === b.getAttribute('data-vote-set')));
      b.disabled = !!busy[id];
    });
  }
  function paintToolVotes(id) {
    paintCardVote(id);
    $$('.vote[data-vote="' + id + '"]').forEach(paintVote);
    paintPick(id);
  }
  // הודעה קצרה שעולה מלמטה אחרי כל הצבעה (בקשת שקד, 19.11.2026). היא מוצגת גם מעל חלון הפרטים הפתוח.
  var toast = null, toastTimer = 0;
  function showToast(text, bad) {
    if (!toast) {
      toast = el('div', 'toast');
      toast.setAttribute('role', 'status'); toast.setAttribute('aria-live', 'polite');
      if ('popover' in toast) toast.setAttribute('popover', 'manual');
      doc.body.appendChild(toast);
    }
    clearTimeout(toastTimer);
    toast.classList.toggle('toast-bad', !!bad);
    toast.innerHTML = '';
    if (!bad) {
      var ic = el('span', 'toast-ico');
      ic.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.500 4.500L19 7.500"/></svg>';
      toast.appendChild(ic);
    }
    toast.appendChild(el('span', '', text));
    // מוציאים ומחזירים לשכבה העליונה, כדי שההודעה תהיה מעל חלון שנפתח אחריה
    try { if (toast.hidePopover && toast.matches(':popover-open')) toast.hidePopover(); if (toast.showPopover) toast.showPopover(); } catch (e) { /* בלי שכבה עליונה ההודעה עדיין מוצגת */ }
    toast.classList.remove('is-on');
    void toast.offsetWidth;
    toast.classList.add('is-on');
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-on');
      setTimeout(function () { try { if (!toast.classList.contains('is-on') && toast.hidePopover && toast.matches(':popover-open')) toast.hidePopover(); } catch (e) { /* כנ״ל */ } }, 260);
    }, bad ? 4500 : 2600);
  }

  function castVote(id, value, say) {
    if (busy[id]) return;
    // לחיצה שנייה על אותה בחירה מבטלת את ההצבעה (בקשת שקד, 19.11.2026)
    if (mine[id] === value) value = 'none';
    busy[id] = true; paintToolVotes(id);
    post('/vote', { tool: Number(id), value: value }).then(function (d) {
      if (d.ok) {
        if (d.mine) mine[id] = d.mine; else delete mine[id];
        saveMine();
        tallies[id] = [d.up, d.down];
        say('');
        showToast(d.mine === 'up' ? 'ההמלצה נשמרה. תודה!' : d.mine === 'down' ? 'ההצבעה נשמרה. תודה!' : 'ההצבעה בוטלה');
      } else {
        var m = d.httpStatus === 429 ? 'נשלחו יותר מדי הצבעות בזמן קצר. אפשר לנסות שוב בעוד שעה.' : 'ההצבעה לא נשמרה. אפשר לנסות שוב.';
        say(m); showToast(m, true);
      }
    }).catch(function () {
      var m = 'אין חיבור לשירות ההצבעות כרגע. אפשר לנסות שוב מאוחר יותר.';
      say(m); showToast(m, true);
    }).then(function () { busy[id] = false; paintToolVotes(id); });
  }

  var THUMB = '<path d="M7.5 10.5v9h-3v-9z"/><path d="M7.5 10.5 11.2 4.3a1.6 1.6 0 0 1 2.9 1.1L13.3 9h5.2a1.8 1.8 0 0 1 1.8 2.1l-1.2 6.8a1.8 1.8 0 0 1-1.8 1.5H7.5"/>';
  function thumbSvg(down) {
    return '<svg class="ico" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"' + (down ? ' style="transform:scaleY(-1)"' : '') + '>' + THUMB + '</svg>';
  }
  // לחצני אגודל בכל כרטיס, מימין ללחצן ״לאתר הרשמי״ וברווח גדול ממנו פי שלושה מהרווח שביניהם (בקשת שקד, 19.11.2026)
  $$('.card').forEach(function (card) {
    var quick = $('.card-quick', card);
    if (!quick) return;
    var id = card.id.replace('tool-', '');
    var nm = $('.name bdi', card);
    var name = nm ? nm.textContent : '';
    var group = el('div', 'card-vote');
    group.setAttribute('role', 'group'); group.setAttribute('aria-label', 'הצבעה על ' + name);
    var live = el('span', 'sr-only'); live.setAttribute('role', 'status');
    [['up', 'ממליץ', false], ['down', 'לא ממליץ', true]].forEach(function (x) {
      var b = el('button', 'btn btn-ico vote-thumb');
      b.type = 'button'; b.title = x[1];
      b.setAttribute('data-vote-set', x[0]); b.setAttribute('aria-pressed', 'false');
      b.innerHTML = thumbSvg(x[2]) + '<span class="sr-only">' + x[1] + ' על ' + name + '</span>';
      b.addEventListener('click', function () {
        castVote(id, x[0], function (msg) {
          b.title = msg || x[1];
        });
      });
      group.appendChild(b);
    });
    group.appendChild(live);
    quick.insertBefore(group, quick.firstChild);
    paintCardVote(id);
  });

  function buildVote(sheet) {
    if ($('.vote', sheet)) return;
    var id = sheet.id.replace('detail-', '');
    var nameEl = $('.sheet-title bdi', sheet);
    var name = nameEl ? nameEl.textContent : '';
    var box = el('section', 'sec vote');
    box.setAttribute('data-vote', id);
    var h = el('div', 'sec-h'); h.appendChild(el('h4', '', 'הכלי הזה שווה המלצה?'));
    var count = el('p', 'vote-count'); count.hidden = true;
    var btns = el('div', 'vote-btns'); btns.setAttribute('role', 'group'); btns.setAttribute('aria-label', 'הצבעה על ' + name);
    var status = el('p', 'vote-status'); status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
    [['up', 'כן, מומלץ'], ['down', 'לא מומלץ']].forEach(function (x) {
      var b = el('button', 'btn vote-btn', x[1]);
      b.type = 'button'; b.setAttribute('data-vote-set', x[0]); b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () { status.textContent = ''; castVote(id, x[0], function (msg) { status.textContent = msg; }); });
      btns.appendChild(b);
    });
    var note = el('p', 'vote-note', 'הצבעה אחת לכל כלי מכל מכשיר. לחיצה נוספת על אותה בחירה מבטלת אותה. כתובת הרשת לא נשמרת: נשמרת רק טביעה מעורבלת שלה, שאי אפשר לשחזר ממנה את הכתובת.');
    var here = el('button', 'btn btn-quiet vote-fb', 'משהו כאן לא מדויק? אפשר לכתוב לנו');
    here.type = 'button';
    here.addEventListener('click', function () { openFeedback({ tool: Number(id), target: 'חלון הפרטים של ' + name, locked: true }); });
    var row = el('div', 'vote-row');
    row.appendChild(btns); row.appendChild(count);
    box.appendChild(h); box.appendChild(row); box.appendChild(status); box.appendChild(note); box.appendChild(here);
    $('.sheet-body', sheet).appendChild(box);
    paintVote(box);
  }
  doc.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-sheet-open]');
    if (!b) return;
    var sheet = doc.getElementById(b.getAttribute('aria-controls'));
    if (sheet) buildVote(sheet);
  }, true);

  fetch(API + '/votes').then(function (r) { return r.json(); }).then(function (d) {
    tallies = (d && d.tools) || {};
    paintAllPicks();
    $$('.vote').forEach(paintVote);
  }).catch(function () { /* בלי ספירה: ההצבעה עדיין אפשרית */ });

  // התג החדש מצטרף למקרא התגים
  var legend = $('.legend-list');
  if (legend) {
    var li = el('li');
    li.appendChild(el('span', 'verify tag-pick', PICK_LABEL));
    li.appendChild(el('span', 'legend-text', 'לפחות ' + PICK_MIN_VOTES + ' גולשים הצביעו, ו־' + Math.round(PICK_MIN_SHARE * 100) + ' אחוז מהם או יותר ממליצים. בכרטיס הוא מחליף את שאר התגים, ובחלון הפרטים מוצגים כולם.'));
    legend.insertBefore(li, legend.firstChild);
  }

  /* ---------- משוב ---------- */
  var ICON_FB = '<svg class="ico" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5h16v11H9.5L5 20v-3.500H4z"/><path d="M8.500 9.500h7M8.500 12.500h4.500"/></svg>';
  var REGIONS = [['.filters', 'אזור הסינון'], ['.legend', 'מקרא התגים'], ['.hero', 'ראש העמוד'], ['.foot', 'תחתית העמוד'], ['.bar', 'הסרגל העליון']];
  var IMAGE_MAX = 1200000; // תווים, מעט מתחת לתקרה של השירות
  var state = { tool: null, target: '', locked: false, image: '', kind: 'bug' };

  var fab = el('button', 'fb-fab');
  fab.type = 'button'; fab.id = 'fb-open'; fab.setAttribute('aria-haspopup', 'dialog');
  fab.innerHTML = ICON_FB + '<span class="fb-fab-t">משוב</span>';
  fab.title = 'באג, תכונה חסרה או רעיון לשיפור';
  doc.body.appendChild(fab);
  // במובייל הלחצן נעלם בזמן גלילה וחוזר כשהיא נעצרת, כך שהוא לא מכסה פינה של כרטיס
  var fabTimer = 0, fabMobile = window.matchMedia('(max-width:759px)');
  window.addEventListener('scroll', function () {
    if (!fabMobile.matches) return;
    fab.classList.add('fb-away');
    clearTimeout(fabTimer);
    fabTimer = setTimeout(function () { fab.classList.remove('fb-away'); }, 700);
  }, { passive: true });

  var dlg = el('dialog', 'fb');
  dlg.id = 'fb'; dlg.setAttribute('aria-labelledby', 'fb-h');
  dlg.innerHTML =
    '<form class="fb-form" id="fb-form" novalidate>' +
      '<div class="fb-top"><h2 id="fb-h" tabindex="-1">משוב על האתר</h2><button type="button" class="btn btn-icon fb-x" id="fb-close"><svg class="ico" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg><span class="sr-only">סגירה</span></button></div>' +
      '<p class="fb-lede">מצאתם באג, חסרה תכונה או יש רעיון לשיפור? כותבים כאן. אפשר לשלוח אנונימית. ואם אתם רוצים לשמוע כשזה טופל, אפשר להשאיר מייל.</p>' +
      '<div class="fb-kinds" role="group" aria-label="סוג ההודעה">' +
        [['bug', 'באג'], ['feature', 'תכונה שחסרה'], ['idea', 'רעיון לשיפור'], ['report', 'דיווח על כלי'], ['other', 'משהו אחר']].map(function (k, i) { return '<button type="button" class="btn short" data-kind="' + k[0] + '" aria-pressed="' + (i === 0) + '">' + k[1] + '</button>'; }).join('') +
      '</div>' +
      '<label class="fb-l" for="fb-text">מה רציתם לספר?</label>' +
      '<textarea id="fb-text" name="text" rows="5" maxlength="2000" dir="auto" required></textarea>' +
      '<input type="text" name="website" class="fb-trap" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<div class="fb-box"><p class="fb-l" id="fb-pin-h">על מה ההודעה?</p><p class="fb-pin" id="fb-pin"></p>' +
        '<div class="fb-acts"><button type="button" class="btn" id="fb-pick">סימון חלק בעמוד</button><button type="button" class="btn btn-quiet" id="fb-unpin" hidden>הסרת הסימון</button></div></div>' +
      '<div class="fb-box"><p class="fb-l">תמונה (לא חובה)</p><img class="fb-img" id="fb-img" alt="התמונה שתצורף להודעה" hidden>' +
        '<div class="fb-acts"><label class="btn fb-file"><input type="file" id="fb-file" accept="image/*" class="sr-only"><span id="fb-file-t">צירוף תמונה</span></label><button type="button" class="btn btn-quiet" id="fb-noimg" hidden>הסרת התמונה</button></div></div>' +
      '<div class="fb-box"><label class="fb-l" for="fb-contact">מייל לעדכון (לא חובה)</label><input type="email" id="fb-contact" name="contact" maxlength="120" dir="ltr" autocomplete="email" inputmode="email"><p class="fb-note">נשתמש בו רק כדי לכתוב לכם כשההודעה טופלה, והוא נמחק מיד אחר כך.</p></div>' +
      '<p class="fb-status" id="fb-status" role="status" aria-live="polite"></p>' +
      '<div class="fb-send"><button type="submit" class="btn btn-primary" id="fb-submit">שליחה</button><button type="button" class="btn" id="fb-cancel">ביטול</button></div>' +
      '<p class="fb-note">שם וכתובת רשת לא נשמרים. מייל נשמר רק אם השארתם אותו. סוג הדפדפן וגודל המסך מצורפים להודעה, כדי שאפשר יהיה לשחזר תקלות.</p>' +
    '</form>' +
    '<div class="fb-done" id="fb-done" hidden><h2 tabindex="-1" id="fb-done-h">תודה, ההודעה התקבלה</h2><p>כל הודעה נקראת. אין צורך לשלוח שוב.</p><button type="button" class="btn btn-primary" id="fb-done-close">סגירה</button></div>';
  doc.body.appendChild(dlg);
  if (typeof dlg.showModal !== 'function') { fab.hidden = true; return; }

  var form = $('#fb-form'), done = $('#fb-done'), text = $('#fb-text'), statusEl = $('#fb-status');
  function say(t, bad) { statusEl.textContent = t; if (bad) statusEl.setAttribute('data-bad', ''); else statusEl.removeAttribute('data-bad'); statusEl.setAttribute('role', bad ? 'alert' : 'status'); }
  var pinEl = $('#fb-pin'), pickBtn = $('#fb-pick'), unpinBtn = $('#fb-unpin');
  var img = $('#fb-img'), fileIn = $('#fb-file'), noImg = $('#fb-noimg'), fileT = $('#fb-file-t');
  var kindBtns = $$('[data-kind]', dlg);

  function paintFb() {
    pinEl.textContent = state.target || 'האתר כולו';
    unpinBtn.hidden = !state.target || state.locked;
    pickBtn.hidden = state.locked;
    pickBtn.textContent = state.target ? 'סימון חלק אחר' : 'סימון חלק בעמוד';
    img.hidden = !state.image;
    if (state.image) img.src = state.image; else img.removeAttribute('src');
    noImg.hidden = !state.image;
    fileT.textContent = state.image ? 'החלפת התמונה' : 'צירוף תמונה';
    kindBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-kind') === state.kind)); });
  }
  function openFeedback(opt) {
    opt = opt || {};
    if (!opt.keep) {
      state.tool = opt.tool || null; state.target = opt.target || ''; state.locked = !!opt.locked; state.image = '';
      say('');
    }
    form.hidden = false; done.hidden = true;
    paintFb();
    if (!dlg.open) dlg.showModal();
    text.focus();
  }
  fab.addEventListener('click', function () { openFeedback(); });
  function closeFb() { if (dlg.open) dlg.close(); }
  $('#fb-close').addEventListener('click', closeFb);
  $('#fb-cancel').addEventListener('click', closeFb);
  $('#fb-done-close').addEventListener('click', function () { closeFb(); text.value = ''; });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closeFb(); });
  // בפלאפון: גרירה למטה מהרצועה העליונה של החלון סוגרת אותו, כמו בחלון הפרטים
  if (window.atlasDragToClose) window.atlasDragToClose(dlg, dlg, function (e) { return dlg.scrollTop === 0 && e.touches[0].clientY - dlg.getBoundingClientRect().top < 72; });
  kindBtns.forEach(function (b) { b.addEventListener('click', function () { state.kind = b.getAttribute('data-kind'); paintFb(); }); });
  unpinBtn.addEventListener('click', function () { state.tool = null; state.target = ''; state.image = ''; paintFb(); });
  noImg.addEventListener('click', function () { state.image = ''; fileIn.value = ''; paintFb(); });

  // כיווץ תמונה: מקטינים ומורידים איכות עד שהיא נכנסת לתקרה
  function shrink(src) {
    return new Promise(function (resolve, reject) {
      var im = new Image();
      im.onload = function () {
        var side = 1600, q = 0.82, out = '';
        for (var i = 0; i < 6; i++) {
          var k = Math.min(1, side / Math.max(im.naturalWidth, im.naturalHeight));
          var c = doc.createElement('canvas');
          c.width = Math.max(1, Math.round(im.naturalWidth * k)); c.height = Math.max(1, Math.round(im.naturalHeight * k));
          var g = c.getContext('2d');
          g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
          g.drawImage(im, 0, 0, c.width, c.height);
          out = c.toDataURL('image/jpeg', q);
          if (out.length <= IMAGE_MAX) return resolve(out);
          side = Math.round(side * 0.75); q -= 0.08;
        }
        reject(new Error('too big'));
      };
      im.onerror = function () { reject(new Error('not an image')); };
      im.src = src;
    });
  }
  fileIn.addEventListener('change', function () {
    var f = fileIn.files && fileIn.files[0];
    if (!f) return;
    if (!/^image\//.test(f.type)) { say('אפשר לצרף רק קובץ תמונה.', true); fileIn.value = ''; return; }
    var url = URL.createObjectURL(f);
    shrink(url).then(function (d) { state.image = d; say(''); }, function () { say('התמונה לא נקראה. אפשר לנסות תמונה אחרת.', true); })
      .then(function () { URL.revokeObjectURL(url); paintFb(); });
  });

  // צילום אוטומטי של החלק שסומן. הספרייה נטענת רק כשמסמנים, כדי לא להכביד על העמוד.
  var shotLib = null;
  function loadShot() {
    if (shotLib) return shotLib;
    shotLib = new Promise(function (resolve, reject) {
      var s = doc.createElement('script');
      var base = (doc.querySelector('script[src*="community.js"]') || {}).src || '';
      s.src = base.replace(/community\.js.*$/, 'vendor/modern-screenshot.js');
      s.onload = function () { window.modernScreenshot ? resolve(window.modernScreenshot) : reject(new Error('no lib')); };
      s.onerror = function () { reject(new Error('load failed')); };
      doc.head.appendChild(s);
    });
    return shotLib;
  }
  function capture(node) {
    var limit = new Promise(function (_, reject) { setTimeout(function () { reject(new Error('timeout')); }, 8000); });
    // תמונות שעוד לא נטענו (למשל הלוגו של המצב הכהה) היו מעכבות את הצילום, ולכן טוענים אותן מיד
    $$('img[loading="lazy"]', node).forEach(function (im) { im.loading = 'eager'; });
    var work = loadShot().then(function (lib) {
      return lib.domToJpeg(node, {
        timeout: 4000,
        quality: 0.85,
        scale: Math.min(2, window.devicePixelRatio || 1),
        backgroundColor: getComputedStyle(doc.body).backgroundColor,
        filter: function (n) { return !(n.tagName === 'DIALOG' || (n.classList && (n.classList.contains('fb-fab') || n.classList.contains('fb-pickbar')))); },
      });
    }).then(shrink);
    return Promise.race([work, limit]);
  }

  // מצב סימון: החלון נסגר, ולחיצה על כרטיס או על אזור בעמוד מצמידה אליו את ההודעה
  var pickBar = null;
  function findTarget(n) {
    var card = n.closest && n.closest('.card');
    if (card) {
      var nm = $('.name bdi', card);
      return { node: $('.card-head', card) || card, tool: Number(card.id.replace('tool-', '')), target: 'הכרטיס של ' + (nm ? nm.textContent : card.id) };
    }
    for (var i = 0; i < REGIONS.length; i++) {
      var r = n.closest && n.closest(REGIONS[i][0]);
      if (r) return { node: r, tool: null, target: REGIONS[i][1] };
    }
    return null;
  }
  function onPickClick(e) {
    if (pickBar && pickBar.contains(e.target)) return;
    e.preventDefault(); e.stopPropagation();
    var t = findTarget(e.target);
    if (!t) return;
    stopPick();
    state.tool = t.tool; state.target = t.target; state.image = '';
    openFeedback({ keep: true });
    say('מצלם את החלק שסומן…');
    capture(t.node).then(function (d) {
      if (state.target !== t.target) return;
      state.image = d; say('צילום של החלק שסומן צורף. אפשר להסיר או להחליף אותו.');
    }, function () {
      say('הסימון נשמר. הצילום האוטומטי לא הצליח, אפשר לצרף תמונה ידנית.');
    }).then(paintFb);
  }
  function onPickKey(e) { if (e.key === 'Escape') { stopPick(); openFeedback({ keep: true }); } }
  function onPickOver(e) {
    $$('.fb-hot').forEach(function (n) { n.classList.remove('fb-hot'); });
    var t = findTarget(e.target);
    if (t && !(pickBar && pickBar.contains(e.target))) t.node.classList.add('fb-hot');
  }
  function stopPick() {
    root.classList.remove('fb-picking');
    doc.removeEventListener('click', onPickClick, true);
    doc.removeEventListener('keydown', onPickKey, true);
    doc.removeEventListener('mouseover', onPickOver, true);
    $$('.fb-hot').forEach(function (n) { n.classList.remove('fb-hot'); });
    if (pickBar) { pickBar.remove(); pickBar = null; }
  }
  pickBtn.addEventListener('click', function () {
    closeFb();
    root.classList.add('fb-picking');
    pickBar = el('div', 'fb-pickbar');
    pickBar.setAttribute('role', 'status');
    pickBar.appendChild(el('span', '', 'לוחצים על הכרטיס או על האזור שההודעה עוסקת בו'));
    var cancel = el('button', 'btn', 'ביטול');
    cancel.type = 'button';
    cancel.addEventListener('click', function () { stopPick(); openFeedback({ keep: true }); });
    pickBar.appendChild(cancel);
    doc.body.appendChild(pickBar);
    // ההאזנה מתחילה אחרי הלחיצה הנוכחית, כדי שהיא עצמה לא תיחשב כסימון
    setTimeout(function () {
      doc.addEventListener('click', onPickClick, true);
      doc.addEventListener('keydown', onPickKey, true);
      doc.addEventListener('mouseover', onPickOver, true);
      cancel.focus();
    }, 0);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var body = text.value.trim();
    if (body.length < 3) { say('צריך לכתוב כמה מילים לפני השליחה.', true); text.focus(); return; }
    var contact = form.elements.contact.value.trim();
    if (contact && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) { say('כתובת המייל לא נראית תקינה. אפשר לתקן אותה או להשאיר את השדה ריק.', true); form.elements.contact.focus(); return; }
    var submit = $('#fb-submit');
    submit.disabled = true; say('שולח…');
    post('/feedback', {
      kind: state.kind, text: body, tool: state.tool, target: state.target, image: state.image, contact: contact,
      website: form.elements.website.value,
      context: { w: window.innerWidth, h: window.innerHeight, theme: root.dataset.theme || 'auto', view: root.dataset.view || 'cards', ua: String(navigator.userAgent).slice(0, 200) },
    }).then(function (d) {
      if (d.ok) {
        form.hidden = true; done.hidden = false; text.value = ''; form.elements.contact.value = ''; state.image = ''; say('');
        $('#fb-done-h').focus();
      } else if (d.httpStatus === 429) {
        say('נשלחו כמה הודעות בזמן קצר. אפשר לשלוח שוב בעוד שעה.', true);
      } else if (d.error === 'bad_contact') {
        say('כתובת המייל לא התקבלה. אפשר לתקן אותה או להשאיר את השדה ריק.', true);
      } else if (d.error === 'bad_image') {
        say('התמונה לא התקבלה. אפשר להסיר אותה ולשלוח שוב.', true);
      } else {
        say('ההודעה לא נשלחה. אפשר לנסות שוב.', true);
      }
    }).catch(function () {
      say('לא הצלחנו להתחבר לשירות, ולכן ההודעה לא נשלחה. הטקסט נשאר כאן, אפשר לנסות שוב בעוד כמה דקות.', true);
    }).then(function () { submit.disabled = false; });
  });
})();
