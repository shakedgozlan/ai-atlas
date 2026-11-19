// בונה את 404.html, עמוד ״הכתובת לא נמצאה״. GitHub Pages מציג אותו לבד לכל כתובת שלא קיימת.
// הקישורים בעמוד מתחילים ב־/ (נתיב מוחלט), כדי שהעמוד ייראה אותו דבר בכל כתובת, גם עמוקה.
// הרצה: node build/build-404.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outPath = process.env.ATLAS_404_OUT || join(root, '404.html');
const gaId = String(process.env.ATLAS_GA_ID ?? JSON.parse(readFileSync(new URL('./analytics.config.json', import.meta.url), 'utf8')).measurement_id ?? '').trim();
if (gaId && !/^(G|GTM)-[A-Z0-9]{4,20}$/.test(gaId)) throw new Error('המזהה של Google Analytics לא תקין: ' + gaId);
const gaHtml = !gaId ? '' : gaId.startsWith('GTM-') ? `
<script async src="https://www.googletagmanager.com/gtm.js?id=${gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date())</script>` : `
<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}')</script>`;

const stamp = (rel) => createHash('sha256').update(readFileSync(new URL(rel, import.meta.url))).digest('hex').slice(0, 10);

const html = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>העמוד לא נמצא · אטלס כלי בינה מלאכותית</title>
<meta name="description" content="הכתובת שחיפשתם לא קיימת באטלס כלי בינה מלאכותית.">
<meta name="robots" content="noindex">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<script>try{var t=localStorage.getItem('atlas-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="stylesheet" href="/assets/style.css?v=${stamp('../assets/style.css')}">
<link rel="stylesheet" href="/assets/notfound.css?v=${stamp('../assets/notfound.css')}">${gaHtml}
</head>
<body>
<a class="skip" href="#main">דילוג לתוכן</a>

<nav class="nf-top" aria-label="ראשי">
  <div class="wrap nf-top-in">
    <a class="nf-brand" href="/"><img src="/favicon.svg" alt="" width="28" height="28"><span>אטלס כלי בינה מלאכותית</span></a>
  </div>
</nav>

<main id="main" tabindex="-1">
  <section class="wrap nf-hero" aria-labelledby="page-title">
    <p class="nf-code" aria-hidden="true">404</p>
    <h1 id="page-title">הכתובת הזאת לא קיימת</h1>
    <p class="hero-lede">יכול להיות שהקישור ישן, או שנפלה בו טעות בהקלדה. הכלים עצמם נמצאים בעמוד הראשי.</p>
    <div class="nf-actions">
      <a class="btn btn-primary" href="/">חזרה לעמוד הראשי</a>
    </div>
  </section>
</main>

</body>
</html>
`;
writeFileSync(outPath, html);
console.log(outPath);
