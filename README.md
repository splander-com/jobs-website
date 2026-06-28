# Splander Jobs — marketing website

The marketing site for **jobs.splander.com**. Its job is to convert visitors into
Chrome Web Store installs, seed the Premium waitlist, and collect feedback.

## Stack

- **Astro 5** (static / SSG) — ships ~zero client JS by default for best SEO + Core Web Vitals.
- **Tailwind CSS 4** via `@tailwindcss/vite`; design tokens in `src/styles/global.css` (`@theme`),
  mirrored from the extension's `tailwind.config.ts` + `marketing.md`.
- Self-hosted fonts (`@fontsource` Inter + Sora) — no render-blocking Google Fonts.
- `@astrojs/sitemap` for `sitemap-index.xml`.
- Deployed on **Vercel** (static). Security/cache headers in `vercel.json`.

## Develop

```bash
cd website
npm install                # or: npm install --cache /tmp/npm-cache-jobs
npm run dev                # http://localhost:4321
npm run build              # static output → dist/
npm run preview            # serve the built site
npm run check              # astro type/diagnostics check
```

## Structure

- `src/consts.ts` — brand strings, store URL, the 5-stage journey list.
- `src/data/journeys.ts` — all copy for the 5 journey pages (edit here, no layout changes).
- `src/components/` — `Mark`/`Wordmark` (ported from `extension/lib/brand-mark.ts`), `Seo`,
  `SiteHeader`/`SiteFooter`, section components, `FeedbackForm`, `VideoEmbed` (click-to-load facade).
- `src/pages/` — `index`, `[slug]` (the 5 journey pages), `premium`, `privacy`, `feedback`, `404`.

## Feedback form

Posts to the **existing** Supabase `submit-feedback` edge function (no new backend) →
`feedback` table; an optional email routes to `waitlist_signups` (source `jobs-website`).
Requires two public env vars (anon key is publish-safe; the `feedback` table is not
client-readable):

```
PUBLIC_SUPABASE_URL=https://hcwnozzjsgqibhpebkhx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=<anon key>
```

Set them in `website/.env` for local dev and in the Vercel project for production.
See `.env.example`.

## Deploy (Vercel)

1. New Vercel project, **Root Directory = `website`**, framework preset **Astro**.
2. Add the two `PUBLIC_*` env vars.
3. Add domain `jobs.splander.com`.

## Media

Most product screenshots/videos are placeholders. See `MEDIA-CHECKLIST.md` for what to
produce and where each asset slots in.
