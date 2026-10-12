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
// Slogan — same as the extension (Brand.tsx SLOGAN, onboarding title).
export const TAGLINE = "Your job search co-pilot.";
// Short pitch — same as manifest.description / the store short description.
export const ONE_LINER =
  "Your job search co-pilot. Track every application, autofill forms, get status updates from your inbox, and send more CVs.";

// The job sites the extension works on. Claims rule: list all of them or none,
// never a single board.
export const JOB_SITES = ["LinkedIn", "Indeed", "Glassdoor", "AllJobs", "JobNet", "JobFox", "Jobify"] as const;
export const JOB_SITES_TEXT = "LinkedIn, Indeed, Glassdoor, AllJobs, JobNet, JobFox and Jobify";

// Live Chrome Web Store listing.
export const EXTENSION_ID = "fdmdefbjbhhjghmlgmkfmbmbpaiecfel";
export const CHROME_STORE_URL = `https://chromewebstore.google.com/detail/splander-jobs-job-application-tracker/${EXTENSION_ID}`;

export const SUPPORT_EMAIL = "dev@splander.com";
export const SPLANDER_HOME = "https://splander.com";

// The five feature pages. Slugs (and so URLs) are kept for SEO; /land is
// labelled "Goals" (no flying metaphors in copy).
export const JOURNEY = [
  { slug: "track", eyebrow: "Track", nav: "Track", title: "Every application, in one place" },
  { slug: "score", eyebrow: "Score", nav: "Score", title: "See how your CV fits, before you apply" },
  { slug: "automate", eyebrow: "Automate", nav: "Automate", title: "Fill the form once. Let your inbox update your tracker." },
  { slug: "network", eyebrow: "Network", nav: "Network", title: "Keep every recruiter in one place" },
  { slug: "land", eyebrow: "Goals", nav: "Goals", title: "Keep sending CVs, every day" },
] as const;

export type JourneySlug = (typeof JOURNEY)[number]["slug"];
