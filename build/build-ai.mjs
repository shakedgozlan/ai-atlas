// בונה מקובץ הנתונים שני קבצים לכלי בינה מלאכותית: atlas.json (נתונים מובנים בעברית) ו־llms.txt (קובץ אחד באנגלית).
// הקבצים נוצרים אוטומטית. לא לערוך אותם ביד: משנים את data/tools.json ומריצים את הבנייה מחדש.
// הרצה: node build/build-ai.mjs   (build/build.mjs מריץ אותו בעצמו בסופו)
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = process.env.ATLAS_DATA || join(root, 'data/tools.json');
const outDir = process.env.ATLAS_AI_OUT || root;
const SITE = (process.env.ATLAS_SITE || readFileSync(join(root, 'CNAME'), 'utf8').trim().replace(/^(?!https?:\/\/)/, 'https://')).replace(/\/$/, '');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));

const has = (v) => v !== null && v !== undefined && String(v).trim() !== '';
const clean = (o) => {
  // מסיר שדות ריקים כדי שהקובץ יישאר קצר וקריא
  if (Array.isArray(o)) return o.map(clean);
  if (o && typeof o === 'object') {
    const r = {};
    for (const [k, v] of Object.entries(o)) {
      const c = clean(v);
      if (c === null || c === undefined || c === '' || (Array.isArray(c) && !c.length)) continue;
      r[k] = c;
    }
    return r;
  }
  return o;
};

const catById = new Map(data.categories.map((c) => [c.id, c]));
const byCat = new Map();
for (const t of data.tools) {
  if (!byCat.has(t.category_id)) byCat.set(t.category_id, []);
  byCat.get(t.category_id).push(t);
}
for (const l of byCat.values()) l.sort((a, b) => a.id - b.id);
const liveCats = data.categories.filter((c) => byCat.has(c.id));
// אותו מספור כמו באתר: לפי סדר ההצגה
const numberOf = new Map();
{ let n = 0; for (const c of liveCats) for (const t of byCat.get(c.id)) numberOf.set(t.id, ++n); }
const orderedTools = liveCats.flatMap((c) => byCat.get(c.id));

const toolUrl = (t) => `${SITE}/#tool-${t.id}`;

// ---------- JSON ציבורי: רשימה לבנה של שדות. אין בו הערות פנימיות, נתיבי קבצי מחקר או הערכות עבודה ----------
function publicTool(t) {
  const f = t.filters || {};
  const plans = (t.pricing?.plans || []).map((p) => ({
    name: p.name,
    price: p.price,
    price_text: p.price_text,
    currency: p.currency,
    billing: p.billing,
    price_period: p.price_period,
    per: p.per,
    includes: p.includes,
    notes: p.notes,
  }));
  return clean({
    number: numberOf.get(t.id),
    id: t.id,
    slug: t.slug,
    name: t.name,
    former_name: t.former_name,
    category: { id: t.category_id, name: catById.get(t.category_id)?.name },
    role: t.role,
    audience: t.audience,
    official_url: t.url,
    page_url: toolUrl(t),
    status: { state: t.status?.state, note: t.status?.note },
    strengths: (t.strengths || []).map((s) => ({ point: s.lead, detail: s.detail })),
    limitations: (t.limitations || []).map((s) => ({ point: s.lead, detail: s.detail })),
    pricing: {
      verification: t.pricing?.verification,
      summary: t.pricing?.summary_line,
      model: t.pricing?.model,
      starting_price: has(f.starting_price?.amount) || f.starting_price?.amount === 0
        ? { amount: f.starting_price.amount, currency: f.starting_price.currency, billing: f.starting_price.billing, plan: f.starting_price.plan, verified: f.starting_price.verified }
        : undefined,
      has_free_plan: f.starting_price?.has_free_plan,
      free_tier: t.pricing?.free_tier,
      trial: t.pricing?.trial,
      plans,
    },
    privacy: { text: t.privacy?.text, training_on_user_data: t.privacy?.training_on_user_data },
    commercial_rights: { text: t.commercial_rights?.text, watermark: t.commercial_rights?.watermark },
    developer_api: { available: t.developer_access?.api, text: t.developer_access?.text },
    integrations: t.integrations?.items,
    platforms: t.platforms?.items,
    hebrew: { text: t.hebrew?.text, supported: f.hebrew?.supported },
    student_benefits: t.student_benefits?.text,
    company: { name: t.company?.name, parent: t.company?.parent, country: t.company?.country },
    latest_version: { name: f.new_notable?.latest_version, date: f.new_notable?.latest_version_date_iso },
    community_signals: {
      recommended: f.tags?.recommended?.value === true ? true : f.tags?.recommended?.value === false ? false : undefined,
      recommended_basis: f.tags?.recommended?.basis,
      popular: f.tags?.popular?.value,
      worthwhile_free_plan: f.tags?.free_plan?.worthwhile,
      watch_out: f.watch_out ? { type: f.watch_out.type, text: f.watch_out.text } : undefined,
    },
    sources: (t.sources || []).map((s) => ({ title: s.title, url: s.url, official: s.official, checked: s.checked })),
    checked_date: t.checked_date,
  });
}

const publicJson = {
  name: 'אטלס כלי בינה מלאכותית',
  description: 'אטלס בעברית של כלי בינה מלאכותית: מה כל כלי עושה, כמה הוא עולה ומה חשוב לדעת עליו. צילום מצב ליום הבדיקה, לא מתעדכן מעצמו.',
  language: 'he',
  site: `${SITE}/`,
  snapshot_date: data.snapshot_date,
  tool_count: data.tools.length,
  notes: [
    'המחירים במטבע המקורי של החברה, בלי המרה. pricing.verification אומר עד כמה המחיר אומת ממקור רשמי.',
    'שדה שחסר פירושו שלא נמצא לו מקור אמין, לא שהערך שלילי.',
    'community_signals מבוססים על ביקורות עצמאיות, לא על מה שהחברה אומרת על עצמה.',
  ],
  categories: liveCats.map((c) => ({ id: c.id, name: c.name, tool_count: byCat.get(c.id).length })),
  tools: orderedTools.map(publicTool),
};

// ---------- llms.txt: קובץ אחד באנגלית, מחובר מהנתונים המובנים ומהתרגום ----------
// התרגום לאנגלית נמצא ב־data/llms-en/*.json (לפי slug של הכלי). המבנה, המחירים והקישורים נשלפים מהנתונים בכל בנייה.
// ב־data/llms-en/_source-hashes.json שמורה טביעת אצבע של הטקסט העברי שממנו תורגם כל כלי. אם הטקסט העברי השתנה, הבנייה מזהירה.
// אחרי שמתרגמים מחדש: node build/build-ai.mjs --accept
const EN_DIR = process.env.ATLAS_EN_DIR || join(root, 'data/llms-en');
const HASH_FILE = join(EN_DIR, '_source-hashes.json');
const warnings = [];
const warn = (m) => { warnings.push(m); console.warn(`WARNING (llms.txt): ${m}`); };

const en = {};
if (existsSync(EN_DIR)) {
  for (const f of readdirSync(EN_DIR).filter((x) => x.endsWith('.json') && !x.startsWith('_')).sort()) {
    Object.assign(en, JSON.parse(readFileSync(join(EN_DIR, f), 'utf8')));
  }
}

// השדות העבריים שהתרגום נשען עליהם
function sourceHash(t) {
  const f = t.filters || {};
  const src = [
    t.role, t.audience, t.status?.note,
    (t.strengths || []).map((s) => [s.lead, s.detail]),
    (t.limitations || []).map((s) => [s.lead, s.detail]),
    t.pricing?.summary_line, t.pricing?.model, t.pricing?.free_tier, t.pricing?.trial,
    (t.pricing?.plans || []).map((p) => [p.name, p.price, p.currency, p.billing, p.includes, p.notes]),
    t.privacy?.text, t.commercial_rights?.text, t.commercial_rights?.watermark,
    t.developer_access?.text, t.hebrew?.text, t.student_benefits?.text, f.watch_out?.text,
  ];
  return createHash('sha256').update(JSON.stringify(src)).digest('hex').slice(0, 12);
}

const EN_CATEGORY = {
  1: 'Assistants, search and research', 2: 'Writing, documents and presentations', 3: 'Images: generation and editing',
  4: 'Graphic design and branding', 5: 'UI design and website building', 6: 'Video: generation from text and images',
  7: 'Video: editing, talking avatars, captions and dubbing', 8: 'Voice, music and sound', 9: '3D',
  10: 'Code and developer assistants', 11: 'No-code app building', 12: 'Agents and automation',
  13: 'Meetings, transcription, knowledge management and data',
};
const EN_VERIFIED = { 'אומת ממקור רשמי': 'verified from official source', 'אומת חלקית': 'partly verified', 'לא אומת': 'not verified' };
const EN_COUNTRY = { 'ארצות הברית': 'USA', 'בריטניה': 'UK', 'גרמניה': 'Germany', 'סין': 'China', 'ספרד': 'Spain', 'שווייץ': 'Switzerland' };
const EN_PER = { 'למשתמש': 'per user', 'למושב': 'per seat', 'לחשבון': 'per account', 'לעורך': 'per editor', 'לאתר': 'per site', 'לפרופיל': 'per profile', 'לרישיון': 'per license' };
const EN_WATCH = {
  'אין החזר, או חלון החזר קצר': 'no refund, or a short refund window',
  'ה־AI אומר שעשה משהו שלא עשה': 'the AI claims to have done something it did not do',
  'הנקודות נגמרות בתוך ימים או באמצע משימה': 'credits run out within days or mid-task',
  'העדכון האחרון הרע את הכלי': 'the latest update made the tool worse',
  'חיוב אחרי ביטול או חידוש שנתי מפתיע': 'charged after cancelling, or a surprise yearly renewal',
  'חסימת חשבון בלי הסבר': 'account blocked without explanation',
  'נקודות יורדות גם כשהתוצאה נכשלה': 'credits are deducted even when the result fails',
  'קשה לעזוב או להוריד את מה שיצרת': 'hard to leave or to export what you created',
  'תמיכה של בוט בלבד': 'bot-only support',
};

// ביטויים עבריים בשמות תוכניות ובשמות גרסאות שאין להם שדה תרגום משלהם
const EN_PHRASES = [
  ["צ'אט באתר ובאפליקציה", 'Chat on web and app'], ['(חינם)', '(free)'], ['(תוספת)', '(add-on)'], ['רישיונות למשקולות פתוחות', 'Open-weight licenses'],
  ['API: נקודות חינם', 'API: free credits'], ['(סביבת עבודה)', '(workspace)'], ['(אחסון)', '(hosting)'], ['(אתר)', '(site)'],
  ['תוכניות בתשלום', 'Paid plans'], ['התוכנית הזולה ביותר', 'Cheapest plan'], ['(כולל Adobe Podcast Premium)', '(includes Adobe Podcast Premium)'],
  ['חשבון Google ללא מנוי', 'Google account without subscription'],
];
const EN_VERSION = {
  'microsoft-copilot': 'Updated Copilot app',
  'topaz-labs': "Wonder 4, Image HDR (per Adobe's announcement)",
  'adobe-express': 'Adobe MAX 2026 updates (AI Assistant, Generate Webpage, Extract Brand, Brand Check)',
  recraft: 'Recraft V4 (V4.1 in current docs)',
  kittl: 'Brand, Remix Styles and Ideogram 4 (product update)',
  'adobe-illustrator': 'Adobe Creative Agent (beta) and Blend controls, MAX 2026',
  figma: 'Figma Make on local code (limited beta)',
  descript: 'Generative Layouts, Underlord Skills and media search (October 2026 updates)',
  marble: 'Marble 1.1 and Marble 1.1 Plus',
  spline: 'Omma (beta)',
  codex: 'GPT-6.2 Astra and GPT-6.2 Sol in Codex',
  lindy: 'Lindy in Slack and Skills',
  'microsoft-copilot-studio': 'Computer use (generally available)',
  zapier: 'AI by Zapier (replaces Zapier Agents)',
  make: 'Next generation of Make AI Agents',
  activepieces: 'Agents (create from a plain-language description)',
};
const enName = (s) => EN_PHRASES.reduce((a, [h, e]) => a.replace(h, e), String(s ?? ''));
const oneLine = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
const endDot = (s) => { const v = oneLine(s); return v && !/[.!?]$/.test(v) ? v + '.' : v; };
const hasHebrew = (s) => /[֐-׿]/.test(String(s ?? ''));

function planPrice(p) {
  if (p.price === 0) return 'free';
  if (has(p.price)) {
    const per = p.price_period === 'לחודש' ? '/month' : p.price_period === 'לשנה' ? '/year' : '';
    const unit = EN_PER[p.per] ? ` ${EN_PER[p.per]}` : '';
    const bill = p.billing === 'שנתי' ? ' billed yearly' : p.billing === 'חודשי' ? ' billed monthly' : '';
    return `${p.price} ${p.currency ?? ''}${per}${unit}${bill}`.replace(/\s+/g, ' ').trim();
  }
  return /הצעת מחיר/.test(p.price_text || '') ? 'custom quote' : 'price not verified';
}

function toolBlock(t) {
  const p = publicTool(t);
  const x = en[t.slug];
  const plansData = t.pricing?.plans || [];
  if (!x) warn(`no English translation for "${t.slug}"; only structured fields are written`);
  else {
    if (!Array.isArray(x.plans) ? plansData.length > 0 : x.plans.length !== plansData.length) {
      warn(`"${t.slug}": ${x.plans?.length ?? 0} translated plans but ${plansData.length} plans in the data; plan details are left out`);
    }
    if (hashes[t.slug] && hashes[t.slug] !== sourceHash(t)) warn(`"${t.slug}": the Hebrew source changed since it was translated; re-translate data/llms-en and run with --accept`);
    if (!hashes[t.slug]) warn(`"${t.slug}": no source fingerprint saved; run with --accept after checking the translation`);
  }
  const plansOk = x && Array.isArray(x.plans) && x.plans.length === plansData.length;
  // תוכניות באותו שם ובאותו תיאור (חיוב חודשי ושנתי) מאוחדות לשורה אחת. תיאור תוכנית החינם לא חוזר כי יש לו שורה משלו.
  const merged = [];
  plansData.forEach((pl, i) => {
    const name = enName(pl.name);
    const inc = oneLine(plansOk ? x.plans[i] : '').replace(/\.$/, '');
    const prev = merged[merged.length - 1];
    if (prev && prev.name === name && prev.inc === inc) prev.prices.push(planPrice(pl));
    else merged.push({ name, inc, prices: [planPrice(pl)], free: pl.price === 0 });
  });
  const plans = merged.map((m) => `${m.name}: ${m.prices.join(' or ')}${m.inc && !(m.free && has(x?.free)) ? ` (${m.inc})` : ''}`);
  const cs = p.community_signals || {};
  const signals = [
    cs.recommended === true ? 'recommended (at least two independent sources)' : '',
    cs.popular === true ? 'popular' : '',
    cs.worthwhile_free_plan === true ? 'worthwhile free plan' : '',
  ].filter(Boolean).join(', ');
  const watch = x?.watch || (cs.watch_out ? EN_WATCH[cs.watch_out.type] : '');
  const company = [p.company?.name, p.company?.parent && `parent ${p.company.parent}`, EN_COUNTRY[p.company?.country]].filter(has).join(', ');
  const state = p.status?.state === 'שינוי שם' ? 'Renamed' : '';
  const status = [state, x?.status].filter(has).join('. ');
  const ver = EN_VERIFIED[p.pricing.verification] || 'not verified';
  const L = (label, v) => (has(v) ? [`${label}: ${oneLine(v)}`] : []);
  const items = (label, arr) => (arr?.length ? [`${label}: ${arr.map((s) => oneLine(s).replace(/\.$/, '')).join(' | ')}`] : []);
  return [
    `## ${p.number}. ${p.name}${p.former_name && !hasHebrew(p.former_name) ? ` (formerly ${p.former_name})` : ''}`,
    `${p.page_url} | official: ${p.official_url}${company ? ` | ${company}` : ''}`,
    ...L('Status', status),
    ...L('What', x?.role),
    ...L('For', x?.audience),
    ...items('Pros', x?.pros),
    ...items('Cons', x?.cons),
    ...L('Price', `${x?.price ? endDot(x.price) : 'not available.'} (${ver})`),
    ...L('Model', x?.model),
    ...L('Free', x?.free),
    ...L('Trial', x?.trial),
    ...(plans.length ? [`Plans: ${plans.join('; ')}`] : []),
    ...L('Privacy', x?.privacy),
    ...L('Rights', x?.rights),
    ...L('Watermark', x?.watermark),
    ...L('API', x?.api),
    ...L('Hebrew', x?.hebrew),
    ...L('Students', x?.students),
    ...L('Community signals', signals),
    ...L('Watch out', watch),
    ...L('Latest version', [EN_VERSION[t.slug] || (hasHebrew(p.latest_version?.name) ? '' : p.latest_version?.name), p.latest_version?.date].filter(has).join(', ')),
    '',
  ].join('\n');
}

const accept = process.argv.includes('--accept');
const hashes = existsSync(HASH_FILE) ? JSON.parse(readFileSync(HASH_FILE, 'utf8')) : {};
if (accept) {
  const fresh = {};
  for (const t of data.tools) if (en[t.slug]) fresh[t.slug] = sourceHash(t);
  mkdirSync(EN_DIR, { recursive: true });
  writeFileSync(HASH_FILE, JSON.stringify(fresh, null, 1) + '\n');
  Object.assign(hashes, fresh);
  console.log(`Saved ${Object.keys(fresh).length} source fingerprints to ${HASH_FILE}`);
}

const blocks = liveCats.flatMap((c) => [`# ${EN_CATEGORY[c.id] || `Category ${c.id}`}`, '', ...byCat.get(c.id).map(toolBlock)]);
const llms = [
  '# AI Tools Atlas',
  '',
  `> English summary of ${data.tools.length} AI tools in ${liveCats.length} categories from a Hebrew-language atlas (אטלס כלי בינה מלאכותית): what each tool does, what it costs and what to know before using it. Snapshot dated ${data.snapshot_date}. Not updated automatically.`,
  '',
  'Notes:',
  '- Prices are in each company\'s original currency, not converted. Each tool says whether its price was verified from an official source.',
  '- A missing field means no reliable source was found, not that the answer is negative (for example, "Hebrew: not mentioned" is not "no Hebrew").',
  '- Check the tool\'s official site for the current price and terms before deciding.',
  '- Each tool has a link to its card in the atlas (Hebrew) and to its official site.',
  '',
  `Atlas: ${SITE}/ | Sources: ${SITE}/sources.html`,
  '',
  ...blocks,
].join('\n');

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'atlas.json'), JSON.stringify(publicJson, null, 1) + '\n');
writeFileSync(join(outDir, 'llms.txt'), llms.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`${outDir}: atlas.json, llms.txt (${publicJson.tools.length} tools, ${warnings.length} warnings)`);
