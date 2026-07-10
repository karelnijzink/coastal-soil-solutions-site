# How to edit the site (for Matt)

You do not need any software installed. Everything is edited on github.com in the browser; the site rebuilds and republishes itself automatically about a minute after you save.

## The one-time setup
1. Log in at github.com.
2. Open the repository: `coastal-soil-solutions-site`.

## Want to change X → edit file Y

| You want to change | Edit this file |
|---|---|
| Homepage headline, cards, story teaser | `src/index.njk` |
| FPJ page (product info, stockist text) | `src/fpj.njk` |
| Shop page intro / ordering text | `src/shop.njk` |
| Services page (what's included in each service) | `src/services.njk` |
| **Prices** ($150 / $190) | `src/services.njk` (and the homepage hero button in `src/index.njk`) |
| **Fertilizer products / prices** | `src/_data/shop.json` — one place, feeds the Shop page |
| Schools page | `src/schools.njk` |
| Your story / About | `src/about.njk` |
| Contact page | `src/contact.njk` |
| Privacy page | `src/privacy.md` |
| **Email, phone, service area (site-wide)** | `src/_data/site.json` — one place, updates every page |
| Mailing address (footer, CASL) | `src/_data/site.json` → `"mailing_address"` |
| Booking link (when Cal.com is live) | `src/_data/site.json` → `"booking_url"` |
| Menu items | `src/_data/nav.json` |
| Images | `assets/img/` (upload a new file, then update the filename in the page) |

## How to make an edit
1. Click the file, then the **pencil icon** (top right of the file view).
2. Change the text. Only change words between `>` and `<` — the tags around them are the page structure.
3. Click **Commit changes** (green button), keep "Commit directly to the main branch", commit.
4. Wait ~1 minute. Check the live site. Done.

If something looks broken after an edit, don't panic — every change is saved in history and Karel can restore any previous version in seconds.

## Rules that keep us honest (please keep these)
- No testimonials, certifications or results on the site unless they are real and you can back them.
- FPJ ingredient list stays complete — transparency is our proof.
- If you ever add a newsletter signup form, talk to Karel first: CASL requires specific consent language and a mailing address in the footer.
