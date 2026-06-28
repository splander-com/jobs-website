import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Static-first marketing site. Zero client JS by default (Astro islands only
// where we explicitly opt in). Optimised for SEO + Core Web Vitals.
//
// Host is env-driven so the SAME source builds for the final domain
// (jobs.splander.com, root) or a GitHub Pages project subpath
// (splander-com.github.io/jobs-website/) without code changes:
//   PUBLIC_SITE_URL  — absolute origin (+ optional subpath) used for canonical/sitemap
//   PUBLIC_BASE      — path the site is served under (default "/")
// Keep PUBLIC_SITE_URL in sync with SITE_URL in src/consts.ts.
const SITE = process.env.PUBLIC_SITE_URL || "https://jobs.splander.com";
const BASE = process.env.PUBLIC_BASE || "/";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "never",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
