#!/usr/bin/env python3
"""Writes data/staging/_community_tags.json and applies it to data/tools.json.

Two fields per tool, mapped from the community research already in research/community/ (no new research):
- filters.tags.recommended {value, basis, evidence}: true only with at least two independent sources from different
  publishers, and no repeated serious complaint about the product itself. null means the reports did not cover the tool.
- filters.watch_out {type_id, type, text, evidence} or null: a repeated user complaint, one of ten fixed types.
  evidence.strength is 'נספר' when the research notes show at least three dated reports (or one large forum thread)
  inside the six months before the check date, and 'לפי סיכום הדוח' when the report lists the complaint as repeated
  but the notes do not let us count the reports one by one.
Source links are looked up by label inside the report files, so a wrong label fails loudly."""
import json, os, re, collections
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALL, UX, VID = ('research/community/all-categories-report.md', 'research/community/user-experience-report.md',
                'research/community/video-report.md')
LINK = re.compile(r'\[([^\]]+)\]\(((?:[^()\s]|\([^)]*\))*)\)')
_text = {f: open(os.path.join(root, f), encoding='utf-8').read() for f in (ALL, UX, VID)}


def src(f, label, section=None, hint=None):
    """One source: the report file, the label used there, and the link behind that label."""
    text = _text[f]
    if section:
        parts = [p for p in re.split(r'\n(?=#{2,3} )', text) if p.startswith(section)]
        assert len(parts) == 1, (f, section, len(parts))
        text = parts[0]
    urls = [u for l, u in LINK.findall(text) if l == label and u.startswith('http') and (not hint or hint in u)]
    assert urls, (f, section, label, hint)
    return {'name': label, 'url': urls[0], 'report': f}


def a(n, label, hint=None):  # all-categories report, by category number
    return src(ALL, label, '## %d.' % n, hint)


def v(tool, label, hint=None):  # video report, by tool heading
    return src(VID, label, '### ' + tool, hint)


def u(label, hint=None):  # user-experience report
    return src(UX, label, None, hint)


T, F, N = True, False, None
# slug: (value, basis, report file, sources)
REC = {
 # 1. assistants
 'chatgpt': (T, 'נבחר לשימוש כללי אצל Zapier ואצל UCStrategies, ומופיע בכל הסקירות שנקראו.', ALL, [a(1, 'Zapier'), a(1, 'UCStrategies')]),
 'claude': (T, 'מקום ראשון אצל eWeek, ונבחר לכתיבה ולקוד בשלוש סקירות.', ALL, [a(1, 'eWeek'), a(1, 'Zapier'), a(1, 'UCStrategies')]),
 'perplexity': (T, 'מומלץ למחקר ולחיפוש: נבחר בארבע מתוך שש הסקירות שנקראו.', ALL, [a(1, 'Zapier'), a(1, 'eWeek'), a(1, "Tom's Guide מחקר")]),
 'gemini': (F, 'מקום שני אצל eWeek, אבל Zapier מתלונן על חוסר עקביות. מודל התמונות שלו, Nano Banana, נבחר בכל שש סקירות התמונות, אך זה לא מספיק לכלי כולו.', ALL, [a(1, 'eWeek'), a(1, 'Zapier')]),
 'microsoft-copilot': (F, 'מופיע בכל הסקירות, אבל תמיד רק כהמלצה למשתמשי Microsoft.', ALL, []),
 'deepseek': (F, 'שתי תוויות חיוביות, כל אחת במקור אחד בלבד.', ALL, []),
 'grok': (F, 'סקירה אחת קובעת שהוא לא מומלץ, ויש תלונות על דיוק.', ALL, []),
 'meta-ai': (F, 'מוזכר רק כבחירה לרשתות חברתיות.', ALL, []),
 # 2. writing
 'gamma': (F, 'נבחר בשתי סקירות מצגות, אחת מהן ישנה, ומשתמשים מדווחים שה־AI מודיע על שינוי שלא ביצע.', ALL, []),
 'grammarly': (F, 'נבחר כמנצח כללי רק במקור ישן.', ALL, []),
 'quillbot': (F, 'אף סוקר לא המליץ עליו. הציון הגבוה אצל משתמשים מגיע כנראה מביקורות שהחברה מזמינה.', UX, []),
 'beautiful-ai': (F, 'שתי סקירות, שתיהן עם תוויות נישה.', ALL, []),
 'jasper': (F, 'נבחר בשלוש סקירות, אבל לשיווק בלבד ורק אחת מהן עדכנית.', ALL, []),
 # 3. images
 'midjourney': (T, 'מומלץ לסגנון אמנותי אצל Zapier, Buffer ו־eWeek. לא נמצא ב־30 המקומות הראשונים בטבלת הדירוג של Artificial Analysis.', ALL, [a(3, 'Zapier'), a(3, 'Buffer'), a(3, 'eWeek')]),
 'adobe-firefly': (F, 'נבחר בכל שש הסקירות לעבודה בתוך Adobe, אבל משתמשים מדווחים על ירידה באיכות מאז העדכונים, ולכן אין המלצה מלאה.', UX, [a(3, 'Zapier'), u('Adobe Community')]),
 'magnific': (F, 'שלוש בחירות, שתיים מהן במקורות חלשים.', ALL, []),
 'flux': (F, 'נבחר כקוד הפתוח הטוב ביותר במקור אחד בלבד.', ALL, []),
 'ideogram': (F, 'נבחר לטקסט בתמונה בשני מקורות, אבל Zapier כותב שפיגר.', ALL, []),
 'leonardo-ai': (F, 'שלוש בחירות, אחת מהן ישנה, והציון הגבוה אצל משתמשים מגיע מביקורות מוזמנות.', ALL, []),
 # 4. graphic design
 'canva': (T, 'מנצח בהשוואה של Style Factory, ציון 4.7 ב־Capterra על סמך 13,450 ביקורות, ונבחר גם אצל TechRadar (מקור ישן).', ALL, [a(4, 'Style Factory', 'adobe'), a(4, 'Capterra'), a(4, 'TechRadar')]),
 'recraft': (T, 'מומלץ לעיצוב ולקובצי וקטור אצל Designlab, Zapier, Buffer ו־G2.', ALL, [a(4, 'Designlab'), a(4, 'Zapier', 'image'), a(4, 'Buffer'), a(4, 'G2')]),
 'kittl': (F, 'מקרה גבולי: ציון 4.3 במבחן של Style Factory, והמקור השני הוא ביקורות Trustpilot שהחברה מזמינה ורובן ישנות. לפי כלל המחקר זה לא מספיק להמלצה מלאה.', UX, [a(4, 'Style Factory Kittl'), a(4, 'Trustpilot Kittl')]),
 'looka': (F, 'ביקורת פושרת בשני מקורות.', ALL, []),
 'adobe-express': (F, 'נבחר לעסקים במקור ישן, ומפסיד ל־Canva בהשוואה של Style Factory.', ALL, []),
 # 5. ui and web
 'wix': (T, 'מוביל בשתי סקירות מעשיות של בוני אתרים, אצל Zapier ואצל Tech.co.', ALL, [a(5, 'Zapier'), a(5, 'Tech.co')]),
 'figma': (F, 'ל־Figma Make יש מבחן מעצבים אחד, ו־Zapier פסל אותו.', ALL, []),
 'framer': (F, 'בחירה אחת בלבד.', ALL, []),
 'relume': (F, 'נבחר על מבנה האתר במבחן אחד בלבד.', ALL, []),
 'google-stitch': (F, 'מבחן מעצבים אחד, שממליץ עליו לחקירה ראשונית בלבד.', ALL, []),
 'v0': (F, 'נבחר רק במקור ישן.', ALL, []),
 # 6. video generation
 'kling': (T, 'מקום שלישי במבחן מעשי עדכני של Curious Refuge, ושבחים חוזרים במקורות נוספים.', VID, [v('Kling AI', 'Curious Refuge'), v('Kling AI', 'AA'), v('Kling AI', 'Tech Hacker')]),
 'dreamina': (T, 'מודל Seedance במקום ראשון במבחנים המעשיים של Curious Refuge ובטבלת תמונה־לווידאו של Artificial Analysis.', VID, [v('Dreamina', 'Curious Refuge', 'ai-video'), v('Dreamina', 'AA תמונה־לווידאו'), v('Dreamina', 'Theoretically Media')]),
 'wan': (T, 'מקום ראשון בטבלת טקסט־לווידאו של Artificial Analysis, ושבחים במבחן מעשי של Curious Refuge. ההמלצה נשענת על בודק מעשי אחד.', VID, [v('Wan', 'AA'), v('Wan', 'Curious Refuge, ביקורת')]),
 'google-flow': (F, 'נבחר אצל Zapier, אבל המודל Veo 3.1 ירד בדירוגים.', VID, []),
 'runway': (F, 'שבחים לכלי העריכה, ביקורת על איכות הווידאו.', VID, []),
 'hailuo': (F, 'בצמרת טבלאות הדירוג, אבל הביקורת המעשית בינונית.', VID, []),
 'luma': (F, 'שבחים למראה הקולנועי, אבל מתחרים עקפו אותו.', VID, []),
 'pika': (F, 'דירוג בינוני־גבוה בלי ביקורת מעשית של המודל החדש.', VID, []),
 'higgsfield': (F, 'הביקורות שנמצאו לא בדקו את יצירת הווידאו.', VID, []),
 'vidu': (F, 'דירוג נמוך ומעט ביקורות.', VID, []),
 # 7. video editing
 'descript': (T, 'נבחר בשתי הסקירות העדכניות, אצל Zapier ואצל Buffer.', ALL, [a(7, 'Zapier'), a(7, 'Buffer')]),
 'opusclip': (T, 'נבחר בשתי הסקירות העדכניות, אצל Zapier ואצל Buffer.', ALL, [a(7, 'Zapier'), a(7, 'Buffer')]),
 'veed': (T, 'נבחר בשתי הסקירות העדכניות, אצל Zapier ואצל Buffer. לא נקראו ביקורות משתמשים.', ALL, [a(7, 'Zapier'), a(7, 'Buffer')]),
 'capcut': (F, 'בחירה אחת בלבד, ומשתמשים מתלוננים שכמעט כל התכונות עברו לתשלום.', ALL, []),
 'heygen': (F, 'בחירה עדכנית אחת בלבד.', ALL, []),
 'synthesia': (F, 'בחירה עדכנית אחת בלבד.', ALL, []),
 # 8. audio
 'suno': (T, 'מוביל בטבלת המוזיקה של Artificial Analysis ונבחר בשתי סקירות. על גרסה 6 יש גם ביקורת מעורבת.', ALL, [a(8, 'AA כלי'), a(8, 'ToolChase'), a(8, 'SoftPicker')]),
 'elevenlabs': (T, 'מקום ראשון בטבלת הדיבור של Artificial Analysis ובחירה ראשונה אצל Zapier.', ALL, [a(8, 'AA דיבור'), a(8, 'Zapier')]),
 'speechify': (T, 'בעשירייה הראשונה בטבלת הדיבור של Artificial Analysis ונבחר אצל Zapier.', ALL, [a(8, 'AA'), a(8, 'Zapier')]),
 'udio': (F, 'שתי סקירות, אבל לא מופיע בטבלת הדירוג, ומשתמשים מדווחים שאי אפשר להוריד שירים.', ALL, []),
 'murf': (F, 'נבחר אצל Zapier ובמקור ישן אחד.', ALL, []),
 'google-flow-music': (F, 'מודל Lyria מופיע בטבלת דירוג אחת בלבד.', ALL, []),
 # 9. 3d
 'tripo': (F, 'המלצה של All3DP. המקום הראשון בטבלה מגיע דרך בלוג של מתחרה.', ALL, []),
 'meshy': (F, 'המלצה של All3DP עם הסתייגות על חוסר עקביות.', ALL, []),
 'hyper3d-rodin': (F, 'All3DP לא התרשם, והמקום הראשון מופיע רק בכתבה מקדמת.', ALL, []),
 'hunyuan-3d': (F, 'נבחר כקוד הפתוח הטוב ביותר במקור אחד ישן.', ALL, []),
 # 10. code
 'claude-code': (T, 'הכלי האהוב ביותר בסקר של Pragmatic Engineer, ונבחר אצל Zapier ואצל The New Stack.', ALL, [a(10, 'Pragmatic Engineer'), a(10, 'Zapier'), a(10, 'The New Stack')]),
 'cursor': (F, 'נבחר אצל Zapier ואצל The New Stack, אבל תלונות חוזרות של משתמשים על חיובים, על החזרים ועל תמיכה מחלישות את ההמלצה לפי דוח חוויית המשתמשים.', UX, [a(10, 'Zapier'), a(10, 'The New Stack'), u('Trustpilot Cursor')]),
 'github-copilot': (F, 'נבחר אצל Zapier בלבד, ומשתמשים מתוסכלים מאז המעבר לחיוב לפי שימוש.', ALL, []),
 'codex': (F, 'נבחר אצל The New Stack בלבד; הסקירה של Zapier ישנה.', ALL, []),
 'google-antigravity': (F, 'נבחר אצל The New Stack בלבד.', ALL, []),
 'devin': (F, 'נבחר אצל Zapier בלבד.', ALL, []),
 # 11. no-code apps
 'lovable': (T, 'נבחר אצל Zapier ואצל Designlab, עם ציון 4.2 ב־Trustpilot על סמך 1,894 ביקורות.', ALL, [a(11, 'Zapier'), a(11, 'Designlab'), a(11, 'Trustpilot Lovable')]),
 'replit': (F, 'נבחר אצל Zapier וב־G2, אבל סוקרים ומשתמשים מדווחים שהסוכן מודיע שתיקן בעיה כשלא תיקן, ולכן אין המלצה מלאה.', UX, [a(11, 'Zapier'), a(11, 'Trustpilot Replit')]),
 'bolt': (F, 'רק סקירה עדכנית אחת.', ALL, []),
 'base44': (F, 'נבחר רק במקור ישן.', ALL, []),
 'google-ai-studio': (F, 'לא נמצאה המלצה.', ALL, []),
 'bubble': (F, 'בחירה אחת בלבד.', ALL, []),
 # 12. agents and automation
 'zapier': (F, 'המקורות שממליצים הם בעלי אינטרס או ישנים.', ALL, []),
 'n8n': (F, 'שני המקורות שממליצים הם בעלי אינטרס.', ALL, []),
 'make': (F, 'מקור אחד בלבד, בעל אינטרס.', ALL, []),
 'manus': (F, 'מקום שני במקור אחד, וביקורות משתמשים גרועות מאוד.', ALL, []),
 # 13. meetings and knowledge
 'otter': (F, 'שלוש סקירות, אבל אין מבחן מעשי עדכני.', ALL, []),
 'fireflies': (F, 'מקור עדכני אחד ומקור ישן אחד. משתמשים ב־G2 מדרגים אותו מעל Otter.', ALL, []),
 'fathom': (F, 'נבחר אצל Zapier בלבד, כאפשרות חינמית.', ALL, []),
 'granola': (F, 'נבחר אצל Zapier בלבד.', ALL, []),
 'notion': (F, 'הציונים של Notion AI סותרים זה את זה, ואחד המקורות ישן.', ALL, []),
 'gemini-notebook': (F, 'לא נקראה סקירה עדכנית.', ALL, []),
 'julius': (F, 'מקור אחד בלבד.', ALL, []),
 'wispr-flow': (F, 'הסוקרים מיוצגים במקור אחד ישן עם קישורי שותפים. משתמשים משבחים אותו, אבל רוב הביקורות ישנות.', ALL, []),
}

TYPES = collections.OrderedDict([
 ('credits_on_failure', 'נקודות יורדות גם כשהתוצאה נכשלה'),
 ('credits_run_out', 'הנקודות נגמרות בתוך ימים או באמצע משימה'),
 ('no_refund', 'אין החזר, או חלון החזר קצר'),
 ('billing_surprise', 'חיוב אחרי ביטול או חידוש שנתי מפתיע'),
 ('bot_support', 'תמיכה של בוט בלבד'),
 ('ai_false_report', 'ה־AI אומר שעשה משהו שלא עשה'),
 ('update_regression', 'העדכון האחרון הרע את הכלי'),
 ('lock_in', 'קשה לעזוב או להוריד את מה שיצרת'),
 ('account_block', 'חסימת חשבון בלי הסבר'),
 ('privacy_unclear', 'פרטיות לא ברורה'),
])
COUNTED, SUMMARY = 'נספר', 'לפי סיכום הדוח'
# slug: (type_id, text, strength, sources, note)
WATCH = {
 'google-flow': ('update_regression', 'אחרי עדכון באוגוסט 2026 דיווחו משתמשים באנדרואיד על שגיאות יצירה ועל הורדה ב־720p במקום 1080p.', COUNTED, [u('unstar Flow')], 'אתר ניטור תיעד 15 ביקורות שליליות ב־Google Play בתוך 48 שעות, ב־22 באוגוסט 2026. זה מקור אחד.'),
 'runway': ('credits_on_failure', 'משתמשים מדווחים שנקודות יורדות גם על יצירות שנכשלו, ושקשה לקבל החזר.', SUMMARY, [v('Runway', 'Trustpilot')], 'Trustpilot: 1.1 מתוך 5 על סמך 378 ביקורות. התאריכים של הביקורות הבודדות לא נרשמו בדוח.'),
 'kling': ('credits_on_failure', 'משתמשים מדווחים שנקודות יורדות גם על תוצאות כושלות או לא שמישות, ושאין החזר.', SUMMARY, [v('Kling AI', 'Trustpilot'), u('App Store Kling')], 'Trustpilot: 1.2 מתוך 5 על סמך 431 ביקורות. רוב הביקורות הכתובות ב־App Store הן מ־2025.'),
 'chatgpt': ('bot_support', 'משתמשים מדווחים שפניות לתמיכה ובקשות החזר נענות בתשובה אוטומטית בלבד.', SUMMARY, [u('Trustpilot ChatGPT')], 'Trustpilot: 4,016 ביקורות, 75% מהן כוכב אחד. בהערות המחקר יש דוגמה מתוארכת אחת (17 בנובמבר 2026).'),
 'claude': ('account_block', 'משתמשים מדווחים על חשבונות שנחסמו בלי הסבר, ועל תמיכה שהיא בוט בלבד.', SUMMARY, [u('Trustpilot Claude')], 'Trustpilot: 2,164 ביקורות, 81% מהן כוכב אחד. התלונות נקראו בביקורות מנובמבר 2026.'),
 'perplexity': ('billing_surprise', 'משתמשים מדווחים על חיוב שנמשך אחרי ביטול ועל תהליך ביטול מסורבל.', SUMMARY, [u('Trustpilot Perplexity')], 'Trustpilot: 849 ביקורות, 83% מהן כוכב אחד. בהערות המחקר שתי דוגמאות מתוארכות מאוקטובר 2026.'),
 'gamma': ('ai_false_report', 'משתמשים מדווחים שה־AI מודיע שביצע שינוי בשקופית בלי ששינה דבר, ושחלון ההחזר הוא 3 ימים בלבד.', SUMMARY, [u('Trustpilot Gamma')], 'Trustpilot: 1.6 מתוך 5 על סמך 131 ביקורות. בהערות המחקר דוגמה מתוארכת אחת לכל תלונה.'),
 'midjourney': ('billing_surprise', 'משתמשים מדווחים על חיוב שנמשך אחרי ביטול המנוי.', SUMMARY, [u('Trustpilot Midjourney')], 'Trustpilot: 1.7 מתוך 5 על סמך 373 ביקורות. בהערות המחקר דוגמה מתוארכת אחת (6 באוגוסט 2026).'),
 'adobe-firefly': ('credits_on_failure', 'משתמשים מדווחים שנקודות בתשלום יורדות גם כשהיצירה נכשלת, ושהאיכות ירדה מאז העדכונים האחרונים.', SUMMARY, [u('Adobe Community'), u('שרשור 2')], 'פוסט אחד נקרא במלואו (15 באוקטובר 2026). שאר השרשורים בפורום של Adobe נספרו לפי הכותרת בלבד.'),
 'recraft': ('no_refund', 'משתמשים מדווחים על סירוב להחזר אחרי שימוש ביותר מ־30 נקודות, ועל נקודות שיורדות על יצירות כושלות.', SUMMARY, [u('Trustpilot Recraft')], 'Trustpilot: 2.4 מתוך 5 על סמך 47 ביקורות, 40 מהן מהשנה האחרונה. בהערות המחקר שתי דוגמאות מתוארכות לכל תלונה.'),
 'krea': ('credits_run_out', 'משתמשים מדווחים שהנקודות נגמרות מהר, בעיקר כשמשתמשים בסוכן.', SUMMARY, [u('Trustpilot Krea')], 'Trustpilot: 3.6 מתוך 5 על סמך 177 ביקורות. בדוח הכלי רשום תחת "נקודות יורדות גם כשהתוצאה נכשלה"; הסוג כאן נבחר לפי נוסח התלונות עצמן.'),
 'figma': ('credits_run_out', 'ב־Figma Make משתמשים מדווחים ש־3,000 נקודות נגמרות בתוך כ־3 ימים, בעיקר על תיקון טעויות של ה־AI.', COUNTED, [u('פורום Figma')], 'שרשור בפורום הרשמי של Figma עם 190 תגובות, פעיל ממרץ עד 13 בנובמבר 2026.'),
 'wix': ('lock_in', 'משתמשים מדווחים שקשה להעביר אתר ודומיין החוצה, ועל חידוש במחיר גבוה בלי הודעה.', SUMMARY, [u('Trustpilot Wix')], 'Trustpilot: 3.4 מתוך 5 על סמך 29,105 ביקורות. בהערות המחקר שתי דוגמאות מתוארכות לכל תלונה, מאוגוסט ומספטמבר 2026.'),
 'capcut': ('lock_in', 'משתמשים מדווחים שהייצוא נחסם בשלב האחרון עד שמשלמים, ושתכונות שהיו חינמיות עברו ל־Pro.', COUNTED, [u('unstar', 'capcut')], 'ניתוח של 14,000 ביקורות מיולי עד ספטמבר 2026: 31.2% מהביקורות השליליות המפורטות עוסקות בחומת התשלום. הכלי לא מופיע בטבלת האזהרות שבדוח; הסוג הוא הקרוב ביותר מבין העשרה.'),
 'udio': ('lock_in', 'משתמשים מדווחים שאי אפשר להוריד את השירים שיצרו.', COUNTED, [u('Trustpilot Udio')], 'שלוש ביקורות מתוארכות בתוך חצי השנה האחרונה: 28 ביוני, 5 ביולי ו־21 ביולי 2026.'),
 'elevenlabs': ('billing_surprise', 'משתמשים מדווחים על חיוב שנמשך אחרי ביטול ועל נקודות שאבדו.', SUMMARY, [u('Trustpilot ElevenLabs')], 'Trustpilot: 3.0 מתוך 5 על סמך 1,126 ביקורות, 37% מהן כוכב אחד. נקרא בסבב המחקר הקודם.'),
 'speechify': ('billing_surprise', 'משתמשים מדווחים על חידושי מנוי וחיובים לא צפויים, ועל קושי לקבל החזר.', SUMMARY, [u('Trustpilot Speechify')], 'התלונות נקראו בביקורות מאוקטובר 2026. הציון הכללי גבוה (4.7), כנראה בזכות ביקורות שהחברה מזמינה.'),
 'cursor': ('no_refund', 'משתמשים מדווחים על חיובים ושדרוגי מסלול בלי אישור, בלי החזר, ועם תמיכה שהיא בוט בלבד.', SUMMARY, [u('Trustpilot Cursor')], 'Trustpilot: 1.5 מתוך 5 על סמך 351 ביקורות. התלונות נקראו בביקורות מספטמבר ומאוקטובר 2026.'),
 'github-copilot': ('credits_run_out', 'מאז המעבר לחיוב לפי שימוש ביוני 2026 משתמשים מדווחים שהקצבה החודשית נגמרת בתוך יום־יומיים.', COUNTED, [u('VSM')], 'כתבה של Visual Studio Magazine מ־7 באוגוסט 2026 מביאה שלושה דיווחים של משתמשים שונים.'),
 'replit': ('ai_false_report', 'משתמשים וסוקרים מדווחים שהסוכן מודיע שתיקן בעיה כשלא תיקן, ועל חיובי חריגה.', SUMMARY, [u('Trustpilot Replit')], 'נקרא בסבב המחקר הקודם ולא נקרא מחדש.'),
 'bolt': ('credits_on_failure', 'משתמשים מדווחים שהטוקנים נשרפים על ניסיונות שלא מניבים תוצאה, ושאין החזר.', COUNTED, [u('Trustpilot Bolt')], 'שלוש ביקורות מתוארכות: 4 באוקטובר, 29 באוקטובר ו־11 בנובמבר 2026.'),
 'base44': ('credits_on_failure', 'משתמשים מדווחים שנקודות יורדות גם כשהתוצאה שגויה, ועל מנוי חודשי שהפך לשנתי.', SUMMARY, [u('Trustpilot Base44')], 'Trustpilot: 2.7 מתוך 5 על סמך 925 ביקורות, 54% מהן כוכב אחד. בהערות המחקר דוגמה מתוארכת אחת לכל תלונה.'),
 'manus': ('credits_on_failure', 'משתמשים מדווחים שאלפי נקודות יורדות על משימות שלא בוצעו, ושהחזרים לא מטופלים.', SUMMARY, [u('Trustpilot Manus')], 'Trustpilot: 1.2 מתוך 5 על סמך 210 ביקורות, 95% מהן כוכב אחד.'),
 'zapier': ('billing_surprise', 'משתמשים מדווחים על חידוש שנתי שלא שמו לב אליו, על חיובי חריגה ועל סירוב להחזר.', SUMMARY, [u('Trustpilot Zapier')], 'Trustpilot: 1.3 מתוך 5 על סמך 327 ביקורות. בהערות המחקר דוגמה מתוארכת אחת לכל תלונה, מאוגוסט עד אוקטובר 2026.'),
}

p = os.path.join(root, 'data/tools.json')
d = json.load(open(p, encoding='utf-8'))
slugs = [t['slug'] for t in d['tools']]
assert not set(REC) - set(slugs), set(REC) - set(slugs)
assert not set(WATCH) - set(slugs), set(WATCH) - set(slugs)
out = {}
for s in slugs:
    if s in REC:
        val, basis, f, sources = REC[s]
        if val: assert len({re.sub(r'^https?://(www\.)?', '', x['url']).split('/')[0] for x in sources}) >= 2, s
        rec = {'value': val, 'basis': basis, 'evidence': {'file': f, 'sources': sources}}
    else:
        rec = {'value': None, 'basis': 'הכלי לא נבדק בדוחות המחקר על קהילות וביקורות.', 'evidence': {'file': None, 'sources': []}}
    w = None
    if s in WATCH:
        tid, text, strength, sources, note = WATCH[s]
        w = {'type_id': tid, 'type': TYPES[tid], 'text': text,
             'evidence': {'file': UX, 'sources': sources, 'strength': strength, 'note': note, 'checked': '2026-11-18'}}
    out[s] = {'recommended': rec, 'watch_out': w}
json.dump(out, open(os.path.join(root, 'data/staging/_community_tags.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
for t in d['tools']:
    t['filters']['tags']['recommended'] = out[t['slug']]['recommended']
    t['filters']['watch_out'] = out[t['slug']]['watch_out']
open(p, 'w', encoding='utf-8').write(json.dumps(d, ensure_ascii=False, indent=2) + '\n')
c = collections.Counter(str(o['recommended']['value']) for o in out.values())
print(len(out), 'tools; recommended', dict(c))
print('recommended:', [s for s in slugs if out[s]['recommended']['value']])
print('watch_out:', [(s, out[s]['watch_out']['type_id'], out[s]['watch_out']['evidence']['strength']) for s in slugs if out[s]['watch_out']])
