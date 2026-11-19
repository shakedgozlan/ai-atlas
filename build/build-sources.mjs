// בונה את sources.html, עמוד ״מאיפה המידע מגיע״, מתוך data/tools.json.
// כל המספרים בעמוד נספרים כאן מקובץ הנתונים, ושום מספר לא כתוב ביד.
// הרצה: node build/build-sources.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = process.env.ATLAS_DATA || join(root, 'data/tools.json');
const outPath = process.env.ATLAS_SOURCES_OUT || join(root, 'sources.html');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));
// Google Analytics: נטען רק כשיש מזהה ב־build/analytics.config.json (או במשתנה ATLAS_GA_ID).
// מזהה ריק משאיר את האתר בלי שום קוד מדידה.
// מזהה שמתחיל ב־GTM- מקבל את התג בדיוק כפי ש־Google נותנת אותו, ומזהה שמתחיל ב־G- את התג הרגיל.
const gaId = String(process.env.ATLAS_GA_ID ?? JSON.parse(readFileSync(new URL('./analytics.config.json', import.meta.url), 'utf8')).measurement_id ?? '').trim();
if (gaId && !/^(G|GTM)-[A-Z0-9]{4,20}$/.test(gaId)) throw new Error('המזהה של Google Analytics לא תקין: ' + gaId);
const gaHtml = !gaId ? '' : gaId.startsWith('GTM-') ? `
<script async src="https://www.googletagmanager.com/gtm.js?id=${gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date())</script>` : `
<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}')</script>`;

const stamp = (rel) => createHash('sha256').update(readFileSync(new URL(rel, import.meta.url))).digest('hex').slice(0, 10);
const cssV = stamp('../assets/style.css');
const srcCssV = stamp('../assets/sources.css');

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const has = (v) => v !== null && v !== undefined && String(v).trim() !== '';
const pad = (n) => String(n).padStart(2, '0');
const MONTHS = ['בינואר', 'בפברואר', 'במרץ', 'באפריל', 'במאי', 'ביוני', 'ביולי', 'באוגוסט', 'בספטמבר', 'באוקטובר', 'בנובמבר', 'בדצמבר'];
const dateShort = (iso) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ''); return m ? `${+m[3]}.${+m[2]}.${m[1]}` : String(iso ?? ''); };
const dateLong = (iso) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ''); return m ? `${+m[3]} ${MONTHS[+m[2] - 1]} ${m[1]}` : String(iso ?? ''); };
const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return ''; } };
const nSources = (n) => (n === 1 ? 'מקור אחד' : `${n} מקורות`);
const nTools = (n) => (n === 1 ? 'כלי אחד' : `${n} כלים`);

/* ---------- ספירה ---------- */

const tools = [...data.tools].sort((a, b) => a.id - b.id);
const all = tools.flatMap((t) => (t.sources || []).map((s) => ({ ...s, tool: t })));
const total = all.length;
const official = all.filter((s) => s.official).length;
const third = total - official;
const stale = all.filter((s) => s.stale).length;
const sites = new Set(all.map((s) => host(s.url)).filter(Boolean)).size;
const priceFull = tools.filter((t) => t.pricing?.verification === 'אומת ממקור רשמי');
const pricePart = tools.filter((t) => t.pricing?.verification === 'אומת חלקית');
const priceNone = tools.filter((t) => has(t.pricing?.verification) && !priceFull.includes(t) && !pricePart.includes(t));
const catById = new Map(data.categories.map((c) => [c.id, c]));
const liveCats = data.categories.filter((c) => tools.some((t) => t.category_id === c.id));
// מספור לפי סדר ההצגה, כמו בדף הראשי
{ let n = 0; for (const c of liveCats) for (const t of tools.filter((x) => x.category_id === c.id)) t.no = ++n; }
const pct = (n) => (total ? Math.round((n / total) * 1000) / 10 : 0);

/* ---------- חלקים ---------- */

const facts = [
  [total, 'מקורות נרשמו'],
  [official, 'מהם רשמיים'],
  [sites, 'אתרים שונים'],
  [tools.length, tools.length === 1 ? 'כלי נבדק' : 'כלים נבדקו'],
];

const RULES = [
  ['קוראים את העמוד עצמו', 'כל עובדה נלקחת מעמוד שנפתח ונקרא ביום הבדיקה. כותרת שהופיעה בתוצאות חיפוש בלי שהעמוד נפתח אינה מקור.'],
  ['למה שעולה כסף, רק מקור רשמי', 'מחיר, מכסות, זכויות שימוש, פרטיות וגישה למפתחים נלקחים רק מעמודים של החברה עצמה.'],
  ['מה שלא אומת לא מוצג', 'חוסר מידע הוא חוסר אימות, לא חיסרון של הכלי. שדה שלא נמצא לו מקור נשאר ריק ולא מופיע באתר.'],
  ['מקור ישן מסומן', 'מקור שפורסם יותר מחצי שנה לפני הבדיקה מקבל את התווית ״מקור ישן״. הוא נשאר רק כשזו הגרסה שעדיין בתוקף.'],
  ['סתירה נרשמת, לא מוסתרת', 'כששני מקורות אומרים דבר שונה, מוצג הרשמי והעדכני, והסתירה כתובה בפירוט של הכלי.'],
];

const rulesHtml = RULES.map(([h, p], i) => `<li class="rule"><span class="num" aria-hidden="true">${pad(i + 1)}</span><div><h3>${h}</h3><p>${p}</p></div></li>`).join('\n        ');

const split = `
      <div class="split" role="img" aria-label="${official} מקורות רשמיים ו־${third} מקורות של צד שלישי, מתוך ${total}">
        <span class="split-a" style="flex-grow:${official}"></span>${third ? `<span class="split-b" style="flex-grow:${third}"></span>` : ''}
      </div>
      <dl class="kinds">
        <div class="kind"><dt><span class="dot dot-a" aria-hidden="true"></span>מקורות רשמיים</dt><dd class="kind-n">${official}</dd><dd class="kind-t">עמודים של החברה שמפעילה את הכלי: עמוד המחירים, תנאי השימוש, מדיניות הפרטיות, מרכז העזרה, תיעוד למפתחים, הבלוג הרשמי וחנויות האפליקציות.</dd></div>
        <div class="kind"><dt><span class="dot dot-b" aria-hidden="true"></span>מקורות של צד שלישי</dt><dd class="kind-n">${third}</dd><dd class="kind-t">סקירות ואתרי מעקב שאינם של החברה. הם משמשים רק לתמונת מצב כללית, ואף פעם לא למחיר או לזכויות שימוש.</dd></div>
        <div class="kind"><dt><span class="dot dot-c" aria-hidden="true"></span>מסומנים ״מקור ישן״</dt><dd class="kind-n">${stale}</dd><dd class="kind-t">מתוך כלל ${nSources(total)}. פורסמו יותר מחצי שנה לפני יום הבדיקה, למשל תנאי שימוש שלא עודכנו מאז.</dd></div>
      </dl>`;

const names = (list) => list.map((t) => `<bdi>${esc(t.name)}</bdi>`).join(', ');
const priceRows = [
  [priceFull, 'המחיר אומת במלואו', 'כל התוכניות והמחירים נקראו מהעמוד הרשמי של החברה.'],
  [pricePart, 'המחיר אומת חלקית', 'עמוד המחירים דרש התחברות או הציג רק חלק מהנתונים. מה שלא נקרא לא מוצג באתר.'],
  [priceNone, 'המחיר לא אומת', 'לא נמצא מקור רשמי למחיר, ולכן הוא לא מוצג.'],
].filter(([list]) => list.length).map(([list, h, p]) => `<div class="price-row"><p class="price-n">${list.length}<span> מתוך ${tools.length}</span></p><div><h3>${h}</h3><p>${p}</p><p class="price-names">${names(list)}</p></div></div>`).join('\n      ');

function sourceItem(s) {
  const bits = [];
  if (has(s.published)) bits.push(`פורסם ב־${dateShort(s.published)}`);
  if (has(s.checked)) bits.push(`נבדק ב־${dateShort(s.checked)}`);
  const tags = `<span class="tag ${s.official ? 'tag-off' : 'tag-third'}">${s.official ? 'רשמי' : 'צד שלישי'}</span>${s.stale ? ' <span class="tag tag-stale">מקור ישן</span>' : ''}`;
  return `<li class="s-item"><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}<span class="sr-only"> (נפתח בלשונית חדשה)</span></a><p class="s-meta">${tags}<span class="s-host" dir="ltr">${esc(host(s.url))}</span>${bits.length ? `<span>${esc(bits.join(', '))}</span>` : ''}</p></li>`;
}

function toolBlock(t) {
  const list = t.sources || [];
  const off = list.filter((s) => s.official).length;
  const bits = [nSources(list.length)];
  if (off === list.length) bits.push('כולם רשמיים'); else bits.push(`${off} רשמיים`);
  return `<details class="tool-src" id="tool-${t.id}">
        <summary><span class="num" aria-hidden="true">${pad(t.no)}</span><span class="tool-src-name"><bdi>${esc(t.name)}</bdi></span><span class="tool-src-count">${bits.join(', ')}</span><svg class="ico chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary>
        <div class="tool-src-in">
          ${has(t.pricing?.verification) ? `<p class="tool-src-price">מחיר: ${esc(t.pricing.verification)}. נבדק ב־${dateShort(t.checked_date)}.</p>` : ''}
          <ol class="s-list" role="list">${list.map(sourceItem).join('')}</ol>
        </div>
      </details>`;
}

const groups = liveCats.map((c) => {
  const list = tools.filter((t) => t.category_id === c.id);
  return `<section class="src-cat" aria-labelledby="src-cat-${c.id}">
      <h3 class="src-cat-h" id="src-cat-${c.id}"><span class="num" aria-hidden="true">${pad(c.id)}</span>${esc(c.name)}<span class="src-cat-n">${nTools(list.length)}</span></h3>
      ${list.map(toolBlock).join('\n      ')}
    </section>`;
}).join('\n');

const html = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>מאיפה המידע מגיע · אטלס כלי בינה מלאכותית</title>
<meta name="description" content="המקורות שמהם נבנה אטלס כלי הבינה המלאכותית: ${nSources(total)}, ${official} מהם רשמיים, נבדקו ב־${dateShort(data.snapshot_date)}.">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="favicon.ico" sizes="32x32">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<script>try{var t=localStorage.getItem('atlas-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="stylesheet" href="assets/style.css?v=${cssV}">
<link rel="stylesheet" href="assets/sources.css?v=${srcCssV}">${gaHtml}
</head>
<body class="src-page">
<a class="skip" href="#main">דילוג לתוכן</a>

<nav class="src-top" aria-label="חזרה">
  <div class="wrap src-top-in">
    <a class="src-back" href="index.html"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg><span>חזרה לאטלס</span></a>
  </div>
</nav>

<main id="main" tabindex="-1">
  <section class="hero wrap src-hero" aria-labelledby="page-title">
    <h1 id="page-title">מאיפה המידע מגיע</h1>
    <p class="hero-lede">כל עובדה באטלס נשענת על עמוד ברשת שנקרא ביום הבדיקה, ${dateLong(data.snapshot_date)}. כאן רואים כמה מקורות נאספו, מי עומד מאחוריהם, ואפשר לפתוח כל אחד מהם.</p>
    <dl class="hero-facts">
      ${facts.map(([n, l]) => `<div><dt>${l}</dt><dd>${n}</dd></div>`).join('\n      ')}
    </dl>
  </section>

  <div class="wrap">
    <section class="src-sec" aria-labelledby="h-kinds">
      <h2 id="h-kinds">מי עומד מאחורי המקורות</h2>
      <p class="src-sec-lede">${pct(official)} אחוז מהמקורות הם עמודים רשמיים של החברות עצמן.</p>${split}
    </section>

    <section class="src-sec" aria-labelledby="h-rules">
      <h2 id="h-rules">איך נאסף המידע</h2>
      <ol class="rules" role="list">
        ${rulesHtml}
      </ol>
    </section>

    <section class="src-sec" aria-labelledby="h-price">
      <h2 id="h-price">עד כמה המחירים בדוקים</h2>
      <p class="src-sec-lede">מחיר הוא הנתון שמשתנה הכי מהר, ולכן הוא מקבל סימון נפרד.</p>
      <div class="price-rows">
      ${priceRows}
      </div>
    </section>

    <section class="src-sec" aria-labelledby="h-list">
      <h2 id="h-list">כל המקורות, לפי כלי</h2>
      <p class="src-sec-lede">לחיצה על שם של כלי פותחת את רשימת המקורות שלו. כל קישור נפתח בלשונית חדשה.</p>
${groups}
    </section>

    <p class="src-note">המידע נכון ליום הבדיקה, ${dateLong(data.snapshot_date)}. מחירים ותנאים משתנים, ולכן כדאי לבדוק באתר הרשמי של כל כלי לפני החלטה.</p>
    <p class="src-privacy">האתר משתמש ב־Google Analytics כדי לדעת כמה אנשים מבקרים בו ובאילו עמודים. לשם כך Google שומרת קובצי עוגיות (קבצים קטנים) בדפדפן שלך. אפשר לחסום אותם בהגדרות הדפדפן או בתוסף חסימה, והאתר ימשיך לעבוד כרגיל.</p>
  </div>
</main>

<script>(function(){function o(){var e=location.hash&&document.getElementById(location.hash.slice(1));if(e&&e.tagName==='DETAILS')e.open=true}o();addEventListener('hashchange',o)})()</script>
</body>
</html>
`;

writeFileSync(outPath, html);
console.log(`${outPath}: ${total} sources, ${official} official, ${third} third-party, ${stale} stale, ${sites} sites, ${tools.length} tools`);
