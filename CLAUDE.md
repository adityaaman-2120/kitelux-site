# CLAUDE.md â€” kitelux.com

Static website for **kitelux.com**, hosted on Cloudflare Pages from GitHub. There is no build step: what is in the repo is what gets served.

## About Kitelux

- Kitelux is the trading name of **Aditya Aman**, an individual developer in Kolkata, India.
- Kitelux currently has exactly **one** product: **KiteVault**, an offline-first Android password manager (package `com.kitelux.kitevault`).
- KiteVault is in **internal testing on Google Play and is not publicly released**. Do not write copy that implies a public launch, download counts, or store availability.
- More products will come later, but **none are announced**. Do not mention, hint at, or invent any other product.

## Permanent rules

### 1. Never invent data
No user counts, ratings, reviews, testimonials, press logos, partner logos, team members, awards, or unannounced product names. If content is unknown, leave a clearly marked `<!-- TODO: ... -->` comment in the HTML and **tell the user** in your reply what is missing.

### 2. Plain static stack
- Plain static HTML plus **one shared CSS file** (`assets/style.css`).
- No frameworks, no build step, no external CDNs, no analytics, no tracking, no cookies.
- Fonts: exactly ONE self-hosted variable font (Inter, Latin subset with the optical-size axis removed, SIL OFL, in `assets/fonts/` with its license). No other web fonts and no font CDNs (Google Fonts etc.).
- JavaScript only if strictly necessary. Default is none; justify it to the user before adding any. Currently the only script is `/assets/site.js` (scroll reveal; progressive enhancement, pages work fully without it). Never inline scripts (CSP).

### 3. URLs that must never break
- `/`
- `/vault/privacy/`
- `/vault/terms/`

Everything stays on the `kitelux.com` domain (no subdomains). Do not rename, move, or delete these paths, and keep the trailing-slash folder + `index.html` structure.

### 4. Footer privacy link
Every page links to `/vault/privacy/` in its footer (Google OAuth verification requirement). New pages are not done until this link is present.

### 5. Contact details
- Contact email: `support@kitelux.com`
- Security email: `support@kitelux.com`
  <!-- TODO: may change to security@kitelux.com later. Keep security contact in one clearly identifiable place per page so it is easy to switch. -->

### 6. Mobile-first and accessible
- Mobile-first layout.
- Semantic HTML (`header`, `nav`, `main`, `footer`, proper heading order), meaningful `alt` text, visible focus styles, WCAG AA contrast.
- Light and dark mode via `prefers-color-scheme`. Verify contrast in **both** modes.
- Theme: dark = "night sky" (gradient `#0A1028` â†’ `#121B45` â†’ `#1C2257`, amber dusk glow, 4% grain); light = "day sky" (sky blue to near-white). Glass cards, sticky header. Defined entirely by tokens in `assets/style.css`.

### 7. Palette
- Night blue `#0E1630`
- Amber `#FFB547`

Use the existing design tokens in `assets/style.css`. Do not add new colors without reason; reuse tokens instead of hard-coding hex values in pages.

### 8. Adding a future product
A new product = a new folder `/<slug>/` + a card on the home page + a footer link + a sitemap entry. The steps are documented in `README.md`. Do not add a product that the user has not explicitly announced.

## Working notes

- Keep changes minimal and consistent with existing pages; copy the structure of `index.html` and `vault/privacy/index.html` for new pages.
- Every page needs: `<title>`, meta description, `lang` attribute, viewport meta, link to `/assets/style.css`, and the shared footer.
- Use root-absolute paths for internal links (`/vault/privacy/`, `/assets/style.css`).
- Before finishing any change, confirm the three protected URLs still exist and the footer privacy link is on every page.
- `README.md` has the add-a-product checklist; `sitemap.xml` lists every page. `_headers` sets a strict CSP, so never add inline `style` attributes, `<style>` or `<script>` blocks.
