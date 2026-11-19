// בונה את index.html מתוך data/tools.json.
// קובץ הנתונים הוא המקור היחיד: שדה ריק לא מוצג, ושום דבר לא מושלם כאן ביד.
// הרצה: node build/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = process.env.ATLAS_DATA || join(root, 'data/tools.json');
const outPath = process.env.ATLAS_OUT || join(root, 'index.html');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));

// חותמת גרסה לקובצי העיצוב וההתנהגות: משתנה כשהתוכן משתנה, כדי שהדפדפן לא יציג דף חדש עם קבצים ישנים מהזיכרון.
const stamp = (rel) => createHash('sha256').update(readFileSync(new URL(rel, import.meta.url))).digest('hex').slice(0, 10);
const cssV = stamp('../assets/style.css');
const jsV = stamp('../assets/app.js');
// הצבעות ומשוב: פועלים רק כשכתובת השירות כתובה ב־build/community.config.json. כתובת ריקה מכבה אותם לגמרי.
const communityApi = String(process.env.ATLAS_API ?? JSON.parse(readFileSync(new URL('./community.config.json', import.meta.url), 'utf8')).api ?? '').trim();
// Google Analytics: נטען רק כשיש מזהה מדידה ב־build/analytics.config.json (או במשתנה ATLAS_GA_ID).
// מזהה ריק משאיר את האתר בלי שום קוד מדידה.
const gaId = String(process.env.ATLAS_GA_ID ?? JSON.parse(readFileSync(new URL('./analytics.config.json', import.meta.url), 'utf8')).measurement_id ?? '').trim();
if (gaId && !/^G-[A-Z0-9]{4,20}$/.test(gaId)) throw new Error('מזהה המדידה של Google Analytics לא תקין: ' + gaId);
const gaHtml = gaId ? `
<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}')</script>` : '';
const comCssV = stamp('../assets/community.css');
const comJsV = stamp('../assets/community.js');

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const has = (v) => v !== null && v !== undefined && String(v).trim() !== '';
const pad = (n) => String(n).padStart(2, '0');
const MONTHS = ['בינואר', 'בפברואר', 'במרץ', 'באפריל', 'במאי', 'ביוני', 'ביולי', 'באוגוסט', 'בספטמבר', 'באוקטובר', 'בנובמבר', 'בדצמבר'];
const dateShort = (iso) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ''); return m ? `${+m[3]}.${+m[2]}.${m[1]}` : String(iso ?? ''); };
const dateLong = (iso) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ''); return m ? `${+m[3]} ${MONTHS[+m[2] - 1]} ${m[1]}` : String(iso ?? ''); };
const countTools = (n) => (n === 1 ? 'כלי אחד' : `${n} כלים`);
const CURRENCY = { USD: 'דולר', EUR: 'אירו', GBP: 'לירות שטרלינג', CNY: 'יואן', ILS: 'שקלים' };
const num = (n) => Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 });

const ICON = {
  chev: '<svg class="ico chev" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  search: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>',
  expand: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4.5h5.5V10"/><path d="M19.5 4.5 13 11"/><path d="M10 19.5H4.5V14"/><path d="M4.5 19.5 11 13"/></svg>',
  price: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 12.2V4.5h7.7l9.3 9.3-7.7 7.7-9.3-9.3Z"/><path d="M8 8.9v.2"/></svg>',
  good: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.25"/><path d="m7.75 12.4 2.9 2.9 5.6-6.1"/></svg>',
  warn: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6 2.6 19.8h18.8L12 3.6Z"/><path d="M12 10v4.6"/><path d="M12 17.1v.2"/></svg>',
  chevron: '<svg class="ico chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  ext: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 4.5h6v6"/><path d="M19.5 4.5 11 13"/><path d="M18.5 14v4a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V7A1.5 1.5 0 0 1 6 5.5h4"/></svg>',
  close: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  viewCards: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4.5" width="6.5" height="15" rx="1.5"/><rect x="13.5" y="4.5" width="6.5" height="15" rx="1.5"/></svg>',
  viewIndex: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 6.5h15M4.5 12h15M4.5 17.5h15"/></svg>',
  viewGallery: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="4.5" width="6" height="6" rx="1.2"/><rect x="13.5" y="4.5" width="6" height="6" rx="1.2"/><rect x="4.5" y="13.5" width="6" height="6" rx="1.2"/><rect x="13.5" y="13.5" width="6" height="6" rx="1.2"/></svg>',
  dots: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle class="fill" cx="12" cy="5" r="1.7"/><circle class="fill" cx="12" cy="12" r="1.7"/><circle class="fill" cx="12" cy="19" r="1.7"/></svg>',
  sun: '<svg class="ico ico-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3 7 7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7"/></svg>',
  moon: '<svg class="ico ico-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.2A8.3 8.3 0 0 1 9.8 4a8.3 8.3 0 1 0 10.2 10.2Z"/></svg>',
  vFull: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7"/></svg>',
  vPart: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 0 0 17Z" class="fill"/></svg>',
  vNone: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M8 12h8"/></svg>',
};

const catById = new Map(data.categories.map((c) => [c.id, c]));
const toolsByCat = new Map();
for (const t of data.tools) {
  if (!toolsByCat.has(t.category_id)) toolsByCat.set(t.category_id, []);
  toolsByCat.get(t.category_id).push(t);
}
for (const list of toolsByCat.values()) list.sort((a, b) => a.id - b.id);
const liveCats = data.categories.filter((c) => toolsByCat.has(c.id));
/* מספור לפי סדר ההצגה: סדר הקטגוריות, ובתוך כל קטגוריה סדר הכלים */
{ let n = 0; for (const c of liveCats) for (const t of toolsByCat.get(c.id)) t.no = ++n; }

/* ---------- כרטיס ---------- */

function logoHtml(t) {
  const l = t.logo || {};
  if (!has(l.file)) return '';
  const alt = `הלוגו של ${t.name}`;
  if (has(l.file_dark)) {
    return `<span class="logo"><img class="logo-light" src="${esc(l.file)}" alt="${esc(alt)}" width="56" height="56" loading="lazy" decoding="async"><img class="logo-dark" src="${esc(l.file_dark)}" alt="${esc(alt)}" width="56" height="56" loading="lazy" decoding="async"></span>`;
  }
  return `<span class="logo"><img src="${esc(l.file)}" alt="${esc(alt)}" width="56" height="56" loading="lazy" decoding="async"></span>`;
}

function priceLine(t) {
  const p = t.pricing || {};
  const v = p.verification;
  let text;
  if (has(p.summary_line)) text = esc(p.summary_line);
  else if (v === 'אומת חלקית') text = 'הפירוט בפרטים הנוספים.';
  else text = 'תמחור לא אומת.';
  // תקציר לסריקה מהירה: היתרון הראשון, המגבלה הראשונה ושורת המחיר. הכול מקובץ הנתונים.
  const pro = (t.strengths || [])[0]?.lead;
  const con = (t.limitations || [])[0]?.lead;
  const row = (cls, icon, label, value) => `<div class="sum-row ${cls}"><dt>${icon}${label}</dt><dd>${value}</dd></div>`;
  return `<dl class="sum">${has(pro) ? row('sum-pro', ICON.good, 'יתרון', esc(pro)) : ''}${has(con) ? row('sum-con', ICON.warn, 'חשוב לדעת', esc(con)) : ''}${row('sum-price', ICON.price, 'מחיר', `<span class="price-text">${text}</span>`)}</dl>`;
}

// תג ״מודל חדש״ בכרטיס: מוצג רק כשתאריך הגרסה האחרונה, כפי שנאסף במחקר, חל ב־90 הימים שלפני יום הבדיקה.
// התאריך נשמר בנתונים כפי שנכתב במקור, ולכן מנרמלים אותו לפני הקריאה. תאריך שלא נקרא לא מקבל תג.
const NEW_DAYS = 90;
function versionDate(t) {
  const raw = String(t.filters?.new_notable?.latest_version_date || '').replace(/([A-Za-z]{3,})\./, '$1').replace(/^(\d{4})\.(\d{2})\.(\d{2})$/, '$1-$2-$3');
  const ms = Date.parse(raw);
  return Number.isNaN(ms) ? null : ms;
}
function isNewModel(t) {
  const ms = versionDate(t);
  const snap = Date.parse(data.snapshot_date);
  if (ms == null || !has(t.filters?.new_notable?.latest_version)) return false;
  const days = (snap - ms) / 86400000;
  if (days < 0 || days > NEW_DAYS) return false;
  return true;
}

// שאר התגים בכרטיס. כל תג נקבע לפי כלל קבוע שמתועד ב־research/tags.md, ומוצג רק כשיש לו ראיה בנתונים.
const CHEAP_MAX = 10;
// סדר התגים הוא סדר החשיבות. בכרטיס מוצגים שני הראשונים בלבד (בקשת שקד), ובחלון הפרטים כולם.
const TAGS = [
  ['recommended', 'מומלץ', 'לפחות שני מקורות עצמאיים ממליצים עליו, ואין תלונה חמורה שחוזרת על התוצר עצמו'],
  ['popular', 'פופולרי', 'מהכלים שהכי הרבה משתמשים בהם, לפי נתוני שימוש חיצוניים'],
  ['free', 'חינם משתלם', 'תוכנית חינמית שמתחדשת, נותנת תוצר שמיש ומספיקה לשימוש אמיתי'],
  ['new', 'מודל חדש', 'גרסה שיצאה ב־90 הימים האחרונים'],
];
const CARD_TAGS_MAX = 2;
function toolTags(t) {
  const g = t.filters?.tags || {};
  const sp = t.filters?.starting_price || {};
  // החלטת שקד (19.11.2026): ארבעה תגים. ״מחיר נמוך״ ירד, ״בולט בסקירות״ הוחלף ב״מומלץ״.
  // ״מומלץ״ מוצג רק כשהשדה קיים בנתונים; עד אז אף כלי לא מקבל אותו.
  const on = {
    recommended: g.recommended?.value === true,
    popular: g.popular?.value === true,
    free: g.free_plan?.worthwhile === true,
    new: isNewModel(t),
  };
  return TAGS.filter(([k]) => on[k]);
}
// שתי דרגות לאזהרה (החלטת שקד, 19.11.2026): תלונה על חיוב, החזר, תמיכה או חשבון מוצגת בשקט,
// ותלונה על התוצר עצמו מוצגת כפס בולט. החלוקה לפי סוג התלונה שבקובץ הנתונים.
const WATCH_QUIET = new Set(['bot_support', 'account_block', 'billing_surprise', 'no_refund']);
// שלוש דרגות, כולן מתוך קובץ הנתונים (בקשת שקד, 19.11.2026):
// 3 = תלונה על התוצר עצמו שהדיווחים עליה נספרו אחד אחד, 2 = תלונה על התוצר לפי סיכום דוח המחקר,
// 1 = תלונה על חיוב, החזר, תמיכה או חשבון.
const WATCH_LEVELS = [
  [3, 'מהותי', 'בעיה בתוצר עצמו, והדיווחים עליה נספרו אחד אחד'],
  [2, 'בינוני', 'בעיה בתוצר עצמו, לפי סיכום דוח המחקר ובלי ספירה של כל דיווח'],
  [1, 'קל', 'תלונות על חיוב, החזרים, תמיכה או חשבון, ולא על התוצר'],
];
const watchLevel = (t) => {
  const w = t.filters?.watch_out;
  if (WATCH_QUIET.has(w?.type_id)) return 1;
  return w?.evidence?.strength === 'נספר' ? 3 : 2;
};
const watchName = (n) => WATCH_LEVELS.find((x) => x[0] === n)[1];
// שלושה פסים קטנים ליד הכותרת, כדי שהדרגה לא תישען על צבע בלבד
const watchBars = (n) => `<span class="watch-bars" aria-hidden="true">${[1, 2, 3].map((k) => `<i${k <= n ? ' class="on"' : ''}></i>`).join('')}</span>`;
function watchHtml(t) {
  const w = String(t.filters?.watch_out?.text || '').trim();
  if (!w) return '';
  const n = watchLevel(t);
  return `<p class="watch watch-${n}"><span class="watch-k">שימו לב${watchBars(n)}<span class="sr-only"> (${watchName(n)})</span></span><span class="watch-t">${esc(w)}</span></p>`;
}

function evidenceLinks(ev) {
  const src = (ev?.sources || []).filter((x) => has(x.url));
  if (!src.length) return '';
  return src.map((x) => `<a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer"><bdi>${esc(x.name || x.url)}</bdi><span class="sr-only"> (נפתח בלשונית חדשה)</span></a>`).join('<span aria-hidden="true">, </span>');
}
function sheetNotesHtml(t) {
  const w = t.filters?.watch_out;
  const r = t.filters?.tags?.recommended;
  const out = [];
  if (w && String(w.text || '').trim()) {
    const links = evidenceLinks(w.evidence);
    const strength = w.evidence?.strength === 'נספר'
      ? 'הדיווחים נספרו אחד אחד.'
      : 'לפי סיכום דוח המחקר, בלי ספירה של כל דיווח.';
    out.push(`<div class="note note-watch note-w${watchLevel(t)}"><p class="note-h">שימו לב${watchBars(watchLevel(t))}<span class="sr-only"> (${watchName(watchLevel(t))})</span></p><p class="note-t">${esc(w.text)}</p><p class="note-src">${links ? `מקור: ${links}. ` : ''}${strength}</p></div>`);
  }
  if (r?.value === true && has(r.basis)) {
    const links = evidenceLinks(r.evidence);
    out.push(`<div class="note note-rec"><p class="note-h">למה מומלץ</p><p class="note-t">${esc(r.basis)}</p>${links ? `<p class="note-src">מקורות: ${links}.</p>` : ''}</div>`);
  }
  return out.length ? `<div class="sheet-notes">${out.join('')}</div>` : '';
}
const tagPill = ([k, label]) => `<li class="verify tag-${k}">${label}</li>`;
function tagsHtml(t, max = CARD_TAGS_MAX, cls = '') {
  const items = toolTags(t).slice(0, max).map(tagPill).join('');
  return items ? `<ul class="card-tags${cls}" role="list" aria-label="תגים">${items}</ul>` : '';
}
const legendHtml = `<details class="legend" id="legend"><summary class="btn legend-btn"><span>מקרא</span></summary><div class="legend-cols"><div class="legend-col"><h3 class="legend-h">תגים</h3><ul class="legend-list" role="list">${TAGS.map((x) => `<li><span class="verify tag-${x[0]}">${x[1]}</span><span class="legend-text">${x[2]}</span></li>`).join('')}</ul></div><div class="legend-col"><h3 class="legend-h">דרגות ״שימו לב״</h3><ul class="legend-list" role="list">${WATCH_LEVELS.map((x) => `<li><span class="watch watch-${x[0]} watch-sample"><span class="watch-k">${x[1]}${watchBars(x[0])}</span></span><span class="legend-text">${x[2]}</span></li>`).join('')}</ul></div></div></details>`;

function verifyPill(t) {
  const p = t.pricing || {};
  const v = p.verification;
  const mark = v === 'אומת ממקור רשמי' ? ['full', ICON.vFull] : v === 'אומת חלקית' ? ['part', ICON.vPart] : ['none', ICON.vNone];
  const label = !has(p.summary_line) && v !== 'אומת חלקית' ? 'מחיר לא אומת' : v === 'אומת ממקור רשמי' ? 'מחיר אומת' : v === 'אומת חלקית' ? 'מחיר אומת חלקית' : 'מחיר לא אומת';
  // התווית מוצגת רק כשהמחיר אומת במלואו. מה שלא אומת מפורט בתוך ״כל הפרטים״.
  if (mark[0] !== 'full') return '';
  return `<span class="verify verify-${mark[0]}">${mark[1]}${label}</span>`;
}

function point(x) {
  const inf = x.inference ? ' <span class="tag">הסקה</span>' : '';
  const dot = /[.!?:]$/.test(String(x.lead).trim()) ? '' : '.';
  return `<li><strong class="lead">${esc(x.lead)}${dot}</strong>${inf} <span class="detail">${esc(x.detail)}</span></li>`;
}

function planHtml(p, attr = '', name = p.name) {
  const cur = has(p.currency) ? CURRENCY[p.currency] || p.currency : '';
  let main;
  if (p.price === 0) {
    main = 'חינם';
  } else if (p.price !== null && p.price !== undefined) {
    main = `${num(p.price)}${cur ? ' ' + cur : ''}${has(p.price_period) ? ' ' + p.price_period : ''}`;
  } else {
    main = p.price_text;
  }
  const terms = [];
  if (has(p.billing)) terms.push(`חיוב ${p.billing}`);
  if (has(p.per)) terms.push(p.per);
  if ((p.price === null || p.price === undefined) && has(p.price_period)) terms.push(`המחיר נקוב ${p.price_period}`);
  const head = `<p class="plan-head"><bdi class="plan-name">${esc(name)}</bdi><span class="plan-price">${esc(main)}</span></p>`;
  const termLine = terms.length ? `<p class="plan-terms">${esc(terms.join(', '))}</p>` : '';
  const inc = has(p.includes) ? `<p class="plan-inc">${esc(p.includes)}</p>` : '';
  const notes = has(p.notes) ? `<p class="plan-notes">${esc(p.notes)}</p>` : '';
  return `<li class="plan"${attr}>${head}${termLine}${inc}${notes}</li>`;
}

const block = (title, inner) => (inner ? `<section class="fact"><h5>${title}</h5>${inner}</section>` : '');
const para = (v) => (has(v) ? `<p>${esc(v)}</p>` : '');
const sub = (label, v) => (has(v) ? `<p><span class="sub">${label}:</span> ${esc(v)}</p>` : '');

function sourcesHtml(t) {
  if (!t.sources?.length) return '';
  const items = t.sources.map((s) => {
    const bits = [s.official ? 'מקור רשמי' : 'מקור לא רשמי'];
    if (has(s.published)) bits.push(`פורסם ב־${dateShort(s.published)}`);
    if (has(s.checked)) bits.push(`נבדק ב־${dateShort(s.checked)}`);
    const stale = s.stale ? '<span class="tag tag-stale">מקור ישן</span> ' : '';
    return `<li class="src"><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}<span class="sr-only"> (נפתח בלשונית חדשה)</span></a><span class="src-meta">${stale}${esc(bits.join(', '))}</span></li>`;
  }).join('');
  return `<ol class="sources">${items}</ol>`;
}

// חלון הפרטים של כלי: נפתח על כל המסך, והתוכן מחולק לחמש קבוצות קבועות.
// קבוצה בלי תוכן בקובץ הנתונים לא מוצגת, וגם הקישור אליה בשורת הניווט לא מוצג.
const unverified = (v) => /לא אומת/.test(String(v ?? ''));
const planUnverified = (p) => (p.price === null || p.price === undefined) && (!has(p.price_text) || unverified(p.price_text));
// האטלס פונה ליוצרים ולסטודנטים, ולכן תוכניות לארגונים בהצעת מחיר לא מוצגות.
// גם תוכניות לצוותים לא מוצגות (החלטת שקד, 19.11.2026): הקהל הוא אדם אחד שמשלם על עצמו.
// ״Business״ מוסתרת רק כשהמחיר שלה נקוב למשתמש או למושב, כי אז זו תוכנית של ארגון.
const planForTeams = (p) => /\bteams?\b|organi[sz]ation|google workspace/i.test(p.name)
  || (/\bbusiness\b/i.test(p.name) && /משתמש|מושב|רישיון|עורך/.test(String(p.per ?? '')));
const planForOrgs = (p) => /enterprise/i.test(p.name) || /הצעת מחיר/.test(String(p.price_text ?? '')) || planForTeams(p);
const BILL = { 'חודשי': 'm', 'שנתי': 'y' };

// תוכניות לתצוגה: בלי מה שלא אומת ובלי תוכניות לארגונים, עם שם קצר (בלי קידומת שחוזרת בכל השמות),
// ועם סימון של חיוב חודשי או שנתי כשלאותה תוכנית יש את שניהם.
function shownPlans(t) {
  const plans = (t.pricing?.plans || []).filter((x) => !planUnverified(x) && !planForOrgs(x));
  const words = plans.map((x) => String(x.name).split(' '));
  let k = 0;
  if (new Set(plans.map((x) => x.name)).size > 1) {
    while (words.every((w) => w.length > k + 1 && w[k] === words[0][k])) k++;
  }
  const out = plans.map((x, i) => ({ p: x, name: words[i].slice(k).join(' '), bill: '' }));
  for (const o of out) {
    const same = out.filter((q) => q.p.name === o.p.name).map((q) => q.p.billing);
    if (same.includes('חודשי') && same.includes('שנתי') && BILL[o.p.billing]) o.bill = BILL[o.p.billing];
  }
  // כשיש בכלי מתג חודשי ושנתי, תוכנית שנמצא לה רק אחד מהשניים אומרת זאת במפורש
  if (out.some((o) => o.bill)) {
    for (const o of out) if (!o.bill && BILL[o.p.billing] && o.p.price !== 0) o.only = o.p.billing;
  }
  return out;
}
// מה ידוע על סוג החיוב השני (billing_check, נוסף לנתונים ב־19.11.2026 אחרי בדיקה מול העמודים הרשמיים).
// כל ניסוח אומר רק את מה שהבדיקה מצאה: ״אין״ רק כשהמקור כותב זאת במפורש, ״לא נבדק״ כשהעמוד לא נקרא.
const otherBill = (b) => (b === 'חודשי' ? 'שנתי' : 'חודשי');
function billTerm(p) {
  const b = p.billing, c = p.billing_check;
  if (!BILL[b]) return c === 'לא נבדק' ? 'סוג החיוב לא נבדק' : '';
  const y = otherBill(b);
  if (c === 'אין') return `חיוב ${b} בלבד`;
  if (c === 'לא מופיע בעמוד הרשמי') return `חיוב ${b}, אין מחיר ${y} בעמוד הרשמי`;
  if (c === 'קיים, המחיר לא נבדק') return `חיוב ${b}, יש גם חיוב ${y} שמחירו לא נבדק`;
  if (c === 'לא נבדק') return `חיוב ${b}, מחיר ${y} לא נבדק`;
  if (c === 'לא רלוונטי') return `חיוב ${b}`;
  return '';
}
function billSentence(b, c) {
  if (!BILL[b]) return c === 'לא רלוונטי' ? '' : c === 'לא נבדק' ? 'סוג החיוב, חודשי או שנתי, לא נבדק.' : 'סוג החיוב, חודשי או שנתי, לא צוין במקור.';
  const y = otherBill(b);
  if (c === 'אין') return `חיוב ${b} בלבד, לפי המקור הרשמי.`;
  if (c === 'לא מופיע בעמוד הרשמי') return `המחירים בחיוב ${b}. מחיר ${y} לא מופיע בעמוד הרשמי.`;
  if (c === 'קיים, המחיר לא נבדק') return `המחירים בחיוב ${b}. יש גם חיוב ${y}, ומחירו לא נבדק.`;
  if (c === 'לא נבדק') return `המחירים בחיוב ${b}. מחיר ${y} לא נבדק.`;
  if (c === 'לא רלוונטי') return `המחירים בחיוב ${b}.`;
  return `המחירים בחיוב ${b}. מחיר ${y} לא נמצא במקור.`;
}
const isPaid = (o) => o.p.price !== 0 && o.p.price !== null && o.p.price !== undefined;
// כלי בלי מתג שכל התוכניות בתשלום שלו באותו מצב: שורה אחת ליד הכותרת, במקום לחזור עליה בכל תוכנית
function billShared(shown) {
  const paid = shown.filter(isPaid);
  if (!paid.length || shown.some((o) => o.bill)) return null;
  const keys = new Set(paid.map((o) => `${has(o.p.billing) ? o.p.billing : ''}|${o.p.billing_check ?? ''}`));
  if (keys.size !== 1) return null;
  const [b, c] = [...keys][0].split('|');
  return billSentence(b, c);
}
function billNote(shown) {
  const text = billShared(shown);
  return text ? `<p class="bill-note">${text}</p>` : '';
}
const billAttr = (o) => (o.bill ? ` data-bill="${o.bill}"` : '');
const billToggle = (name) => `<div class="bill" role="group" aria-label="סוג החיוב ב־${esc(name)}"><button type="button" class="bill-btn" data-bill-set="m" aria-pressed="true">חודשי</button><button type="button" class="bill-btn" data-bill-set="y" aria-pressed="false">שנתי</button></div>`;

function planPrice(o) {
  const p = o.p;
  if (p.price === 0) return `<span class="tier-line"${billAttr(o)}><span class="tier-price">חינם</span></span>`;
  const cur = has(p.currency) ? CURRENCY[p.currency] || p.currency : '';
  const priced = p.price !== null && p.price !== undefined;
  const main = priced ? `${num(p.price)}${cur ? ' ' + cur : ''}${has(p.price_period) ? ' ' + p.price_period : ''}` : (has(p.price_short) ? p.price_short : p.price_text);
  const terms = [];
  const detail = !o.bill && !o.shared && isPaid(o) ? billTerm(p) : '';
  if (detail) terms.push(detail);
  else if (o.only) terms.push(`חיוב ${p.billing}, מחיר ${otherBill(p.billing)} לא נמצא`);
  else if (has(p.billing) && !o.bill) terms.push(`חיוב ${p.billing}`);
  if (has(p.per)) terms.push(p.per);
  return `<span class="tier-line"${billAttr(o)}><span class="tier-price">${esc(main)}</span>${terms.length ? `<span class="tier-terms">${esc(terms.join(', '))}</span>` : ''}</span>`;
}

// כרטיס קצר לכל תוכנית: שם ומחיר בלבד.
function tiersHtml(shown) {
  const groups = [];
  for (const o of shown) {
    let g = groups.find((x) => x.key === o.p.name);
    if (!g) { g = { key: o.p.name, name: o.name, items: [] }; groups.push(g); }
    g.items.push(o);
  }
  return `<ul class="tiers" role="list" style="--n:${groups.length}">${groups.map((g) => `<li class="tier"><bdi class="tier-name">${esc(g.name)}</bdi>${g.items.map(planPrice).join('')}</li>`).join('')}</ul>`;
}

function sheetHtml(t) {
  const p = t.pricing || {};
  const id = t.id;
  const pt = (x) => {
    const inf = x.inference ? ' <span class="tag">הסקה</span>' : '';
    return `<li><details class="pt"><summary><span class="lead">${esc(x.lead)}</span>${inf}${ICON.chev}</summary><p class="detail">${esc(x.detail)}</p></details></li>`;
  };
  const sec = (cls, title, inner, icon = '', extra = '') => (inner ? `<section class="sec ${cls}"><div class="sec-h"><h4>${icon}${title}</h4>${extra}</div>${inner}</section>` : '');
  const mores = [];
  const more = (key, title, inner) => { if (inner) mores.push({ key, title, inner }); };

  const key = [
    sec('sec-pro', `מה עובד טוב${t.strengths?.length ? ` <span class="sec-n">${t.strengths.length}</span>` : ''}`, t.strengths?.length ? `<ul class="points" role="list">${t.strengths.map(pt).join('')}</ul>` : '', ICON.good),
    sec('sec-con', `מה חשוב לדעת${t.limitations?.length ? ` <span class="sec-n">${t.limitations.length}</span>` : ''}`, t.limitations?.length ? `<ul class="points" role="list">${t.limitations.map(pt).join('')}</ul>` : '', ICON.warn),
    sec('sec-who', 'למי זה מתאים', para(t.audience)),
  ].join('');

  const shown = shownPlans(t);
  if (billShared(shown) !== null) for (const o of shown) o.shared = true;
  const toggle = shown.some((o) => o.bill) ? billToggle(t.name) : '';
  const price = sec('sec-price', 'מחיר', shown.length ? tiersHtml(shown) : '<p>המחיר לא אומת מול מקור רשמי.</p>', '', toggle || billNote(shown));

  const api = t.developer_access?.api;
  const extra = [
    has(api) && !unverified(api) ? `<p><span class="sub">ממשק למפתחים:</span> ${esc(api)}</p>` : '',
    has(t.student_benefits?.text) ? `<p><span class="sub">הטבות לסטודנטים:</span> ${esc(t.student_benefits.text)}</p>` : '',
  ].join('');
  // רוחב העמודות בשורה הזאת נקבע לפי אורך הטקסט, כדי שהעמודות יצאו בגובה דומה
  const belowParts = [
    [sec('sec-free', 'מה כלול בחינם', para(p.free_tier)), String(p.free_tier ?? '').length],
    [sec('sec-trial', 'מה ניתן רק לתקופת ניסיון', para(p.trial)), String(p.trial ?? '').length],
    [sec('sec-extra', 'עוד על הכלי', extra), String(t.student_benefits?.text ?? '').length + 30],
  ].filter((x) => x[0]);
  const below = belowParts.map((x) => x[0]).join('');
  const belowCols = belowParts.map((x) => `minmax(0,${Math.min(2, Math.max(1, x[1] / 120)).toFixed(2)}fr)`).join(' ');

  const plansFull = shown.length ? `${toggle}${has(p.model) ? `<p class="sec-meta"><span class="sub">שיטת התמחור:</span> ${esc(p.model)}</p>` : ''}<ul class="plans" role="list">${shown.map((o) => planHtml(o.p, billAttr(o), o.name)).join('')}</ul>` : '';
  const terms = [
    block('פרטיות ואימון על נתוני משתמשים', para(t.privacy?.text) + sub('אימון על נתוני משתמשים', t.privacy?.training_on_user_data)),
    block('זכויות מסחריות על התוצרים', para(t.commercial_rights?.text) + sub('סימן מים', t.commercial_rights?.watermark)),
  ].filter(Boolean).join('');
  const about = [
    t.platforms?.items?.length ? block('פלטפורמות', `<ul class="plain">${t.platforms.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`) : '',
    t.integrations?.items?.length ? block('אינטגרציות', `<ul class="plain">${t.integrations.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`) : '',
    block('עברית', para(t.hebrew?.text)),
    block('החברה', has(t.company?.name) ? `<p>${esc(t.company.name)}${has(t.company.country) ? ', ' + esc(t.company.country) : ''}</p>` : ''),
    block('שינוי שם', para(t.rename_note)),
  ].filter(Boolean).join('');
  const checked = has(t.checked_date) ? `<p class="checked">תאריך הבדיקה של הכלי: ${dateShort(t.checked_date)}</p>` : '';
  const src = sourcesHtml(t);
  more('plans', 'מה כלול בכל תוכנית', plansFull);
  more('terms', 'פרטיות וזכויות', terms ? `<div class="facts">${terms}</div>` : '');
  more('about', 'פלטפורמות, עברית והחברה', about ? `<div class="facts">${about}</div>` : '');
  // קישור לעמוד המקורות, ישר לכלי הזה (החלטת שקד, 19.11.2026)
  const srcAll = `<p class="src-all"><a href="sources.html#tool-${t.id}">כל המקורות של ${esc(t.name)} בעמוד המקורות</a></p>`;
  more('src', 'מקורות', src || checked ? `${src}${checked}${srcAll}` : '');
  // שורת הכפתורים נשארת במקומה, והחלק שנבחר נפתח מתחתיה.
  const moreHtml = mores.length ? `<div class="sheet-more">
          <div class="more-tabs">${mores.map((x) => `<button type="button" class="btn more-btn" aria-expanded="false" aria-controls="d${id}-${x.key}"><span>${x.title}</span>${ICON.chev}</button>`).join('')}</div>
          ${mores.map((x) => `<section class="more-panel" id="d${id}-${x.key}" aria-labelledby="d${id}-${x.key}-h"><h4 class="more-h" id="d${id}-${x.key}-h" tabindex="-1">${x.title}</h4>${x.inner}</section>`).join('\n          ')}
        </div>` : '';

  const former = has(t.former_name) ? ` <span class="sheet-former">לשעבר <bdi>${esc(t.former_name)}</bdi></span>` : '';
  return `
  <dialog class="sheet" id="detail-${id}" aria-labelledby="detail-${id}-h" data-billing="m">
    <header class="sheet-head">
      <div class="sheet-head-in">
        ${logoHtml(t)}
        <div class="sheet-id">
          <h3 class="sheet-title" id="detail-${id}-h" tabindex="-1"><span class="num" aria-hidden="true">${pad(t.no)}</span><span class="sr-only">כל הפרטים על </span><bdi>${esc(t.name)}</bdi></h3>
          <p class="sheet-role">${esc(t.role)}${former}</p>
          ${tagsHtml(t, 9, ' sheet-tags sheet-tags-head')}
        </div>
        <a class="btn btn-site" href="${esc(t.url)}" target="_blank" rel="noopener noreferrer" title="לאתר הרשמי">${ICON.ext}<span class="site-t">לאתר הרשמי</span><span class="sr-only"> של ${esc(t.name)} (נפתח בלשונית חדשה)</span></a>
        <button type="button" class="btn btn-close" data-sheet-close title="סגירה">${ICON.close}<span class="close-t">סגירה</span></button>
      </div>
    </header>
    <div class="sheet-scroll" tabindex="-1">
      <div class="sheet-body">
        ${sheetNotesHtml(t)}
        ${tagsHtml(t, 9, ' sheet-tags sheet-tags-body')}
        ${key ? `<div class="sheet-row">${key}</div>` : ''}
        ${price}
        ${below ? `<div class="sheet-row sheet-row-b" style="--cols:${belowCols}">${below}</div>` : ''}
        ${moreHtml}
      </div>
    </div>
  </dialog>`;
}

// עובדות שאפשר לסנן לפיהן. כל אחת נשענת רק על מה שכתוב בנתונים במפורש.
const FLAGS = [['free', 'תוכנית חינמית'], ['student', 'מידע על הטבות לסטודנטים'], ['api', 'ממשק למפתחים'], ['mobile', 'אפליקציה לטלפון'], ['hebrew', 'תמיכה בעברית']];
function toolFlags(t) {
  return {
    free: (t.pricing?.plans || []).some((x) => x.price === 0),
    student: has(t.student_benefits?.text),
    api: t.developer_access?.api === 'יש',
    // רק ערכים שאומתו במחקר. ערך ריק או לא מאומת לא נחשב.
    mobile: (t.filters?.platforms?.verified || []).some((x) => x === 'iOS' || x === 'Android'),
    hebrew: t.filters?.hebrew?.supported === true,
  };
}

// מחיר התחלתי לתצוגות האינדקס והגלריה, מתוך התווית שהמחקר כתב לכל כלי.
// המשפט הראשון הוא המחיר, וההמשך (מה לא אומת, מאיזה מקור) מוצג מתחתיו כהערה קטנה ולא מושמט.
function startPrice(t) {
  const label = String(t.filters?.starting_price?.label || '').trim();
  if (!label) return ['מחיר לא אומת במלואו', ''];
  const cut = label.indexOf('. ');
  return cut === -1 ? [label.replace(/\.$/, ''), ''] : [label.slice(0, cut), label.slice(cut + 2)];
}
// גרסה מצומצמת של הכלי, לתצוגות האינדקס והגלריה. מוסתרת בתצוגת הכרטיסים.
function miniHtml(t, free) {
  return `<div class="mini">
    <span class="mini-num" aria-hidden="true">${pad(t.no)}</span>
    <span class="mini-logo">${logoHtml(t)}</span>
    <h3 class="mini-name"><span class="sr-only">כלי מספר ${t.no}: </span><bdi>${esc(t.name)}</bdi></h3>
    <p class="mini-role">${esc(t.role)}</p>
    <p class="mini-price"><span>${esc(startPrice(t)[0])}</span>${startPrice(t)[1] ? `<small class="mini-note">${esc(startPrice(t)[1])}</small>` : ''}${free ? '<small class="mini-free">יש תוכנית חינמית</small>' : ''}</p>
    <button type="button" class="mini-open" data-sheet-open aria-haspopup="dialog" aria-controls="detail-${t.id}"><span class="sr-only">פרטים נוספים על ${esc(t.name)}</span>${ICON.expand}</button>
  </div>`;
}

function cardHtml(t) {
  const fl = toolFlags(t);
  const flags = FLAGS.map(([k]) => k).filter((k) => fl[k]).join(' ');
  const cat = catById.get(t.category_id);
  const search = [t.name, t.former_name, t.role, cat?.name].filter(has).join(' ').toLowerCase();
  const former = has(t.former_name) ? `<p class="former">לשעבר <bdi>${esc(t.former_name)}</bdi></p>` : '';
  return `
<li class="card" id="tool-${t.id}" data-no="${pad(t.no)}" data-cat="${t.category_id}" data-flags="${flags}" data-search="${esc(search)}">
  <div class="card-head">
    ${watchHtml(t)}
    <div class="card-id${has(t.logo?.file) ? '' : ' no-logo'}">
      ${logoHtml(t)}
      <div class="card-meta">
        <div class="card-top"><span class="num" aria-hidden="true">${pad(t.no)}</span>${tagsHtml(t)}</div>
        <h3 class="name" tabindex="-1"><span class="sr-only">כלי מספר ${t.no}: </span><bdi>${esc(t.name)}</bdi></h3>
        ${former}
        <p class="role">${esc(t.role)}</p>
      </div>
    </div>
    ${priceLine(t)}
    <div class="card-actions">
      <button type="button" class="btn btn-open" data-sheet-open aria-haspopup="dialog" aria-controls="detail-${t.id}"><span>פרטים נוספים</span><span class="sr-only"> על ${esc(t.name)}</span>${ICON.expand}</button>
      <div class="card-quick">
        <a class="btn btn-site btn-ico" href="${esc(t.url)}" target="_blank" rel="noopener noreferrer" title="לאתר הרשמי">${ICON.ext}<span class="sr-only">לאתר הרשמי של ${esc(t.name)} (נפתח בלשונית חדשה)</span></a>
      </div>
    </div>
  </div>
  ${miniHtml(t, fl.free)}
${sheetHtml(t)}
</li>`;
}

/* ---------- עמוד ---------- */

const total = data.tools.length;
const vFull = data.tools.filter((t) => t.pricing?.verification === 'אומת ממקור רשמי').length;
const vPart = data.tools.filter((t) => t.pricing?.verification === 'אומת חלקית').length;
const vNone = total - vFull - vPart;

const sections = liveCats.map((c) => {
  const list = toolsByCat.get(c.id);
  return `
<section class="cat" id="cat-${c.id}" data-cat-section="${c.id}" aria-labelledby="cat-title-${c.id}">
  <header class="cat-head">
    <span class="cat-num" aria-hidden="true">${pad(c.id)}</span>
    <h2 id="cat-title-${c.id}" tabindex="-1">${esc(c.name)}</h2>
    <p class="cat-count" data-cat-count data-total="${list.length}">${countTools(list.length)}</p>
  </header>
  <ul class="cards" role="list">${list.map(cardHtml).join('')}
  </ul>
</section>`;
}).join('\n');

// חלון החיפוש: שורה מוכנה לכל כלי, ואינדקס שהחיפוש המקומי קורא. אותו אינדקס ישמש גם מודל, כשיחובר.
const finderResults = data.tools.slice().sort((a, b) => a.no - b.no).map((t) => {
  const cat = catById.get(t.category_id);
  return `<li data-result="${t.id}"><button type="button" class="res" data-open-tool="${t.id}"><span class="num" aria-hidden="true">${pad(t.no)}</span><span class="res-text"><bdi class="res-name">${esc(t.name)}</bdi><span class="res-role">${esc(t.role)}</span><span class="res-why" data-why hidden></span></span><span class="res-cat">${esc(cat?.name)}</span></button></li>`;
}).join('');
const low = (v) => String(v ?? '').toLowerCase();
const searchIndex = data.tools.map((t) => ({
  id: t.id,
  name: low([t.name, t.former_name].filter(has).join(' ')),
  role: low([t.role, catById.get(t.category_id)?.name].filter(has).join(' ')),
  who: low(t.audience),
  pros: (t.strengths || []).map((x) => ({ lead: x.lead, text: low(`${x.lead} ${x.detail}`) })),
  // קיצורי הדרך נשענים רק על מה שכתוב בנתונים במפורש
  ...toolFlags(t),
}));
const SHORTCUTS = FLAGS.filter(([k]) => searchIndex.some((x) => x[k])).map(([k, label]) => [k, `יש ${label}`]);

const catNav = data.categories.map((c) => {
  const n = toolsByCat.get(c.id)?.length || 0;
  return n
    ? `<li><a href="#cat-${c.id}" data-jump><span class="num" aria-hidden="true">${pad(c.id)}</span><span>${esc(c.name)}</span><span class="cat-nav-count">${countTools(n)}</span></a></li>`
    : `<li class="pending"><span class="num" aria-hidden="true">${pad(c.id)}</span><span>${esc(c.name)}</span><span class="cat-nav-count">עוד לא נחקרה</span></li>`;
}).join('');

// שמות קצרים לרשימה שבתחתית בלבד, כדי שכל קטגוריה תהיה בשורה אחת (בקשת שקד, 19.11.2026)
const FOOT_SHORT = { 1: 'עוזרי שיחה ומחקר', 2: 'כתיבה ומצגות', 5: 'ממשקים ואתרים', 6: 'יצירת וידאו', 7: 'עריכת וידאו', 11: 'אפליקציות בלי קוד', 13: 'פגישות, תמלול וידע' };
const footName = (c) => FOOT_SHORT[c.id] || c.name;
const footerCats = data.categories.map((c) => {
  const n = toolsByCat.get(c.id)?.length || 0;
  return `<li${n ? '' : ' class="pending"'}><span class="num" aria-hidden="true">${pad(c.id)}</span><span>${n ? `<a href="#cat-${c.id}"${FOOT_SHORT[c.id] ? ` aria-label="${esc(c.name)}"` : ''}>${esc(footName(c))}</a>` : esc(footName(c))}</span><span class="cat-nav-count">${n ? countTools(n) : 'עוד לא נחקרה'}</span></li>`;
}).join('');

const heroSentence = liveCats.length === 1
  ? `${countTools(total)} בקטגוריה ״${esc(liveCats[0].name)}״, נבדקו מול המקורות הרשמיים ב־${dateLong(data.snapshot_date)}.`
  : `${countTools(total)} ב־${liveCats.length} קטגוריות, נבדקו מול המקורות הרשמיים ב־${dateLong(data.snapshot_date)}.`;

const facts = [
  [total, 'כלים באטלס'],
  // מספר הקטגוריות שיש בהן כלים. מתעדכן לבד כשנוספת קטגוריה לנתונים.
  [liveCats.length, liveCats.length === 1 ? 'קטגוריה באטלס' : 'קטגוריות באטלס'],
];

const html = `<!doctype html>
<html lang="he" dir="rtl" data-card="c">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>אטלס כלי בינה מלאכותית</title>
<meta name="description" content="אטלס בעברית של כלי בינה מלאכותית: מה כל כלי עושה, כמה הוא עולה ומה חשוב לדעת עליו. צילום מצב ליום ${dateShort(data.snapshot_date)}.">
<meta name="color-scheme" content="light dark">
<script>try{var t=localStorage.getItem('atlas-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;var v=localStorage.getItem('atlas-view');if(v==='index'||v==='gallery')document.documentElement.dataset.view=v}catch(e){}document.documentElement.classList.add('js')</script>
<link rel="stylesheet" href="assets/style.css?v=${cssV}">${communityApi ? `
<meta name="atlas-api" content="${esc(communityApi)}">
<link rel="stylesheet" href="assets/community.css?v=${comCssV}">` : ''}${gaHtml}
</head>
<body>
<a class="skip" href="#main">דילוג לרשימת הכלים</a>

<header class="bar">
  <div class="wrap bar-in">
    <div class="menu" id="menu">
      <button type="button" class="menu-btn" id="menu-open" aria-expanded="false" aria-controls="menu-panel">${ICON.dots}<span class="sr-only">הגדרות תצוגה</span></button>
      <div class="menu-panel" id="menu-panel" hidden>
        <div class="menu-row"><span class="menu-l" aria-hidden="true">תצוגה</span><div class="views" id="views" role="group" aria-label="תצוגה">${[['cards', 'כרטיסים', ICON.viewCards], ['index', 'אינדקס', ICON.viewIndex], ['gallery', 'גלריה', ICON.viewGallery]].map(([k, l, ic]) => `<button type="button" class="view-btn" data-view-set="${k}" aria-pressed="${k === 'cards'}" data-tip="${l}">${ic}<span class="sr-only">תצוגת ${l}</span></button>`).join('')}</div></div>
        <div class="menu-row"><span class="menu-l" aria-hidden="true">מצב כהה</span><button type="button" class="theme-switch" id="theme-toggle" role="switch" aria-checked="false">${ICON.sun}${ICON.moon}<span class="sr-only">מצב כהה</span></button></div>
      </div>
    </div>
    <a class="brand" href="#top"><span class="brand-long">אטלס כלי בינה מלאכותית</span><span class="brand-short" aria-hidden="true">אטלס כלי AI</span></a>
    <p class="bar-date"><span class="bar-date-l">תאריך הבדיקה האחרונה</span> <time datetime="${esc(data.snapshot_date)}">${dateShort(data.snapshot_date)}</time></p>
    <div class="bar-actions">
      <button type="button" class="btn btn-primary" id="finder-open" aria-haspopup="dialog">${ICON.search}<span>חיפוש</span></button>
    </div>
  </div>
</header>

<main id="main" tabindex="-1">
  <section class="hero wrap" id="top" aria-labelledby="page-title">
    <h1 id="page-title">אטלס כלי בינה מלאכותית</h1>
    <p class="hero-lede">לפני שנרשמים לעוד כלי: מה הוא עושה באמת, כמה הוא עולה ואיפה הוא נופל. הכול מהמקורות הרשמיים, בעברית ובמקום אחד.</p>
    <dl class="hero-facts">
      ${facts.map(([n, l, c]) => `<div${c ? ` class="${c}"` : ''}><dt>${l}</dt><dd>${n}</dd></div>`).join('\n      ')}
    </dl>
  </section>

  <div class="wrap">
    <div class="filters" id="filters" role="group" aria-labelledby="filters-h">
      <h2 class="filters-h" id="filters-h">סינון</h2>
      <div class="filters-row">
        ${liveCats.length > 1 ? `<div class="cat-pick" id="cat-pick"><button type="button" class="cat-btn" id="filter-cat" value="" aria-haspopup="listbox" aria-expanded="false" aria-controls="cat-list"><span class="sr-only">קטגוריה: </span><span class="cat-current" id="cat-current">כל הקטגוריות</span></button><div class="cat-list" id="cat-list" role="listbox" aria-label="קטגוריה" hidden><button type="button" class="cat-opt" role="option" aria-selected="true" data-cat-opt=""><span class="cat-opt-name">כל הקטגוריות</span><span class="cat-opt-n">${countTools(data.tools.length)}</span></button>${liveCats.map((c) => `<button type="button" class="cat-opt" role="option" aria-selected="false" data-cat-opt="${c.id}"><span class="cat-opt-name">${esc(c.name)}</span><span class="cat-opt-n">${countTools(toolsByCat.get(c.id).length)}</span></button>`).join('')}</div></div>` : ''}
        <div class="filters-set" role="group" aria-label="מה יש בכלי">${SHORTCUTS.map(([k]) => `<button type="button" class="btn short" data-filter-flag="${k}" aria-pressed="false">${FLAGS.find((f) => f[0] === k)[1]}</button>`).join('')}</div>
      </div>
      <div class="filter-bar" id="filter-bar" hidden>
        <p id="filter-text" role="status" aria-live="polite"></p>
        <button type="button" class="btn btn-quiet" id="filter-clear">ניקוי הסינון</button>
      </div>
    </div>
    ${legendHtml}
    <div class="empty" id="page-empty" hidden>
      <h2>אין כלי שמתאים לכל הסננים</h2>
      <p>כדאי להוריד אחד מהסננים שנבחרו.</p>
      <button type="button" class="btn btn-primary" id="page-empty-clear">ניקוי הסינון</button>
    </div>
${sections}
  </div>
</main>

<footer class="foot">
  <div class="wrap">
    <h2>הקטגוריות באטלס</h2>
    <p class="foot-lede">${liveCats.length === data.categories.length ? `${data.categories.length} קטגוריות, ${countTools(total)}.` : `${data.categories.length} קטגוריות מתוכננות, ${liveCats.length === 1 ? 'אחת מהן נחקרה' : liveCats.length + ' מהן נחקרו'} עד עכשיו.`}</p>
    <ol class="foot-cats" role="list">${footerCats}</ol>
    <p class="foot-note">המידע נכון ליום הבדיקה, ${dateLong(data.snapshot_date)}. מחירים ותנאים משתנים, ולכן כדאי לבדוק באתר הרשמי של כל כלי לפני החלטה. הלוגואים שייכים לחברות ומוצגים לצורך זיהוי בלבד.</p>
    <p class="foot-src"><a href="sources.html">מאיפה המידע מגיע</a></p>
    <p class="foot-date">תאריך הבדיקה האחרונה: <time datetime="${esc(data.snapshot_date)}">${dateShort(data.snapshot_date)}</time></p>
  </div>
</footer>

<dialog class="finder" id="finder" aria-labelledby="finder-title">
  <div class="finder-top">
    <form class="finder-form" id="finder-form" role="search">
      <label for="q" id="finder-title">מה צריך לעשות?</label>
      <div class="finder-field">
        ${ICON.search}
        <input type="text" id="q" inputmode="search" name="q" autocomplete="off" enterkeyhint="search" dir="auto" placeholder="למשל: סרטון קצר מתמונה אחת">
        <button type="button" class="btn btn-quiet" id="finder-clear" hidden>ניקוי</button>
      </div>
    </form>
    <button type="button" class="btn btn-icon" id="finder-close">${ICON.close}<span>סגירה</span></button>
  </div>
  <div class="finder-in">
    ${SHORTCUTS.length ? `<div class="finder-group">
      <h3 id="finder-short-h">קיצורי דרך</h3>
      <div class="shortcuts" role="group" aria-labelledby="finder-short-h">${SHORTCUTS.map(([k, label]) => `<button type="button" class="btn short" data-short="${k}" aria-pressed="false">${label}</button>`).join('')}</div>
    </div>` : ''}
    <div class="finder-group" id="finder-recent" hidden>
      <h3 id="finder-recent-h">חיפושים אחרונים</h3>
      <div class="shortcuts" id="finder-recent-list" role="group" aria-labelledby="finder-recent-h"></div>
    </div>
    <p class="finder-count" id="finder-count" role="status" aria-live="polite"></p>
    <ul class="results" id="results" role="list" hidden>${finderResults}</ul>
    <div class="finder-empty" id="finder-empty" hidden>
      <p><strong>לא נמצא כלי מתאים.</strong> כדאי לנסות מילים אחרות, למשל מה רוצים ליצור או שם של כלי.</p>
    </div>
  </div>
</dialog>
<script type="application/json" id="search-index">${JSON.stringify(searchIndex).replace(/</g, '\\u003c')}</script>

<script src="assets/app.js?v=${jsV}" defer></script>${communityApi ? `
<script src="assets/community.js?v=${comJsV}" defer></script>` : ''}
</body>
</html>
`;

writeFileSync(outPath, html);
console.log(`${outPath}: ${total} tools, ${liveCats.length} categories, verified ${vFull}, partial ${vPart}, unverified ${vNone}`);
