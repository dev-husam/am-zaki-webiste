# ام زكي قصص وحكايا — Landing Page

Static Arabic (RTL) site. No build step, no dependencies. Works on GitHub Pages, Cloudflare Pages, Netlify.

## Before you publish (2 minutes)
1. **Social links** → open `js/main.js`, fill the `SOCIAL` object with your real URLs. Empty ones automatically show "قريبًا" instead of a dead link.
2. **Share-preview URL** → after you know your final address, replace `https://YOUR_USERNAME.github.io/um-zaki/` in `index.html` (3 places: canonical, `og:url`, `og:image`). One command from this folder:
   ```bash
   sed -i '' 's#https://YOUR_USERNAME.github.io/um-zaki/#https://REAL_ADDRESS/#g' index.html
   ```
   (macOS syntax. On Linux remove the `''`.)
3. Edit the episode card in `index.html` (section `#episode`) when real episodes launch.

## Deploy on GitHub Pages (free)
1. Create a GitHub account → **New repository** → name it `um-zaki` → **Public** → don't add a README → Create.
2. In Terminal, from this `website/` folder:
   ```bash
   git init
   git add .
   git commit -m "Um Zaki landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/um-zaki.git
   git push -u origin main
   ```
3. On GitHub: repo → **Settings → Pages** → *Build and deployment* → Source: **Deploy from a branch** → Branch: **main** / folder **/(root)** → **Save**.
4. Wait 1–2 minutes. Your site is live at `https://YOUR_USERNAME.github.io/um-zaki/`.
5. Update the URL placeholders (step 2 above), then:
   ```bash
   git add . && git commit -m "Set final URL" && git push
   ```

> Tip: if you name the repo exactly `YOUR_USERNAME.github.io`, the site is served at the root `https://YOUR_USERNAME.github.io/` (no `/um-zaki/`).

## Custom domain (optional)
Repo → Settings → Pages → Custom domain → enter e.g. `umzaki.com`, then at your domain registrar add a `CNAME` record pointing `www` to `YOUR_USERNAME.github.io` (and the four GitHub `A` records for the apex domain). Tick **Enforce HTTPS**.

## Updating the site later
Edit files → `git add . && git commit -m "update" && git push`. Pages redeploys in about a minute.

## Notes
- Fonts: Noto Sans Arabic + Montserrat via Google Fonts (per the design system).
- Colors: Charcoal `#1A1A1A`, Oud `#4A342A`, Cream `#F7F4EF`, Gold `#D4AF72`, Olive `#6B765B`.
- `.nojekyll` stops GitHub from processing the files. Don't delete it.
- All paths are relative, so the site works both under `/um-zaki/` and on a custom domain.
