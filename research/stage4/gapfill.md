# Stage 4 gap-fill: pricing from official pages (2026-11-19)

Official pricing pages re-read with plain `curl` (no fetch quota). Each entry: URL read, what changed, verification before → after, or why nothing changed. Sources added or updated in each record carry `checked: "2026-11-19"`.

## Spline (3d/spline.json)
- Read: https://www.spline.design/pricing, https://spline.design/education
- Changed: monthly/yearly toggle confirmed (monthly shown struck through, savings match); add-on credits clarified ($5/mo per 1,000 monthly, $48/yr yearly), so the earlier conflict is resolved; student discount confirmed (amount not published); summary_line now gives both billings.
- Verification: אומת חלקית → אומת ממקור רשמי (prices shown with "$" only, no currency code; noted).

## Activepieces (agents-automation/activepieces.json)
- Read: https://www.activepieces.com/pricing (plus its own `_nuxt` script bundle, where the Annual toggle's prices live: `annualMonthlyPrice` 16 and 166)
- Changed: added yearly records Plus $16/mo and Team $166/mo billed yearly, Ultimate (quote), summary_line; free-credit reset conflict (table "Daily" vs FAQ "every month") still recorded.
- Verification: אומת חלקית → אומת ממקור רשמי.

## Gumloop (agents-automation/gumloop.json)
- Read: https://www.gumloop.com/pricing (FAQ answers from the page's embedded FAQPage JSON-LD)
- Changed: Pro plan details (credit value $0.005, 8% / 16% BYOK fee, no rollover, opt-in overage at $0.005/credit), unverified_notes trimmed.
- Verification: אומת חלקית → אומת ממקור רשמי (single plan, $37/month; no annual option shown).

## Microsoft Copilot Studio (agents-automation/microsoft-copilot-studio.json)
- Read: https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/copilot-studio (readable)
- No change: the page gives the same facts already in the record ($200.00 per 25,000-credit pack per month, pay-as-you-go and pre-purchase without a per-credit rate or pre-purchase price). The page also says "This product is not available in your market" for the fetching region. No individual plan exists.
- Verification: אומת חלקית → אומת חלקית (unchanged).

## Mistral Vibe (assistants/mistral-vibe.json)
- Read: https://mistral.ai/pricing (prices also checked in the page's `data-prices` attributes)
- Changed: EUR prices confirmed equal to USD (14.99 / 24.99 / 5.99); the student card's "$25.5/mo in API credits" placed in the student plan note; "$50 /mo" next to Team explained only as page data (24.99 × 2, rounded), flagged as unexplained on the page.
- Verification: אומת חלקית → אומת ממקור רשמי (regular monthly prices unambiguous, excluding tax).

## Adobe Podcast (audio/adobe-podcast.json)
- Read: https://podcast.adobe.com/en/plans
- No change: the page lists the Firefly Pro / Podcast Premium features already in the record but shows no price. The price lives on Adobe's Firefly plans page, which is script-rendered (see Adobe Firefly below).
- Verification: אומת חלקית → אומת חלקית (unchanged).

## Adobe Firefly (images/adobe-firefly.json)
- Read: https://www.adobe.com/products/firefly/plans.html and its plans fragment https://www.adobe.com/cc-shared/fragments/products/firefly/plans/individuals.plain.html
- No change: the page is an empty shell; plan cards are loaded from Adobe's merchandising service, and the HTML holds no plan names or prices. The page metadata schedules a "ff-black-friday" promotion from 2026-11-10 to 2026-12-07, so prices shown in a browser now would be promotional anyway.
- Verification: אומת חלקית → אומת חלקית (unchanged).

## Adobe Illustrator (graphic-design/adobe-illustrator.json)
- Read: https://www.adobe.com/products/illustrator/plans.html
- No change: same Adobe shell as Firefly (comparison tables loaded by script, no prices in the HTML); a "black-friday" promotion is scheduled 2026-11-13 to 2026-12-07.
- Verification: אומת חלקית → אומת חלקית (unchanged).

## Google Flow Music (audio/google-flow-music.json)
- Read: https://www.flowmusic.app/pricing
- Changed: correction. The FAQ says Starter $8/mo billed monthly or $6/mo billed yearly, Plus $24 / $18, Member $64 / $48; the record had the yearly figures as monthly. Plans rewritten as monthly + yearly pairs, Google One inclusion noted, starting_price now $8 monthly, credit packs from $3 / 500. commercial_rights filled from the same FAQ (Google does not claim ownership; no explicit commercial-use statement).
- Verification: אומת חלקית → אומת ממקור רשמי.

## LALAL.AI (audio/lalal-ai.json)
- Read: https://www.lalal.ai/pricing/
- Changed: billing confirmed as annual only (no monthly toggle on the page), FAQ facts added (Fast Queue minutes reset each billing period, no rollover, non-refundable); hebrew: site language switcher lists 12 languages without Hebrew → "המקור לא מזכיר עברית" (was "לא אומת").
- Verification: אומת חלקית → אומת ממקור רשמי. Free 10-minute renewal still unknown.

## Moises (audio/moises.json)
- Read: https://moises.ai/pricing/ (served the home page with FAQ)
- Pricing unchanged: no prices on the page; it says "Log in to see our full pricing and features table".
- Changed: privacy filled from the same page's FAQ ("Moises will never train on your data"; models trained only on licensed material).
- Verification: לא אומת → לא אומת (unchanged).

## Murf (audio/murf.json)
- Read: https://murf.ai/pricing, https://murf.ai/pricing/ , https://murf.ai/pricing/studio
- No change: all three return the same 6 KB single-page-app shell (title "Murf", no plan names or prices in HTML or inline scripts).
- Verification: לא אומת → לא אומת (unreadable).

## Speechify (audio/speechify.json)
- Read: https://speechify.com/pricing/
- Changed: same figures re-confirmed on the official page (Premium $29/month billed monthly, $139 billed yearly; Free plan); unverified_notes narrowed to Studio/API pricing (separate pages).
- Verification: אומת חלקית → אומת ממקור רשמי (the record's own individual plans are unambiguous).

## Stable Audio (audio/stable-audio.json)
- Read: https://stableaudio.com/pricing
- No change: Next.js client-rendered shell; the HTML and its `__next_f` payload carry only the page title, no plan names or prices.
- Verification: אומת חלקית → אומת חלקית (unchanged).

## Kittl (graphic-design/kittl.json)
- Read: https://www.kittl.com/pricing (embedded schema.org `Offer` data, plus the meta description and FAQ)
- Changed: monthly prices found (Pro $15, Expert $35, Max $65) and yearly totals ($144 / $312 / $576 = $12 / $26 / $48 a month), currency USD stated in the data; plans rewritten as monthly + yearly pairs; summary_line, starting_price.verified true; llms.txt conflict kept in notes.
- Verification: אומת חלקית → אומת ממקור רשמי.

## Lovart (graphic-design/lovart.json)
- Read: https://www.lovart.ai/pricing
- No change: the HTML and its Next.js payload hold only the toggle (monthly / annual), "Team plan" and the FAQ (credit expiry, Relax queue); plan cards with prices load from an API at runtime. No plan prices, currency or credit amounts in the page.
- Verification: לא אומת → לא אומת (unreadable for prices).

## Fireflies.ai (meetings-knowledge/fireflies.json)
- Read: https://fireflies.ai/pricing (plan data in the page's Next.js payload: `monthlyPriceDescription` "$18 / $29 per seat / month, billed monthly")
- Changed: the struck-through $18 and $29 confirmed as monthly-billing prices; added monthly records for Pro and Business; summary_line updated.
- Verification: אומת חלקית → אומת ממקור רשמי.

## Granola (meetings-knowledge/granola.json)
- Read: https://www.granola.ai/pricing (docs.granola.ai is blocked by the proxy, 403)
- No change: same figures as the record ($0 / $14 / $35 "per user per month"); neither the page text nor its script data mention monthly vs annual billing or an annual discount.
- Verification: אומת חלקית → אומת חלקית (unchanged).

## Read AI (meetings-knowledge/read-ai.json)
- Read: https://www.read.ai/plans-pricing
- Changed: the page now labels the lower price "USD. Per user / month when billed annually" and the higher one monthly. Pro $19.75 / $15, Enterprise $29.75 / $22.50, Enterprise+ $39.75 / $29.75; plans rewritten as monthly + yearly pairs; starting_price $15 yearly, verified; no-refund and volume discounts noted.
- Verification: אומת חלקית → אומת ממקור רשמי.

## tl;dv (meetings-knowledge/tldv.json)
- Read: https://tldv.io/pricing/ (canonical https://tldv.io/app/pricing/)
- No change: single-page-app shell; only the meta description ("40% off on every annual plan!"), no plan cards or prices in HTML or inline scripts.
- Verification: אומת חלקית → אומת חלקית (unreadable for prices).

## Wispr Flow (meetings-knowledge/wispr-flow.json)
- Read: https://wisprflow.ai/pricing
- Changed: Growth's second price explained by the page's own labels (`data-price="monthly-business-notetaker"`): $33 monthly / $26 yearly is Growth with unlimited Notetaker; $23 / $18 is dictation only. The Notetaker offer to Nov 30 is an add-on trial for teams, not a price promotion. Student 50% / educator 40% already in the record, re-confirmed.
- Verification: אומת חלקית → אומת ממקור רשמי.

## Base44 (no-code-apps/base44.json)
- Read: https://base44.com/pricing
- Pricing unchanged in substance: yearly prices re-confirmed ($16 / $40 / $80 / $160 a month, billed annually); the monthly toggle's prices are not in the HTML or the page data (only a homepage string "Paid plans from $20 /mo" without billing type). Monthly prices were not computed from the 20% rule.
- Changed: commercial_rights (FAQ: "You own everything you build on Base44"), student_benefits (education pricing case by case, student email verification), unverified_notes.
- Verification: אומת חלקית → אומת חלקית.

## Bolt (no-code-apps/bolt.json)
- Read: https://bolt.new/pricing and its own script bundles on bolt.new (`/assets/Pricing-*.js`, `/assets/fetch-*.js`, where the plan table `rateMonthly:{month:25,year:18}` for Pro tier 1 and `{month:30,year:27}` for Teams tier 1 lives)
- Changed: yearly records added (Pro $18/mo, Teams $27/mo, billed yearly up front); rollover rule (unused tokens kept up to two months) noted; Bolt Lite conflict resolved in favour of the pricing page.
- Verification: אומת חלקית → אומת ממקור רשמי.

## Emergent (no-code-apps/emergent.json)
- Read: https://emergent.sh/pricing
- Changed: re-read confirms the Annual toggle with $20 / $17 and $200 / $167 and the stated savings ($36, $396) that match the difference; no new figures. The free-credit renewal conflict (pricing page vs help center) is unrelated to paid prices and stays noted.
- Verification: אומת חלקית → אומת ממקור רשמי.

## Stitch (ui-web/google-stitch.json)
- Read: https://stitch.google.com/ (Stitch has no separate pricing page in the record)
- No change: the response is an app shell with only the title "Stitch - Design with AI"; no plan, quota or price text.
- Verification: לא אומת → לא אומת (unreadable).

## Relume (ui-web/relume.json)
- Read: https://www.relume.ai/pricing
- No change: same content as the record. Launch hosting is clear ($12/site/mo billed yearly, $16 billed monthly), but the Pro AI workspace is only "from $24 / month" and Site Builder plans "From $18 / $40 / $36" with no billing type, in text or page data.
- Verification: אומת חלקית → אומת חלקית (unchanged).

## UX Pilot (ui-web/ux-pilot.json)
- Read: https://uxpilot.ai/pricing (schema.org Offer data and Next.js payload)
- Changed: free tier now concrete from the page's Offer data (80 daily credits, one project; daily credits do not roll over), free_renewing true. Paid prices NOT recorded: the page's static data conflicts (Offer data: Pro $22/mo, Teams $31/user/mo; embedded comparison copy: Pro $29 monthly or $19 yearly, Teams $39/user; legacy Standard $14/mo, $144/yr; the live cards get prices by script). All listed in unverified_notes.
- Verification: אומת חלקית → אומת חלקית.

## Captions (video-editing/captions.json)
- Read: https://captions.ai/pricing
- Changed: official pricing page added as a source for Max ($24.99/mo, 500 credits, 2 seats) and Frontier ($69.99 / $139.99 / $279.99, seats); notes that prices are iOS-only, in USD, before tax; yearly plans exist without published prices; credits roll over up to 3× (page FAQ). Basic and Lite are not on the pricing page (help article only).
- Verification: אומת חלקית → אומת חלקית (platform-dependent prices, no yearly amounts).

## D-ID (video-editing/d-id.json)
- Read: https://www.d-id.com/pricing/studio/ and its own card script https://www.d-id.com/wp-content/themes/airfleet/dist/pricing-page-app.js
- Changed: unverified_notes only. The script holds several plan sets with minute sliders and an unexplained true/false variant (e.g. Lite lowest tier $5.9 monthly / $4.7 a month yearly, or $10 / $8), plus a running promotion on every card ("Unlimited videos for your first month!"). Too ambiguous to record as plan prices; the $5.90 starting price from the March 2026 release matches Lite's lowest monthly figure. FAQ facts added (minutes renew monthly, no rollover, rounded up to 15 s).
- Verification: אומת חלקית → אומת חלקית.

## HeyGen (video-editing/heygen.json)
- Read: https://www.heygen.com/pricing (Next.js payload `creditTiers`: priceMonthly / priceYearly / yearlyBilledTotal)
- Changed: yearly prices added for Pro ($41/mo, $488/yr) and Business ($119/mo, $1,428/yr); Creator yearly total $288 noted; Pro credit tiers summarised (2,000 credits $99 … 100,000 credits $4,300 monthly).
- Verification: אומת חלקית → אומת ממקור רשמי.

## OpusClip (video-editing/opusclip.json)
- Read: https://www.opus.pro/pricing (page text plus its inline pricing script)
- Changed: Pro monthly credits filled (300 per pack per month, up to 15 packs; rollover 1 month monthly, 2 months yearly); unverified_notes now records the three geo price tiers in the page script (tier 1 = global list price Pro $29 / $14.5, Starter $15; tier 3 incl. BR, MX, IN: Pro $19 / $9.5, Starter $9) and a "cyber-month" style flag on the pack selector.
- Verification: אומת חלקית → אומת חלקית (region-dependent prices).

## Synthesia (video-editing/synthesia.json)
- Read: https://www.synthesia.io/pricing
- Changed: Business now has prices ($99 per member per month billed monthly, $79 billed yearly = $948/yr, 6,000 credits a month / 72,000 a year, up to 10 members), replacing "not published". Starter and Pro unchanged.
- Verification: אומת חלקית → אומת חלקית (first-month promotion still running: Starter $9, Pro $49).

