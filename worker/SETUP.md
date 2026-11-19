# שירות ההצבעות והמשוב

האתר עצמו סטטי, ולכן הצבעות ומשוב נשמרים בשירות קטן שרץ ב־Cloudflare (תוכנית חינמית).

## מה יש כאן

- `worker/worker.js`: הקוד של השירות. מודבק כמו שהוא בעורך של Cloudflare.
- `assets/community.js`, `assets/community.css`: ההצבעה, התג ״בחירת הגולשים״ ולחצן המשוב באתר.
- `assets/vendor/modern-screenshot.js`: ספרייה לצילום החלק שסומן (רישיון MIT). נטענת רק כשמסמנים חלק בעמוד.
- `build/community.config.json`: כתובת השירות. כשהיא ריקה, האתר נבנה בלי הצבעות ובלי לחצן משוב.

## הקמה ב־Cloudflare

1. בעמוד **D1 SQL database**: Create Database, בשם `atlas`.
2. בעמוד **Workers & Pages**: Create application, Start with Hello World!, בשם `atlas-community`, Deploy.
3. בעורך הקוד של ה־Worker: למחוק הכול, להדביק את `worker/worker.js`, Deploy.
4. בלשונית **Bindings**: Add binding, D1 database, Variable name `DB`, לבחור את `atlas`.
5. ב־**Settings**, תחת **Variables and Secrets**: להוסיף שני סודות (Secret), `SALT` ו־`READ_KEY`, כל אחד מחרוזת אקראית ארוכה.
6. לכתוב את כתובת ה־Worker בקובץ `build/community.config.json` ולהריץ `node build/build.mjs`.

הטבלאות במסד נוצרות לבד בפנייה הראשונה.

## כללים

- הצבעה אחת לכל כלי לכל מכשיר: כתובת הרשת וחתימת הדפדפן מעורבלות יחד עם `SALT` (HMAC-SHA256). הכתובת עצמה לא נשמרת.
- ״בחירת הגולשים״: 20 הצבעות לפחות ו־70 אחוז ממליצים. הספים בראש `assets/community.js`.
- מגבלות קצב: 40 הצבעות ו־5 הודעות משוב לשעה למכשיר. הספים בראש `worker/worker.js`.
- קריאת המשוב: `GET /admin/feedback` עם הכותרת `Authorization: Bearer READ_KEY`. תמונה: `GET /admin/feedback/ID/image`. סימון טיפול: `POST /admin/feedback/ID` עם `{"status":"reported"}`. חריגות בהצבעות: `GET /admin/votes`.

## בדיקה מקומית

`npx wrangler dev --local` עם קובץ `wrangler.toml` שמגדיר את `DB`, `SALT`, `READ_KEY` ו־`ALLOWED_ORIGINS`, ובניית האתר עם `ATLAS_API=http://localhost:8787 node build/build.mjs`.
