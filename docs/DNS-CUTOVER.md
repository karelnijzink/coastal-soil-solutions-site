# DNS cutover — coastalsoilsolutions.com → GitHub Pages

**Manual procedure, executed by Matt/Karel at launch. Nothing in this repo or its automation ever touches DNS. The Google Sites page stays live until step 8 confirms clean serving.**

## Preconditions
- [ ] New site verified working at https://karelnijzink.github.io/coastal-soil-solutions-site/
- [ ] Matt has content-signed-off (launch gate 6 in docs/LAUNCH-CHECKLIST section of PLAN.md)
- [ ] Registrar login for coastalsoilsolutions.com confirmed (find out whether the domain is registered directly or bundled with the Google Sites/Google Domains→Squarespace migration — check billing emails)

## Steps

1. **Verify the domain on the GitHub account** (before pointing any DNS — prevents domain takeover):
   GitHub → Settings → Pages → Verified domains → Add `coastalsoilsolutions.com` → create the TXT record it shows at the registrar → wait for verified.

2. **Lower TTL** on existing DNS records to 300 seconds. Wait for the old TTL to expire.

3. **Create/replace DNS records at the registrar:**
   | Type | Host | Value |
   |---|---|---|
   | CNAME | `www` | `karelnijzink.github.io.` |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA (optional) | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |

   Remove the old Google Sites records for these hosts (usually a CNAME to `ghs.googlehosted.com`).

4. **Add the CNAME file to the build output.** Create `src/CNAME` containing exactly:
   ```
   www.coastalsoilsolutions.com
   ```
   and add to `.eleventy.js`: `eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });`
   Commit and push; wait for the deploy. (Held out of the repo until now deliberately — committing it earlier would have set the custom domain in Pages settings before DNS resolved.)
   *Decide www vs apex as canonical first — www is recommended (CNAME is more robust than A records); the apex will redirect.*

5. **Pages settings:** repo → Settings → Pages → Custom domain shows `www.coastalsoilsolutions.com` with a green DNS check. Once the certificate issues (can take up to an hour), tick **Enforce HTTPS**.

6. **Flip the canonical URL:** in `src/_data/site.json` change `"url"` to `"https://www.coastalsoilsolutions.com"`. Commit, push, deploy. This updates canonicals, OG URLs, sitemap.xml and robots.txt.

7. **Propagation checks:**
   ```
   dig +short www.coastalsoilsolutions.com @1.1.1.1     # → karelnijzink.github.io
   dig +short coastalsoilsolutions.com @8.8.8.8          # → the four 185.199.x.153 IPs
   curl -sI https://www.coastalsoilsolutions.com | head -3
   curl -sI https://coastalsoilsolutions.com | head -3
   ```
   Then click through all 8 pages checking links and images (base-path regression check — everything should now serve from `/`).

8. **Rollback window:** keep the Google Site published for 48h of confirmed clean serving. Rollback = revert the CNAME commit, remove the custom domain in Pages settings, restore the old DNS records.

9. **Retire the Google Site** only after step 8 passes (unpublish, or leave as internal draft).

## After a repo transfer to Matt
The CNAME target changes to `<matts-username>.github.io.` — update the `www` CNAME record and re-verify the domain on Matt's account. See docs/TRANSFER.md.
