// שירות ההצבעות והמשוב של האטלס. רץ ב־Cloudflare Workers, עם מסד נתונים D1 שמחובר בשם DB.
// הקובץ הזה מודבק כמו שהוא בעורך של Cloudflare. אין צורך להתקין שום דבר.
//
// מה צריך להגדיר ב־Cloudflare (ההסבר המלא בקובץ worker/SETUP.md):
//   DB        חיבור למסד D1
//   SALT      סוד: מחרוזת אקראית ארוכה. איתה מערבלים את כתובת הרשת, כך שאי אפשר לשחזר אותה.
//   READ_KEY  סוד: מפתח קריאה. רק מי שמחזיק בו יכול לקרוא את המשוב.
//   ALLOWED_ORIGINS  (לא חובה) כתובות האתר שמותר להן לפנות לשירות, מופרדות בפסיק.

const DEFAULT_ORIGINS = 'https://shakedgozlan.github.io';

// ספים שקל לשנות
const LIMITS = {
  votesPerHour: 40,        // כמה הצבעות מותר למכשיר אחד לשלוח בשעה
  feedbackPerHour: 5,      // כמה הודעות משוב מותר למכשיר אחד לשלוח בשעה
  feedbackPerDay: 300,     // תקרה כללית ביום, כדי שהמסד לא יתמלא בהצפה
  textMax: 2000,           // אורך מרבי של הודעת משוב, בתווים
  imageMax: 1300000,       // גודל מרבי של תמונה מקודדת, בתווים (פחות ממגבלת 2MB לשורה במסד)
  toolMax: 999,
};

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS votes (voter TEXT NOT NULL, tool INTEGER NOT NULL, value INTEGER NOT NULL, ts INTEGER NOT NULL, PRIMARY KEY (voter, tool))`,
  `CREATE INDEX IF NOT EXISTS votes_voter_ts ON votes (voter, ts)`,
  `CREATE INDEX IF NOT EXISTS votes_ts ON votes (ts)`,
  `CREATE TABLE IF NOT EXISTS tallies (tool INTEGER PRIMARY KEY, up INTEGER NOT NULL DEFAULT 0, down INTEGER NOT NULL DEFAULT 0)`,
  `CREATE TABLE IF NOT EXISTS feedback (id INTEGER PRIMARY KEY AUTOINCREMENT, ts INTEGER NOT NULL, voter TEXT NOT NULL, kind TEXT NOT NULL, text TEXT NOT NULL, tool INTEGER, target TEXT, context TEXT, image TEXT, status TEXT NOT NULL DEFAULT 'new', note TEXT)`,
  `CREATE INDEX IF NOT EXISTS feedback_status ON feedback (status, id)`,
  `CREATE INDEX IF NOT EXISTS feedback_voter_ts ON feedback (voter, ts)`,
  `CREATE INDEX IF NOT EXISTS feedback_ts ON feedback (ts)`,
];
let schemaReady = false;
async function ensureSchema(db) {
  if (schemaReady) return;
  await db.batch(SCHEMA.map((sql) => db.prepare(sql)));
  schemaReady = true;
}

function allowedOrigins(env) {
  return String(env.ALLOWED_ORIGINS || DEFAULT_ORIGINS).split(',').map((s) => s.trim()).filter(Boolean);
}
function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const h = { 'Vary': 'Origin' };
  if (allowedOrigins(env).includes(origin)) {
    h['Access-Control-Allow-Origin'] = origin;
    h['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
    h['Access-Control-Allow-Headers'] = 'Content-Type';
    h['Access-Control-Max-Age'] = '86400';
  }
  return h;
}
function json(data, status, headers) {
  return new Response(JSON.stringify(data), { status: status || 200, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...(headers || {}) } });
}

// טביעת המבקר: כתובת הרשת וחתימת הדפדפן מעורבלות יחד עם הסוד. נשמרת רק התוצאה, לא הכתובת.
async function voterHash(request, env) {
  const ip = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
  const ua = request.headers.get('User-Agent') || '';
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.SALT), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ip + '\n' + ua));
  return [...new Uint8Array(sig)].slice(0, 16).map((b) => b.toString(16).padStart(2, '0')).join('');
}
function sameText(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
const now = () => Math.floor(Date.now() / 1000);
const toolId = (v) => (Number.isInteger(v) && v >= 1 && v <= LIMITS.toolMax ? v : null);
async function readBody(request, max) {
  const raw = await request.text();
  if (raw.length > max) return null;
  try { const v = JSON.parse(raw); return v && typeof v === 'object' ? v : null; } catch (e) { return null; }
}

/* ---------- הצבעות ---------- */
async function getVotes(db) {
  const { results } = await db.prepare('SELECT tool, up, down FROM tallies').all();
  const tools = {};
  for (const r of results) tools[r.tool] = [r.up, r.down];
  return tools;
}
async function postVote(request, env, cors) {
  const body = await readBody(request, 500);
  const tool = body && toolId(body.tool);
  // 'none' מבטל הצבעה קודמת (לחיצה שנייה על אותו אגודל)
  const value = body && (body.value === 'up' ? 1 : body.value === 'down' ? -1 : body.value === 'none' ? 0 : null);
  if (!tool || value === null) return json({ error: 'bad_request' }, 400, cors);
  const db = env.DB;
  const voter = await voterHash(request, env);
  const t = now();
  const recent = await db.prepare('SELECT COUNT(*) AS n FROM votes WHERE voter = ? AND ts > ?').bind(voter, t - 3600).first();
  if (recent.n >= LIMITS.votesPerHour) return json({ error: 'too_many' }, 429, cors);
  const prev = await db.prepare('SELECT value FROM votes WHERE voter = ? AND tool = ?').bind(voter, tool).first();
  const col = value === 1 ? 'up' : 'down';
  const had = prev && prev.value ? (prev.value === 1 ? 'up' : 'down') : null;
  if (value === 0) {
    // ביטול: השורה נשארת עם ערך 0, כדי שמגבלת הקצב תמשיך לספור את הפעולה, והספירה יורדת באחד
    if (had) {
      await db.batch([
        db.prepare('UPDATE votes SET value = 0, ts = ? WHERE voter = ? AND tool = ?').bind(t, voter, tool),
        db.prepare(`UPDATE tallies SET ${had} = MAX(${had} - 1, 0) WHERE tool = ?`).bind(tool),
      ]);
    }
  } else if (prev && !had) {
    // הצבעה חדשה אחרי ביטול
    await db.batch([
      db.prepare('UPDATE votes SET value = ?, ts = ? WHERE voter = ? AND tool = ?').bind(value, t, voter, tool),
      db.prepare(`INSERT INTO tallies (tool, ${col}) VALUES (?, 1) ON CONFLICT(tool) DO UPDATE SET ${col} = ${col} + 1`).bind(tool),
    ]);
  } else if (!prev) {
    await db.batch([
      db.prepare('INSERT INTO votes (voter, tool, value, ts) VALUES (?, ?, ?, ?)').bind(voter, tool, value, t),
      db.prepare(`INSERT INTO tallies (tool, ${col}) VALUES (?, 1) ON CONFLICT(tool) DO UPDATE SET ${col} = ${col} + 1`).bind(tool),
    ]);
  } else if (prev.value !== value) {
    // אותו מבקר שינה את דעתו: ההצבעה מוחלפת, לא נספרת פעמיים
    const other = value === 1 ? 'down' : 'up';
    await db.batch([
      db.prepare('UPDATE votes SET value = ?, ts = ? WHERE voter = ? AND tool = ?').bind(value, t, voter, tool),
      db.prepare(`UPDATE tallies SET ${col} = ${col} + 1, ${other} = MAX(${other} - 1, 0) WHERE tool = ?`).bind(tool),
    ]);
  }
  const row = await db.prepare('SELECT up, down FROM tallies WHERE tool = ?').bind(tool).first();
  return json({ ok: true, tool, mine: value === 1 ? 'up' : value === -1 ? 'down' : null, up: row ? row.up : 0, down: row ? row.down : 0, changed: prev ? prev.value !== value : value !== 0 }, 200, cors);
}

/* ---------- משוב ---------- */
const KINDS = ['bug', 'feature', 'idea', 'other'];
const clip = (v, n) => (typeof v === 'string' ? v.slice(0, n) : '');
async function postFeedback(request, env, cors) {
  const body = await readBody(request, LIMITS.imageMax + 20000);
  if (!body) return json({ error: 'bad_request' }, 400, cors);
  // שדה מלכודת: אדם לא רואה אותו, תוכנה אוטומטית ממלאת אותו
  if (body.website) return json({ ok: true }, 200, cors);
  const text = clip(body.text, LIMITS.textMax).trim();
  const kind = KINDS.includes(body.kind) ? body.kind : 'other';
  if (text.length < 3) return json({ error: 'empty' }, 400, cors);
  let image = null;
  if (typeof body.image === 'string' && body.image) {
    if (body.image.length > LIMITS.imageMax || !/^data:image\/(jpeg|png);base64,[A-Za-z0-9+/=]+$/.test(body.image)) return json({ error: 'bad_image' }, 400, cors);
    image = body.image;
  }
  const db = env.DB;
  const voter = await voterHash(request, env);
  const t = now();
  const [mine, all] = await db.batch([
    db.prepare('SELECT COUNT(*) AS n FROM feedback WHERE voter = ? AND ts > ?').bind(voter, t - 3600),
    db.prepare('SELECT COUNT(*) AS n FROM feedback WHERE ts > ?').bind(t - 86400),
  ]);
  if (mine.results[0].n >= LIMITS.feedbackPerHour || all.results[0].n >= LIMITS.feedbackPerDay) return json({ error: 'too_many' }, 429, cors);
  const ctx = body.context && typeof body.context === 'object' ? JSON.stringify(body.context).slice(0, 1000) : null;
  await db.prepare('INSERT INTO feedback (ts, voter, kind, text, tool, target, context, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(t, voter, kind, text, toolId(body.tool), clip(body.target, 120) || null, ctx, image).run();
  return json({ ok: true }, 200, cors);
}

/* ---------- קריאה מוגנת במפתח (בשביל הבדיקה היומית) ---------- */
function authed(request, env) {
  const h = request.headers.get('Authorization') || '';
  return !!env.READ_KEY && sameText(h, 'Bearer ' + env.READ_KEY);
}
async function admin(request, env, url) {
  if (!env.READ_KEY) return json({ error: 'not_configured' }, 503);
  if (!authed(request, env)) return json({ error: 'unauthorized' }, 401);
  const db = env.DB;
  const parts = url.pathname.split('/').filter(Boolean); // admin, ...
  if (request.method === 'GET' && parts[1] === 'feedback' && parts.length === 2) {
    const status = url.searchParams.get('status') || 'new';
    const q = status === 'all'
      ? db.prepare('SELECT id, ts, kind, text, tool, target, context, status, note, image IS NOT NULL AS has_image, substr(voter, 1, 8) AS sender FROM feedback ORDER BY id DESC LIMIT 200')
      : db.prepare('SELECT id, ts, kind, text, tool, target, context, status, note, image IS NOT NULL AS has_image, substr(voter, 1, 8) AS sender FROM feedback WHERE status = ? ORDER BY id LIMIT 200').bind(status);
    const { results } = await q.all();
    return json({ items: results });
  }
  if (request.method === 'GET' && parts[1] === 'feedback' && parts[3] === 'image') {
    const row = await db.prepare('SELECT image FROM feedback WHERE id = ?').bind(Number(parts[2])).first();
    if (!row || !row.image) return json({ error: 'not_found' }, 404);
    const m = row.image.match(/^data:(image\/\w+);base64,(.+)$/);
    const bytes = Uint8Array.from(atob(m[2]), (c) => c.charCodeAt(0));
    return new Response(bytes, { headers: { 'Content-Type': m[1], 'Cache-Control': 'no-store' } });
  }
  if (request.method === 'POST' && parts[1] === 'feedback' && parts.length === 3) {
    const body = await readBody(request, 3000);
    const status = body && ['new', 'reported', 'fix', 'wontfix', 'done', 'spam'].includes(body.status) ? body.status : null;
    if (!status) return json({ error: 'bad_request' }, 400);
    await db.prepare('UPDATE feedback SET status = ?, note = COALESCE(?, note) WHERE id = ?').bind(status, clip(body.note, 500) || null, Number(parts[2])).run();
    return json({ ok: true });
  }
  if (request.method === 'GET' && parts[1] === 'votes') {
    const t = now();
    const [tallies, day] = await db.batch([
      db.prepare('SELECT tool, up, down FROM tallies ORDER BY tool'),
      db.prepare('SELECT tool, SUM(value = 1) AS up, SUM(value = -1) AS down FROM votes WHERE ts > ? GROUP BY tool ORDER BY COUNT(*) DESC').bind(t - 86400),
    ]);
    return json({ tallies: tallies.results, last_24h: day.results });
  }
  return json({ error: 'not_found' }, 404);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cors = corsHeaders(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (!env.DB || !env.SALT) return json({ error: 'not_configured', missing: !env.DB ? 'DB' : 'SALT' }, 503, cors);
    try {
      await ensureSchema(env.DB);
      if (url.pathname.startsWith('/admin/')) return await admin(request, env, url);
      if (url.pathname === '/' && request.method === 'GET') return json({ ok: true, service: 'atlas-community' }, 200, cors);
      if (url.pathname === '/votes' && request.method === 'GET') {
        // הספירה נשמרת לדקה במטמון, כדי שעומס גולשים לא יגיע למסד בכל טעינת עמוד
        const cacheKey = new Request(url.origin + '/votes');
        let tools = null;
        const hit = await caches.default.match(cacheKey);
        if (hit) tools = await hit.json();
        else {
          tools = await getVotes(env.DB);
          ctx.waitUntil(caches.default.put(cacheKey, new Response(JSON.stringify(tools), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'max-age=60' } })));
        }
        return json({ tools }, 200, cors);
      }
      if (request.method === 'POST') {
        // פניות כתיבה מתקבלות רק מהאתר עצמו
        if (!allowedOrigins(env).includes(request.headers.get('Origin') || '')) return json({ error: 'forbidden' }, 403, cors);
        if (url.pathname === '/vote') return await postVote(request, env, cors);
        if (url.pathname === '/feedback') return await postFeedback(request, env, cors);
      }
      return json({ error: 'not_found' }, 404, cors);
    } catch (e) {
      return json({ error: 'server_error' }, 500, cors);
    }
  },
};
