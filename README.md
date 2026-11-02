# kitelux.com

Static website for Kitelux, hosted on Cloudflare Pages from this GitHub repo. There is no build step: the files in the repo are the files that get served. See [CLAUDE.md](CLAUDE.md) for the permanent rules (no invented data, no external resources, protected URLs, etc.).

## Structure

```
/                      index.html            Company hub (products, principles, about, contact)
/vault/                vault/index.html      KiteVault product page
/vault/privacy/        Privacy policy (must never break)
/vault/terms/          Terms of service (must never break)
/about/  /security/  /contact/
/404.html              Served automatically by Cloudflare Pages
/assets/style.css      The one shared stylesheet (components documented at the top)
/assets/fonts/         Self-hosted Inter variable font (Latin subset, wght axis, woff2) and its SIL OFL license
/assets/site.js        The only script: scroll-reveal (progressive enhancement; pages work without it)
/assets/screens/       KiteVault demo video (kitevault-demo-final.mp4, 540x1200, muted loop) and its poster JPG,
                       shown inside the CSS phone frame on the home page and /vault/ with a caption saying it is
                       a recreated walkthrough. Autoplays only while visible; poster only under reduced motion.
/_headers              Security headers (strict CSP: no inline styles or scripts)
/robots.txt  /sitemap.xml  /.well-known/security.txt
```

## Preview locally

```
python -m http.server 8000
```

Open http://localhost:8000/. Use root-absolute links (`/vault/`) so pages work from any depth.

## How to add a new product

Only add a product once it has been officially announced. Replace `<slug>` with the product's folder name (for example `vault`).

1. **Create the folder** `/<slug>/index.html`. Copy `vault/index.html` as a starting point and replace the content. Use only facts that are true and documented for the product.
2. **Required head tags** on the new page: `<title>`, meta description, `<link rel="canonical" href="https://kitelux.com/<slug>/">`, Open Graph and Twitter tags, favicon links, and `<link rel="stylesheet" href="/assets/style.css">`.
3. **Product legal pages**, if the product handles user data: `/<slug>/privacy/` and `/<slug>/terms/`.
4. **Home page card**: in `index.html`, add a `.card.product-card` inside the Products section, with the product icon, name, a status badge (`badge-testing`, `badge-available` or `badge-soon`), a one-line description, and links. Remove or update the "More apps in development" placeholder card when appropriate.
5. **Footer link**: add the product to the "Products" column of the footer on **every** page (all HTML files, including `404.html`). Add its privacy and terms links to the "Legal" column.
6. **Sitemap**: add a `<url>` entry for each new page to `sitemap.xml`.
7. **Icon**: add the product icon to `/assets/` and use it only where that product is shown. The Kitelux logo represents the company only.
8. **Rules check** (see CLAUDE.md):
   - Plain HTML and the shared CSS only. No inline styles or scripts (the CSP blocks them), no external resources.
   - Every page footer links to `/vault/privacy/` and shows `support@kitelux.com`.
   - Contrast and focus styles hold in both light and dark mode.
   - No invented numbers, ratings, testimonials or names. Leave a `TODO` comment for anything unknown.
   - `/`, `/vault/privacy/` and `/vault/terms/` still work.
9. **Update CLAUDE.md** so the "one product" statement stays accurate.

## Deploying

Pushing to the main branch on GitHub deploys to Cloudflare Pages. Set no build command and use the repo root as the output directory.
