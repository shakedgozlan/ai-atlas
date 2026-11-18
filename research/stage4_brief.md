# Stage 4 research brief (shared by all category researchers)

Check date for everything: **2026-11-18**. The atlas is a snapshot of that day.
Repository root: `/home/user/ai-atlas`. The site is in Hebrew, for a visual communication student and fellow students (not enterprises).

## What you produce

For your ONE category:

1. `research/stage4/<category-slug>.md`: research notes in English. Final tool list with one line on why each is in, candidates rejected and why, the review roundups you counted (with an independence assessment each), and a "browser gaps" list: official pages you could not read (blocked, login wall, script-only page) with exact URLs, so someone can open them in a real browser later.
2. `data/staging/<category-slug>/<tool-slug>.json`: ONE JSON file per tool, one tool object, in exactly the structure described below. Write each file as soon as that tool is done, so partial progress survives.

Do not edit `data/tools.json`, the site files, or anything else. Do not run git commands.

## Read first

- `docs/data-schema.md`: the field list (Hebrew).
- The complete example entry: run
  `python3 -c "import json;d=json.load(open('/home/user/ai-atlas/data/tools.json'));print(json.dumps(d['tools'][1],ensure_ascii=False,indent=1))"`
  Copy its structure exactly: same keys, same nesting, same Hebrew enum values.
- `research/tags.md` and the top of `research/new_and_notable.md`: how the `filters` block was decided in the pilot.

## Choosing tools

- Your prompt gives a target count and a starting candidate list. The candidate list is from memory and may be out of date: verify every candidate is alive today, and replace candidates that closed, merged, or are clearly less relevant than something else. Stay within 6 to 10 tools and close to the target count.
- A tool appears once in the whole atlas. The full allocation of candidates to categories is at the bottom of this file. Do NOT take a tool allocated to another category, and do not take a tool already in `data/tools.json` (the ten video generators). If you think a tool belongs to you rather than to its allocated category, say so in your notes and leave it out.
- Include leading, established tools, plus "new and notable" tools.
- "New and notable" rule: (A) launched, or received a significant new version, on or after 2025-05-18, AND (B) appears in at least two independent reviews or roundups published or updated between 2025-11-18 and 2026-11-18. The vendor's own content is not independent. Sites that sell access to the tool or are mainly affiliate pages are not independent. A tool that fails the rule enters only if it is leading and established.
- Exclude closed tools, tools without a live official site, and wrappers identical to another tool. A known tool that is being shut down, merged or renamed may be included with a clear status note.

## Reliability rules (mandatory)

- Invent nothing: no price, no strength, no missing field. "Not verified" is better than a guess. A field without a reliable source is `null`.
- Missing information is lack of verification, not a proven drawback. If no source mentions Hebrew, write "המקור לא מזכיר עברית", never "no Hebrew". Hebrew support does not imply right-to-left display, and vice versa.
- Strengths describe documented capabilities, not proof the tool beats competitors. Your own professional inference gets `"inference": true`.
- No invented scores, ratings or rankings.
- Pricing, quotas, rights, developer access, privacy and product changes need an OFFICIAL source (the company's own pricing page, help center, docs, terms, blog, press release). A third-party page can support a strength or a review count, not a price.
- A pricing table without a per-plan availability mark is not enough to say a feature is included in a given plan.
- Check date is not publication date. Mark an old source `"stale": true` (older than about 12 months, or clearly superseded).
- A paid plan does not guarantee no training on user data. A commercial licence does not guarantee protection from copyright claims.
- When sources conflict, prefer the official and most recent one and record the conflict in the relevant `notes` field.
- Closures, mergers, acquisitions, renames, feature removals, terms changes: record the date exactly as written in the source (`status.date_as_written`). Do not write that something already happened if it is planned. An acquisition is not in itself a closure.
- Prices in the company's original currency, never converted.
- `pricing.verification` is one of exactly: "אומת ממקור רשמי" (you read the official pricing page or official help page and the numbers are unambiguous), "אומת חלקית" (some plans or terms verified officially, others not, or official numbers ambiguous, e.g. a running promotion), "לא אומת" (no official page read). `summary_line` is `null` when verification is "לא אומת".
- Never fill a detail from your own memory. Everything in the JSON must trace to a page you opened in this session, listed in `sources` with `checked: "2026-11-18"`.

## Structure additions since the pilot example (apply them)

- `id`: write `null`. Numbers are assigned at merge time.
- `category_id`: your category number.
- `logo`: write `{"file": null, "file_dark": null, "source_url": null, "missing_reason": "ייאסף בשלב הלוגואים", "note": null}`. Logos are collected separately. In your notes, list for each tool the official page where its logo appears (press kit or brand page if one exists).
- `company`: `{"name": <legal or trading name exactly as the source writes it, no Hebrew, no parentheses>, "parent": <parent company name or null>, "country": <Hebrew country name or null>}`.
- `plans[].price_short`: fill ONLY when `price` is null: a very short Hebrew display price (for example "לפי הצעת מחיר", "לפי שימוש"). Otherwise `null`.
- A plan with both monthly and yearly billing is two records with the same `name` and different `billing` ("חודשי" / "שנתי"); `price_period` says whether the number is per month or per year ("לחודש" / "לשנה").
- Record enterprise / quote-only plans too, but keep them short. The audience is students and independent creators, so spend your effort on free, student and individual plans.
- `filters.new_notable`: as in the example, plus `latest_version_date_iso` (YYYY-MM-DD, or null when the source gives no full date) next to `latest_version_date` (the date exactly as the source writes it). `evidence`: "research/stage4/<category-slug>.md".
- `filters.tags.review_roundups`: choose up to 6 independent roundups for YOUR category (published or updated 2025-11-18 to 2026-11-18), list them in your notes with an independence assessment, and count for each tool how many cover it: `{"count": n, "of": N, "value": n >= 5 when N is 6 (otherwise n >= N-1 and N >= 4), "evidence": "research/stage4/<category-slug>.md"}`. If you could not find at least 4 independent roundups, set `value` to null and say so.
- `filters.tags.popular`: `value` true only when the tool is named in an independent web-traffic ranking based on Similarweb or comparable measured data (for example a16z "Top 100 Gen AI Consumer Apps", https://a16z.com/100-gen-ai-apps-6/ or a newer edition if one exists). Company-reported user numbers do not count. `basis`: one short Hebrew sentence naming the ranking, its date and the rank. Otherwise `value` false, `basis` null.
- `filters.tags.free_renewing`: true when a no-payment plan renews its allowance daily, weekly or monthly, per the official source; false when the free allowance is one-time or there is no free plan; null when not verified.
- `filters.hebrew`: `value` is one of "נתמכת לפי המקור", "המקור לא מזכיר עברית", "לא אומת"; `label` short ("עברית נתמכת" / "עברית לא מוזכרת" / "עברית לא אומתה"); `supported` true / false / null (null means the source does not mention Hebrew). For Hebrew, actually look: the official supported-languages page or help article if one exists.
- `filters.platforms`: `verified` and `unverified` lists using only these labels: "אתר", "iOS", "Android", "Mac", "Windows", "אפליקציות לנייד", "תוסף לדפדפן", "שורת פקודה", "תוסף לעורך קוד".
- `filters.starting_price`: the cheapest PAID individual plan: `amount`, `currency`, `billing` ("חודשי"/"שנתי"), `plan`, `verified` (true only when read on an official page as a regular, non-promotional price), `label` (short Hebrew, e.g. "מ־20 דולר לחודש"; use "דולר", "אירו", "ליש״ט"), `has_free_plan`.

## Writing the Hebrew

All display text is natural Hebrew, as a native speaker writes, short and matter-of-fact. No marketing tone, no superlatives. Product names, plan names and URLs stay in their original spelling. Use the Hebrew hyphen־prefix form the example uses ("מ־15 דולר", "ב־API"). Don't use em-dashes.

- `role`: one sentence, what the tool does.
- `strengths` / `limitations`: 2 to 3 each; `lead` is a short leading phrase (no period), `detail` one or two short sentences with the concrete fact and number. The two most useful for a student come first. Limitations must be real documented limits (quota, watermark, plan gating, region, missing feature stated by the source), not opinions.
- `audience`: one sentence.
- Student benefits: look explicitly for an official student or education discount page. This audience cares.

## Working method and limits

- First read the skill instructions named in your prompt.
- Page fetches are rate-limited and the quota is shared with two other researchers working at the same time. Budget about 60 page fetches in total. Prioritise per tool: (1) official pricing page, (2) official help/terms page on commercial use and on training on user data, (3) official release note or blog for the latest version date, (4) official docs for the API. Use search-result snippets to locate the right URL, never as the source of a number.
- Many tool sites block automated fetching or render prices with scripts. If the official pricing page cannot be read after two tries, do not retry further and do not fall back to third-party price lists: set verification accordingly, describe what is missing in `pricing.unverified_notes`, and add the URL to "browser gaps" in your notes.
- Roundups and traffic rankings: fetch each once and reuse it for all your tools.
- When done, validate every JSON file parses (`python3 -m json.tool`), and return a SHORT summary (under 200 words): tools included, how many with each verification level, tools dropped or swapped and why, and the number of browser gaps. Do not paste JSON into your summary.

## Allocation of candidates to categories (to prevent duplicates)

Already in the atlas (category 6, video generation): Google Flow, Runway, Kling AI, Hailuo AI, Luma, Pika, Higgsfield, Vidu, Dreamina, Wan.

1. assistants (target 9): ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity, Grok, DeepSeek, Le Chat (Mistral), Meta AI. Alternates: Qwen, Kimi.
2. writing (target 8): Gamma, Grammarly, QuillBot, Wordtune, Jasper, DeepL, Beautiful.ai, Napkin AI. Alternates: Copy.ai, Writesonic, Sudowrite, Plus AI, Chronicle, Presentations.ai, Pitch.
3. images (target 10): Midjourney, Adobe Firefly, FLUX (Black Forest Labs), Ideogram, Leonardo.Ai, Krea, Magnific (formerly Freepik), Stability AI (Stable Diffusion / Stable Assistant), Reve, Topaz. Alternates: Photoroom, remove.bg, Playground, Civitai, ComfyUI, Adobe Photoshop.
4. graphic-design (target 7): Canva, Adobe Express, Recraft, Looka, Kittl, Microsoft Designer, Lovart. Alternates: Brandmark, Figma Buzz, Adobe Illustrator, Google Pomelli, Designs.ai.
5. ui-web (target 8): Figma (Figma Make and Figma AI), Framer, Webflow, Wix, Google Stitch, UX Pilot, Relume, v0 (Vercel). Alternates: Uizard, Visily, Squarespace, Durable, Magic Patterns, Subframe, Banani, Claude Design.
7. video-editing (target 8): CapCut, Descript, HeyGen, Synthesia, Captions, OpusClip, VEED, D-ID. Alternates: Adobe Premiere, DaVinci Resolve, Submagic, Rask AI, Hedra, InVideo, Kapwing, Topaz Video.
8. audio (target 9): ElevenLabs, Suno, Udio, Murf, Speechify, Adobe Podcast, LALAL.AI, Moises, Stable Audio. Alternates: Producer (formerly Riffusion), Krisp, Cartesia, Hume, AIVA, Soundraw, Mureka, Fish Audio.
9. 3d (target 6): Meshy, Tripo, Hyper3D Rodin, Spline, Marble (World Labs), Hunyuan 3D. Alternates: Sloyd, Kaedim, CSM, Polycam, Adobe Project Neo.
10. code (target 9): Cursor, GitHub Copilot, Claude Code, Codex (OpenAI), Windsurf, Google Antigravity, Cline, Kiro, Devin. Alternates: JetBrains AI / Junie, Zed, Tabnine, Augment Code, Amp, Warp, Roo Code, Gemini CLI.
11. no-code-apps (target 7): Lovable, Bolt, Replit, Base44, Emergent, Bubble, Firebase Studio. Alternates: Glide, Softr, Rork, Anything, Google AI Studio, Hostinger Horizons.
12. agents-automation (target 8): Zapier, Make, n8n, Manus, Lindy, Gumloop, Relay.app, Genspark. Alternates: Relevance AI, Microsoft Copilot Studio, Dify, Langflow, Activepieces, Pipedream.
13. meetings-knowledge (target 9): Otter, Fireflies, Granola, Fathom, tl;dv, Notion, NotebookLM, Julius, Read AI. Alternates: Wispr Flow, Airtable, Mem, Circleback, Jamie, Elicit, Superwhisper.
