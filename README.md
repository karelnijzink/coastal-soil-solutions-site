# Coastal Soil Solutions — Website

This repository holds the website for **Coastal Soil Solutions**, a regenerative
soil health company serving the Lower Mainland, BC — soil consulting and testing,
custom amendment programs, and Fermented Plant Juice (FPJ) fertilizer. It is a
static Eleventy site deployed to GitHub Pages, replacing the previous Google
Sites page at coastalsoilsolutions.com (which stays live until DNS cutover).

**Live (pre-cutover):** https://karelnijzink.github.io/coastal-soil-solutions-site/

## How to edit

Plain-English guide for non-developers: **[docs/EDITING.md](docs/EDITING.md)**.
Short version: edit files on github.com in the browser (prices and copy live in
`src/*.njk`; contact details and the booking link live in `src/_data/site.json`),
commit to `main`, and the site republishes itself in about a minute.

Content rules: no testimonials/certifications/claims that aren't real
(docs/FACT-CHECK.md), and any future email-capture form needs CASL consent
language — see CLAUDE.md.

## How to deploy

Automatic: every commit to `main` triggers `.github/workflows/deploy.yml`
(Eleventy build → GitHub Pages, no secrets). Details, failure triage and local
dev: **[docs/DEPLOYING.md](docs/DEPLOYING.md)**. Launch steps that are manual
by design: DNS cutover (**[docs/DNS-CUTOVER.md](docs/DNS-CUTOVER.md)**) and the
eventual repo transfer to Matt (**[docs/TRANSFER.md](docs/TRANSFER.md)**).
