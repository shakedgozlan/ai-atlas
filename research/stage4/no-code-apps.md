# Category 11: no-code-apps (בניית אפליקציות בלי קוד), check date 2026-11-18

Scope note: the shared WebFetch quota ("100 per hour, shared by every agent") was already exhausted on the 2nd fetch of this session. Fetches were spread out over the session with waits, as the addendum allows. Fetches were spent in the addendum's order: pricing for every tool, then terms and training, then versions, roundups, Hebrew and students. Web searches were used only to find URLs, never as a source for a number. Every gap is recorded in each JSON's `unverified_notes` or as `null`.

## Which tools are in, and why

### Takeaway
Seven tools: Lovable, Bolt, Replit, Base44, Emergent, Bubble, Google AI Studio. Six of the seven starting candidates were kept. Firebase Studio was dropped and replaced by Google AI Studio from the alternates list, because Google closed Firebase Studio to new users and points browser-based prompt-to-app users to AI Studio.

### Cited Findings
- **Lovable** (`lovable`): the best-known prompt-to-web-app builder, named on the a16z 7th edition web list; up to 50% off Pro for verified students. — [Lovable pricing](https://lovable.dev/pricing); [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)
- **Bolt** (`bolt`): StackBlitz's prompt-to-app builder with hosting and databases included; renewing free tier of 1M tokens a month. — [Bolt pricing](https://bolt.new/pricing)
- **Replit** (`replit`): browser IDE with Agent 4, which builds web and mobile apps in one project and has a design-variants canvas; named on the a16z 7th edition web list. — [Replit blog: Agent 4](https://blog.replit.com/introducing-agent-4-built-for-creativity); [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)
- **Base44** (`base44`): all-in-one app builder (auth, database, hosting), acquired by Wix ("Jun 18, 2025"), debuted at #46 on the a16z 7th edition web list, and the only tool here with official documentation in Hebrew. — [Wix press release](https://www.wix.com/press-room/home/post/wix-further-expands-into-vibe-coding-with-acquisition-of-base44-a-hyper-growth-startup-that-simplif); [a16z 7th](https://a16z.com/100-gen-ai-apps-7/); [Base44 Hebrew changelog](https://docs.base44.com/he/changelog/product.md)
- **Emergent** (`emergent`): new prompt-to-app builder focused on web and native mobile apps shipped to the App Store and Google Play via Expo EAS; its FAQ says user data is not used for training. — [Emergent FAQ](https://help.emergent.sh/faqs); [Emergent pricing](https://emergent.sh/pricing)
- **Bubble** (`bubble`): the established visual no-code platform, now with Agent 2 (out of beta "October 06, 2026") for web and mobile and a Bubble MCP; student discount on all plans. — [Bubble blog: Agent 2](https://bubble.io/blog/agent-2); [Bubble pricing](https://bubble.io/pricing)
- **Google AI Studio** (`google-ai-studio`): Google's browser tool whose Build mode turns prompts into full-stack Gemini apps; free unless a paid API key is linked; up to 2 full-stack apps can be published on the Starter tier without billing. — [Gemini API billing docs](https://ai.google.dev/gemini-api/docs/billing)
- Firebase Studio: "As of June 22, 2026, new workspace creation and new user signup for Firebase Studio are disabled." "Firebase Studio is sunsetting on March 22, 2027." Google recommends Google AI Studio for browser-based prototyping ("the fastest path from prompt to full-stack production app") and Google Antigravity for code-first work. — [Firebase docs](https://firebase.google.com/docs/studio/migrating-project)

### Inferences
- Firebase Studio cannot be recommended to students who cannot sign up, so it is out; Google AI Studio is its official successor for this use and fits the category. Google Antigravity belongs to category 10.
- Alternates not taken: Glide and Softr (covered by eWeek, but more database/portal tools than prompt-to-app builders; Softr's and Glide's own roundups are vendor content); Rork, Anything and Hostinger Horizons (not covered by the counted roundups). Not researched further because of the fetch budget.

### Gaps
- Alternates were not checked on official pages.

## Pricing and free plans (official pages)

### Takeaway
No tool is fully verified: all seven are "אומת חלקית". The usual problems: only monthly or only yearly prices shown, "$" without a currency code, and free-plan quotas missing or conflicting. Cheapest regular paid entry: Base44 Starter $16/month billed yearly; Replit Core and Emergent Standard $20 monthly; Lovable Pro and Bolt Pro $25 monthly; Bubble Starter $39 monthly. Google AI Studio is free unless a paid API key is linked.

### Cited Findings
- **Lovable:** Free $0 (unlimited collaborators, 5 lovable.app domains, "Invite-only publishing", Cloud). Pro $25/month with 100 credits, rollovers, custom domains, badge removal. Business $50/month with 100 credits, SSO. Enterprise has a "Platform fee". Yearly toggle says "2 months free" but no yearly figures. Example costs: landing page with images 1.70 credits, auth 1.20. Free-plan credit amount not stated. Student offer: "Verify student status and get access to up to 50% off Lovable Pro." — [Lovable pricing](https://lovable.dev/pricing)
- **Bolt:** Free $0 "Free forever, no card required", 1M tokens/month with a 300K daily limit, public and private projects, website hosting, "Unlimited databases", "Bolt branding on websites", no custom domain, no rollover. Pro $25*/month billed monthly, from 10M tokens/month, no daily limit, rollover, custom domain, no branding. Teams $30*/month per member. Enterprise custom. "*Plus applicable taxes". Yearly toggle "Save up to 28%" without figures. No student mention. — [Bolt pricing](https://bolt.new/pricing)
- **Replit:** Core $20 monthly or $18/month billed annually, "$20 towards more powerful models", "Up to 30 hours of chat on Free Mode", "Up to 60 projects on Free Mode". Pro $100 monthly or $90/month annually; page also shows $215, $425, $825 and $2,000 per month without clear labels. Annual billing "Up to 10% off". — [Replit pricing](https://replit.com/pricing)
- **Replit docs:** Starter is "free, with a daily Replit AI allowance and limited monthly cloud credits, basic building capabilities, and one published app". Core "$204/year" (conflicts with $18/month on the pricing page). "Core credits reset at the start of each billing cycle and don't roll over"; Pro "unused credits carry over for two months before expiring"; top-ups expire after six months; "effort-based pricing based on request complexity". "Replit runs an education program for students and educators." — [Replit docs: pricing and plans](https://docs.replit.com/help/pricing-and-plans.md)
- **Base44:** prices shown are billed annually (FAQ: annual "saves 20%"): Free $0 (up to 5 apps, 25 message credits, 100 integration credits), Starter $16/mo (100 / 2,000, custom domain), Builder $40/mo (250 / 10,000, GitHub, model select), Pro $80/mo (500 / 20,000), Elite $160/mo (1,200 / 50,000). Free domain for one year on paid plans. Two-way GitHub sync exports full source code. Education and non-profit pricing "case by case"; students can sign up with a student email. — [Base44 pricing](https://base44.com/pricing)
- **Emergent:** Free $0 with 10 credits; Standard $20/month or $17/month annually ("Save $36"), 100 credits, web and mobile apps, private hosting, GitHub; Pro $200 or $167 annually ("Save $396"), 750 credits; Business and Enterprise custom. — [Emergent pricing](https://emergent.sh/pricing)
- **Emergent help:** Free tier gives "10 credits on your first day" (conflicts with "10 free monthly credits" on the pricing page); free users cannot "Publish apps to production" or use custom domains, but "may qualify for a free frontend-only published app"; publishing requires "a minimum of 50 credits to start"; subscription credits do not roll over; top-ups never expire. — [Emergent help: plans and credits](https://help.emergent.sh/plans-and-credits)
- **Bubble:** Free $0 (50K workload units, 500 AI credits), Starter $32/mo, Growth $119/mo, Team $349/mo, all "Billed annually"; Enterprise "Contact us". "A paid plan is necessary for deploying a live version of your app", and also for App Store / Google Play. "We offer discounts to students on all plans." — [Bubble pricing](https://bubble.io/pricing)
- **Bubble blog (October 06, 2026):** AI credit allowances Free 500, Starter 1,000, Growth 2,000, Team 4,000, Agency 1,000, refreshed "on the first of each month"; purchased credits last six months; the web-only Starter plan "rises to $39/month ($32/month billed annually) on October 20, 2026". — [Bubble blog: Agent 2](https://bubble.io/blog/agent-2)
- **Google AI Studio:** "New accounts begin on the Free Tier"; AI Studio usage is free unless a paid API key is linked; Starter tier "lets you publish up to 2 full-stack applications without setting up a Google Cloud project or billing account"; Tier 1 spend cap $250, Tier 2 $2,000, Tier 3 $20,000 to $100,000+; prepay minimum $5, maximum $5,000, unused credits expire after 12 months; page last updated 2026-09-28. — [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing)

### Inferences
- `starting_price.verified` is true for the six tools with a regular number read on the official page. Currency is recorded as USD although every page shows only "$".
- `free_renewing`: true for Bolt (monthly tokens), Replit (daily AI allowance), Base44 (monthly credits), Bubble (monthly AI credits). Null for Lovable (free credit amount not shown), Emergent (official conflict) and Google AI Studio (rate limits, not an allowance).

### Gaps
- Yearly prices for Lovable and Bolt; monthly prices for Base44 and for Bubble Growth/Team; Bubble mobile plan prices; Lovable free credits; Replit Starter allowance size.

## Ownership, code export and training on user data

### Takeaway
Every tool whose terms were read says the user owns their content and output, with third-party caveats. Training defaults differ sharply: Lovable (Free/Pro, from September 9, 2026) and Bolt (all accounts outside EEA/UK/CH) train by default with an opt-out; Google AI Studio's unpaid use is used to improve products with human review; Emergent says data is not used for training; Base44's June 2026 terms update added training rights without stating a default; Replit's terms are silent; Bubble was not read.

### Cited Findings
- Lovable: "customer data from Free and Pro plans may be used to train, develop, and improve Lovable's AI models", effective September 9, 2026; opt-out in Account settings → Preferences → AI model training; Business and Enterprise "excluded from AI model training by default"; opt-out not retroactive. — [Lovable docs: data opt-out](https://docs.lovable.dev/features/business/data-opt-out)
- Lovable terms (Last Updated "August 28, 2026"): "As between us, you own your Customer Data"; "you also own any AI Output generated for you", "subject to any third-party rights"; Lovable gets a "worldwide, perpetual, royalty-free license"; entity "Lovable Labs Incorporated"; Delaware law. — [Lovable terms](https://lovable.dev/terms)
- Bolt / StackBlitz terms ("Published: September 14, 2026 | Last updated: September 22, 2026"): "you retain all right, title, and interest in and to your User Content"; "Stackblitz assigns to you all of its right, title, and interest, if any, in and to the AI Output"; Section 3.5 licence to use content "to train, fine-tune, evaluate, benchmark, and improve artificial-intelligence models" and to license de-identified datasets to third parties; opt-out "at any time, free of charge"; EEA, UK and Switzerland accounts excluded; Forge content excluded from the opt-out while Bolt Forge is enabled. Entity "StackBlitz, Inc." — [StackBlitz terms](https://stackblitz.com/terms-of-service)
- Replit terms ("August 3, 2026"): "you retain any and all of your rights to any content you submit"; licence to Replit "as necessary"; no statement on AI training found in the terms. Entity "Replit, Inc." — [Replit terms](https://replit.com/site/terms)
- Base44 terms update, effective "June 21, 2026": licence changes "including by using and training AI models"; no default or opt-out stated; addendum with refund rights "for certain Israeli customers". — [Base44 docs: ToS update](https://docs.base44.com/Community-and-support/terms-of-service-update-june-2026.md)
- Emergent FAQ: "You retain full ownership of the applications and content you create with Emergent"; "your data isn't used to train AI models" (DPA 12.1); data stored in the United States and India; "There is no download/archive button; code leaves the platform via GitHub push or by copying from the VS Code view". — [Emergent FAQ](https://help.emergent.sh/faqs)
- Google AI Studio / Gemini API terms ("Effective March 23, 2026"): unpaid services: Google uses submitted content and responses "to provide, improve" its products, and "human reviewers may read, annotate, and process your API input and output"; "Do not submit sensitive, confidential, or personal information to the Unpaid Services"; paid services: "Google doesn't use your prompts ... or responses to improve our products"; "Google won't claim ownership over that content"; "You must be 18 years of age or older to use the APIs". — [Gemini API terms](https://aistudio.google.com/docs/terms?hl=en)

### Gaps
- Bubble terms and privacy (ownership and training) not read. Replit privacy policy not read. Base44 full terms not read. Emergent full terms and DPA not read.

## Review roundups, popularity and "new and notable"

### Takeaway
Six independent in-window roundups were counted (N = 6). Lovable, Bolt and Replit are in all 6; Base44 in 5; Bubble in 2; Emergent and Google AI Studio in none. "בולט בסקירות" (n >= 5) goes to Lovable, Bolt, Replit and Base44. "Popular" goes to Lovable, Replit, Base44 and Google AI Studio, which are named on the a16z 7th edition web list.

### Cited Findings
Roundups counted (each opened once, on the check day):

| # | Source | Date as written | Covers (counted) | Independence assessment |
|---|---|---|---|---|
| 1 | [eWeek, Aminu Abdullahi](https://www.eweek.com/news/best-ai-app-builders-cheat-sheet/) | May 28, 2026 | Lovable, Bolt, Replit, Base44, Bubble (also Glide, Softr) | Independent with a caveat: "We may make money when you click on links to our partners"; TechnologyAdvice compensation "may affect how and where products appear". |
| 2 | [Designlab, Team Designlab](https://designlab.com/blog/best-vibe-coding-tools) | May 12, 2026 | Lovable, Bolt, Replit | Independent. Designlab sells UX courses (incl. a Vibe Coding Camp), not these tools. No disclosure seen. |
| 3 | [Rework, Camellia](https://resources.rework.com/tools/ai-coding/best-vibe-coding-tools-2026) | Updated Nov 2, 2026 | Lovable, Bolt, Replit, Base44 (also Firebase Studio, Softr). Bubble, Glide only in a link; Google AI Studio only as Firebase migration target (not counted) | Independent. Rework sells CRM software. No affiliate disclosure seen. |
| 4 | [Kingy AI, Curtis Pyke](https://kingy.ai/news/best-ai-coding-tools-for-non-developers-in-2026-an-honest-guide/) | Published May 18, 2026; modified October 23, 2026 | Lovable, Replit, Base44 in depth; Bolt in the list of app builders. Bubble only "in passing", Emergent only in a buying note (not counted) | Independent, with a caveat: an "Ad · Kingy earns a commission" Artlist banner; no stated relationship with the tools. |
| 5 | [Geekflare, Sanket Sarwade](https://geekflare.com/guides/best-ai-app-builders/) | Published January 9, 2026; "Updated May 21, 2026" | Lovable, Bolt, Base44, Replit (also Anything, Glide). Bubble, Softr only one line (not counted) | Independent with a caveat: some "Visit Site" links look like affiliate tracking links (e.g. lovablelabs.pxf.io), with no disclosure in the article. |
| 6 | [AIMultiple, Sıla Ermut](https://aimultiple.com/ai-app-builders) | updated July 3, 2026 | Lovable, Base44, Bubble benchmarked; Bolt and Replit in other benchmarks and a feature comparison (also Softr, Glide) | Independent research firm; says it "does not mention any subscribers of AIMultiple's benchmarking services". No affiliate disclosure seen. |

Rejected roundups:
- [TheNextWeb "8 best AI app builders for 2026"](https://thenextweb.com/news/8-best-ai-app-builders-for-2026) (October 9, 2026): "Sponsored article by an outside author, not by the TNW newsroom" and "This listing is not an independent editorial ranking". Not counted.
- Vendor roundups seen in search but not opened or counted: Softr, WeWeb, Fillout, Zite, Taskade, Manus, Emergent, Lovable, Momen, Hostinger (all sell an app builder).

Counts (of 6): Lovable 6, Bolt 6, Replit 6, Base44 5, Bubble 2, Emergent 0, Google AI Studio 0.

Dedicated in-window reviews used only for Emergent's "new and notable" condition B (not counted in the 6):
- [Geekflare: "Is Emergent.sh Worth It?"](https://geekflare.com/guides/emergent-ai-review/), July 9, 2026. Same publisher caveat as above. It says Emergent "was founded in 2024 by Mukund and Madhav Jha" and was in Y Combinator's Summer 2024 batch.
- [Analytics Vidhya, Sarthak Dogra](https://www.analyticsvidhya.com/blog/2026/01/vibe-coding-game-with-emergent-in-minutes/), January 22, 2026, hands-on. No sponsorship disclosure, but it mentions a 75% discount promotion on Emergent's Standard plan, so it reads partly promotional.

Popularity:
- a16z "Top 100 Gen AI Consumer Apps", 7th edition, posted October 5, 2026 (modified October 6), web list "by monthly visits, using Similarweb". Named on the web list: Lovable, Replit, Base44 ("Base44 debuts at #46"), Google AI Studio (one of "Google's web entries"). "Lovable, Cursor, Base44, and Replit all make the web list." Not named: Bolt, Emergent, Bubble, Rork, Glide, Softr, Anything, Hostinger Horizons. Other ranks are in chart images that could not be read. — [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)

Latest versions and launch dates (dates as written):
- Lovable: "The Lovable mobile app is here" (April 27, 2026), iOS and Android; "Introducing subagents" (May 27); "Two years of Lovable" (November 18, 2026); latest changelog entries Nov 16, 2026. — [Lovable blog](https://lovable.dev/blog); [Lovable changelog](https://docs.lovable.dev/changelog)
- Replit: "Introducing Replit Agent 4", March 13, 2026. — [Replit changelog](https://docs.replit.com/updates/2026/03/13/changelog.md)
- Bubble: Agent 2 and Bubble MCP, "October 06, 2026". — [Bubble blog](https://bubble.io/blog/agent-2)
- Base44: changelog entries through November 8, 2026 (Superagent features); no named version. Acquired by Wix, press release "Jun 18, 2025". — [Base44 changelog](https://docs.base44.com/he/changelog/product.md); [Wix](https://www.wix.com/press-room/home/post/wix-further-expands-into-vibe-coding-with-acquisition-of-base44-a-hyper-growth-startup-that-simplif)
- Bolt: Bolt Lite page says "Limited time offer. Join before Oct 14th." (year not stated) and mentions Bolt Forge models. Bolt Forge launch date not read on an official page (search snippets suggest September 2026; not used). — [Bolt Lite](https://bolt.new/bolt-lite)
- Emergent: founded 2024 (Geekflare). Launch month not read on a page (TechCrunch headline "Emergent hits $100M ARR eight months after launch, rolls out mobile app", dated 2026/02/17 in the URL, could not be opened).
- Google AI Studio: "Bring any idea to life: Google AI Studio at I/O 2026", "May 19, 2026": native Android apps from the Build tab (Kotlin, browser emulator, publish to Google Play internal testing), Workspace integrations, export to Antigravity, a mobile app "Available for pre-registration today", and "deploy their first two apps to Google Cloud at no cost, no credit card required". — [Google blog](https://blog.google/innovation-and-ai/technology/developers-tools/google-ai-studio-io-2026/)

### Inferences
- new_notable: Replit (Agent 4, 2026-03-13, 6 roundups) and Bubble (Agent 2, 2026-10-06, 2 roundups) meet both conditions. Lovable (mobile app 2026-04-27, 6 roundups) meets both. Base44 has in-window product updates and 5 roundups, but no named version, so `latest_version` is null and `value` is null. Bolt: no official version date read, so `value` null. Emergent: launched inside the window by inference (founded 2024, "eight months after launch" in February 2026 points to mid-2025) and has two dedicated in-window reviews with caveats; `value` true with a weak-evidence note. Google AI Studio: significant version May 19, 2026, but 0 of the 6 roundups, so `value` is false; it enters as a leading, established product (Google, a16z web list), not on the review rule.

### Gaps
- Bolt Forge date not read on an official page.

## Hebrew, right-to-left and student offers

### Takeaway
Only Base44 has an official Hebrew source: its documentation, including the changelog, is published in Hebrew. No tool's official pages that were read mention Hebrew or right-to-left in the editor or in the generated apps. Official student offers: Lovable (up to 50% off Pro), Bubble (discounts on all plans), Base44 (education pricing case by case, student-email sign-up), Replit (education program, no figures). None found for Bolt, Emergent or Google AI Studio.

### Cited Findings
- Base44's changelog page in Hebrew exists and is in Hebrew; it mentions translating integration descriptions for non-English users, with no explicit mention of Hebrew or RTL. — [Base44 changelog (he)](https://docs.base44.com/he/changelog/product.md)
- Emergent "supports natural-language input in multiple languages"; Hebrew not named. — [Emergent FAQ](https://help.emergent.sh/faqs)
- Lovable changelog and pricing: no Hebrew, RTL or language mention. — [Lovable changelog](https://docs.lovable.dev/changelog)
- Students: Lovable "Verify student status and get access to up to 50% off Lovable Pro" — [Lovable pricing](https://lovable.dev/pricing); Bubble "We offer discounts to students on all plans" — [Bubble pricing](https://bubble.io/pricing); Base44 education pricing "case by case", students can sign up with a student email — [Base44 pricing](https://base44.com/pricing); Replit "runs an education program for students and educators" — [Replit docs](https://docs.replit.com/help/pricing-and-plans.md); Bolt pricing page has no student mention — [Bolt pricing](https://bolt.new/pricing).

### Inferences
- Hebrew documentation is a meaningful advantage for Israeli design students, but it does not prove that Base44-generated apps handle RTL layouts correctly.

### Gaps
- Google AI Studio supported-languages page could not be read (redirects to https://aistudio.google.com/docs/available-regions, then the quota blocked it), so Hebrew is "לא אומת".
- Hebrew in prompts and RTL output was not verified for any tool.

## Logos (official pages for the logo stage)
- Lovable: https://lovable.dev (brand page not found)
- Bolt: https://bolt.new
- Replit: https://replit.com
- Base44: https://base44.com
- Emergent: https://emergent.sh
- Bubble: https://bubble.io
- Google AI Studio: https://aistudio.google.com
No press kit or brand page was opened for any of them.

## Browser gaps (official pages not read)
1. https://aistudio.google.com/docs/available-regions — supported languages (Hebrew) and regions; quota.
2. (read later in the session) — AI Studio I/O 2026 post, "May 19, 2026".
3. https://support.bolt.new/release-notes and https://support.bolt.new/account-and-subscription/bolt-forge — Bolt Forge date and data trade; quota.
4. https://lovable.dev/students — student offer terms (the offer itself was read on the pricing page).
5. https://replit.com/site/privacy (Replit privacy policy, AI training) — not reached.
6. https://bubble.io/terms — full ownership and AI training clauses; not reached.
7. https://base44.com/about-us/legal/terms-of-service — full Base44 terms (ownership, training default); not reached.
8. https://app.emergent.sh/dpa — Emergent DPA section 12.1; not reached.
9. https://replit.com/education — Replit education offer details; not reached.
10. https://replit.com/pricing — FAQ answers (credits, overages) were not in the page text (script-rendered).
11. https://lovable.dev/pricing — yearly prices and free-plan credits not in the page text (toggle rendered by script).
12. https://bolt.new/pricing — yearly prices not in the page text.



