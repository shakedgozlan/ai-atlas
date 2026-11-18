// בונה את index.html מתוך data/tools.json.
// קובץ הנתונים הוא המקור היחיד: שדה ריק לא מוצג, ושום דבר לא מושלם כאן ביד.
// הרצה: node build/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = process.env.ATLAS_DATA || join(root, 'data/tools.json');
const outPath = process.env.ATLAS_OUT || join(root, 'index.html');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));

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
  good: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.25"/><path d="m7.75 12.4 2.9 2.9 5.6-6.1"/></svg>',
  warn: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6 2.6 19.8h18.8L12 3.6Z"/><path d="M12 10v4.6"/><path d="M12 17.1v.2"/></svg>',
  chevron: '<svg class="ico chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  close: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
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

/* ---------- כרטיס ---------- */

function logoHtml(t) {
  const l = t.logo || {};
  if (!has(l.file)) return '';
  const alt = `הלוגו של ${t.name}`;
  if (has(l.file_dark)) {
    return `<span class="logo"><img class="logo-light" src="${esc(l.file)}" alt="${esc(alt)}" height="28" loading="lazy" decoding="async"><img class="logo-dark" src="${esc(l.file_dark)}" alt="${esc(alt)}" height="28" loading="lazy" decoding="async"></span>`;
  }
  return `<span class="logo"><img src="${esc(l.file)}" alt="${esc(alt)}" height="28" loading="lazy" decoding="async"></span>`;
}

function priceLine(t) {
  const p = t.pricing || {};
  const v = p.verification;
  const mark = v === 'אומת ממקור רשמי' ? ['full', ICON.vFull] : v === 'אומת חלקית' ? ['part', ICON.vPart] : ['none', ICON.vNone];
  let text;
  if (has(p.summary_line)) text = esc(p.summary_line);
  else if (v === 'אומת חלקית') text = 'התמחור אומת רק בחלקו. מה שאומת מופיע בכל הפרטים.';
  else text = 'תמחור לא אומת.';
  const label = has(p.summary_line) || v === 'אומת חלקית' ? esc(v) : 'לא אומת';
  return `<p class="price"><span class="verify verify-${mark[0]}">${mark[1]}${label}</span><span class="price-text">${text}</span></p>`;
}

function point(x) {
  const inf = x.inference ? ' <span class="tag">הסקה</span>' : '';
  const dot = /[.!?:]$/.test(String(x.lead).trim()) ? '' : '.';
  return `<li><strong class="lead">${esc(x.lead)}${dot}</strong>${inf} <span class="detail">${esc(x.detail)}</span></li>`;
}

function planHtml(p) {
  const cur = has(p.currency) ? CURRENCY[p.currency] || p.currency : '';
  let main;
  if (p.price !== null && p.price !== undefined) {
    main = `${num(p.price)}${cur ? ' ' + cur : ''}${has(p.price_period) ? ' ' + p.price_period : ''}`;
  } else {
    main = p.price_text;
  }
  const terms = [];
  if (has(p.billing)) terms.push(`חיוב ${p.billing}`);
  if (has(p.per)) terms.push(p.per);
  if ((p.price === null || p.price === undefined) && has(p.price_period)) terms.push(`המחיר נקוב ${p.price_period}`);
  const head = `<p class="plan-head"><bdi class="plan-name">${esc(p.name)}</bdi><span class="plan-price">${esc(main)}</span></p>`;
  const termLine = terms.length ? `<p class="plan-terms">${esc(terms.join(', '))}</p>` : '';
  const inc = has(p.includes) ? `<p class="plan-inc">${esc(p.includes)}</p>` : '';
  const notes = has(p.notes) ? `<p class="plan-notes">${esc(p.notes)}</p>` : '';
  return `<li class="plan">${head}${termLine}${inc}${notes}</li>`;
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
  return `<section class="fact fact-sources"><h5>מקורות</h5><ol class="sources">${items}</ol></section>`;
}

function fullHtml(t) {
  const p = t.pricing || {};
  const out = [];
  if (t.strengths?.[2]) out.push(`<section class="fact"><h5>יתרון נוסף</h5><ul class="points">${point(t.strengths[2])}</ul></section>`);
  if (t.limitations?.[2]) out.push(`<section class="fact"><h5>מגבלה נוספת</h5><ul class="points">${point(t.limitations[2])}</ul></section>`);

  const plans = p.plans?.length ? `<ul class="plans">${p.plans.map(planHtml).join('')}</ul>` : '';
  out.push(block('מחיר מלא', `<p><span class="sub">מצב האימות:</span> ${esc(p.verification || 'לא אומת')}</p>${sub('שיטת התמחור', p.model)}${plans}`));
  out.push(block('מה כלול בחינם', para(p.free_tier)));
  out.push(block('מה ניתן רק לתקופת ניסיון', para(p.trial)));
  out.push(block('מה לא אומת בתמחור', para(p.unverified_notes)));
  out.push(block('פרטיות ואימון על נתוני משתמשים', para(t.privacy?.text) + sub('אימון על נתוני משתמשים', t.privacy?.training_on_user_data)));
  out.push(block('זכויות מסחריות על התוצרים', para(t.commercial_rights?.text) + sub('סימן מים', t.commercial_rights?.watermark)));
  out.push(block('גישה למפתחים', sub('ממשק למפתחים', t.developer_access?.api) + para(t.developer_access?.text)));
  if (t.integrations?.items?.length) out.push(block('אינטגרציות', `<ul class="plain">${t.integrations.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`));
  if (t.platforms?.items?.length) out.push(block('פלטפורמות', `<ul class="plain">${t.platforms.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`));
  out.push(block('עברית', para(t.hebrew?.text)));
  out.push(block('החברה', has(t.company?.name) ? `<p>${esc(t.company.name)}${has(t.company.country) ? ', ' + esc(t.company.country) : ''}</p>` : ''));
  out.push(block('הטבות לסטודנטים', para(t.student_benefits?.text)));
  out.push(block('שינוי שם', para(t.rename_note)));
  out.push(block('מצב המוצר', sub('מצב', t.status?.state) + para(t.status?.note) + sub('התאריך כפי שהוא כתוב במקור', t.status?.date_as_written)));
  if (!has(t.logo?.file)) out.push(block('למה אין כאן לוגו', para(t.logo?.missing_reason)));
  out.push(sourcesHtml(t));
  if (has(t.checked_date)) out.push(`<p class="checked">תאריך הבדיקה של הכלי: ${dateShort(t.checked_date)}</p>`);
  return out.filter(Boolean).join('\n');
}

function cardHtml(t) {
  const cat = catById.get(t.category_id);
  const search = [t.name, t.former_name, t.role, cat?.name].filter(has).join(' ').toLowerCase();
  const former = has(t.former_name) ? `<p class="former">לשעבר <bdi>${esc(t.former_name)}</bdi></p>` : '';
  const strengths = (t.strengths || []).slice(0, 2).map(point).join('');
  const limits = (t.limitations || []).slice(0, 2).map(point).join('');
  return `
<li class="card" id="tool-${t.id}" data-cat="${t.category_id}" data-search="${esc(search)}">
  <div class="card-head">
    <div class="card-top"><span class="num" aria-hidden="true">${pad(t.id)}</span>${logoHtml(t)}</div>
    <h3 class="name" tabindex="-1"><span class="sr-only">כלי מספר ${t.id}: </span><bdi>${esc(t.name)}</bdi></h3>
    ${former}
    <p class="role">${esc(t.role)}</p>
    ${priceLine(t)}
    <div class="card-actions">
      <button type="button" class="btn btn-open" data-toggle aria-expanded="true" aria-controls="body-${t.id}"><span data-label>סגירה</span><span class="sr-only"> של הפרטים על ${esc(t.name)}</span>${ICON.chevron}</button>
      <a class="btn btn-quiet" href="${esc(t.url)}" target="_blank" rel="noopener noreferrer">לאתר הרשמי<span class="sr-only"> של ${esc(t.name)} (נפתח בלשונית חדשה)</span></a>
    </div>
  </div>
  <div class="card-body" id="body-${t.id}">
    ${strengths ? `<section class="panel"><h4>${ICON.good}מה עובד טוב</h4><ul class="points">${strengths}</ul></section>` : ''}
    ${limits ? `<section class="panel"><h4>${ICON.warn}מה חשוב לדעת</h4><ul class="points">${limits}</ul></section>` : ''}
    ${has(t.audience) ? `<section class="panel"><h4>למי זה מתאים</h4><p>${esc(t.audience)}</p></section>` : ''}
    <button type="button" class="btn btn-full" data-toggle aria-expanded="true" aria-controls="full-${t.id}"><span data-label-full>כל הפרטים: מחיר מלא, פרטיות, זכויות ומקורות</span><span class="sr-only"> על ${esc(t.name)}</span>${ICON.chevron}</button>
    <div class="full" id="full-${t.id}">
${fullHtml(t)}
    </div>
  </div>
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
<section class="cat" id="cat-${c.id}" data-cat-section="${c.id}" style="--cat: var(--cat-${c.id})" aria-labelledby="cat-title-${c.id}">
  <header class="cat-head">
    <span class="cat-num" aria-hidden="true">${pad(c.id)}</span>
    <h2 id="cat-title-${c.id}" tabindex="-1">${esc(c.name)}</h2>
    <p class="cat-count">${countTools(list.length)}</p>
  </header>
  <ul class="cards" role="list">${list.map(cardHtml).join('')}
  </ul>
</section>`;
}).join('\n');

const finderResults = data.tools.slice().sort((a, b) => a.id - b.id).map((t) => {
  const cat = catById.get(t.category_id);
  const search = [t.name, t.former_name, t.role, cat?.name].filter(has).join(' ').toLowerCase();
  return `<li data-result style="--cat: var(--cat-${t.category_id})" data-cat="${t.category_id}" data-search="${esc(search)}"><a href="#tool-${t.id}" data-jump><span class="num" aria-hidden="true">${pad(t.id)}</span><span class="res-text"><bdi class="res-name">${esc(t.name)}</bdi><span class="res-role">${esc(t.role)}</span><span class="res-cat">${esc(cat?.name)}</span></span></a></li>`;
}).join('');

const catNav = data.categories.map((c) => {
  const n = toolsByCat.get(c.id)?.length || 0;
  return n
    ? `<li style="--cat: var(--cat-${c.id})"><a href="#cat-${c.id}" data-jump><span class="num" aria-hidden="true">${pad(c.id)}</span><span>${esc(c.name)}</span><span class="cat-nav-count">${countTools(n)}</span></a></li>`
    : `<li class="pending"><span class="num" aria-hidden="true">${pad(c.id)}</span><span>${esc(c.name)}</span><span class="cat-nav-count">עוד לא נחקרה</span></li>`;
}).join('');

const footerCats = data.categories.map((c) => {
  const n = toolsByCat.get(c.id)?.length || 0;
  return `<li${n ? ` style="--cat: var(--cat-${c.id})"` : ' class="pending"'}><span class="num" aria-hidden="true">${pad(c.id)}</span><span>${n ? `<a href="#cat-${c.id}">${esc(c.name)}</a>` : esc(c.name)}</span><span class="cat-nav-count">${n ? countTools(n) : 'עוד לא נחקרה'}</span></li>`;
}).join('');

const heroSentence = liveCats.length === 1
  ? `${countTools(total)} בקטגוריה ״${esc(liveCats[0].name)}״, נבדקו מול המקורות הרשמיים ב־${dateLong(data.snapshot_date)}.`
  : `${countTools(total)} ב־${liveCats.length} קטגוריות, נבדקו מול המקורות הרשמיים ב־${dateLong(data.snapshot_date)}.`;

const facts = [
  [total, 'כלים באטלס'],
  [vFull, 'עם מחיר שאומת ממקור רשמי'],
  [vPart, 'עם מחיר שאומת חלקית'],
];
if (vNone) facts.push([vNone, 'עם מחיר שלא אומת']);

const html = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>אטלס כלי בינה מלאכותית</title>
<meta name="description" content="אטלס בעברית של כלי בינה מלאכותית: מה כל כלי עושה, כמה הוא עולה ומה חשוב לדעת עליו. צילום מצב ליום ${dateShort(data.snapshot_date)}.">
<meta name="color-scheme" content="light dark">
<script>try{var t=localStorage.getItem('atlas-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add('js')</script>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<a class="skip" href="#main">דילוג לרשימת הכלים</a>

<header class="bar">
  <div class="wrap bar-in">
    <a class="brand" href="#top"><span class="brand-long">אטלס כלי בינה מלאכותית</span><span class="brand-short" aria-hidden="true">האטלס</span></a>
    <div class="bar-actions">
      <button type="button" class="btn btn-icon" id="theme-toggle">${ICON.moon}${ICON.sun}<span class="theme-label" data-theme-label>מצב כהה</span></button>
      <button type="button" class="btn btn-primary" id="finder-open" aria-haspopup="dialog">מוצאים כיוון</button>
    </div>
  </div>
</header>

<main id="main" tabindex="-1">
  <section class="hero wrap" id="top" aria-labelledby="page-title">
    <h1 id="page-title">אטלס כלי בינה מלאכותית</h1>
    <p class="hero-lede">${heroSentence} זה צילום מצב ליום הבדיקה, והוא לא מתעדכן מעצמו.</p>
    <dl class="hero-facts">
      ${facts.map(([n, l]) => `<div><dt>${l}</dt><dd>${n}</dd></div>`).join('\n      ')}
    </dl>
  </section>

  <div class="wrap">
    <div class="filter-bar" id="filter-bar" hidden>
      <p id="filter-text" role="status" aria-live="polite"></p>
      <button type="button" class="btn btn-quiet" id="filter-clear">ניקוי הסינון</button>
    </div>
    <div class="empty" id="page-empty" hidden>
      <h2>אין תוצאות</h2>
      <p>שום כלי באטלס לא מתאים לחיפוש הזה. כדאי לנסות שם אחר או קטגוריה אחרת.</p>
      <button type="button" class="btn btn-primary" id="page-empty-clear">ניקוי הסינון</button>
    </div>
${sections}
  </div>
</main>

<footer class="foot">
  <div class="wrap">
    <h2>הקטגוריות באטלס</h2>
    <p class="foot-lede">${data.categories.length} קטגוריות מתוכננות, ${liveCats.length === 1 ? 'אחת מהן נחקרה' : liveCats.length + ' מהן נחקרו'} עד עכשיו.</p>
    <ol class="foot-cats" role="list">${footerCats}</ol>
    <p class="foot-note">המידע נכון ליום הבדיקה, ${dateLong(data.snapshot_date)}. מחירים ותנאים משתנים, ולכן כדאי לבדוק באתר הרשמי של כל כלי לפני החלטה. הלוגואים שייכים לחברות ומוצגים לצורך זיהוי בלבד.</p>
  </div>
</footer>

<dialog class="finder" id="finder" aria-labelledby="finder-title">
  <div class="finder-top">
    <h2 id="finder-title">מוצאים כיוון</h2>
    <button type="button" class="btn btn-icon" id="finder-close">${ICON.close}<span>סגירה</span></button>
  </div>
  <div class="finder-in">
    <form class="finder-form" id="finder-form" role="search">
      <div class="field">
        <label for="q">חיפוש לפי שם, תפקיד או קטגוריה</label>
        <input type="text" id="q" inputmode="search" name="q" autocomplete="off" enterkeyhint="search" dir="auto">
      </div>
      <div class="field">
        <label for="cat-filter">סינון לפי קטגוריה</label>
        <select id="cat-filter" name="cat">
          <option value="">כל הקטגוריות</option>
          ${liveCats.map((c) => `<option value="${c.id}">${esc(c.name)}</option>`).join('')}
        </select>
      </div>
      <button type="button" class="btn btn-quiet" id="finder-clear">ניקוי</button>
    </form>
    <p class="finder-count" id="finder-count" role="status" aria-live="polite"></p>
    <ul class="results" id="results" role="list">${finderResults}</ul>
    <div class="finder-empty" id="finder-empty" hidden>
      <p><strong>אין תוצאות.</strong> אפשר לנסות שם אחר, או ללחוץ על ״ניקוי״ כדי לראות את כל הכלים.</p>
    </div>
    <nav class="cat-nav" aria-labelledby="cat-nav-title">
      <h3 id="cat-nav-title">ניווט בין הקטגוריות</h3>
      <ol role="list">${catNav}</ol>
    </nav>
  </div>
</dialog>

<script src="assets/app.js" defer></script>
</body>
</html>
`;

writeFileSync(outPath, html);
console.log(`${outPath}: ${total} tools, ${liveCats.length} categories, verified ${vFull}, partial ${vPart}, unverified ${vNone}`);
