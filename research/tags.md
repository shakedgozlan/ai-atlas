# Card tags: rules and evidence (check date 2026-11-18)

Five tags can appear on a card. Each is decided by a fixed rule, not by opinion. A tool with no evidence gets no tag.

## 1. "מודל חדש" (new model)
Rule: the latest significant version is dated within 90 days before the check date. Source: `filters.new_notable.latest_version_date`, evidence in new_and_notable.md.
Result: Google Flow, Kling AI, Pika, Higgsfield, Vidu, Wan.

## 2. "בולט בסקירות" (prominent in reviews)
Rule: the tool, or its own model, is covered in at least 5 of the 6 independent roundups counted in new_and_notable.md (MASV, Kingy AI, Pinggy, Tech Insider, Curious Refuge, Rework). Coverage of the tool's model counts for every tool alike. Dedicated single-tool reviews are not counted.

| Tool | Roundups (of 6) |
|---|---|
| Google Flow | 5 (2 name Flow fully, 1 partly, 2 cover only Veo / Omni) |
| Runway | 5 |
| Kling AI | 5 (Kingy carries a sponsorship caveat for a separate linked video) |
| Hailuo AI | 5 (2 cover only MiniMax H3) |
| Luma | 5 |
| Dreamina | 4 (2 cover only Seedance) |
| Wan | 3 |
| Pika | 2 |
| Vidu | 2 (+1 from earlier notes, not counted) |
| Higgsfield | 1 (+2 dedicated reviews with weaknesses, not counted) |

Result: Google Flow, Runway, Kling AI, Hailuo AI, Luma. Caution: six roundups is a small sample.

## 3. "פופולרי" (popular)
Rule: the tool is named in an independent web-traffic ranking based on Similarweb data. Pages opened on 2026-11-18:
- a16z, "The Top 100 Gen AI Consumer Apps", 6th edition, posted March 9, 2026, unique monthly visits per Similarweb as of January 2026. https://a16z.com/100-gen-ai-apps-6/ . Ranks read from The Neuron's copy of the list (Mar 13, 2026): Higgsfield 40, Kling AI 45, Google Labs 25 (the umbrella site, not Flow alone). https://www.theneuron.ai/explainer-articles/a16z-just-ranked-the-100-most-popular-ai-apps-heres-the-full-list-and-what-it-tells-us-/
- OfficeChai, "Top AI Video Generation Platforms By Traffic [2026]", published March 27, 2026, updated April 23, 2026, traffic share per Similarweb as of February 2026: RunwayML "~14%", Google Flow "~10%", KlingAI "~7%". https://officechai.com/ai/top-ai-video-generation-platforms-by-traffic-2026
- Checked, none of the ten listed: https://onelittleweb.com/digital-market-intelligence/ai-tools/video-content-creator-tools/

Result: Google Flow, Runway, Kling AI, Higgsfield.
Cautions: the data is from January and February 2026, so it is 9 to 10 months old. Neither page gives visit counts. Hailuo is mentioned in the a16z text ("built real traction") without a rank, so it gets no tag. Company-reported numbers (Kling "over 60 million creators", Hailuo "10M+" Google Play downloads) are not used.

## 4. "מחיר נמוך" (low price)
Rule: the regular starting price is verified from an official source and is 10 USD a month or less (`filters.starting_price`).
Result: Pika (10), Wan (10). Not tagged because the price is unverified: Kling AI (10), Hailuo AI (9.99), Vidu (8.25, yearly billing, limited-time offer).

## 5. "חינם מתחדש" (renewing free credits)
Rule: a no-payment plan whose free credits renew daily or monthly, per `pricing.free_tier`.
Result: Google Flow (50 credits a day), Kling AI (monthly, amount not verified), Vidu, Dreamina, Wan (daily, amounts not stated).
Not tagged: Runway (125 one-time credits), Pika (0 monthly credits), Higgsfield (no credits), Hailuo AI (renewal not verified), Luma (free plan not verified).
