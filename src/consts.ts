// Single source of truth for site-wide constants. Copy/brand pulled from the
// product's marketing.md + store-assets/STORE-LISTING.md (code wins on conflict).

export const SITE_URL = "https://jobs.splander.com";

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
