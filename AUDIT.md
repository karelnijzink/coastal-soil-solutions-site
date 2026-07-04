# AUDIT.md — coastalsoilsolutions.com (pre-rebuild snapshot)

Audited 2026-07-04 via live fetch (Google Sites). Pages in nav: `/home`, `/services`, `/contact-us`. No other pages linked. This file is the source of truth for the content-accuracy pass (docs/FACT-CHECK.md).

## A. Content inventory (verbatim-level capture)

### /home — "Our Story"
- Founder narrative, first person: lifelong gardening from childhood ("From when I could walk, I cannot remember a time when gardening was not part of my life…" — helping a parent plant flowers/maintain beds), progression into soil biology and regenerative agriculture.
- Food-security framing: feeding ~9.7 billion people by 2050.
- Mission: educate communities on soil health; help residents implement sustainable practices.
- Themes: soil biology, freshwater protection, biodiversity, ethical livestock, GHG reduction.
- No founder name on this page, no CTA, no imagery of note. Nav "More" dropdown duplicates Home/Contact/Services.

### /services
- **Consultation — $100 CAD.** "First step in getting your soil to its healthiest and most productive state"; identifies negative factors; delivers "a basic scope of variables affecting your soil, with a recommended plan moving forward."
- **Testing/Analysis — $190 CAD.** Beyond home test kits; macro/micro nutrients, mineral content, bacterial/fungal activity.
- **Soil Amendment Programs — custom-priced** by project size: "dead dirt" → microbially rich soil via IMO, mycology, traditional composting, cover cropping, fermentation; contact for estimate.
- Service area: **Lower Mainland, BC.**

### /contact-us
- Matthew Tomlinson · **tomlinsonbc@gmail.com** · **778-991-6202** · Instagram link (@coastalsoilsolutions). No form, no address, no hours.

**Contradiction check vs confirmed inputs: none.** All prices, techniques, contact details, and service area match.

## B. Gap register → closed by

| Gap on current site | Closed by (new site) |
|---|---|
| FPJ absent entirely (wholesale line invisible) | /fpj page: product, ingredients, usage, stockist, wholesale CTA |
| No booking flow, no forms, no CTAs | Sitewide booking CTAs → /contact/#book (placeholder until Cal.com live) |
| No proof (no founder name, credentials, testimonials, stockist mention) | Proof strip, About page, It's About Thyme factual mention, [FROM MATT] slots |
| No CASL identity block | Global footer: business ID, mailing-address slot, contact, /privacy |
| No SEO structure | Per-page titles/metas/H1s, OG tags, JSON-LD LocalBusiness, sitemap.xml, robots.txt |
| Hobby-tier signals (Google Sites footer) | Own static site, refreshed identity |
| Orphaned IA (prices/contact/story each on one dead-end page) | Cross-linked pages, repeated contact + CTA, footer nav |

## C. Asset salvage

- **Blue "C" logo** — evolved into new monogram (original vector not on file; refined mark drawn fresh in brand palette; Matt to supply original if he wants closer tracing). See assets/brand/.
- **Founder story (/home)** — migrated to /about, tightened, first person preserved.
- **Services copy** — "dead dirt → microbially rich soil", beyond-home-test-kit positioning: kept near-verbatim on /services.
- **Instagram @coastalsoilsolutions** — login-walled; not scraped (guardrail). Product/compost photos route through Matt → docs/PHOTO-TODO.md.
- **FPJ facts (confirmed inputs, not on old site):** organic (descriptive), pet/child safe, 15 ml per litre, half-gallon jugs; ingredients: horsetail, nettle, Cannabis sativa, organic sugar, dechlorinated water, IMO; sole stockist It's About Thyme Nursery, Burnaby.

## D. Domain & DNS (document only — DNS is never touched by this build)

Cutover of coastalsoilsolutions.com from Google Sites to GitHub Pages requires: www CNAME → karelnijzink.github.io; apex A 185.199.108.153 / .109.153 / .110.153 / .111.153 (optional AAAA 2606:50c0:8000–8003::153); CNAME file emitted into build output; Pages custom domain + Enforce HTTPS; domain verification TXT on the GitHub account first. Manual, by Matt/Karel, per docs/DNS-CUTOVER.md. Google Site stays live until confirmed cutover.

## E. SEO baseline

Brand does not surface in web search for its own name + region (near-zero equity). Nothing lost by migrating platforms; post-launch, measure brand-name SERP + "soil testing lower mainland", "organic fertilizer bc", "fpj fertilizer".
