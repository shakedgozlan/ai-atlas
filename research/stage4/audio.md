# Stage 4: audio (category 8, slug `audio`)

Check date 2026-11-18. This research was finished by a second researcher after the first one was interrupted. The first researcher left 9 staging files and no notes. The second pass kept everything already sourced. It filled the empty Moises and Murf pricing structures, then terms and training policy, version dates, roundups, popularity, Hebrew and company names. The shared fetch quota ran out twice, so the second pass waited 15 minutes twice, as the addendum says.

## Final tool list (9)

### Takeaway
There are nine tools. Three generate music (Suno, Google Flow Music, Stable Audio), three handle voice and speech (ElevenLabs, Murf, Speechify), and three are utilities: speech cleanup (Adobe Podcast) and stem separation (LALAL.AI, Moises). Udio was swapped out for Google Flow Music. Udio was not acquired and did not close, but it is running under transition terms while it is rebuilt.

### Cited Findings
- **ElevenLabs** (`elevenlabs`): it leads in voice. It is in 4/6 roundups, a16z 7th edition ranks it #25 and #10, Eleven v4 shipped Sep 28, 2026, and Hebrew TTS is officially supported in Eleven v3. — [Eleven v4 blog](https://elevenlabs.io/blog/eleven-v4); [languages](https://elevenlabs.io/docs/help-center/other/what-languages-do-you-support.md); [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)
- **Suno** (`suno`): it leads in song generation. It is in 5/6 roundups and ranks #19 on web traffic in a16z's 7th edition. v6 shipped September 9, 2026. Free plan songs are owned by Suno and are non-commercial only. — [a16z 7th](https://a16z.com/100-gen-ai-apps-7/); [Suno help on ownership](https://help.suno.com/en/articles/2416769); [v6](https://suno.com/blog/introducing-v6)
- **Google Flow Music** (`google-flow-music`, formerly ProducerAI): Google Labs' music agent. It has free daily credits and a $6 plan, and it got Lyria 3.5 on July 29, 2026. It meets the new-and-notable rule (details below). — [pricing](https://www.flowmusic.app/pricing); [Google blog Feb 24, 2026](https://blog.google/innovation-and-ai/models-and-research/google-labs/producerai/); [Lyria 3.5](https://blog.google/innovation-and-ai/models-and-research/google-labs/lyria-3-5/)
- **Stable Audio** (`stable-audio`): Stability AI's music and sound tool. Stable Audio 3.0 was trained on licensed data, generates up to 6:20, and Stability says the user owns the output. It is included as an established tool, not as new and notable (1/6 roundups). — [Stable Audio 3.0 news](https://stability.ai/news-updates/meet-stable-audio-3-the-model-family-built-for-artistic-experimentation-with-open-weight-models); [Stability explainer](https://stability.ai/explainers/stable-audio-vs-competitors-licensing-export-rights-and-self-hosting-compared)
- **Murf** (`murf`): voice-over studio. Commercial rights are on all paid plans, and the Falcon model launched on 10 November 2025. It is in 2/6 roundups. — [Murf help: commercial rights](https://help.murf.ai/do-i-have-commercial-rights-over-the-voice-over-created); [product updates](https://murf.ai/product-updates)
- **Speechify** (`speechify`): text-to-speech reader that students use widely, plus Voice Over Studio. It is in the a16z 7th edition top-50 link list and in 2/6 roundups. — [pricing](https://speechify.com/pricing/); [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)
- **Adobe Podcast** (`adobe-podcast`): speech cleanup in the browser (Enhance Speech). Premium is now part of Firefly Pro (US$19.99/mo regular price). It is established, not new and notable (1/6). — [Podcast plans](https://podcast.adobe.com/en/plans); [Firefly plans](https://www.adobe.com/products/firefly/plans.html)
- **LALAL.AI** (`lalal-ai`): stem separation. It has a free test tier, Lite at $7.5/mo billed yearly, and an API in Pro. The privacy policy says user files are not used for AI training. It is established (1/6). — [pricing](https://www.lalal.ai/pricing/); [privacy](https://www.lalal.ai/privacy-policy/)
- **Moises** (`moises`): app for musicians to practise with stem separation. Commercial use of outputs is allowed. It is in the a16z 7th edition top-50 link list and in 2/6 roundups. Prices are behind a login. — [Moises help: ownership](https://help.moises.ai/hc/en-us/articles/23877386138140-Who-owns-the-output-and-music-I-create-with-Moises); [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)

### Inferences
- The list covers the three jobs a design student is likely to need: music for a video, voice-over, and fixing or separating existing audio.

### Gaps
- See "What stays open" below.

## Udio decision and Google Flow Music check

### Takeaway
Udio was left out. It is alive and was not acquired, but it has run under "transition" terms since 12 November 2025, and the licensed relaunch has no official date. Google Flow Music, which grew out of the allocated alternate "Producer", took its place. It is a separate product from Google Flow (video, category 6).

### Cited Findings
- The earlier researcher's JSON gives the reason only indirectly. `former_name` is "ProducerAI", the status says it joined Google Labs on "February 24, 2026" (official Google blog), and producer.ai now redirects to flowmusic.app. The rename date April 20, 2026 comes only from a 9to5Google headline (s4, not official, not read). The JSON never mentions Udio. It amounts to taking the "Producer" alternate in the place of Udio. — [Google blog](https://blog.google/innovation-and-ai/models-and-research/google-labs/producerai/)
- Udio official blog, "Udio with Warner Music Group", "Published on Nov 19, 2025": "Udio is still governed by our transition ToS that was put into place on 12 November". Asked whether the labels bought Udio, the post says "No, they did not." It describes a "reimagined platform" with no launch date. The v1, v1.5 and v1.5 Allegro models stay available during the transition. — [Udio blog](https://www.udio.com/blog/udio-warner)
- The Udio blog index has nothing newer than Nov 19, 2025 (newest posts: Nov 19, 2025 WMG; Oct 29, 2025 UMG). — [Udio blog index](https://www.udio.com/blog)
- Press reports (not official, not used as facts) call the coming licensed app "Starstruck". — [MBW](https://www.musicbusinessworldwide.com/udios-licensed-ai-music-app-will-be-called-starstruck-with-four-creation-modes-for-fans-report/)
- Separation from Google Flow: Google Flow Music has its own domain and pricing page (flowmusic.app/pricing, with plans Free, Starter, Plus and Member), and Google's own posts give it its own name. The Lyria 3.5 post is titled for Google Flow Music. Search also shows a separate iOS app called "Google Flow Music" (not opened, so iOS is marked unverified). — [pricing](https://www.flowmusic.app/pricing); [Lyria 3.5](https://blog.google/innovation-and-ai/models-and-research/google-labs/lyria-3-5/)
- New-and-notable test for Google Flow Music. Rule A is met: it joined Google Labs on Feb 24, 2026 and got Lyria 3.5 on July 29, 2026. Rule B is met by two independent reviews in the window: Fast.io, "Producer AI Review 2026", updated Jun 25, 2026 (the publisher sells cloud storage and has no affiliate disclosure), and Kompozy's review, "Last verified 2026-07-31" (a content-scheduling platform that "does not generate music"). Both are medium-to-weak independence. — [Fast.io](https://fast.io/resources/producer-ai-review-2026/); [Kompozy](https://kompozy.io/reviews/google-flow-music)

### Inferences
- Udio is a leading, established name: it is in 5/6 of the roundups below. The brief would allow it in with a status note, so the swap is a judgment call. Google Flow Music was preferred because it is fully usable today with a renewing free tier. If the editor wants Udio back, it needs a pricing and terms pass, and the status note should quote the transition ToS of "12 November".

### Gaps
- Google Flow Music's terms, song ownership, commercial use and training policy were not found. No official terms or FAQ URL turned up in searches.

## Rejected candidates

- **Udio**: in transition (see above). Left out in favour of Google Flow Music.
- **Producer (formerly Riffusion)**: now Google Flow Music, so it is included under that name. "Riffusion" as a former name is not verified in any official source.
- **Krisp, Cartesia, Hume, AIVA, Soundraw, Mureka, Fish Audio**: not needed to keep 9 tools, and there was no fetch budget to research them. For the record, among the roundups below Soundraw and AIVA appear in 3/6 each (Rework, Dupple, Jotform), and Hume and Fish Audio appear in Zapier's list. Fish Audio also appears in DIY AI's.
- **ElevenLabs Music** is covered by the ElevenLabs entry, not a separate tool.

## Review roundups (N = 6)

### Takeaway
Six roundups were counted, all published or updated in the window. The set leans toward music (four of six), which favours Suno over the utilities. No roundup in the set is fully free of commercial links.

### Cited Findings
1. Zapier, "best AI voice generator", Miguel Rebelo, updated September 2026 (published Sep 8, 2026). Covers ElevenLabs, Hume, Speechify Studio, WellSaid, Fish Audio, Murf, DupDub and TTSMaker. Has an affiliate disclosure and says it is never paid for placement. Independence: **medium-high**. — [Zapier](https://www.zapier.com/blog/best-ai-voice-generator/)
2. Rework, "Best AI Tools for Music Production in 2026", updated Nov 2, 2026. Covers Suno, ElevenLabs Music, Moises, LALAL.AI, Udio and 8 others. No affiliate disclosure; Rework is a CRM vendor, not an audio one. Independence: **medium**. — [Rework](https://resources.rework.com/tools/ai-tools/best-ai-tools-for-music-production-2026)
3. Dubspot, "Best AI Music Generators in 2026", published Jun 12, 2026, updated Oct 9, 2026. Covers Suno, Udio, Stable Audio 3, Moises and LANDR. Some retailer affiliate links and a self-promotion footer. Independence: **medium**. — [Dubspot](https://blog.dubspot.com/best-ai-music-generators-2026)
4. Dupple, "The Best AI Music Generators in 2026", published Jun 16, 2026, updated Oct 28, 2026. Covers Suno, Udio, ElevenLabs Music, Soundraw, AIVA, Beatoven.ai, Soundful and Mubert. States "may be paid placements or contain affiliate links". Independence: **medium-low**. — [Dupple](https://dupple.com/learn/best-ai-music-generators)
5. Jotform, "best AI music generator", Harry Guinness, last update Mar 30, 2026. Covers Suno, Udio, Soundraw, Sonauto, LANDR and AIVA. No affiliate disclosure; it promotes Jotform AI. Independence: **medium**. — [Jotform](https://www.jotform.com/ai/best-ai-music-generator/)
6. DIY AI, "Best AI Voice & Audio Tools (2026)", published Nov 24, 2025, updated Oct 19, 2026. Covers ElevenLabs, Fish Audio, Play.ht, Resemble AI, WellSaid, Murf AI, Descript, Coqui TTS, Speechify, Adobe Podcast Enhancer, Suno and Udio. Uses commission "/go/" links and sells paid "independent testing". Independence: **low-medium**. Kept because it is the only broad roundup that covers voice, podcast and music together. — [DIY AI](https://diyai.io/ai-tools/audio-generation/best-ai-audio-tools/)
- Rejected roundup: The Neuron, "Best AI Voice Generators for Business Content in 2026" (Aug 12, 2026). Its methodology says it prioritized vendors from The Neuron's AI Affiliate Partners spreadsheet (ElevenLabs, Murf, PlayHT, Willow), so it is **not independent**. — [The Neuron](https://www.theneuron.ai/guides/best-ai-voice-generators-business-content/)

Counts per tool (of 6): Suno 5 (2-6) · ElevenLabs 4 (1, 2, 4, 6) · Murf 2 (1, 6; Dupple names it only in related links) · Speechify 2 (1, 6) · Moises 2 (2, 3) · Adobe Podcast 1 (6) · LALAL.AI 1 (2) · Stable Audio 1 (3) · Google Flow Music 0. Udio, not included, has 5 (2-6). `value` is true only for Suno.

### Inferences
- The utility tools (LALAL.AI, Adobe Podcast) score low mainly because the roundups are about generators, not because they are minor tools.

## Popularity (a16z)

### Cited Findings
- a16z Top 100 Gen AI Consumer Apps, 7th edition, October 5, 2026. Web ranks come from Similarweb monthly visits and mobile ranks from Sensor Tower MAU. The text says Suno "ranks #19 on web traffic and #7 on spending". ElevenLabs "ranks #25 and #10", and the text does not say which number is web traffic. Speechify and Moises appear in the Top 50 link list with no rank given. Udio, Murf, Adobe Podcast, LALAL.AI, Stable Audio and Google Flow Music / ProducerAI are not mentioned. — [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)
- `popular` is true for Suno, ElevenLabs, Speechify and Moises, and false for the rest.

### Gaps
- The exact ranks for Speechify and Moises are only in chart images, which could not be read.

## New and notable (rule A + B, with the roundups above as reviews)

- ElevenLabs: true (v4, Sep 28, 2026; 4 reviews). Suno: true (v6, Sep 9, 2026; 5). Murf: true (Falcon, 10 November 2025; 2). Google Flow Music: true (Lyria 3.5, July 29, 2026; 2 separate independent reviews, see above).
- Stable Audio: false. 3.0 is dated "May 20" with no year in the post body, but it has only 1 review. LALAL.AI and Adobe Podcast: false (1 review each). These three are in as established tools.
- Speechify and Moises: null. Each has 2 reviews, but no version date was verified.

## Logo pages (for the logo stage)
No press kits were checked. These are the official pages where each logo appears: elevenlabs.io, suno.com, flowmusic.app, stableaudio.com (Stability AI: stability.ai), murf.ai, speechify.com, podcast.adobe.com, lalal.ai, moises.ai.

## What was filled in this pass
- Moises: Free, Premium and Pro plan records with features (prices still behind the login); ownership and commercial use; privacy (June 8, 2026, no mention of training); legal name Moises Systems Inc.
- Murf: commercial rights (all paid plans; broadcasting only on Enterprise); Hebrew not in the language list; Falcon version date; API rate; `free_renewing` corrected to null.
- Suno: privacy (June 23, 2026). It trains on user content and describes no opt-out.
- LALAL.AI: terms (July 30, 2026), with no ownership or commercial-use clause for outputs; privacy says no AI training on user files; OmniSale GMBH, Switzerland.
- Speechify: terms (Jul 1, 2025, marked stale), commercial use only via Voice Over Studio; Speechify, Inc., USA; Hebrew from a 2022 blog post (marked stale).
- Adobe Podcast: Firefly Pro regular price US$19.99/mo (6-month promo US$9.99 ending Dec 6); free use has unquantified daily limits; web only; Enhance Speech is "language agnostic". Verification raised to "אומת חלקית".
- Stable Audio: ownership and Community / Enterprise licence; 3.0 details (6:20, licensed training data); DAW plugin beta; official conflict over plan names (KB: Creator/Max, explainer: Solo/Studio).
- ElevenLabs: Eleven v4 version date (it supports 90+ languages, but the post does not name Hebrew).
- All 9 tools: review_roundups, popular, new_notable.

## What stays open
- Prices: Murf (all plans), Moises (Premium and Pro), Stable Audio (the live pricing page; the knowledge-base prices may be out of date, and a free plan from October 2026 is reported by third parties only), annual prices for ElevenLabs and Google Flow Music, Suno's monthly-versus-yearly figures, and Speechify Studio and API prices.
- Training policy: Google Flow Music, Murf, Speechify (privacy policy), Moises (policy silent), Adobe Podcast and Stable Audio app.
- Rights: Google Flow Music, Adobe Podcast, LALAL.AI (terms silent).
- Version dates: Speechify, Moises, LALAL.AI and Adobe Podcast. Stable Audio 3.0 has no year in the official post.
- Hebrew: LALAL.AI and Moises not checked. Speechify rests on a stale 2022 page.
- Students: Murf's education page was not read. Speechify's Education page was not read. No student offers were found for the others.

## Browser gaps (official pages not readable by the fetcher)
1. https://murf.ai/pricing: JavaScript-only, metadata only (two tries by the first researcher).
2. https://murf.ai/educators-and-non-profits: not read; student offer unknown.
3. https://studio.moises.ai/billing/pricing: login wall.
4. https://stableaudio.com/pricing: metadata only (two tries).
5. https://stableaudio.com/faqs: metadata only.
6. https://helpx.adobe.com/podcast/adobe-podcast-premium-plan-change-faq.html: blocked for automated reading.
7. https://www.flowmusic.app: terms, FAQ or ownership page not found. Open the site and locate its legal links.

Not reached because of the fetch budget (no attempt made, so these are not gaps): https://speechify.com/en/pricing-studio/ and Speechify's privacy policy.
