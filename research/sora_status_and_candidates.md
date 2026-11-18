# Sora status, Dreamina / Seedance, Wan, and other candidates (check date 2026-11-18)

Summary (5 lines):
1. Tools covered: OpenAI Sora (status only), Dreamina / Seedance (ByteDance group), Wan (Alibaba), plus a short screen of Kaiber, Grok Imagine, Moonvalley Marey, LTX Studio, Midjourney video.
2. Sora: confirmed discontinued from OpenAI's own help centre and API deprecations page (web/app 26 April 2026; API 24 September 2026). No OpenAI page found describing a successor video feature in ChatGPT.
3. Pricing: Dreamina is "partially verified" (official US monthly prices read; yearly/quarterly prices and non-US prices not read). Wan consumer plans are "not verified" (wan.video is a JavaScript shell that did not render); Wan API price per second is verified from Alibaba Cloud docs.
4. Could not verify: the terms/privacy that apply to users in Israel for Dreamina (only the US documents loaded), any Wan consumer terms/privacy/commercial-rights text, Hebrew support for either tool, student offers for either tool, official logo files for Dreamina.
5. Process limit: the session's web-fetch budget ran out before the part C reviews, the Wan3.0 and Seedance 2.5 launch articles and the Dreamina help page could be opened. Everything marked "title only" below was seen as a search-result title/URL and NOT read. Treat those as leads, not findings.

---

## Key question 1 — Sora: what do OpenAI's own pages say? Is there a successor inside ChatGPT?

### Takeaway
OpenAI's help centre and API deprecations page confirm the secondary source exactly: Sora web and app were discontinued on April 26, 2026 and the API (Videos API, sora-2, sora-2-pro) had a shutdown date of Sep 24, 2026 with "No one-to-one replacement". No official OpenAI page describing a native successor video generator in ChatGPT was found; a third-party article says there is none, only third-party plugins.

### Cited Findings
- Help centre article title: "What to know about the Sora discontinuation". Exact wording: "The Sora web and app experiences were discontinued on April 26, 2026." — [OpenAI Help Center (read through the help-lb.openai.com host; the help.openai.com URL returned a client error to the fetch tool)](https://help-lb.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation); canonical URL: [help.openai.com](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)
- Same article, exact wording on the API: "The Sora API will be discontinued on September 24, 2026." Note the future tense is still in the article although the page showed "Updated: 10 days ago" on the check date (so updated about 2026-11-08) and the date has passed. — [OpenAI Help Center](https://help-lb.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)
- Data export: "You can export content you created in Sora by going to sora.chatgpt.com/sunset and clicking on Export."; "If a final export window is offered, we'll notify you by email before it begins."; after discontinuation and any final export window, "we will permanently delete any data associated with your use of Sora." — [OpenAI Help Center](https://help-lb.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)
- Credits/refunds: "Note that any purchased ChatGPT/Sora credits can still be used for Codex, if you so choose."; refund questions are routed to the general ChatGPT subscription refund article. — [OpenAI Help Center](https://help-lb.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)
- The help article does not mention any video generation in ChatGPT or any successor product. — [OpenAI Help Center](https://help-lb.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)
- API deprecations page (redirects from platform.openai.com/docs/deprecations): six rows, all with Notice date "Mar 24, 2026", Shutdown date "Sep 24, 2026", Recommended replacement "No one-to-one replacement": "Videos API", "sora-2", "sora-2-pro", "sora-2-2025-10-06", "sora-2-2025-12-08", "sora-2-pro-2025-10-06". On the check date these rows sit in the page's past-deprecations table. — [OpenAI API deprecations](https://developers.openai.com/api/docs/deprecations)
- THIRD-PARTY (Scrimba blog, published 28 Sept 2026, last verified 23 Oct 2026, page modified 16 Nov 2026; Scrimba sells one of the plugins it describes, so it is an interested party): ChatGPT has no video model of its own after Sora; video is only available through third-party plugins inside ChatGPT (it names Runway, Pika, HeyGen, VEED, Synthesia, invideo, Visla, Descript, Prezi and Scrimba's own). It cites OpenAI's "Plugins in ChatGPT" help article and plugin listing pages on openai.com. — [Scrimba](https://scrimba.com/articles/can-chatgpt-make-videos-2026/)

### Inferences
- INFERENCE: For the atlas, Sora should be listed as discontinued (consumer product ended April 26, 2026; API shutdown date Sep 24, 2026), not as an active tool. The announcement/notice date for the API was Mar 24, 2026.
- INFERENCE: Because the deprecations page lists "No one-to-one replacement" and the help article names no successor, the safest wording is "OpenAI's pages name no replacement video product", not "ChatGPT cannot make video" (plugins from other vendors appear to exist, per a third party).

### Gaps
- No OpenAI blog post announcing the discontinuation was opened; the announcement date Mar 24, 2026 comes only from the "Notice date" column of the deprecations page.
- The OpenAI pages the Scrimba article cites ("Plugins in ChatGPT", https://help.openai.com/en/articles/20001256-plugins-in-chatgpt, and the plugin listings) were not opened, so the existence of third-party video plugins in ChatGPT is NOT verified from an official source.
- The last ~7,000 characters of the deprecations page were not read (page longer than the tool window); the Sora rows were all in the part that was read.

---

## Key question 2 — Dreamina / Seedance and Wan: brief fields

### Takeaway
Dreamina's official US pricing page (dated Oct 23, 2026) and US terms/privacy were read: four paid plans in USD, outputs owned by the user but the US terms contain a clause against commercial use, and the US privacy policy allows use of information to train models with no opt-out described. For Wan only the Alibaba Cloud API documentation could be read (USD 0.10 per second at 720P and USD 0.15 at 1080P for wan2.7-t2v in the international region); the consumer site wan.video did not render, so its plans, rights and privacy are not verified.

### Cited Findings

#### TOOL: Dreamina (Seedance video models)

1. **Official name / previous name**
   - Product is called "Dreamina" (also "Dreamina AI") and the video models are "Seedance 2.0" in Pro, Fast and Mini variants. — [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)
   - A "Dreamina Seedance 2.5" model page is linked from an official Dreamina page dated Oct 24, 2026; that page describes itself as "an informational guide", not a product spec, and gives no launch date. — [Dreamina Seedance 2.5 page](https://dreamina.capcut.com/seedance/seedance-2-5-commercial-use)
   - Previous name: not verified in this session.

2. **Role (one sentence)**
   - INFERENCE from the official pages: a web creation platform under the CapCut domain that generates video from text, images and references using the Seedance models, sold by monthly credits. — [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)

3. **Website and logo**
   - Website: https://dreamina.capcut.com (pricing and terms pages loaded from this host). — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)
   - Official logo file: NOT FOUND. No press kit or brand page was located.

4. **Strengths and limitations**
   - Strength (THIRD-PARTY, Curious Refuge, dated "Jun 9", year 2026 inferred from the page title/footer): multi-shot generation in one clip. Explanation: the reviewer lists multi-shot output as a headline capability of Seedance 2.0. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
   - Strength (THIRD-PARTY, same review): native audio and lip sync generated with the video. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
   - Strength (THIRD-PARTY, eWeek, February 16, 2026 — older than 6 months, OLD SOURCE): accepts up to 12 mixed input files (images for style, video for motion, audio for rhythm); the article gives the Seedance 2.0 release as February 12. — [eWeek](https://www.eweek.com/news/best-ai-video-generators-2026/)
   - Limitation (THIRD-PARTY, Curious Refuge): visible artifacts and warped details, with over-polished, plastic-looking background edges. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
   - Limitation (OFFICIAL, US terms): the US terms include a restriction on commercial use of the service (see field 9), which limits business use unless another official document permits it. — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)
   - Limitation (OFFICIAL, US privacy policy): information may be used to train models and no training opt-out is described (see field 8). — [Dreamina privacy policy](https://dreamina.capcut.com/clause/dreamina-privacy-policy)
   - Note (THIRD-PARTY, eWeek, OLD SOURCE): the model's realism drew Hollywood attention over fan films featuring famous actors. — [eWeek](https://www.eweek.com/news/best-ai-video-generators-2026/)

5. **Target audience**
   - The official pricing page refers to "professional workflows" and advertising use cases. — [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)

6. **Pricing** (US pricing in USD; the page says other markets have local prices that vary; page dated "Oct 23, 2026"; offer "Starts 2026.10.21.") — all from [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)
   - Basic: "USD 0.29 for the first month, then USD 15.00/month." 1,575 credits per month (the page equates this to 19 ten-second videos).
   - Standard: "USD 21.60 for the first month, then USD 36.00/month." 3,885 credits per month (48 ten-second videos).
   - Advanced: "USD 95.40 for the first month, then USD 159.00/month." 17,600 credits per month (220 ten-second videos).
   - Ultra: "USD 312.00 for the first month, then USD 520.00/month." 59,000 credits per month (737 ten-second videos).
   - Billing tabs shown: Monthly, Yearly ("40% OFF"), 1-month, Quarterly ("40% off"). Yearly and quarterly prices were NOT in the text that loaded.
   - Credit cost at 720p: Seedance 2.0 Pro 17 credits/second, Fast 8 credits/second, Mini 5 credits/second.
   - Per user or per account: not stated on the page.
   - The page labels as historical (not current): monthly Pro $11 (3,885 credits), Max $42 (8,645 credits), Standard $5 promotional (1,575 credits); annual Max $335, Pro $168, Standard $73; a 90%-off campaign ran 2026.09.23–2026.10.09.
   - CONFLICT: the US Terms of Service (last updated January 22, 2026) name only "Dreamina Basic, Dreamina Standard, and Dreamina Advanced" as paid tiers; "Ultra" appears on the Oct 2026 pricing page but not in those terms. — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)

7. **Free vs trial**
   - "Dreamina lets users try Seedance 2.0 with free daily credits." No amount is given; "Free-credit amounts, watermarks, model access, and plan terms may vary". — [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)
   - The first-month prices above are introductory discounts on paid plans, not a free trial. — [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)
   - Refund: "a full refund within 14 calendar days" of starting a subscription, only if the Premium Services were not used at all; subscriptions auto-renew. — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)

8. **Privacy and training on user data** (US policy only; "Last Updated: April 30, 2026" — older than 6 months, OLD SOURCE but it is the live policy)
   - The policy says information may be used to "train and improve our technology, such as our machine learning models and algorithms", and covers "scanning, analyzing, and reviewing User Content". — [Dreamina US privacy policy](https://dreamina.capcut.com/clause/dreamina-privacy-policy)
   - No AI-training opt-out is described; listed choices are profile edits, cookie settings and marketing unsubscribe. No per-plan difference is stated. — [Dreamina US privacy policy](https://dreamina.capcut.com/clause/dreamina-privacy-policy)
   - Sharing "with affiliates controlled by, or under common control with TikTok USDS"; storage location not stated; policy covers "the personal information of US users and other US individuals". — [Dreamina US privacy policy](https://dreamina.capcut.com/clause/dreamina-privacy-policy)

9. **Commercial rights and watermarks**
   - Ownership: "if you comply with these Terms, you own the Inputs you upload, and the Outputs generated in response". — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)
   - Licence to the company: "perpetual, irrevocable, worldwide, non-exclusive", sublicensable, "for the purpose of providing the Services". — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)
   - Commercial use: the US terms say the user agrees not to "access or use the Services or any content therein for any commercial or unauthorized purposes", while another section refers to use "for commercial purposes (if permitted)" without saying when it is permitted. This is an internal tension in the official text; no per-plan commercial licence was found. — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)
   - Watermark: all four paid plans list "Remove the Dreamina watermark in downloads"; free-use watermarks "may vary". — [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)
   - The Seedance 2.5 page only advises to "review output rights, quality standards, and approval requirements before using generated clips externally". — [Dreamina Seedance 2.5 page](https://dreamina.capcut.com/seedance/seedance-2-5-commercial-use)

10. **API, integrations, platforms**
   - The US terms do not mention an API. — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)
   - Web platform confirmed (dreamina.capcut.com). iOS, Android, desktop: not verified. — [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)

11. **Hebrew**
   - No source read in this session mentions Hebrew. The site publishes localised pages for at least th-th, pt-br, ms-my, de-de, ko-kr, nl-nl, it-it, fr-fr, id-id, ro-ro (seen as URL paths in search results); no he-il path was seen, which is absence of evidence only. — [Dreamina pricing page (locale variants in search results)](https://dreamina.capcut.com/de-de/seedance/seedance-2-0-pricing)

12. **Company and student offers**
   - For US users: "The Platform is operated by TikTok USDS Joint Venture LLC." with a contact address in Culver City, CA, USA; "BD TikTok USA LLC" provides the Premium Services in the United States. — [Dreamina US privacy policy](https://dreamina.capcut.com/clause/dreamina-privacy-policy); [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)
   - Operating entity for users outside the US (including Israel): not verified. The ByteDance link comes from the assignment and from third-party headlines, not from an official page read here.
   - Minimum age: "The Services are only intended for individuals 13 years old and older." — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)
   - Student/education discount: none found.

13. **Sources** (all checked 2026-11-18)
   - https://dreamina.capcut.com/seedance/seedance-2-0-pricing — page date Oct 23, 2026
   - https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en — last updated January 22, 2026 (OLD, >6 months, but live)
   - https://dreamina.capcut.com/clause/dreamina-privacy-policy — last updated April 30, 2026 (OLD, >6 months, but live)
   - https://dreamina.capcut.com/seedance/seedance-2-5-commercial-use — page date Oct 24, 2026
   - https://curiousrefuge.com/blog/best-ai-video-generators-2026 — third-party, "Jun 9" (2026 inferred)
   - https://www.eweek.com/news/best-ai-video-generators-2026/ — third-party, February 16, 2026 (OLD)

14. **Price verification status:** partially verified (US monthly prices and credits read from the official page; yearly/quarterly, non-US and Israel prices not read; plan list conflicts with the January 2026 terms).

15. **Changes**
   - Plan line-up changed: the pricing page labels Pro / Max / Standard prices as historical and now shows Basic / Standard / Advanced / Ultra; the current offer "Starts 2026.10.21." — [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)
   - A benefit is tied to "users subscribe before Dec 15, 2025". — [Dreamina pricing page](https://dreamina.capcut.com/seedance/seedance-2-0-pricing)
   - US operation is under "TikTok USDS Joint Venture LLC" per terms last updated January 22, 2026. — [Dreamina terms](https://dreamina.capcut.com/clause/dreamina-terms-of-service?lang=en)
   - Seedance 2.5: an official Dreamina page exists (Oct 24, 2026); launch date not verified.

#### TOOL: Wan (Alibaba)

1. **Official name / previous name**
   - Site metadata names the product "Wan AI" / "Wan". — [wan.video](https://wan.video/)
   - API model IDs: `wan2.7-t2v`, with dated snapshots `wan2.7-t2v-2026-06-12` and `wan2.7-t2v-2026-04-25`. — [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v)
   - Previous name: not verified.

2. **Role**
   - Site metadata describes an AI creative platform with text-to-image, image-to-image, text-to-video, image-to-video and image editing. — [wan.video](https://wan.video/)

3. **Website and logo**
   - Website: https://wan.video/ (the page is a JavaScript shell; only metadata loaded). — [wan.video](https://wan.video/)
   - Official site assets found in the page source (not a press kit): favicon https://g.alicdn.com/sail-web/wan-static-resources/0.0.30/images/favicon.ico and social share image https://img.alicdn.com/imgextra/i1/O1CN01WlNesT1EWvfm8mzKw_!!6000000000360-2-tps-600-315.png — [wan.video](https://wan.video/)
   - No press kit / brand page found; no SVG logo found.

4. **Strengths and limitations**
   - Strength (THIRD-PARTY, Curious Refuge, "Jun 9", 2026 inferred, about Wan 2.7): fine detail such as textured skin and atmospheric lighting. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
   - Strength (THIRD-PARTY, same): cinematic camera movement and native background audio. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
   - Strength (OFFICIAL): available as a pay-per-second API with a 1080P tier and a rate limit of 300 RPM per region. — [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v)
   - Limitation (THIRD-PARTY, Curious Refuge): physics errors and illogical motion. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
   - Limitation (OFFICIAL): the API model page lists fine-tuning, batch inference and context caching as unsupported. — [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v)
   - Third limitation: none sourced. (That the consumer site could not be read is a research gap, not a product drawback.)

5. **Target audience**
   - Not stated in any official text that loaded. INFERENCE: two audiences, creators on wan.video and developers through Alibaba Cloud Model Studio.

6. **Pricing**
   - API, official, original price per second in USD, "excluding promotions", page last updated Oct 11, 2026: Singapore (International) 720P 0.1, 1080P 0.15; China (Beijing) main model 720P 0.086012, 1080P 0.143353; Japan (Tokyo, Global) 720P 0.086012, 1080P 0.143353. — [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v)
   - Consumer plans on wan.video: NOT VERIFIED from an official source (page did not render).
   - THIRD-PARTY, not usable as a price source under the brief (CostBench, "verified Oct 31, 2026", cites no wan.video URL and labels its own confidence inconsistently): Free $0; Pro $6.50/month billed monthly or $5/month billed annually; Premium $26/month billed monthly or $20/month billed annually; Wan 2.2 costs 30 credits per video and Wan 2.5/2.6 cost 300 credits per video; credits included per plan not stated. — [CostBench](https://www.costbench.com/software/ai-video-generators/wan-video/)

7. **Free vs trial**
   - Official: not verified. API free quota: not shown on the model page. — [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v)
   - THIRD-PARTY: a free tier exists; limits not given. — [CostBench](https://www.costbench.com/software/ai-video-generators/wan-video/)

8. **Privacy and training**: not verified. No Wan or Alibaba Cloud privacy/terms page was read.

9. **Commercial rights and watermarks**: not verified. No official statement was read.

10. **API, integrations, platforms**
   - API: yes, through Alibaba Cloud Model Studio, regions China (Beijing), Singapore (International), Japan (Tokyo, Global). — [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v)
   - Sibling API models exist as documentation pages: wan2.7-i2v, wan2.7-r2v, wan2.7-videoedit (URLs seen in search results, pages not read). — [Alibaba Cloud docs, i2v](https://www.alibabacloud.com/help/en/model-studio/wan2-7-i2v)
   - Web: wan.video. iOS / Android / desktop apps: not verified (no app links in the page source that loaded). — [wan.video](https://wan.video/)
   - THIRD-PARTY (Curious Refuge): describes LTX as open source but does not state whether Wan 2.7 weights are open; open-weights status of current Wan versions is not verified. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)

11. **Hebrew**: no source read mentions Hebrew. Prompt languages are not stated on the API model page. — [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v)

12. **Company and student offers**
   - The wan.video page does not name the operating company; its assets are served from Alibaba domains (alicdn.com) and the API is documented on alibabacloud.com. — [wan.video](https://wan.video/); [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v)
   - Legal entity and country: not verified. Student offers: none found.

13. **Sources** (all checked 2026-11-18)
   - https://wan.video/ — no date; JS shell
   - https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v — last updated Oct 11, 2026
   - https://curiousrefuge.com/blog/best-ai-video-generators-2026 — third-party, "Jun 9" (2026 inferred)
   - https://www.costbench.com/software/ai-video-generators/wan-video/ — third-party, "verified Oct 31, 2026"

14. **Price verification status:** partially verified (API per-second price verified from the official docs; consumer subscription plans not verified).

15. **Changes**
   - LEAD, TITLE ONLY, NOT READ: several news headlines report that Alibaba launched "Wan3.0", described as a 30-second video model, around 24 August 2026. — [The Next Web (headline)](https://thenextweb.com/news/alibaba-wan3-video-model-after-share-sale); [eWeek (headline)](https://eweek.com/news/alibaba-wan3-ai-video-documents-apac-china/); [ProPakistani, URL dated 2026/08/24](https://propakistani.pk/2026/08/24/alibaba-launches-wan-3-0-ai-video-model-after-raising-10-billion/)
   - The official API page read here still documents wan2.7 (updated Oct 11, 2026) and showed no deprecation notice. — [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/wan2-7-t2v)

### Inferences
- INFERENCE: The documents that loaded for Dreamina are the US versions (the fetch came from a US address). A user in Israel is very likely under a different contracting entity and possibly different commercial-use and training wording, so fields 8, 9 and 12 should not be published as applying to Israel without reading the non-US terms.
- INFERENCE: The US commercial-use restriction may be a generic consumer clause carried over from the parent app's terms rather than a deliberate ban on using Seedance clips in ads, since the pricing page itself markets ad use cases. The official text does not resolve this, so the atlas should record "commercial rights unclear in the official US terms" rather than either "allowed" or "forbidden".
- INFERENCE: If the Wan3.0 headlines are right, the current flagship on the check date is probably Wan3.0, not Wan 2.7, and the Wan section's model details would be one generation behind. This needs an official page before it is stated.

### Gaps
- Dreamina: yearly and quarterly prices; local/Israeli prices; free daily credit amount; non-US terms and privacy; clear commercial licence per plan; API (whether Seedance is offered officially through a ByteDance cloud service — only reseller pages appeared in search); mobile/desktop apps; Hebrew; logo file; Seedance 2.5 launch date and whether it is included in each plan; student offers. The Dreamina help page and the CapCut page titled "Can You Use Seedance 2.0 Mini Videos Commercially?" (https://www.capcut.com/create/seedance-2-0-mini-commercial-use-rights) were found but not read because the fetch budget ran out.
- Wan: everything on the consumer side (plans, credits, free tier, terms, privacy, training, commercial rights, watermark, apps, interface languages, company entity). wan.video needs a real browser. Wan3.0 launch details, availability and price are unread leads.
- Hebrew for both tools: no evidence either way.

---

## Key question 3 — Which part C candidates were launched or majorly relaunched after 2025-05-18 and appear in at least two independent 2026 reviews?

### Takeaway
Only partly answered: the fetch budget ran out before the candidate reviews could be opened, so none of the five is fully confirmed against both conditions. On what was actually read, Midjourney video and LTX (model LTX 2.3 Pro) each have one confirmed independent 2026 review; Grok Imagine and Marey have several 2026 review titles that were not opened; Kaiber has only weak directory-style leads.

### Cited Findings
- Reviews actually read, and which candidates they cover:
  - Curious Refuge "Best AI Video Generators of 2026" ("Jun 9", 2026 inferred): covers Midjourney Video and LTX 2.3 Pro (as well as Seedance 2.0 and Wan 2.7). Does not cover Kaiber, Grok Imagine or Marey. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
  - eWeek "5 Video Generators..." (February 16, 2026): covers none of the five; it only points to a separate eWeek piece on "Grok Imagine 1.0 from xAI". — [eWeek](https://www.eweek.com/news/best-ai-video-generators-2026/)
  - The App Whisperer "15 tools compared" (21 July 2026): covers none of the five, and neither Dreamina/Seedance nor Wan. — [The App Whisperer](https://theappwhisperer.com/2026/07/best-ai-video-generator-apps-2026-15-tools-compared/)

- **Midjourney video**
  - Covered in one read 2026 review: stylised, aesthetic clips suited to existing Midjourney users; no native sound; unreliable physics in busy scenes. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
  - Second review, TITLE ONLY, NOT READ: "Midjourney Video Review (2026): Is It Worth It?" — [Flowjam](https://www.flowjam.com/blog/midjourney-video-review-2026)
  - Launch, TITLE ONLY: "Midjourney Launches V1 AI Video Model, Generating 5‑Second Clips from Images" (date not captured). — [Outlook Business](https://www.outlookbusiness.com/deeptech/artificial-intelligence/midjourney-launches-v1-ai-video-model-generating-5second-clips-from-images)

- **LTX Studio / LTX-2 (Lightricks)**
  - Covered in one read 2026 review as the model "LTX 2.3 Pro" (not the LTX Studio product): strong visual fidelity and lighting, described as open source; stiff movement with morphing and limb distortion. — [Curious Refuge](https://curiousrefuge.com/blog/best-ai-video-generators-2026)
  - Further reviews, TITLE ONLY, NOT READ: "LTX Studio ... review Updated May 2026" — [Dupple](https://dupple.com/reviews/ltx-studio); "LTX Studio Review 2026: Is This AI Video Platform Worth It?" — [StackSheriff](https://stacksheriff.com/ai-tools/ltx-studio-review/)
  - Relaunch lead, TITLE ONLY: "Lightricks Open-Sources AI Video Model LTX-2..." and "Open-source AI video from Lightricks offers 4K, sound and faster rendering". — [AI News](https://www.artificialintelligence-news.com/news/open-source-ai-video-from-lightricks-offers-4k-sound-and-faster-rendering/)

- **Grok Imagine video (xAI)**
  - Confirmed only that eWeek (Feb 2026) refers to "Grok Imagine 1.0 from xAI". — [eWeek](https://www.eweek.com/news/best-ai-video-generators-2026/)
  - Reviews, TITLE ONLY, NOT READ: "Grok Imagine 1.5 Review: Is xAI's #1 Video Generator Worth It?" — [AIReiter](https://aireiter.com/blog/grok-imagine-1-5-review); "Grok Imagine Review 2026: Speed, Quality and Real Limitations" — [DIY AI](https://diyai.io/ai-tools/image-generation/reviews/grok-imagine-review/); a "grok-imagine-video-1-5-review-2026" post — [Build Fast with AI](https://www.buildfastwithai.com/blogs/grok-imagine-video-1-5-review-2026)

- **Moonvalley Marey**
  - Reviews, TITLE ONLY, NOT READ: "Marey by Moonvalley | An Honest AI Video Generator Review" (date unknown) — [Curious Refuge](https://curiousrefuge.com/blog/marey-moonvalley-ai-video-generator-review); a listing titled "Video Creation · Reviewed August 28, 2026" — [ToolDirectory](https://tooldirectory.ai/tools/moonvalley); "Marey in Review, Method in Hand" — [Render and Reason (Substack)](https://renderandreason.substack.com/p/marey-in-review-method-in-hand)

- **Kaiber**
  - Leads, TITLE ONLY, NOT READ: "Kaiber AI Review 2026: Best AI Music Video Generator?" — [Smart Remote Gigs](https://smartremotegigs.com/?p=13660); "Kaiber Reviews 2026: Details, Pricing, & Features" — [Subscribed.fyi](https://subscribed.fyi/kaiber/reviews/). Trustpilot lists the product as "Kaiber Superstudio". — [Trustpilot](https://www.trustpilot.com/review/kaiber.ai?page=7)

### Inferences
(All five mini-profiles below combine the titles above with background knowledge from before this session; nothing here was verified on the check date. Dates marked "from memory" must be re-checked.)
- INFERENCE — Midjourney video: active; made by Midjourney, Inc. (US); a feature inside the Midjourney image subscription, not a dedicated video product; V1 video model launched June 2025 (from memory), which is inside the 18-month window. Most likely to meet both conditions: one review read plus one 2026 review title.
- INFERENCE — Grok Imagine: active; made by xAI (US); a feature of the broader Grok assistant / X apps, not a dedicated product; first released around August 2025 with a 1.0 release in early 2026 and a 1.5 version later in 2026 (versions from titles, dates from memory). Inside the window; review count looks sufficient by titles but zero were read.
- INFERENCE — LTX Studio / LTX-2: active; made by Lightricks (Israel — relevant to a Hebrew atlas, from memory); LTX Studio is a broader storyboard-to-video production platform, while LTX-2 / LTX 2.3 is the underlying open model; LTX Studio itself predates the window (2024, from memory) but the LTX-2 model release (late 2025, from memory) could count as a major relaunch. One review read (model only) plus two review titles.
- INFERENCE — Moonvalley Marey: appears active (a listing dated August 28, 2026); made by Moonvalley; a dedicated video generator aimed at filmmakers and marketed as trained on licensed footage (from memory); public release around July 2025 (from memory), inside the window. Three review titles, none read; the Curious Refuge one may be from 2025.
- INFERENCE — Kaiber: weakest candidate. The product is now presented as "Kaiber Superstudio", a broader creative canvas rather than a dedicated video generator, and Superstudio launched in 2024 (from memory), which is outside the window. The two 2026 "reviews" found look like directory/affiliate pages rather than independent hands-on reviews.

### Gaps
- None of the candidate reviews was opened, so publication dates, independence and content are unconfirmed for every title-only item. Launch and relaunch dates for all five were not verified from official sources.
- Active status on 2026-11-18 was not checked on any vendor's own site for the five candidates.
- Whether a model release inside an older product (LTX-2 inside LTX Studio) counts as a "major relaunch" is a judgement call for the catalogue editor.
