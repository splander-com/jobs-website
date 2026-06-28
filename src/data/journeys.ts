// Content for the 5 job-journey pages. Copy is benefit-led and sourced from
// marketing.md + store-assets/STORE-LISTING.md, staying inside the claim rules
// (no superlatives, no competitor product names, no outcome promises).
// Editing copy here needs no layout changes — the journey page reads this.

export interface JourneyFeature {
  title: string;
  body: string;
  /** Optional screenshot placeholder caption for this feature block. */
  shot?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface JourneyContent {
  slug: string;
  step: number; // 1-based position in the arc
  eyebrow: string;
  nav: string;
  title: string;
  subtitle: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  features: JourneyFeature[];
  faqs: Faq[];
  /** Caption for the hero screenshot/video placeholder. */
  heroShot: string;
}

export const JOURNEYS: JourneyContent[] = [
  {
    slug: "track",
    step: 1,
    eyebrow: "Discover & Track",
    nav: "Track",
    title: "Every application, tracked across every board",
    subtitle:
      "A status badge on every listing, and a private side-panel tracker that remembers each job from CV to offer.",
    intro:
      "The job hunt scatters across tabs, boards, and a spreadsheet you forget to update. Splander Jobs puts a status pill on every listing you've touched and keeps the whole pipeline in one private side panel — so you never open the same job twice.",
    metaTitle: "Track job applications across LinkedIn, Indeed, Glassdoor & jobnet",
    metaDescription:
      "Put a status badge on every job listing and track every application from CV to offer in one private side panel. Works on LinkedIn, Indeed, Glassdoor and jobnet.co.il. Free, no signup.",
    heroShot: "Status pills on a job card + side-panel list",
    features: [
      {
        title: "Status badges on every listing",
        body: "Browse LinkedIn, Indeed, Glassdoor and jobnet.co.il as usual. Splander Jobs attaches a colored status pill to each card — Sent CV, Interview, Offer, Rejected, and more — so you instantly see what you've already applied to or chosen to ignore.",
        shot: "Status badge overlay on a results card",
      },
      {
        title: "Save a job in one click",
        body: "An in-page action bar on each job lets you save it, ignore the listing or the whole company, or open it in the side panel — without leaving the page. Saving snapshots the role and scrapes the description for you.",
        shot: "In-page action bar (save / ignore / open)",
      },
      {
        title: "Your whole pipeline, one panel",
        body: "The side panel is a sortable, searchable list of every application you've tracked, filterable by status and date. One row per company rolls up to its most advanced stage so the picture stays clean.",
        shot: "Side-panel job list with filters",
      },
      {
        title: "Add jobs your way",
        body: "Add a role manually, paste a description to auto-parse it, or bulk-import a whole list at once. Inline editing covers title, company, location, salary terms and notes, and every change is kept in a per-application activity log.",
        shot: "Add-job: manual / paste / bulk",
      },
    ],
    faqs: [
      {
        q: "Which job boards does Splander Jobs work on?",
        a: "LinkedIn, Indeed, Glassdoor and jobnet.co.il. A status badge appears on listings across all of them, and everything you save lands in one shared tracker.",
      },
      {
        q: "Do I need an account to track jobs?",
        a: "No. Tracking works fully without an account — every job is saved locally in your browser. Signing in is optional and only adds cross-device backup and the Premium waitlist.",
      },
    ],
  },
  {
    slug: "score",
    step: 2,
    eyebrow: "Score & Optimize",
    nav: "Score",
    title: "Know if your CV fits — before you apply",
    subtitle:
      "An instant match score against every job, plus tools to optimize your CV and LinkedIn profile for the roles you want.",
    intro:
      "Applying blind wastes your best hours. Splander Jobs scores your CV against each saved job, shows which required skills you're missing, and helps you tighten your CV and LinkedIn profile around the roles you actually want.",
    metaTitle: "CV-to-job match score & profile optimization",
    metaDescription:
      "Get an instant CV-to-job match score on every saved job, see the skills you're missing, and optimize your CV and LinkedIn profile. Free rule-based scoring; AI scoring on Premium.",
    heroShot: "ATS match score with matched / missing skills",
    features: [
      {
        title: "Instant CV-to-job match",
        body: "Every saved job gets a match score against your CV, highlighting the required skills you have and the ones you're missing, with Jobscan-style keyword frequencies and how well your title and seniority line up with the role — tuned to the target role and seniority you set in your preferences.",
        shot: "Match score + missing-skills list",
      },
      {
        title: "A private CV vault",
        body: "Drop in your CV once (PDF, DOCX or text — parsed on your device) and every scoring surface reuses it. Nothing is uploaded unless you turn on cloud sync.",
        shot: "CV vault editor",
      },
      {
        title: "Optimize your LinkedIn profile",
        body: "Import your own LinkedIn profile in one click and get a completeness-and-alignment score against your target role, with a clear, prioritized list of what to improve next.",
        shot: "LinkedIn Profile Score with checks",
      },
      {
        title: "Track your SSI trend",
        body: "Splander Jobs captures your LinkedIn Social Selling Index over time and charts the trend, so you can see your networking visibility move as you put the work in.",
        shot: "SSI sparkline card",
      },
    ],
    faqs: [
      {
        q: "Is the match score free?",
        a: "Yes. A deterministic, on-device match score is free and runs with no network calls. Premium adds an AI-quality score and tailored CV suggestions.",
      },
      {
        q: "Where is my CV stored?",
        a: "On your device, in local browser storage. It only reaches the cloud if you explicitly turn on cloud sync while signed in.",
      },
    ],
  },
  {
    slug: "automate",
    step: 3,
    eyebrow: "Automate",
    nav: "Automate",
    title: "Your status updates itself, straight from your inbox",
    subtitle:
      "Connect Gmail (read-only, opt-in) and a recruiter's reply moves the matching application forward — automatically.",
    intro:
      "The most tedious part of tracking is updating statuses by hand. Connect Gmail — read-only and opt-in, classified entirely on your device — and Splander Jobs advances the right application the moment a recruiter replies, spots interview invites, and surfaces new openings from your inbox.",
    metaTitle: "Automatic job-application status updates from Gmail",
    metaDescription:
      "Connect Gmail read-only and opt-in: recruiter replies advance the matching application automatically, calendar invites are detected as interviews, and new openings surface from your inbox. Classified on-device.",
    heroShot: "A recruiter email advancing an application's status",
    features: [
      {
        title: "Status that moves on its own",
        body: "A recruiter reply, a rejection, an interview request — Splander Jobs reads the signal and advances the matching application without you editing anything. The classifier runs on your device; no email content ever leaves your browser.",
        shot: "Auto-advanced status with email match",
      },
      {
        title: "Interviews caught from calendar invites",
        body: "A booked meeting is the strongest interview signal there is. Calendar invites are detected and moved to the interview stage automatically, so your funnel reflects reality.",
        shot: "Calendar invite → Interview stage",
      },
      {
        title: "New openings, surfaced",
        body: "Job-alert and recruiter-outreach emails become a separate \"New positions\" feed — opportunities you haven't applied to yet — kept apart from your active funnel so it stays clean.",
        shot: "New positions feed",
      },
      {
        title: "Read-only and reversible",
        body: "The Gmail connection is opt-in, asks only for read access, and can be disconnected anytime from Settings. You stay in control of exactly what's read and when.",
        shot: "Gmail settings — connect / disconnect",
      },
    ],
    faqs: [
      {
        q: "Does Splander Jobs read all my email?",
        a: "It requests read-only access and classifies messages on your device to match them to jobs you're tracking. No email content is sent to any server, and you can disconnect at any time.",
      },
      {
        q: "Will it change anything in my Gmail?",
        a: "The public Chrome Web Store build is read-only — it never modifies your mailbox. It only reads to update your tracker locally.",
      },
    ],
  },
  {
    slug: "network",
    step: 4,
    eyebrow: "Network & Reach out",
    nav: "Network",
    title: "Every recruiter, organized — and reached",
    subtitle:
      "A lightweight CRM for the people behind the jobs, with outreach drafts and one-click autofill for application forms.",
    intro:
      "Jobs come from people. Splander Jobs keeps a tidy contact list of every recruiter you've encountered, helps you draft outreach in your own voice across three channels, and autofills the same details into application forms so you stop retyping them.",
    metaTitle: "Recruiter CRM, outreach drafts & one-click ATS autofill",
    metaDescription:
      "Keep a lightweight CRM of every recruiter, draft outreach across LinkedIn, email and WhatsApp, and autofill your details into Greenhouse, Lever, Workday and more. Free templates; AI drafting on Premium.",
    heroShot: "Recruiter contact with outreach drafts",
    features: [
      {
        title: "A CRM for recruiters",
        body: "Contacts are derived automatically from the jobs you apply to, and you can capture a headhunter straight from their LinkedIn profile with a \"Track recruiter\" button. Each contact rolls up the roles and conversations tied to them.",
        shot: "Contacts list + recruiter detail",
      },
      {
        title: "Outreach in your voice",
        body: "Draft messages across LinkedIn, email and WhatsApp from your own editable templates. Mark a message sent to log it, then keep a daily outreach target — a second goal ring, with a streak and a running reply-and-conversion rate — so you reach out as consistently as you apply.",
        shot: "3-channel outreach composer + daily target ring",
      },
      {
        title: "Apply faster with one-click autofill",
        body: "Fill your name, email, phone and profile links into LinkedIn Easy Apply and supported ATS forms — Greenhouse, Lever, Workable, Comeet, Workday and more, even when the form sits in a cross-origin iframe — instead of retyping them. Opt-in, and it never submits for you.",
        shot: "Autofill on an ATS application form",
      },
    ],
    faqs: [
      {
        q: "Which application forms does autofill support?",
        a: "LinkedIn Easy Apply and a range of common ATS platforms including Greenhouse, Lever, Workable, Comeet and Workday. It fills the fields you've saved and never submits on your behalf.",
      },
      {
        q: "Is outreach drafting free?",
        a: "Editable templates and send tracking are free. AI-drafted outreach that adapts to each recruiter is a Premium feature.",
      },
    ],
  },
  {
    slug: "land",
    step: 5,
    eyebrow: "Stay on pace & land it",
    nav: "Land",
    title: "Keep momentum until the offer lands",
    subtitle:
      "A daily target, a streak, and a clear funnel so you always know where your search is winning — and where it's leaking.",
    intro:
      "A long search lives or dies on consistency. Splander Jobs gives you a daily CV-send target, a streak to protect, and a five-stage funnel that shows exactly where applications convert and where they stall — so you can keep momentum to the offer.",
    metaTitle: "Daily goals, streaks & a job-search funnel",
    metaDescription:
      "Set a daily CV-send target, keep a streak, and watch a five-stage funnel from Sent CV to Offer show where your search converts and where it stalls. Free dashboard, no signup.",
    heroShot: "Dashboard ring, streak and funnel chart",
    features: [
      {
        title: "A daily target and a streak",
        body: "Set how many applications you want to send each day. A progress ring tracks today, and a streak counter rewards every day you keep going — momentum you can see.",
        shot: "Daily-target ring + streak",
      },
      {
        title: "A funnel that tells the truth",
        body: "A five-stage funnel — Sent CV → HR interview → Manager interview → Offer — shows step-over-step conversion, so you can tell whether the problem is applications, replies, or interviews.",
        shot: "5-stage funnel chart",
      },
      {
        title: "The full picture at a glance",
        body: "The dashboard rolls up your sources, your most-applied titles, rejections and dormant roles, and how well your applications align with your stated preferences.",
        shot: "Dashboard overview",
      },
    ],
    faqs: [
      {
        q: "Can I set my own daily goal?",
        a: "Yes — the daily CV-send target is configurable from 1 to 100, defaulting to 10. The dashboard ring and streak track against whatever you choose.",
      },
      {
        q: "Is the dashboard free?",
        a: "Yes. The dashboard, funnel, streak and goals are all free, and work entirely on your device.",
      },
    ],
  },
];

export function getJourney(slug: string): JourneyContent | undefined {
  return JOURNEYS.find((j) => j.slug === slug);
}
