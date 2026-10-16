# Splander Jobs Privacy Policy

_Last updated: 2026-10-15_

Splander Jobs is a Chrome extension that helps you track job applications you find
on LinkedIn, Indeed, Glassdoor, AllJobs, JobNet, JobFox and Jobify, and fill in application forms. This page describes exactly what data the extension
handles, where it lives, and what we do (and don't do) with it.

## Summary, in one paragraph

Splander Jobs runs in your browser. Every job you track is saved to
`chrome.storage.local` on your own device, and while you are signed out it
stays there: we never see or transmit your job-search data. Signing in is
optional. When you sign in, cloud sync turns on by default and copies your
tracked jobs, contacts, CVs and settings to your own account in our Supabase
project, so your tracker follows you across devices; you can turn it off in
Settings (section 3). Email content from Gmail never syncs (section 4). The AI
features (section 8) and CV open tracking (section 9) also send data only after
you turn them on. Apart from those, the only personal information that ever
leaves your device is your email address, **and only if** you choose to submit
it to the Premium waitlist on the Premium tab or to be notified about our new
jobs website. The extension also sends an anonymous,
opt-out usage heartbeat (a random id + coarse counts, no personal data) so we
can count active users — see section 5 — and, only when you explicitly submit
the in-app feedback form or tap a rating, your message plus those same coarse,
non-personal details — see section 6. Read on for the details.

## What data we handle

### 1. Job-application data (job sites)

When you use Splander Jobs on a job page on LinkedIn, Indeed, Glassdoor, AllJobs, JobNet, JobFox or Jobify, the extension reads
the page's contents — title, company, location, posting URL, salary, and a
few similar fields — so it can attach a status pill to the listing and let
you save it to your tracker.

- **Where it lives:** `chrome.storage.local`, a sandboxed per-extension area
  of your own browser profile.
- **Where it does NOT live:** Nowhere else, unless you sign in and keep
  cloud sync on (section 3). We never send it to a third party.
- **How long:** Until you uninstall the extension or clear your browser
  profile.
- **How to export or delete:** Settings → Your data → Export JSON backup
  (download a copy). Uninstalling Splander Jobs or clearing extension storage
  deletes everything.

### 2. Premium waitlist email (only if you submit it)

The Premium tab inside the side panel includes a "Coming soon" preview and
an email waitlist form. **If, and only if,** you type in your email and click
"Join the waitlist", Splander Jobs sends that one email address to our Supabase
project (`hcwnozzjsgqibhpebkhx.supabase.co`) so we can notify you when
Premium opens for beta access.

- **What is sent:** Your email address, the Splander Jobs version that submitted
  it, and your browser's User-Agent string. Nothing else.
- **Where it lives:** A `waitlist_signups` row in our Supabase database plus
  an unconfirmed Supabase Auth user record with the same email.
- **What we use it for:** Notifying you when Premium opens for beta and (if
  we promote you to a beta tester) signing you in to Premium.
- **What we do NOT use it for:** Marketing emails unrelated to Splander Jobs,
  selling to third parties, or advertising. Joining the waitlist uploads none
  of your tracking data; only signing in with cloud sync on does (section 3).
- **How to delete:** Email `dev@splander.com` from the address you
  signed up with and we'll remove your waitlist row and any associated
  auth user.

### 3. Splander Jobs account and cloud sync (only if you sign in)

Signing in is optional. You can log in with Google or with an email and
password from the onboarding screen or the Premium tab. When you sign in,
cloud sync is turned on by default so your tracker follows you across devices.
You can turn it off any time in Settings, and your choice is remembered.

- **What syncs while cloud sync is on:** the jobs you track (with their status
  history and notes), your ignore list, job leads you saved from job pages, your
  contacts and outreach log, your CVs (text and the files you uploaded), and
  your settings, including the profile and saved answers autofill uses.
- **What never syncs:** anything from Gmail (section 4) and the API key you
  enter for your own AI provider (section 8). Both stay on your device.
- **Where it lives:** our Supabase project, where every row belongs to your
  account and no other user can read it.
- **Sign-out:** Settings → Sign out clears the session on this device.
- **Account deletion:** Email `dev@splander.com` and we'll delete the auth
  user and all rows associated with it.

### 4. Optional Gmail integration (you grant per-account)

Settings → Gmail lets you connect a Gmail account so Splander Jobs can detect
recruiter replies and auto-advance your application status. This uses
Google's read-only Gmail scope (`gmail.readonly`).

- **Where your email is processed:** entirely in your browser. Emails are read
  and matched to your applications on your device.
- **What stays on your device:** all email content — subjects, senders,
  message text, message ids, the list of emails already read, and job leads
  found in job-alert emails. It is stored in `chrome.storage.local` and is
  never uploaded to Splander's servers, and never sent to an AI model.
- **What can leave your device:** only if you turn on cloud sync, the
  *result* syncs — an application's company, job title and status. No email
  content is part of it.
- **Disconnect:** any time, from Settings → Gmail.
- **Google API Services User Data Policy:** Splander Jobs' use and transfer
  of information received from Google APIs to any other app will adhere to
  the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy),
  including the Limited Use requirements. Gmail data is used only to update
  your own job-application tracker. It is not used for advertising, not sold,
  not used to train AI models, and no person at Splander reads it.

The Chrome Web Store build of Splander Jobs is **read-only** with respect to your
Gmail — it never writes anything to your mailbox. (A separate full build,
which is not distributed on the Chrome Web Store, additionally offers an
optional "status labels" feature that, after a second explicit opt-in, adds
its own status labels to the emails it already classifies and can archive
already-filed mail out of the Inbox; even then it only changes label
membership and never sends, deletes, or edits email content.)

### 5. Anonymous usage analytics (on by default, you can opt out)

To understand how many people use Splander Jobs and which broad features get
used, the extension sends a once-a-day anonymous "heartbeat" to our Supabase
project. Turn it off any time in **Settings → About → "Share anonymous usage
data"**; when off, the extension sends no telemetry at all.

- **What is sent:** A random install identifier (generated on first run — not
  derived from you or your device), the app version, your browser UI language,
  your operating system, your plan tier (free/beta/premium), and three coarse
  flags: whether cloud sync is on, whether Gmail is connected, and a *bucketed*
  range for how many jobs you've saved (e.g. "10–49"). If you are signed in, the
  heartbeat is associated with your account so we can measure sign-up conversion.
- **What is NOT sent:** No email address, no job / company / CV / message
  content, no URLs, no page contents — ever. The server additionally discards
  anything outside the short list above.
- **Where it lives:** A `telemetry_events` row in our Supabase project. It is
  never sold or shared with a third party, and no third-party analytics SDK is
  embedded.

### 6. Feedback you submit (only when you send it)

The **Settings → Feedback & Support** page — and the occasional in-app "was this
helpful?" prompt — let you send a feature idea, a bug report, or a rating. A
feedback message reaches our Supabase project **only when you click Send or tap
a rating**; nothing is sent just for opening the page.

- **What is sent:** Your message text (only what you type), the random install
  identifier from section 5, and the same coarse, non-personal details the
  heartbeat sends — app version, operating system, UI language, and a coarse
  label for the job site you're on (e.g. "linkedin"). A bug report shows you
  exactly these details before you send. If you are signed in, it is associated
  with your account.
- **What is NOT sent:** No job / company / CV / email content, no URLs, no page
  contents, and no diagnostic logs — ever. The server additionally discards
  anything outside the short list above.
- **The one exception** is the "new jobs website" card: if you choose to enter
  your email there to be notified, that email is stored (tagged separately from
  the Premium waitlist). You never have to enter it to use the rest of feedback.
- **Where it lives:** A `feedback` row in our Supabase project. It is never sold
  or shared with a third party.
- **How to delete:** Email `dev@splander.com`.

### 7. Application-form autofill (you turn it on)

When you turn on autofill and open an application form, on LinkedIn Easy Apply
or a supported applicant-tracking system such as Greenhouse, Lever, Workable,
Comeet or Workday, Splander Jobs reads the form's fields so it can fill them.

- **What it fills in:** your own details from Settings → Profile & links, your
  saved answers, and the CV you chose, all stored on your device (and synced
  only as described in section 3).
- **Where that data goes:** only into the form on the employer's page, exactly
  as if you typed it. It reaches the employer only when the form is submitted.
- **Who submits:** by default, you. Splander Jobs fills the form and waits for
  you to review it and press the form's own Submit. If you choose Auto mode in
  Settings, it presses Submit for you, but only when every required question is
  answered. It never invents an answer to a question you haven't answered
  before, and it never ticks a consent box for you.

### 8. AI features (only if you turn them on)

The free CV match runs entirely on your device. The AI features (AI CV match,
resume tailoring, profile score, drafted messages and the Ask Splander chat)
send the CV and job text they need to an AI provider:

- **With your own API key:** your browser sends the request directly to the
  provider you choose (Google Gemini, OpenAI or Anthropic), under that
  provider's terms. The key is stored only on your device and never synced.
- **With Premium:** the request goes through our server to Google Gemini. We
  do not store the CV or job text.
- **Ask Splander (the chat on Home):** a typed question sends the question,
  your last few chat messages and the tracker details needed to answer it
  (such as company, job title, status, dates and the job description) to the
  same provider. Jobs found in
  your email are sent only as an internal id; their details stay on your
  device. The suggested questions are answered on your device, with no AI.
  The conversation is stored only on your device.
- **Never sent:** email content from Gmail.

### 9. CV open tracking (only if you turn it on, signed in)

CV open tracking tells you whether someone opened the CV you sent. When it is
on, the copy of your CV you attach is marked: a Word file gets a tiny image
that loads from our server when the file is opened, and the links in a PDF go
through our server first.

- **What we record on an open or click:** the time, whether it looks automated
  (an applicant-tracking system or link preview), and a shortened one-way hash
  of the viewer's IP address and browser. We never store the IP address
  itself, and the hash can't be used to follow a viewer across links.
- **Who sees it:** only you, on the job it belongs to.
- **Turn off:** Settings → Profile & links → CV open tracking.

## What we do NOT do

- **No third-party analytics SDKs.** Splander Jobs does not embed Google
  Analytics, Mixpanel, Segment, or any similar third-party tracker. The only
  usage data we collect is the first-party anonymous heartbeat described in
  section 5 above, which you can turn off in Settings → About.
- **No advertising.** We do not sell access to your data to advertisers or
  recruiters.
- **No third-party trackers.** We do not embed third-party scripts.
- **No sending on your behalf.** Splander Jobs never sends emails or messages
  for you, and it submits an application form only if you turned on Auto mode
  (section 7). The Chrome Web Store build is a strictly read-only Gmail client.

## Cookies

Splander Jobs does not set cookies on any website. It uses
`chrome.storage.local` (not cookies) for its own state.

## Permissions, and why we ask for them

- `storage` / `unlimitedStorage`: Save your tracked applications locally.
- `sidePanel`: Open the Splander Jobs side panel.
- `alarms`: Run the daily streak refresh and the Gmail poll on a timer.
- `identity`: Used by the Gmail OAuth flow (you opt in) and the Premium
  Google sign-in flow (you opt in).
- Host permissions for the job sites (`linkedin.com`, `indeed.com`,
  `glassdoor.com`, `alljobs.co.il`, `jobnet.co.il`, `jobs.scalefox.ai`,
  `jobify360.co.il`): Display status badges on job listings and save the jobs
  you choose.
- Host permissions for applicant-tracking systems (such as `greenhouse.io`,
  `lever.co`, `workable.com`, `comeet.co`, `myworkdayjobs.com`): Fill in
  application forms when you use autofill (section 7).

We request no host permission for our own server or for Google's APIs: the
waitlist, sign-in, sync and the Gmail integration use ordinary web requests
that need no extra permission.

(The "Export JSON backup" feature in Settings saves a file using your
browser's normal download, so it needs no extra permission. Likewise, opening
our jobs website, the Chrome Web Store review page, or the post-uninstall
survey just opens a normal browser tab and needs no extra permission.)

## Children's privacy

Splander Jobs is intended for job seekers, who are typically adults. We do not
knowingly collect any personal information from children under 13.

## Changes to this policy

We will update this page when the data practices of the extension change.
The "Last updated" date at the top reflects the most recent revision.

## Contact

For privacy questions or data-deletion requests, email the Splander Jobs team at
`dev@splander.com`.
