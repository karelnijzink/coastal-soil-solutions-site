# PLAN.md — Coastal Soil Solutions Website Rebuild

**Status: PHASE 0 COMPLETE — AWAITING OPERATOR APPROVAL. No build work may start until this plan is approved.**

Prepared 2026-07-04 by the multi-agent planning pass (6 subagents, sections below).
Repo: `karelnijzink/coastal-soil-solutions-site` (public; transfer-to-Matt documented TODO).
Pages: already enabled, `build_type=workflow`, target URL `https://karelnijzink.github.io/coastal-soil-solutions-site/`.

## Decision log

| Decision | Choice | Note |
|---|---|---|
| Hosting/platform | **Static site on GitHub Pages** (this masterprompt) | **Supersedes** the earlier Framer recommendation in `Coastal_soil/plan/04-brand-web.md`. Rationale: zero hosting cost, repo-based handoff, no subscription dependency. |
| Static generator | **Eleventy v3** | See Build Agent section for full justification vs Astro / plain HTML. |
| Sitemap | 6 content pages + privacy + 404 | Home, FPJ Fertilizer, Soil Services, Schools & Community, About/Our Story, Contact. |
| Identity | Evolve the blue "C", not a rebrand | Palette/type tokens from prior brand pass, refined for WCAG (see Brand section). |
| Booking | Placeholder at launch | Single `BOOKING_URL` constant; one-line swap when Cal.com/Calendly is live. |
| Imagery | Higgsfield-generated mood/texture only | Authenticity rule: no fake people/labels/results; real-photo slots tracked as TODOs. |
| Analytics | GoatCounter slot, shipped commented-out | No cookies, no consent banner needed. |
| DNS | Never touched by this build | Manual cutover by Matt/Karel per DNS-CUTOVER.md; Google Site stays up until then. |
| Domain | `coastalsoilsolutions.com` (existing) | Registrar/control unconfirmed — open question. |

## Dependency order

```
Phase 1  Audit → AUDIT.md                    (no dependencies)
Phase 2  Brand tokens + art direction        (needs logo trace/vector; feeds 3, 4, 5)
Phase 3  Copy per page                       (needs Phase 1 inventory + Phase 2 voice rules)
Phase 4  Imagery generation + optimization   (needs Phase 2 art direction; parallel with 3)
Phase 5  Build + deploy to github.io         (needs 2, 3, 4)
Phase 6  QA + handoff docs                   (needs 5)
Manual   Content sign-off (Matt) → DNS cutover (Matt/Karel) → repo transfer (any time after)
```

---

## Site Audit Agent — Current-Site Audit Plan & Verified Findings

*Live fetch performed 2026-07-04 against https://www.coastalsoilsolutions.com (Google Sites). Pages found in nav: `/home`, `/services`, `/contact-us`. No other pages linked.*

### A. Verified content inventory (must carry over to new site)

| Page | Confirmed content |
|---|---|
| **Home** (`/home`) | Heading "Our Story". Founder narrative: lifelong gardening passion from childhood ("From when I could walk..." — helping a parent plant flowers/maintain beds), progression into soil biology, regenerative agriculture framed around feeding ~9.7B people by 2050. Mission: educate communities on soil health; help residents implement sustainable practices. Themes: soil biology, freshwater protection, biodiversity, ethical livestock, GHG reduction. |
| **Services** (`/services`) | **Consultation — $100 CAD**: "first step in getting your soil to its healthiest and most productive state"; identifies negative factors; delivers "a basic scope of variables affecting your soil, with a recommended plan moving forward." **Testing/Analysis — $190 CAD**: beyond home test kits; macro/micro nutrients, mineral content, bacterial/fungal activity. **Soil Amendment Programs — custom-priced** by project size: "dead dirt" → microbially rich soil via IMO, mycology, traditional composting, cover cropping, fermentation; contact for estimate. Service area: **Lower Mainland, BC**. |
| **Contact us** (`/contact-us`) | Matthew Tomlinson · **tomlinsonbc@gmail.com** · **778-991-6202** · Instagram link to @coastalsoilsolutions. No form, no address, no hours. |

**Contradiction check:** live fetch matches all confirmed inputs (prices, techniques, contact details, service area). No contradictions found. One nuance: the $100/$190/custom pricing and Lower Mainland service area appear **only** on `/services`; contact details appear **only** on `/contact-us` — nothing is cross-linked or repeated, so a visitor landing on Home sees no offer, no price, no CTA.

### B. Gap analysis (verified + extended)

Confirms all prior-audit findings, with fetch evidence:

1. **FPJ absent entirely.** Zero mention of Fermented Plant Juice, fertilizer products, wholesale, or stockists on any page — the wholesale revenue line has no web presence. ("Fermentation" appears only as an amendment technique.)
2. **No conversion path.** No booking flow, no forms anywhere (contact page confirmed form-free), no CTA buttons — just a bare email/phone listing.
3. **No proof.** Founder name appears only on the contact page; no credentials, testimonials, photos, case studies, or stockist mention (It's About Thyme is not referenced).
4. **No CASL-compliant identity block.** No physical mailing address, no business-identity footer anywhere — a problem given the outbound email machine will link here.
5. **No SEO structure.** Google Sites boilerplate; three thin pages; no meta/schema strategy possible; service pricing buried on a page with no keyword targeting; near-zero search equity for its own brand name.
6. **Hobby-tier signals.** "Google Sites" + "Report abuse" footer confirmed on every page. No schools/education offering on site despite it being a business track.
7. **Extended finding — orphaned information architecture.** Prices, contact, and story each live on exactly one page with no cross-links or repetition; every page is a dead end.

### C. Asset salvage

- **Blue "C" logo** — evolve, don't discard (brand continuity for existing stockist/IG followers).
- **Founder-story copy (Home)** — the strongest asset on the site; migrate and tighten; the 9.7B/2050 regenerative framing works for all three tracks (wholesale credibility, services trust, schools mission).
- **Services descriptions** — the "dead dirt → microbially rich soil" language and the beyond-home-test-kit positioning are keepable verbatim.
- **Instagram @coastalsoilsolutions** — login-walled to anonymous fetch (not attempted; per guardrails, no login-walled scraping). Salvage of IG material (product label shots, compost photos) routes through Matt directly.
- **Confirmed FPJ facts as new-content source** (not on current site, from confirmed inputs): organic, pet/child safe, 15 ml per liter application, half-gallon jugs; ingredients: horsetail, nettle, Cannabis sativa, organic sugar, dechlorinated water, IMO; sole current stockist: It's About Thyme Nursery, Burnaby.

### D. Domain & DNS cutover notes (document-only — no DNS or Google Sites admin actions in this phase)

Moving `coastalsoilsolutions.com` from Google Sites to GitHub Pages (repo `karelnijzink/coastal-soil-solutions-site`) requires, at launch:

1. **CNAME record**: `www` → `karelnijzink.github.io`.
2. **Apex A records** (all four): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; optional AAAA for IPv6: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
3. **`CNAME` file** in the repo root containing the custom domain.
4. **Repo Pages settings**: custom domain configured + "Enforce HTTPS" enabled (after cert issuance).
5. **Domain verification** on the GitHub account (TXT record) *before* cutover, to prevent domain takeover.

Who/when: Matt (domain registrar access) with Karel guiding, manually, at launch only. The Google Site stays live and untouched until the new site is approved and DNS is flipped; expect up to 24h propagation + a short window before the HTTPS cert issues.

### E. Phase 1 deliverable — AUDIT.md scope (written post-approval)

- Full verbatim copy capture of all three pages (archival snapshot before Google Sites is retired)
- Screenshot record of every page (desktop + mobile)
- Logo asset extraction at best available resolution
- Content migration map: current copy → new-site page/section, keep/tighten/drop per block
- Gap register (Section B) with the new-site feature that closes each gap
- IG asset request list for Matt (label shots, compost photos, before/after soil)
- DNS cutover runbook (Section D expanded into step-by-step with rollback)
- SEO baseline: current SERP position for brand name + target local keywords, to measure post-launch

### Open questions (audit-specific)

1. Who controls the `coastalsoilsolutions.com` registrar account (Matt directly, or via Google Domains/Squarespace bundled with the Google Site)? Determines cutover difficulty.
2. Does Matt have the original logo file (vector?) or only what's embedded in Google Sites?
3. Should `tomlinsonbc@gmail.com` remain the published contact, or move to a domain email (e.g. `matt@coastalsoilsolutions.com`) at relaunch? Affects CASL footer and sender-identity consistency.
4. What physical mailing address will anchor the CASL identity block (home address vs. PO box)?
5. Is the 9.7B/2050 claim to be kept as-is, softened, or sourced on the new site?

---

## Brand & Design Agent — Identity System & Design Tokens

### 1. Identity system: evolving the blue "C"

We keep the existing blue "C" and mature it into a small system. All marks are drawn as hand-authored SVG in this build (geometric single-weight stroke, so code-drawn SVG is the *correct* production method, not a compromise). **Blocker to resolve first:** we need the original logo vector from Matt, or we trace the live site's favicon/header PNG at the start of the build to establish the exact "C" geometry before refinement.

Deliverables (all SVG + 512px PNG, each in full-colour / deep-blue mono / reversed-white):

- **Primary monogram** — refined "C", single-weight geometric stroke (stroke ≈ 1/8 of cap height), interior detail: three subtle horizontal bands suggesting soil horizons (O/A/B), rendered as stroke interruptions, not illustration. Must survive at 16px — the horizon detail drops out below 32px via a simplified small-size variant.
- **Horizontal lockup** — monogram + "Coastal Soil Solutions" set in Fraunces SemiBold, single line.
- **Stacked lockup** — monogram over two-line wordmark; for square placements and social avatars.
- **Endorsement variant** — "Soil by Coastal Soil Solutions" (for FPJ packaging/wholesale contexts; the only variant where Ferment Amber may touch the identity).
- **Favicon set** — simplified monogram: `favicon.svg`, 32/16 ICO, 180px apple-touch-icon.

File home: `assets/brand/` with a one-page `assets/brand/USAGE.md` (clearspace = height of the "C" counter; minimum sizes; which variant on which background).

### 2. Design tokens → `tokens.css`

Naming: `--color-*` (role-based, not hue-based), `--font-*`, `--text-*`, `--space-*`, `--radius-*`, `--shadow-*`. Raw hues get `--raw-*` prefixes so components only ever reference roles.

```css
:root {
  /* raw palette */
  --raw-blue: #1B4B6B;      /* Deep Coastal Blue */
  --raw-brown: #4A3728;     /* Humus Brown */
  --raw-green: #5C8A3A;     /* Living Green — decorative/large only, see A11y */
  --raw-green-deep: #4A7430;/* CTA fill (AA-safe with white) */
  --raw-green-text: #3D6127;/* green as text on light bg */
  --raw-amber: #C98A2B;     /* Ferment Amber — FPJ line ONLY */
  --raw-bone: #F5F1E8;
  --raw-charcoal: #2B2B28;

  /* roles */
  --color-brand: var(--raw-blue);
  --color-link: var(--raw-blue);
  --color-cta: var(--raw-green-deep);
  --color-cta-hover: #3D6127;
  --color-accent-fpj: var(--raw-amber);
  --color-bg: var(--raw-bone);
  --color-surface: #FFFFFF;
  --color-text: var(--raw-charcoal);
  --color-text-inverse: #FFFFFF;
  --color-border: #D8D2C4;  /* Bone darkened, hairlines/card strokes */

  /* type */
  --font-display: "Fraunces", "Source Serif 4", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace; /* lab-data moments only */
  /* scale: 1.250 major third, base 16px = 1rem */
  --text-xs: 0.8rem;    /* 12.8px — captions, CASL footer */
  --text-sm: 0.9rem;    /* legal, meta */
  --text-base: 1rem;    /* 16px body; line-height 1.6 */
  --text-lg: 1.25rem;   /* lead paragraphs */
  --text-xl: 1.563rem;  /* h3 */
  --text-2xl: 1.953rem; /* h2 */
  --text-3xl: 2.441rem; /* h1 mobile */
  --text-4xl: 3.052rem; /* h1 desktop, applied at --bp-md */
  /* spacing: 4px base */
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem;
  --space-4: 1rem;    --space-6: 1.5rem; --space-8: 2rem;
  --space-12: 3rem;   --space-16: 4rem;  --space-24: 6rem; /* section rhythm */

  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 16px; --radius-full: 999px;
  --shadow-card: 0 1px 3px rgb(43 43 40 / 0.08), 0 4px 12px rgb(43 43 40 / 0.06);
}
```

Breakpoints, mobile-first (media queries can't use custom properties; document as comments): `sm 480px / md 768px / lg 1024px / xl 1280px`. Max content width 1200px; prose measure 65ch.

### 3. Accessibility (computed WCAG 2.1 ratios)

| Combo | Ratio | Verdict |
|---|---|---|
| Charcoal #2B2B28 on Bone #F5F1E8 | **12.60:1** | AAA — default body |
| White on Deep Coastal Blue #1B4B6B | **9.27:1** | AAA — nav/footer/hero safe |
| Deep Coastal Blue on Bone | **8.22:1** | AAA — links need no underline-only crutch (underline them anyway in prose) |
| White on Living Green #5C8A3A | **4.08:1** | **FAIL for body text.** Fix: CTA buttons use `--raw-green-deep #4A7430` (5.48:1 with white). #5C8A3A demoted to decorative fills, icons, large text ≥24px only |
| Living Green on Bone (as text) | **3.62:1** | **FAIL.** Green text on light backgrounds uses `--raw-green-text #3D6127` (6.34:1) |
| Charcoal on Ferment Amber #C98A2B | **4.84:1** | Passes AA, barely. Amber stays accent-only regardless: FPJ badges, large headings ≥24px, rules/highlights. Never white-on-amber (2.94:1 — prohibited) |

Rules baked into `tokens.css` / base styles:

- **Focus:** global `:focus-visible { outline: 3px solid var(--color-brand); outline-offset: 2px; }`; on dark-blue surfaces switch outline to `#FFFFFF`. Never `outline: none` without replacement.
- **Motion:** `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }`. All motion is opt-in enhancement (fade/translate on scroll only).
- **Tap targets:** interactive elements min 44×44px (48px for primary CTAs); adjacent targets ≥8px apart.

### 4. Component inventory (6-page static site)

| Component | Notes |
|---|---|
| `site-nav` | Horizontal lockup left; 4–5 links; green CTA button right ("Book a consult"). Collapses to hamburger < md, disclosure pattern with proper `aria-expanded`. Sticky, bone bg, hairline border-bottom. |
| `footer` | Deep blue, white text. **CASL block mandatory:** legal name, physical mailing address, contact email, unsubscribe/preferences link. Plus sitemap links, endorsement lockup, Beanstalk cross-link. |
| `hero` | Full-bleed image (Imagery Agent) with blue-tinted scrim; Fraunces display headline; one primary + one secondary CTA. |
| `path-cards` | The 3 audience doors (Wholesale / Soil Services / Schools). Equal-height cards, image top, h3, one-line promise, arrow link. Entire card clickable, single `<a>`. |
| `price-card` | Services page: consult $100 / testing $190 / custom program. Mono font for the price figure (lab-report feel), feature list, green CTA. |
| `proof-strip` | Horizontal band: credentials (soil biologist), region served, stockist count, school-district logos as text badges. Bone-on-blue or bordered on bone. |
| Buttons | **Primary:** `--color-cta` fill, white text, `--radius-md`. **Secondary:** 2px `--color-brand` outline, blue text, transparent. **Tertiary:** underlined blue text link. One primary per viewport-height of content. |
| `faq-accordion` | Native `<details>/<summary>` — zero JS, accessible by default. Services + Schools pages. |
| `booking-embed` | Container for Cal.com inline embed; fixed min-height to prevent layout shift; noscript fallback link to the Cal.com URL. |
| `fpj-badge` | The only amber component: small label marking FPJ product content. |

### 5. Art direction brief → Imagery Agent

**Subjects:** extreme-macro soil aggregate and mycelium threads; working hands in dark soil (dirt under nails is good); active compost with visible structure/steam; FPJ bottles in situ on potting benches and greenhouse shelves; BC coastal garden scenes — cedar fence lines, overcast-bright skies, raised beds. Documentary photorealism throughout. **Banned:** clip-art leaves, sterile white-background stock gloss, "farmer smiling at tablet," oversaturated greens, drone-shot monoculture fields.

**Append this lighting/mood recipe to every image prompt:** *"Soft overcast Pacific-coastal daylight, diffused through high cloud; natural colour with slight desaturation and muted greens; shallow depth of field on macro subjects; documentary editorial photography, shot on 35mm, no studio lighting, no HDR gloss."*

Colour discipline: images should live in the brand's earth range (browns, muted greens, slate blues) so Living Green CTAs and amber FPJ badges stay the loudest elements on the page.

### Open questions

1. Does Matt have the original "C" logo as vector (AI/SVG)? If not, confirm we may trace from the live site header — and does he want approval on the refined monogram before it ships site-wide?
2. Fraunces vs Source Serif 4: Fraunces is warmer and more distinctive; confirm Matt accepts its slightly editorial personality, else default to Source Serif 4.
3. Self-host fonts (better for GitHub Pages performance and no third-party requests) or Google Fonts CDN? Recommendation: self-host WOFF2 subsets.
4. Is "Coastal Soil Solutions" the confirmed legal name for the CASL footer block, and what physical mailing address should appear there?
5. Does the Beanstalk cross-link appear in the footer now, or wait until that brand is real?

---

## Content & Copy Agent — Sitemap, Copy Plan & SEO

Scope: page-by-page content outlines, proof strategy, CASL footer spec, SEO plan for the 6-page static rebuild (GitHub Pages). Copy voice throughout: "a soil scientist who farms" — educational, biology-led, mechanism-first, numbers over adjectives, no hype/puns/exclamation marks, ~grade 8-9. "FPJ (fermented plant juice)" spelled out on first mention per page. All CTAs terminate at one booking flow (Cal.com/Calendly — **not live**; ship with a visibly marked `[BOOKING LINK — PLACEHOLDER]` and a CLAUDE.md TODO).

### 1. Page-by-page content outline

**1.1 Home — `/`**
- Purpose: route three audiences in one screen; establish credibility fast. Audience: all three tracks.
- H1: positioning line — direction: *"Healthy soil is a living system. We test it, feed it, and teach it."* (workable draft; final pending Matt read-through).
- Skeleton: (a) Hero: positioning line + one-sentence sub ("Soil testing, biology-first amendment programs, and organic FPJ (fermented plant juice) fertilizer — Lower Mainland BC.") + primary CTA "Book a consultation — $100" → booking placeholder. (b) **Three path cards**: Stock FPJ (→ /fpj), Fix your soil (→ /services, leads with "$190 testing: nutrients, minerals, microbial activity"), School programs (→ /schools). (c) **Proof strip**: founding stockist mention (It's About Thyme Nursery, Burnaby — see §2), ingredient transparency line, service-area line (Richmond · Delta · Surrey). (d) Founder teaser: 2 sentences from migrated story + "Read our story" → /about. (e) Footer CTA repeat.
- Facts used: prices ($100/$190), service area, FPJ one-liner, stockist name.

**1.2 FPJ Fertilizer — `/fpj`** (wholesale-focused)
- Purpose: convert nursery/garden-centre buyers into stockist inquiries. Audience: retail buyers/owners.
- H1: "FPJ (fermented plant juice) fertilizer — wholesale for BC retailers"
- Skeleton: (a) Hero: what it is + why it sells (organic, pet/child safe, any plant any stage). (b) **Mechanism block** ("teach first"): fermentation extracts plant-available nutrients; IMO (indigenous microorganisms — defined in-sentence) inoculate the soil food web. (c) **Full ingredient list**: horsetail, nettle, Cannabis sativa, organic sugar, dechlorinated water, IMO — transparency is the proof (see §5 on Cannabis sativa placement). (d) Usage spec: half-gallon jugs; 15 ml per litre; any plant, any stage. (e) Retailer block: founding stockist mention; wholesale price, margins, MOQ, terms = **[FROM MATT]** slots — do not invent; ship section as "Wholesale terms on request" until filled. (f) CTA: "Book a wholesale call" → booking placeholder; secondary mailto.
- Facts used: FPJ facts only. No shelf-life, batch, or certification claims (none confirmed — "organic" as descriptor only, no certifying-body claim).

**1.3 Soil Services — `/services`**
- Purpose: sell testing/consult; qualify into amendment programs. Audience: growers, farms, estates, community gardens (Richmond/Delta/Surrey core).
- H1: "Soil testing and amendment programs, Lower Mainland BC"
- Skeleton: (a) Hero: "Test first. Amend second." — the process is the pitch. (b) Three offers, each with mechanism: **Consultation $100** (site walk, history, goals); **Soil Testing $190** (macro/micro nutrients, mineral content, bacterial and fungal activity — say why microbial counts matter in one sentence); **Amendment Programs, custom-priced** (IMO, mycology, composting, cover cropping, fermentation — each named tool gets a one-line definition). (c) How it works: consult → test → written program (3 steps, numbered). (d) Service-area block (local SEO). (e) CTA: "Book your $100 consultation" → booking placeholder.
- Facts used: all three service prices/scopes; service area.

**1.4 Schools & Community — `/schools`**
- Purpose: get PAC/teacher/district contacts to book a call; make funding feel solved. Audience: SD36/SD37/SD38 teachers, PACs, district staff.
- H1: "Edible-garden and soil-education programs for Surrey, Delta and Richmond schools"
- Skeleton: (a) Hero: kids learn soil biology by growing food. (b) Program shape (hands-on, curriculum-adjacent — keep general until program details confirmed **[FROM MATT]**). (c) **Grant block**: Farm to School BC grants; PAC Gaming Grants ($20/student, spend window Apr 1–Jun 30) — frame as "your PAC may already have the budget." (d) One light sentence that dedicated kids' programming is growing into its own brand ("Beanstalk", placeholder — no logo, no promises). (e) CTA: "Book a program call" → booking placeholder.
- Facts used: districts, grant names/figures, Beanstalk-lite.

**1.5 About / Our Story — `/about`**
- Purpose: trust; carry the regenerative/food-sovereignty ethos. Audience: all.
- H1: "From gardener to soil biologist"
- Skeleton: (a) **Migrated founder story** ("From when I could walk…") — tighten for length and reading level, keep first-person voice; do not rewrite. (b) The farm: established ~May 2025 — position as working test bed, not heritage claim. (c) Ethos: regenerative agriculture, food sovereignty — one paragraph, concrete not slogans. (d) Photo slots **[FROM MATT]**. (e) Soft CTA to /services and /contact.

**1.6 Contact — `/contact`**
- Purpose: single conversion surface. Audience: all.
- H1: "Talk to Coastal Soil Solutions"
- Skeleton: (a) Booking embed/link `[BOOKING LINK — PLACEHOLDER]` as primary. (b) Direct: tomlinsonbc@gmail.com, 778-991-6202. (c) Service area + mailing address slot `[MAILING ADDRESS — FROM MATT]`. (d) **No email-capture form at launch** (see §3).

**Utility pages**: `/privacy` (plain-language: what we collect — nothing beyond what you send us at launch; contact for removal; CASL commitment), custom 404 (one line + links to 6 pages), `sitemap.xml`, `robots.txt`.

### 2. Proof strategy — no fabrication
- **Exists today, usable now**: (a) It's About Thyme Nursery (Burnaby) as founding stockist — *factual availability statement only* ("FPJ is stocked at It's About Thyme Nursery, Burnaby"); no implied endorsement, no quote, until their permission is logged. (b) Full ingredient disclosure — most fertilizer brands don't; make transparency itself the proof element. (c) The method: test-first process, named mechanisms, real prices published on-page.
- **[FROM MATT] slots (build placeholders, never fill with drafts)**: customer/stockist testimonials; It's About Thyme quote + permission; farm/product photography; program photos from any school pilot; any lab-report sample (anonymized).
- Hard rule for all writers/agents: no invented reviews, star ratings, certifications, client counts, or yield claims. If a claim isn't in the confirmed-facts list, it doesn't ship.

### 3. CASL-clean footer spec (global, every page)
- Line 1: **Coastal Soil Solutions** — Matthew Tomlinson · Lower Mainland, BC
- Line 2: `[MAILING ADDRESS — FROM MATT — BLOCKS CASL-COMPLIANT EMAIL SEND]` (visible placeholder in dev; must be resolved before any email campaign links to the site as sender identification)
- Line 3: tomlinsonbc@gmail.com · 778-991-6202 · link to /privacy
- **Email capture**: none at launch. If a form is ever added: unticked-by-default express-consent checkbox, purpose statement ("soil tips and product updates from Coastal Soil Solutions"), identification + mailing address adjacent to the form, unsubscribe promise, and consent basis + timestamp logged to the CRM. This rule goes in the site README so future edits inherit it.

### 4. SEO plan
One H1 per page (as specified above). Draft title tags (≤60) and meta descriptions (≤155):

| Page | Title tag | Meta description |
|---|---|---|
| Home | Soil Testing & Soil Health \| Coastal Soil Solutions BC | Soil testing, consultations and organic FPJ fertilizer for growers in Richmond, Delta and Surrey. Book a $100 soil consultation with a soil biologist. |
| FPJ | FPJ Fertilizer Wholesale \| Organic Fertilizer BC | Stock FPJ (fermented plant juice) fertilizer: organic, pet and child safe, 15 ml per litre. Wholesale accounts for BC nurseries and garden centres. |
| Services | Soil Testing Lower Mainland \| $190 Analysis | Soil testing ($190) covering nutrients, minerals and microbial activity, plus $100 consultations and custom amendment programs in Richmond, Delta, Surrey. |
| Schools | School Garden Programs \| SD36 SD37 SD38 | Edible-garden and soil-education programs for Surrey, Delta and Richmond schools. Grant-friendly: Farm to School BC and PAC Gaming Grants. |
| About | Our Story \| Coastal Soil Solutions | Matthew Tomlinson, lifelong gardener turned soil biologist, on regenerative agriculture and food sovereignty in BC's Lower Mainland. |
| Contact | Contact & Booking \| Coastal Soil Solutions | Book a soil consultation or ask about FPJ stockist accounts. Email tomlinsonbc@gmail.com or call 778-991-6202. Serving the Lower Mainland. |

- **Keyword mapping** (woven into body copy, never stuffed): Home → "soil testing Lower Mainland"; Services → "soil testing Vancouver", "regenerative soil Richmond Delta Surrey"; FPJ → "organic fertilizer BC", "FPJ fertilizer"; Schools → district names + "school garden program". Each phrase appears at most once per page in headings, naturally in prose otherwise.
- **OpenGraph**: og:title/og:description mirror the table; og:type=website; og:image = one shared brand card at launch (per-page images when [FROM MATT] photos land); og:locale=en_CA.
- **JSON-LD** on Home (and referenced sitewide): `LocalBusiness` with name, founder (Person: Matthew Tomlinson), email, telephone (+1-778-991-6202), `areaServed`: Richmond/Delta/Surrey, `address`: placeholder pending mailing address; add `Service` items for the $100 consultation and $190 testing with `priceCurrency: CAD`. Schools page optionally adds `EducationalOrganization`-audience markup later — not at launch.
- **sitemap.xml**: 6 pages + /privacy; exclude 404. **robots.txt**: allow all, `Sitemap:` line pointing at the GitHub Pages URL (canonical host TBD by domain decision).

### 5. Cannabis sativa ingredient note
Cannabis sativa is on the confirmed ingredient list, so it appears in the full ingredient disclosure on /fpj — omitting it would break the transparency-as-proof strategy. **Open question for Matt**: prominence. Options: (a) equal billing in the list (current default — it is simply a nutrient-rich plant input), (b) list-only, with the mechanism copy leading on horsetail/nettle/IMO. Earlier planning flagged retail-placement sensitivity (family-oriented garden centres); recommend (b) until Matt decides, and never use cannabis imagery or leaf iconography either way.

### Open questions
1. **Mailing address** — blocks the CASL footer and any email campaign referencing the site. Highest priority [FROM MATT].
2. Wholesale terms for /fpj: price, margin, MOQ, delivery area, reorder process.
3. It's About Thyme: permission for named mention beyond factual availability; quote if offered.
4. Cannabis sativa prominence decision (§5, option a or b).
5. Booking tool confirmation (Cal.com vs Calendly) and event types per track — needed before placeholders become links.
6. Photos: farm, product jugs, Matt portrait; any school-program imagery with consent.
7. School program specifics (session count, grades, price/funding model) — /schools ships general until confirmed.
8. Domain/canonical URL decision (affects robots.txt, sitemap, OG URLs, JSON-LD `url`).
9. Does "organic" for FPJ mean certified (by whom?) or descriptive? Copy currently treats it as descriptive only.

---

## Imagery Agent — Higgsfield Shot List & Pipeline

### Model selection (via `models_explore` recommend)
Ran Higgsfield `models_explore(action: 'recommend')` against the brief ("photorealistic documentary-style stills: macro soil textures, hands in soil, garden scenes, natural light, wide hero + square card crops"). Top recommendation: **Recraft V4.1 (`recraft_v4_1`, `model_type: standard`)** — photorealistic, supports a `colors` palette hint (we can pass the brand hexes), 2k resolution, ratios up to 16:9/1:1. Second: **Soul Location (`soul_location`, Higgsfield)** — environment/scene model, and the only recommended model supporting **21:9**, so it covers the ultra-wide heroes. **Working plan: Recraft V4.1 standard for 16:9/1:1/2:3 shots; Soul Location for 21:9 heroes.** Re-validate with one test render of each at Phase 4 start before committing the batch.

### Authenticity rule (hard guardrail — applies to every shot)
Generated imagery is for **mood, texture, and section design only**. NEVER generate: fake photos of Matt or any identifiable person presented as real; fake customer photos; fake product labels or readable packaging text; fake before/after results; fake microscopy presented as real client data. Real product/process photos come from Matt and Instagram salvage. Every `[PLACEHOLDER → REAL]` slot below gets logged in `CLAUDE.md` as a content TODO for Matt when the site ships. The About-page portrait of Matt is **real-photo-only — no generated slot exists for it, ever**.

### 1. Shot list

| ID | Page / slot | Subject | Ratio | Status |
|---|---|---|---|---|
| HOME-HERO | Home hero | Cupped hands holding dark crumbly living compost, garden bokeh behind, coastal BC overcast light | 21:9 | [PLACEHOLDER → REAL PHOTO FROM MATT] |
| FPJ-HERO | FPJ page header | Amber ferment liquid mid-bubble in glass, macro, backlit warm glow (amber accent allowed here) | 16:9 | [PERMANENT MOOD] |
| FPJ-JUG | FPJ product card | Generic amber-glass jug on greenhouse potting bench among seedlings; label area blank / out of focus — NO readable text | 1:1 | [PLACEHOLDER → REAL PHOTO FROM MATT] |
| SVC-HERO | Services page header | Trowel lifting a soil core from a market-garden bed, Fraser-delta field soft in background | 16:9 | [PLACEHOLDER → REAL PHOTO FROM MATT] |
| SVC-TEST | Services card | Mason jar soil sedimentation test on weathered wood, layers visible, window light | 1:1 | [PERMANENT MOOD] |
| SCH-HERO | Schools page header | School raised beds: small hands and adult hands planting seedlings, framed hands/tools only, **no faces** | 16:9 | [PLACEHOLDER → REAL PHOTO FROM MATT] |
| SCH-CARD | Schools card | Child's gloved hands with trowel patting soil around a bean seedling, cropped at wrists, no faces | 1:1 | [PLACEHOLDER → REAL PHOTO FROM MATT] |
| ABT-HERO | About page header | Coastal BC vegetable garden under soft overcast sky, cedar fence line, distant grey-blue hills | 16:9 | [PERMANENT MOOD] |
| CON-HERO | Contact page header | Garden tools resting against cedar raised bed at end of day, quiet, muted light | 16:9 | [PERMANENT MOOD] |
| TEX-MYC | Texture background (site-wide) | Extreme macro of white mycelium threads webbing through dark wood-chip compost | 1:1 | [PERMANENT MOOD] |
| TEX-HORIZON | Texture background (side panels) | Soil profile cross-section macro: dark humus grading to mineral subsoil, roots visible | 2:3 tall | [PERMANENT MOOD] |
| TEX-FERMENT | FPJ section band | Macro amber liquid surface with slow bubbles, warm tone (FPJ pages only) | 21:9 | [PERMANENT MOOD] |
| CARD-WORM | Home "living soil" card | Red wiggler worms in dark castings, close-up, natural light | 1:1 | [PERMANENT MOOD] |
| CARD-SEEDLING | Home / Services card | Bare hands firming soil around a transplanted kale seedling, dirt under nails, honest and unglossy | 1:1 | [PERMANENT MOOD] |

### 2. Prompts

**Reusable style suffix (append to every prompt):**
> "Documentary photograph, soft overcast Pacific-Northwest daylight, natural muted colour with slight desaturation, shallow depth of field, fine film grain, honest working-garden realism, no studio gloss, no HDR, no text, no logos, no watermarks."

Use "100mm macro lens, f/4" for TEX-* and FPJ-HERO; "50mm lens, f/2.8" for everything else. Per-shot subject lines:

- **HOME-HERO:** "Close-up of two weathered hands cupping dark crumbly compost teeming with fine roots and organic matter, blurred green garden behind, low camera angle."
- **FPJ-HERO:** "Extreme macro of amber fermented plant liquid with slow rising bubbles inside glass, warm backlight, deep amber #C98A2B tones."
- **FPJ-JUG:** "A plain amber glass one-gallon jug with unlabeled blank surface, standing on a worn wooden potting bench in a greenhouse, tomato seedlings soft-focus behind, label area completely out of focus."
- **SVC-HERO:** "A hand trowel lifting an intact dark soil core from a vegetable bed, flat delta farmland and grey sky soft in the far background."
- **SVC-TEST:** "A mason jar soil sedimentation test with distinct sand, silt and clay layers, sitting on a weathered wooden windowsill in diffuse daylight."
- **SCH-HERO:** "Cedar raised garden beds at a school garden, several pairs of hands — small and adult — planting seedlings together, framed from above at hand level, no faces visible."
- **SCH-CARD:** "A child's small gloved hands using a hand trowel to firm soil around a young bean seedling in a raised bed, cropped at the wrists, no people visible."
- **ABT-HERO:** "A lush coastal British Columbia vegetable garden under a soft overcast sky, cedar fence, rows of greens, muted grey-blue hills in the distance."
- **CON-HERO:** "A spade and garden fork leaning against a cedar raised bed at dusk, quiet empty garden, cool muted light."
- **TEX-MYC:** "Extreme macro of white fungal mycelium threads spreading through dark decomposing wood chips, intricate branching network."
- **TEX-HORIZON:** "Vertical cross-section of a soil profile: black humus layer grading into brown mineral subsoil, fine white roots threading downward, studio-free natural side light."
- **TEX-FERMENT:** "Ultra-wide macro of the surface of amber fermenting liquid, slow bubbles and foam patterns, warm golden tones."
- **CARD-WORM:** "Red composting worms moving through dark rich worm castings, close-up from above."
- **CARD-SEEDLING:** "Bare hands with soil under the fingernails pressing dark earth around a freshly transplanted kale seedling."

Recraft V4.1 calls pass `colors: ["#1B4B6B","#4A3728","#5C8A3A"]` (add `#C98A2B` for FPJ-* shots only) as a palette bias, not a repaint.

### 3. Phase 4 generation workflow
1. **Batch:** fire all 14 shots as parallel `generate_image` calls (Recraft V4.1 for 16:9/1:1/2:3; Soul Location for 21:9), collect results in one pass.
2. **Review against brief** — regen if any of: stock-photo gloss or studio lighting; oversaturation (especially greens); uncanny/extra-fingered hands; any readable text, label, or logo; identifiable faces (SCH-*); sterile/plastic-looking soil; palette drift (amber appearing outside FPJ shots).
3. **Max 2 regen rounds per shot** with tightened prompt (add explicit negatives for the observed failure). Still failing after round 2 → flag the slot, ship with the best available or a solid-colour brand block, log in CLAUDE.md.
4. Hands shots (HOME-HERO, SCH-*, CARD-SEEDLING) are the highest-risk category — review those first and at 100% zoom.

### 4. Optimization pipeline into the repo
1. Download originals to the session scratchpad (`imagery/originals/`) — never commit originals.
2. Convert with `cwebp -q 78` (heroes) / `-q 80` (cards); resize first with ImageMagick/`sips`.
3. **Variants:** heroes 1920/1280/640 w; cards 800/400 w; textures 1600/800 w. Wire as `srcset` in HTML.
4. **Weight targets:** hero ≤ 200 KB (largest variant), cards ≤ 80 KB, textures ≤ 150 KB. Over budget → drop quality in steps of 5 to floor of 65, then downscale.
5. Files land in `assets/img/` with kebab-case descriptive names, e.g. `home-hero-hands-compost-1920.webp`, `fpj-jug-greenhouse-800.webp`, `texture-mycelium-macro-1600.webp`.
6. `alt` written per image describing what is pictured (no keyword stuffing); decorative texture backgrounds applied via CSS get `alt=""` / `aria-hidden` when inlined.

### 5. Alt-text drafts
- **HOME-HERO:** "Hands holding dark, crumbly compost above a garden bed."
- **FPJ-HERO:** "Amber fermented plant juice bubbling inside glass, lit from behind."
- **FPJ-JUG:** "An amber glass jug on a greenhouse potting bench surrounded by seedlings."
- **SVC-HERO:** "A trowel lifting a core of dark soil from a vegetable bed."
- **SVC-TEST:** "A jar soil test showing settled layers of sand, silt and clay."
- **SCH-HERO:** "Children's and adults' hands planting seedlings in a school raised bed."
- **SCH-CARD:** "A child's gloved hands firming soil around a bean seedling."
- **ABT-HERO:** "A coastal BC vegetable garden under an overcast sky."
- **CON-HERO:** "Garden tools leaning against a cedar raised bed in evening light."
- **TEX-MYC:** "White mycelium threads spreading through dark wood-chip compost." (decorative use: `alt=""`)
- **TEX-HORIZON:** "Cross-section of soil showing dark topsoil over lighter subsoil." (decorative use: `alt=""`)
- **TEX-FERMENT:** "Close-up of bubbles on the surface of amber fermenting liquid." (decorative use: `alt=""`)
- **CARD-WORM:** "Red composting worms in dark worm castings."
- **CARD-SEEDLING:** "Hands pressing soil around a newly transplanted kale seedling."

### Open questions
1. Does Matt have usable Instagram/phone photos for HOME-HERO, SVC-HERO and the FPJ jug now, or do all five `[PLACEHOLDER → REAL]` slots launch generated?
2. Schools track spans two brands — should SCH-* imagery stay brand-neutral until the "Beanstalk" identity is settled?
3. Higgsfield credit budget for Phase 4 (14 shots × up to 3 attempts ≈ 42 generations) — confirm the plan's credit ceiling before batching.
4. Recraft V4.1 caps at 2k — is 1920w sufficient for the 21:9 heroes, or do we upscale (`upscale_image`) the two ultra-wides to 4K and downsample?

---

## Build Agent — Stack, Repo Structure & Deployment

**Verified current state (2026-07-04, read-only):** repo `karelnijzink/coastal-soil-solutions-site` is public, default branch `main`, single commit `ab5afc1` (scaffold: README, CLAUDE.md, .gitignore, empty `src/`, `assets/img/`, `docs/`). GitHub Pages is enabled with `build_type: workflow`, URL `https://karelnijzink.github.io/coastal-soil-solutions-site/`. Local clone at `/Users/hi/coastal-soil-solutions-site`. Nothing built yet; nothing modified during planning.

### 1. Stack decision: Eleventy (11ty) v3

**Eleventy** over Astro and plain HTML. All three produce zero-JS static output that passes Lighthouse 90+, so the decision turns on the handoff reality: Matt edits copy occasionally with plain instructions, Karel maintains part-time. Eleventy pages are Markdown files with a small front-matter block — "open `src/pages/services.md`, change the paragraph, save" is an instruction Matt can follow via the GitHub web editor with zero toolchain knowledge, and the Actions workflow rebuilds automatically. Plain HTML fails this test: 8 pages × shared header/footer/nav means every copy edit risks touching duplicated markup, and a nav change means 8 edits. Eleventy's layouts/includes solve that with one dependency and a config file under 40 lines.

**Why not Astro:** Astro is excellent but brings `.astro` component syntax, a Vite build, and a larger dependency tree — capability we'd pay maintenance for and never use (no islands, no client JS framework, no content collections needed for 8 pages). Eleventy v3 has near-zero dependencies, a stable decade-old plugin ecosystem, templates that are just Markdown + Nunjucks, and `npx @11ty/eleventy` builds in under a second. For a site that may sit untouched for a year between edits, fewer moving parts wins. Pin exact versions in `package-lock.json`; the only runtime dependency is `@11ty/eleventy` itself (plus `@11ty/eleventy-img` for image processing at build time).

**Base-path handling (the classic Pages footgun):** the site must work at `/coastal-soil-solutions-site/` on github.io now and at `/` after DNS cutover. Eleventy handles this with `pathPrefix`: all internal links and asset references are written root-relative (`/assets/...`, `/services/`) and passed through the `| url` filter in templates; Eleventy rewrites them with the prefix at build time. The prefix is **not hardcoded** — the workflow reads it from `actions/configure-pages`' `base_path` output and passes `--pathPrefix=${{ steps.pages.outputs.base_path }}`. This makes the cutover flip automatic: when the custom domain is set in Pages settings, `configure-pages` returns an empty base path and the next build emits root-relative URLs. No code change at cutover, only the CNAME/domain step (§7). Rule enforced in code review: never write a bare `href="/..."` without the `url` filter; canonical URLs and sitemap entries use a `site.url` metadata value updated at cutover (one line in `src/_data/site.json`).

### 2. Repo structure

```
coastal-soil-solutions-site/
├── .github/workflows/deploy.yml   # build + deploy (Phase 5, last step)
├── .eleventy.js                   # config: pathPrefix, passthrough copy, filters
├── package.json / package-lock.json  # Node pinned via "engines"; lockfile committed
├── CLAUDE.md                      # build/edit instructions + TODOs (booking URL, analytics, transfer-to-Matt)
├── README.md                      # "how Matt edits a page" in plain English
├── src/
│   ├── _data/site.json            # site.url, business name/address/phone/email, BOOKING_URL constant
│   ├── _includes/
│   │   ├── layouts/base.njk       # HTML shell, meta/OG tags, inlined critical CSS
│   │   └── partials/ (header.njk, footer.njk, cta.njk)
│   ├── css/tokens.css             # design tokens from Design agent (custom properties)
│   ├── css/main.css               # site styles consuming tokens
│   ├── js/nav.js                  # ~15 lines: mobile nav toggle (only JS on site)
│   ├── pages/                     # index, fpj, services, schools, about, contact — .md
│   ├── privacy.md
│   ├── 404.md                     # permalink 404.html (Pages serves it automatically)
│   ├── sitemap.njk                # generates sitemap.xml from collections.all
│   └── robots.txt.njk             # emits robots.txt with sitemap URL from site.url
├── assets/img/                    # source images; processed by eleventy-img at build
└── docs/
    ├── DNS-CUTOVER.md             # §7 — document only
    └── EDITING.md                 # Matt-facing: edit a page via GitHub web UI
```

**CNAME — prepared, not committed.** `docs/DNS-CUTOVER.md` contains the exact one-line file (`coastalsoilsolutions.com`) to add at cutover. It is deliberately absent until then: committing a CNAME file does nothing to DNS, but it *does* set the custom domain in Pages settings, which immediately changes the site's canonical URL, breaks the github.io path (redirects to a domain that doesn't resolve yet), and can trigger domain-takeover warnings. Hold it until DNS records exist. Note: with `build_type=workflow` the CNAME must be emitted **into the build output** (passthrough copy) — also documented in the cutover doc.

### 3. GitHub Actions workflow (`deploy.yml`)

- **Trigger:** `push` to `main` + `workflow_dispatch` (manual re-run). `concurrency: pages` group, cancel-in-progress false.
- **Build job:** `actions/checkout@v4` → `actions/setup-node@v4` with `node-version: 22` (pinned LTS) and `cache: npm` → `npm ci` → `actions/configure-pages@v5` (id: `pages`) → `npx @11ty/eleventy --pathPrefix=${{ steps.pages.outputs.base_path }}` → `actions/upload-pages-artifact@v3` with `path: _site`.
- **Deploy job:** `needs: build`, environment `github-pages`, `actions/deploy-pages@v4`.
- **Permissions:** `contents: read`, `pages: write`, `id-token: write`. **No secrets** — OIDC handles deployment. Pages is already set to `build_type=workflow`, so first push of this file deploys with no settings changes.

### 4. Performance budget & tactics

- **Budget:** < 50 KB CSS, < 2 KB JS, LCP image < 120 KB, total page weight < 500 KB; Lighthouse ≥ 90 performance/accessibility/SEO on mobile emulation, checked before calling Phase 5 done.
- **Fonts: self-hosted WOFF2 via Fontsource** (`@fontsource-variable/...` npm packages, files copied into `assets/fonts/` at build — no Google Fonts CSS API: eliminates a third-party connection, a render-blocking cross-origin request, and a PIPEDA-relevant IP disclosure to Google). One variable font maximum, `font-display: swap`, `preload` on the primary WOFF2, `system-ui` stack as fallback in `tokens.css`. If the Design agent's tokens work with a system stack alone, drop the webfont entirely — that is the preferred outcome.
- **Images:** `@11ty/eleventy-img` generates responsive WebP (WebP-only is safe in 2026 — universal browser support; keep one JPEG fallback only if Design flags email/print reuse) with `srcset`/`sizes`, explicit `width`/`height` (no CLS), `loading="lazy" decoding="async"` on everything except the hero, which gets `fetchpriority="high"`.
- **CSS:** single small stylesheet; inline it fully in `<head>` via an Eleventy include (at < 50 KB total, inlining beats a separate request — trivially easy in 11ty, no plugin needed). `tokens.css` concatenated first.
- **JS:** `nav.js` only, deferred, no dependencies. Nothing else ships.

### 5. Booking CTA integration

Cal.com is not live. Every CTA button site-wide links to `/contact/#book` where a clearly-marked placeholder block ("Online booking coming soon — email or call to book directly") sits above real, working fallbacks: `mailto:tomlinsonbc@gmail.com` and `tel:+17789916202` (displayed as 778-991-6202). The CTA partial (`_includes/partials/cta.njk`) reads a single constant `BOOKING_URL` in `src/_data/site.json`, currently `"/contact/#book"`. When Cal.com goes live, changing that one value to the Cal.com URL rewires every CTA on the site — a one-line change, one commit. Logged in the site repo's `CLAUDE.md` as: `TODO: replace site.json BOOKING_URL with live Cal.com link (see PLAN.md booking workstream)`.

### 6. Analytics

**GoatCounter** (free tier, no cookies, no consent banner needed, PIPEDA/CASL-friendly, ~3 KB script). The script tag ships in `base.njk` **commented out** with the site code left as `TODO-goatcounter-code`, plus a `CLAUDE.md` TODO to create the account (Matt or Karel, 5 minutes) and uncomment. No Google Analytics, no fingerprinting, no invasive tracking — matches the project's privacy posture and keeps the privacy page honest.

### 7. DNS-CUTOVER.md outline (document only — this phase never touches DNS)

1. **Preconditions:** site verified on github.io URL; domain registrar login confirmed; Google Site still live.
2. **Verify domain on GitHub account** (Settings → Pages → Verified domains, TXT record) — prevents takeover, do before pointing DNS.
3. **DNS records:** `www` CNAME → `karelnijzink.github.io.`; apex A → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; optional AAAA → `2606:50c0:8000::153` /`8001`/`8002`/`8003::153`. TTL 300 during cutover.
4. **Commit CNAME** (via passthrough copy so it lands in `_site/`), push, wait for deploy.
5. **Pages settings:** confirm custom domain shows verified DNS check; enable **Enforce HTTPS** once the cert issues (can take up to an hour).
6. **Propagation checks:** `dig +short` both records against 1.1.1.1 and 8.8.8.8; curl both www and apex over HTTPS; click through all pages checking links/images (base-path regression check).
7. **Flip `site.url`** in `src/_data/site.json` to the custom domain (canonical/sitemap/robots), redeploy.
8. **Rollback:** Google Site stays published until 48 h of confirmed clean serving; rollback = revert CNAME commit + remove custom domain in Pages settings + repoint/restore DNS. Repo-transfer-to-Matt note: after transfer, CNAME target changes to Matt's `<user>.github.io` — flagged in doc.

### 8. Definition of done & build order

**Build order:** ① `tokens.css` in from Design agent + `main.css` shell → ② `.eleventy.js`, base layout, header/footer/nav partials, 404 → ③ pages as Markdown with front matter (copy from Content agent) → ④ images processed in via eleventy-img → ⑤ booking CTA stub + `site.json` constants → ⑥ `deploy.yml` committed last → ⑦ live on github.io, Lighthouse pass.

**Done means:** all pages deployed at the github.io URL via Actions (green workflow, no secrets); Lighthouse mobile ≥ 90 perf/a11y/SEO on home + one content page; sitemap.xml and robots.txt served; 404 works; every CTA resolves to working mailto/tel; no hardcoded base path (grep for unfiltered root links passes); `DNS-CUTOVER.md` and `EDITING.md` written; CLAUDE.md TODOs logged (booking URL, GoatCounter code, CNAME-at-cutover, repo transfer to Matt); Matt has successfully made one test copy edit via GitHub web UI.

### Open questions

1. **Domain confirmation** — cutover targets `coastalsoilsolutions.com` (the existing domain); which registrar, and who holds the login?
2. **Physical mailing address** for the site footer/privacy page (CASL sender-ID consistency with the outbound machine) — which address does Matt want published?
3. **Schools track branding** — does the schools page mention "Beanstalk" or stay Coastal-Soil-only until that brand is settled?
4. **Repo transfer timing** — transfer to Matt's GitHub before or after DNS cutover? After is simpler (one CNAME-target change, documented), but confirm.
5. **Webfont or system stack** — Design agent to confirm whether tokens require a brand webfont; system stack preferred for the performance budget.

---

## QA & Handoff Agent — Verification & Launch Checklist

### 1. QA test plan

| Check | Method | Pass criteria |
|---|---|---|
| Cross-device pass | Manual pass at 375px (primary), 768px, 1280px via browser devtools on every page (Home, FPJ, Soil Services, Schools, About, Contact, Privacy, 404) | No horizontal scroll, no overlapping/clipped text, nav usable, CTAs tappable (≥44px targets) at 375px |
| Link check | Script over built output: `npx linkinator ./_site --recurse` (or equivalent crawler) run in CI-adjacent step; internal + external links | Zero 404s internal; external failures triaged (fix or remove) |
| Booking CTAs | Grep built HTML for every booking CTA href; all must point to the documented placeholder target (e.g. `mailto:tomlinsonbc@gmail.com` or `#contact`), never a dead `#` or fake Cal.com URL | No CTA implies a live scheduler that doesn't exist; swap plan noted in EDITING.md |
| Image weight | Per-page transfer audit (devtools Network, cache disabled): first-load transfer ≤1MB/page; all images sized, compressed (WebP/AVIF), `loading="lazy"` below fold, explicit width/height | Every page ≤1MB; hero LCP image preloaded |
| Lighthouse | `npx lighthouse <deployed github.io URL> --output html,json` per page, mobile config; reports committed to `docs/lighthouse/` (dated) | ≥90 Performance, Accessibility, SEO on all pages |
| Console errors | Open every page, check devtools console | Zero errors and zero warnings we control (third-party noise documented) |

### 2. Accessibility pass (per page)

- [ ] Every `<img>` has `alt`; decorative images use `alt=""`
- [ ] Exactly one `<h1>`; heading levels never skip (h2 → h3, no h2 → h4)
- [ ] Contrast: spot-verify built output against design-token spec with devtools contrast checker (tokens speced ≥AA, but verify actual rendered pairs, esp. text-on-image)
- [ ] Full keyboard nav: tab through every page; visible focus ring on all interactive elements; no keyboard traps; skip-to-content link
- [ ] Any form inputs have associated `<label>` elements (not placeholder-only)
- [ ] Animations/transitions gated behind `prefers-reduced-motion: no-preference`
- [ ] Landmarks present: `<nav>`, `<main>`, `<footer>` (one `<main>` per page)
- [ ] `<html lang="en">` set

### 3. Content accuracy pass

Literal fact-check table (committed as `docs/FACT-CHECK.md`), one row per fact, comparing built page text against AUDIT.md:

| Fact (from AUDIT.md) | Expected value | Page(s) | Verified |
|---|---|---|---|
| Consultation price | $100 CAD | Soil Services, Home | ☐ |
| Testing price | $190 CAD | Soil Services | ☐ |
| Amendment programs | "custom" — no fixed price shown | Soil Services | ☐ |
| Email | tomlinsonbc@gmail.com | Contact, footer | ☐ |
| Phone | 778-991-6202 | Contact, footer | ☐ |
| Service area | Lower Mainland BC | Home, Soil Services, Contact | ☐ |
| FPJ ingredients | horsetail, nettle, Cannabis sativa, organic sugar, dechlorinated water, IMO — exact list, nothing added | FPJ | ☐ |
| Application rate | 15 ml/L | FPJ | ☐ |
| Stockist | It's About Thyme Nursery (only named stockist) | FPJ | ☐ |

**Rules:** no invented claims (yields, certifications, "organic certified" unless documented); no testimonials that Matt didn't supply; wholesale pricing/minimums appear only if Matt supplied them — otherwise "contact for wholesale pricing." Any fact on a page but not in AUDIT.md is flagged for Matt, not assumed.

### 4. CASL / legal pass

- [ ] Footer on **every** page identifies the business (Coastal Soil Solutions, operator name)
- [ ] Physical mailing address in footer — **if Matt has not supplied one, this is a logged launch blocker** (documented in open questions; site can launch without an email-capture form but not send email without an address)
- [ ] Privacy page exists and is linked from every footer
- [ ] If any email-capture form exists at launch: unticked consent checkbox + plain-language purpose statement + identification; **default position: no form at launch** (contact is mailto/phone only) — verify no form snuck in
- [ ] No third-party trackers beyond what privacy page discloses (ideally none)

### 5. Handoff docs (all in `docs/`)

| Doc | Owner | Contents |
|---|---|---|
| `EDITING.md` | QA agent writes | Plain-language file map: "want to change X → edit file Y" for every page, prices, contact info, footer; how to edit on github.com directly (no local setup); screenshots optional |
| `DEPLOYING.md` | QA agent writes | Push/merge to `main` = auto-deploy; how to watch the Actions tab, spot a red X, and what to do (re-run / call Karel) |
| `DNS-CUTOVER.md` | Build agent writes; **QA verifies completeness** | Records to change, TTL notes, verification steps, rollback (old Google Site stays live until approved cutover) |
| `PHOTO-TODO.md` (linked from CLAUDE.md) | QA agent consolidates | Every generated mood-image slot, page + filename + desired real-photo subject |
| `TRANSFER.md` | QA agent writes | Repo transfer to Matt's GitHub (Settings → Transfer); what breaks: Pages URL changes (`karelnijzink.github.io/...` → Matt's), Actions may need re-enabling, Pages must be re-configured under new owner; custom domain re-verification; Karel added back as collaborator |

### 6. Launch checklist (ordered gates)

| # | Gate | Owner |
|---|---|---|
| 1 | Content freeze — no copy changes after this point | Karel |
| 2 | QA test plan (section 1) passes; Lighthouse reports committed | Claude |
| 3 | Accessibility pass (section 2) complete | Claude |
| 4 | Fact-check table (section 3) all verified, zero unresolved rows | Claude + Karel |
| 5 | CASL/legal pass (section 4) — mailing address resolved or blocker accepted | Karel |
| 6 | **MANUAL GATE 1: Content sign-off** — Matt reads every page on his phone and approves in writing | **Matt** |
| 7 | Handoff docs (section 5) complete; Karel dry-reads EDITING.md as Matt would | Karel |
| 8 | Final deploy to github.io URL; re-run Lighthouse + link check against production | Claude/Karel |
| 9 | **MANUAL GATE 2: DNS cutover** per DNS-CUTOVER.md; old Google Site untouched until this step | **Matt/Karel** |
| 10 | Post-cutover verification: domain resolves with HTTPS, all pages load, no mixed content, Lighthouse spot-check on custom domain | Karel |
| 11 | Old Google Site retired (redirect or takedown) only after 10 passes | Matt/Karel |
| 12 | Repo transfer per TRANSFER.md (can lag launch; not a launch blocker) | Karel + Matt |

### QA open questions

1. **Mailing address:** has Matt supplied a physical business/mailing address for the footer? If not, what address is he willing to publish (or a PO box)? Blocker for CASL-clean email later even if not for the static site itself.
2. **Contact form at launch:** confirmed no form (mailto/phone only), or does Matt want one? A form changes the CASL and privacy-page requirements.
3. **Custom domain:** confirmed as coastalsoilsolutions.com — who controls the registrar login?
4. **Wholesale pricing:** has Matt supplied any wholesale numbers for the FPJ page, or does it stay "contact for pricing"?
5. **Sign-off medium:** what counts as Matt's written approval for Gate 6 — email to Karel, or a checklist he initials?

---

## Consolidated open questions (deduplicated, by priority)

**Blockers (needed before or during build):**
1. **Mailing address** (home vs PO box) — blocks the CASL footer; the single highest-priority input from Matt.
2. **Logo source** — original vector from Matt, or approval to trace from the live site header/favicon.
3. **Domain registrar** — who controls coastalsoilsolutions.com (Matt directly, or bundled with Google Sites)? Needed only at cutover, but confirm early.

**Shape the content (build proceeds with safe defaults if unanswered):**
4. FPJ wholesale terms (price, margin, MOQ, delivery) — default: "wholesale terms on request."
5. It's About Thyme permission for named mention/quote — default: factual availability statement only.
6. Cannabis sativa prominence on /fpj — default: option (b), listed in ingredients, mechanism copy leads on horsetail/nettle/IMO; no cannabis imagery.
7. "Organic" — certified or descriptive? Default: descriptive only, no certification claim.
8. Keep tomlinsonbc@gmail.com or move to domain email at relaunch? Default: keep Gmail (it's the confirmed working contact), note domain-email upgrade in TODOs.
9. Beanstalk mention on /schools — default: one light sentence, no logo, no promises.
10. 9.7B/2050 food-security claim in the founder story — keep, soften, or source? Default: keep with "UN projection" attribution.
11. Booking tool (Cal.com vs Calendly) + event types — placeholder ships either way.
12. School program specifics (grades, sessions, pricing) — default: general framing.

**Logistics:**
13. Real photos from Matt for the five [PLACEHOLDER → REAL] slots — launch generated, swap later.
14. Higgsfield credit ceiling for ~42 possible generations in Phase 4.
15. Fonts: self-hosted Fraunces + Inter WOFF2 (recommended) vs system stack (fastest) — decide at Phase 2 start.
16. Repo transfer timing (recommended: after cutover) and Matt's sign-off medium for Gate 6.

---

**STOP. This plan awaits operator approval. On approval, execution begins at Phase 1 (AUDIT.md) and proceeds per the dependency order above.**
