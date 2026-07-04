# Coastal Soil Solutions — Website Rebuild

## Status
**PHASE 0 COMPLETE — PLAN.md AWAITING APPROVAL. No build code until approved.**
Planned stack (pending approval): Eleventy v3, self-hosted fonts, GitHub Actions →
Pages deploy, GoatCounter slot (commented out). See PLAN.md decision log.

## What this is
Static website for Coastal Soil Solutions (regenerative soil health services +
FPJ fertilizer, Lower Mainland BC), deployed to **GitHub Pages via GitHub
Actions**. This repo is the full rebuild of coastalsoilsolutions.com.

## Brand direction
Science-led regenerative soil. Credible, grounded, practitioner-focused —
**not cutesy or crunchy-granola**. Think agronomy lab meets working farm.

## Key decisions
- Static site, GitHub Pages hosting, deployed from GitHub Actions (no server).
- Booking CTAs are placeholders for now; they will wire to Cal.com/Calendly
  later — do not hardcode a final booking URL yet.
- Do not touch DNS or the live coastalsoilsolutions.com site until the
  planned cutover.

## Repo layout
- `src/` — site source
- `assets/img/` — images
- `docs/` — project docs / runbook material

## TODO
- [ ] Transfer repo ownership from `karelnijzink` to Matt's GitHub account
      when available (Settings → General → Transfer ownership).
- [ ] Replace placeholder imagery with real photos from Matt.
- [ ] DNS cutover of coastalsoilsolutions.com to GitHub Pages at launch
      (CNAME + custom domain config) — launch step only.
- [ ] Wire booking CTAs to Cal.com/Calendly once the booking stack is live.
