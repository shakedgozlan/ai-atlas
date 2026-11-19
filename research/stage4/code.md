# Category 10: code (קוד ועוזרי פיתוח), check date 2026-11-18

Method note: the shared WebFetch budget (100 an hour across all agents) ran out several times; I waited between fetches (three waits of 5 to 15 minutes). Every fact below comes from a page opened in this session. Pages not read are under "Browser gaps".

## Final tool list, and which candidates changed

### Takeaway
Nine tools: Cursor, GitHub Copilot, Claude Code, Codex, Devin (with Devin Desktop, formerly Windsurf), Google Antigravity, Cline, Kiro, Zed. Windsurf and Devin are now one Cognition brand, so they share one entry; Zed takes the freed slot.

### Cited Findings
- cursor: leading AI code editor, 6/6 roundups, the only coding tool with an a16z web rank (#35). Cursor 3 on "Apr 2, 2026". Acquired by SpaceX ("Aug 14, 2026"). New customers buy it through "The X Subscription" (Grok + Cursor + X). — [Cursor blog](https://cursor.com/blog/joining-spacex); [Cursor pricing help](https://cursor.com/help/account-and-billing/pricing); [Cursor 3](https://cursor.com/changelog/3-0)
- github-copilot: 6/6 roundups, $10 Pro, free Copilot Student plan. — [GitHub plans](https://github.com/features/copilot/plans)
- claude-code: 6/6 roundups. Sold only inside paid Claude plans ("Claude Code is included in all paid plans"; not in Free). — [claude.com/pricing?mode=code](https://claude.com/pricing?mode=code)
- codex: 5/6 roundups. Sold only inside ChatGPT plans (Free and Go get limited access; Plus $20). GPT-6.2 Astra / Sol added 2026-11-17. — [Codex pricing](https://learn.chatgpt.com/docs/pricing); [changelog](https://learn.chatgpt.com/docs/changelog)
- devin: 6/6 roundups when Windsurf / Devin Desktop coverage counts. "On June 2, 2026, Windsurf is becoming Devin Desktop." — [Devin Desktop FAQ](https://docs.devin.ai/desktop/devin-desktop-faq)
- google-antigravity: 4/6 roundups, named on the a16z 7th edition web list; launched "November 2025"; Antigravity 2.0 "May 19, 2026". — [Antigravity 2.0 blog](https://antigravity.google/blog/introducing-google-antigravity-2/)
- cline: 4/6 roundups, open source, free (pay only for model use); Cline 2.0 / SDK "May 13, 2026". — [Cline blog](https://cline.bot/blog/introducing-cline-sdk-the-upgraded-agent-runtime)
- kiro: 3/6 roundups, AWS; free tier and a free year for students; IDE 1.4.0 "Oct 19, 2026". — [Kiro pricing](https://kiro.dev/pricing/); [Kiro students](https://kiro.dev/students/)
- zed: 3/6 roundups; Zed 1.0 "April 29th, 2026"; Zed Pro free for one year for students. Chosen over JetBrains Junie (1/6, short mention only). — [Zed 1.0](https://zed.dev/blog/zed-1-0); [Zed education](https://zed.dev/education)

### Inferences
- Verification levels: "אומת ממקור רשמי" for cursor, github-copilot, cline, kiro, zed; "אומת חלקית" for claude-code (Max 20x price missing, Ultra not on page), codex (no yearly prices; Free/Go quotas unpublished; page read only to 100k chars), devin (quota sizes and currency unstated; Teams conflict), google-antigravity (prices are general Google AI subscription prices for the US view; quotas not numeric). None "לא אומת".
- Devin is kept as one entry for Cognition's products (cloud agent + desktop editor). If the editor prefers, it could be split back, but the FAQ calls Devin Desktop "the same IDE ... unified under the Devin brand".

### Gaps
- Original launch dates were verified only for Antigravity ("November 2025"). Not for Cursor, Copilot, Claude Code, Codex, Devin, Cline, Kiro, Zed.

## Candidates rejected or merged

### Takeaway
Windsurf merged into Devin; Gemini CLI replaced by Antigravity CLI; Roo Code reported archived; JetBrains Junie, Tabnine, Augment, Amp, Warp left out on coverage.

### Cited Findings
- Windsurf: renamed Devin Desktop on June 2, 2026; "Pricing is unchanged". — [Devin Desktop FAQ](https://docs.devin.ai/desktop/devin-desktop-faq)
- Gemini CLI: Pinggy lists it as "retired", Bitdoze says Google replaced it with Antigravity CLI. — [Pinggy](https://pinggy.io/blog/best_ai_tools_for_coding/); [Bitdoze](https://www.bitdoze.com/ai-coding-tools/). The official Google Developers Blog post "An important update: transitioning Gemini CLI to Antigravity CLI" (developers.googleblog.com) was found in search but NOT opened, so the retirement date is not recorded in the JSON.
- Roo Code: Pinggy lists it as "archived" (third-party; not checked on an official page). — [Pinggy](https://pinggy.io/blog/best_ai_tools_for_coding/)
- JetBrains AI / Junie: only a short "Also worth knowing" mention in one roundup (Autonomous). — [Autonomous](https://www.autonomous.ai/ourblog/top-ai-tools-for-coding)
- Amp, Augment Code, Warp, Tabnine: each in 1 to 2 of the six roundups (Amp: Pinggy, Bitdoze; Augment: LeadDev honorable mention, Bitdoze; Warp: Pinggy honorable mention; Tabnine: Zapier, LeadDev).
- Mistral Vibe (category 1) also has terminal and IDE coding surfaces; it stays in category 1.
- Replit, v0, Lovable appear in coding roundups but belong to categories 11 / 5.

### Inferences
- Zed was picked over Kiro-like alternates because it adds a different kind of tool (a fast editor that hosts other agents) and has an official free-for-students Pro plan.

### Gaps
- Status of Roo Code, Amp, Warp, Tabnine not checked on official pages.

## Review roundups counted (independence assessment)

### Takeaway
Six independent roundups inside 2025-11-18 to 2026-11-18. Rule: value true at 5 or more of 6.

### Cited Findings
1. Zapier, Nicole Replogle, "March 16, 2026" (no updated date shown, but text already names "Devin Desktop (formerly Windsurf)", so updated after June 2, 2026). "We're never paid for placement". Independent (Zapier sells automation, promotes own MCP/SDK). Covers Cursor, Codex, Claude Code, GitHub Copilot, Devin Desktop, plus Replit, v0, Amazon Q, Tabnine. — [Zapier](https://zapier.com/blog/ai-coding-tools/)
2. LeadDev, Kimberly Harrison, "March 25, 2026", modified 2026-03-30. No disclosure; independent (media/events). Covers Cursor, Claude Code, GitHub Copilot (Workspace), Windsurf; honorable mentions incl. OpenAI Codex CLI, Google Antigravity, Augment, Tabnine. — [LeadDev](https://leaddev.com/ai/best-ai-coding-assistants)
3. Tech Insider, Elias Virtanen, "July 22, 2026", modified September 17, 2026. No disclosure seen. Covers Cursor, GitHub Copilot, Windsurf, Claude Code, Cline, Aider, Continue. — [Tech Insider](https://tech-insider.org/best-ai-coding-assistants-2026/)
4. Pinggy blog, published 2025-08-17, "Updated September 9, 2026". Independent (sells tunnels; self-promotion only). Full reviews: Cursor, Antigravity, GitHub Copilot, Cline, Zed, Kiro, Claude Code, OpenAI Codex, Amp, Antigravity CLI and others; honorable mentions Warp, Devin; mentions Windsurf renamed, Gemini CLI retired, Roo Code archived. — [Pinggy](https://pinggy.io/blog/best_ai_tools_for_coding/)
5. Bitdoze, Dragos, "August 12, 2026". CAVEAT: "this guide contains referral links"; counted because it is a personal review blog, not mainly an affiliate list and not a seller of the tools. Covers GitHub Copilot, Cline, Augment, Amp, Cursor, Devin Desktop, Zed, Kiro, Claude Code, OpenAI Codex, Google Antigravity and others. — [Bitdoze](https://www.bitdoze.com/ai-coding-tools/)
6. Autonomous (autonomous.ai blog), Daniel Anderson, "Oct 20, 2026". No affiliate disclosure; promotes its own non-coding products. Covers Claude Code, Codex, Cline, Cursor, Devin Desktop, Google Antigravity, Kiro, GitHub Copilot, Zed; Junie short mention. — [Autonomous](https://www.autonomous.ai/ourblog/top-ai-tools-for-coding)
- Not counted: eWeek "AI Coding Tools" (Kezia Jungco, "Oct 3, 2025", outside window; advertiser disclosure). — [eWeek](https://www.eweek.com/news/news-ai-tools-for-coding/). Upwork "15 Top AI Coding Tools" (no date; Upwork says it is an OpenAI partner). — [Upwork](https://www.upwork.com/resources/best-ai-coding-tools)
- Counts (of 6): Cursor 6, GitHub Copilot 6, Claude Code 6, Devin (incl. Windsurf / Devin Desktop) 6, Codex 5 (not Tech Insider), Google Antigravity 4 (LeadDev, Pinggy, Bitdoze, Autonomous), Cline 4 (Tech Insider, Pinggy, Bitdoze, Autonomous), Kiro 3 (Pinggy, Bitdoze, Autonomous), Zed 3 (same three).

### Inferences
- Devin's 6 relies on counting Windsurf / Devin Desktop coverage (5) plus Pinggy's Devin honorable mention. Counting only the cloud agent Devin by name it would be 1 to 2.

### Gaps
- Several "roundups" in search results were vendor content (Qodo, Zencoder, Verdent, PlayCode, Sourcegraph) and were not used.

## Popularity (a16z)

### Takeaway
Only Cursor (#35) and Google Antigravity (named, no rank) are on the a16z 7th edition web list.

### Cited Findings
- a16z "Top 100 Gen AI Consumer Apps", 7th edition, posted October 5, 2026 (updated October 6), Similarweb web data as of August 2026: "Cursor moved from #41 to #35"; "Google alone has five web entries: Gemini, NotebookLM, AI Studio, Labs, and Antigravity". GitHub Copilot, Claude Code, Codex, Windsurf, Devin, Cline, Kiro, Zed not mentioned. — [a16z 7th](https://a16z.com/100-gen-ai-apps-7/)

### Inferences
- popular = true for cursor and google-antigravity; false for the rest.

### Gaps
- Rank of Antigravity is in an image and was not read.

## Per tool: pricing, free tier, training, versions, students

### Takeaway
Two coding products are sold only inside assistant subscriptions (Claude Code, Codex). Training on user code is on by default with opt-out for GitHub Copilot Free/Pro/Pro+, Kiro Free/individual, Antigravity (personal accounts) and ChatGPT personal plans (Codex coverage not stated); Claude depends on a user choice; Cursor avoids training only with Privacy Mode (individual default not stated). Official student offers: Copilot Student (free), Kiro Students (1,000 credits/month for a year), Zed Student (Pro free for a year). No source mentions Hebrew for any tool.

### Cited Findings

#### Cursor
- The X Subscription for new customers: Free $0; Plus $8/mo or $80/yr; Premium $30/$300; Super $100/$1,000; Ultra $200/$2,000; Teams $30/$100/$200 per seat/mo; Enterprise contact sales; prices exclude tax. Legacy plans (no longer offered): Hobby free, Pro $20, Pro+ $60, Ultra $200, Teams Standard $40, Premium $120, Start (India) ₹649. Free: "access to Cursor's core features with limited usage"; Agent, Chat, Tab with Cursor models (Grok and Composer). — [Cursor pricing help](https://cursor.com/help/account-and-billing/pricing)
- The X Subscription: "one subscription that brings Grok, Cursor, and X together"; weekly shared usage pool; switching is optional and permanent. — [X Subscription overview](https://cursor.com/help/the-x-subscription/overview)
- "Cursor has officially been acquired by SpaceX", "Aug 14, 2026". — [Cursor blog](https://cursor.com/blog/joining-spacex)
- Privacy Mode: "your code is never used for training by Cursor or other AI model providers"; on by default for teams and Enterprise; individual default not stated. — [Cursor privacy](https://cursor.com/help/security-and-privacy/privacy)
- Cursor 3, "Apr 2, 2026": Agents Window, Design Mode, Agent Tabs. — [Cursor 3](https://cursor.com/changelog/3-0)
- Logo page: https://cursor.com (brand page not located).

#### GitHub Copilot
- Free $0 (2,000 completions/month, limited chat and agent, agent mode, Copilot CLI); Pro $10 (1,500 AI credits: 1,000 base + 500 flex); Pro+ $39 (7,000); Max $100 (20,000); no yearly prices shown; Student free for verified students (auto model selection, no third-party agents); teachers and popular OSS maintainers "may be eligible" for free Pro. — [GitHub plans](https://github.com/features/copilot/plans); [GitHub Docs individual plans](https://docs.github.com/en/copilot/concepts/billing/individual-plans)
- Training: from April 24 (2026), Free/Pro/Pro+ interaction data "will be used to train and improve our AI models unless they opt out"; Business/Enterprise not affected. Post dated March 25, 2026. — [GitHub blog](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/)
- Copilot Student: activated via GitHub Education; "GitHub reevaluates your eligibility every month". — [GitHub Docs student](https://docs.github.com/copilot/how-tos/manage-your-account/free-access-with-copilot-student)
- Copilot app Ignite releases, "November 17, 2026": Azure DevOps (preview), browser use (preview), GHES GA; browser use also in Copilot CLI, VS Code, JetBrains. — [GitHub changelog](https://github.blog/changelog/2026-11-17-github-copilot-app-microsoft-ignite-releases/)
- Logo page: https://brand.github.com (not opened).

#### Claude Code
- Included in Pro, Max, Team, Enterprise; not Free; "Claude Code is included in all paid plans". Pro $20 monthly or $17/mo annual ($200 up front); Max from $100; Team Standard $25/$20, Premium $125/$100; Enterprise US$20/seat/mo annual, 20-seat minimum plus API usage. Shares limits with chat; 5-hour window plus weekly limits. Ultra not on this page view. — [Claude pricing (code)](https://claude.com/pricing?mode=code)
- Surfaces: terminal (macOS, Linux, WSL, Windows), VS Code and Cursor extension, JetBrains plugin, desktop app (macOS, Windows, Linux beta; paid subscription required), web (claude.ai/code), Claude iOS/Android apps; Agent SDK. — [Claude Code docs](https://code.claude.com/docs/en/overview)
- Training (consumer, incl. coding sessions): used if "You choose to allow us"; default not stated; March 16, 2026. — [Anthropic Privacy Center](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)
- Logo page: https://www.anthropic.com (press kit not opened).

#### Codex
- Free $0, Go $8, Plus $20, Pro from $100 ($100/$200/$500), Business $25 monthly / $20 annual per user (2+), Enterprise & Edu contact sales. Free and Go: "GPT-6 Luna at Standard speed in the desktop app, subject to rollout". Plus: e.g. GPT-6.1 Sol 15-160 local messages per 5 hours, "not fixed message limits". Pro: "no five-hour limit". Promotions: GPT-5.6 Sol promo "at least through November 21, 2026"; GPT-6.2 overages 3x through February 28, 2027, 6x from March 1, 2027. — [Codex pricing](https://learn.chatgpt.com/docs/pricing)
- Changelog: 2026-11-17 "GPT-6.2 Astra and GPT-6.2 Sol in Work and Codex"; Codex CLI 0.170.0 on 2026-11-18; surfaces: Codex app (macOS, Windows), CLI, IDE extension, Codex Cloud / web, ChatGPT mobile. — [Changelog](https://learn.chatgpt.com/docs/changelog)
- Training: personal plans trained on "unless you opt out"; business and API off by default; page doesn't mention Codex; updated March 13, 2026. — [OpenAI policy](https://openai.com/policies/how-your-data-is-used-to-improve-model-performance/)
- Logo page: https://openai.com/brand/ (not opened).

#### Devin (with Devin Desktop, formerly Windsurf)
- Free $0 (light agent quota, limited models, unlimited inline edits and Tab); Pro $20 (frontier models from OpenAI, Claude, Gemini, SpaceXAI; SWE-2; Devin Cloud); Max $200; Teams $80/month plus $40 per dev seat; Enterprise. Quotas refresh "on a daily and weekly basis". — [Devin pricing](https://devin.ai/pricing)
- New self-serve plans, "2026.04.14", by "The Cognition Team"; Teams described there as "Usage based, with a minimum spend of $80/month" (conflict with pricing page). — [Cognition blog](https://cognition.com/blog/new-self-serve-plans-for-devin)
- Rename: "On June 2, 2026, Windsurf is becoming Devin Desktop"; apps for macOS, Windows, Linux. — [Devin Desktop FAQ](https://docs.devin.ai/desktop/devin-desktop-faq)
- Logo page: https://devin.ai (not opened).

#### Google Antigravity
- Personal accounts without Pro/Ultra: "A meaningful quota, refreshed weekly"; Pro: quota refreshed every five hours up to a weekly limit; Ultra: highest; Workspace plans don't include Antigravity plans. — [Antigravity plans](https://antigravity.google/docs/plans/)
- US prices: Google AI Plus $4.99 (no Antigravity mention), Pro $19.99 ("Entry rate limits to agent model in Google Antigravity"), Ultra from $99.99 and $199.99. — [Google AI subscriptions](https://gemini.google/subscriptions/)
- 2.0: "May 19, 2026", standalone desktop app for macOS, Linux, Windows; CLI, SDK and API launched alongside; IDE launched "November 2025". — [Antigravity 2.0](https://antigravity.google/blog/introducing-google-antigravity-2/)
- Terms: "We use Interactions to evaluate, develop, and improve Google and Alphabet research, products"; human review; preference in settings; no output-ownership clause; no last-updated date. — [Antigravity terms](https://antigravity.google/terms/)
- Logo page: https://antigravity.google (not opened).

#### Cline
- Free open source (VS Code extension, CLI, inference at cost or BYOK, MCP Marketplace); Enterprise custom (adds JetBrains extension, SSO). "There are no subscriptions or seat fees for the open source version." — [Cline pricing](https://cline.bot/pricing)
- Cline 2.0 on the Cline SDK, May 13, 2026; SDK powers VS Code, JetBrains, CLI. — [Cline blog](https://cline.bot/blog/introducing-cline-sdk-the-upgraded-agent-runtime)
- Telemetry on by default, excludes code and prompts except via Cline and ClinePass providers; opt-out instructions. Training not addressed. — [Cline telemetry](https://docs.cline.bot/more-info/telemetry)
- Logo page: https://cline.bot (not opened).

#### Kiro
- Free $0 (50 credits/month, open-weight models and Claude Sonnet 4.5); Pro $20 (1,000); Pro+ $40 (2,000); Pro Max $100 (5,000); Power $200 (10,000); add-on $0.04/credit; Teams $20/seat with 500 credits; first upgrade: rest of month free plus 500 trial credits. Monthly only. — [Kiro pricing](https://kiro.dev/pricing/)
- Training: Free tier and individual subscribers' content may be used for service improvement "for model training"; opt-out in Settings; Enterprise and Q Developer Pro excluded. — [Kiro data protection](https://kiro.dev/docs/privacy-and-security/data-protection/)
- Students: 1,000 credits/month for one year, 18+, listed universities, SheerID. — [Kiro students](https://kiro.dev/students/)
- IDE 1.4.0 "Oct 19, 2026"; latest 1.4.215 "Nov 16, 2026"; Windows x64/ARM64 installers, Ubuntu .deb. — [Kiro IDE changelog](https://kiro.dev/changelog/ide/)
- Logo page: https://kiro.dev (not opened).

#### Zed
- Personal $0 "Free forever" (unlimited with own API keys or external agents); Pro $10/month (unlimited edit predictions, $5 tokens, overage at API price +10%, 14-day trial no card); Business $30/seat. — [Zed pricing](https://zed.dev/pricing)
- Students: "Zed Pro is free for one year", "$10/month in token credits", 18+, accredited university; excludes Claude Fable, Claude Opus, GPT Pro. — [Zed education](https://zed.dev/education)
- Zed 1.0, "April 29th, 2026", macOS, Windows, Linux; Agent Client Protocol (Claude Agent, Codex, OpenCode, Cursor); company "Zed Industries". — [Zed 1.0](https://zed.dev/blog/zed-1-0)
- Logo page: https://zed.dev (not opened).

### Inferences
- Copilot's "latest version" is the November 17, 2026 app update; it is a feature release rather than a major version, recorded as such.
- Devin's new_notable is left null: the June 2 rename is not a new version per the FAQ, and no dated significant version was read.
- Claude Code's new_notable is left null: the changelog's latest entry is 2.1.311, "October 26, 2026" (2.1.310 October 23, 2.1.309 October 22), all routine 2.1.x updates; no x.0 release is listed in the part read, so no significant version date is recorded. — [Claude Code changelog](https://code.claude.com/docs/en/changelog)

### Gaps
- Hebrew: no supported-languages page was found or read for any of the nine tools; all are "המקור לא מזכיר עברית".
- Commercial-use terms not read for any tool.
- Cursor student offer: only a community forum thread found (not official, not read); no official page states a current student price.
- Codex for Students: the pricing page links a community program with no details; the OpenAI help article "Codex credits for Students - Terms of Service" was found in search but not opened.
- Company countries not taken from any page: all null.

## Browser gaps (official pages not read)
- https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan (site error)
- https://help.openai.com/en/articles/20001147-codex-credits-for-students-terms-of-service (not opened, budget)
- https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-max-or-ultra-plan (not opened; title says "Pro, Max, or Ultra" while the pricing page shows only Max)
- https://x.ai/news/x-subscription (quota)
- https://github.blog/changelog/2026-06-17-github-copilot-app-generally-available/ (not opened)
- https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ (not opened)
- https://forum.cursor.com/t/student-verification-faqs/160775 (community, not opened)
- https://zed.dev/education FAQ answers on verification and international students did not render
- Privacy / terms pages not read: https://cline.bot/tos, Devin privacy policy (linked from cognition.com footer), Zed privacy page, Cursor terms, GitHub terms, Kiro terms
- Supported-languages pages: none located for any tool
