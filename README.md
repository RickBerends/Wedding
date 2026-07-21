# Rick &amp; Jikke — Wedding Site

A small, bilingual (English / Nederlands) wedding website in a hand-drawn, cream-paper /
midnight-disco style. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

> **Status:** content scaffold. Real dates, venue, program and FAQ answers are placeholders
> (written as `{ DATE }`, `{ VENUE }`, etc.) — fill them in via `src/content/i18n.js`.

## Structure

```
src/
  content/i18n.js        all copy, per locale (en / nl) — edit here
  styles/global.css      design tokens + component styles (paper + midnight themes)
  layouts/BaseLayout.astro
  components/            Header, Footer, PageHero, Icon (line-art SVGs)
  pages/
    index.astro          redirects to /en/
    [lang]/index.astro   home
    [lang]/story.astro
    [lang]/details.astro
    [lang]/travel.astro
    [lang]/rsvp.astro
    [lang]/faq.astro
    404.astro
```

Every page is generated once per locale from `getStaticPaths` (`en`, `nl`). The language
toggle in the header links to the same page in the other language; the paper ⇄ midnight
theme toggle is remembered in `localStorage`.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321/Wedding/en/
npm run build     # static output to ./dist
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` and publishes `./dist` to GitHub Pages. In the repo settings, set
**Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

The site is configured for the project URL `https://rickberends.github.io/Wedding/`
(`base: '/Wedding'` in `astro.config.mjs`). If you add a custom domain, drop a `CNAME`
file in `public/`, set `site` to the domain and `base` to `'/'`.

## To do

- Fill in real content in `src/content/i18n.js`.
- Decide the RSVP backend (email link, Google Form, Formspree, or a small handler) and
  wire up the form action in `src/pages/[lang]/rsvp.astro`.
- Commission or redraw final illustrations. The SVGs in `src/components/Icon.astro` are
  original placeholders drawn in the reference style — the Pinterest images themselves are
  not used and should not be shipped.
