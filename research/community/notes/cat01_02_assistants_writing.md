# Categories 01-02: Chat assistants / AI search / research tools, and Writing / documents / presentations (state as of 18 Nov 2026)

Reading notes for the report writer
- Date read for every source: 18 Nov 2026.
- READ = seen on the fetched page. INFERRED = taken only from a search-result title or URL (the search tool returned no snippets, so INFERRED items are weak). "Assumption" = unverified.
- STALE = source older than 6 months (before ~18 May 2026).
- Hard limit hit: the shared page-fetch budget ran out mid-run. 19 pages were read; about 9 further fetches were refused (G2, Trustpilot, The Neuron, 24Slides, ThursdAI, SlashGear). Review-platform scores are therefore almost entirely a gap, and category 2 has fewer sources than the 6-8 requested.
- Reddit and YouTube were not read. Nothing below is a Reddit or YouTube finding.
- diyai.io appeared in search results and was not used.

Source key (used in the tables)
| ID | Source | Date | Testing shown? | Weight |
|---|---|---|---|---|
| Z-chat | Zapier, "best AI chatbots" https://zapier.com/blog/chatbots/ | 14 Oct 2026 | Hands-on by author, no formal protocol; states no paid placement, some affiliate links | High |
| TG-alt | Tom's Guide, "best ChatGPT alternatives" https://www.tomsguide.com/ai/best-chatgpt-alternatives | Updated 16 Jan 2026 (STALE) | "Hands-on experience", no protocol; ChatGPT excluded by design; page has internal inconsistencies | Medium-low |
| eWeek | eWeek, "Top 10 AI chatbots, ranked" https://www.eweek.com/news/top-10-ai-chatbots-ranked/ | 19 May 2026 | Editorial ranking on 9 criteria, no test described | Medium |
| Tech.co | Tech.co, "best AI chatbots" https://tech.co/news/best-ai-chatbots | Displays "updated 3 Dec 2025" (STALE; some content clearly outdated) | "Tech.co testing" screenshots, no protocol | Medium-low |
| TT | TechTarget, "best AI chatbots for 2026" https://www.techtarget.com/ai/tip/The-best-AI-chatbots-for-2026-Compare-features-and-costs | 18 Jun 2026 | One identical prompt to each; list is unranked | Medium |
| UCS | UCStrategies, "I tested ChatGPT, Claude, Gemini, Perplexity and Grok" https://ucstrategies.com/news/best-ai-chatbots-2026-i-tested-chatgpt-claude-gemini-perplexity-and-grok/ | 26 Mar 2026, modified 26 Jun 2026 | Claims 3 weeks of tests, but numbers conflict between sections | Low-medium |
| TG-research | Tom's Guide, NotebookLM vs Perplexity, 5 prompts https://www.tomsguide.com/ai/i-tested-notebooklm-vs-perplexity-for-deep-research-with-5-difficult-prompts-heres-the-clear-winner | 7 Dec 2025 (STALE) | 5 prompts, round by round | Medium |
| Z-write | Zapier, "best AI writing generators" https://zapier.com/blog/best-ai-writing-generator/ | 15 Sep 2026 | 50+ tools tested, short and long copy; no paid placement, some affiliate links | High |
| Z-pres | Zapier, "best AI presentation makers" https://zapier.com/blog/best-ai-presentation-maker/ | 29 Oct 2026 | One month, 40+ apps, dozens of decks | High |
| TR-write | TechRadar, "Best AI writer" https://www.techradar.com/best/ai-writer | Last updated 19 Nov 2025 (STALE, a year old) | Same test article per tool | Medium-low |
| SL-write | SimilarLabs, "15 best AI writing tools" https://similarlabs.com/blog/best-ai-writing-tools | 2 Mar 2026 (STALE) | Claims 3 scenarios and weighted scores; AI-tool directory; one referral-tagged link, no affiliate disclosure | Low |
| GF-pres | Geekflare, "15 best AI presentation makers" https://geekflare.com/ai/best-ai-presentation-makers/ | 9-10 Feb 2026 (STALE) | Claims 30+ tools, 60+ hours; no scoring; a referral-tagged link | Low-medium |
| a16z | a16z Top 100 Gen AI Consumer Apps https://a16z.com/100-gen-ai-apps-7/ | 5 Oct 2026 | Third-party data: Similarweb, Sensor Tower, YipitData | High (popularity only) |
| Arena | Arena (ex-LMArena) weekly ranking as reported by IT Home https://www.ithome.com/1/027/775.htm | 16 Nov 2026, covers 9-15 Nov 2026 | Blind human votes | High (model quality only) |

## 1. Long list: which tools does the independent web mention in each category?

### Takeaway
Category 1 has a stable core of five names that appear in every roundup read (ChatGPT, Claude, Gemini, Copilot, Perplexity) plus a second ring (DeepSeek, Grok, Meta AI, Pi, Poe). Category 2 splits into three sub-fields with little overlap: marketing copy generators (Jasper, Writesonic, Anyword), editing assistants (Grammarly, Wordtune, QuillBot) and deck makers (Gamma, Canva, Beautiful.ai, Prezi).

### Cited Findings
Category 1, 24 names (all READ unless marked)
- ChatGPT (OpenAI): general-purpose assistant — [Zapier](https://zapier.com/blog/chatbots/)
- Claude (Anthropic): writing and coding — [Zapier](https://zapier.com/blog/chatbots/)
- Gemini (Google): Google-product integration — [Zapier](https://zapier.com/blog/chatbots/)
- Microsoft Copilot: Microsoft-product integration — [Zapier](https://zapier.com/blog/chatbots/)
- Perplexity: cited web research — [Zapier](https://zapier.com/blog/chatbots/)
- Meta AI: social apps — [Zapier](https://zapier.com/blog/chatbots/)
- DeepSeek: free, open models; China hosting concerns — [Zapier](https://zapier.com/blog/chatbots/)
- Grok (xAI): X integration — [Zapier](https://zapier.com/blog/chatbots/)
- Poe: many models in one app — [Zapier](https://zapier.com/blog/chatbots/)
- Duck.ai: privacy — [Zapier](https://zapier.com/blog/chatbots/)
- Pi (Inflection): personal conversation — [Zapier](https://zapier.com/blog/chatbots/)
- Le Chat (Mistral): ranked 7 — [eWeek](https://www.eweek.com/news/top-10-ai-chatbots-ranked/)
- Kimi (Moonshot): ranked 8 — [eWeek](https://www.eweek.com/news/top-10-ai-chatbots-ranked/)
- You.com, Character AI, Personal AI, Writesonic/Chatsonic — [Tech.co](https://tech.co/news/best-ai-chatbots) (STALE)
- Llama 4 (open source, via Meta AI) — [Tom's Guide](https://www.tomsguide.com/ai/best-chatgpt-alternatives) (STALE)
- NotebookLM, renamed "Gemini Notebook": source-grounded research — on a16z web and mobile lists as "Gemini Notebook" [a16z](https://a16z.com/100-gen-ai-apps-7/); rename INFERRED from title/URL, July 2026 [Google Workspace Updates](https://workspaceupdates.googleblog.com/2026/07/notebooklm-now-gemini-notebook.html)
- Genspark, Manus, Doubao, Qwen: present on the a16z web list (no position given in text) — [a16z](https://a16z.com/100-gen-ai-apps-7/)
- GLM (Z.ai): appears only as a model on the Arena board, rank 28 — [IT Home](https://www.ithome.com/1/027/775.htm)

Category 2, 30 names (all READ)
- Writing generators: Jasper, Anyword, Writer, Writesonic, Rytr, Sudowrite — [Zapier](https://zapier.com/blog/best-ai-writing-generator/)
- Also: Copy.ai, Surfer SEO, Frase, Koala, Hypotenuse AI, Notion AI, Grammarly, Wordtune, plus ChatGPT and Claude used as writers — [SimilarLabs](https://similarlabs.com/blog/best-ai-writing-tools) (STALE, low weight)
- Also: Articleforge, AI-Writer, INK, WordAI — [TechRadar](https://www.techradar.com/best/ai-writer) (STALE)
- QuillBot: on a16z web and spend lists; not in any roundup read — [a16z](https://a16z.com/100-gen-ai-apps-7/)
- Deck makers: Gamma, Canva, Beautiful.ai, Pitch, Chronicle, Prezi, Alai (brief mention) — [Zapier](https://zapier.com/blog/best-ai-presentation-maker/)
- Also: Decktopus, Adobe Express, Presenti.ai, Presentations.ai; unreviewed mentions of Manus, Genspark, Simplified, Copilot in PowerPoint, Plus AI, SlidesAI, Sendsteps — [Geekflare](https://geekflare.com/ai/best-ai-presentation-makers/) (STALE)
- Microsoft PowerPoint Copilot and Google Slides Gemini were removed from Zapier's 2026 deck list; ChatGPT and Claude were considered and excluded as too limited next to dedicated tools — [Zapier](https://zapier.com/blog/best-ai-presentation-maker/)
- Grammarly now appears as "Superhuman (fka Grammarly)" — [a16z](https://a16z.com/100-gen-ai-apps-7/)
- Tome: INFERRED from several search titles that Tome's slides product shut down (e.g. "Tome Review 2026: What Happened & Best Alternatives After Shutdown") — [Deckary](https://deckary.com/blog/tome-review). Not read. Assumption until verified; do not list Tome as an active tool without checking.

### Inferences
- Copilot in Office and Gemini in Workspace are treated by reviewers as bundles inside the general assistants, not as stand-alone writing or deck tools; no roundup read recommends them as a dedicated category-2 pick.
- QuillBot and Wordtune have usage evidence but almost no editorial recommendations in the sources read.

### Gaps
- Beautiful.ai, Tome, Copy.ai, Wordtune, QuillBot: no 2026 hands-on review was read for any of them individually.
- No source read covers Hebrew-language quality or right-to-left support, which matters for this audience.

## 2. Recommendation tally: who is named best, and by how many independent sources?

### Takeaway
Category 1: there is no single "best overall". Across six roundups, ChatGPT gets the general-purpose crown twice, Claude gets first place once and "best for writing/coding" three times, Gemini gets "best overall" once (in a list that excludes ChatGPT), and Perplexity is the only tool with a unanimous niche: best for research in 4 of 6, and winner of the one research head-to-head. Category 2: Gamma and Canva are the only deck tools in both deck roundups; Jasper, Writesonic and Anyword are the only writing tools in all three writing roundups, but only two of the five category-2 sources are fresh.

### Cited Findings
Category 1 table (verdict per source; all READ; "-" = not included)
| Tool | Z-chat (Oct 2026) | TG-alt (Jan 2026, STALE) | eWeek (May 2026) | Tech.co (STALE) | TT (Jun 2026) | UCS (Mar/Jun 2026) |
|---|---|---|---|---|---|---|
| ChatGPT | Best general-purpose | excluded by design | #3 | Best overall | included, unranked; "broadest" test answer | Best for general chat and agent tasks |
| Claude | Writing and coding | Best for coding and productivity | #1 | Best for large inputs | included, unranked | Best for coding and long-form; most favourable coverage |
| Gemini | Google integration | Best overall (among alternatives) | #2 | Best for creative tasks | included, unranked | Only if you live in Google Workspace |
| Perplexity | Internet deep dives | Best for research | #4 | Best for research | included, unranked | Best for research; best value for researchers |
| Copilot | Microsoft integration | Most creative | #5 | Best for Microsoft users | included, unranked | Best for Microsoft 365 enterprises |
| DeepSeek | Open-source reasoning | Most underrated | - | - | included, unranked | Best free / budget |
| Grok | X integration | - | #6 | Best for entertaining conversations | - | Not recommended |
| Meta AI | Social media | Best for social | #9 | Best for social media | - | - |
| Pi | Personal use | Most personal | #10 | Best personal chatbot | - | - |
| Poe | Multiple models | Best all-in-one | - | Best aggregator | - | - |
| Le Chat | - | - | #7 | - | - | - |
| Kimi | - | - | #8 | - | - | - |
| Duck.ai | Data privacy | - | - | - | - | - |
| You.com / Character AI / Personal AI / Writesonic | - | - | - | one label each | - | - |
URLs: [Zapier](https://zapier.com/blog/chatbots/), [Tom's Guide](https://www.tomsguide.com/ai/best-chatgpt-alternatives), [eWeek](https://www.eweek.com/news/top-10-ai-chatbots-ranked/), [Tech.co](https://tech.co/news/best-ai-chatbots), [TechTarget](https://www.techtarget.com/ai/tip/The-best-AI-chatbots-for-2026-Compare-features-and-costs), [UCStrategies](https://ucstrategies.com/news/best-ai-chatbots-2026-i-tested-chatgpt-claude-gemini-perplexity-and-grok/)

Category 1 count (six roundups)
| Tool | Included in | Top-level verdict ("best overall" / #1 / best general) | Notes |
|---|---|---|---|
| Claude | 6 of 6 | 1 (#1 eWeek) | Best for writing/coding in 3 (Zapier, Tom's Guide, UCS) |
| Gemini | 6 of 6 | 1 (Tom's Guide, list without ChatGPT) | #2 eWeek |
| Perplexity | 6 of 6 | 0 | Best for research in 4 |
| Copilot | 6 of 6 | 0 | Always scoped to Microsoft users |
| ChatGPT | 5 of 5 that allow it | 2 (Zapier, Tech.co) | Plus "general chat" in UCS |
| DeepSeek | 4 of 6 | 0 | Best free in 1 (UCS) |
| Grok | 4 of 6 | 0 | One explicit "not recommended" (UCS) |
| Meta AI | 4 of 6 | 0 | Always "social" |
| Pi | 4 of 6 | 0 | Always "personal" |
| Poe | 3 of 6 | 0 | Aggregator |
| Le Chat, Kimi, Duck.ai, You.com, Character AI | 1 each | 0 | |

- Research head-to-head: Perplexity beat NotebookLM 3 rounds to 2; NotebookLM was called slow and over-long, Perplexity text-heavy — [Tom's Guide](https://www.tomsguide.com/ai/i-tested-notebooklm-vs-perplexity-for-deep-research-with-5-difficult-prompts-heres-the-clear-winner) (READ, STALE Dec 2025)
- No source read uses the labels "best for beginners" or "best free" for a category-1 tool, except UCS naming DeepSeek best free — [UCStrategies](https://ucstrategies.com/news/best-ai-chatbots-2026-i-tested-chatgpt-claude-gemini-perplexity-and-grok/) (READ)

Category 2 table (all READ)
| Tool | Z-write (Sep 2026) | TR-write (Nov 2025, STALE) | SL-write (Mar 2026, STALE, low weight) | Z-pres (Oct 2026) | GF-pres (Feb 2026, STALE) |
|---|---|---|---|---|---|
| Jasper | Best for businesses | Best for long-form | #1, 9.1, marketing teams | - | - |
| Writesonic | Best for content marketing | Best for short-form | 8.7, SEO at scale | - | - |
| Anyword | Best for ads and social | Best for marketers | 8.5 | - | - |
| Rytr | Best affordable option | - | 8.4, budget pick | - | - |
| Sudowrite | Best for fiction | - | 8.3, fiction | - | - |
| Writer | Best for AI compliance | - | - | - | - |
| Grammarly | - | Overall winner | 8.7, editing | - | - |
| Copy.ai | - | Best free option | 8.6 | - | - |
| ChatGPT as writer | - | - | 9.0, "best free general-purpose writer" | excluded as too limited for decks | - |
| Claude as writer | - | - | 8.9, long-form | excluded as too limited for decks | - |
| Notion AI | - | - | 7.9 (lowest of 15) | - | - |
| Wordtune | - | - | 8.1 | - | - |
| Gamma | - | - | - | Best for beautiful presentations | Best for docs-to-slides |
| Canva | - | - | - | Best all-in-one design platform | Best for social, students, freelancers |
| Beautiful.ai | - | - | - | Best for updating stats over time | Best for corporate teams |
| Prezi | - | - | - | Best for non-linear decks | Best for engaging presentations (listed first) |
| Pitch | - | - | - | Best for sales teams | - |
| Chronicle | - | - | - | Best for clean design | - |
| Decktopus / Adobe Express / Presenti / Presentations.ai | - | - | - | - | one verdict each |
URLs: [Zapier writing](https://zapier.com/blog/best-ai-writing-generator/), [TechRadar](https://www.techradar.com/best/ai-writer), [SimilarLabs](https://similarlabs.com/blog/best-ai-writing-tools), [Zapier presentations](https://zapier.com/blog/best-ai-presentation-maker/), [Geekflare](https://geekflare.com/ai/best-ai-presentation-makers/)

Category 2 count
- Writing (3 sources): Jasper 3, Writesonic 3, Anyword 3, Rytr 2, Sudowrite 2, Grammarly 2, Copy.ai 2; Writer, Notion AI, Wordtune, ChatGPT, Claude 1 each; QuillBot 0.
- Claude also gets "writing and coding" as its headline label in the chatbot roundup — [Zapier](https://zapier.com/blog/chatbots/) (READ)
- Presentations (2 sources): Gamma 2, Canva 2, Beautiful.ai 2, Prezi 2; all others 1.
- Zapier says output quality differed little between writing tools because most use similar underlying models; price and user experience drove its ranking — [Zapier](https://zapier.com/blog/best-ai-writing-generator/) (READ)

### Inferences
- "ChatGPT for general use, Claude for writing and code, Perplexity for research, Gemini/Copilot if you already live in that ecosystem" is the consistent shape across sources; it is safer for the site than any single "best".
- The dedicated writing-generator roundups serve marketers. For design students, the better-supported writing picks are the general assistants plus Grammarly for editing.
- Gamma and Canva are the best-supported deck picks; Canva is the only one explicitly labelled for students (Geekflare, stale).

### Gaps
- Category 2 has 5 sources (3 writing, 2 decks) instead of 6-8, and only the two Zapier pieces are under 6 months old. Fetches of The Neuron and 24Slides deck roundups were refused by the budget limit.
- No current Tom's Guide, PCMag, CNET, Wired, The Verge or ZDNet "best chatbots" roundup was found by search; domain-filtered searches were rejected by the search proxy.
- No independent creator (YouTube) verdict was read.

## 3. Objective rankings (leaderboards)

### Takeaway
On Arena's blind-vote text board for 9-15 Nov 2026, Google's two Gemini 4 models are a statistical tie for first, Meta's Muse Wonder is third, and Anthropic holds five of the top eight. No OpenAI model appears in the top 10 as reported. Leaderboards rank models, not apps, and no leaderboard exists for writing or deck tools.

### Cited Findings
- Arena overall text ranking, week 46 (9-15 Nov 2026), READ: 1 Gemini 4 Carbon (High) 1526 ±10; 2 Gemini 4 Argon (High) 1522 ±5; 3 Muse Wonder (Max), Meta, 1511 ±6; 4 Claude Opus 5.5 (High) 1507 ±6; 5 Claude Fable 5 (High) 1504 ±4; 6 Claude Opus 4.6 (High) 1503 ±3; 7 Claude Fable 5.1 (Max) 1502 ±5; 8 Claude Opus 4.7 (High) 1501 ±4; 9 Gemini 3.8 Flash (High) 1497 ±4; 10 Muse Spark 1.3 (Max) 1497 ±5; 20 Kimi K3 (Max) 1487; 25 Qwen 3.8 Max 1484; 28 GLM 5.3 (Max) 1482 — [IT Home](https://www.ithome.com/1/027/775.htm)
- The article treats the 4-point gap between the two Gemini 4 models as within the margin of error — [IT Home](https://www.ithome.com/1/027/775.htm) (READ)
- Other Arena boards the same week, READ: front-end development 1 Claude Fable 5.2 (xHigh) 1838, 2 Claude Opus 5.5 (Max) 1815, 3 Claude Sonnet 5.5 (xHigh) 1772; agent board 1 Claude Fable 5.2 (Max), 2 Claude Opus 5.5 (Max), 3 Gemini 4 Carbon (High) — [IT Home](https://www.ithome.com/1/027/775.htm)
- A direct read of arena.ai showed a different, older snapshot marked "last updated Aug 12, 2026": 1 claude-fable-5 1506 ±5, 2 claude-opus-4-6-high 1505, 3 claude-opus-4-7-high 1502, 4 muse-spark-1.2 1498, 8 qwen3.8-max 1491, 9 gemini-3.7-flash-high 1490, 17 gpt-5.5-high 1482, 19 gpt-5.6-sol-xhigh 1481 — [Arena](https://arena.ai/leaderboard/text/overall) (READ; conflicts in date with the IT Home report, so treat as an August snapshot)

### Inferences
- OpenAI's best position in the August snapshot was 17th. GPT-6 (see section 8) is not mentioned in the November top 10 as reported; its Arena position is unknown.
- Score gaps inside the top 10 are 5-30 points with ±3-10 intervals, so "leader" on this board is not a strong differentiator for a student choosing an app.

### Gaps
- Artificial Analysis index: not read.
- Full November Arena table (ranks 11-19, OpenAI and xAI positions): not available in the source read.

## 4. Review-platform scores (G2, Trustpilot, Capterra, Product Hunt, app stores)

### Takeaway
Almost nothing could be verified. All G2 and Trustpilot fetches were refused by the fetch budget. No star score should be published from this run.

### Cited Findings
- Trustpilot lists roughly 2,830 reviews for chatgpt.com; the score itself was not visible. INFERRED from result titles such as "Chatgpt Reviews 2,830" — [Trustpilot](https://uk.trustpilot.com/review/chatgpt.com?page=8)
- G2 has live category pages titled "Best AI Chatbots Software: User Reviews from November 2026" and "Best AI Writing Assistants: User Reviews from November 2026"; contents not read — [G2 chatbots](https://www.g2.com/categories/ai-chatbots), [G2 writing](https://www.g2.com/categories/ai-writing-assistant)
- A SlashGear article titled "AI platform with highest customer satisfaction in 2026" exists; not read, winner unknown — [SlashGear](https://www.slashgear.com/2154759/ai-platform-with-highest-customer-satisfaction-in-2026/)

### Inferences
- None. The usual pattern that G2 scores run high and Trustpilot scores run low for the same product could not be checked here; treat it as an Assumption.

### Gaps
- G2, Capterra, Product Hunt, App Store and Google Play ratings and review counts for every tool in both categories: not obtained. This needs a follow-up pass when fetch budget is available.

## 5. Popularity evidence

### Takeaway
ChatGPT is first on every third-party measure read, about 2x Gemini on web visits and 2.5x on mobile MAU as of August 2026; Claude is third on web but far smaller. In category 2, Notion and Canva are in a16z's web top 10, and Grammarly (now Superhuman), Gamma and QuillBot are on its lists. Exact visit numbers were not available.

### Cited Findings
Third-party (all READ, a16z 5 Oct 2026, data: Similarweb web visits, Sensor Tower mobile MAU, YipitData US card spend)
- ChatGPT tops web, mobile and spend lists; about 2x Gemini's August web visits and about 2.5x Gemini's mobile MAU — [a16z](https://a16z.com/100-gen-ai-apps-7/)
- Claude is ahead of DeepSeek and Perplexity on web, about 6x behind ChatGPT on web and about 14x behind on mobile MAU — [a16z](https://a16z.com/100-gen-ai-apps-7/)
- 4.5% of eligible US consumers held a paid ChatGPT, Gemini or Claude subscription in August 2026, up from 2.1% a year earlier — [a16z](https://a16z.com/100-gen-ai-apps-7/)
- 7.3% of Claude's consumer payers are on the $100/month plan versus 1.3% for Google and 1.1% for ChatGPT — [a16z](https://a16z.com/100-gen-ai-apps-7/)
- Notion and Canva are in the web top 10; Superhuman (fka Grammarly) is "consistently in the top half" and #4 on the spend list; Perplexity, Canva and Notion are among seven products ranking high on all three lists — [a16z](https://a16z.com/100-gen-ai-apps-7/)
- Gamma, QuillBot, Genspark, Manus, Grok, DeepSeek, Copilot, Meta AI, Doubao, Kimi, Qwen and Gemini Notebook are on the web list; exact positions are only in chart images that could not be read. Jasper is on the spend list. Le Chat/Mistral is on none of the lists — [a16z](https://a16z.com/100-gen-ai-apps-7/)
- Perplexity's web visits peaked around October 2025 and declined most months through May 2026; Claude's web visits roughly doubled in each of the two months after February 2026; Claude had the fastest year-over-year app MAU growth and ChatGPT the slowest; ChatGPT has the highest daily stickiness and Perplexity the lowest — [Similarweb blog](https://aisearch.similarweb.com/blog/chatgpt-vs-gemini-vs-claude-vs-perplexity/) (READ; published 2 Aug 2026, data to May 2026, no numbers given)
- ChatGPT 1B+ monthly active users in June 2026, attributed to Sensor Tower — [SimpleTiger compilation](https://aisearch.simpletiger.com/) (READ, secondary compilation, medium-low reliability)

Vendor-announced or unlabelled
- ChatGPT 1.2 billion weekly active users, quoted in the a16z text (origin is OpenAI; treat as vendor figure) — [a16z](https://a16z.com/100-gen-ai-apps-7/) (READ)
- Gemini 900M monthly active users in May 2026; source not labelled, Assumption that it is Google's own figure — [SimpleTiger compilation](https://aisearch.simpletiger.com/) (READ)
- Gamma: "100m users, US$100m ARR", INFERRED from article title only, Assumption that it is vendor-announced — [AI Magazine](https://aimagazine.com/news/gamma-ai-presentations-for-100m-users-us-100m-arr-and-prof)
- "ChatGPT's market share slips below 50% for first time" (June 2026), INFERRED from title only, data source unknown — [news.lavx.hu](https://news.lavx.hu/article/chatgpt-share-falls-below-50-as-gemini-and-claude-gain-users)

No public figure found in this run: Claude, Perplexity, Copilot, Grok, DeepSeek, Meta AI, Le Chat users; Grammarly, Notion AI, Canva AI, Beautiful.ai, Jasper, Copy.ai, Wordtune, QuillBot users; Similarweb visit counts for any tool; app-store download ranks.

### Inferences
- "Popular" is safely supported for ChatGPT and Gemini (top two, third-party), and for Canva, Notion and Grammarly/Superhuman in category 2. Claude is popular on web and in paid spend but small on mobile.
- Perplexity is recommended more than its traffic trend suggests: reviewers like it while Similarweb shows declining visits.

### Gaps
- a16z exact ranks for most tools sit in images; a human should read the charts on the page.

## 6. Recurring complaints per leading tool

### Takeaway
The complaints reviewers repeat are: ChatGPT sourcing reliability, Claude usage limits, Gemini inconsistency, DeepSeek privacy, Grok accuracy. For category 2: Jasper price, Grammarly price, Gamma's non-refilling free credits. Community (Reddit) sentiment was not read.

### Cited Findings
- ChatGPT: uneven reliability when citing web sources; agent mode "still a bit hit and miss"; the $8 Go plan shows occasional ads — [Zapier](https://zapier.com/blog/chatbots/) (READ)
- Claude: easy to hit token limits — [Zapier](https://zapier.com/blog/chatbots/) (READ); low rate limits for heavy users — [Tom's Guide](https://www.tomsguide.com/ai/best-chatgpt-alternatives) (READ, STALE)
- Claude: press coverage of user backlash over perceived performance decline, INFERRED from headline, 14 Apr 2026 (STALE) — [Fortune](https://fortune.com/2026/04/14/anthropic-claude-performance-decline-user-complaints-backlash-lack-of-transparency-accusations-compute-crunch/); "Claude's new limits are frustrating its most devoted users", INFERRED from headline, date unknown — [AOL](https://www.aol.com/articles/claude-limits-frustrating-most-devoted-140000891.html)
- Gemini: inconsistent response quality; Workspace integration mostly retrieves data rather than acting — [Zapier](https://zapier.com/blog/chatbots/) (READ)
- Perplexity: better for facts than creative work — [Zapier](https://zapier.com/blog/chatbots/) (READ)
- Copilot: custom GPTs retired for regular users — [Zapier](https://zapier.com/blog/chatbots/) (READ)
- DeepSeek: hosted in China, privacy concerns, avoids sensitive political topics, occasional hallucinations — [Zapier](https://zapier.com/blog/chatbots/) (READ)
- Grok: accuracy problems on several topics; loose content policies have drawn news attention — [Zapier](https://zapier.com/blog/chatbots/) (READ); "not recommended" — [UCStrategies](https://ucstrategies.com/news/best-ai-chatbots-2026-i-tested-chatgpt-claude-gemini-perplexity-and-grok/) (READ)
- Meta AI: no easy way to opt out of training on your data — [Zapier](https://zapier.com/blog/chatbots/) (READ)
- NotebookLM: slow, overwhelming answers, sometimes off-topic — [Tom's Guide](https://www.tomsguide.com/ai/i-tested-notebooklm-vs-perplexity-for-deep-research-with-5-difficult-prompts-heres-the-clear-winner) (READ, STALE)
- Jasper: expensive given similar underlying models; output not noticeably better — [Zapier](https://zapier.com/blog/best-ai-writing-generator/) (READ)
- Grammarly: expensive, especially month to month; free tier limited to grammar suggestions — [TechRadar](https://www.techradar.com/best/ai-writer) (READ, STALE)
- Gamma: free-plan AI credits do not refill monthly — [Zapier](https://zapier.com/blog/best-ai-presentation-maker/) (READ)
- Canva: templates and AI output need extra work to look unique — [Zapier](https://zapier.com/blog/best-ai-presentation-maker/) (READ)
- Beautiful.ai: leans on text and data slides; no free plan mentioned — [Zapier](https://zapier.com/blog/best-ai-presentation-maker/) (READ)

### Inferences
- For a design student, the Canva and Gamma complaints (generic look, limited free credits) are the most relevant.

### Gaps
- Reddit, YouTube and app-store review sentiment: not read. Billing and cancellation complaints on Trustpilot: not read.

## 7. Free plans, price and value

### Takeaway
The standard paid tier is about $20/month across ChatGPT, Claude, Gemini and Perplexity. Cheaper tiers now exist: Gemini AI Plus $4.99, ChatGPT Go $8 (with ads). DeepSeek, Meta AI and Copilot's core chat are free. The clearest student deal is Google AI Pro free for 12 months for US students; Claude has no individual student discount.

### Cited Findings
Category 1 prices (READ)
- ChatGPT: free plan with limited model access; Go $8/month with occasional ads; Plus $20/month — [Zapier](https://zapier.com/blog/chatbots/); Pro $100/month — [TechTarget](https://www.techtarget.com/ai/tip/The-best-AI-chatbots-for-2026-Compare-features-and-costs)
- Claude: free plan; Pro $17/month billed annually or $20 monthly; Max $100/month — [Zapier](https://zapier.com/blog/chatbots/)
- Gemini: free basics; AI Plus $4.99/month; AI Pro $19.99/month — [Zapier](https://zapier.com/blog/chatbots/); AI Ultra $99.99/month — [TechTarget](https://www.techtarget.com/ai/tip/The-best-AI-chatbots-for-2026-Compare-features-and-costs)
- Copilot: core chat free; Microsoft 365 Personal $9.99, Family $12.99, Premium $19.99/month — [Zapier](https://zapier.com/blog/chatbots/)
- Perplexity: free tier with basic models; Pro $17/month (annual billing per TechTarget); Max $167/month — [Zapier](https://zapier.com/blog/chatbots/)
- Grok: free plan with limited modes; paid tiers listed at $8, $30 and $100/month — [Zapier](https://zapier.com/blog/chatbots/)
- DeepSeek, Meta AI, Pi: free — [Zapier](https://zapier.com/blog/chatbots/)
- Poe: free with daily limits; $4.99/month entry tier — [Zapier](https://zapier.com/blog/chatbots/)
- GPT-6 appears to be available to free ChatGPT users, INFERRED from titles ("GPT-6 for everyone", "gpt-6-intelligent-ui-chatgpt-free-users") — [OpenAI](https://openai.com/ro-RO/index/gpt-6-for-everyone/), [BetaNews](https://betanews.com/article/gpt-6-intelligent-ui-chatgpt-free-users/)

Value verdicts (READ)
- DeepSeek named best free and best budget pick; Perplexity Pro best value for researchers — [UCStrategies](https://ucstrategies.com/news/best-ai-chatbots-2026-i-tested-chatgpt-claude-gemini-perplexity-and-grok/) (low-medium weight)
- ChatGPT called "best free general-purpose writer" with a "full free tier" — [SimilarLabs](https://similarlabs.com/blog/best-ai-writing-tools) (STALE, low weight)
- Rytr named the affordable writing option: free 10,000 characters/month, unlimited from $9/month — [Zapier](https://zapier.com/blog/best-ai-writing-generator/)
- Copy.ai named best free writer, 2,000 words/month free — [TechRadar](https://www.techradar.com/best/ai-writer) (STALE)

Category 2 prices (READ)
- Gamma from $9/seat/month billed annually, free plan with non-refilling credits; Canva Pro $12/month billed annually, free plan; Beautiful.ai from $14.50/month billed annually; Pitch Plus $13/month, free plan; Chronicle Pro $12/user/month, free plan without AI; Prezi Standard $7/month billed annually, free plan — [Zapier](https://zapier.com/blog/best-ai-presentation-maker/)
- Jasper Pro from $69/month; Anyword from $49/month; Sudowrite from $19/month — [Zapier](https://zapier.com/blog/best-ai-writing-generator/)
- Canva free plan: 10 AI presentations/month, PowerPoint export restricted — [Geekflare](https://geekflare.com/ai/best-ai-presentation-makers/) (STALE)
- Grammarly $12/month with a free tier; Notion AI $10/member/month add-on, no free AI plan; Wordtune $13.99/month — [SimilarLabs](https://similarlabs.com/blog/best-ai-writing-tools) (STALE, low weight; re-check)

Student offers (READ, page updated 1 Nov 2026, offers verified 1 Oct 2026)
- Google AI Pro: 12 months free for US college students 18+, redeem by 31 Dec 2026, then $19.99/month; students outside the US get one year of Google AI Plus, with listed country exclusions — [Layer3 Labs](https://www.layer3labs.io/guides/ai-student-discounts)
- ChatGPT Plus US student offer closed 31 Oct 2026 — [Layer3 Labs](https://www.layer3labs.io/guides/ai-student-discounts)
- Perplexity Education Pro $10/month via SheerID; country rules not published — [Layer3 Labs](https://www.layer3labs.io/guides/ai-student-discounts)
- Claude: no individual student discount; Claude for Education is campus-wide and closed for Fall 2026 — [Layer3 Labs](https://www.layer3labs.io/guides/ai-student-discounts)

### Inferences
- Tags "cheap/economical" have partial support for Gemini (AI Plus $4.99), ChatGPT (Go $8), DeepSeek (free), Rytr and Prezi; none of these comes with a strong multi-source "best value" verdict.
- Whether Israel is covered by the non-US Google AI Plus student offer was not stated. Assumption: unknown, must be checked.

### Gaps
- No source read ranks free plans against each other after GPT-6 and Gemini 4 launched. Current free-tier message limits are unverified.
- Student pricing for Notion, Grammarly, Canva, Gamma: not covered by the source read.
- Layer3 Labs is a small site of unknown reliability; verify offers on vendor pages before publishing.

## 8. Released or majorly updated in the last ~3 months (since mid-Aug 2026)

### Takeaway
Google (Gemini 4 Argon and Carbon), OpenAI (GPT-6) and Anthropic (Opus 5.5, Fable 5.2) all shipped flagship models between late September and mid-November 2026. Most dates below come from headlines and URLs, not from pages read.

### Cited Findings
- Gemini 4 Carbon debuted at #1 on Arena in the week of 9-15 Nov 2026 — [IT Home](https://www.ithome.com/1/027/775.htm) (READ); "Google rolls out Gemini 4 Carbon to general public", INFERRED from title — [Let's Data Science](https://letsdatascience.com/news/google-rolls-out-gemini-4-carbon-to-general-public-9b41bcb4)
- Gemini 4 Argon launched in the Gemini app around 14 Oct 2026, INFERRED from title and URL date — [AndroidSage](https://www.androidsage.com/2026/10/14/google-gemini-4-argon-download/)
- GPT-6 with "Intelligent UI" rolled out in ChatGPT around 7 Oct 2026, INFERRED from titles and URL date — [TestingCatalog](https://www.testingcatalog.com/openai-rolls-out-gpt-6-with-intelligent-ui-in-chatgpt/), [vpsranking](https://vpsranking.com/news/ai/ai-2026-10-07-openai-gpt6-intelligent-ui/)
- Claude Opus 5.5 released 22 Sep 2026 "with lower prices", INFERRED from title and URL date — [TechCrunch](https://techcrunch.com/2026/09/22/anthropic-releases-opus-5-5-with-lower-prices-and-fable-level-performance/); on Arena at #4 — [IT Home](https://www.ithome.com/1/027/775.htm) (READ)
- Claude Fable 5.2 launched, date not found, INFERRED from title — [TestingCatalog](https://www.testingcatalog.com/anthropic-launches-claude-fable-5-2-and-mythos-5-2/); #1 on Arena front-end and agent boards — [IT Home](https://www.ithome.com/1/027/775.htm) (READ)
- Meta Muse Wonder at #3 on Arena — [IT Home](https://www.ithome.com/1/027/775.htm) (READ); launch date not found. a16z says Meta's Muse app passed 5M downloads in under a month — [a16z](https://a16z.com/100-gen-ai-apps-7/) (READ)
- Grok 4.6 released, date not found, INFERRED from title — [The New Stack](https://thenewstack.io/grok-4-6-matched-fable-5-max/)
- NotebookLM renamed Gemini Notebook, July 2026 (just outside the 3-month window), INFERRED from title and URL — [Google Workspace Updates](https://workspaceupdates.googleblog.com/2026/07/notebooklm-now-gemini-notebook.html)
- Gamma launched an image tool, "Gamma Imagine", date not found, INFERRED from title — [TechIntelPro](https://techintelpro.com/news/ai/enterprise-ai/gamma-launches-gamma-imagine-for-ai-native-visual-design)
- Grammarly now trades as Superhuman — [a16z](https://a16z.com/100-gen-ai-apps-7/) (READ); rebrand date not captured.

### Inferences
- "New model" is supportable for Gemini, ChatGPT and Claude, and partially for Meta AI and Grok. Most roundups in section 2 predate these launches, so their verdicts describe older models.

### Gaps
- No recent-release evidence found for Perplexity, Copilot, DeepSeek, Le Chat, Notion AI, Canva, Beautiful.ai, Jasper within the window. A "Canva AI 2.0" headline surfaced without a date.
- ThursdAI's October 2026 release log could not be fetched.

## 9. Final shortlist and which tags the evidence supports

### Takeaway
Evidence strength key: strong = at least 3 independent fresh sources or hard third-party data; partial = 1-2 sources, stale sources, or headline-only; none = nothing found. No tool earns "stands out in reviews" on review-platform scores, because those scores were not obtained; that tag rests on editorial roundups only.

### Cited Findings
Category 1 (evidence from sections 2-8; sources: [Zapier](https://zapier.com/blog/chatbots/), [eWeek](https://www.eweek.com/news/top-10-ai-chatbots-ranked/), [a16z](https://a16z.com/100-gen-ai-apps-7/), [IT Home/Arena](https://www.ithome.com/1/027/775.htm), [Layer3 Labs](https://www.layer3labs.io/guides/ai-student-discounts))
| Tool | new model | stands out in reviews | popular | cheap/economical | worthwhile free plan |
|---|---|---|---|---|---|
| ChatGPT | partial (GPT-6, Oct 2026, headline-only) | strong (best general in 2, included in all 5 that allow it) | strong (#1 web, mobile, spend) | partial ($8 Go tier with ads) | partial (called full free tier by one stale source) |
| Claude | partial (Opus 5.5 Sep 2026 headline; Arena ranks READ) | strong (#1 eWeek; writing/coding pick in 3) | partial (3rd on web, 14x behind ChatGPT on mobile) | none | none (limits are the main complaint) |
| Gemini | strong (Gemini 4 Carbon #1 on Arena, READ, Nov 2026) | partial (best overall in 1 stale list; #2 eWeek; "inconsistent" in Zapier) | strong (#2 web and mobile) | partial ($4.99 AI Plus) | partial (free year for students, US-centred) |
| Perplexity | none | strong for research (4 of 6, plus head-to-head win) | partial (on all three a16z lists, but traffic declining since Oct 2025) | partial ($10 student Pro) | partial |
| Microsoft Copilot | none | partial (in all 6, always scoped to Microsoft users) | partial (on a16z lists, no rank) | partial (core chat free) | partial |
| DeepSeek | none | partial (4 of 6; "most underrated", "best free") | partial (on a16z list; below Claude) | strong on price (free) but privacy caveats | partial (free, privacy concerns) |
| Grok | partial (Grok 4.6, headline-only) | none (one "not recommended"; accuracy complaints) | partial (on a16z list) | none | none |
| Meta AI | partial (Muse Wonder #3 Arena) | none (always just "social") | partial (on a16z list; Muse app 5M downloads) | partial (free) | partial |
| Gemini Notebook (NotebookLM) | partial (renamed July 2026) | partial (lost 2-3 to Perplexity, stale) | partial (on a16z web and mobile lists) | none found | none found |
| Poe | none | partial (3 of 6 as aggregator) | none found | partial ($4.99) | partial |

Category 2 (sources: [Zapier writing](https://zapier.com/blog/best-ai-writing-generator/), [Zapier presentations](https://zapier.com/blog/best-ai-presentation-maker/), [TechRadar](https://www.techradar.com/best/ai-writer), [SimilarLabs](https://similarlabs.com/blog/best-ai-writing-tools), [Geekflare](https://geekflare.com/ai/best-ai-presentation-makers/), [a16z](https://a16z.com/100-gen-ai-apps-7/))
| Tool | new model | stands out in reviews | popular | cheap/economical | worthwhile free plan |
|---|---|---|---|---|---|
| Gamma | partial (Gamma Imagine, headline-only) | partial, leaning strong (2 of 2 deck roundups, first in Zapier) | partial (a16z web and spend lists; 100M users headline-only) | partial ($9/seat) | partial (free credits do not refill) |
| Canva (AI presentations/docs) | none verified | partial (2 of 2; students label in one stale source) | strong (a16z web top 10) | partial ($12 Pro) | partial (10 AI decks/month per stale source) |
| Grammarly / Superhuman | partial (rebrand) | partial (overall winner in 1 stale; 8.7 in 1 low-weight) | strong (a16z top half, #4 spend) | none (called expensive) | partial (grammar-only free tier) |
| Jasper | none | partial (3 of 3 writing lists, but for business marketing) | partial (a16z spend list) | none (called expensive) | none |
| Notion AI | none | none (lowest score in the one list that includes it) | strong for Notion overall (a16z web top 10); none for the AI add-on specifically | none | none |
| Beautiful.ai | none | partial (2 of 2 deck lists, niche labels) | none found | none | none (no free plan) |
| Prezi | none | partial (2 of 2 deck lists) | none found | partial ($7) | partial |
| Rytr | none | partial (budget pick in 2) | none found | partial ($9, two sources) | partial (10K characters/month) |
| Writesonic | none | partial (3 of 3, marketing/SEO) | none found | none | none |
| QuillBot | none | none | partial (a16z web and spend lists) | none found | none found |
| ChatGPT / Claude as writing tools | see category 1 | partial (Claude "writing" pick in Zapier; both scored about 9 in one low-weight list) | see category 1 | see category 1 | see category 1 |

### Inferences
- Tags that can be published now with a clear conscience: ChatGPT popular + stands out; Claude stands out; Gemini new model + popular; Perplexity stands out (research); Canva popular; Gamma stands out among deck tools (flag as based on two roundups).
- Tags to withhold until more evidence: every "worthwhile free plan" and "cheap" tag, and every category-2 "stands out" tag for writing generators aimed at marketers.
- Copy.ai, Wordtune, Tome, Microsoft Copilot in Office and Gemini in Workspace did not earn a shortlist place on the evidence read.

### Gaps
- Review-platform scores and community sentiment are missing for all 21 shortlisted tools.
- Most category-1 roundups predate GPT-6 and Gemini 4, so a re-check in early 2027 is likely to shift the ChatGPT/Gemini rows.
