// Single source of truth for site-wide constants. Copy/brand pulled from the
// product's marketing.md + store-assets/STORE-LISTING.md (code wins on conflict).

// Env-driven so the same source serves the final domain or a Pages subpath.
// Used for canonical/OG URLs (see src/components/Seo.astro).
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL ?? "https://jobs.splander.com";

/**
 * Prefix an internal path with the configured base path so links resolve under
 * a subpath deploy (e.g. /jobs-website/) AND at the domain root (BASE_URL "/").
 * Pass root-relative paths only ("/track", "track", "/"). External/hash hrefs
 * must NOT be passed through this.
 */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // "" or "/jobs-website"
  const p = "/" + String(path).replace(/^\//, ""); // "/track" | "/"
  return base + p;
}

export const SITE_NAME = "Splander Jobs";
export const STORE_TITLE = "Splander Jobs – Job Application Tracker";
export const TAGLINE = "Your job hunt, tracked automatically.";
export const ONE_LINER =
  "Stop maintaining a job-search spreadsheet. Splander Jobs tracks it for you — automatically.";

// Live Chrome Web Store listing.
export const EXTENSION_ID = "fdmdefbjbhhjghmlgmkfmbmbpaiecfel";
export const CHROME_STORE_URL = `https://chromewebstore.google.com/detail/splander-jobs-job-application-tracker/${EXTENSION_ID}`;

export const SUPPORT_EMAIL = "dev@splander.com";
export const SPLANDER_HOME = "https://splander.com";

// The 5-stage job-journey arc. Order is the narrative spine of the whole site.
export const JOURNEY = [
  {
    slug: "track",
    eyebrow: "Discover & Track",
    nav: "Track",
    title: "Every application, tracked across every board",
  },
  {
    slug: "score",
    eyebrow: "Score & Optimize",
    nav: "Score",
    title: "Know if your CV fits — before you apply",
  },
  {
    slug: "automate",
    eyebrow: "Automate",
    nav: "Automate",
    title: "Your status updates itself, straight from your inbox",
  },
  {
    slug: "network",
    eyebrow: "Network & Reach out",
    nav: "Network",
    title: "Every recruiter, organized — and reached",
  },
  {
    slug: "land",
    eyebrow: "Stay on pace & land it",
    nav: "Land",
    title: "Keep momentum until the offer lands",
  },
] as const;

export type JourneySlug = (typeof JOURNEY)[number]["slug"];
