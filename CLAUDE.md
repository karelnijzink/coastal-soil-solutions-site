# Coastal Soil Solutions — Website Rebuild

## Status
**BUILT AND DEPLOYED** to https://karelnijzink.github.io/coastal-soil-solutions-site/ (GitHub Pages via Actions).
Awaiting: Matt's content sign-off (launch gate 6), then manual DNS cutover per docs/DNS-CUTOVER.md.
The old Google Sites page at coastalsoilsolutions.com stays live and untouched until cutover.

## What this is
Static website for Coastal Soil Solutions (regenerative soil health services +
FPJ fertilizer, Lower Mainland BC). Full rebuild of coastalsoilsolutions.com.
Planning record: PLAN.md (approved). Source-of-truth content audit: AUDIT.md.

## Stack & decisions
- **Eleventy v3** (Nunjucks + Markdown), zero client-side framework; only JS is a 10-line nav toggle.
- CSS design tokens in `src/_includes/css/tokens.css`, inlined at build (no render-blocking CSS request).
- Fonts: Fraunces + Inter variable WOFF2, self-hosted (copied from Fontsource at build). No Google Fonts CDN.
- Images: generated via Higgsfield (Recraft V4.1 — see PLAN.md Imagery section; 21:9 slots cropped from 16:9, Soul Location not used), processed to responsive WebP by `scripts/process-images.mjs`. **Mood/design only — never fake people/labels/results.** Real-photo swap list: docs/PHOTO-TODO.md.
- Path prefix is injected by the deploy workflow from `actions/configure-pages` — never hardcode it. All internal links go through the `| url` filter.
- Brand: evolved blue "C" monogram (soil-horizon banding), palette/type per PLAN.md with WCAG-corrected greens. Amber = FPJ only.
- Lighthouse (2026-07-04, mobile, deployed): Home 97/100/100/100 · Services 100/100/100/100. Reports in docs/lighthouse/.

## Brand rules (do not violate in future edits)
- Science-led, educational, no hype/puns/exclamation marks. Voice: "a soil scientist who farms."
- No testimonials, certifications, results or claims that Matt hasn't supplied (see docs/FACT-CHECK.md).
- CASL: no email-capture form without unticked consent checkbox + purpose statement + mailing address in footer.

## Repo layout
- `src/` pages (njk/md), `src/_data/site.json` (contact, booking URL — single source of truth), `src/_includes/` layout/partials/css
- `assets/img/` optimized WebP · `assets/brand/` logo SVGs + USAGE.md · `scripts/` image pipeline
- `docs/` EDITING.md (Matt), DEPLOYING.md, DNS-CUTOVER.md, TRANSFER.md, PHOTO-TODO.md, FACT-CHECK.md, lighthouse/
- `.github/workflows/deploy.yml` — push to main = deploy

## Run instructions
`npm install` → `npm run serve` (localhost:8080) · `npm run build` → `_site/`. Deploy = push to main.

## TODO
- [ ] **Matt content sign-off** (reads every page on his phone; About page especially — it's in his voice).
- [ ] **Mailing address from Matt** → `src/_data/site.json` `mailing_address` (CASL footer; blocks outbound email referencing this site, not the site itself).
- [ ] **Booking**: replace `site.json` `booking_url` ("/contact/#book") with live Cal.com/Calendly link when Masterprompt 1's booking exists — one-line change, rewires every CTA.
- [ ] **Analytics**: create GoatCounter account, replace `TODO-goatcounter-code` in `src/_includes/layouts/base.njk`, uncomment.
- [ ] **Real photos** per docs/PHOTO-TODO.md (5 placeholder slots + Matt portrait/microscopy which have no generated stand-ins).
- [ ] **DNS cutover** at launch per docs/DNS-CUTOVER.md (manual, Matt/Karel; Google Site stays up until then).
- [ ] **Repo transfer to Matt** per docs/TRANSFER.md (after cutover is simplest).
- [ ] Original "C" logo vector from Matt if closer tracing of the legacy mark is wanted (assets/brand/USAGE.md).
