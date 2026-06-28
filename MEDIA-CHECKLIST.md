# Media to produce

The site ships now with styled placeholders. Swap real assets in as they're produced —
each `ScreenshotFrame`/`VideoEmbed` takes a `src` / `youtube` / `poster` prop, so it's a
one-line change per slot. Specs follow `marketing.md §8`.

## Open Graph

- [ ] `public/og-default.png` — **1200×630**, lockup + tagline on plum. Then set
  `ogImage` default back to `/og-default.png` in `src/components/Seo.astro`
  (currently falls back to the square `/icon-512.png`).

## Screenshots (1280×800, captioned)

Drop into `public/shots/` and pass `src` to the relevant `ScreenshotFrame`.

- [ ] Status pills on a real job card → home hero + `/track`
- [ ] Side-panel list + funnel → `/track`, `/land`
- [ ] Dashboard ring + 🔥 streak with a recruiter email advancing a status → `/automate`, `/land`
- [ ] Add Job (manual / paste / bulk) → `/track`
- [ ] ATS match score (matched/missing skills) → `/score`
- [ ] LinkedIn Profile Score + SSI sparkline → `/score`
- [ ] Recruiter contact + 3-channel outreach → `/network`
- [ ] Autofill on an ATS form → `/network`
- [ ] Premium waitlist tab → `/premium`

## Video

- [ ] 45–60s demo (EN + HE captions). Host as unlisted YouTube → pass `youtube="<id>"`
  to `<VideoEmbed>` on the home "How it works" section (and optionally a `poster`).
- [ ] 9:16 ~15s social cut for LinkedIn / WhatsApp / Instagram (Israel GTM).

## Notes

- Keep captions in Sora bold, dark-slate or white-on-plum.
- Consider Hebrew screenshot variants for a future `he` localized page set.
- Do not imply LinkedIn/Indeed/Glassdoor partnership; no competitor names.
