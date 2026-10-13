# Media

Every asset is copied verbatim from its source. Never redraw, recolour or
regenerate brand art here; refresh the copy instead.

| Path | Source | Used on |
|---|---|---|
| `public/brand/` | brand kit `~/myapps/Splander-jobs-marketing/brand-kit` (`03-marketing/logo`, `03-marketing/mascot`, `01-app-extension/illustrations/mascot.svg`, `01-app-extension/icons/icon-32.svg` as `icon-plain.svg`, `03-marketing/web/icon.svg`) | header/footer lockups, mascot, product moments |
| `public/favicon.*`, `favicon-*.png`, `apple-touch-icon.png`, `icon-192/512.png` | brand kit `03-marketing/web/` | `<head>`, `site.webmanifest` |
| `public/og-image.png` | brand kit `03-marketing/social/og-image-1200x630.png` | Open Graph / Twitter card |
| `public/screens/*.png` | splander-com/jobs `store-assets/screenshots/` (1280×800, regenerate with `node scripts/store-screenshots.mjs`) | home + feature-page heroes |
| `public/media/promo-30s.mp4`, `promo-poster.png` | splander-com/jobs `marketing/promo-video/deliverables/` | home hero (click-to-load) |

## Brand rules that affect placement

- The mascot's face needs at least 48px. `Mark` switches to the plain plane below that.
- The plain mascot goes on light surfaces, and the white-halo sticker goes on chrome.
- The product moments (`saved-as-applied`, `streak`) sit only beside the feature they
  depict. They get `alt=""` + `aria-hidden`, and the text beside them carries the meaning.
- Any motion goes behind `prefers-reduced-motion` / `motion-safe:`.

## Still to produce

- [ ] A contacts / recruiter screenshot for `/network` (the hero shows the mascot until then)
- [ ] Hebrew versions of the screenshots and video for the Hebrew site
