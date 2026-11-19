# Category 12: agents-automation (סוכנים ואוטומציה), check date 2026-11-18

Scope note: the shared WebFetch quota ("100 per hour, shared by every agent") was exhausted on the first fetch of this session. I spread about 55 fetches over the session with short waits, in the addendum's order: pricing for every tool first, then terms and training, then versions, then roundups, then Hebrew and students. Web searches were used only to find URLs, never as the source of a number. Every gap is in the JSON `unverified_notes`, set to `null`, or listed below.

## Which tools are in, and why

### Takeaway
Eight tools: Zapier, Make, n8n, Manus, Lindy, Gumloop, Genspark, Microsoft Copilot Studio. Relay.app was dropped because it shut down in September 2026. Its slot went to Microsoft Copilot Studio, the only alternate that passes the "new and notable" rule on the roundups I counted. Meta's Muse is a separate product, but it was left out: it is available only in the US (and Canada, per a16z) and appears in none of the counted roundups.

### Cited Findings
- **Zapier** (`zapier`): the best-known no-code automation platform, "9,000+ apps", with a renewing free plan (100 tasks a month). Zapier Agents became the AI by Zapier step on "October 6, 2026". — [Zapier pricing](https://zapier.com/pricing.md); [Zapier blog](https://zapier.com/blog/zapier-agents-is-now-ai-by-zapier/)
- **Make** (`make`): a visual scenario builder, "3,000+ native apps", 1,000 free credits a month, and next-generation Make AI Agents from "February 11, 2026". — [Make pricing](https://www.make.com/pricing?country=US); [Make blog](https://www.make.com/blog/announcing-next-generation-make-ai-agents)
- **n8n** (`n8n`): workflow and agent builder with a free self-hosted Community Edition, n8n 2.0 from "December 8, 2025", and the best roundup coverage here (4 of 5). — [n8n pricing](https://n8n.io/pricing/); [n8n blog](https://blog.n8n.io/introducing-n8n-2-0/)
- **Manus** (`manus`): general autonomous agent with 300 free credits a day; Manus 2.0 shipped on "September 28, 2026"; on the a16z 7th-edition web list. — [Manus help](https://help.manus.im/en/articles/11711111); [Manus blog](https://www.manus.im/blog)
- **Lindy** (`lindy`): an AI "teammate" that works in Slack, Gmail and calendars; the pricing page says data is "never used to train models". — [Lindy pricing](https://www.lindy.ai/pricing); [Lindy changelog](https://lindy.ai/changelog)
- **Gumloop** (`gumloop`): agent builder for teams, reachable from Slack, Teams, email and text. It moved to at-cost pricing with an 8% fee on "August 5, 2026". — [Gumloop pricing](https://gumloop.com/pricing); [Gumloop blog](https://www.gumloop.com/blog/transparent-pricing)
- **Genspark** (`genspark`): an all-in-one agent workspace (slides, docs, images, code). It is in only 1 of 5 roundups, so it enters as a leading tool on popularity: it is on the a16z 7th-edition web top-50 list. — [Genspark help](https://www.genspark.ai/helpcenter/membership-plans); [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)
- **Microsoft Copilot Studio** (`microsoft-copilot-studio`): Microsoft's agent builder. It is in 3 of 5 roundups, Computer use went GA in "May 2026", and it is the only tool here with official Hebrew support (he-IL authoring UI and user language). — [Copilot Studio language support](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-language-support); [What's new](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)
- **Relay.app, dropped**: "Relay.app shut down in September 2026." "All accounts, workflows, and run history have been permanently deleted." (docs.relay.app redirects to this page.) — [relay.app](https://relay.app/). A TechCrunch headline in search results (URL dated 2026/08/17, not opened) reports that the staff joined Google's Chrome team.
- **Meta Muse, considered and excluded**: Meta's own page (Korean edition, dated "2026년 9월 8일", updated September 11, 2026) calls Muse a personal AI agent with its own app on iOS, Android and muse.ai. It is rolling out "in the U.S." only, "most features are free", subscription tiers are planned without prices, and users can opt out of training on their interaction data. — [Meta newsroom (ko)](https://about.fb.com/ko/news/2026/09/introducing-muse-the-worlds-first-personal-ai-agent-built-for-everyone/). a16z says it launched "September 9" and is "still only available in the U.S. and Canada". — [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)

### Inferences
- Muse is a distinct product (own app and site), not just Meta AI, so it does not overlap category 1. But it fails condition B (0 of 5 roundups), it is not "leading and established" yet, and Israeli students cannot sign up. Revisit if it launches outside North America.
- Copilot Studio is aimed at organisations. It is useful mainly to students whose school provides Microsoft 365 Copilot. I chose it over the other alternates because the rules decide: Activepieces (1 of 5 roundups: Dupple), Pipedream (2: Rework, Dupple, but developer-oriented and no version date read), Dify (1: DataCamp), Relevance AI (0).
- Activepieces would suit design students well (renewing free plan, open source). Its pricing page was read and is recorded below in case the editor wants to swap it in. It fails the new-and-notable rule on my roundup count.

### Gaps
- Activepieces, Pipedream, Dify, Relevance AI and Langflow were not researched beyond the roundup counts (and Activepieces' pricing page).

## Pricing, quotas and free plans

### Takeaway
Only Zapier and Lindy are fully verified. Make, Manus, Gumloop, Genspark, n8n and Copilot Studio are partial, mostly because the price tables are rendered by script, given only for one billing period, or shown as images. Cheapest regular paid entry: n8n Starter €20/month billed yearly; Manus Pro $20/month; Zapier Pro $29.99/month (or $19.99/month yearly); Lindy Team $29.99/month; Gumloop Pro $37/month. Renewing free allowances: Zapier (monthly), Make (monthly), Manus (daily). Genspark refills daily up to a lifetime cap.

### Cited Findings
- **Zapier:** Free: 100 tasks a month, unlimited two-step Zaps, Tables and Forms, 1 seat, 15-minute polling, 400 agent activities a month. Pro: 750 tasks, $29.99 monthly or $19.99/month billed annually ("33% off"), with tiers up to 2,000,000 tasks. Team: from 2,000 tasks, $103.50 monthly or $69/month annually, 25 seats. Enterprise through Sales. 14-day Pro trial without a card. Overage is 2.5x the base rate on monthly plans and 1.25x on annual plans. MCP is on all plans, and each tool call uses 2 tasks. Billing in 19 currencies including ILS, "converted from the USD base price". — [Zapier pricing](https://zapier.com/pricing.md)
- **Make:** "If you are on the Free plan, you have 1000 credits per month", 1 MB storage, 1 data store. "Credits expire at the end of the term"; extra credits "expire after one month" on monthly plans. Plan prices were not in the page text. Start-up Plan: 50% off Business for under 20 employees. — [Make pricing](https://www.make.com/pricing?country=US)
- **Make help:** "As of today, November 6, 2025": Core up to 300,000 credits/month, Pro up to 8 million, "Additional credits now cost 25% more than credits included in your plan", custom AI provider connections on all paid plans; example "$338.13/month for 500,000 credits". — [Make help](https://help.make.com/adjustments-to-plans-and-pricing)
- **n8n (EUR):** Starter €20/mo, 2,500 executions; Pro €50/mo, 10,000; Business €667/mo, 40,000, self-hosted only; all "billed annually"; monthly prices not listed ("Save 17%"). Cloud trial: 1,000 executions, no card. Community Edition: "A standard, self-hosted version of n8n is available on GitHub." Hosted data in the EU (Frankfurt). — [n8n pricing](https://n8n.io/pricing/)
- **Manus:** Free "$0/month", "300 credits provided daily", 1 concurrent task, 2 Scheduled Automations. Pro "Starting from $20/month" (4,000 credits) or "$40/month" (8,000 credits), 20 concurrent tasks; Team "Starting from $20 per seat/month"; "17% discount with annual billing"; the tables are images. — [Manus help](https://help.manus.im/en/articles/11711111). Add-on packs "never expire". — [Manus docs](https://manus.im/docs/introduction/plans.md)
- **Lindy:** Free $0 with "$50 in credits" that "last 7 days"; Team $29.99/mo for 3,000 credits/mo; top-ups $10 per 1,000; Enterprise custom; monthly credits don't roll over; no annual billing shown. — [Lindy pricing](https://www.lindy.ai/pricing)
- **Gumloop:** Pro "$37 / month", "20k per month" credits, "Start 14-day free trial", MCP Server Hosting 1, orchestration fee 8%; Enterprise custom; no free plan shown; FAQ answers not rendered. — [Gumloop pricing](https://gumloop.com/pricing). "We charge a base 8% orchestration fee", "August 5, 2026". — [Gumloop blog](https://www.gumloop.com/blog/transparent-pricing)
- **Genspark:** Free: "100 credits per day and 1 GB of AI Drive storage", "a daily refill of 100 credits up to a lifetime allowance". Plus: "from 10,000 monthly credits ... and commercial use of AI-generated content". Pro: "starting from 125,000 monthly credits". Annual billing saves about 20%. No prices. Page updated Nov 16, 2026. — [Genspark help](https://www.genspark.ai/helpcenter/membership-plans)
- **Copilot Studio:** capacity pack "$200.00/pack/month", 25,000 Copilot Credits; pay-as-you-go needs an Azure subscription; pre-purchase "Save up to 20%"; Microsoft 365 Copilot add-on $30/user/month paid yearly includes Copilot Studio's Standard harness; free Azure account with a $200 credit. — [Microsoft pricing](https://www.microsoft.com/en-us/copilot/pricing/copilot-studio)
- **Activepieces (not included, for reference):** Free $0, 1,000 credits a month "reset daily", unlimited flows, up to 5 users, MCPs and API access; Plus $20 flat/month, 10,000 credits; Team $200/month, 50,000; the page contradicts itself on whether free credits reset daily or monthly; "Open source at the core"; "770+ integrations". — [Activepieces pricing](https://activepieces.com/pricing/)

### Inferences
- `starting_price.verified` is true for Zapier, n8n, Manus, Lindy and Gumloop. Make and Genspark have no verified number. Copilot Studio has no individual plan.
- I set Lindy `has_free_plan` to true because the page names a "Free" plan. In practice it is a 7-day credit trial, so `free_renewing` is false.

### Gaps
- Make plan prices; Genspark Plus/Pro prices; Manus yearly figures; n8n monthly prices; Gumloop FAQ answers; Copilot Studio per-credit pay-as-you-go rate.

## Privacy, training on user data and commercial rights

### Takeaway
Only n8n (no training on customer content or output) and Lindy ("never used to train models") make clear no-training statements. Zapier's non-enterprise customers are not opted out by default but can opt out with a form. Genspark's and Make's policies do not address training. Manus's legal pages could not be read.

### Cited Findings
- Zapier: "Enterprise customers are automatically opted out of Zapier using their content for model training"; others "may opt out at any time"; "Zapier subprocessors are prohibited from using customer content for their own model training"; dated "July 2, 2026". — [Zapier legal](https://zapier.com/legal/automation-platform-information)
- n8n AI terms ("Last updated: 6 July 2026"): will not "use Customer Content or Output to train any ML models"; may use "Usage Data and Customer prompts to improve AI Services" if aggregated and de-identified; "Customer owns all Output generated through Customer's use of AI Features". — [n8n AI terms](https://n8n.io/legal/ai-terms/)
- Lindy: data "never used to train models". — [Lindy pricing](https://www.lindy.ai/pricing)
- Gumloop: "zero data retention (ZDR) agreements with major large language model providers", BYOK, VPC in a region of choice, "SOC 2 Type II attested and HIPAA compliant"; no training statement. — [Gumloop security](https://www.gumloop.com/solutions/security)
- Genspark privacy ("Last updated: July 24, 2026"): use "to evaluate and improve our Service"; providers OpenAI, Anthropic, Google, xAI, ElevenLabs; "Your data will be stored on Microsoft Azure"; entities "MainFunc Inc." and "Genspark Inc.". — [Genspark privacy](https://www.genspark.ai/privacy)
- Genspark commercial use: Plus includes commercial use of AI content, "guaranteed through December 31, 2026". — [Genspark help](https://www.genspark.ai/helpcenter/membership-plans)
- Make privacy notice: training not addressed, apart from Google Workspace APIs; it names Celonis Inc. (New York) and Celonis SE; conflicting dates "Last Update: April 2025" and "last updated on February 5, 2026". — [Make privacy](https://www.make.com/en/privacy-notice)
- Copilot Studio: "Availability of some models might require data processing and storage outside of your organization's geographical boundaries." — [What's new](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)

### Gaps
- Manus terms and privacy (script-rendered); Zapier, Make, Lindy, Gumloop and Copilot Studio terms on output ownership; Microsoft's training policy for Copilot Studio.

## Versions, renames and ownership (dates as written)

### Cited Findings
- Zapier: "Zapier Agents is now AI by Zapier", "October 6, 2026". — [Zapier blog](https://zapier.com/blog/zapier-agents-is-now-ai-by-zapier/)
- Make: next-generation Make AI Agents, "February 11, 2026". — [Make blog](https://www.make.com/blog/announcing-next-generation-make-ai-agents)
- n8n: 2.0, "December 8, 2025"; "When we released n8n 1.0 in July 2023". — [n8n blog](https://blog.n8n.io/introducing-n8n-2-0/)
- Manus: "Manus Joins Meta for Next Era of Innovation", December 29, 2025; "Manus Resumes Independent Operations", September 1, 2026; "Introducing Manus 2.0", September 28, 2026; Manus Flex (bring your own API key), September 29, 2026; Video Editor and Game Dev, October 1, 2026. — [Manus blog](https://www.manus.im/blog). The post itself has the byline "Tuesday, September 01" with no year (footer © 2026): "Manus has formally resumed independent operations", "Our founding team will continue to lead the company", and some users had to back up and restore data. It does not explain why. — [Manus post](https://manus.im/blog/manus-resumes-independent-operations). Search-result headlines (not opened) attribute the unwinding to China blocking the deal (Caixin, 2026-09-02; eNCA, 12 August 2026).
- Lindy: Lindy in Slack and Skills, August 10, 2026; MCP servers, August 24; Watch and Learn, October 12; phone calls (US and Canadian numbers), October 14; Lindy Apps, October 28, 2026. — [Lindy changelog](https://lindy.ai/changelog)
- Gumloop: new pricing model, August 5, 2026. No product version date was read. — [Gumloop blog](https://www.gumloop.com/blog/transparent-pricing)
- Genspark: AI Workspace 6.0 press release (Business Wire, URL dated 20260721) seen in search only, not opened, so it is not used. The Genspark blog pages returned errors.
- Copilot Studio: Computer use GA in "May 2026"; MCP connections, October 2026; page updated 2026-11-12. — [What's new](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)

### Gaps
- Original launch dates for Zapier, Make, Manus, Lindy, Gumloop, Genspark and Copilot Studio were not read on official pages.

## Review roundups, popularity and "new and notable"

### Takeaway
Five independent in-window roundups were counted (N = 5). That is fewer than six, so the "בולט בסקירות" threshold is n >= 4, and only n8n (4) gets the tag. "Popular" goes to Manus and Genspark, which are on the a16z 7th-edition web top-50 list.

### Cited Findings
| # | Source | Date as written | Covers | Independence assessment |
|---|---|---|---|---|
| 1 | [Rework, Victor Hoang](https://resources.rework.com/tools/ai-tools/best-ai-automation-tools-2026) | Updated Jul 16, 2026 | Zapier, Make, Relay.app, Lindy, Gumloop, n8n, Pipedream, Copilot Studio (with Power Automate), plus Bardeen, Wordware, Workato, Tray.ai | Independent: Rework sells CRM software, its own product is not ranked, and no affiliate disclosure was seen. |
| 2 | [Memeburn, Michael Sacchitello](https://memeburn.com/best-ai-agents/) | Published 17 May 2026, updated 14 November 2026 | Lindy, Manus, Zapier Agents, n8n (plus coding and enterprise agents) | Independent, with a caveat: the footer says some pages "may include affiliate links or sponsored content"; no tool-specific relationship. |
| 3 | [Dupple, Louis Corneloup](https://dupple.com/learn/best-ai-workflow-automation-tools) | Published June 16, 2026, updated November 10, 2026 | n8n, Zapier, Make, Gumloop, Lindy, Activepieces, Pipedream, Power Automate, Abacus AI | Independent, with a caveat: "Some offers on this page may be paid placements or contain affiliate links." |
| 4 | [DataCamp, Bex Tuychiev](https://datacamp.com/blog/best-ai-agents) | Updated May 28, 2026 | n8n, Dify, Copilot Studio, Manus ("other notable mentions", counted with caveat) | Independent: DataCamp sells courses, not agent platforms; no disclosure seen. |
| 5 | [The AI Rankings](https://theairankings.com/best-ai-agents/) | Updated 18 November 2026 | Manus (#5), Genspark (#7), Copilot Studio (#10); n8n only briefly (not counted) | Weakest: no author or owner named, no disclosure. Counted because nothing shows it sells the tools. |

Rejected roundups:
- [Kingy AI, State of AI Agents 2026](https://kingy.ai/news/the-state-of-ai-agents-in-2026-a-practitioners-guide/) (modified 2026-11-18): covers none of the tools.
- [Efficient App, best AI agent](https://efficient.app/best/ai-agent) (updated Nov 13, 2026): mentions Zapier, Make and n8n only in passing; promotes discounts on tools it ranks.
- Zapier's own "best AI agents" and the roundups by Lindy, Gumloop, Activepieces, Jotform, Salesforce, Kore.ai, nexos, Mastra, Taskade, fast.io and Manus (seen in search) are vendor content and were not opened.

Counts (of 5): n8n 4; Zapier 3; Manus 3; Lindy 3; Copilot Studio 3; Make 2; Gumloop 2; Genspark 1; Activepieces 1; Pipedream 2; Dify 1; Relay.app 1 (shut down); Muse 0.

Popularity: a16z "Top 100 Gen AI Consumer Apps", 7th edition, posted October 5, 2026, ranks "the top 50 web products by monthly visits, using Similarweb". Its web link list includes Manus (manus.im) and Genspark (genspark.ai); the text gives no rank for either. n8n and Manus appear in the "consumer AI apps" list and in the spending text ("like n8n, fal, Manus..."); that ranking is based on card-spend data, not traffic, so it does not count for n8n. Lindy is named among agents that "report hundreds of thousands of users" (company-reported, does not count). Zapier, Make, Gumloop, Activepieces and Copilot Studio are not mentioned. — [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)

### Inferences
- New and notable (A and B): Zapier (2026-10-06, 3), Make (2026-02-11, 2), n8n (2025-12-08, 4), Manus (2026-09-28, 3), Lindy (2026-08-10, 3), Copilot Studio (May 2026, 3) meet both conditions. Gumloop: 2 roundups, but no official product-version date was read, so `value` is null. Genspark: 1 roundup, so `value` is false; it is in as a leading tool (a16z web list).
- For Lindy I picked "Lindy in Slack and Skills" (August 10, 2026) as the significant version, because the product and its pricing are now built around the Slack teammate. This is my judgement.

### Gaps
- Only five roundups were counted, and one of them (The AI Rankings) has no named owner. Treat the counts as rough.

## Hebrew and student offers

### Takeaway
Copilot Studio officially supports Hebrew (he-IL) for authoring and for answers. Zapier states its interface is English-only, so it is "לא נתמכת לפי המקור" (this is about the interface, not about Hebrew text inside workflows). No other official page read mentions Hebrew. No tool has an official student offer. n8n links an Education page whose content was not read.

### Cited Findings
- Copilot Studio: Hebrew (he-IL) in "Authoring canvas" and "Generative answers and orchestration, and user language", not marked preview; not in voice; event triggers English only; last updated 2026-06-29. — [Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-language-support)
- Zapier: "Zapier is only available in English." (Updated January 23, 2026.) — [Zapier help](https://help.zapier.com/hc/en-us/articles/35201074788877-Can-I-change-the-language-of-my-Zapier-account)
- Zapier discounts: 33% annual, 15% nonprofit; no student discount. — [Zapier help](https://help.zapier.com/hc/en-us/articles/8496197165581-Discounts-for-Zapier-plans)
- Make: no student mention, NGO support by contact. — [Make pricing](https://www.make.com/pricing?country=US)
- Manus, Lindy, Gumloop, Genspark: no student mention on the pricing and help pages read (sources above).

### Gaps
- A Genspark blog URL with a Hebrew prefix (genspark.ai/he/blog/genspark-ai-workspace-6) appeared in search but failed to load, so Hebrew is not claimed.
- Hebrew support in Manus, Lindy, Gumloop, Make and n8n was not found on any language page (none was located).

## Logos (official pages for the logo stage)
- Zapier: https://zapier.com
- Make: https://www.make.com
- n8n: https://n8n.io
- Manus: https://manus.im
- Lindy: https://www.lindy.ai
- Gumloop: https://www.gumloop.com
- Genspark: https://www.genspark.ai (site pages often fail to load for fetchers)
- Microsoft Copilot Studio: https://www.microsoft.com/en-us/copilot/products/copilot-studio
No press kit or brand page was opened for any of them.

## Browser gaps (official pages not read)
1. https://www.make.com/pricing?country=US — plan price table is script-rendered (Core, Pro, Teams prices monthly and yearly).
2. https://www.genspark.ai/membership-benefits-lp — failed at the site (client error).
3. https://www.genspark.ai/team_pricing?from_path=%2Fpricing — failed at the site (client error).
4. https://www.genspark.ai/he/blog/genspark-ai-workspace-6 — Hebrew page; failed to load.
5. https://manus.im/terms — script-rendered, no text (ownership, commercial use, training).
6. https://manus.im/privacy — script-rendered, no text (training on user data).
7. https://help.manus.im/en/articles/11711111 — the price tables are images (yearly amounts).
8. https://gumloop.com/pricing — FAQ answers (credit rollover, overage) not in page text.
9. https://www.gumloop.com/privacy-policy and https://www.gumloop.com/tos — not reached.
10. https://zapier.com/legal/terms-of-service — output ownership; not reached.
11. https://www.businesswire.com/news/home/20260721503339/en/ — Genspark AI Workspace 6.0 press release; not reached.
12. https://n8n.io/pricing/ — monthly (non-annual) prices not shown; Education page link not followed.
