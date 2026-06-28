import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Static-first marketing site. Zero client JS by default (Astro islands only
// where we explicitly opt in). Optimised for SEO + Core Web Vitals.
// Keep in sync with SITE_URL in src/consts.ts.
export default defineConfig({
  site: "https://jobs.splander.com",
  trailingSlash: "never",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
