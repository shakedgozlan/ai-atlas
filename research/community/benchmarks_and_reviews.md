# Independent benchmarks, leaderboards and professional reviews of ten AI video tools (read 2026-11-18)

Reading conventions used in every bullet:
- **READ** = the fact was on the page when fetched on 2026-11-18 (pages were read through a fetch tool that summarises the page, so exact wording of long tables should be spot-checked before publishing numbers).
- **INFERRED** = my conclusion from read facts.
- **Assumption** = not verified.
- **STALE** = source older than 6 months (before about 2026-05-18).
- Fetch budget: 30 page fetches attempted, 26 succeeded. Failed: SCMP (MiniMax H3), CNET best-of list (site blocked), Crypto Briefing (H3 Video Edit Arena), Vidu Q4 press release mirror.

## Key question 1 — Current flagship video model and release date per tool; who released a major model in the last ~3 months

### Takeaway
Five of the ten had a major model release since about mid-August 2026: Kling (4.0, Sep 28 early access then October), Wan (3.0, Aug 24), Pika (H3 Flex, Oct 29), Vidu (Q4 Preview, Oct 7) and Google (Gemini Omni Flash 1.2, listed Nov 2026). Hailuo (H3, Jul 30) and Dreamina (Seedance 2.5, about Jul 31) are just outside a strict 3-month window; Runway (Gen-4.5, Dec 2025), Luma (Ray3.2, June 2026) and Higgsfield (no own frontier video model found) are not "new model" candidates.

### Cited Findings
| Tool | Flagship (as found) | Release date | "New model" (since ~2026-08-18)? | Source and status |
|---|---|---|---|---|
| Google Flow | Veo 3.1 (generation flagship) plus Gemini Omni Flash (editing-first; 1.1 Aug 2026, 1.2 Nov 2026) | Veo 3.1 listed Jan 2026 on AA; Omni Flash launched at Google I/O May 2026; Omni Flash 1.2 listed Nov 2026 | Yes for Omni Flash 1.2; No for Veo 3.1 | READ: [AA T2V leaderboard](https://artificialanalysis.ai/video/leaderboard/text-to-video); READ: [Lambda Films](https://www.lambdafilms.co.uk/google-vs-kuaishou/) (I/O May 2026, undated page); READ: [Artlist, Jul 6 2026](https://artlist.io/blog/veo-3-1-vs-gemini-omni-flash-how-google-just-changed-the-way-you-edit-video/) says Omni is "still rolling out across the Gemini app, Google Flow, and YouTube Shorts" and calls Veo 3.1 "Google DeepMind's flagship video generation model" |
| Runway | Gen-4.5 (video); Aleph 2.0 (video editing, May 2026) | Gen-4.5: December (2025, per linked CNBC piece) | No | READ: [TechCrunch, Jul 23 2026](https://techcrunch.com/2026/07/23/runway-bets-on-ai-model-routing-as-generative-media-gets-crowded/) — Gen 4.5 is Runway's "last AI video model release"; TechCrunch asked about Gen 5, no answer in article |
| Kling AI | Kling 4.0 (and 4.0 Flash) | Flash early access for Ultra Yearly on Sep 28 2026; full model and API "October 2026" window; no single launch day | Yes | READ: [WaveSpeed blog, Oct 1 2026, updated Nov 12](https://wavespeed.ai/blog/ai-news/kling-4-0-release-date/) (API reseller, not independent; dates attributed to Kling release notes) |
| Hailuo (MiniMax) | MiniMax H3, "marketed to consumers as Hailuo 3.0" | Jul 30 2026 | Borderline (3.5 months) | READ: [NYU Shanghai RITS](https://rits.shanghai.nyu.edu/ai/minimax-releases-h3-2k-video-with-native-audio-open-weights-promised/); AA lists "MiniMax H3 (768p)" Jul 2026 and "H3 Max" Aug 2026 — READ: [AA T2V](https://artificialanalysis.ai/video/leaderboard/text-to-video) |
| Luma | Ray3.2 | Reported Jun 9 2026 (article says "has released", no exact day) | No | READ: [IT Brief UK, Jun 9 2026](https://itbrief.co.uk/story/luma-launches-ray3-2-with-tighter-ai-video-control) |
| Pika | Pika H3 Flex (two LoRA adapters post-trained on MiniMax H3; "It is not a new architecture") | Oct 29 2026 | Yes (but a derivative of MiniMax H3) | READ: [aiwiki.ai](https://aiwiki.ai/wiki/pika_h3_flex) (wiki-style secondary source); AA lists "Pika H3 Flex" Oct 2026 — READ: [AA T2V](https://artificialanalysis.ai/video/leaderboard/text-to-video) |
| Higgsfield | No own frontier video model found; "Cinema Studio 4.0 ... runs on Seedance 2.5"; own models are Soul 2.0 / Soul Cinema (images) | Cinema Studio 4.0 date not found | No evidence | READ: [SaaS CRM Review, updated Oct 27 2026](https://saascrmreview.com/higgsfield-ai-review/) (affiliate-disclosed, desk research); READ: [Async, Oct 22 2026](https://async.com/blog/higgsfield-ai-review/) (competitor) |
| Vidu | Vidu Q4 Preview (public preview of next flagship); Q3 Pro is last full release (Jan 2026) | Oct 7 2026 (preview) | Yes (preview) | Date from existing vendor-side notes (/home/user/ai-atlas/research/higgsfield_vidu.md, citing [Webull PR](https://www.webull.com/news/15708262392742912)) — not re-read by me; READ: AA lists "Vidu Q4 Preview", Oct 2026 on [AA I2V](https://artificialanalysis.ai/video/leaderboard/image-to-video) |
| Dreamina (ByteDance) | Seedance 2.5 | "Shipped" by Aug 1 2026 (AA lists Jul 2026); live on Jimeng and Doubao Pro at launch; Dreamina availability not stated there | Borderline (3.5 months) | READ: [The Decoder, Aug 1 2026](https://the-decoder.com/bytedances-seedance-2-5-generates-30-second-video-clips-with-built-in-audio/); READ: [AA T2V](https://artificialanalysis.ai/video/leaderboard/text-to-video) (entry is named "Dreamina Seedance 2.5") |
| Wan (Alibaba) | Wan 3.0 | Aug 24 2026 (public beta since early August); closed weights | Yes (just under 3 months) | READ: [The Next Web, Aug 24 2026](https://thenextweb.com/news/alibaba-wan3-video-model-after-share-sale) |

- Kling 4.0 features per Kling as reported: up to 30 s, 10 keyframes, up to 15 reference assets, stereo audio, 4K and 21:9; 10-bit HDR "coming soon" — READ: [WaveSpeed](https://wavespeed.ai/blog/ai-news/kling-4-0-release-date/)
- Wan 3.0: 30-second single-pass clips, 1080p, closed weights; at launch "has not yet been independently benchmarked at all" — READ: [TNW, Aug 24 2026](https://thenextweb.com/news/alibaba-wan3-video-model-after-share-sale)
- Pika H3 Flex licence excludes the EU, UK, South Korea and US for the open weights; most performance figures are "Pika's self-reported results" — READ: [aiwiki.ai](https://aiwiki.ai/wiki/pika_h3_flex)
- Runway's own T2V and I2V models "no longer lead the rankings" — READ: [TechCrunch, Jul 23 2026](https://techcrunch.com/2026/07/23/runway-bets-on-ai-model-routing-as-generative-media-gets-crowded/)

### Inferences
- INFERRED: Safest "new model" tags (released within ~3 months of 2026-11-18): Kling AI, Wan, Pika, Vidu (label as "preview"), Google Flow (Omni Flash 1.2; Veo itself is not new). Hailuo and Dreamina qualify only if the window is stretched to ~4 months.
- INFERRED: Pika's "new model" is a tuned derivative of MiniMax's H3, which weakens a "new model" tag in the sense of original research.
- INFERRED: Higgsfield should not get a "new model" tag; it is mainly an aggregator/studio layer over third-party models (Seedance 2.5, Kling 4.0, Veo etc.).

### Gaps
- Exact Kling 4.0 general-availability day; Kling's own page was not read.
- Whether Gemini Omni Flash 1.2 is selectable inside Flow today, and whether a "Veo 4" exists: not found. Assumption: Veo 3.1 remains the newest Veo.
- Whether Seedance 2.5 is available in Dreamina outside China and since when (AA naming suggests yes; not verified).
- Vidu Q4 Preview press release could not be opened (fetch error).
- Luma Ray3.2 exact release day; whether anything newer than Ray3.2 exists (none seen in search results).

## Key question 2 — Rank on independent leaderboards (exact rank, score, date read)

### Takeaway
On Artificial Analysis (read 2026-11-18), Wan 3.0 leads text-to-video (Elo 1174) and Dreamina Seedance 2.5 leads image-to-video (1161), with MiniMax H3 top-4 on both; Kling 3.0 sits mid-table as the 1000 anchor, Veo 3.1 and Vidu Q3 are in the lower third, and Runway, Luma, Higgsfield and Kling 4.0 do not appear at all in the default view. Top-of-table gaps are inside the confidence intervals (±13-15), so ranks 1-10 are statistical near-ties.

### Cited Findings
**Artificial Analysis Video Arena, text-to-video, "AA-Video-T2V v2.1", Overall, 35 models, read 2026-11-18** (page shows no last-updated date; the default view appears to be "With Audio" — not confirmed) — all READ: [AA T2V leaderboard](https://artificialanalysis.ai/video/leaderboard/text-to-video)

| Tool | Entry | Rank / 35 | Elo (± CI) | Listed release |
|---|---|---|---|---|
| Wan | Wan 3.0 | 1 | 1174 ±13 | Aug 2026 |
| Hailuo | MiniMax H3 (768p) | 3 | 1159 ±13 | Jul 2026 |
| Dreamina | Dreamina Seedance 2.5 | 4 | 1156 ±13 | Jul 2026 |
| Google | Gemini Omni Flash 1.2 | 7 | 1151 ±14 | Nov 2026 |
| Hailuo | MiniMax H3 Max (via Fal) | 9 | 1143 ±14 | Aug 2026 |
| Dreamina | Dreamina Seedance 2.0 | 12 | 1133 ±13 | Mar 2026 |
| Google | Gemini Omni Flash 1.1 | 14 | 1125 ±12 | Aug 2026 |
| Pika | Pika H3 Flex | 15 | 1124 ±14 | Oct 2026 |
| Wan | Wan2.7-260612 | 19 | 1035 ±13 | Jun 2026 |
| Kling | Kling 3.0 Omni 1080p (Pro) | 22 | 1016 ±14 | Feb 2026 |
| Kling | Kling 3.0 1080p (Pro) | 23 | 1000 (anchor) | Feb 2026 |
| Google | Veo 3.1 / 3.1 Fast / 3.1 Lite | 26 / 27 / 28 | 963 / 954 / 949 (±14) | Jan-Mar 2026 |
| Vidu | Vidu Q3 Pro / Q3 Turbo | 31 / 32 | 937 / 905 (±14) | Jan / Feb 2026 |
| Runway, Luma, Higgsfield, Kling 4.0, Vidu Q4, Hailuo 2.3 | not listed | — | — | — |

Other top entries for context: #2 Utopai X 1168, #5 Hyperflow H3 1154, #6 FLUX 3 Max 1152, #8 HeyGen Video 1 1149.

**Artificial Analysis, image-to-video, "AA-Video-I2V v2.1", Overall, 35 models, read 2026-11-18** — all READ: [AA I2V leaderboard](https://artificialanalysis.ai/video/leaderboard/image-to-video)

| Tool | Entry | Rank / 35 | Elo (95% CI) |
|---|---|---|---|
| Dreamina | Dreamina Seedance 2.5 | 1 | 1161 (1146-1176) |
| Dreamina | Dreamina Seedance 2.0 | 3 | 1141 (1127-1155) |
| Hailuo | MiniMax H3 (768p) | 4 | 1134 (1120-1148) |
| Hailuo | MiniMax H3 Max | 9 | 1116 (1102-1130) |
| Pika | Pika H3 Flex | 10 | 1114 (1099-1129) |
| Wan | Wan 3.0 | 11 | 1109 (1095-1123) |
| Google | Gemini Omni Flash 1.2 / 1.1 | 14 / 18 | 1085 / 1044 |
| Vidu | Vidu Q4 Preview | 20 | 1032 (1018-1046) |
| Kling | Kling 3.0 Omni Pro / Kling 3.0 Pro | 22 / 23 | 1004 / 1000 (anchor) |
| Google | Veo 3.1 / Fast / Lite | 27 / 28 / 29 | 955 / 935 / 931 |
| Vidu | Vidu Q3 Pro / Q3 Turbo | 30 / 33 | 926 / 901 |
| Runway, Luma, Higgsfield, Kling 4.0 | not listed | — | — |

- Runway's Aleph 2.0 "ranks among the leading video editing models according to Artificial Analysis" (no rank given) — READ: [TechCrunch, Jul 23 2026](https://techcrunch.com/2026/07/23/runway-bets-on-ai-model-routing-as-generative-media-gets-crowded/)
- Seedance 2.0 "leads the image-to-video leaderboard for models with audio" on Artificial Analysis as of Aug 1 2026 (before 2.5 was scored) — READ: [The Decoder](https://the-decoder.com/bytedances-seedance-2-5-generates-30-second-video-clips-with-built-in-audio/)

**Arena (arena.ai, formerly LMArena) image-to-video, read 2026-11-18, 48 models** — the fetched page exposed organisation and licence but NOT model names, and no update date. READ: [arena.ai I2V](https://arena.ai/leaderboard/image-to-video)
- #1 MiniMax, licence "minimax-h3-community-license-agreement", 1495 ±5, 57,112 votes (INFERRED: this is MiniMax H3).
- #2 Google 1488 ±11; #3 Alibaba 1480 ±11; #4 and #5 Bytedance 1477 and 1475 (±7); #6 Google 1465. (INFERRED, not confirmed: Omni Flash 1.2, Wan 3.0, Seedance 2.5 variants.)
- Shengshu (Vidu) best entry #18, 1363 ±9; KlingAI best entry #19, 1354 ±6 (206,221 votes).
- Luma AI: #37 at 1226 ±19 and #46 at 1108 ±16; Runway: #47 at 1052 ±13; Pika: #48 (last) at 997 ±14. (INFERRED: these are older models such as Ray 3 / Ray2 / Gen-4-era / Pika 2.x; Pika H3 Flex could not be identified in this table.)

**Arena text-to-video** — the page I fetched said "Last updated: Mar 6, 2026", 246,783 votes, 37 models, again without model names. **STALE** (8 months). READ: [arena.ai T2V](https://arena.ai/leaderboard/text-to-video)
- Top 3 all Google (1381, 1378, 1371); Alibaba best #8 at 1347; Bytedance best #13 at 1255; KlingAI best #16 at 1221; Runway #18 at 1214 ±11 (3,932 votes); Luma #20 at 1204 and #35 at 1066; MiniMax best #21 at 1200; Pika #36 at 1011.
- Model names for an earlier snapshot of the same board (data version Jan 29 2026, **STALE**): #1 veo-3.1-audio 1371, #2 sora-2-pro 1369, kling-2.5-turbo-1080p 1222, kling-2.6-pro 1219, ray-3 1204, hailuo-02-pro 1200, hailuo-2.3 1198, ray2 1066, pika-v2.2 1011 — READ: [DataLearner mirror](https://www.datalearner.com/en/leaderboards/external/video-generation)

**Other arenas**
- DesignArena text-to-video: Pika H3 Flex ranked 8th overall, Elo 1288, 59.5% win rate over 817 battles in a snapshot dated Nov 1 2026; Pika's own launch claim was "#1 among open-weights models and #7 overall" — READ (secondary): [aiwiki.ai](https://aiwiki.ai/wiki/pika_h3_flex)
- A headline (TITLE ONLY, NOT READ, fetch failed) says "MiniMax-H3 ranks first in Video Edit Arena with 1390 points, 32 ahead of nearest rivals" — [Crypto Briefing](https://cryptobriefing.com/minimax-h3-video-edit-arena-top-rank/). Treat as a lead only.

### Inferences
- INFERRED: Leaderboard-backed "stands out" candidates as of 2026-11-18: Wan (AA T2V #1), Dreamina/Seedance 2.5 (AA I2V #1, T2V #4), Hailuo/MiniMax H3 (AA #3 T2V, #4 I2V; likely Arena I2V #1). Google's newest Omni Flash 1.2 is top-10 on AA T2V but Veo 3.1 has slid to #26-28.
- INFERRED: Kling's public leaderboard position is understated because only Kling 3.0 (Feb 2026) is scored; Kling 4.0 is absent from AA on the read date.
- INFERRED: Runway, Luma and Higgsfield have no current AA arena evidence in the default view; on Arena I2V Runway and Pika's legacy models sit at the very bottom. No leaderboard support for a "stands out" tag for these three.
- INFERRED: Because AA CIs are ±13-15, Wan 3.0 (1174), Utopai X (1168), MiniMax H3 (1159), Seedance 2.5 (1156) are statistically close; say "top group", not "the best".
- INFERRED: Pika H3 Flex's good rank reflects MiniMax H3's base weights.

### Gaps
- Arena (arena.ai) model names were not exposed by the fetch; the T2V page looked 8 months stale while the I2V page looked current. Needs a manual browser check before quoting Arena ranks per model.
- VBench: no current VBench leaderboard entries found for any of the ten flagship models (search only; no page read). I found no reliable 2026 VBench numbers.
- AA audio/no-audio toggle state unconfirmed; Runway/Luma may appear in another view ("No Audio", or with research previews shown).
- AA video-editing leaderboard (where Runway Aleph 2.0 and MiniMax H3 reportedly rank high) not read.

## Key question 3 — What independent professional reviews and head-to-heads conclude; who wins for what

### Takeaway
The only current (post-August 2026) hands-on tests by a professional reviewer are Curious Refuge's: Seedance 2.5 beats Kling 4.0 on realism, motion and camera work and beats Wan 3.0 overall, while Kling 4.0 wins on price and style-matching and Wan 3.0 on cost and reference handling. Mainstream outlets lag the model cycle: Zapier (Oct 2026) still crowns Veo 3.1 "best all-arounder" and Runway "best for film-making", and I found no current Tom's Guide, TechRadar, The Verge, PCMag or readable CNET roundup.

### Cited Findings
**Curious Refuge (AI-filmmaking school; sells its own courses; no affiliate disclosure seen; states scores come from "our tests")**
- Kling 4.0 vs Seedance 2.5, dated Nov 12 (2026 INFERRED from context): realism — Seedance ("Seedance was still our preference"); motion — Seedance ("made the same scene feel more dynamic"); camera — Seedance ("produced the more usable result"); dialogue prompt adherence — Kling ("Kling handled the prompt better here than it did in the action tests"); style matching — Kling ("came closer to the reference image"); price — Kling ("Standard Seedance was nearly three times the cost of Kling at 1080p"); overall "we'd start with Seedance 2.5". Audio/lip sync and speed not tested. — READ: [Curious Refuge](https://curiousrefuge.com/blog/kling-vs-seedance)
- Wan 3.0 review, dated Aug 14 (2026 INFERRED): "we still think Seedance 2.5 is the better overall AI video model"; Wan strengths: reference-heavy scenes, facial emotion, cost ("surprisingly close for a fraction of the cost"); Wan weaknesses: character consistency, compositing "more like a bad green screen effect", lip sync "one of Wan 3.0's biggest weaknesses in our testing"; verdict "practical workhorse". In the lip-sync test Seedance 2.0 was strongest and MiniMax H3 generated an unrequested new section of the song. — READ: [Curious Refuge](https://curiousrefuge.com/blog/wan3-review)
- "Best AI Video Generators of 2026 (Official Review)", dated Jun 9 (2026 INFERRED; covers the PREVIOUS model generation, about 5 months old), scored on prompt adherence, temporal consistency, visual fidelity, motion, cinematic realism: Seedance 2.0 8.4 "Best AI Video Output"; Kling 3.0 8.1 "Best Overall AI Video Generator"; Luma Ray 3.2 7.7 "Most Underrated" ("one of the top 3 video generators at the moment"); Hailuo 2.3 7.5; Veo 3.1 7.2; Wan 2.7 6.7 "Best Open Source"; Runway 4.5 6.2 ("did not live up to those expectations"); LTX 2.3 Pro 6.2; Midjourney Video 5.0. Pika, Vidu, Higgsfield not ranked. — READ: [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)

**Zapier (established publication; affiliate disclosure: "we may earn a commission"; says "almost a month of testing")**, published/reviewed Oct 9 2026 (page also says last tester update Feb 2026 — conflicting dates): Google Veo (3.1) "best for reliable, consistent results" and "the best AI video generation all-arounder on the market", con: watermark removal is expensive; Runway (Gen-4.5, Aleph) "best for film-making", con: steep learning curve; MiniMax Hailuo and Dreamina only in "others to watch"; Kling, Luma, Pika, Higgsfield, Vidu, Wan not picked. — READ: [Zapier](https://zapier.com/blog/best-ai-video-generator/)

**TechCrunch, Jul 23 2026 (news, not a review):** Runway's T2V and I2V models "no longer lead the rankings"; top-20 spots held by Google, ByteDance, Alibaba; no new frontier video model from Runway "in months". — READ: [TechCrunch](https://techcrunch.com/2026/07/23/runway-bets-on-ai-model-routing-as-generative-media-gets-crowded/)

**Lambda Films (UK video production company; undated, "mid-2026"; spec/workflow comparison, no formal tests):** "Omni Flash edits; Veo 3.1 renders"; Veo 3.1 for single-clip fidelity and "currently strong dialogue lip-sync"; Kling 3.0's "differentiator is multi-shot continuity" and it is "frequently cited as the value option"; Omni Flash limits: 720p, 10 s cap. — READ: [Lambda Films](https://www.lambdafilms.co.uk/google-vs-kuaishou/)

**Artlist blog, Jul 6 2026 (stock/AI platform that resells these models; not fully independent):** Omni Flash is editing-first, 3-10 s, "caps at 720p for now"; Veo 3.1 has "Believable physics and natural motion", 1080p native, up to 4K. — READ: [Artlist](https://artlist.io/blog/veo-3-1-vs-gemini-omni-flash-how-google-just-changed-the-way-you-edit-video/)

**MASV blog by film editor Jonny Elwyn, updated Mar 17 2026 — STALE (8 months), one prompt, one run per tool, older models:** Luma Ray3 HDR graded A-plus ("looks stunning on an HDR monitor"); Kling O1 "I can't really find fault with this shot"; Pika 2.5 A-minus but missed prompt elements and was very slow; Veo 3.1 "couldn't spot many visual errors"; Runway 4.5 "It's a shame it doesn't feel more real"; Hailuo: good lighting, weak camera reveal; Seedance: "doesn't deliver compelling results" in that test; Vidu "least impressive of the bunch". — READ: [MASV](https://masv.io/blog/best-ai-video-generator)

**eWeek, Feb 16 2026 — STALE (9 months), no test methodology:** top five Seedance 2.0, Sora 2, Veo 3.1, Adobe Firefly, Runway Gen 4.5 ("easily the most creative model on this list", "can sometimes struggle with pure realism"); honourable mentions Kling 2.6 (low-cost storytelling), Pika 2.5, Luma Ray3 (4K/HDR for post), Hailuo 2.3. — READ: [eWeek](https://www.eweek.com/news/best-ai-video-generators-2026/)

**Tech Hacker Substack, Jun 10 2026 (individual blogger, one prompt, no model versions, outbound links to a third-party domain — possibly affiliate; about 5 months old):** Kling best overall "directed" feel; Luma Ray "the most high-end, film-like finish"; Runway "Not always the most realistic, but very 'creator-friendly'"; Pika "sometimes misses key prompt details"; Hailuo "Budget-friendly"; Vidu "A solid all-rounder, but you may notice occasional visual artifacts"; Veo "Strong detail and great ecosystem". — READ: [Substack](https://techhacker.substack.com/p/which-ai-video-generator-is-actually)

**Higgsfield reviews (neither tested video):**
- Async (competitor, Oct 22 2026): 22 minutes on the free plan, zero video clips because "the video is fully paywalled"; praised "camera and lens presets that change the look of a shot in one click"; product shape and label text drifted across shots; 6.5/10 on the free plan. — READ: [Async](https://async.com/blog/higgsfield-ai-review/)
- SaaS CRM Review (affiliate-disclosed; desk research from vendor pages, updated Oct 27 2026): pros — one credit balance across many models, cost shown before generating, Soul ID face consistency, Cinema Studio 4.0 up to 30 s with native audio; cons — credits reset each cycle, "unlimited" on flagship models lasts 7 days, inputs/outputs may train Higgsfield models unless Enterprise, refunds end after first spent credit. — READ: [SaaS CRM Review](https://saascrmreview.com/higgsfield-ai-review/)

**Programming Insider, Oct 10 2026 (Seedance 2.5 vs Kling 4.0 vs Wan 3.0):** explicitly NOT hands-on (scenarios are "not to represent tested generation results"); links to third-party model sites — looks promotional. Do not use as evidence. — READ: [Programming Insider](https://programminginsider.com/seedance-2-5-vs-kling-4-0-vs-wan-3-0-which-ai-video-model-should-your-brand-try-first/)

**Winner-by-capability summary (each cell traces to the sources above)**
| Capability | Winner(s) per independent testing | Status |
|---|---|---|
| Realism / overall output | Seedance 2.5 (Curious Refuge Nov and Aug 2026); AA I2V #1 | READ |
| Motion | Seedance 2.5 over Kling 4.0 (Curious Refuge); Kling 3.0 praised for realistic motion (Curious Refuge Jun) | READ |
| Prompt adherence | Kling 4.0 on dialogue (Curious Refuge Nov); Veo "follows prompts well" (Zapier) | READ |
| Character consistency | No current winner declared; Runway 4.5 and Hailuo 2.3 and Luma Ray 3.2 praised for it in Jun 2026; Wan 3.0 weak | READ |
| Lip sync / audio | Seedance 2.0 strongest in Curious Refuge lip-sync test (Aug 2026); Veo 3.1 "strong dialogue lip-sync" (Lambda Films); Wan 3.0 weak | READ |
| Camera control | Seedance 2.5 over Kling 4.0 (Nov 2026); Kling 3.0 for "complex camera and lens effects" (Jun 2026) | READ |
| Editing existing video | Gemini Omni Flash (Lambda, Artlist); Runway Aleph 2.0 (TechCrunch citing AA) | READ |
| HDR / post-production finish | Luma Ray3 / Ray3.2 (MASV, Curious Refuge, eWeek) | READ (partly STALE) |
| Price / value | Kling 4.0 vs Seedance 2.5; Wan 3.0 vs Seedance 2.5; Hailuo as budget pick | READ |
| Speed | No independent measurement found | Gap |

### Inferences
- INFERRED: Review-backed "stands out in reviews" candidates today: Dreamina/Seedance (wins both current Curious Refuge head-to-heads and the June ranking), Kling (best overall in June, competitive and cheaper in Nov), Google Veo (Zapier's all-rounder pick). Luma has consistent praise for film-like/HDR output but in older or smaller tests.
- INFERRED: Runway's review standing has declined in 2026: workflow/film-making praise (Zapier) but output-quality criticism (Curious Refuge 6.2/10, MASV, TechCrunch).
- INFERRED: Mainstream roundups run 6-9 months behind the model cycle, so they under-represent Kling 4.0, Seedance 2.5, Wan 3.0, MiniMax H3.

### Gaps
- No 2026 Tom's Guide, TechRadar, The Verge or PCMag roundup or head-to-head surfaced in search (Tom's Guide results were 2024-2025 pieces). CNET's best-of page exists but was blocked to the fetcher; its content is unread.
- No independent hands-on review found for Hailuo 3.0 / MiniMax H3 as a product, Vidu Q4 Preview, Pika H3 Flex, or Higgsfield's paid video features. Search results for these were dominated by API resellers and competitor blogs (Atlas Cloud, Dreamina, Picsart, WaveSpeed, vmake).
- No independent speed benchmarks found.

## Key question 4 — Per tool: 2-3 strengths and 2-3 weaknesses that multiple independent sources agree on

### Takeaway
Multi-source agreement exists for Seedance, Kling, Veo, Runway, Luma and (on older models) Hailuo; for Wan, Pika, Vidu and Higgsfield the evidence is one current source or stale sources, so tags for those should be worded cautiously.

### Cited Findings
Each item lists its supporting sources; "1 source" means no second independent confirmation was found.

**Google Flow (Veo 3.1 / Gemini Omni Flash)**
- Strength: reliable, clean output with few visible errors — READ: [Zapier Oct 2026](https://zapier.com/blog/best-ai-video-generator/) ("best ... all-arounder"); READ: [MASV, STALE](https://masv.io/blog/best-ai-video-generator) ("couldn't spot many visual errors")
- Strength: native audio and dialogue lip-sync, 4K — READ: [Lambda Films](https://www.lambdafilms.co.uk/google-vs-kuaishou/); READ: [Artlist](https://artlist.io/blog/veo-3-1-vs-gemini-omni-flash-how-google-just-changed-the-way-you-edit-video/)
- Strength: conversational video editing with Omni Flash — READ: Lambda Films; Artlist (same URLs)
- Weakness: Veo 3.1 now ranks low on arenas (AA T2V #26, I2V #27) — READ: [AA](https://artificialanalysis.ai/video/leaderboard/text-to-video)
- Weakness: floaty motion, weak complex emotion, unreliable text — READ: [Curious Refuge Jun 2026](https://curiousrefuge.com/blog/best-ai-video-generators-2026) (1 source; MASV adds "water and people look less realistic")
- Weakness: short clips (8 s Veo; Omni Flash 10 s and 720p) and costly watermark removal — READ: eWeek (STALE), Artlist, Lambda Films, Zapier

**Runway (Gen-4.5, Aleph 2.0)**
- Strength: film-making toolset and editing models (Aleph, Act Two) — READ: [Zapier](https://zapier.com/blog/best-ai-video-generator/); READ: [TechCrunch](https://techcrunch.com/2026/07/23/runway-bets-on-ai-model-routing-as-generative-media-gets-crowded/)
- Strength: stylised/creative output and "directed" motion — READ: [eWeek, STALE](https://www.eweek.com/news/best-ai-video-generators-2026/); [MASV, STALE](https://masv.io/blog/best-ai-video-generator); [Substack](https://techhacker.substack.com/p/which-ai-video-generator-is-actually)
- Weakness: realism trails rivals — READ: eWeek, MASV, Substack, [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026) (6.2/10)
- Weakness: no longer near the top of leaderboards; no new frontier model since Dec 2025 — READ: TechCrunch; absent from AA default view (READ)
- Weakness: cost and learning curve — READ: Curious Refuge ("high cost for its limits"); Zapier ("steep learning curve")

**Kling AI (Kling 4.0; most reviews cover 3.0)**
- Strength: cinematic, realistic motion and camera work — READ: [Curious Refuge Jun 2026](https://curiousrefuge.com/blog/best-ai-video-generators-2026); [Substack](https://techhacker.substack.com/p/which-ai-video-generator-is-actually); [MASV, STALE](https://masv.io/blog/best-ai-video-generator)
- Strength: value versus Seedance / Veo — READ: [Curious Refuge Nov 2026](https://curiousrefuge.com/blog/kling-vs-seedance); [Lambda Films](https://www.lambdafilms.co.uk/google-vs-kuaishou/). Contradicted by Curious Refuge Jun 2026, which called Kling 3.0 "expensive".
- Strength: multi-shot continuity, dialogue prompt handling, style matching — READ: Lambda Films; Curious Refuge Nov 2026
- Weakness: loses to Seedance 2.5 on realism, motion and camera in action tests — READ: Curious Refuge Nov 2026 (1 source)
- Weakness: prompt adherence drops with overly specific prompts — READ: Curious Refuge Jun 2026 (1 source)
- Weakness: Kling 4.0 not yet on AA; Kling 3.0 mid-table (#22-23) — READ: AA

**Hailuo (MiniMax H3 / Hailuo 3.0; reviews cover 2.3)**
- Strength: top-tier arena results for H3 (AA T2V #3, I2V #4) — READ: [AA](https://artificialanalysis.ai/video/leaderboard/image-to-video)
- Strength: budget-friendly and beginner-friendly — READ: [Curious Refuge Jun 2026](https://curiousrefuge.com/blog/best-ai-video-generators-2026) ("beginner-friendly interface"); [Substack](https://techhacker.substack.com/p/which-ai-video-generator-is-actually); [MASV, STALE](https://masv.io/blog/best-ai-video-generator) (cheap credit packs)
- Strength: lighting and character consistency (Hailuo 2.3) — READ: Curious Refuge Jun 2026; MASV
- Weakness: logic/motion failures (static objects, distorted anatomy, poor camera reveal) on 2.3 — READ: Curious Refuge Jun 2026; MASV
- Weakness: H3 ignored instructions in a lip-sync test (added unrequested song section) — READ: [Curious Refuge Aug 2026](https://curiousrefuge.com/blog/wan3-review) (1 source)
- Weakness: H3 capability claims were vendor-only at launch — READ: [NYU Shanghai RITS](https://rits.shanghai.nyu.edu/ai/minimax-releases-h3-2k-video-with-native-audio-open-weights-promised/)

**Luma (Ray3.2)**
- Strength: high-end, film-like image; HDR / 16-bit EXR pipeline — READ: [MASV, STALE](https://masv.io/blog/best-ai-video-generator); [Substack](https://techhacker.substack.com/p/which-ai-video-generator-is-actually); [eWeek, STALE](https://www.eweek.com/news/best-ai-video-generators-2026/); features in [IT Brief](https://itbrief.co.uk/story/luma-launches-ray3-2-with-tighter-ai-video-control)
- Strength: physics, character consistency, emotional range (7.7/10, "Most Underrated") — READ: [Curious Refuge Jun 2026](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
- Weakness: occasional artifacts / background warping — READ: Curious Refuge Jun 2026; MASV
- Weakness: absent from AA default leaderboard; older Luma models low on Arena I2V (#37, #46) — READ: AA; [arena.ai](https://arena.ai/leaderboard/image-to-video)
- Weakness: no review of the current product newer than June 2026 found — Gap

**Pika (H3 Flex; reviews cover 2.5)**
- Strength: H3 Flex mid-upper arena placement (AA T2V #15, I2V #10; DesignArena #8 on Nov 1 2026) — READ: AA; [aiwiki.ai](https://aiwiki.ai/wiki/pika_h3_flex)
- Strength: attractive lighting/reflections (Pika 2.5) — READ: [MASV, STALE](https://masv.io/blog/best-ai-video-generator); [Substack](https://techhacker.substack.com/p/which-ai-video-generator-is-actually)
- Weakness: misses prompt details (Pika 2.5) — READ: MASV; Substack
- Weakness: H3 Flex is a derivative of MiniMax H3, with self-reported performance claims — READ: aiwiki.ai (1 source)
- Weakness: Pika's legacy model is last on Arena I2V (#48 of 48, 997) — READ: [arena.ai](https://arena.ai/leaderboard/image-to-video)

**Higgsfield**
- Strength: camera/lens presets and cinematic control layer — READ: [Async](https://async.com/blog/higgsfield-ai-review/) (competitor)
- Strength: many third-party models under one credit balance — READ: Async; [SaaS CRM Review](https://saascrmreview.com/higgsfield-ai-review/) (affiliate)
- Weakness: video fully paywalled on the free plan; paywall prompts appear late — READ: Async
- Weakness: credit terms (monthly reset, 7-day "unlimited", refund limits) and training on user content below Enterprise — READ: SaaS CRM Review (vendor-page based)
- Weakness: no independent leaderboard entry; quality depends on the hosted third-party model — READ: AA (not listed); INFERRED

**Vidu (Q4 Preview; Q3 Pro)**
- Strength: first/last-frame control — READ: [MASV, STALE](https://masv.io/blog/best-ai-video-generator) (1 source)
- Strength: "solid all-rounder" — READ: [Substack](https://techhacker.substack.com/p/which-ai-video-generator-is-actually) (1 source)
- Weakness: visual artifacts / compression — READ: MASV ("highly compressed, blocky"); Substack ("occasional visual artifacts")
- Weakness: low leaderboard placement: Q3 Pro AA T2V #31 and I2V #30; Q4 Preview I2V #20 of 35 — READ: [AA](https://artificialanalysis.ai/video/leaderboard/image-to-video)

**Dreamina (Seedance 2.5)**
- Strength: best overall output in current professional head-to-heads — READ: [Curious Refuge Nov 2026](https://curiousrefuge.com/blog/kling-vs-seedance); [Curious Refuge Aug 2026](https://curiousrefuge.com/blog/wan3-review); AA I2V #1, T2V #4 (READ)
- Strength: physics, multi-shot scenes, native audio and lip sync (2.0) — READ: [Curious Refuge Jun 2026](https://curiousrefuge.com/blog/best-ai-video-generators-2026); [eWeek, STALE](https://www.eweek.com/news/best-ai-video-generators-2026/)
- Strength: heavy multimodal reference input (up to 30 images, 10 videos, 10 audio) and 30 s clips — READ: [The Decoder](https://the-decoder.com/bytedances-seedance-2-5-generates-30-second-video-clips-with-built-in-audio/) (vendor specs as reported)
- Weakness: price ("nearly three times the cost of Kling at 1080p"; not "four times better" than Wan) — READ: Curious Refuge Nov and Aug 2026
- Weakness: artifacts, plasticky edges, repeating patterns — READ: Curious Refuge Jun and Nov 2026
- Weakness: loses to Kling 4.0 on dialogue prompt handling and style matching — READ: Curious Refuge Nov 2026 (1 source)

**Wan (Wan 3.0)**
- Strength: AA text-to-video #1 (Elo 1174 ±13) — READ: [AA](https://artificialanalysis.ai/video/leaderboard/text-to-video)
- Strength: value and reference handling; expressive faces — READ: [Curious Refuge Aug 2026](https://curiousrefuge.com/blog/wan3-review); price per second in [TNW](https://thenextweb.com/news/alibaba-wan3-video-model-after-share-sale)
- Weakness: lip sync, character consistency, compositing — READ: Curious Refuge Aug 2026 (1 source)
- Weakness: closed weights, staged/members-only access — READ: TNW
- Weakness: image-to-video only #11 on AA (1109) — READ: [AA I2V](https://artificialanalysis.ai/video/leaderboard/image-to-video)

### Inferences
- INFERRED: Confidence ranking of the strengths/weaknesses sets — high: Seedance, Kling, Runway, Veo; medium: Luma, Hailuo, Wan; low: Pika, Vidu, Higgsfield.
- INFERRED: For Hailuo, Pika, Vidu and Kling the hands-on review evidence mostly describes the previous model generation; card text should say so or rely on the leaderboard numbers instead.

### Gaps
- Second independent hands-on source for Wan 3.0, Seedance 2.5 and Kling 4.0 beyond Curious Refuge.
- Any hands-on test of Higgsfield's paid video workflow by a non-competitor, non-affiliate reviewer.
- Any 2026 H2 hands-on review of Vidu Q4 Preview, Pika H3 Flex, Hailuo 3.0, Luma Ray3.2.

## Key question 5 — Which tools are consistently named "best overall" / "best value" / "best for beginners" across independent roundups

### Takeaway
There is no single consistent "best overall": Seedance and Kling take the top two spots in filmmaker-oriented tests (Curious Refuge), Veo takes it in the mainstream roundup (Zapier), and Luma tops one stale single-prompt test. "Best value" most often points to Kling (and Hailuo / Wan as budget options); no source read gives an explicit "best for beginners" award.

### Cited Findings
- Best overall / best output: Kling 3.0 "Best Overall AI Video Generator" and Seedance 2.0 "Best AI Video Output" (Jun 2026) — READ: [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026); Seedance 2.5 preferred over Kling 4.0 (Nov 2026) and over Wan 3.0 (Aug 2026) — READ: [Curious Refuge](https://curiousrefuge.com/blog/kling-vs-seedance), [Curious Refuge](https://curiousrefuge.com/blog/wan3-review)
- Best overall (mainstream): Veo is "the best AI video generation all-arounder on the market" (Oct 2026) — READ: [Zapier](https://zapier.com/blog/best-ai-video-generator/)
- Best overall (blogger): Kling the standout (Jun 2026) — READ: [Substack](https://techhacker.substack.com/p/which-ai-video-generator-is-actually)
- First-listed pick: Seedance 2.0 (Feb 2026, STALE) — READ: [eWeek](https://www.eweek.com/news/best-ai-video-generators-2026/)
- Top grade in single-prompt test: Luma Ray3 HDR A-plus (Mar 2026, STALE) — READ: [MASV](https://masv.io/blog/best-ai-video-generator)
- Best for film-making workflow: Runway — READ: [Zapier](https://zapier.com/blog/best-ai-video-generator/)
- Value: Kling 3.0 "frequently cited as the value option" — READ: [Lambda Films](https://www.lambdafilms.co.uk/google-vs-kuaishou/); Kling 4.0 about one third of Seedance 2.5's cost at 1080p — READ: [Curious Refuge](https://curiousrefuge.com/blog/kling-vs-seedance); Wan 3.0 "surprisingly close for a fraction of the cost" — READ: [Curious Refuge](https://curiousrefuge.com/blog/wan3-review); Hailuo "Budget-friendly" — READ: [Substack](https://techhacker.substack.com/p/which-ai-video-generator-is-actually); Veo 3.1 for "budget-conscious filmmakers" (STALE) — READ: [eWeek](https://www.eweek.com/news/best-ai-video-generators-2026/)
- Beginners: no explicit award in any source read. Closest statements: Hailuo has a "beginner-friendly interface" — READ: [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026); Veo gives "high-quality output with little skill required" — READ: [Zapier](https://zapier.com/blog/best-ai-video-generator/); Runway has a "steep learning curve" — READ: Zapier.
- Most underrated: Luma Ray 3.2 — READ: [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)

### Inferences
- INFERRED suggested evidence-backed tags as of 2026-11-18 (for the report writer to accept or reject):
  - "Stands out in reviews": Dreamina/Seedance (strong), Kling (strong), Google Flow/Veo (mainstream roundup only; weak on current leaderboards), Luma (moderate; "underrated", film-look).
  - "Top of leaderboards": Wan (AA T2V #1), Dreamina (AA I2V #1), Hailuo (AA top-4 both).
  - "Best value" style tag: Kling; secondary Wan and Hailuo.
  - "Beginner friendly": only soft support for Hailuo and Veo; no award found — treat as Assumption if used.
  - No independent support for a quality tag: Higgsfield, Vidu, Runway (Runway supports a "pro film-making toolset" tag instead), Pika (leaderboard-only, derivative model).
- INFERRED: Many "best AI video generator 2026" search results are vendor or reseller blogs (Veed, Synthesia, Fliki, Picsart, Manus, ImagineArt, Higgsfield, Dreamina/CapCut, Atlas Cloud, magichour, getimg) and were deliberately not used.

### Gaps
- No current roundup from Tom's Guide, TechRadar, The Verge, PCMag found; CNET's list unreadable (blocked). A manual browser check of [CNET best AI video generators](https://www.cnet.com/tech/services-and-software/best-ai-video-generators/) would add a second mainstream voice next to Zapier.
- No source read names an explicit "best for beginners" among these ten.
- Zapier's page carries conflicting update dates (Feb 2026 tester update vs Oct 2026 review), so its Veo/Runway picks may reflect early-2026 testing.
