# How deploys work

**Short version: pushing (or web-editing) anything to the `main` branch deploys the site.** There is no separate publish step.

1. A commit lands on `main`.
2. GitHub Actions runs `.github/workflows/deploy.yml`: installs Node 22, runs `npm ci`, builds with Eleventy (path prefix injected automatically by `actions/configure-pages`), and deploys the `_site/` output to GitHub Pages.
3. ~60–90 seconds later the site is live at the Pages URL.

## Checking a deploy
- Repo → **Actions** tab. The top run is the latest deploy.
- Green check = live. Red X = the build failed and **the previous version stays up** (a failed build never breaks the live site).
- On a red X: click the run → click the failed step to read the error → fix, or re-run via "Re-run all jobs", or call Karel.

## Local development (Karel)
```
npm install
npm run serve        # http://localhost:8080
npm run build        # writes _site/
```

## Notes
- No secrets are used anywhere; deployment auth is OIDC via `actions/deploy-pages`.
- The path prefix is never hardcoded: on github.io the site builds under `/coastal-soil-solutions-site/`; once the custom domain is set in Pages settings, the same workflow automatically builds for `/`. See docs/DNS-CUTOVER.md.
- Regenerating imagery variants: `npm run process-images -- <originals-dir> <jobmap.json>` (see scripts/process-images.mjs; originals are never committed).
