# Splander Jobs — marketing website

The marketing site for **jobs.splander.com**. Its job is to convert visitors into
Chrome Web Store installs, seed the Premium waitlist, and collect feedback.

## Stack

- **Astro 5** (static / SSG) — ships ~zero client JS by default for best SEO + Core Web Vitals.
- **Tailwind CSS 4** via `@tailwindcss/vite`; design tokens in `src/styles/global.css` (`@theme`),
  mirrored from splander-com/jobs `extension/DESIGN-SYSTEM.md` + `tailwind.config.ts`
  (coral `action` with ink labels, `coral-deep` for links, `chrome` bands, status tones).
- Self-hosted fonts (`@fontsource` Inter + Sora) — no render-blocking Google Fonts.
- `@astrojs/sitemap` for `sitemap-index.xml`.
- Deployed on **Vercel** (static). Security/cache headers in `vercel.json`.

## Develop

```bash
npm install                # or: npm install --cache /tmp/npm-cache-jobs
npm run dev                # http://localhost:4321
npm run build              # static output → dist/
npm run preview            # serve the built site
npm run check              # astro type/diagnostics check
```

## Structure

- `src/consts.ts` — slogan, short pitch, job-site list, store URL, the 5 feature pages.
- `src/data/journeys.ts` — all copy for the 5 feature pages (edit here, no layout changes).
- `src/components/` — `Mark`/`Wordmark`/`Lockup`/`Mascot`/`Moment` (brand-kit art from `public/brand/`), `Seo`,
  `SiteHeader`/`SiteFooter`, section components, `FeedbackForm`, `HeroVideo` (muted autoplay loop, full video with sound on click).
- `src/pages/` — `index`, `[slug]` (the 5 feature pages), `premium`, `privacy`, `feedback`, `404`,
  the extension's `welcome` (post-install) and `uninstall` (survey) pages, and `oauth/consent`
  (the OAuth consent screen). Those three are noindex and out of the sitemap.

## Feedback form

Posts to the **existing** Supabase `submit-feedback` edge function (no new backend) →
`feedback` table; an optional email routes to `waitlist_signups` (source `jobs-website`).
Requires two public env vars (anon key is publish-safe; the `feedback` table is not
client-readable):

```
PUBLIC_SUPABASE_URL=https://hcwnozzjsgqibhpebkhx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=<anon key>
```

Set them in `.env` for local dev and in the Vercel project for production.
See `.env.example`.

`/uninstall` posts to the same function with category/source `uninstall`, sending the
reason codes and the install id the extension passes in `?iid=`.

## OAuth consent page (`/oauth/consent`)

The Supabase project's **OAuth 2.1 server** (used by claude.ai to connect to the `jobs-mcp`
server) sends users here as `/oauth/consent?authorization_id=…`. It is the one page on the site
with client JS: a small `@supabase/supabase-js` island that signs the user in with Google if
needed, calls `supabase.auth.oauth.getAuthorizationDetails`, and sends the Allow / Deny decision
back with `approveAuthorization` / `denyAuthorization`, then follows the returned `redirect_url`.

It reads the same two `PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY` env vars as the feedback
form, so **both must be set in the Vercel project** (Production and Preview) or the page shows a
"not configured" message. The Supabase side (Yoni, dashboard): Site URL `https://jobs.splander.com`,
Authorization Path `/oauth/consent`, `https://jobs.splander.com/oauth/consent` in the Auth → URL
Configuration redirect allow-list (the Google sign-in returns there), and the connecting app
registered under Auth → OAuth Apps (or "Allow Dynamic OAuth Apps" turned on).

## Privacy policy

`/privacy` renders `src/content/privacy.md`, a verbatim copy of `PRIVACY.md` at the
root of the private repo **splander-com/jobs** (the policy the Chrome Web Store
listing relies on). That file is the single source of truth.

**Whenever `PRIVACY.md` changes in splander-com/jobs, refresh the copy here:**

```bash
cp ../jobs/PRIVACY.md src/content/privacy.md
```

The build fails if the `_Last updated: YYYY-MM-DD_` line is missing. Only the short
"This website" section (cookies, the feedback form) lives in `src/pages/privacy.astro`;
keep it in step with what `src/components/FeedbackForm.astro` sends.

## Deploy (Vercel)

1. New Vercel project, **Root Directory = repo root**, framework preset **Astro**.
2. Add the two `PUBLIC_*` env vars (needed by the feedback form **and** `/oauth/consent`).
3. Add domain `jobs.splander.com`.

## Media

Screenshots, video and brand art are copied from their sources. See `MEDIA-CHECKLIST.md` for where
each one comes from and the brand rules for placing it.
