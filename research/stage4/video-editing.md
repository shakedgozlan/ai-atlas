# Category 7: video-editing (video editing, talking avatars, subtitles and dubbing)

Check date: 2026-11-18. category_id 7. JSON files: `data/staging/video-editing/*.json` (8 tools).

Work history: a first researcher collected pricing, privacy and language pages and wrote the 8 JSON files, then was interrupted by a machine restart. A second pass (this file) checked the JSON structure, removed claims that came only from search-result titles, filled pricing, terms, roundup, popularity and version-date gaps, and wrote these notes. The shared fetch quota ran out twice during the second pass (see "Fetch quota" at the end).

## Final tool list

| Tool | slug | Why it is in | Pricing verification | Roundups (of 6) | a16z traffic | New and notable |
|---|---|---|---|---|---|---|
| CapCut | capcut | The leading free editor for web, Windows, macOS, iOS and Android. #17 on the a16z web list and #2 on the mobile list. | partly verified (official resource article, prices vary by region) | 3 | yes | not verified (no version date) |
| Descript | descript | The leading edit-by-transcript editor for talking video and podcasts. In 5 of 6 roundups. | partly verified (the monthly/yearly toggle mapping is inferred from purchase links) | 5 | no | yes |
| HeyGen | heygen | The leading avatar and video-translation platform. It lists Hebrew for dubbing and lip sync. | partly verified (Pro and Business yearly prices missing) | 2 | no (spending list only) | not verified (the Avatar V post shows only "Last Updated October 20th, 2026") |
| Synthesia | synthesia | The leading avatar platform for training and explainer videos, with a monthly free plan and Hebrew text-to-speech. | partly verified (first-month promotion running) | 2 | no | yes |
| Captions | captions | A mobile-first editor for talking-head social video (company now Mirage). | partly verified (help article, not a pricing page; no yearly prices) | 1 | no | no (1 review) |
| OpusClip | opusclip | The leading long-to-short clipping tool. OpusClip 4.0 shipped on Nov 2, 2026. | partly verified (page text cut off; Pro monthly credits missing) | 4 | no | yes |
| VEED | veed | An established browser editor with Hebrew auto-subtitles, translation and avatars. #46 on the a16z web list. | not verified (plan table rendered by script) | 3 | yes | yes (OpenEdit, August 03, 2026) |
| D-ID | d-id | An established talking-photo and avatar platform with a Studio and an API. V4 launched March 16, 2026. | partly verified (only "starting at $5.90 a month" from an official press release) | 1 | no | no (1 review) |

Count per pricing verification level: verified from an official source 0, partly verified 7 (CapCut, Descript, HeyGen, Synthesia, Captions, OpusClip, D-ID), not verified 1 (VEED).

Roundup tag (`value` true needs 5 of 6): Descript only.
Popular tag: CapCut and VEED.
Renewing free allowance (`free_renewing` true): HeyGen (3 videos a month), Synthesia (monthly credits and minutes), OpusClip (60 credits a month). False: Captions (one-time credits). Null: CapCut (the free tier has no credits), Descript (renewal of the free media hour not verified), VEED, D-ID.

### Notes on inclusion

- D-ID and Captions fail the "new and notable" rule: each appears in only one of the six roundups. They stay as established tools: D-ID for talking photos with an API, Captions for phone-first creator editing. These two are the weakest picks. If the editor wants to swap one, Hedra (also in Techsy's avatar roundup) or Submagic are the alternates, but neither was researched.
- CapCut and HeyGen enter as leading, established tools. Their "new and notable" value is null because no version date was verified, not because they fail the rule.
- VEED: the changelog's newest entry, "VEED AI" (an agentic editor), is dated November 19, 2026. That is one day after the check date, so it was not used as the latest version. It is recorded as a status note in veed.json.
- Descript's "new and notable" value rests on a judgment call: the latest dated item is a monthly update post (Oct 2026 updates, published Nov 3, 2026), which adds Generative Layouts, Underlord Skills, media search and API/MCP access. It is counted as a significant update.

### Hebrew summary (filters.hebrew)

- HeyGen: "Hebrew (Israel)" is on the official list of video translation languages, so "נתמכת לפי המקור".
- VEED: the official Hebrew subtitles tool page says "Add auto-subtitles in the Hebrew language to your video content for free". SRT/VTT download and translation are premium features. Right-to-left display is not mentioned. So "נתמכת לפי המקור".
- Synthesia: the official Hebrew voice page says "Turn any text into natural-sounding Hebrew speech in seconds". It does not say explicitly that avatars lip-sync in Hebrew. Custom voice cloning in Hebrew needs Enterprise. So "נתמכת לפי המקור", for text-to-speech.
- Descript: the official help page says all transcription languages use the Latin alphabet, and other scripts are not supported yet.
- OpusClip: the official help page says it does not support right-to-left languages, "including Hebrew".
- Captions: the official pages read do not mention Hebrew, so "המקור לא מזכיר עברית".
- CapCut, D-ID: no language list was read (CapCut's subtitle help article lists no languages), so "לא אומת".
- **Enum issue for the merger:** for Descript and OpusClip, `filters.hebrew.value` is "לא נתמכת לפי המקור" with label "עברית לא נתמכת" and `supported: false`. This is not one of the three values the brief allows. None of the three fits: the source does mention Hebrew, and it says Hebrew is not supported. `supported: false` is allowed by the schema. The editor needs to decide whether to add a fourth value or map it to another one.

### Student offers

- Descript: the pricing page offers "special rates" to students, educators and nonprofits through a form. The size of the discount is not published.
- VEED: "bespoke education plans for faculty wide use" through sales. No individual student discount is mentioned.
- HeyGen, Synthesia, OpusClip, Captions, D-ID: the pages read do not mention a student discount. No official student page was found. CapCut: no student page found; the pricing help article does not mention one.

### Logo pages (for the logo stage)

No press kit or brand page was checked. The official sites where each logo appears: https://www.capcut.com , https://www.descript.com , https://www.heygen.com , https://www.synthesia.io , https://captions.ai (the company's documents now sit on https://mirage.app ), https://www.opus.pro , https://www.veed.io , https://www.d-id.com .

## Rejected candidates

- Adobe Premiere and DaVinci Resolve (alternates): professional editors with AI features, not AI-first tools. They appear in MASV's roundup (Premiere also in Dupple's). They were not researched because the fetch budget did not allow it, and the target count of 8 was already met.
- Submagic, Rask AI, Kapwing (alternates): none appears as a pick in any of the six counted roundups (Submagic appears only in a related-guide teaser on Dupple). Not researched.
- Hedra (alternate): ranked #7 in Techsy's avatar roundup (1 of 6). Not researched. A possible swap for D-ID or Captions.
- InVideo (alternate): a pick in Zapier's roundup only (1 of 6), and it is in the a16z 7th edition's alphabetical "Top 50" link list, with no rank in the text. Not researched.
- Topaz Video (alternate): allocated as an alternate here, but Topaz is in the images category's list (category 3). Left out to avoid a duplicate.
- No candidate was found closed or merged. Captions' company renamed itself Mirage, but the app is still called Captions (recorded in captions.json `rename_note`).

## Review roundups counted (window 2025-11-18 to 2026-11-18)

All six were opened on 2026-11-18 and each tool's presence was checked in the page text. Only ranked picks or review sections count, not passing mentions or teasers.

| # | Roundup | URL | Date as written | Independence assessment |
|---|---|---|---|---|
| 1 | Zapier, "The 16 best AI video generators in 2026" (Miguel Rebelo) | https://zapier.com/blog/best-ai-video-tools/ | byline October 9, 2026; footer "last updated February 2026", "last reviewed October 2026" | Independent: Zapier does not sell these tools. It discloses commissions on some links and states it is "never paid for placement". Some links go through a third-party redirect (selectsoftwarereviews.com) that the page does not explain. |
| 2 | Buffer, "The 11 Best AI Video Editors in 2026" (Tamilore Oladipo) | https://buffer.com/library/ai-video-tools/ | Jul 22, 2026 | Independent: Buffer sells social scheduling, not video editors. No affiliate disclosure seen. The page has nine review sections, not eleven. |
| 3 | MASV blog, "The 10 Best AI Video Editors in 2026" (Jonny Elwyn) | https://masv.io/blog/best-ai-video-editor (redirect from massive.io/gear-guides/the-best-ai-video-editor/) | originally published July 10, 2025; last updated March 25, 2026 | Independent: MASV sells file transfer. No affiliate disclosure. It focuses on professional editors, so it covers only Descript from this list. |
| 4 | Dupple, "The 8 Best AI Video Editors in 2026" (Louis Corneloup) | https://dupple.com/learn/best-ai-video-editors | published June 16, 2026; updated November 5, 2026 | Counted, with a caveat: Dupple is a media/newsletter company that does not sell these tools, but the page says "Some offers on this page may be paid placements or contain affiliate links". This is the weakest of the six. |
| 5 | Techsy, "Best AI avatar generators 2026" (Mert Batur) | https://techsy.io/en/blog/best-ai-avatar-generators-2026 | June 18, 2026; last updated November 6, 2026 | Independent: Techsy sells software development services and states "We sell none of these tools", "There are zero affiliate links in this post". These are the author's own claims. |
| 6 | Leland, "The 5 Best AI Tools & Agents for Video Editing" | https://www.joinleland.com/library/a/ai-video-editing-software | Posted June 17, 2026 | Independent: Leland sells career coaching, not these tools. No author is named and no affiliate disclosure is shown. |

Coverage per tool:

| Tool | Zapier | Buffer | MASV | Dupple | Techsy | Leland | Count |
|---|---|---|---|---|---|---|---|
| CapCut | - | yes | - | yes | - | yes | 3 |
| Descript | yes | yes | yes | yes | - | yes | 5 |
| HeyGen | yes ("LiveAvatar by HeyGen") | - | - | - | yes | - | 2 |
| Synthesia | yes | - | - | - | yes | - | 2 |
| Captions | - | - | - | - | yes (as "Captions (Mirage)") | - | 1 |
| OpusClip | yes | yes | - | yes | - | yes | 4 |
| VEED | yes | yes ("Veed AI") | - | yes | honorable mention, not counted | - | 3 |
| D-ID | - | - | - | - | yes | - | 1 |

Cautions: six roundups is a small sample. Four of the six are about editors and only one (Techsy) is about avatars, so the avatar tools (HeyGen, Synthesia, D-ID) are structurally under-counted. Zapier's pick for HeyGen is "LiveAvatar by HeyGen", a HeyGen product, counted for HeyGen.

Opened but not counted:
- TechRadar, "Best AI video editors of 2026" (Nigel Powell), https://www.techradar.com/pro/best-ai-video-editors-of-year : the byline says published 20 June 2024 and no update date is shown, so it is outside the window. (It covers Synthesia and HeyGen.)
- Vendor roundups seen in search results and not opened, because they are vendor content: firecut.ai, vizard.ai, videodubber.ai, timeskip.io, beatsyncpro.ai, autoeditai.net, invideo.io, riverside.com, async.com, heygen.com, synthesia.io, veed.io, creatify.ai, pixverse.ai, higgsfield.ai.

## Popularity (a16z traffic ranking)

- a16z, "The Top 100 Gen AI Consumer Apps", 6th edition (posted March 9, 2026). Ranks read from The Neuron's copy, dated March 13, 2026: web list by unique monthly visits per SimilarWeb, January 2026; mobile list by MAU per Sensor Tower, January 2026. CapCut is #17 on web and #2 on mobile. VEED is #46 on web. Descript, HeyGen, Synthesia, Captions/Mirage, OpusClip, D-ID, Hedra, InVideo, Kapwing and Submagic are not in The Neuron's top-50 lists. — https://www.theneuron.ai/explainer-articles/a16z-just-ranked-the-100-most-popular-ai-apps-heres-the-full-list-and-what-it-tells-us-/
- a16z 7th edition, posted October 5, 2026 (Olivia Moore), with Similarweb web data for August 2026, Sensor Tower mobile data, and a YipitData spending list. The ranks are only in chart images. In the text: CapCut is in the web and mobile link lists, with no rank. HeyGen is named only on the spending list ("Midjourney, HeyGen, Kling, and Topaz Labs also make the spending list"). Descript, InVideo and Synthesia appear only in an alphabetical "Top 50 Consumer AI Apps" link list, and the page text does not say whether that list is based on traffic or spending. Captions, Mirage, OpusClip, VEED, D-ID, Hedra, Kapwing and Submagic are not on the page. — https://a16z.com/100-gen-ai-apps-7/
- Decision: `popular` is true for CapCut and VEED (Similarweb-based 6th edition web list). It is false for HeyGen, because a spending list is not a traffic ranking. It is false for Descript and Synthesia, because the 7th edition "Top 50" list has no stated traffic basis in the text. Caution: the 6th edition data is from January 2026, ten months before the check date.

## Browser gaps (official pages that could not be read, to open in a real browser)

Pages that loaded but whose content is blocked or rendered by script, or that returned errors:
1. https://www.veed.io/pricing : plan names, prices, quotas and free-plan limits are not in the page text (read twice). Only the FAQ text loaded.
2. https://www.d-id.com/pricing/studio/ : prices, currency and minute quotas are not in the page text (read twice). Only "Trial" and "Lite" are named.
3. https://www.capcut.com/pricing : one try failed on the fetch quota and one returned a server error. Prices came from an official resource article instead.
4. https://www.d-id.com/pricing/api/ : linked from the Studio pricing page. Not read.
5. D-ID terms of use, End User License and privacy policy: these are linked from the footer of https://www.d-id.com/?p=2698 (an ethics pledge page), but the exact URLs were not found. Commercial rights and the training policy are unverified.
6. HeyGen API pricing: linked from https://www.heygen.com/pricing ("Explore API pricing"). Not read.
7. Synthesia API pricing: linked from https://www.synthesia.io/pricing ("Explore API pricing"). Not read.

Total: 7 browser gaps. Three pages missed earlier because the quota ran out (HeyGen Avatar V, D-ID V4 release, VEED changelog) were read after the second wait and are no longer gaps.

## What stays open

- Pricing: VEED has no verified prices. D-ID has only a starting price from a press release. CapCut's prices come from an official article that says they vary by region. HeyGen Pro and Business yearly prices, OpusClip Pro monthly credits, and Captions yearly prices are not published in the text read.
- Rights and privacy: D-ID terms and privacy were not read. Captions' US privacy policy and app terms were not read. OpusClip's privacy policy was not read. Synthesia's customer terms were not read. CapCut's privacy policy names model training as a processing purpose, but it does not say whether user videos are included.
- Descript conflict: the help page says production models do not use user data, while the terms (Feb 25, 2025) allow training unless the user opts out. Both are recorded in descript.json.
- Version dates: HeyGen (Avatar V publication date), CapCut, Captions.
- Hebrew: CapCut and D-ID language lists were not read.
- Platforms: Descript's desktop apps are not verified (`platforms.items` is empty).

## Fetch quota

The shared quota (100 fetches an hour across all agents) ran out after the first fetch of the second pass, and again after about 20 fetches. Following the brief's addendum, the writing was finished each time, then the researcher waited 15 minutes and resumed. Two waits were used, and fetches went through after both.

## Appendix: raw facts log (all pages opened 2026-11-18)

From the first researcher:
- HeyGen pricing https://www.heygen.com/pricing : Free $0 (3 videos/month, 1 min max, watermark); Creator $29/mo, $24/mo yearly (FAQ), 600 credits/mo, 30 min, 1080p; Pro $49/mo, 1,000 credits (tiers to 100,000 at $4,300), 4K; Business $149/mo, 1,500 credits, 60 min, +$20/seat; Enterprise contact. "2 months free" yearly. Monthly credits roll over one month.
- HeyGen trust https://www.heygen.com/trust-and-safety : non-enterprise data "may be used to train"; opt-out per privacy policy; enterprise not used; you retain ownership of avatars.
- HeyGen languages https://help.heygen.com/en/articles/11391941-video-translation-languages-we-support : "Hebrew (Israel)" listed, 85 entries, dated August 20, 2026.
- Synthesia pricing https://www.synthesia.io/pricing : Basic $0 (500 credits, 10 min/mo, 9 avatars, watermark); Starter $9 first month then $19/mo, $14/mo yearly ($168); Pro $49 first month then $89/mo, $59/mo yearly ($708); 140+ languages; Business/Enterprise no price.
- Synthesia governance https://www.synthesia.io/ai-governance : no customer data used to pre-train; customer retains ownership of videos.
- Synthesia languages FAQ https://help.synthesia.io/en/articles/8369851-languages-faqs : no Hebrew mention; 120+ languages.
- Synthesia 3.0 blog https://synthesia.io/post/synthesia-3-0-the-next-era-of-video : October 1, 2025.
- Descript pricing https://www.descript.com/pricing : Free $0 (60 min, 100 one-time credits, 720p, watermark); Hobbyist $24/$16; Creator $35/$24; Business $65/$50 per person/month; education "special rates" via form.
- Descript privacy help https://help.descript.com/account-and-app-settings/data-privacy.md : production models use no user data; R&D only opted-in.
- Descript languages https://help.descript.com/script-editing/supported-transcription-languages.md : Latin alphabet only; no Hebrew.
- Descript blog https://www.descript.com/blog/article/descript-updates-oct-2026 : "Updated November 3, 2026"; Underlord, MCP, API.
- OpusClip pricing https://www.opus.pro/pricing : Free 60 credits/mo watermark 1080p; Starter $15 monthly only 150 credits; Pro $29 monthly or $14.5/mo ($174/yr) 3600 credits/12 months, limited API; Business custom. Text cut at 100,000 characters.
- OpusClip RTL https://help.opus.pro/docs/article/does-opusclip-support-languages-right-left.md : no RTL incl. Hebrew.
- OpusClip terms https://www.opus.pro/agent-opus/terms-of-service : Opusclip Inc. Delaware; paid users licensed commercial; free personal non-commercial.
- OpusClip 4.0 blog https://www.opus.pro/blog/opusclip-4-0 : November 2, 2026.
- Captions subscriptions https://captions.ai/help/docs/subscriptions.md : Free 60-200 lifetime credits; Lite $4.99 Android; Basic $9.99 200 cr; Max $24.99 500; Frontier $69.99 1400.
- Mirage EEA privacy https://mirage.app/legal/eea : effective September 4, 2025; user content used to train AI models (legitimate interest).
- Mirage Captions web terms https://mirage.app/legal/captions-web-user-terms : input/output "controlled by Customer".
- VEED pricing https://www.veed.io/pricing : no plan table in text; subtitles fair use 50h/mo on paid; per seat; education bespoke.
- VEED AI terms https://www.veed.io/terms-of-use/ai-tools : own AI images; any legal purpose; no training statement.
- D-ID studio pricing https://www.d-id.com/pricing/studio/ : no prices in text; watermark Trial and Lite; minutes don't roll over.
- CapCut help https://www.capcut.com/help/monthly-and-yearly-plans : Monthly/Yearly, 100GB cloud, no prices, Mar 25, 2026. capcut.com/pricing: server error.
- CapCut US terms https://sf19.tiktokcdn-us.com/obj/draft-ttp-tx/terms-policy/capcut_terms_of_service_en-US.html : last updated April 15, 2026; TikTok USDS Joint Venture LLC; broad licence to user content; commercial use of materials under the Materials License Agreement.

Added in the second pass:
- CapCut resource article https://www.capcut.com/resource/capcut-standard-vs-pro (Nov 12, 2026): Pro "$19.99 per month for individual users", "$179.99 per year"; Team "Starts at around $24.99 per month"; "Prices can vary by region, platform (mobile, desktop, or web), taxes, and promotional discounts"; Standard is the free version; free 1 GB cloud storage discontinued "as of August 2024"; Pro "approximately 1024 GB" cloud storage (conflicts with the help article's 100GB); auto captions and motion tracking are Pro-only. No watermark mention.
- CapCut help https://www.capcut.com/help/how-much-does-capcut-pro-cost (Sep 23, 2026): no fixed Pro price; "pricing for CapCut Pro can vary depending on your region, device, and available promotions"; only a Dreamina promotion (2026.09.23 to 2026.10.09) is priced.
- D-ID Studio news https://news.studio.d-id.com/publications/a-studio-plan-for-every-budget (December 13, 2022, stale): Lite "$5.99 a month"; Advanced "$299 per month" or "$249" annual, 65 minutes, commercial rights, API. Not used as a current price.
- D-ID Studio pricing, second try: still no prices; monthly and annual switching mentioned; "Start Free Trial".
- D-ID ethics pledge https://www.d-id.com/?p=2698 : not the terms. The footer links to the End User License, the D-ID Products Terms of Use and the Privacy Policy.
- Descript terms https://www.descript.com/terms (last updated February 25, 2025): "Descript, Inc.", San Francisco, California law; user owns Input and Output "to the extent protectable"; perpetual licence to Descript; 8.4(e) may use Inputs and Outputs "to train, improve, and develop its models and technologies (unless you have opted out of such use)"; generative tool use "may be limited by" plan; voice cloning needs a consenting speaker.
- HeyGen terms https://www.heygen.com/de-de/terms (Last Updated: October 16, 2026): "HeyGen Technology, Inc.", California law, Los Angeles; paid plans: user owns input and output, no restriction on commercial use; Free plan: limited revocable licence, "personal, non-commercial, and internal evaluation purposes"; licence covers using content "to train or otherwise improve or modify our artificial intelligence and machine learning models".
- VEED privacy https://veed.io/privacy (last updated "November, 2026"): "Veed Limited", London address, UK ICO; content uploaded by Free users used for "training and developing any relevant artificial intelligence models"; not content from mobile apps; Free users who object must delete the account or upgrade.
- HeyGen Avatar V post https://www.heygen.com/blog/announcing-avatar-v : "Last UpdatedOctober 20th, 2026", no publication date; author Holly Xiao; Avatar V builds a consistent likeness "from a short 15-second recording".
- D-ID V4 press release (PR Newswire, "NEW YORK, March 16, 2026"): V4 Expressive Visual Agents, "available to users on all D-ID plans, starting at $5.90 a month"; mentions the acquired company simpleshow (Berlin). No legal name or HQ given.
- VEED changelog https://changelog.veed.io : November 19, 2026 VEED AI; August 03, 2026 OpenEdit; July 14, 2026 Lipsync 2.0; May 18, 2026 Subtitle API; May 07, 2026 VEED in Make.com.
- VEED Hebrew subtitles https://www.veed.io/tools/auto-subtitle-generator-online/hebrew-subtitles : "Add auto-subtitles in the Hebrew language to your video content for free"; SRT/VTT download "available in our premium subscriptions"; translation "Available in premium".
- Synthesia Hebrew voice https://www.synthesia.io/features/ai-voice-generator/hebrew : "Turn any text into natural-sounding Hebrew speech in seconds"; custom voice needs Enterprise; the page title reads "Free Spanish AI Voices & Accents" (an error on the page).
- CapCut subtitles help https://www.capcut.com/help/how-to-recognise-subtitles (Jan 30, 2026): available on web, desktop (Windows/macOS) and mobile (iOS/Android); no language list.
- CapCut US privacy https://capcut.com/clause/privacy-policy (Last Updated: April 15, 2026): TikTok USDS Joint Venture LLC; purpose "train, test, and improve technology, such as machine learning models and algorithms"; face/body data deleted after an effect is applied; no training opt-out described.
- Roundups and a16z: see the sections above.
