// בונה מקובץ הנתונים שלושה קבצים לכלי בינה מלאכותית: atlas.json, llms.txt ו־llms-full.txt.
// הקבצים נוצרים אוטומטית. לא לערוך אותם ביד: משנים את data/tools.json ומריצים את הבנייה מחדש.
// הרצה: node build/build-ai.mjs   (build/build.mjs מריץ אותו בעצמו בסופו)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
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

// ---------- llms.txt: תקציר וקישורים ----------
const oneLine = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
const noDot = (s) => oneLine(s).replace(/[.。]+$/, '');
const priceBrief = (t) => oneLine(t.pricing?.summary_line) || 'מחיר לא אומת';

const llms = [
  '# אטלס כלי בינה מלאכותית',
  '',
  `> אטלס בעברית של ${data.tools.length} כלי בינה מלאכותית ב־${liveCats.length} קטגוריות: מה כל כלי עושה, כמה הוא עולה, מה חשוב לדעת עליו ומה אומרים עליו משתמשים. צילום מצב ליום ${data.snapshot_date}. האתר נקרא מימין לשמאל.`,
  '',
  'הערות לשימוש:',
  '',
  '- המחירים במטבע המקורי של החברה, בלי המרה. כל כלי מסומן אם המחיר אומת ממקור רשמי, אומת חלקית או לא אומת.',
  '- שדה שחסר פירושו שלא נמצא לו מקור אמין, לא שהערך שלילי (למשל, "המקור לא מזכיר עברית" אינו "אין עברית").',
  '- האטלס אינו מתעדכן מעצמו. כדאי לבדוק את המחיר באתר הרשמי של הכלי לפני החלטה.',
  '',
  '## קבצים',
  '',
  `- [atlas.json](${SITE}/atlas.json): כל הנתונים במבנה קבוע, לשימוש בקוד ובסוכני בינה מלאכותית.`,
  `- [llms-full.txt](${SITE}/llms-full.txt): כל הכלים בטקסט רציף, כולל מחירים, יתרונות ומגבלות.`,
  `- [האטלס באתר](${SITE}/): הגרסה לקריאה, עם סינון וחיפוש.`,
  `- [מקורות](${SITE}/sources.html): רשימת המקורות שעליהם נשען האטלס.`,
  '',
  ...liveCats.flatMap((c) => [
    `## ${c.name}`,
    '',
    ...byCat.get(c.id).map((t) => `- [${t.name}](${toolUrl(t)}): ${oneLine(t.role)} מחיר: ${priceBrief(t)}`),
    '',
  ]),
].join('\n');

// ---------- llms-full.txt: טקסט מלא ----------
const list = (label, arr) => (arr?.length ? [`${label}:`, ...arr.map((x) => `- ${oneLine(x.point)}: ${oneLine(x.detail)}`)] : []);
const line = (label, v) => (has(v) ? [`${label}: ${oneLine(v)}`] : []);

function fullTool(t) {
  const p = publicTool(t);
  const plans = (p.pricing.plans || []).map((x) => {
    const price = has(x.price_text) ? x.price_text : x.price === 0 ? 'חינם' : has(x.price) ? `${x.price} ${x.currency ?? ''}${x.price_period ? ` ${x.price_period}` : ''}`.trim() : 'מחיר לא אומת';
    return `- ${x.name}${x.billing ? ` (חיוב ${x.billing})` : ''}: ${price}${x.includes ? `. כולל: ${noDot(x.includes)}` : ''}${x.notes ? `. ${noDot(x.notes)}` : ''}`;
  });
  const cs = p.community_signals || {};
  const signals = [
    cs.recommended === true ? 'מומלץ (לפחות שני מקורות עצמאיים)' : '',
    cs.popular === true ? 'פופולרי' : '',
    cs.worthwhile_free_plan === true ? 'תוכנית חינמית משתלמת' : '',
  ].filter(Boolean).join(', ');
  return [
    `## ${p.number}. ${p.name}`,
    '',
    ...line('קטגוריה', p.category?.name),
    ...line('מה זה', p.role),
    ...line('למי מתאים', p.audience),
    `אתר רשמי: ${p.official_url}`,
    `בעמוד האטלס: ${p.page_url}`,
    ...line('סטטוס', [p.status?.state, p.status?.note].filter(has).join(': ')),
    ...line('חברה', [p.company?.name, p.company?.parent && `חברת האם ${p.company.parent}`, p.company?.country].filter(has).join(', ')),
    ...line('גרסה אחרונה', [p.latest_version?.name, p.latest_version?.date].filter(has).join(', ')),
    ...line('סימנים מהקהילה', signals),
    ...(cs.watch_out ? [`שימו לב (${cs.watch_out.type}): ${oneLine(cs.watch_out.text)}`] : []),
    '',
    ...list('יתרונות', p.strengths),
    ...list('מגבלות', p.limitations),
    '',
    `מחיר (${p.pricing.verification ?? 'לא אומת'}): ${oneLine(p.pricing.summary) || 'לא אומת'}`,
    ...line('מודל תמחור', p.pricing.model),
    ...line('חינם', p.pricing.free_tier),
    ...line('ניסיון', p.pricing.trial),
    ...(plans.length ? ['תוכניות:', ...plans] : []),
    '',
    ...line('פרטיות', p.privacy?.text),
    ...line('זכויות שימוש מסחרי', p.commercial_rights?.text),
    ...line('סימן מים', p.commercial_rights?.watermark),
    ...line('ממשק למפתחים', [p.developer_api?.available, p.developer_api?.text].filter(has).join(': ')),
    ...line('עברית', p.hebrew?.text),
    ...line('פלטפורמות', (p.platforms || []).join(', ')),
    ...line('הטבות לסטודנטים', p.student_benefits),
    ...line('נבדק', p.checked_date),
    '',
  ].join('\n');
}

const full = [
  '# אטלס כלי בינה מלאכותית: הנתונים המלאים',
  '',
  `> ${data.tools.length} כלים ב־${liveCats.length} קטגוריות, צילום מצב ליום ${data.snapshot_date}. מחירים במטבע המקורי. שדה חסר פירושו שלא נמצא לו מקור אמין. הגרסה המובנית: ${SITE}/atlas.json`,
  '',
  ...liveCats.flatMap((c) => [`# ${c.name}`, '', ...byCat.get(c.id).map(fullTool)]),
].join('\n');

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'atlas.json'), JSON.stringify(publicJson, null, 1) + '\n');
writeFileSync(join(outDir, 'llms.txt'), llms + '\n');
writeFileSync(join(outDir, 'llms-full.txt'), full);
console.log(`${outDir}: atlas.json, llms.txt, llms-full.txt (${publicJson.tools.length} tools)`);
