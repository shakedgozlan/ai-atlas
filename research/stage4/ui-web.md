# Category 5: ui-web (עיצוב ממשק ובניית אתרים), check date 2026-11-18

Scope note: the shared WebFetch quota ("100 per hour, shared by every agent, one call refills every 36s") was exhausted on the 5th fetch of this session. Four waits of about 10 to 15 minutes were used, as the addendum allows. In total about 30 page fetches succeeded. Fetches were spent in the addendum's order: pricing for every tool first, then training and terms, then latest-version dates, roundups, students and Hebrew. Each gap is listed below and in each JSON's `unverified_notes` or as `null`. Web searches were used only to find URLs, never as a source for a number.

## Which tools are in, and why

### Takeaway
All 8 starting candidates are alive and were kept: Figma, Framer, Webflow, Wix, Stitch (Google), UX Pilot, Relume, v0. No alternates were used. Two URL changes were found: stitch.withgoogle.com now redirects to stitch.google.com, and relume.io/pricing redirects to relume.ai/pricing.

### Cited Findings
- **Figma**: the leading UI design tool. It has a free Education plan with Figma Make, and it is in the top 15 of a16z's 7th-edition web list. — [Figma for Education](https://help.figma.com/hc/en-us/articles/360041061214); [a16z 7th edition](https://a16z.com/100-gen-ai-apps-7/)
- **Framer**: a visual site builder with AI agents. It has a free year for students and documents RTL support that names Hebrew. — [Framer students](https://www.framer.com/education/students/); [Framer RTL update](https://www.framer.com/updates/right-to-left-layout-direction)
- **Webflow**: the established professional site builder, with Webflow AI and an MCP server listed on its pricing page. — [Webflow pricing](https://webflow.com/pricing)
- **Wix**: the mass-market site builder. Its new AI builder, Wix Harmony, was announced "Jan 21 2026". — [Wix press release](https://www.wix.com/press-room/home/post/wix-launches-wix-harmony-the-ai-website-builder-that-merges-human-and-artificial-intelligence-rein)
- **Stitch**: Google Labs' AI UI generator. A major update ("vibe design", canvas, design agent) was posted "Mar 18, 2026". The site labels it "Stitch (Beta)". — [Google blog](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/); [stitch.google.com](https://stitch.google.com/)
- **UX Pilot**: an AI wireframe and UI generator, covered by 2 of the 4 roundups. — [UX Pilot pricing](https://uxpilot.ai/pricing)
- **Relume**: AI sitemap and wireframe planning, now also building and hosting sites (relumesite.ai). — [Relume pricing](https://www.relume.ai/pricing)
- **v0 (Vercel)**: prompt-to-web-app with visual editing. "The new v0" was posted "3 Feb 2026", and v0 "became generally available in 2024". — [Vercel blog](https://vercel.com/blog/introducing-the-new-v0)

### Inferences
- v0 overlaps with category 11 (no-code apps: Lovable, Bolt and others). It stays here because the brief allocates it to ui-web, and because it is mostly used to generate UI.
- Uizard, Visily and Magic Patterns are each covered by one or two of the counted roundups (Uizard: Rework and Veza, rejected by Veza; Visily: Rework; Magic Patterns: Veza). They could replace UX Pilot or Relume if those prove weak. They were not researched further, because of the fetch budget.

### Gaps
- Alternates (Uizard, Visily, Squarespace, Durable, Magic Patterns, Subframe, Banani, Claude Design) were not checked on official pages.

## Pricing and free plans (official pages)

### Takeaway
No tool is fully verified. Seven are "אומת חלקית" and one, Stitch, is "לא אומת". Common problems are only yearly or only monthly prices shown, "$" with no currency code, "from" prices, and a possibly stale render (Figma).

### Cited Findings
- **Figma:** Professional is $12 "per editor / month" paid annually or $15 paid monthly. Organization is $45 paid annually. Free has "3 Projects", "Unlimited File Storage" and "30d Version history". — [Figma pricing](https://www.figma.com/pricing/)
- **Figma AI credits per month:** Starter Full seat 500 (with a 150 daily limit), Professional Full 3,000, Organization 3,500, Enterprise 4,250, other seats 500. Credits reset monthly with no rollover, and add-on credits are not available on Education. — [Figma help: AI credits](https://help.figma.com/hc/en-us/articles/35865276858647-Manage-AI-credits)
- **Figma conflict:** the pricing page as fetched shows no seat types, AI credits or Figma Make, while the help center describes Full, Dev and Collab seats. The page may be a stale or static render, so the pricing is marked partial.
- **Framer:** Free is $0 with "500 AI credits / month". Basic is $10, Pro is $30, and Enterprise is Custom. The page says "All prices are monthly and billed according to the billing cycle selected at checkout", and yearly figures are not shown. Additional editors cost $20/month. The free plan has a free Framer domain, 1 GB bandwidth and 1,000 pages. — [Framer pricing](https://www.framer.com/pricing)
- **Webflow:** site plans are Starter (free), Basic $15/mo and Premium $25/mo, both billed yearly. Workspace plans are Core $19, Growth $49, Freelancer $16 and Agency $35, all billed yearly. Seats: Full $39, Limited $15. AI credits per month: Starter 200, Core and Freelancer 300, Growth and Agency 400. — [Webflow pricing](https://webflow.com/pricing)
- **Wix:** Light "17$", Core "29$", Business "39$" and Business Elite "159$" per month. The prices are "for yearly subscriptions, paid in full at the time of purchase", the offer is "valid until Thursday 7:00 AM GMT", and the currency code is not given. Free is "0$". — [Wix plans](https://www.wix.com/plans)
- **v0:** Free is $0 with a "7 message/day limit". Plus is $30/user/month, shown with $90 struck through. Business is $100/user/month. Both paid plans include "$30 of included monthly credits per user" and "$2 of free daily credits on login". Only monthly prices are shown. — [v0 pricing](https://v0.app/pricing)
- **Relume:** Free is "Free forever". Pro AI workspace is "from $24 / month". Launch hosting is $12 a month per project billed yearly, or $16 billed monthly. Site Builder Starter is $18, Pro $40 and Team $36 (minimum 3 users). The free plan includes "enough monthly AI usage to build a full website". — [Relume pricing](https://www.relume.ai/pricing)
- **UX Pilot:** the pricing page is script-rendered. The only figure is in its meta description: "flexible paid plans starting at $14/month". — [UX Pilot pricing](https://uxpilot.ai/pricing)
- **Stitch:** neither the official blog nor the site mentions price or limits. — [Google blog](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)

### Gaps
- Figma seat-type prices, Framer and v0 yearly prices, Webflow and Wix monthly-billing prices, UX Pilot plans, and Stitch limits are all unverified.

## Training on user data and output rights

### Takeaway
Webflow says it does not train on customer data. Figma (Starter and Professional), Framer (non-Enterprise) and v0 (free with a Vercel Hobby account) train by default with an opt-out. Wix's policy lists user-generated content as training data and describes no opt-out. The policies for Stitch, UX Pilot and Relume were not read.

### Cited Findings
- **Figma:** Content training is on by default for Starter and Professional, and admins can toggle it off. It is off for Organization and Enterprise. Figma "does not use any data from Figma for Education" for training. Training took effect "August 15, 2024". — [Figma help: content training](https://help.figma.com/hc/en-us/articles/17725942479127)
- **Framer:** AI Notice v1.2, effective September 18, 2026. On non-Enterprise plans, customers grant a licence "to use their Inputs and Outputs to train and improve Framer's AI models" unless training is disabled in Workspace settings. Enterprise data is not used. Third-party model providers "are not permitted" to train on it. — [Framer AI notice](https://www.framer.com/legal/ai-notice)
- **Webflow:** "Webflow doesn't use customer data to train generative AI models", and its vendor agreements "prohibit use of customer data to train their models". — [Webflow AI approach](https://webflow.com/ai/our-approach)
- **Wix:** the data sources include "User-generated content (such as images and page layouts)", and data is collected for "training Wix's software tools, including artificial intelligence and machine learning models". No opt-out is described. — [Wix generative AI policy](https://support.wix.com/en/article/wixs-generative-ai-policy)
- **Wix ownership:** "Wix does not claim ownership of the output you choose to use" (blog post, October 19, 2026). — [Wix blog](https://www.wix.com/blog/do-i-own-my-ai-generated-website)
- **v0 / Vercel (17 Mar 2026):** "If you are a v0 Free or Premium user with a Vercel Hobby account, you will be opted into AI training by default." The opt-out is under Team Settings → Data Preferences. The changelog names the plans "Free or Premium", while the current pricing page shows Free, Plus and Business (a naming conflict). — [Vercel changelog](https://vercel.com/changelog/updates-to-terms-of-service-march-2026)
- **Relume:** on commercial use, the pricing FAQ answers "You sure can!". — [Relume pricing](https://www.relume.ai/pricing)

### Gaps
- The terms or privacy pages of Stitch (Google Labs), UX Pilot and Relume were not read. Ownership terms for Figma, Webflow, v0 and UX Pilot were not read.

## Latest versions, launch dates and "new and notable"

### Cited Findings
- **Wix Harmony:** "Jan 21 2026", rolling out "in English in the coming weeks". — [Wix press release](https://www.wix.com/press-room/home/post/wix-launches-wix-harmony-the-ai-website-builder-that-merges-human-and-artificial-intelligence-rein)
- **Stitch:** canvas and design agent update, "Mar 18, 2026". — [Google blog](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)
- **Figma Make on local code:** to "launch in a limited beta on May 28, 2026", Mac only. The post has no date of its own, and this is a beta announcement, not a GA. — [Figma blog](https://www.figma.com/blog/figma-make-now-on-your-local-code/)
- **v0:** "Introducing the new v0", "3 Feb 2026"; v0 "became generally available in 2024". — [Vercel blog](https://vercel.com/blog/introducing-the-new-v0)
- **Framer RTL layout:** "Published October 2, 2025". This is a feature update, not treated as a significant AI version. — [Framer update](https://www.framer.com/updates/right-to-left-layout-direction)

### Inferences
- new_notable = true for Wix, Stitch, Figma and v0: each has a dated version in the window and 2 independent roundups. Figma's case rests on a limited-beta announcement.
- new_notable = null for Framer, Webflow, UX Pilot and Relume: no official latest-version date was read.

### Gaps
- The original launch dates of Figma Make, Stitch, UX Pilot and Relume were not read on official pages.

## Review roundups counted (N = 4, so the tag value is count >= 3)

Each page was opened once on 2026-11-18. Fewer than 6 were read because of the fetch budget.

| # | Roundup | Date as written | Independence |
|---|---|---|---|
| R1 | Rework, "Best AI Tools for UI/UX Design in 2026" (Victor Hoang) https://resources.rework.com/tools/ai-tools/best-ai-tools-for-ui-ux-design-2026 | updated July 16, 2026 | Independent: Rework sells CRM software. No affiliate disclosure seen. |
| R2 | Veza Digital, "Best AI Tools for UX Design in 2026" (Ivana Poposka) https://www.vezadigital.com/post/best-ai-tools-for-ux-design | April 17, 2026 | Independent for the AI tools. NOT independent for Webflow: Veza is a Webflow agency, and Webflow is not counted from it anyway. No disclosure. |
| R3 | DesignRush, "10 Best AI Website Builders in 2026" (Frosina Stojchevska) https://www.designrush.com/agency/website-design-development/trends/ai-website-builders | published Feb 10, 2025, updated Sep 29, 2026 | Mostly independent. It is an agency directory that sells listings and advertising, and a Squarespace link carries ad-click parameters. No disclosure. |
| R4 | Leland, "The 10 Best AI Website Builders" https://www.joinleland.com/library/a/ai-website-builders | Posted June 17, 2026 | Independent: Leland sells coaching. No byline and no disclosure. |

| Tool | R1 | R2 | R3 | R4 | Count |
|---|---|---|---|---|---|
| Figma (Make) | yes | yes | no (only a 10Web import mention) | no | 2 |
| Framer | yes | no (navigation link only) | yes | yes | 3 |
| Webflow | no (companion only) | not counted | yes | yes | 2 |
| Wix | no | no | yes | yes | 2 |
| Stitch | yes | yes | no | no | 2 |
| UX Pilot | yes | yes | no | no | 2 |
| Relume | yes | yes (listed as rejected) | no | no | 2 |
| v0 | yes | no | no | yes | 2 |

Caveat: two roundups are about UI design and two about website builders, so a tool of one kind rarely appears in the other kind's lists. Counts are low by construction, and only Framer reaches 3.

## Popularity (traffic ranking)

- The a16z Top 100 Gen AI Consumer Apps, 7th Edition, was published October 5, 2026 and uses Similarweb web visits as of August 2026: "Canva and Notion rank in the top ten on web, and Figma in the top 15." Framer, Webflow, Wix, Stitch, UX Pilot, Relume and v0 are not mentioned in the article text. Full ranks appear only in chart images. — [a16z 7th edition](https://a16z.com/100-gen-ai-apps-7/)
- Result: popular = true for Figma only.

## Hebrew and RTL

### Cited Findings
- **Framer:** RTL layout flipping "for locales with languages that are read from right to left, such as Arabic and Hebrew", limited to Stacks and Grids. — [Framer update](https://www.framer.com/updates/right-to-left-layout-direction)
- **Wix:** Multilingual supports RTL per language for menu, text and images (only some elements). The article does not name Hebrew. Harmony is rolling out in English. — [Wix RTL help](https://support.wix.com/en/article/creating-a-site-with-rtl-text-per-language)
- **Not checked:** Figma, Webflow, v0, Relume, UX Pilot and Stitch were not checked; their value is "לא אומת".

## Student offers

- **Figma:** the Education plan is free. Higher-ed students get Professional with 3,000 AI credits a month, and Figma Make is available to higher-ed and bootcamp users. Verification is through SheerID, access lasts 1 year for students, and the plan is in select regions only. — [Figma for Education](https://help.figma.com/hc/en-us/articles/360041061214)
- **Framer:** a free Basic plan for 1 year ("worth $120") with 1,000 AI credits a month, for a personal site only and new customers only. — [Framer students](https://www.framer.com/education/students/)
- **Webflow:** the student program was "deprecated on February 28, 2026", with no replacement. — [Webflow help](https://help.webflow.com/hc/en-us/articles/33961230226963-Webflow-for-students)
- **v0:** there is a "v0 for Students" link, but the FAQ answer is blank. — [v0 pricing](https://v0.app/pricing)
- **Not mentioned:** no student offer is mentioned by Wix, Relume or UX Pilot on their pricing pages.

## Logo pages (for the logo stage)

No press kit was opened. Use the official homepages: https://www.figma.com, https://www.framer.com, https://webflow.com, https://www.wix.com, https://stitch.google.com, https://uxpilot.ai, https://www.relume.ai, https://v0.app

## Browser gaps (official pages not readable or not read)

1. https://uxpilot.ai/pricing : script-rendered, read twice with no plan data.
2. https://www.figma.com/pricing/ : the fetch may be a stale render, with no seat types or AI credits. Check the current seat prices.
3. https://stitch.google.com/ : no pricing, limits, terms or FAQ in the fetched text.
4. https://www.framer.com/pricing : the Yearly toggle values are not rendered.
5. https://webflow.com/pricing : the Monthly toggle values are not rendered.
6. https://www.wix.com/plans : the currency and the monthly-billing prices are not shown.
7. https://labs.google/fx/privacy : may cover Stitch, not read.
8. https://relume.io/privacy-policy : not read.
9. https://www.figma.com/legal/ai-terms/ : not read.
10. https://webflow.com/legal/ai-terms : not read.
11. https://support.wix.com/he/article/choosing-a-premium-plan : Hebrew help page, quota failure.
12. https://www.framer.com/help/articles/rtl-best-practices/ : not read.
