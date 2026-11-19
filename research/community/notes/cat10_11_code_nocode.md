# Categories 10-11: Code/developer assistants (10) and building apps without code (11) — independent evidence as of 2026-11-18

Method note: 22 page fetches used (1 failed: aimagazine.com). All pages read on 2026-11-18. "READ" = seen on the fetched page. "INFERRED" = from a search-result title/snippet only, not opened. "Assumption" = not verified. Items dated before 2026-05-18 are flagged "STALE?" (older than 6 months). Not read: Reddit (blocked), YouTube, PCMag/CNET, Hacker News (search returned no HN thread, so no fetch was spent), Product Hunt, Capterra. diyai.io not used.

Weighting of sources used in the tallies:
- HIGH (survey data / hands-on testing described): Stack Overflow Survey 2026, JetBrains Dev Ecosystem 2026, Pragmatic Engineer 2026 survey, Zapier (3 articles, testing described), a16z Top 100 (usage data).
- MEDIUM: TechRadar (says it tested, method loosely described), G2 Learn (aggregated reviews), Trustpilot (unverified user reviews), The New Stack (analysis, no testing).
- LOW: Designlab (design school, no testing, roundup of others' reviews — but relevant to the design-student audience), StartupHub.ai (no hands-on testing, vendor pages + SimilarWeb; used only for the long list, prices and dates). Vendor-owned "best X" pages (lovable.dev guides, verdent.ai, qodo.ai, playcode.io, superblocks, morphllm, manus.im, zencoder) appeared in search but were NOT used: vendor-written or likely affiliate.

---

## Q1. Long list — who is in the field (Category 10: code/developer assistants)

### Takeaway
The independent sources name about 20 tools. A small core shows up in nearly every source: Claude Code, GitHub Copilot, Cursor and OpenAI Codex. Google Antigravity, OpenCode and Gemini CLI form a second tier. The rest appear in only one or two sources.

### Cited Findings
- Claude Code (Anthropic): terminal/IDE coding agent. #1 in the SO 2026, JetBrains 2026 and Pragmatic Engineer surveys — READ, [SO](https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/), [JetBrains](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/), [Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026?open=false)
- GitHub Copilot: IDE assistant plus coding agent. #2 in SO 2026 (59%) — READ, [SO](https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/)
- Cursor: AI IDE, a VS Code fork. Model-agnostic, with its own Composer model — READ, [The New Stack](https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/)
- OpenAI Codex (CLI, IDE and cloud): bundled with ChatGPT plans — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools)
- Google Antigravity: Google's agentic IDE, launched 2025-11-18 with Gemini 3. Version 2.0 rebuilt it — READ, [The New Stack](https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/)
- Gemini CLI: Google's terminal agent. About 10% usage in the Pragmatic Engineer survey — READ, [PE](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026?open=false)
- OpenCode: open-source terminal agent. 7% work usage (JetBrains) — READ, [JetBrains](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/)
- JetBrains AI / Junie: about 9% work usage — READ, [JetBrains](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/)
- Devin Desktop (formerly Windsurf) and Devin (Cognition): "best for advanced code research" per Zapier. Cognition is on the a16z spend list — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools), [a16z](https://a16z.com/100-gen-ai-apps-7/)
- Amazon Q Developer: best for AWS (Zapier). Kiro (Amazon) has a G2 page but was not read — READ / INFERRED, [Zapier](https://www.zapier.com/blog/ai-coding-tools), [G2 Kiro (title only)](https://www.g2.com/products/kiro-ai/reviews)
- Tabnine: enterprise, "expensive" — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools)
- Replit and v0 also appear in coding roundups (Replit as "best for beginners") — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools)
- Zed, Cline, RooCode, Continue.dev, Warp, Amp: each named as "most loved" by 2+ respondents in the Pragmatic Engineer survey (small numbers) — READ, [PE](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026?open=false)
- Augment Code, Factory: mentioned as appearing less often in the PE survey — READ, [PE](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026?open=false)
- Grok Build (xAI): beta from May 2026 for SuperGrok users. About 70.8% on SWE-bench Verified according to early third-party write-ups — READ (second-hand), [The New Stack](https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/)
- Jules (Google async agent): only a changelog page seen in search, dated 2025-11 — INFERRED, STALE?, [jules.google](https://jules.google/docs/changelog/2025-11-19)
- Amp, Capy, OpenHands, Factory, Nova: cloud "AI software engineer" agents — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Chatbots (ChatGPT, Claude, Gemini) used for code: #2 by combined mentions in the PE survey. G2 lists ChatGPT, Claude and Gemini as Grid Leaders in AI code generation — READ, [PE](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026?open=false), [G2 Learn](https://learn.g2.com/ai-code-generation)

### Inferences
- For the atlas, the main entries are Claude Code, Cursor, GitHub Copilot, Codex and Antigravity. Gemini CLI, OpenCode, JetBrains AI, Devin/Windsurf and Amazon Q/Kiro are secondary.

### Gaps
- Zed, Cline and Kiro have no independent roundup verdicts in the pages read. Only survey mentions or titles were found.

---

## Q1b. Long list — Category 11: building apps without code

### Takeaway
The field has about 25 tools. Hands-on roundups centre on Lovable, Bolt, v0, Replit and Base44. Design-oriented sources add Figma Make. Traditional no-code tools (Softr, Bubble, Glide, Airtable, Power Apps, Retool) appear in a separate Zapier list.

### Cited Findings
- Lovable: chat-built full-stack web apps with hosting, database and auth — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Bolt.new: web plus mobile (Expo). bolt.diy is the open-source version and is now in maintenance mode — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Replit (Agent): web plus native mobile, publishes to App Store Connect — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Base44: web apps with built-in backend. TechRadar notes it was "acquired" (future uncertain) — READ, [TechRadar](https://techradar.com/pro/best-vibe-coding-tools)
- v0 by Vercel: Next.js UI and apps — READ, [Zapier vibe](https://zapier.com/blog/best-vibe-coding-tools/)
- Figma Make: prompt-to-prototype and web apps inside Figma — READ, [Designlab](https://designlab.com/blog/best-vibe-coding-tools)
- Google AI Studio (Build): free builder for React/Node web apps and Kotlin Android apps. Firebase Studio closed to new users on 2026-06-22 and shuts on 2027-03-22 — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Magic Patterns: UI prototypes from a design system. MagicOS launched 2026-10-13 — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Bubble (now generates apps from a prompt), Softr, Airtable Omni, Microsoft Power Apps, Retool — READ, [Zapier app builders](https://www.zapier.com/blog/best-ai-app-builder)
- Glide: mentioned only as an option for adding AI features — READ, [Zapier app builders](https://www.zapier.com/blog/best-ai-app-builder)
- Rocket, Dyad (open source, BYO key) — READ, [Zapier vibe](https://zapier.com/blog/best-vibe-coding-tools/)
- Hostinger Horizons (replaced by "Hostinger AI Builder" on 2026-08-18), Wix Harmony, OutSystems, Dazl, Tempo, HeyBoss — READ, [TechRadar](https://techradar.com/pro/best-vibe-coding-tools), [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Emergent, Anything (formerly Create), Macaly, Trickle, Leap.new, Rork (native mobile), Jotform AI App Generator, Manus (general agent that builds apps) — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Claude Code and Cursor are recommended to non-developers or designers by Designlab — READ, [Designlab](https://designlab.com/blog/best-vibe-coding-tools)

### Inferences
- Firebase Studio should not be listed as a recommended tool. It is closed to new users. Google AI Studio Build replaces it.

### Gaps
- Glide and Softr have no AI-builder verdicts beyond Zapier.

---

## Q2. Recommendation tally (tool x source)

### Takeaway
**Category 10:** Claude Code has the strongest independent evidence. It is #1 in all three 2026 developer surveys and is recommended in 6 of 8 sources. Cursor is the most widely recommended IDE (7 of 8 sources), but its work usage is falling. GitHub Copilot remains #2 by usage and awareness, and it has the most generous free and student plans. Codex is the fastest riser.

**Category 11:** Replit (5–6 sources) and Lovable (4 sources, plus a Trustpilot score of 4.2) lead. Bolt and v0 follow with 3 each, then Base44 with 2. For design students specifically, Lovable ("ease of use", "best for designers") and Figma Make are the picks named for designers.

### Cited Findings — Category 10 table (all READ)

| Tool | SO Survey 2026 (Oct 6) | JetBrains 2026 (Aug) | Pragmatic Eng. (Mar 3, STALE?) | Zapier coding (Mar 16, STALE?) | The New Stack (Jun 1) | G2 Learn (Aug 30) | Designlab (May 12) | a16z 7th (Oct 5) | Count |
|---|---|---|---|---|---|---|---|---|---|
| Claude Code | Agent of choice 66% | #1 at work 39% (from 18%) | #1 used; most loved 46% | Best for large codebases | Best for deep reasoning / large codebases | Claude: Grid Leader, NPS 90 | For designers building real products | Claude on list | **8** (6 for Claude Code specifically) |
| Cursor | not named | 12% (from 18%), awareness 75% | Loved 19%, used 39% | Best for complex multi-file / agentic | Best for model choice, no lock-in | 290 reviews; complaint: loses context | Optional companion | #35 web (from #41) | **7** |
| GitHub Copilot | 59% | 21% (from 29%), awareness 79% | Used 46%, loved 9%; most loved at large companies | Best for pair programming | Briefly mentioned | Accuracy about 4.2/5 | — | — | **6** |
| OpenAI Codex | — | 16% (from 3%), awareness 65% | About 60% of Cursor's usage | Best for OpenAI-first teams | Fastest reach; 4M+ weekly devs | (ChatGPT Grid Leader) | — | — | **4** |
| Google Antigravity | — | 6% (India 15%), awareness 47% | About 10% | — | For Google Cloud / Android; preview risk | (Gemini Grid Leader) | — | On list | **4** |
| OpenCode | — | 7% | About 10–13% | — | — | — | — | — | 2 |
| Gemini CLI | — | — | About 10–14% | — | — | — | — | — | 1 |
| JetBrains AI / Junie | — | About 9% | — | — | — | — | — | — | 1 |
| Devin / Windsurf | — | — | Windsurf "less often" | Devin Desktop: code research | — | — | — | Cognition on spend list | 2 |
| Amazon Q Developer | — | — | — | Best for AWS | — | — | — | — | 1 |
| Tabnine | — | — | — | Enterprise | — | — | — | — | 1 |
| Replit (as coding tool) | — | — | — | Best for beginners | — | Grid Leader, 315 reviews | (see cat 11) | On list | 3 |
| v0 | — | — | — | Best for polished UI fast | — | — | — | — | 1 |
| Zed / Cline / Warp / Amp | — | — | Loved by 2+ respondents each | — | — | — | — | — | 1 each |

Sources: [SO](https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/) · [JetBrains](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/) · [Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026?open=false) · [Zapier coding](https://www.zapier.com/blog/ai-coding-tools) · [The New Stack](https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/) · [G2 Learn](https://learn.g2.com/ai-code-generation) · [Designlab](https://designlab.com/blog/best-vibe-coding-tools) · [a16z](https://a16z.com/100-gen-ai-apps-7/)

### Cited Findings — Category 11 table (all READ)

| Tool | Zapier vibe coding (Jul 19) | Zapier app builders (Jun 24) | TechRadar (Feb 18, STALE?) | Designlab (May 12) | Zapier coding (Mar 16, STALE?) | a16z 7th (Oct 5) | G2 Learn (Aug 30) | Trustpilot (read Nov 18) | Count of recommending sources |
|---|---|---|---|---|---|---|---|---|---|
| Replit | Best for multi-platform | — | Best for rapid prototyping | For students and educators | Best for beginners | On web list + spend list | Grid Leader | 2.8/5 (1,559 reviews) | **5** (+G2) |
| Lovable | Best for ease of use | — | Best for design-driven startups | Best for designers prototyping | — | On web list + spend list | — | 4.2/5 (1,894 reviews) | **4** (+Trustpilot) |
| Bolt | Best for flexibility / speed | — | Best for lightweight development | For Figma imports / landing pages | — | Not on list | — | not read | **3** |
| v0 | Best for clear building process | — | **Best overall** | — | Best for polished UI fast | Not on list | — | not read | **3** |
| Base44 | — | — | Best for backend functionality | — | — | Debut #46 | — | not read | **2** |
| Figma Make | — | — | — | For designers starting from Figma | — | — | — | — | 1 |
| Google AI Studio | — | — | — | — | — | On list | — | — | 1 (popularity only) |
| Bubble | — | Best for MVPs, web and mobile | — | — | — | — | — | — | 1 |
| Softr | — | Best for ease of use / speed | — | — | — | — | — | — | 1 |
| Claude Code (for non-coders) | Excluded (too technical) | — | — | For designers building real products | — | — | — | — | 1 |
| Rocket / Dyad | Business / open-source pick | — | — | — | — | — | — | — | 1 each |
| Hostinger, Wix Harmony, OutSystems, Dazl, Tempo, HeyBoss | — | — | 1 each | — | — | — | — | — | 1 each |
| Airtable Omni, Power Apps, Retool | — | 1 each | — | — | — | — | — | — | 1 each |

Sources: [Zapier vibe coding](https://zapier.com/blog/best-vibe-coding-tools/) · [Zapier app builders](https://www.zapier.com/blog/best-ai-app-builder) · [TechRadar](https://techradar.com/pro/best-vibe-coding-tools) · [Designlab](https://designlab.com/blog/best-vibe-coding-tools) · [Zapier coding](https://www.zapier.com/blog/ai-coding-tools) · [a16z](https://a16z.com/100-gen-ai-apps-7/) · [G2 Learn](https://learn.g2.com/ai-code-generation) · [Trustpilot Lovable](https://www.trustpilot.com/review/lovable.dev?page=1) · [Trustpilot Replit](https://www.trustpilot.com/review/repl.it)

- "Best overall" labels found: v0 (TechRadar, Feb 2026). No other source read gives an explicit "best overall" in either category. Zapier uses "best for X" labels only — READ.
- "Best for beginners" labels: Replit (Zapier coding); Lovable "ease of use" (Zapier vibe); Lovable "best for designers prototyping" (Designlab); Softr "ease of use and speed" (Zapier app builders) — READ.
- "Best free" labels: none of the sources read uses an explicit "best free" label — READ (absence).

### Inferences
- No single "best overall" consensus exists in category 11. The convergent picks are Lovable (beginner / designer ease) and Replit (breadth). v0's "best overall" comes from one older source.
- The search surfaced many vendor-written roundups (lovable.dev, verdent.ai, qodo.ai, playcode.io, superblocks, morphllm, manus.im). They were excluded, so the tallies above are smaller than a naive web count but cleaner.

### Gaps
- Fewer than six fully hands-on, tested roundups exist for category 10 among the pages read: Zapier plus TechRadar-style testing. The survey sources make up the difference.
- No Tom's Guide or ZDNet 2026 coding roundup was found in search. InfoWorld was not checked because of the fetch budget.

---

## Q3. Objective evidence: surveys, benchmarks, arenas

### Takeaway
All three 2026 developer surveys agree: Claude Code is #1 by usage and love. Copilot is #2 by usage but declining. Codex is rising fast. Cursor is highly visible but its share is falling. Benchmark leaderboards could not be read reliably for November 2026.

### Cited Findings
- Stack Overflow Developer Survey 2026 (post dated 2026-10-06; 30,000+ respondents): "agents of choice" Claude Code 66%, GitHub Copilot 59%. 66% of AI users use coding agents. 73% of assistant users use them daily. 62% view AI at least somewhat positively. 93% say source attribution is needed to trust AI output. Anthropic and OpenAI models have similar usage, with Google a distant third. The post does not name Cursor or Codex — READ, [SO](https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/)
- JetBrains Developer Ecosystem 2026 (15,000+ professional developers, fielded May–Jul 2026): 90% use AI agents weekly and 68% daily. Work usage: Claude Code 39% (31% call it their most-used tool; US 47%), Copilot 21% (from 29% a year earlier), Codex 16% (from 3% in Jan 2026), Cursor 12% (from 18%), JetBrains AI about 9%, OpenCode 7%, Antigravity 6%. Awareness: Copilot 79%, Cursor 75%, Codex 65%, Antigravity 47%, OpenCode 42% — READ, [JetBrains](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/)
- Pragmatic Engineer AI tooling survey (906 responses, fielded Jan–Feb 2026, published 2026-03-03; STALE?): Claude Code #1. Among agent users: Claude Code 71%, Copilot 46%, Cursor 39%. Most loved: Claude Code 46%, Cursor 19%, Copilot 9%. Opus 4.5 and Sonnet 4.5 have more mentions than all other models combined — READ, [PE](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026?open=false)
- LMArena WebDev leaderboard: the fetched page showed "Last updated Jan 9, 2026" with #1 Anthropic (1511), #2 OpenAI (1481), #3 Anthropic, #4 Google (1468). Model names were not extracted. Treat this as STALE and unreliable for November 2026 — READ, [LMArena](https://lmarena.ai/leaderboard/webdev)
- SWE-bench Verified: not fetched. A search title claims "GPT-5.5 leads at 88.7%" in May 2026 — INFERRED, STALE?, [marc0.dev via search](https://hn.jakechampion.name/reader/https://www.marc0.dev/en/leaderboard). The New Stack says leading SWE-bench Verified scores sat in a "narrow band" in mid-May 2026 — READ, [TNS](https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/)
- Sonar's independent evaluation of Claude Opus 5.5 (2026-09-22, pre-release build): 87.68% pass rate on 544 HumanEval/MBPP tasks, versus 88.6% for Opus 5. No comparison with GPT or Gemini — READ, [Sonar](https://www.sonarsource.com/blog/claude-opus-5-5-an-evaluation/)
- a16z Top 100 7th edition (2026-10-05): Cursor #35 on web (from #41). Base44 debuts at #46. Lovable, Replit, Google AI Studio, Google Antigravity and Claude are on the list (ranks only in charts, which could not be read). Codex, Bolt and v0 are absent. Cognition, Replit and Lovable are on the separate top-50 spend list. "Coding and technical automation" was the most discussed agent task — READ, [a16z](https://a16z.com/100-gen-ai-apps-7/)

### Inferences
- The survey evidence for Claude Code as "stands out / popular among developers" is strong and consistent across three independent surveys with different samples.

### Gaps
- Design Arena was not checked (budget).
- The current SWE-bench Verified and LMArena WebDev rankings for November 2026 were not verified.
- Stack Overflow's per-tool "admired" percentages were not on the results summary page.

---

## Q4. Review-platform scores

### Takeaway
Trustpilot sharply separates Lovable (4.2) from Replit (2.8). In both cases the complaints are billing and credits. G2 favours Claude (NPS 90) among code-generation Grid Leaders.

### Cited Findings
- Trustpilot, Lovable (lovable.dev), read 2026-11-18: TrustScore 4.2/5 "Great", 1,894 reviews (1,177 in the last 12 months). 69% 5-star, 17% 1-star. Praise: easy for non-coders. Complaints: support, credits running out or expiring, billing, bugs, lock-in — READ, [Trustpilot](https://www.trustpilot.com/review/lovable.dev?page=1)
- Trustpilot, Replit, read 2026-11-18: TrustScore 2.8/5 "Average", 1,559 reviews (454 in the last 12 months). 43% 5-star, 34% 1-star. Complaints: unexpected charges and overages, agent burning credits in loops, agent claiming fixes it did not make, support, cancellation — READ, [Trustpilot](https://www.trustpilot.com/review/repl.it)
- G2 Learn "AI Code Generation: what 3,000+ G2 reviews reveal" (2026-08-30; snapshot from 2026-08-20). Grid Leaders: ChatGPT (G2 Score 96.8, NPS 82, 1,026 reviews), Claude (NPS 90, 192 reviews, accuracy 4.6/5), Replit (G2 Score 77.7, 315 reviews), Gemini. Cursor has 290 reviews; its complaint is losing context and suggesting invented or deprecated libraries. Copilot accuracy is about 4.2/5. Lovable, Windsurf, Tabnine and Bolt are not covered — READ, [G2 Learn](https://learn.g2.com/ai-code-generation)

### Gaps
- No star ratings were read for Cursor, Copilot, Bolt, Base44, v0 or Figma Make on G2, Capterra, Trustpilot or Product Hunt (budget). Product Hunt was not checked.

---

## Q5. Popularity evidence (users, ARR, a16z)

### Takeaway
Third-party data (a16z, surveys) confirms that Cursor, Claude Code, Lovable, Replit, Base44 and Google AI Studio / Antigravity are popular. Revenue numbers are mostly vendor-announced or from anonymous sources.

### Cited Findings
- Cursor: annualized revenue above $2B (Bloomberg, unnamed source, 2026-03-02; third-party, STALE?). About 60% of revenue is corporate — READ, [Dataconomy](https://dataconomy.com/2026/03/03/cursor-hits-2-billion-in-annual-revenue-as-run-rate-doubles/). a16z web rank #35 (third-party) — READ, [a16z](https://a16z.com/100-gen-ai-apps-7/)
- Codex: more than 3M weekly developers in mid-April 2026 and more than 4M by late May (likely vendor-announced; TNS does not say) — READ, [TNS](https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/)
- Lovable: a search title says it "crosses US$600m ARR" (the page failed to load). Other titles mention $400M and $500M — INFERRED; vendor-announced (Assumption), [AI Magazine (title)](https://aimagazine.com/news/lovable-europes-vibe-coding-platform-crosses-us-600m-arr), [TNW (title)](https://thenextweb.com/news/lovable-build-economy-500m-arr-vibe-coding). On a16z web and spend lists (third-party) — READ
- Replit: search titles mention a "$9B valuation" (Apr 2026) and "nears $1 billion ARR" — INFERRED, [agentmarketcap (title)](https://agentmarketcap.ai/blog/2026/04/23/replit-9b-valuation-ai-app-builder-series-d), [pulse.bot (title)](https://www.pulse.bot/saas/news/replits-ai-coding-assistant-nears-1-billion-arr-boosting-saas-credibility-a1b93be4-4bf1-41bc-aa88-fe01d8c0781c/). On a16z web and spend lists — READ
- Base44: a16z debut at #46 (third-party) — READ
- Claude Code: no ARR figure read. Usage evidence comes from the surveys — READ
- GitHub Copilot, Bolt, v0, Figma Make, Windsurf: no public figure found in this run.

### Gaps
- Vendor ARR figures for Lovable and Replit were not verified on the page.

---

## Q6. Recurring complaints per leading tool

### Cited Findings
- Cursor: pricing changes and usage-based billing backlash. Multiple titles from 2025 ("Cursor apologizes for unclear pricing changes", forum "$20 Pro plan no longer viable") — INFERRED, STALE?, [Yahoo/TechCrunch (title)](https://finance.yahoo.com/news/cursor-apologizes-unclear-pricing-changes-225709399.html), [Cursor forum (title)](https://forum.cursor.com/t/disappointed-with-cursor-1-2-4-pricing-changes-20-pro-plan-no-longer-viable/117336). On G2 it loses context and suggests made-up libraries — READ, [G2](https://learn.g2.com/ai-code-generation). Steeper learning curve for newcomers and no built-in app preview — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools)
- Claude Code: terminal learning curve. Free tier "too limited for real coding". Costs escalate on Max plans — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools), [Designlab](https://designlab.com/blog/best-vibe-coding-tools). The PE survey teaser mentions engineers "hitting usage limits" (paywalled detail) — READ (teaser only), [PE](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026?open=false)
- Codex: usage limits and credits constrain heavy work. Locked to OpenAI models — READ, [TNS](https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/), [Zapier](https://www.zapier.com/blog/ai-coding-tools)
- Antigravity: the v2.0 rebuild broke setups. March 2026 backlash over credit packs and tighter quotas. /swarm can use up quota fast (Google warning, Nov 2026) — READ, [TNS](https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/), [Mixed](https://mixed-news.com/en/google-gemini-4-carbon-ai-ultra-antigravity-swarm/)
- GitHub Copilot: less codebase context than Cursor. Weaker accuracy on complex logic (G2) — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools), [G2](https://learn.g2.com/ai-code-generation)
- Lovable: high credit burn (Zapier). Code quality varies and security gaps (TechRadar). In the May 2025 audit, 170 of 1,645 apps exposed data (Designlab). TNW reports "left thousands of projects exposed for 48 days" (title only, INFERRED). Trustpilot complaints cover credits, support and lock-in — READ, [Zapier](https://zapier.com/blog/best-vibe-coding-tools/), [TechRadar](https://techradar.com/pro/best-vibe-coding-tools), [Designlab](https://designlab.com/blog/best-vibe-coding-tools), [TNW (title)](https://thenextweb.com/news/lovable-vibe-coding-security-crisis-exposed)
- Security across app builders (Axios, about May 7, 2026, from the URL; page shows no date): Red Access found about 380,000 public assets built with Lovable, Base44, Replit and Netlify, about 5,000 with sensitive corporate data, plus phishing sites hosted on Lovable. Vendors replied that public visibility is the user's choice — READ, [Axios](https://axios.com/2026/05/07/loveable-replit-vibe-coding-privacy)
- Replit: the agent says it fixed things when it didn't (Zapier twice, plus Trustpilot). Effort-based billing spikes (TechRadar). Trustpilot reports overages and cancellation problems — READ, [Zapier](https://zapier.com/blog/best-vibe-coding-tools/), [TechRadar](https://techradar.com/pro/best-vibe-coding-tools), [Trustpilot](https://www.trustpilot.com/review/repl.it)
- Bolt: trouble earlier in builds. Paid plans have no daily cap, so tokens burn fast on bugs. Struggles with large projects — READ, [Zapier](https://zapier.com/blog/best-vibe-coding-tools/), [TechRadar](https://techradar.com/pro/best-vibe-coding-tools)
- v0: restrictive free plan. UI-focused with weak backend. Steep learning curve for infrastructure — READ, [Zapier coding](https://www.zapier.com/blog/ai-coding-tools), [Zapier vibe](https://zapier.com/blog/best-vibe-coding-tools/)
- Base44: future uncertain after acquisition; security issues; limited customization — READ, [TechRadar](https://techradar.com/pro/best-vibe-coding-tools)
- Figma Make: credit pricing since March 2026 is hard to predict. Output is not editable as Figma layers. Limited full-stack — READ, [Designlab](https://designlab.com/blog/best-vibe-coding-tools)

---

## Q7. Free plans, price, value, student offers

### Takeaway
GitHub Copilot has the most usable free tier for coding (2,000 completions plus 50 chat requests a month) and a free Student plan. Google AI Studio is free for app building. Figma Make's daily credits (150/day) look generous on paper. Lovable's free tier (5 credits/day) is widely called too small. Claude Code's free access is "too limited".

### Cited Findings
- Copilot Free: 2,000 completions and 50 chat/agent requests a month. Pro costs $10/month — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools)
- Copilot Student: free, with auto model selection and 200 AI credits a month. Requires GitHub Education verification, rechecked monthly — READ, [Layer3Labs (updated 2026-11-01)](https://www.layer3labs.io/guides/ai-student-discounts). A March 2026 change removed direct access to premium models — INFERRED, [Roboin (title)](https://roboin.io/article/en/2026/03/13/github-copilot-student-plan-removes-direct-access-to-premium-models/)
- Cursor: Hobby free tier (200 completions and 50 requests a month, plus a 2-week Pro trial). Pro costs $16/month billed annually, or about $20 — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools). No active student offer as of November 2026; the 2025 free-Pro-for-students promo has expired — READ, [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts)
- Claude: no individual student discount. Pro costs $20/month ($17 billed annually). The Claude for Education campus program is closed for Fall 2026 — READ, [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts)
- OpenAI: ChatGPT Plus 4-month student offer closed on 2026-10-31. $100 in Codex credits is still open for verified US and Canadian university students — READ, [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts)
- Google AI Pro is free for 12 months for US college students aged 18+ (redeem by 2026-12-31). Non-US students get 1 year of AI Plus, with some countries excluded. Israel is not specifically confirmed (Assumption) — READ, [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts)
- Devin Desktop (formerly Windsurf) free plan has unlimited autocomplete and in-editor chat — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools)
- Amazon Q free tier: 50 agentic requests and 1,000 lines a month — READ, [Zapier](https://www.zapier.com/blog/ai-coding-tools)
- Lovable: 5 credits a day, 30 a month, free. Pro costs $25 ($21 billed annually) — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools), [Zapier vibe](https://zapier.com/blog/best-vibe-coding-tools/)
- Bolt: 1M tokens a month free (150k a day cap). Pro costs $25 ($18 billed annually) — READ, same sources
- Replit: Starter free tier with limited agent credits and 1 project. Core costs $20–25 — READ, [Zapier vibe](https://zapier.com/blog/best-vibe-coding-tools/), [TechRadar](https://techradar.com/pro/best-vibe-coding-tools)
- v0: $5 of credits and 7 messages a day free. Plus costs $30; the $20 Premium tier is closed to new users — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Base44: 25 credits a month free. Paid from $16 a month (annual) — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Figma Make: 150 AI credits a day (500 a month cap) free. Full seat costs $16 a month (annual) — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Google AI Studio Build: free, with paid plans for higher quotas — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Dyad: free and open source with your own API key. The free Gemini key lets Google train on prompts — READ, [Zapier vibe](https://zapier.com/blog/best-vibe-coding-tools/)
- Lovable is "good value on free/Pro tiers" according to some Trustpilot reviewers — READ, [Trustpilot](https://www.trustpilot.com/review/lovable.dev?page=1)
- Opposing view: Zapier calls Lovable's credit burn high and Claude Code's free tier too limited — READ

### Inferences
- "Worthwhile free plan" evidence: strong for GitHub Copilot (free tier plus Student plan) and Google AI Studio (free). Partial for Bolt (1M tokens), Figma Make (daily credits) and Devin Desktop/Windsurf. Weak or none for Lovable, v0, Claude Code and Replit.
- "Cheap/economical": Copilot Pro at $10 is the cheapest mainstream paid coding plan read. No source explicitly names a "best value" winner.

### Gaps
- No independent source explicitly labels a "best value" tool in either category.

---

## Q8. Recently released or majorly updated (approx. Aug–Nov 2026)

### Cited Findings
- Gemini 4 Carbon (2026-11-11): AI Ultra subscribers and paid API only. Antigravity /swarm multi-agent preview — READ, [Mixed](https://mixed-news.com/en/google-gemini-4-carbon-ai-ultra-antigravity-swarm/)
- Claude Opus 5.5: Sonar evaluated a pre-release build on 2026-09-22. Claude Code v2.1.316 (week of 2026-10-26) deprecates Opus 4.8 fast mode (removed 2026-11-30) and points users to Opus 5.5 — READ, [Sonar](https://www.sonarsource.com/blog/claude-opus-5-5-an-evaluation/), [releases.sh](https://releases.sh/collections/coding-agents/digest/2026-10-26.md). Exact GA date not read (INFERRED from titles: [Anthropic](https://anthropic.com/news/claude-opus-5-5), [TNS](https://thenewstack.io/claude-opus-5-5-release/?p=22837560))
- GPT-6.1 Terra added to Codex CLI 0.165 (week of 2026-10-26) — READ, [releases.sh](https://releases.sh/collections/coding-agents/digest/2026-10-26.md)
- Devin: Activity stream and progress drawer UI updates (2026-10-26/28) — READ, [releases.sh](https://releases.sh/collections/coding-agents/digest/2026-10-26.md)
- Cursor Composer 2 (around March 2026) and Composer 2.5 ("rivals GPT-5.5 at lower price"; 3rd in the Artificial Analysis Coding Agent Index). Dates not verified — INFERRED, [The Batch (title)](https://www.deeplearning.ai/the-batch/cursor-fits-its-model-to-its-agent), [OfficeChai (title)](https://officechai.com/ai/cursors-composer-2-5-places-3rd-in-artificial-analysis-coding-agent-index-is-10-60x-cheaper-than-variants-above-it/)
- Magic Patterns MagicOS (2026-10-13); Dyad v1.20 (2026-10-19); Amp–Linear integration (2026-10-19); Hostinger AI Builder replaces Horizons (2026-08-18); Rocket drops Figma-to-code (2026-09-29); bolt.diy in maintenance mode (v1.0.1, 2026-10-12) — READ, [StartupHub.ai](https://www.startuphub.ai/ai-news/insights/2026/vibe-coding-tools)
- Firebase Studio closed to new users (2026-06-22) and shuts down 2027-03-22 — READ, same
- Retool's new no-code builder (June 2026) — READ, [Zapier app builders](https://www.zapier.com/blog/best-ai-app-builder)

### Gaps
- No major Lovable, Bolt, Replit, v0, Figma Make or Copilot release from Sep–Nov 2026 was verified (budget).

---

## Q9. Final shortlist with tag evidence

### Takeaway
The lists below rank tools by independent evidence strength. Tags use these grades: strong = 2+ independent HIGH or MEDIUM sources; partial = 1 source, or only LOW-weight or vendor-adjacent evidence; none = nothing found.

### Category 10 — code and developer assistants
| # | Tool | New model/version | Stands out in reviews | Popular | Cheap/economical | Worthwhile free plan |
|---|---|---|---|---|---|---|
| 1 | Claude Code | partial (Opus 5.5 era, Sonar Sep 2026; GA date unverified) | **strong** (most loved PE; Zapier, TNS, G2 NPS 90) | **strong** (#1 in SO, JetBrains, PE) | none ($20+; Max $100–200) | none (Zapier: "too limited") |
| 2 | GitHub Copilot | none verified | partial (Zapier pair programming; most loved at large companies) | **strong** (SO 59%, JetBrains 21%, awareness 79%) | **strong** ($10 Pro, cheapest mainstream) | **strong** (2,000 completions + 50 chats; free Student plan) |
| 3 | Cursor | partial (Composer 2/2.5, titles only) | **strong** (Zapier, TNS, PE loved 19%) | **strong** (a16z #35, >$2B ARR via Bloomberg; but usage falling in JetBrains) | none (pricing backlash) | partial (Hobby 200 completions + 50 requests) |
| 4 | OpenAI Codex | partial (GPT-6.1 Terra in Codex CLI, Oct 2026) | partial (Zapier, TNS) | **strong** (JetBrains 3%→16%; 4M+ weekly devs) | partial (bundled in ChatGPT $20) | partial ($100 student credits US/CA only) |
| 5 | Google Antigravity (+ Gemini CLI) | **strong** (Gemini 4 Carbon + /swarm, Nov 11 2026) | partial (TNS only) | partial (a16z list; JetBrains 6%, awareness 47%) | none | partial (preview access; unstable per TNS) |
| 6 | Devin Desktop / Windsurf | partial (Devin UI updates Oct 2026) | partial (Zapier) | partial (Cognition on a16z spend list) | none | partial (unlimited autocomplete + chat) |
| 7 | OpenCode | none | none | partial (JetBrains 7%, PE ~10%) | partial (open source; Assumption: BYO model cost) | partial (open source) |
| 8 | JetBrains AI / Junie | none | none | partial (JetBrains ~9%; self-published survey) | none | none |
| 9 | Amazon Q Developer / Kiro | none | partial (Zapier AWS pick) | none | none | partial (low caps) |

### Category 11 — building apps without code (design-student lens)
| # | Tool | New model/version | Stands out in reviews | Popular | Cheap/economical | Worthwhile free plan |
|---|---|---|---|---|---|---|
| 1 | Lovable | none verified | **strong** (Zapier ease of use; TechRadar; Designlab for designers; Trustpilot 4.2/1,894) | **strong** (a16z web + spend lists; ARR titles) | none (credit burn) | none (5 credits/day judged small) |
| 2 | Replit | none verified | **strong** (Zapier beginners/multi-platform; TechRadar; G2 Grid Leader) — but Trustpilot 2.8 | **strong** (a16z web + spend lists) | none (billing complaints) | partial (limited Starter) |
| 3 | Bolt | none (bolt.diy in maintenance) | **strong** (Zapier, TechRadar, Designlab) | none (not on a16z) | partial ($18 annual Pro) | partial (1M tokens/month) |
| 4 | v0 by Vercel | none verified | **strong** (TechRadar best overall, STALE?; Zapier ×2) | none (not on a16z) | none (Plus $30) | none (restrictive) |
| 5 | Base44 | none verified | partial (TechRadar only) | **strong** (a16z debut #46) | partial (from $16/month annual) | partial (25 credits/month) |
| 6 | Figma Make | none verified | partial (Designlab, LOW weight) | none found | partial ($16 Full seat, Figma-bundled) | partial (150 credits/day, vendor-page data only) |
| 7 | Google AI Studio (Build) | **strong** if Gemini 4 Carbon counts (Nov 11 2026; but Carbon is Ultra/paid only) | none | partial (a16z list) | **strong** (free) | **strong** (free; StartupHub, a16z presence) |
| 8 | Bubble | none | partial (Zapier MVPs) | none | none ($32–39) | partial (dev version only) |
| 9 | Softr | none | partial (Zapier ease/speed) | none | partial | partial (free plan) |
| 10 | Claude Code (for designers going further) | partial | partial (Designlab) | see cat 10 | none | none |

### Inferences
- Safest "stands out in reviews" tags: Claude Code, Cursor (cat 10); Lovable, Replit, Bolt, v0 (cat 11).
- Safest "popular" tags: Claude Code, Copilot, Cursor, Codex (cat 10); Lovable, Replit, Base44 (cat 11, via a16z).
- Safest "worthwhile free plan" tags: GitHub Copilot (cat 10) and Google AI Studio (cat 11).
- Safest "new model" tags: Antigravity / Gemini (Gemini 4 Carbon, Nov 2026) and Codex (GPT-6.1 Terra, Oct 2026). Claude Code / Opus 5.5 holds if the GA date is confirmed.
- For design students specifically: Lovable has the most consistent "easy for non-coders" evidence, including Trustpilot praise. Replit's Trustpilot billing complaints are a warning worth showing.

### Gaps
- Figma Make's evidence comes from one LOW-weight design-school roundup. No hands-on 2026 test of Figma Make by a major publication was read.
- No independent "best value" winner exists in either category.
- Hacker News was not read (search returned no HN thread). Reddit and YouTube were not accessible. So there is no user-community sentiment beyond Trustpilot and G2.
