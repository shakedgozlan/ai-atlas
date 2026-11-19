# Stage 4 addendum: seven close-call tools (check date 2026-11-18)

The site owner decided that the close calls from the first research pass should be added. This pass covers Udio (audio, 8), Activepieces (agents-automation, 12), Lovart (graphic-design, 4), tl;dv (meetings-knowledge, 13), Sloyd (3d, 9), Hedra (video-editing, 7) and Reve (images, 3). Six JSON files were written. Reve was not written (see below).

Method notes:
- Facts and URLs already in the category notes files were reused without re-fetching. Those sources carry `checked: "2026-11-18"`. Pages opened in this pass were opened on 2026-11-19, the day after the check date, and carry `checked: "2026-11-19"`. They are treated as describing the state on the check date. Nothing on them was dated 2026-11-19.
- About 33 page fetches were used in this pass. The fetch quota did not run out.
- Review roundups were not re-opened. Counts come from what each category's notes file recorded about the tool. Every count is n out of that category's N.
- `filters.new_notable.evidence` and `free_renewing.evidence` point to this file. `review_roundups.evidence` and `popular.evidence` point to the category file that holds the roundup table.

## Which of the seven tools were written, and why

### Takeaway
Six records were written: Udio, Activepieces, Lovart, tl;dv, Sloyd and Hedra. Reve was left out because its own site does not show that it is live and a dated news report says image generation ended on Sept. 27, 2026. Pricing verification: Sloyd and Hedra are "אומת ממקור רשמי". Udio, Activepieces and tl;dv are "אומת חלקית". Lovart is "לא אומת".

### Cited Findings
- **Udio** (`audio/udio.json`): it is in 5/6 audio roundups (Rework, Dubspot, Dupple, Jotform, DIY AI), so `review_roundups.value` is true. It runs under transition terms. Udio blog, "Published on Nov 19, 2025": "Udio is still governed by our transition ToS that was put into place on 12 November". The labels did not buy Udio ("No, they did not."). — [Udio blog](https://www.udio.com/blog/udio-warner) (from audio.md)
- Udio has nothing on its blog newer than Nov 19, 2025. — [Udio blog index](https://www.udio.com/blog) (from audio.md)
- Udio downloads: "Note that downloading of audio, video, and stems has been disabled." The page shows "February 17, 2026". The UMG partnership date is "October 29, 2025". All subscribers got 1,000 non-expiring credits. Standard went from 1,200 to 2,400 a month and Pro from 4,800 to 6,000. — [Udio help: UMG changes](https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership)
- Udio credits (updated October 29, 2025): Free gets "10 daily credits" plus "an additional monthly limit of 100 credits", and the limits reset each month. Standard gets up to 2,400 a month and Pro 6,000. "credits do not roll over". A-la-carte credits "never expire". Trials are capped at 3 songs a day. No prices are given. — [Udio help: credits](https://help.udio.com/en/articles/10739134-credits-and-credit-limits)
- Udio ownership (March 26, 2025, marked stale): "You own the output." Free users must attribute. Paid subscribers at the time of creation need not. Commercial use is not addressed directly. — [Udio help: usage](https://help.udio.com/en/articles/10739216-answers-to-common-usage-questions)
- **Activepieces** (`agents-automation/activepieces.json`): pricing comes from agents-automation.md: Free with 1,000 credits ("reset daily" vs "a month", a contradiction on the page), up to 5 users, MCP and API; Plus $20 flat a month with 10,000 credits; Team $200 a month with 50,000; "770+ integrations"; "Open source at the core". — [Activepieces pricing](https://activepieces.com/pricing/) (from agents-automation.md)
- Activepieces terms: "Activepieces Inc.", San Francisco, Delaware law, "Last updated November 29, 2023" (marked stale). The customer retains rights in Customer Content. Use is limited to "its and its Affiliates' own internal use". AI training is not addressed. — [Activepieces terms](https://activepieces.com/terms)
- Activepieces privacy: "Last updated January 19, 2026". It does not say whether user data trains AI models, except that Google Workspace data is not used to train generalized models. Data is transmitted "to the United States". A promotional banner on the page mentions "our cloud in Frankfurt or on servers you run yourself". — [Activepieces privacy](https://activepieces.com/privacy)
- Activepieces changelog: the newest entry, dated "September 2026" (no day), covers agents created from a plain-language description. Earlier entries: August, June and April 2026. Hebrew is not mentioned. — [Activepieces changelog](https://www.activepieces.com/docs/about/changelog.md)
- **Lovart** (`graphic-design/lovart.json`): the pricing page names Free, Basic, Pro, Ultimate and Team and has a monthly/annual toggle. It gives no prices. Monthly credits do not roll over, annual credits are distributed monthly, and top-up credits last 366 days. "Unlimited Relax Generation" on some plans runs for 31 or 180 days and is a one-time benefit per account. Each account gets 2 desktop web sessions and 1 mobile web session. Pro is described as for "commercial projects". — [Lovart pricing](https://www.lovart.ai/pricing)
- Lovart, from graphic-design.md: operator "Resonate International INC." (Delaware), terms updated "July 9, 2026"; privacy policy July 23, 2025, which does not address training; global launch out of beta "July 23, 2025" (company PR); latest changelog entry May 6, 2026. — [terms](https://lovart.ai/statement/terms-of-use); [privacy](https://lovart.ai/statement/67819415bf39427eac98fdea77510a9d); [Newsfile PR](https://www.newsfilecorp.com/release/259781); [zh changelog](https://www.lovart.ai/zh/changelog)
- **tl;dv** (`meetings-knowledge/tldv.json`): free plan "with unlimited recordings and transcripts". Paid plans are Pro and Business, monthly or annual. — [tl;dv help: pricing](https://intercom.help/tldv/en/articles/6082483-what-is-tl-dv-s-pricing). Free limits: "Your first 10 meetings will have automatic AI notes", after that "only the first 10 minutes of each meeting". Recordings are stored 3 months and archived after 3 days. "These limits are for the lifetime of the account, they do not renew monthly." The byline date is November 24, 2025. — [tl;dv help: free plan](https://intercom.help/tldv/en/articles/8919450-what-are-the-limits-of-the-free-plan)
- tl;dv Hebrew: "30+ languages including Hebrew", Hebrew transcripts and summaries, and "we'll never, ever use them to train AI". — [tl;dv Hebrew page](https://tldv.io/summarize-meetings-in-hebrew/). The help page lists "Hebrew" among "over 30 different languages". Choosing a language per meeting "is not yet supported for Zoom and Teams with our desktop app". — [tl;dv help: transcript language](https://intercom.help/tldv/en/articles/6231678-how-to-change-transcript-language)
- tl;dv training: "No customer data is used to train the AI", and "We partner with Anthropic". — [tl;dv help: training](https://intercom.help/tldv/en/articles/9970056-are-the-meetings-conversations-had-used-to-train-tl-dv-transcription-and-summary-models). Security overview: "Customer recordings and meeting data are not used to train AI models", "EU-based data hosting available", SOC 2 and GDPR. — [tl;dv security](https://intercom.help/tldv/en/articles/15416969-security-overview)
- **Sloyd** (`3d/sloyd.json`): Guest is free with 1 text- or image-to-3D generation a day, exports of community models only, and a personal-use licence. Plus is $15 a month, or $12.50 a month billed yearly ($150). Pro is $50, or $41.67 a month billed yearly ($500). They include 50 and 350 AI credits a month. Plus and Pro include commercial use. Only Pro allows marketplace reselling. Top-ups cost $12 per 100 credits and carry over. The API uses separate prepaid credits. The toggle says "save 20%", but the actual discount is about 17%. — [Sloyd pricing](https://www.sloyd.ai/pricing)
- Sloyd terms, "Last updated: 16 February 2026": "registered in the US as Sloyd Inc.", US law. "Personal, non-commercial and commercial use are permitted". Commercial 3D printing needs a custom licence. Resale is Pro only. AI training on user data is not addressed. — [Sloyd terms](https://sloyd.ai/terms-of-use)
- Sloyd llms.txt: "Sloyd AS" (conflicts with the terms). It lists exports GLB, OBJ, STL, PLY, USDZ, 3MF; an MCP server for Claude Code, Codex, Cursor and VS Code; and guides for Unity, Unreal, Godot and Roblox Studio. — [Sloyd llms.txt](https://sloyd.ai/llms.txt)
- Sloyd 2.0 is dated March 25, 2025, before the window. — [Sloyd blog](https://sloyd.ai/blog/introducing-sloyd-2-0)
- **Hedra** (`video-editing/hedra.json`): Basic $20 a month (2,000 credits), Pro $50 (7,200), Ultra "From $100" (18,000, up to 57,600), Teams $75 (14,400), Enterprise custom. All plans are billed monthly and every plan includes commercial use. Credits reset each cycle. After cancellation users keep only "limited watermarked generations". No free plan is listed. — [Hedra Play pricing](https://www.hedra.com/play/pricing). hedra.com/pricing covers only Model Factory and GPU compute. — [Hedra pricing](https://www.hedra.com/pricing)
- Hedra terms, "September 4, 2026": "Hedra Inc.", New York venue. Hedra does not claim ownership of Inputs or Outputs and takes a broad perpetual licence. The app licence covers "personal or internal business purposes". — [Hedra terms](https://hedra.com/terms). Privacy, effective "September 4, 2026": aggregated or de-identified data, including from user content, may be used to "train our AI models"; no training opt-out is described. The company is Hedra, Inc., San Francisco. — [Hedra privacy](https://www.hedra.com/privacy)
- Hedra Character 3: "released in March 2025", max duration 10 minutes, "full multi-language support" with no language list, API rates 2.5¢/s (540p), 5¢/s (720p), 6.25¢/s (1080p). — [Character 3 page](https://www.hedra.com/video-models/hedra-character-3). Omnia, a "world model" for partners to post-train, has no date in the body; the metadata says 2026-02-05. — [Omnia blog](https://www.hedra.com/blog/hedra-omnia-frontier-ai-video-model)

### Inferences
- Roundup counts reused from the category notes: Udio 5/6 (tag true); Activepieces 1/5; Lovart 0/5; tl;dv 2/6 (Zapier meeting, Rework meeting); Sloyd 2/4 (All3DP, Unite.ai); Hedra 1/6 (Techsy, #7). Only Udio gets the roundup tag.
- Popular: false for all six. The category files show that none of them is named in the a16z 6th or 7th edition traffic lists the earlier researchers read. For Lovart, graphic-design.md only says that none of its seven tools appears beyond Canva. Lovart was not checked by name, so `false` here means "no evidence", not a verified absence.
- New and notable: Activepieces is false (A met by September 2026, B fails with 1). Lovart is false (A met by the July 23, 2025 launch, B fails with 0 independent reviews). Hedra is false (B fails with 1). Udio, tl;dv and Sloyd are null, because no version inside the window was verified (Udio and tl;dv have 5 and 2 reviews; Sloyd's only dated version, 2.0, is from March 25, 2025).
- Pricing verification choices: Udio and tl;dv are "אומת חלקית" because official help pages give the plan names and the free quotas, but no prices. Lovart is "לא אומת" because no number was readable, which matches how VEED was handled. Activepieces is "אומת חלקית" because the page contradicts itself on how the free credits renew. Its billing period for Plus is not stated, and `starting_price.billing` is set to "חודשי" as the price is per month. Sloyd and Hedra are "אומת ממקור רשמי".
- Hebrew: only tl;dv is "נתמכת לפי המקור". The other five are "המקור לא מזכיר עברית". No tool needed the fourth value, "לא נתמכת לפי המקור".
- Udio's status is "פעיל" with a status note, and `date_as_written` is "12 November" exactly as the blog writes it (the year 2025 is implied by the post date).

### Gaps
- Udio: prices, the terms text (transition ToS), privacy and training, API, legal company name.
- Activepieces: annual billing, Enterprise, training policy, and current terms (the 2023 terms may be superseded).
- Lovart: every price and credit amount, the commercial-use clause in the terms, API.
- tl;dv: Pro and Business prices, currency, per-seat basis, legal company name, API, latest version date, terms of service. The tl;dv blog's product category had no product announcements.
- Sloyd: API prices, privacy policy, a dated release inside the window.
- Hedra: whether there is any free trial allowance at sign-up, the price of credit packs, and a mobile app.

## Lovart: the missing independent review

### Takeaway
No independent review of Lovart was found. That is why `new_notable.value` is false, `independent_reviews` is 0 and `review_roundups.count` is 0 of 5, even though Lovart launched inside the window.

### Cited Findings
- graphic-design.md: none of the 5 counted roundups covers Lovart. The Tom's Guide piece is "Sponsor Content Created With Lovart". TechCrunch's URL is under /sponsor/. The other reviews are on lovart.ai itself or on competitor sites (pollo.ai, framia). — see [graphic-design notes](graphic-design.md)

### Inferences
- Lovart enters only by the site owner's decision. Under the brief's rule it is neither "new and notable" (B fails) nor clearly "leading and established".

### Gaps
- No new roundup search was made in this pass. The category's roundup set was reused as instructed.

## Reve: is the product live? (not written)

### Takeaway
No JSON was written for Reve. Its own site does not establish that image generation is still live. A dated report attributes to Reve an official announcement that image generation ended on Sept. 27, 2026.

### Cited Findings
- reve.com redirects (302) to app.reve.com. — [reve.com](https://reve.com/)
- app.reve.com is now a short page titled "Reve — See your Ideas" with sample images and links to Model, Training and Blog. It shows no notice of closure, but it also offers no sign-up and no creation entry point in its text. — [app.reve.com](https://app.reve.com/); [llms.txt](https://app.reve.com/llms.txt)
- The Reve blog's newest post is dated August 21, 2026. After "A New Chapter for Reve" (July 27, 2026) come five posts, dated July 29 to August 21, 2026. There is no post from September or later, and no shutdown post. — [Reve blog](https://blog.reve.com/)
- The help centre's "Creating images on Reve" section still lists how-to articles with no dates. There is no closure notice. — [help.reve.com](https://help.reve.com/); [section](https://help.reve.com/hc/en-us/sections/46732795228692-Creating-images-on-Reve)
- Digital Today (published Sept. 18, 2026, 08:46 KST) attributes the following to Reve's "official announcement on Sept. 18": image generation "will no longer be available from 12 p.m. Pacific time on Sept. 27". New sign-ups and paid subscriptions were suspended on Sept. 17. Users can log in until Oct. 31 to download images. September fees will be refunded by mid-October. The article does not reproduce the announcement. — [Digital Today](https://www.digitaltoday.co.kr/en/view/105109/startup-reve-to-end-image-generation-service-after-openai-investment-sept-27)
- Search titles (not opened) agree: Krea, "Reve to Sunset in 2026"; Linearity, "Reve AI Is Shutting Down"; Magic Hour, "Reve 2.1, API shutdown & OpenAI deal". — [Krea](https://www.krea.ai/blog/reve-sunset-2026-alternative-ai-generators); [Linearity](https://www.linearity.io/blog/reve-ai-alternative/); [Magic Hour](https://magichour.ai/blog/reve-image-review)

### Inferences
- The official home page changed from an app to a page with only a gallery and links. That fits the reported end of generation, and nothing official shows it is still live. Per the brief, Reve is therefore not written. The official announcement itself was not found.

### Gaps
- Reve's own Sept. 18 announcement (probably an email or in-app notice) was not found on any official page. A logged-in browser check of app.reve.com would settle it.

## Logo pages (official pages where each logo appears; no press kit was checked)
- Udio: https://www.udio.com
- Activepieces: https://www.activepieces.com
- Lovart: https://www.lovart.ai
- tl;dv: https://tldv.io
- Sloyd: https://www.sloyd.ai
- Hedra: https://www.hedra.com
- Reve (not written): https://app.reve.com

## Browser gaps (official pages not read; open in a real browser)
1. https://www.udio.com/pricing : metadata only, two tries. Plan prices, billing, currency.
2. https://www.udio.com/terms-of-service : metadata only. Transition ToS, rights, training, legal name.
3. https://tldv.io/pricing/ : metadata only. Plan prices.
4. https://tldv.io/app/pricing/ : metadata only (second try). Plan prices.
5. https://www.lovart.ai/pricing : script-rendered, no numbers (second try overall, after the graphic-design researcher's).
6. https://www.sloyd.ai/api/pricing : not attempted; API prices.
7. https://app.reve.com/ : the logged-in app state, to confirm whether generation has ended (Reve not written).

Total: 7 browser gaps.
