# Transferring this repo to Matt's GitHub account

Not a launch blocker — can happen any time (after DNS cutover is simplest).

## Steps
1. Matt creates a GitHub account (if he doesn't have one) and tells Karel the username.
2. Karel: repo → Settings → General → Danger Zone → **Transfer ownership** → enter Matt's username.
3. Matt accepts the transfer (email link).

## What breaks and how to fix it
| Breaks | Fix |
|---|---|
| Pages URL changes to `https://<matt>.github.io/coastal-soil-solutions-site/` | If before cutover: update any shared links. If after cutover: site serves from the custom domain, so nothing user-facing changes. |
| Actions may be disabled on transfer | Repo → Settings → Actions → enable; re-run the last workflow. |
| Pages config | Repo → Settings → Pages → confirm Source = GitHub Actions; re-enter custom domain if it dropped. |
| Custom-domain verification | Verify `coastalsoilsolutions.com` on **Matt's** account (Settings → Pages → Verified domains) and update the `www` CNAME record to `<matt>.github.io.` |
| Karel's access | Matt adds Karel as a collaborator (repo → Settings → Collaborators) for ongoing maintenance. |
| Old git remotes | GitHub redirects the old URL, but Karel should run `git remote set-url origin <new-url>` locally. |
