// Content for the five feature pages. Copy was signed off in "Splander Jobs
// site — new copy for sign-off" (2026-10-11) and follows MESSAGING.md's claims
// rules: list every job site or none, no job/salary/date promises, no numbers
// we can't prove, Gmail always "your choice, read-only, read on your device",
// and no flying metaphors. Editing copy here needs no layout changes.

/** A real 1280×800 store screenshot (public/screens). */
export interface Shot {
  src: string;
  alt: string;
}

/** One of the brand kit's product moments (public/brand/mascot). Decorative:
 *  rendered alt="" + aria-hidden, the text beside it carries the meaning. */
export type Moment = "saved-as-applied" | "streak";

export interface JourneyFeature {
  title: string;
  body: string;
  /** A moment illustration — only beside the feature it depicts. */
  moment?: Moment;
  /** Caption under the moment illustration. */
  momentCaption?: string;
  /** Show the seven status-tone pills under this feature. */
  statusLegend?: boolean;
}

export interface Faq {
  q: string;
  a: string;
}

export interface JourneyContent {
  slug: string;
  eyebrow: string;
  nav: string;
  title: string;
  subtitle: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  /** Hero screenshot; without one the hero shows the mascot sticker. */
  heroShot?: Shot;
  features: JourneyFeature[];
  faqs: Faq[];
}

export const SHOTS = {
  badges: {
    src: "/screens/01-badges-and-review.png",
    alt: "Job cards on a job board, each with a status pill, next to the Splander Jobs side panel reviewing the open job.",
  },
  dailyGoal: {
    src: "/screens/02-daily-goal.png",
    alt: "The Splander Jobs home screen: CVs sent today against the daily goal, the streak, and the pipeline.",
  },
  pipeline: {
    src: "/screens/03-pipeline.png",
    alt: "The Applied Jobs list in the side panel, with a status pill on every application.",
  },
  cvFit: {
    src: "/screens/04-cv-fit.png",
    alt: "The CV match for a job: the required skills the CV has and the ones it's missing.",
  },
  autofill: {
    src: "/screens/05-autofill.png",
    alt: "An application form filled in by Splander Jobs from the saved profile and CV, waiting for review.",
  },
} satisfies Record<string, Shot>;

export const JOURNEYS: JourneyContent[] = [
  {
    slug: "track",
    eyebrow: "Track",
    nav: "Track",
    title: "Every application, in one place",
    subtitle:
      "A status pill on every job card, and a side panel that keeps every job you save, from Sent CV to Offer.",
    intro:
      "A job search spreads across tabs, job sites and a spreadsheet you forget to update. Splander Jobs puts a status pill on every job you've touched and keeps your whole search in one side panel, so you stop re-reading the same jobs.",
    metaTitle: "Track job applications on LinkedIn, Indeed, Glassdoor, AllJobs, JobNet, JobFox and Jobify",
    metaDescription:
      "A status pill on every job card and one side panel for every application, from Sent CV to Offer. Works on LinkedIn, Indeed, Glassdoor, AllJobs, JobNet, JobFox and Jobify. Free, no account needed.",
    heroShot: SHOTS.badges,
    features: [
      {
        title: "A status pill on every job card",
        body: "Browse LinkedIn, Indeed, Glassdoor, AllJobs, JobNet, JobFox and Jobify as usual. Each job card shows its status, like Sent CV, Interview, Offer or Rejected, so you see at a glance what you've applied to, saved or ignored.",
        statusLegend: true,
      },
      {
        title: "Everything you need to decide",
        body: "Click any job to open it in the side panel: the role, your notes, and your history with this company.",
      },
      {
        title: "Save in one click",
        body: "Save a job straight from the job page. If a role is reposted, Save again picks it up without starting over.",
        moment: "saved-as-applied",
        momentCaption: "Saved to Applied Jobs · One more step forward.",
      },
      {
        title: "Never lose track",
        body: "Every job keeps its details, notes, salary terms and a full history of status changes.",
      },
    ],
    faqs: [
      {
        q: "Which job sites does Splander Jobs work on?",
        a: "LinkedIn, Indeed, Glassdoor, AllJobs, JobNet, JobFox and Jobify. Every job you save goes into one tracker.",
      },
      {
        q: "Do I need an account?",
        a: "No. Tracking works without an account, and every job is saved in your browser. Signing in is optional and turns on free cloud sync across your devices.",
      },
    ],
  },
  {
    slug: "score",
    eyebrow: "Score",
    nav: "Score",
    title: "See how your CV fits, before you apply",
    subtitle: "A free CV match on every job, up to 10 CVs, and a score for your LinkedIn profile.",
    intro:
      "Applying to the wrong roles costs you time. Splander Jobs compares your CV with each job and shows the required skills you have and the ones you're missing, so you can focus on the jobs that fit.",
    metaTitle: "Free CV match for every job you save",
    metaDescription:
      "See which required skills your CV has and which are missing, keep up to 10 CVs with rules for which goes where, and score your LinkedIn profile. The CV match is free and runs on your device.",
    heroShot: SHOTS.cvFit,
    features: [
      {
        title: "A free CV match",
        body: "Every job you save gets a match against your CV: the required skills you have and the ones you're missing. It's free and runs on your device.",
      },
      {
        title: "The right CV for each job",
        body: "Keep up to 10 CVs and set rules for which CV goes to which kind of role.",
      },
      {
        title: "Score your LinkedIn profile",
        body: "Import your LinkedIn profile and get a profile score, with a list of what to improve next.",
      },
    ],
    faqs: [
      {
        q: "Is the CV match free?",
        a: "Yes. It runs on your device and needs no account. AI CV match and resume tailoring are part of Premium, which is coming soon.",
      },
      {
        q: "Where is my CV stored?",
        a: "On your device. It goes to the cloud only if you sign in and keep cloud sync on.",
      },
    ],
  },
  {
    slug: "automate",
    eyebrow: "Automate",
    nav: "Automate",
    title: "Fill the form once. Let your inbox update your tracker.",
    subtitle: "Autofill for application forms, and optional, read-only Gmail updates that are read on your device.",
    intro:
      "The slowest parts of a job search are typing the same details into every form and checking your inbox for replies. Splander Jobs fills the forms for you. If you choose to connect Gmail, it also moves each application forward when a reply arrives.",
    metaTitle: "Autofill application forms and get status updates from Gmail",
    metaDescription:
      "Autofill your details and CV into application forms such as Greenhouse, Lever, Workable, Comeet and Workday. Connect Gmail if you choose, read-only, and replies update each application. Emails are read on your device.",
    heroShot: SHOTS.autofill,
    features: [
      {
        title: "Fill the form once",
        body: "Autofill puts your name, email, phone, profile links and the CV you chose into application forms on supported job sites and application systems, such as Greenhouse, Lever, Workable, Comeet and Workday.",
      },
      {
        title: "You stay in control",
        body: "By default, autofill fills the form and waits for you to review and submit. It never invents an answer to a question you haven't answered before.",
      },
      {
        title: "Your inbox updates your tracker",
        body: "Connect Gmail if you choose to. It's optional and read-only. Replies from recruiters and application systems move each application to CV received, interview, offer or rejection.",
      },
      {
        title: "Read on your device",
        body: "Emails are read on your device and never uploaded. If you sign in to sync, only the result syncs: an application's company, title and status. You can disconnect Gmail in Settings at any time.",
      },
    ],
    faqs: [
      {
        q: "Does Splander Jobs read all my email?",
        a: "Only if you choose to connect Gmail, and only with read-only access. Emails are read on your device to match them to the jobs you track. The emails never leave your device. If you sync, only each application's company, title and status go with your tracker.",
      },
      {
        q: "Will it change anything in my Gmail?",
        a: "No. The Chrome Web Store version is read-only. It never sends, deletes or changes email.",
      },
      {
        q: "Does autofill submit applications for me?",
        a: "Not by default. It fills the form and waits for you to review it and press Submit.",
      },
    ],
  },
  {
    slug: "network",
    eyebrow: "Network",
    nav: "Network",
    title: "Keep every recruiter in one place",
    subtitle: "Your recruiter contacts, follow-ups from your own templates, and an option to see if your CV was opened.",
    intro:
      "Jobs come through people. Splander Jobs keeps the recruiters you talk to in one place, helps you write follow-ups in your own words, and can tell you when someone opens your CV.",
    metaTitle: "Recruiter contacts, follow-up messages and CV open tracking",
    metaDescription:
      "Keep your recruiter contacts in one place, draft follow-up messages from your own templates, and turn on CV open tracking to see if your CV was opened. Free.",
    features: [
      {
        title: "Recruiter contacts in one place",
        body: "Every recruiter you talk to, with the jobs and messages tied to them.",
      },
      {
        title: "Follow-ups from your templates",
        body: "Draft follow-up messages from your own templates, so you never start from a blank page.",
      },
      {
        title: "See if your CV was opened",
        body: "Turn on CV open tracking and see when the CV you sent was opened. It's off by default and needs you to sign in.",
      },
    ],
    faqs: [
      {
        q: "Does Splander Jobs send messages for me?",
        a: "No. It drafts the message, and you send it yourself.",
      },
      {
        q: "How does CV open tracking work?",
        a: "When it's on, the CV you attach is marked so we can tell you when it's opened. Only you see the result, on the job it belongs to. Turn it off in Settings at any time.",
      },
    ],
  },
  {
    slug: "land",
    eyebrow: "Goals",
    nav: "Goals",
    title: "Keep sending CVs, every day",
    subtitle: "A daily and weekly CV goal, a streak, and a pipeline that shows what's working.",
    intro:
      "A long job search runs on consistency. Splander Jobs gives you a daily and weekly CV goal, a streak to protect, and a pipeline from Sent CV to Offer, so you can see where your search is moving and where it's stuck.",
    metaTitle: "Daily CV goals, streaks and job search insights",
    metaDescription:
      "Set a daily and weekly CV goal, keep your streak, and follow every application from Sent CV to Offer, with insights from the last 3 months. Free, works without an account.",
    heroShot: SHOTS.dailyGoal,
    features: [
      {
        title: "Hit your daily CV goal",
        body: "Set daily and weekly goals for the CVs you send, and keep your streak going.",
        moment: "streak",
      },
      {
        title: "Moments worth marking",
        body: "A short celebration when you save a job, reach your goal, or get an interview or an offer. You can make it subtle or turn it off.",
      },
      {
        title: "See what's working",
        body: "A pipeline from Sent CV to Offer shows where each application stands.",
      },
      {
        title: "Your last 3 months",
        body: "Insights on how your applications have moved over the last 3 months.",
      },
    ],
    faqs: [
      {
        q: "Can I set my own goal?",
        a: "Yes. Choose how many CVs to send each day and each week. Your streak counts against your own goal.",
      },
      {
        q: "Is this free?",
        a: "Yes. Goals, streaks, the pipeline and insights are all free.",
      },
    ],
  },
];

export function getJourney(slug: string): JourneyContent | undefined {
  return JOURNEYS.find((j) => j.slug === slug);
}
