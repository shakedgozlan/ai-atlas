# Community sentiment on ten AI video generation tools (state as of 18 Nov 2026)

Reading conventions used in every bullet:

- **READ** = I fetched the page on 2026-11-18 and the fact is on the page. **INFERRED** = taken from a search-result title/URL only, or deduced. **Assumption** = unverified.
- All review-platform numbers were read on **2026-11-18**.
- Method limits that affect the whole file:
  - **Reddit could not be fetched at all** (www.reddit.com and old.reddit.com both returned "site blocked"). The search tool returned only titles and URLs, no snippets, and no Reddit thread URLs surfaced. So there is **no directly read Reddit evidence** in this file. Reddit sentiment appears only second-hand, where a journalist or a review site reports it, and is labelled as such.
  - **YouTube videos/transcripts were not reached.** Creator verdicts come from the creators' own written channels (Curious Refuge blog, Theoretically Media newsletter).
  - Model generations current in Nov 2026 per the sources read: Seedance 2.5, Kling 4.0, Wan 3.0, Luma Ray 3.2, MiniMax H3, Veo 3.1, Runway Gen-4.5.
  - Budget used: 30 page fetches (28 successful).

## 1. Reddit: which tools are recommended in "which should I subscribe to" threads, and recurring complaints per tool

### Takeaway
I could not read Reddit, so I cannot say which tool Reddit recommends most; that question stays open. The recurring complaints per tool are well documented elsewhere (Trustpilot, Google's own forum, journalism that quotes Reddit) and are the same across almost every tool: credits burned on failed or unusable generations, refunds refused, and cancellation friction.

### Cited Findings

**Complaint patterns per tool (each is a repeated pattern on the page unless marked "single user")**

- **Google Flow / Veo** — READ: a Google AI Ultra subscriber reported generations stuck in "Queued" or failing with "Oops, something went wrong" while credits were still deducted (balance 10,000 → 9,050); posted 2 Jul 2026, last activity 19 Sep 2026; one other user confirmed the same issue with no refund; the original poster said the bug was resolved on 16 Jul but credits were not refunded; no Google staff reply in the thread. Single thread, two affected users. — [Google AI Developers Forum](https://discuss.ai.google.dev/t/google-flow-veo-stuck-in-queued-state-oops-something-went-wrong-failed-generations-deducting-credits-google-ai-ultra/173335)
- **Google Flow / Veo** — INFERRED (titles only, not opened): further threads with the same theme exist on the same forum, e.g. "Ultra subscriber – Google Flow Agent Mode batch generation failing ... for 5 days, credits deducted, zero output" and "Veo / Flow Generation Issues, Lost Credits, Consistency Problems, and Excessive Failed Generations". That suggests a repeated pattern, not one user. — [thread 173355](https://discuss.ai.google.dev/t/ultra-subscriber-google-flow-agent-mode-batch-generation-failing-with-something-went-wrong-for-5-days-credits-deducted-zero-output/173355), [thread 147374](https://discuss.ai.google.dev/t/veo-flow-generation-issues-lost-credits-consistency-problems-and-excessive-failed-generations/147374)
- **Runway** — READ: recent Trustpilot reviews (Oct 2026) repeat: credits consumed by failed or repeated generations; a Pro subscriber says upscaling billed credits despite an "Unlimited" label (single user); unexpected charges and refund denials; a cancellation link that redirects back to the dashboard (single user, 18 Oct 2026); dance videos rejected by content moderation as nudity (single user, 23 Oct 2026). — [Trustpilot runwayml.com](https://www.trustpilot.com/review/runwayml.com)
- **Runway, "unlimited" removed** — READ: Runway's $95/mo Unlimited plan (2,250 credits plus unmetered slow "Explore Mode") was replaced by a $95/mo Max plan with 9,500 credits and no Explore Mode; captured 24 Jun 2026; Unlimited last listed May 2026. Output is now capped by credits (9,500 credits = 791 seconds of Gen-4.5 by Runway's own conversion). — [usagepricing.com](https://www.usagepricing.com/blueprint/activity/runway-2026-06-24-max-plan-replaces-unlimited)
- **Runway, "unlimited" removed** — READ: a secondary write-up of a Reddit post says Runway removed relaxed-mode unlimited generation without notifying subscribers beforehand and described it as an "upgrade"; the site did not verify the claim and gives no date. Second-hand Reddit, unverified. — [aiweekly.co](https://aiweekly.co/alerts/runway-drops-unlimited-plan-calls-it-upgrade)
- **Kling AI** — READ: recent Trustpilot reviews (11–27 Oct 2026) repeat: credits wasted on unusable output; 11,800 credits that expired unused (single user, 20 Oct 2026); purchased credits blocked unless the user upgrades to a membership, with refunds refused (two users, 22–23 Oct 2026); automated moderation flagging harmless renders (single user); about two days of waiting on the free tier unless paying to skip (single user, 11 Oct 2026); repeated "too busy" errors (single user, 12 Oct 2026). — [Trustpilot klingai.com](https://ca.trustpilot.com/review/klingai.com)
- **Kling AI, content filter tightening** — READ: an App Store review dated 24 Sep 2025 says prompts that worked before an update are now blocked as sensitive, after the user had bought credits. Single user and older than 6 months, possibly stale. — [App Store, Kling AI](https://apps.apple.com/us/app/kling-ai-ai-image-video-maker/id6738049229)
- **Hailuo AI (MiniMax)** — READ: Trustpilot reviews repeat charges continuing after cancellation and duplicate charges (reviews dated 18 Jan, 3 Mar, 15 Apr, 1 Jul 2026), slow or unhelpful refund handling (23 Mar, 18 May, 30 Sep 2026), an input bug that consumed 105 of 200 credits (single user, 22 Aug 2026), and "content violations" on benign prompts (single user, 25 Dec 2025, older than 6 months). — [Trustpilot hailuoai.video](https://www.trustpilot.com/review/hailuoai.video)
- **Luma (Dream Machine / Ray)** — READ: Trustpilot reviews (Aug–Oct 2026) repeat: credits run out fast and fixing a bad generation costs more credits ("10,000 credits for $30, but fixing a poorly generated video costs over 5,000 credits", single user, 6 Oct 2026); outputs ignore instructions; support slow (one user says a month and a half, 16 Jul 2026); a refund refused after goodwill credits were issued (single user, 14 Oct 2026). No censorship or queue complaints on the page. — [Trustpilot lumalabs.ai](https://www.trustpilot.com/review/lumalabs.ai)
- **Pika** — READ: Trustpilot reviews (Jun–Sep 2026) repeat: credits not refreshing or not rolling over, unexpected charges and upgrade pressure, a cancelled subscription reappearing the next day (single user, 6 Jun 2026), and "constant fails due to too few servers" (single user, 24 Sep 2026). The company claimed the profile in Oct 2026 but has not replied to negative reviews. — [Trustpilot pika.art](https://www.trustpilot.com/review/pika.art)
- **Higgsfield** — READ: most recent Trustpilot reviews (16 Oct – 1 Nov 2026) repeat refund requests denied (after the 7-day window; on an annual plan once some credits were used), credits draining fast on unusable video, a hard-to-find cancellation path (single user, 21 Oct 2026), and overwhelming upgrade pop-ups (single user, 31 Oct 2026). Throttling and bans do not appear among the recent reviews shown. — [Trustpilot higgsfield.ai](https://www.trustpilot.com/review/higgsfield.ai)
- **Vidu** — READ: Trustpilot reviews repeat credits deducted for failed generations and not restored (latest 28 Oct 2026), no reply to a refund request for a week (single user, 14 Apr 2026), "inappropriate" warnings on ordinary portraits (single user), and "gone downhill in a hurry" (single user, 28 Mar 2026). Only 18 reviews in total, so this is a thin sample. — [Trustpilot vidu.com](https://www.trustpilot.com/review/www.vidu.com)
- **Dreamina (ByteDance / Seedance)** — READ: Trustpilot reviews (Sep–Oct 2026) repeat credits lost to failed generations with refunds refused, unexpected recurring charges, cancellation that did not stop charges, filters blocking basic cartoon faces (single user), loss of file access about 15 days into an Ultimate Plan (single user, 27 Oct 2026), and generic bot replies from support. 36 reviews in total, thin sample. — [Trustpilot dreamina.capcut.com](https://www.trustpilot.com/review/dreamina.capcut.com)
- **Wan (Alibaba)** — no user-complaint source found for the hosted Wan service (see Gaps). The community complaint that is documented is about openness: see section 4.

**Second-hand Reddit sentiment**

- READ: a Kazakh business outlet (11 Feb 2026) reports that Reddit and social-media users criticised Higgsfield's "unlimited" subscriptions as not truly unlimited. Older than 6 months, possibly stale. — [digitalbusiness.kz](https://digitalbusiness.kz/2026-02-11/higgsfield-unlimited-mnenie-storon-o-situatsii-s-beskonechnimi-podpiskami-v-dekabre/)

### Inferences
- The same three complaints (credits charged for failed or unusable output, refunds refused, cancellation friction) appear on the Trustpilot pages of nine of the ten tools. A site warning about "credits are spent even when the result is unusable, and refunds are rare" is supported as a category-wide caution, not as a flaw of one tool.
- "Unlimited" is the riskiest marketing word in this category in 2026: Runway removed its unmetered mode (June 2026) and Higgsfield's unlimited plans drew press coverage for throttling (section 5).
- Free-tier queue pain is evidenced for Kling (about two days, one user) and Google Flow (a daily blackout window, section 4). For the other tools I found no dated queue evidence.

### Gaps
- Which tools Reddit users recommend most in 2026 "which should I subscribe to" threads: **not answerable**. Reddit pages were blocked and search returned no Reddit thread URLs or snippets. Nothing in this file should be presented as "Reddit recommends X".
- r/aivideo, r/StableDiffusion, r/runwayml, r/KlingAI_Videos, r/HiggsfieldAI, r/VEO3, r/singularity, r/generativeAI: none read.
- Hacker News and Discord: not searched within the fetch budget.
- No user-complaint source for Wan's hosted service (wan.video); no Trustpilot profile surfaced in search.

## 2. YouTube: what well-known hands-on creators conclude in recent comparisons

### Takeaway
The only creator verdicts I could read are from Curious Refuge (written versions of their reviews) and Theoretically Media (newsletter). Both put ByteDance's Seedance on top in the second half of 2026; Curious Refuge ranks Seedance 2.5 first, Seedance 2.0 second (best value) and Kling 4.0 third, with Veo 3.1 down in ninth as an ageing model.

### Cited Findings
- READ: Curious Refuge "Best AI Video Generators for 2027" (dated "Nov 2", footer © 2026, so Assumption: 2 Nov 2026) scores out of 10: 1) Seedance 2.5 – 8.94, best overall, native 4K, main criticism is cost; 2) Seedance 2.0 – 8.40, recommended for refining shots before spending on 2.5; 3) Kling 4.0 – 8.34, well-rounded, strong prompt adherence (9.2), but "Seedance 2.0 is stronger for price and consistency"; 4) Grok Imagine 1.5 – 8.17; 5) Wan 3.0 – 7.98, "most underrated", good at simple camera moves, weaker fidelity (7.41); 6) MiniMax H3 – 7.83, struggles with walking people/animals, best under 15 seconds; 7) Luma Ray 3.2 – 7.71, was top-3 at launch and has been overtaken, strong for world-building and commercial-style frames; 8) Happy Horse 1.1 – 7.63; 9) Veo 3.1 – 7.25, older model with native audio; 10) LTX 2.5 – 6.43, best open-source option for local use. — [Curious Refuge](https://curiousrefuge.com/blog/ai-video-generator-2027)
- READ: the same Curious Refuge list does **not** mention Runway, Pika, Higgsfield, Vidu, Hailuo by product name, Google Flow, or Dreamina by name (it covers the underlying models Veo 3.1, MiniMax H3, Seedance). — [Curious Refuge](https://curiousrefuge.com/blog/ai-video-generator-2027)
- READ: Curious Refuge "Kling 4.0 vs. Seedance 2.5" (dated "Nov 12", Assumption: 2026): Seedance 2.5 won five of six tests (multi-shot action, fight choreography, camera orbit, multi-shot dialogue, text-to-video realism); Kling 4.0 won only style-reference matching. Advice: "start with Seedance 2.5" when physics, camera movement or live-action look decide the shot. — [Curious Refuge](https://curiousrefuge.com/blog/kling-vs-seedance)
- READ: cost for that test sequence, calculated in Magnific (a third-party platform, not the makers' own pricing): Kling 4.0 720p $5.70, Kling 4.0 1080p $8.40, Seedance 2.5 Draft $6.00, Seedance 2.5 standard $24.00. Standard Seedance 2.5 costs nearly three times Kling at 1080p. — [Curious Refuge](https://curiousrefuge.com/blog/kling-vs-seedance)
- READ: Theoretically Media newsletter (Tim, 10 Jul 2026): "ByteDance continues to dominate the video arena"; Seedance 2.5 was then in limited early access on Jimeng/Dreamina; a 30-second 2.5 generation appeared to cost about double a 15-second 2.0 generation; he expects 2.5 "will certainly not be cheaper than 2.0" and notes Seedance pricing varies between API, main platform and third-party sites. The issue was sponsored by Wispr Flow (not a video tool). No verdict on Kling, Veo, Runway, Luma, Wan or Higgsfield in that issue. — [Theoretically Media](https://theoreticallymedia.beehiiv.com/p/seedance-2-5-inches-closer)

### Inferences
- "Wins for what", from the two creators read: Seedance 2.5 for top quality and action; Seedance 2.0 for value; Kling 4.0 for prompt adherence and style/anime matching; Luma Ray for world-building and commercial frames; Veo 3.1 no longer a top pick on quality in Nov 2026 (its remaining edge named is native audio); Wan 3.0 underrated for simple shots.
- Runway, Pika and Vidu being absent from Curious Refuge's Nov 2026 top ten is a weak signal that hands-on filmmaker-creators no longer treat them as leading models. It is absence of evidence, not a negative verdict.

### Gaps
- No YouTube video, description or transcript was read. Matt Wolfe, Tao Prompts, MattVidPro and Futurepedia: no 2026 verdicts found; searches returned only SEO blogs.
- Curious Refuge runs paid courses and its articles link to platforms; I did not check for affiliate links. Treat as expert but commercially interested.

## 3. Review platforms: scores, review counts, billing-complaint patterns

### Takeaway
The assumption that these tools score badly on Trustpilot is verified for eight of them (1.1 to 2.2 out of 5), with Higgsfield the clear exception at 4.0 from 5,254 reviews (it is the only one that actively manages its profile). G2 and the App Store show the opposite picture (4.1 to 4.7), so Trustpilot here mostly measures billing anger, not output quality.

### Cited Findings

**Trustpilot (all READ on 2026-11-18)**

| Tool | Profile | TrustScore | Reviews (last 12 months) | 1-star share | Claimed? | Source |
|---|---|---|---|---|---|---|
| Higgsfield | higgsfield.ai | 4.0 "Great" | 5,254 (5,009) | 19% (5-star 62%) | Yes; replies to 96% of negative reviews | [link](https://www.trustpilot.com/review/higgsfield.ai) |
| Pika | pika.art | 2.2 "Poor" | 77 (31) | 79% | Claimed Oct 2026; no replies to negatives | [link](https://www.trustpilot.com/review/pika.art) |
| Vidu | www.vidu.com | 2.2 "Poor" | 18 (14) | 72% | Unclaimed | [link](https://www.trustpilot.com/review/www.vidu.com) |
| Dreamina | dreamina.capcut.com | 1.5 "Bad" | 36 (33) | 89% | Unclaimed | [link](https://www.trustpilot.com/review/dreamina.capcut.com) |
| Hailuo | hailuoai.video | 1.4 "Bad" | 94 (29) | 82% | Unclaimed | [link](https://www.trustpilot.com/review/hailuoai.video) |
| Luma | lumalabs.ai | 1.4 "Bad" | 71 (48) | 86% | Unclaimed | [link](https://www.trustpilot.com/review/lumalabs.ai) |
| Kling AI | klingai.com | 1.2 "Bad" | 431 (250) | 91% | Unclaimed | [link](https://ca.trustpilot.com/review/klingai.com) |
| Runway | runwayml.com | 1.1 "Bad" | 378 (220) | 93% | Unclaimed | [link](https://www.trustpilot.com/review/runwayml.com) |

- READ: Trustpilot itself notes on the Luma and Vidu pages that the company has not invited customers to review, so reviews may not be representative. — [Luma](https://www.trustpilot.com/review/lumalabs.ai), [Vidu](https://www.trustpilot.com/review/www.vidu.com)
- INFERRED: Kling has a second Trustpilot profile under kling.ai (seen in search results, not opened), so the 431 figure may not be all Kling reviews. — [Trustpilot kling.ai](https://ch.trustpilot.com/review/kling.ai)
- INFERRED: Vidu has a second profile under www.vidu.studio and Dreamina one under dreamina.com (seen in search results, not opened). — [vidu.studio](https://www.trustpilot.com/review/www.vidu.studio), [dreamina.com](https://uk.trustpilot.com/review/dreamina.com)
- READ: Higgsfield's Trustpilot page says the company may use AI-assisted drafting for its replies. — [Trustpilot higgsfield.ai](https://www.trustpilot.com/review/higgsfield.ai)
- READ: The Register (6 Feb 2026) reports an allegation by a critic of "undisclosed review astroturfing" by Higgsfield. It is an allegation, not verified by the outlet, and older than 6 months. — [The Register](https://www.theregister.com/2026/02/06/higgsfield_ai_job_loss/)

**G2 (all READ on 2026-11-18)**

- Higgsfield: 4.5/5 from 101 reviews (82 five-star, 6 one-star); pros: many leading models in one place, ease of use, responsive support; cons: credits used up quickly when regenerating, limited fine control. One 0.5-star review (7 Oct 2026, single user) says an Ultra annual discount price rose within an hour and support refused four times. — [G2 Higgsfield](https://www.g2.com/products/higgsfield/reviews)
- Runway: 4.1/5 from 106 reviews (58 five-star, 42 four-star, 4 one-star); top cons: expensive, insufficient credits, inaccurate results; latest reviews Aug–Sep 2026; no billing-error or refund complaints on the page. — [G2 Runway](https://www.g2.com/products/runway-2022-01-04/reviews)
- Kling AI: 4.7/5 but from only 5 reviews, too few to mean anything. — [G2 Kling AI](https://www.g2.com/products/kling-ai/reviews)
- In G2's "AI Video Generators" category listing, Higgsfield is the only one of the ten tools that appears among the top products shown (the last 7% of the page was not read). — [G2 category](https://www.g2.com/categories/ai-video-generators)

**App stores (READ on 2026-11-18)**

- Kling AI iOS app (US store): 4.7/5 from about 32K ratings. Displayed written reviews still complain about credits wasted on outputs that ignore the prompt, non-refundable credits, and stricter content blocking after an update (reviews dated Feb–Dec 2025, older than 6 months). — [App Store](https://apps.apple.com/us/app/kling-ai-ai-image-video-maker/id6738049229)

### Inferences
- The gap between Trustpilot (1.1–2.2) and G2/App Store (4.1–4.7) for the same products means a single score on a tool card would mislead. Trustpilot profiles that are unclaimed collect mostly people with a billing grievance; App Store ratings are prompted in-app and skew positive. Showing both with the review count is the honest presentation.
- Higgsfield's 4.0 on Trustpilot comes with heavy profile management (96% reply rate, 5,009 reviews in 12 months, an astroturfing allegation in the press). Its 19% one-star share still carries the same refund/credit complaints as the others. The score should not be read as "Higgsfield has fewer billing problems".
- Billing-complaint pattern common to all Trustpilot pages read: no refund once credits are used; credits expire; cancellation is hard to find or does not stick.

### Gaps
- No Trustpilot profile found for Google Flow/Veo or for Wan (wan.video).
- G2 pages for Luma, Pika, Hailuo, Vidu, Dreamina, Google Flow: not found in the category listing or not fetched.
- Product Hunt: no ratings read for any tool.
- Google Play ratings and App Store ratings for Hailuo, Dreamina, Pika, Luma, Runway, Higgsfield: not read (a Dreamina Google Play page exists: [link](https://play.google.com/store/apps/details?id=com.lemon.dreamina&hl=en_IN), INFERRED, not opened).

## 4. Value for money: best value, usable free plans, and Wan run locally

### Takeaway
On value, the one hands-on source read names Seedance 2.0 as better value than Kling 4.0, with Seedance 2.5 the quality leader at a much higher price. Among free plans, only Google Flow (50 credits a day) is described as usable on an ongoing basis; Kling, Hailuo and Pika are teasers and Luma has no free plan. Local Wan is a real free alternative only at the Wan 2.2 level: Alibaba has published no weights since July 2025, so Wan 2.5 through 3.0 are cloud-only.

### Cited Findings

**Value**

- READ: Curious Refuge argues Seedance 2.0 is stronger than Kling 4.0 "for price and consistency", and names cost as the main criticism of Seedance 2.5. — [Curious Refuge](https://curiousrefuge.com/blog/ai-video-generator-2027)
- READ: per-generation cost in Curious Refuge's test (via Magnific): Kling 4.0 720p $5.70; Kling 4.0 1080p $8.40; Seedance 2.5 Draft $6.00; Seedance 2.5 standard $24.00. — [Curious Refuge](https://curiousrefuge.com/blog/kling-vs-seedance)
- READ: Runway Max is $95/mo ($76 billed annually) for 9,500 credits = 791 seconds of Gen-4.5; no unmetered mode any more (captured 24 Jun 2026). — [usagepricing.com](https://www.usagepricing.com/blueprint/activity/runway-2026-06-24-max-plan-replaces-unlimited)
- READ: G2 reviewers' top complaint about Runway is "Expensive Cost" (4 mentions) and "Insufficient Credits" (2 mentions). — [G2 Runway](https://www.g2.com/products/runway-2022-01-04/reviews)
- READ: some users said they paid more to generate on Higgsfield than they would have by subscribing to each model separately (No Film School relaying user posts, 11 Feb 2026, unverified, older than 6 months). — [No Film School](https://nofilmschool.com/ai-video)

**Free plans** (source: Scrimba article published 15 Aug 2026, modified 16 Nov 2026; it carries `ref=scrimba.com` tracking links and promotes Scrimba's own product, so treat as commercially interested; plan details should be re-checked on official pricing pages)

- READ: Google Flow (Veo): 50 credits/day, no rollover; a Veo 3.1 Lite clip costs 10 credits; SynthID always applied; no 1080p upscaling; free users may be unable to generate roughly 2–5 PM UTC. Usable for daily tests. — [Scrimba](https://scrimba.com/articles/free-ai-video-generators-2026/)
- READ: Runway: 125 one-time credits (about two 5-second clips), watermark, credits never expire. A small test only. — [Scrimba](https://scrimba.com/articles/free-ai-video-generators-2026/)
- READ: Kling: no monthly or daily free credits (daily login credits are for subscribers), watermark, 1080p is paid, no commercial use. Teaser. — [Scrimba](https://scrimba.com/articles/free-ai-video-generators-2026/); partly contradicted by [PC Tech Magazine](https://pctechmag.com/2026/09/top-10-free-ai-video-generators-best-tools-you-can-try-without-paying/) (10 Sep 2026), which lists a "Free Basic tier" for Kling, watermarked, amount not stated.
- READ: a Kling Trustpilot reviewer reports about two days of queue on the free tier unless paying to skip (single user, 11 Oct 2026). — [Trustpilot klingai.com](https://ca.trustpilot.com/review/klingai.com)
- READ: Hailuo: one-time welcome credits that expire after 3 days, watermark on free downloads, free users queue 3 tasks vs 5 for paid, commercial use on paid plans only. Teaser. — [Scrimba](https://scrimba.com/articles/free-ai-video-generators-2026/)
- READ: Luma: no free plan; paid tiers from $30/month. — [Scrimba](https://scrimba.com/articles/free-ai-video-generators-2026/)
- READ: Pika: 0 credits/month on free, credit packs only; commercial use starts at Starter ($10/month). Teaser. — [Scrimba](https://scrimba.com/articles/free-ai-video-generators-2026/); contradicted by [InsiderLLM](https://insiderllm.com/guides/local-ai-video-generation/) (updated 18 Aug 2026), which says Pika's free tier has 150 credits/month. The Scrimba page is more recent.
- READ: Higgsfield: "limited free access", amount not stated, described as good only for previewing camera controls (PC Tech Magazine, 10 Sep 2026; the article looks promotional, it ranks an obscure tool first with no method). — [PC Tech Magazine](https://pctechmag.com/2026/09/top-10-free-ai-video-generators-best-tools-you-can-try-without-paying/)

**Wan run locally**

- READ: the newest Wan anyone can download is Wan 2.2 (released 28 Jul 2025, Apache 2.0). Wan 2.5-Preview (Sep 2025), 2.6 (Dec 2025), 2.7 (Apr 2026) and Wan 3.0 (public beta early Aug 2026, Alibaba Cloud Model Studio only) have no published weights. Two GitHub issues asking whether 2.5+ would be opened have gone unanswered since Sep 2025; Alibaba never announced a policy change. Claims on SEO sites that Wan 2.7 is Apache 2.0 are wrong. Article dated 6 Sep 2026; single source. — [howaiworks.ai](https://howaiworks.ai/blog/alibaba-wan-open-weights-stopped-at-2-2)
- READ: Wan 2.2 still draws millions of downloads a month, largely via community GGUF builds. — [howaiworks.ai](https://howaiworks.ai/blog/alibaba-wan-open-weights-stopped-at-2-2)
- READ: hardware for Wan 2.2 (guide published 5 Feb 2026, updated 18 Aug 2026): TI2V-5B does 720p/24fps 5-second clips in about 8 GB VRAM, 2–4 minutes per clip on an RTX 4090; the 14B model needs 50 GB+ at full precision, about 11–16 GB as GGUF Q5, or 6–8 GB as Q3/Q4 at 480p with visible quality loss; 4–8 minutes per clip on an RTX 4090, about 9 minutes on an RTX 3090, 10–15 minutes at 480p on an RTX 3060 12 GB. 12 GB is called the comfortable baseline. — [InsiderLLM](https://insiderllm.com/guides/local-ai-video-generation/); conflict: [howaiworks.ai](https://howaiworks.ai/blog/alibaba-wan-open-weights-stopped-at-2-2) says TI2V-5B is officially documented for a GPU with at least 24 GB VRAM (official figure vs community-optimised figure).
- READ: hardware prices cited (Aug 2026): used RTX 3060 12 GB about $220–280; used RTX 3090 build about $1,000–1,300; RTX 4090 about $2,200–2,750; RTX 5090 about $3,900–4,400. — [InsiderLLM](https://insiderllm.com/guides/local-ai-video-generation/)
- READ: the same guide's verdict: local is "good enough" for social clips, B-roll and concept work, and Wan 2.2 14B is competitive with mid-tier cloud offerings; cloud still leads on photorealism, faces in complex scenes and professional commercial work. Open Wan 2.2 has no native audio. — [InsiderLLM](https://insiderllm.com/guides/local-ai-video-generation/)
- READ: Curious Refuge's pick for the best open-source/local model in Nov 2026 is LTX 2.5, not Wan; it scores lowest of their ten (6.43) and trades quality for cost. Wan 3.0 (cloud) scores 7.98. — [Curious Refuge](https://curiousrefuge.com/blog/ai-video-generator-2027)

### Inferences
- Suggested evidence-backed tags (my inference from the findings above, to be confirmed by the pricing researcher):
  - "Worthwhile free plan": Google Flow only (daily renewing credits). Runway's free plan is a one-off taste. Kling, Hailuo, Pika, Higgsfield are teasers; Luma has none. Vidu, Dreamina and Wan hosted: no evidence either way.
  - "Economical": Seedance 2.0 (via Dreamina) has the only explicit creator endorsement for value. Wan 2.2 run locally is free after hardware, for people with a 12 GB+ Nvidia GPU and patience for ComfyUI.
  - "Recommended (quality)": Seedance 2.5 and Kling 4.0 on creator evidence; no community-vote evidence.
- The tool card for Wan should separate two products: "Wan 2.2 (open, local, free)" and "Wan 3.0 (closed, cloud, paid)". Calling Wan 3.0 open source would be wrong per the source read.
- Trustpilot reviews show that the real cost per usable clip is higher than list price on every tool, because users regenerate several times; no source read quantifies the retry rate.

### Gaps
- No source read gives a community "cost per usable clip" comparison across the ten tools.
- Free plan details for Vidu, Dreamina and the hosted Wan site: not found. Official pricing pages were not fetched (another researcher's scope, Assumption).
- The Kling and Pika free-tier facts conflict between sources; needs a check against the official pages.
- No direct r/StableDiffusion evidence on how the local community rates Wan 2.2 vs LTX in late 2026.

## 5. Aggregators: Higgsfield versus subscribing to the model makers directly; marketing controversy

### Takeaway
Higgsfield is the most controversial of the ten. Between December 2025 and February 2026 it drew press coverage for "unlimited" plans that were throttled, alleged mass account bans, a no-refund-after-use policy, a deleted post boasting of ending creative jobs, and the suspension of its X account; the CEO publicly admitted mistakes. A July 2026 first-person report and October 2026 reviews show the billing friction continuing. Its appeal, which G2 reviewers confirm, is many top models under one subscription.

### Cited Findings
- READ: The Register (6 Feb 2026): Higgsfield posted on X that its motion design tool had ended more than 20 creative jobs, then removed the post after backlash. A critic (Ian Hudson, UK video maker) said the "unlimited" access to models such as Nano Banana Pro and Kling was in practice a limited trial, that prompts are queued for arbitrary delays, that the terms ban heavy users, and that refunds are refused once the service has been used; he also called the service largely a wrapper for Google and Kling APIs and alleged review astroturfing and marketing with unlicensed IP. A Discord post cited 4–10 hour waits for a five-minute video. Higgsfield did not respond to the outlet. One named critic plus unnamed others; older than 6 months. — [The Register](https://www.theregister.com/2026/02/06/higgsfield_ai_job_loss/)
- READ: No Film School (11 Feb 2026): Higgsfield's X account was suspended ("X suspends accounts which violate the X Rules"); the reason is unknown. Users complained that unlimited plans were not unlimited and that Higgsfield cost more than subscribing to each model separately; the company was accused of using stock-site clips in marketing. The article relays user posts without verifying them. Older than 6 months. — [No Film School](https://nofilmschool.com/ai-video)
- READ: digitalbusiness.kz (11 Feb 2026): a competitor's co-founder (Vadoo; an interested party) published a GitHub analysis claiming unlimited plans were sold at steep discounts and then limited, that thousands of accounts were banned in December 2025 (notably Russian-speaking users) without the ability to download their work, with "suspicious payment activity" cited, and that Higgsfield resells Kling 2.5 Turbo and Hailuo 2.3 at several times the direct price. CEO Alex Mashrabov posted on 10 Feb 2026 that the company made mistakes, that its communication "has not always made this clear enough", and that it takes responsibility; he did not address the specific allegations. Older than 6 months. — [digitalbusiness.kz](https://digitalbusiness.kz/2026-02-11/higgsfield-unlimited-mnenie-storon-o-situatsii-s-beskonechnimi-podpiskami-v-dekabre/)
- READ: Dealroom summary (15 Feb 2026) of a Forbes report (11 Feb 2026): racist and antisemitic videos on the platform, plus customer complaints about unexpected charges, difficulty cancelling and delayed refunds; Higgsfield said it was strengthening moderation and clarifying billing policies. Second-hand summary; the Forbes article itself was not read. — [Dealroom](https://dealroom.co/news/125907-higgsfields-rapid-growth-draws-scrutiny-over-racist-ai-videos-and-billin/)
- READ: User Mag, Taylor Lorenz (30 Jul 2026): users told Forbes that "unlimited" plans slowed to a crawl after a few videos a day; the author spent about $1,000 in total, was offered a discounted plan billed annually at $840, then bought Ultra at $129/month; repeated upgrade pop-ups before the tool could be used; the cancel button read "Downgrade to Basic" and required clicking through five retention offers; a reviewer said the refund window is effectively unusable because generating any test output forfeits it; a co-founder is quoted "We fully admit that we push the envelope". Company claims $200M run-rate revenue and 20M+ users. — [User Mag](https://www.usermag.co/p/my-journey-into-the-slop-factory)
- READ: recent evidence that the pattern persists: Trustpilot reviews 16 Oct – 1 Nov 2026 on refunds denied and credits draining; a G2 review of 7 Oct 2026 on a promotional price that rose within an hour (single user). — [Trustpilot](https://www.trustpilot.com/review/higgsfield.ai), [G2](https://www.g2.com/products/higgsfield/reviews)
- READ: the positive side: G2 reviewers (4.5/5, 101 reviews) praise having many leading video and image models in one place, which reduces the need for multiple subscriptions, plus responsive support. One reviewer (20 Oct 2026) had an Unlimited access problem that support fixed by restoring the full period. — [G2 Higgsfield](https://www.g2.com/products/higgsfield/reviews)
- INFERRED (titles and URLs only, not opened): Higgsfield hosts its own pages on a "geo." subdomain with titles such as "Why Is Higgsfield Called Shady? Understanding the Billing and Wrapper Controversies" and "Why is Higgsfield AI Bad? The Truth Behind the Controversy and Top Alternatives". These look like reputation-management content aimed at search engines and AI answer engines; not an independent source. — [geo.higgsfield.ai](https://geo.higgsfield.ai/task/blog/why-is-higgsfield-called-shady-billing-wrapper-controversies)

### Inferences
- A "recommended" tag on Higgsfield is hard to support on trust grounds even though its review scores are the highest of the ten. A defensible card: "many models in one subscription; check what 'unlimited' covers, refunds are refused after first use, annual plans are pushed hard".
- The "cheaper to subscribe directly" claim is a user and competitor claim from early 2026; I found no neutral price comparison. It should be worded as a reported complaint.
- The bans allegation rests on a competitor's analysis relayed by one outlet. Treat as an unverified allegation.

### Gaps
- No evidence gathered on other multi-model hubs (Freepik/Magnific, Krea, OpenArt, Pollo) versus direct subscriptions.
- No source after Feb 2026 on whether Higgsfield's X account was restored (Assumption: unknown).
- r/HiggsfieldAI not readable; no direct user threads.
- The Forbes article (11 Feb 2026) was not read directly.

## 6. Community trust red flags per tool (privacy, data use, China-based services, bans, refunds)

### Takeaway
The red flags that are actually evidenced are commercial, not privacy-related: refused refunds and credit loss on nearly every tool, the Higgsfield controversy, Runway's removal of unmetered generation, and Alibaba quietly ending open releases of Wan. I found no sourced community evidence on privacy or data-use concerns for the China-based services, so nothing on that topic should be stated as a community finding.

### Cited Findings
- **Google Flow** — READ: failed generations deducting credits on the Ultra plan with no refund and no staff reply in the thread (Jul–Sep 2026). — [Google AI Developers Forum](https://discuss.ai.google.dev/t/google-flow-veo-stuck-in-queued-state-oops-something-went-wrong-failed-generations-deducting-credits-google-ai-ultra/173335)
- **Runway** — READ: Trustpilot 1.1/5, 93% one-star, unclaimed profile; refund denials and cancellation friction (Oct 2026). Unmetered Explore Mode removed in mid-2026 at the same $95 price. — [Trustpilot](https://www.trustpilot.com/review/runwayml.com), [usagepricing.com](https://www.usagepricing.com/blueprint/activity/runway-2026-06-24-max-plan-replaces-unlimited)
- **Kling AI** — READ: Trustpilot 1.2/5, 91% one-star; purchased credits unusable without a membership, refunds refused, credits expiring (Oct 2026). — [Trustpilot](https://ca.trustpilot.com/review/klingai.com)
- **Hailuo** — READ: charges continuing after cancellation and duplicate charges, reported by several reviewers across Jan–Jul 2026. — [Trustpilot](https://www.trustpilot.com/review/hailuoai.video)
- **Luma** — READ: charged after cancelling a trial (single user, review dated 25 Jul 2026 with an internally inconsistent date); refund refused after goodwill credits (single user, 14 Oct 2026). — [Trustpilot](https://www.trustpilot.com/review/lumalabs.ai)
- **Pika** — READ: cancelled subscription reappearing the next day (single user, 6 Jun 2026); no company replies to negative reviews. — [Trustpilot](https://www.trustpilot.com/review/pika.art)
- **Higgsfield** — READ: see section 5 (throttled unlimited, alleged mass bans, no refund after use, X account suspension, deleted job-loss post, astroturfing allegation, hard-to-cancel flow). The author of the User Mag piece was also blocked from creating a character from her own footage and could not verify her identity to lift the block (30 Jul 2026). — [User Mag](https://www.usermag.co/p/my-journey-into-the-slop-factory)
- **Vidu** — READ: credits deducted for failed generations and not restored (latest 28 Oct 2026); thin sample of 18 reviews. — [Trustpilot](https://www.trustpilot.com/review/www.vidu.com)
- **Dreamina / Seedance** — READ: charges continuing after cancellation; a user locked out of files about 15 days into an Ultimate Plan (single user, 27 Oct 2026); filters blocking cartoon faces (single user). — [Trustpilot](https://www.trustpilot.com/review/dreamina.capcut.com)
- **Dreamina / Seedance** — INFERRED (headlines only, not opened; Feb 2026, older than 6 months): Seedance 2.0 faced a Hollywood copyright backlash, ByteDance said it would add safeguards, and a viral deepfake demo prompted ByteDance to limit the tool. This is the likely origin of the strict face and IP filters users complain about. — [Euronews](https://www.euronews.com/2026/02/17/bytedance-says-it-will-add-safeguards-to-ai-video-tool-seedance-20-following-hollywood-bac), [Sixth Tone](https://www.sixthtone.com/news/1018205/viral-deepfake-demo-prompts-bytedance-to-limit-new-ai-video-tool), [The Decoder](https://the-decoder.com/hollywood-copyright-complaints-force-bytedance-to-shelve-global-launch-of-ai-video-generator-seedance-2-0/)
- **Wan** — READ: Alibaba stopped publishing weights after Wan 2.2 without announcing it, and community questions about it on GitHub have gone unanswered since Sep 2025; SEO sites wrongly claim later versions are open. — [howaiworks.ai](https://howaiworks.ai/blog/alibaba-wan-open-weights-stopped-at-2-2)

### Inferences
- Content-filter complaints (false "violation" flags on harmless prompts) show up for Kling, Hailuo, Vidu, Dreamina and Runway, each from one or two reviewers. Taken together it is a category pattern; per tool it is anecdotal.
- A card-level warning that holds for every paid tool here: buy monthly before annual, expect no refund after the first generation, and check that cancellation actually took effect.

### Gaps
- Privacy, training-data use and China-jurisdiction concerns for Kling, Hailuo, Vidu, Dreamina and Wan: **no source found or read**. Any statement on this would be an Assumption.
- Terms of service (content ownership, training on user uploads) were not read for any tool.
- Account-ban reports for tools other than Higgsfield: none found.
- The Seedance copyright and face-restriction items rest on headlines only and date from Feb 2026; the current filter policy in Nov 2026 is unverified.
