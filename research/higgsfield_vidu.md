# Higgsfield and Vidu: research notes (check date 2026-11-18)

**5-line summary**
1. Tools covered: Higgsfield (higgsfield.ai, Higgsfield Inc., USA) and Vidu (vidu.com, Shengshu Technology).
2. Higgsfield pricing: PARTIALLY VERIFIED. The official pricing page renders its plan cards as images and could not be read; two official Higgsfield articles give plan prices but disagree with each other (Starter $15 vs $19, Plus $49 vs $59). No annual prices were readable.
3. Vidu pricing: NOT VERIFIED for consumer plans (official pricing page shows "Loading pricing plans..." and the subscription page is blocked by robots). Only some official API credit rates (in RMB) and the official credit/refund rules were readable.
4. Could not be verified from official text: Vidu Terms of Use and Privacy Policy body text (only headings loaded), Vidu legal entity and country, Higgsfield current Terms full text (only the archived 23-07-2026 version and official summaries were read), official logo files for both, any Hebrew statement for either, any student discount for either, Higgsfield mobile apps.
5. Research was cut short: the session's web-fetch budget ran out, so several planned official pages (listed under each tool's Gaps) were NOT opened. Nothing below is filled from memory.

Format note: the shared brief's output format (one section per tool, 15 numbered fields) is used. Each section ends with Inferences and Gaps.

---

# Higgsfield

## 1. Official name, previous name
- Product and company are called "Higgsfield" / "Higgsfield AI"; page title "Pricing plans — Higgsfield AI Video & Image Generator". — [Higgsfield pricing page](https://higgsfield.ai/pricing)
- Footer reads "© 2026 Higgsfield, Inc."; the Terms name "Higgsfield Inc. and its affiliated entities". — [About](https://higgsfield.ai/about); [Terms, archived 23-07-2026 version](https://higgsfield.ai/terms-of-use-agreement-23-07-2026)
- No rename is mentioned on the About page; "Higgsfield" is used throughout. — [About](https://higgsfield.ai/about)

## 2. Role (one sentence)
- A web platform for AI video and image generation that combines Higgsfield's own models (Soul, Popcorn, Higgsfield DOP) with many third-party models (for example Sora attributed to OpenAI, Veo attributed to Google, plus Seedance, Kling, Wan, Grok Imagine, MiniMax Hailuo) under one subscription. — [Which AI model should I use](https://higgsfield.ai/creator-hub/help-center/ai-models/which-ai-model-should-i-use); [About](https://higgsfield.ai/about)

### Own models versus third-party (wrapper question)
- The help article labels Soul as "Higgsfield's native image model family", Popcorn as "Higgsfield's native model for storyboards and multi-frame work", and Higgsfield DOP as "Higgsfield's native cinematography layer" (VFX and camera presets). — [Which AI model should I use](https://higgsfield.ai/creator-hub/help-center/ai-models/which-ai-model-should-i-use)
- The same article describes Sora as "Generate video with OpenAI's model" and Veo as "Generate video with Google's model". It does not label the owner of Seedance, Kling, Wan, Grok Imagine or MiniMax Hailuo. — [same](https://higgsfield.ai/creator-hub/help-center/ai-models/which-ai-model-should-i-use)
- The API article says Higgsfield's own models in the API catalog "include Soul 2, Soul Cinema, DoP, and Marketing Studio Image", next to 50+ video and image models such as Seedance, Kling, Wan, MiniMax, PixVerse, LTX, Grok (video) and Ideogram, Recraft, Qwen (image). — [What is the Higgsfield API](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api) (dated Sep 16, 2026)
- About page lists own models and tools: Soul 2.0, Soul Cinema, Higgsfield DOP, Keyframes, Cinema Studio, Soul ID, Soul HEX; partner logos include OpenAI, Google, Black Forest Labs, ByteDance, Kling, Minimax, Wan, Fal, Grok, Anthropic. — [About](https://higgsfield.ai/about)

## 3. Website and logo
- Website: https://higgsfield.ai — [About](https://higgsfield.ai/about)
- Logo file: NOT FOUND. The About page gives no press kit, brand kit or logo URL; the logos shown there are partner logos. — [About](https://higgsfield.ai/about)

## 4. Strengths and limitations
Strengths (documented capabilities, not proof of superiority):
1. Many models under one account. The platform offers its own models plus third-party video models (Sora, Veo, Seedance, Kling, Wan, Grok Imagine, MiniMax Hailuo) in one place. — official: [Which AI model should I use](https://higgsfield.ai/creator-hub/help-center/ai-models/which-ai-model-should-i-use)
2. Own cinematography layer. Higgsfield DOP is described as a native layer with VFX and camera presets for image-to-video. — official: [same](https://higgsfield.ai/creator-hub/help-center/ai-models/which-ai-model-should-i-use)
3. Broad developer and agent access. A pay-as-you-go API with Python and TypeScript SDKs, plus MCP and CLI connections for agents such as Claude or Cursor. — official: [What is the Higgsfield API](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api)

Limitations:
1. User content can be used for model training with no general opt-out. The official summary says "Your content helps improve our models"; the only stated ways to stop it are deleting the account or an enterprise agreement, and content already in trained models cannot be removed. — official: [Terms/Privacy update blog](https://higgsfield.ai/blog/terms-of-use-privacy-policy-update) (published Jul 25, 2026); [Who owns my generations](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially) (Aug 2, 2026)
2. The free plan has no monthly credits and may watermark. "The free plan doesn't include a monthly credit allowance"; free generations "can carry a visible Higgsfield watermark" that stays on those files after upgrading. — official: [What does the free plan include](https://higgsfield.ai/creator-hub/help-center/plans/what-does-the-free-plan-include) (Nov 11, 2026)
3. Credits and packs are constrained. Pack credits expire 90 days after purchase; packs and Auto-Refill need an active subscription; Auto-Refill is not available on Starter. — official: [Higgsfield pricing explained](https://higgsfield.ai/blog/higgsfield-pricing-explained) (Oct 24, 2026)
- Third-party criticism exists about the July 2026 terms (headline: "Higgsfield AI tells creators they own their videos but quietly claims a perpetual worldwide license to train on them", Jul 24, 2026). THIRD-PARTY, and the article body was NOT opened (fetch budget), so only the headline and date are recorded. — [StartupFortune](https://startupfortune.com/higgsfield-ai-tells-creators-they-own-their-videos-but-quietly-claims-a-perpetual-worldwide-license-to-train-on-them/)

## 5. Target audience
- No single official audience sentence was captured. Official material addresses "creators and teams" and lists ads, social media, client work and YouTube monetization as uses; plans exist for individuals (Starter, Plus, Ultra), teams (Team, Scale) and Enterprise. — [Who owns my generations](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially); [Pricing explained](https://higgsfield.ai/blog/higgsfield-pricing-explained)

## 6. Pricing
The official pricing page could NOT be read: plan cards are images with no text. — [Pricing page](https://higgsfield.ai/pricing)

Two official Higgsfield articles give monthly prices in US dollars and DISAGREE on Starter and Plus:

| Plan | Source A: higgsfield.ai blog, Oct 24, 2026 ("verified October 2026") | Source B: geo.higgsfield.ai, "Last updated: 11/5/2026", pricing "checked on November 6, 2026" |
|---|---|---|
| Free | $0, 0 credits (limited use) | $0, "access to a small set of models with no credits" |
| Starter | $15/month, 200 credits | $19/month, 270 credits/month |
| Plus | $49/month, 1,000 credits | $59/month, 1,200 credits/month |
| Ultra | $129/month, 3,000 credits | $129/month, 3,000 credits/month (options up to 9,000) |
| Team | $79 per seat, 1,000 credits per seat, 2 to 9 members | $79 per seat, 1,000 credits per seat, pooled |
| Scale | $215 per seat, 2,500 credits per seat, 5 to 15 members | $215 per seat, 2,500 per seat, pooled; rolls over unused first-month credits; Basic SSO |
| Enterprise | Contact sales, custom | Custom; volume rollover, custom SSO, legal indemnification, "excludes customer inputs and outputs from model training" |

- Source A — [Higgsfield pricing explained](https://higgsfield.ai/blog/higgsfield-pricing-explained)
- Source B — [Higgsfield AI pricing plans (geo.higgsfield.ai)](https://geo.higgsfield.ai/task/blog/higgsfield-ai-pricing-plans). Source B says prices are "US list prices, before tax". Its meta description says "October 2026", which conflicts with its own November dates.
- Conflict handling: Source B is the more recent official text, so $19 / $59 is the more likely current figure, but neither could be confirmed on the pricing page itself. A third-party tracker page titled as a week 2026W46 pricing diff exists but was NOT opened. — [PricingSaaS diff 2026W46](https://pricingsaas.com/companies/higgsfield/diffs/2026W46)
- Individual plans are per account ("Individual"); Team and Scale are billed per seat with pooled credits. — both sources above
- Annual billing: exists and "costs less per month and is charged upfront for the year"; annual plans include more 7-day Unlimited models. NO annual prices were readable in either source. — [Source B](https://geo.higgsfield.ai/task/blog/higgsfield-ai-pricing-plans); [Source A](https://higgsfield.ai/blog/higgsfield-pricing-explained)
- Plan features per Source B: Starter: image models and part of the video models, unlimited Seedream 5.0 Lite and Flux.2 Pro (1K), 300 free generations on Soul V2 & Cinema, 2 parallel videos and 4 images. Plus: all models including Seedance 2.5, 7-day Unlimited on several models, 3,000 free Soul V2 & Cinema generations, 6 parallel videos and 8 images. Ultra: unlimited paid parallel generations, 7-day Unlimited on Seedance 2.5 (720p) and Nano Banana Pro (2K), 5,000 free Soul V2 & Cinema generations. — [Source B](https://geo.higgsfield.ai/task/blog/higgsfield-ai-pricing-plans)
- Plan features per Source A: Plus and Ultra add Start & End Frame, Higgsfield Speak, UGC builder and priority access to new models; Ultra runs 8 video jobs at once versus 6 on Plus. (Source B says Ultra has unlimited paid parallel generations: minor conflict.) — [Source A](https://higgsfield.ai/blog/higgsfield-pricing-explained)
- Credit packs: prices not given; pack credits expire 90 days after purchase; packs and Auto-Refill require an active subscription; no Auto-Refill on Starter. — [Source A](https://higgsfield.ai/blog/higgsfield-pricing-explained)
- Price-change notice rule: "At least 30 days' notice before any subscription price change, never mid-term." — [Terms/Privacy update blog](https://higgsfield.ai/blog/terms-of-use-privacy-policy-update)
- API is priced separately: pay-as-you-go from a prepaid US dollar balance, "the minimum top-up is $5", video billed per second, images per image, DoP per generation; "Funds expire one year after they are added to the balance"; "You're only charged for generations that finish successfully." — [What is the Higgsfield API](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api)

## 7. Free versus trial
- Free plan: $0, no monthly credit allowance, no daily credit allowance, one generation at a time, a limited set of models (Nano Banana Pro and FLUX.2 Pro are marked in the Free column of the pricing page). Generations on free-plan models still deduct credits, so credits or free generations are needed. — [What does the free plan include](https://higgsfield.ai/creator-hub/help-center/plans/what-does-the-free-plan-include) (Nov 11, 2026)
- Source A adds: limited use of Nano Banana Pro and FLUX.2 Pro for images plus one Character generation. Both free models named are IMAGE models; no free video model is named in the sources read. — [Source A](https://higgsfield.ai/blog/higgsfield-pricing-explained)
- Trials: "Trial offers are personalized and aren't available on every account." — [What does the free plan include](https://higgsfield.ai/creator-hub/help-center/plans/what-does-the-free-plan-include)

## 8. Privacy and training on user data
- "Higgsfield may also use content to train and improve its AI models." Deleting content or the account stops future training use; content already in trained models cannot be removed. — [Who owns my generations](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially) (Aug 2, 2026)
- Official summary of the new terms: "Yes. Your content helps improve our models"; no general opt-out is described; "On an enterprise agreement your data isn't used for training." — [Terms/Privacy update blog](https://higgsfield.ai/blog/terms-of-use-privacy-policy-update)
- Per plan: only Enterprise is stated to exclude customer inputs and outputs from training. No paid individual plan is stated to exclude training. — [Source B](https://geo.higgsfield.ai/task/blog/higgsfield-ai-pricing-plans); [Who owns my generations](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially)
- Archived (superseded) terms posted July 23, 2026: Section 4.3 licence was "non‑exclusive, transferable, perpetual, irrevocable, worldwide, fully‑paid, royalty‑free, sublicensable"; Section 4.4 allowed use of Content, Inputs and Outputs "to train, develop, enhance, evolve, and improve" its AI models; Section 16.5(c)(iii) said data already incorporated in models is not deleted with the account. — [Terms, archived 23-07-2026](https://higgsfield.ai/terms-of-use-agreement-23-07-2026)
- The later official summary describes the licence differently: "It's limited to those purposes and lasts while your content is on the platform", ending on account deletion except for publicly shared items. The summary is stated as not binding. — [Terms/Privacy update blog](https://higgsfield.ai/blog/terms-of-use-privacy-policy-update)
- Deleted content stays recoverable for 30 days. "We only feature work you've made public yourself." — [same](https://higgsfield.ai/blog/terms-of-use-privacy-policy-update)

## 9. Commercial rights and watermarks
- "You own your outputs." "The Terms of Use do not restrict commercial use of outputs."; "commercial use rights follow from the Terms of Use for all users". — [Who owns my generations](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially) (Aug 2, 2026)
- "We don't claim ownership of your prompts, inputs, or outputs, and we don't restrict your commercial use of them."; rights "stay yours after you cancel." — [Terms/Privacy update blog](https://higgsfield.ai/blog/terms-of-use-privacy-policy-update)
- CONFLICT: the Oct 24, 2026 official pricing blog lists Commercial use "No" for Free and "Yes" for Starter, Plus, Ultra (free results "can't be used commercially"), while the Aug 2, 2026 help article says commercial rights are the same for all users. Not resolved; the current full Terms were not read. — [Source A](https://higgsfield.ai/blog/higgsfield-pricing-explained); contradicted by [Who owns my generations](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially)
- Watermarks: "Paid plans include watermark-free downloads."; watermarks are "embedded at generation"; free-plan files keep the watermark after upgrade. — [Who owns my generations](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially); [What does the free plan include](https://higgsfield.ai/creator-hub/help-center/plans/what-does-the-free-plan-include)
- Archived terms Section 6.4: Higgsfield "may embed machine-readable watermarks, secure metadata, or content-provenance signals" in Outputs and "does not warrant that any marking will be applied to, or persist in, every Output." — [Terms, archived 23-07-2026](https://higgsfield.ai/terms-of-use-agreement-23-07-2026)
- Legal indemnification "is available on the Enterprise plan only." — [Who owns my generations](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially)

## 10. API, integrations, platforms
- API: separate product from the website plan; "one API key opens every model in the API catalog"; REST at api.higgsfield.ai, docs at docs.higgsfield.ai, console at open.higgsfield.ai; Python and TypeScript SDKs. — [What is the Higgsfield API](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api) (Sep 16, 2026)
- MCP and CLI: agent connections that attach Claude, Cursor and similar to the existing higgsfield.ai account; "everything they generate deducts your plan credits." — [same](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api)
- Site navigation also lists a ChatGPT Plugin and a Reference Extension for Chrome (not described). — [same](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api)
- Platforms: web confirmed. iOS, Android and desktop apps: NOT VERIFIED; the About page mentions no mobile apps. An official help article "What are the official Higgsfield platforms?" exists but was NOT opened. — [About](https://higgsfield.ai/about); [Official platforms article](https://higgsfield.ai/creator-hub/help-center/getting-started/official-higgsfield-platforms)

## 11. Hebrew
- No official page read mentions Hebrew, interface languages or right-to-left. The About page does not mention supported languages. This is lack of verification, not evidence of no support. — [About](https://higgsfield.ai/about)
- The model guide names "Seed Speech" as the multilingual voice option and gives no language list. — [Which AI model should I use](https://higgsfield.ai/creator-hub/help-center/ai-models/which-ai-model-should-i-use)
- The site has at least a Spanish-language path (/es/), seen in search results. — [Spanish terms update URL](https://higgsfield.ai/es/blog/terms-of-use-privacy-policy-update)

## 12. Company, student offers
- Higgsfield Inc. (footer: "Higgsfield, Inc."), "Headquartered in San Francisco". About page address: 550 Montgomery St, 3rd Floor, San Francisco, CA 94111. Archived terms address: 535 Mission St, 14th Floor, San Francisco, CA 94105, United States (address differs between the two sources). Governing law: California. — [About](https://higgsfield.ai/about); [Terms, archived 23-07-2026](https://higgsfield.ai/terms-of-use-agreement-23-07-2026)
- About page says the product "Launched in 2025" and claims a $400M Series B led by DST Global in August 2026 at a $5.4B valuation (company's own claim, not independently checked). — [About](https://higgsfield.ai/about)
- Student or education discount: none found. The official pricing blog does not mention one. An "Academy" page exists (not opened; its content is unknown). — [Source A](https://higgsfield.ai/blog/higgsfield-pricing-explained); [Academy](https://higgsfield.ai/academy)

## 13. Sources (check date 2026-11-18 for all)
- https://higgsfield.ai/pricing — no date; plan cards unreadable
- https://higgsfield.ai/blog/higgsfield-pricing-explained — Oct 24, 2026
- https://geo.higgsfield.ai/task/blog/higgsfield-ai-pricing-plans — last updated 11/5/2026
- https://higgsfield.ai/creator-hub/help-center/plans/what-does-the-free-plan-include — Nov 11, 2026
- https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially — Aug 2, 2026
- https://higgsfield.ai/blog/terms-of-use-privacy-policy-update — Jul 25, 2026
- https://higgsfield.ai/terms-of-use-agreement-23-07-2026 — posted July 23, 2026 (archived, superseded)
- https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api — Sep 16, 2026
- https://higgsfield.ai/creator-hub/help-center/ai-models/which-ai-model-should-i-use — no date captured
- https://higgsfield.ai/about — no date; © 2026
- https://startupfortune.com/higgsfield-ai-tells-creators-they-own-their-videos-but-quietly-claims-a-perpetual-worldwide-license-to-train-on-them/ — Jul 24, 2026, third-party, headline only
- No source used is older than about 6 months.

## 14. Price verification status
**partially verified** (official articles, but they conflict and the pricing page itself was unreadable; no annual prices).

## 15. Changes (dates as written in sources)
- New Terms of Use and Privacy Policy: summary blog published Jul 25, 2026, "effective August 27, 2026". — [Terms/Privacy update blog](https://higgsfield.ai/blog/terms-of-use-privacy-policy-update)
- An earlier version was posted July 23, 2026 with a change for existing users scheduled for August 7, 2026; the archive page says that change did not take effect, and that current terms are effective immediately for new users and on or before August 27, 2026 for existing users. — [Terms, archived 23-07-2026](https://higgsfield.ai/terms-of-use-agreement-23-07-2026)
- Possible price change between October and November 2026 (Starter $15 to $19, Plus $49 to $59), seen only as a difference between two official articles; no official announcement was found. — [Source A](https://higgsfield.ai/blog/higgsfield-pricing-explained); [Source B](https://geo.higgsfield.ai/task/blog/higgsfield-ai-pricing-plans)
- No shutdown, acquisition or rename notice was found. Funding (not an acquisition): $400M Series B, August 2026, per the company. — [About](https://higgsfield.ai/about)

### Inferences
- INFERENCE: Higgsfield is not a pure wrapper. It documents its own models (Soul family, Popcorn, DOP) next to third-party ones, so it is "both".
- INFERENCE: The Starter and Plus price difference between the Oct 24 and Nov 5 official texts most likely reflects a price and credit increase in early November 2026, but it could also be a regional or promotional difference.
- INFERENCE: Because the two free-plan models named are image models and Starter covers only "part of the video models", video generation on the free plan is likely very limited or absent. Not stated outright by the source.

### Gaps
- Current full Terms of Use and Privacy Policy text was not read (fetch budget ran out). Exact current licence wording, minimum age and refund terms are unverified.
- Annual prices, credit-pack prices, per-model credit costs: not readable.
- Mobile and desktop apps, the "official platforms" article, Academy page, changelog: not opened.
- Logo file: not found. Hebrew: no statement found. Student discount: none found.
- Independent 2026 reviews for strengths and limitations: not opened.

---

# Vidu

## 1. Official name, previous name
- Product: "Vidu" (footer "Copyright © 2026 Vidu®"); developer: Shengshu Technology (also written ShengShu Technology). — [Vidu API docs](https://platform.vidu.com/docs/overview/pricing); [Vidu Q4 Preview press release via Webull](https://www.webull.com/news/15708262392742912)
- No rename notice found in the sources read. Current model line in the docs navigation: Vidu Q4 Preview, Vidu Q3, Vidu Q2, Vidu Q1, plus "Vidu S Digital Human". — [Vidu API docs](https://platform.vidu.com/docs/pricing)

## 2. Role (one sentence)
- An AI video generator for text-to-video, image-to-video and reference-to-video, built on Shengshu's own Vidu models (Q-series). — [vidu.com home, title "AI Video Generator for Text, Image & Reference Videos"](https://www.vidu.com/); [Vidu API docs](https://platform.vidu.com/docs/overview/pricing)
- Own models: the API lists only Vidu-branded models (viduq4-preview, viduq3-pro, viduq3-mix, Vidu Q2-turbo, viduq1, Vidu 2.0). No third-party video models appear in the pages read. — [Vidu API pricing docs](https://platform.vidu.com/docs/overview/pricing)

## 3. Website and logo
- Website: https://www.vidu.com ; API platform: https://platform.vidu.com ; company site linked from the docs footer: https://www.shengshu.com/en — [Vidu API docs](https://platform.vidu.com/docs/terms-and-policies/terms-of-use)
- Logo file: NOT FOUND. No press kit or brand page was located.

## 4. Strengths and limitations
Strengths (documented capabilities, not proof of superiority):
1. High-resolution output on the newest model. Q4 Preview outputs 2K or 4K at 10-bit colour depth (also 540p, 720p, 1080p). — official press release: [Webull, October 7, 2026](https://www.webull.com/news/15708262392742912)
2. Heavy reference control. Q4 Preview accepts up to 15 image references and up to 3 audio references. — official press release: [same](https://www.webull.com/news/15708262392742912)
3. Long single clips with an API. The API docs list 1 to 16 second clips for viduq3-pro and 3 to 16 seconds for viduq4-preview. — official: [Vidu API pricing docs](https://platform.vidu.com/docs/overview/pricing)
- THIRD-PARTY (Dupple review, published January 24, 2026, modified May 18, 2026; borderline old): Q3 generates dialogue, sound effects and music in the same pass; Off-Peak Mode generates without using credits when the queue is quiet; strong anime and 2D focus. — [Dupple](https://dupple.com/tools/vidu-ai)

Limitations:
1. No refunds. The official pricing page says refunds are not available; cancellation goes through support@vidu.com. — official: [Vidu pricing page](https://www.vidu.com/pricing)
2. Subscription credits expire quickly. "Subscription Credits: Credits included in your plan, valid for 30 days." (Purchased and bonus credits last 2 years.) — official: [Vidu pricing page](https://www.vidu.com/pricing)
3. Free output is restricted. The free tier "caps output at 720p", has "a visible watermark in the lower-right corner of every generated video", and "Free plan videos on Vidu cannot be used commercially." — official blog: [Free AI animation, May 26, 2026](https://www.vidu.com/blog/free-ai-animation) (about 6 months old: borderline old source)
- THIRD-PARTY (Dupple, same dates as above): plan prices are not readable on the pricing page before signup; native audio supports English, Japanese and Chinese only; failed renders still consume credits; clips over 16 seconds need stitching. The same review says output tops out at 1080p, which is contradicted by the October 7, 2026 press release (4K on Q4 Preview), so that point is outdated. — [Dupple](https://dupple.com/tools/vidu-ai); contradicted by [Webull press release](https://www.webull.com/news/15708262392742912)

## 5. Target audience
- Q4 Preview "targets independent creators, small studios, and production teams" (paraphrase of the press release). — [Webull press release](https://www.webull.com/news/15708262392742912)

## 6. Pricing
Consumer plans: NOT VERIFIED. The official pricing page shows only "Loading pricing plans..."; the subscription page is blocked for automated reading. — [Vidu pricing page](https://www.vidu.com/pricing); [subscription page](https://www.vidu.com/subscription/personal)

What the official pricing page does state:
- Three credit types: subscription credits (valid 30 days), purchased credits (bought on demand, valid 2 years), bonus credits from events or the Artist Program (valid 2 years). — [Vidu pricing page](https://www.vidu.com/pricing)
- New users get trial credits at sign-up; subscribers receive credits with their plan; daily logins earn credits. — [same](https://www.vidu.com/pricing)
- Subscriptions via Stripe renew automatically, monthly or yearly depending on the plan. No refunds. — [same](https://www.vidu.com/pricing)
- "Off-Peak Mode" is listed as a feature, without per-plan detail. — [same](https://www.vidu.com/pricing)

THIRD-PARTY plan figures, NOT confirmed by an official page, and from an old-ish source (Dupple, published January 24, 2026, modified May 18, 2026; the page itself says it "has not been through a dated price check yet"). Do not publish as verified:
- Free: 80 credits; Standard: $10/month ($8 annual), 800 credits; Premium: $35/month ($28 annual), 4,000 credits; Ultimate: $99/month ($79 annual), 8,000 credits; Enterprise from $1,399 per workspace. — [Dupple](https://dupple.com/tools/vidu-ai)

Official API pricing (partly captured; the page text was fragmented):
- Prices are listed in RMB; a unit price row shows "1" and "0.03125" (reading unclear). — [Vidu API pricing docs](https://platform.vidu.com/docs/overview/pricing)
- viduq4-preview (reference-to-video, image-to-video, 3 to 16 s, 4K): 78 credits/second. viduq3-mix (reference-to-video, 3 to 16 s, 720p): 24 credits/second. Vidu Q2-turbo 540p: 6 credits for the first second, then 2 credits/second. — [same](https://platform.vidu.com/docs/overview/pricing)
- Voice cloning: first 10 clones free, then "additional voices cost 899 credits each (28 RMB each)". — [same](https://platform.vidu.com/docs/overview/pricing)
- Off-peak credit columns exist in several model tables; values not captured. — [same](https://platform.vidu.com/docs/overview/pricing)
- Q4 Preview launch promotional pricing "starts at $0.014/sec"; final pricing, resolutions, features and terms may vary by plan and region. — [Webull press release, October 7, 2026](https://www.webull.com/news/15708262392742912)

## 7. Free versus trial
- Official: new users get trial credits at sign-up, and daily logins earn credits. Amounts not stated on the readable part of the page. — [Vidu pricing page](https://www.vidu.com/pricing)
- Official blog (May 26, 2026): the free plan has "a recurring credit allowance", enough for roughly 10 to 16 clips per month; a 4-second standard-quality clip costs about 5 credits; 720p cap; visible watermark; no commercial use. — [Free AI animation](https://www.vidu.com/blog/free-ai-animation)
- Whether Off-Peak Mode is available on the free plan: NOT VERIFIED officially (a third-party review claims "unlimited off-peak generation" on Free and itself says this should be confirmed). — [Dupple](https://dupple.com/tools/vidu-ai)

## 8. Privacy and training on user data
- NOT VERIFIED. The API platform Privacy Policy page loaded only its table of contents (sections include "How we transfer" and "Cross-border transfer of personal data") and fragments on retention and erasure; no text about training on user content could be read. Contact given: platform@vidu.com. — [Vidu API privacy policy](https://platform.vidu.com/docs/terms-and-policies/privacy-policy)
- The consumer (vidu.com) terms and privacy policy URLs were not located or opened.

## 9. Commercial rights and watermarks
- Official blog (May 26, 2026): free-plan videos "cannot be used commercially"; commercial rights and watermark removal are tied to paid plans; free output carries a visible watermark in the lower-right corner. — [Free AI animation](https://www.vidu.com/blog/free-ai-animation)
- Which paid plan grants which right: NOT VERIFIED (plan table unreadable; a blog statement without a per-plan mark is not enough to assign it to a specific plan).
- API Terms of Use: only section headings loaded ("License Grant and Scope", "Content Generated by End Users", "Governing Law and Jurisdiction"); the wording is NOT VERIFIED. — [Vidu API terms of use](https://platform.vidu.com/docs/terms-and-policies/terms-of-use)

## 10. API, integrations, platforms
- Official API platform at platform.vidu.com with documented models (Q4 Preview, Q3, Q2, Q1, Vidu 2.0), digital human (Vidu S2), audio, image generation, subjects, motion sync, video replication and "one-click" finished-video solutions. — [Vidu API pricing docs](https://platform.vidu.com/docs/overview/pricing)
- Q4 Preview is available "through Vidu's web product and API platform". — [Webull press release](https://www.webull.com/news/15708262392742912)
- Web: yes (vidu.com). Mobile: the vidu.com navigation has a "Get App" link, and App Store listings exist, for example "Vidu - AI Video Generator" (id6742448149). The publisher of that listing was NOT checked, and several similarly named apps from unknown publishers appear on the App Store, so the official app is NOT VERIFIED. Android and desktop: not verified. — [Free AI animation blog (nav)](https://www.vidu.com/blog/free-ai-animation); [App Store listing](https://apps.apple.com/ee/app/vidu-ai-video-generator/id6742448149)

## 11. Hebrew
- No official source read mentions Hebrew, interface languages or right-to-left. The Q4 Preview press release does not state supported languages or lip-sync languages. Lack of verification, not evidence of no support. — [Webull press release](https://www.webull.com/news/15708262392742912)
- THIRD-PARTY (Dupple, modified May 18, 2026, refers to Q3): native audio output limited to English, Japanese and Chinese. Not confirmed officially and predates Q4 Preview. — [Dupple](https://dupple.com/tools/vidu-ai)

## 12. Company, student offers
- Company: Shengshu Technology, which describes itself as an AI company developing world models, with research in video generation and embodied intelligence. Country: NOT VERIFIED from the sources read (the press release carries a Singapore dateline and gives no headquarters; the legal entity in the Terms could not be read). — [Webull press release](https://www.webull.com/news/15708262392742912)
- Student or education discount: none found. The pricing page mentions bonus credits from an "Artist Program" (not described as a student programme). — [Vidu pricing page](https://www.vidu.com/pricing)
- Events: a "General Terms & Conditions" page governs Vidu activities and contests; participation is free; it does not mention students. — [Vidu activity general rule](https://www.vidu.com/activity/general-rule)

## 13. Sources (check date 2026-11-18 for all)
- https://www.vidu.com/pricing — no date; plan table did not load
- https://www.vidu.com/subscription/personal — blocked (robots)
- https://platform.vidu.com/docs/overview/pricing — no date; © 2026; partial capture
- https://platform.vidu.com/docs/terms-and-policies/terms-of-use — headings only
- https://platform.vidu.com/docs/terms-and-policies/privacy-policy — table of contents only
- https://www.vidu.com/blog/free-ai-animation — May 26, 2026 (about 6 months: borderline old)
- https://www.vidu.com/activity/general-rule — no date
- https://www.webull.com/news/15708262392742912 — company press release (PR Newswire), October 7, 2026, read via a syndication copy
- https://dupple.com/tools/vidu-ai — third-party; published January 24, 2026, modified May 18, 2026 (OLD / borderline)
- https://apps.apple.com/ee/app/vidu-ai-video-generator/id6742448149 — search result only, not opened

## 14. Price verification status
**not verified** (consumer plans). Only fragments of official API credit rates and credit rules were confirmed.

## 15. Changes (dates as written in sources)
- Vidu Q4 Preview, a public preview of the next flagship model, announced October 7, 2026 with launch promotional pricing. — [Webull press release](https://www.webull.com/news/15708262392742912)
- No shutdown, acquisition, rename or retirement notice was found.
- Funding headlines seen in search results only (articles NOT opened, so details and dates are unverified; funding is not an acquisition): "Alibaba leads $293M bet on Shengshu"; "ShengShu Technology Completes Series A+ Funding of Over RMB 600 Million"; "Chinese startup ShengShu raises 2 billion yuan". — [Dealroom](https://dealroom.co/news/127301-alibaba-leads-293m-bet-on-shengshu-as-chinas-ai-video-race-heats-up/); [StreetInsider](https://www.streetinsider.com/Basic+Content/ShengShu+Technology+Completes+Series+A%2B+Funding+of+Over+RMB+600+Million/25948969.html); [The Standard](https://www.thestandard.com.hk/innovation/article/328958/Chinese-startup-ShengShu-raises-2-billion-yuan-to-advance-artificial-general-intelligence)

### Inferences
- INFERENCE: Vidu is not a wrapper. All models seen in its API docs are Vidu-branded and the developer presents them as its own.
- INFERENCE: The third-party plan names (Free, Standard, Premium, Ultimate, Enterprise) may still be current, but with Q4 Preview launched in October 2026 the prices and credit amounts from a May 2026 review may have changed.
- INFERENCE: API prices shown in RMB on platform.vidu.com suggest that page was served in a China-region pricing view; US dollar API prices may differ.

### Gaps
- Consumer plan names, prices, annual terms and per-plan features: official page unreadable.
- Terms of Use and Privacy Policy body text (training on data, licence, commercial rights per plan, legal entity, country, governing law): not readable.
- Official mobile apps (publisher confirmation), desktop app, integrations: not verified.
- Logo file, Hebrew statement, student discount: not found.
- Independent 2026 reviews newer than 6 months: not opened (fetch budget ran out).
