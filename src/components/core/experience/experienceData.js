import { fill, formatRange } from "@/lib/i18n/format";
import { EXPERIENCE_COPY } from "./experienceCopy";

// Jobs, newest first. Dates are "YYYY-MM"; `end: null` means a current job
// (shown as "Present"). Month names are localized when rendered. Roles and
// achievements live in experienceCopy.js under the same id.
// To add a job: put it in date order here, add its role/achievements to every
// language in experienceCopy.js, then run `npm test`.
export const JOBS = [
  { id: "fuse-tech", company: "Fuse Tech", start: "2025-08", end: "2025-11" },
  { id: "yuxi-global", company: "Yuxi Global", start: "2021-12", end: "2023-01" },
  { id: "talos-digital", company: "Talos Digital", start: "2021-06", end: "2021-12" },
  { id: "globant", company: "Globant", start: "2020-12", end: "2021-03" },
  { id: "talenta-365", company: "TALENTA 365", start: "2020-06", end: "2020-12" },
];

// Months between two "YYYY-MM" values, both included (Jun–Dec = 7).
function monthsBetween(start, end) {
  const [y1, m1] = start.split("-").map(Number);
  const now = new Date();
  const [y2, m2] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  return (y2 - y1) * 12 + (m2 - m1) + 1;
}

// Whole years of experience, adding each job's length the way LinkedIn does.
// Shown in the profile ("3+ years") and the experience status line.
export const YEARS_OF_EXPERIENCE = Math.floor(
  JOBS.reduce((months, job) => months + monthsBetween(job.start, job.end), 0) / 12
);

// The experience node as the panel renders it, in one language.
export function experienceFor(lang) {
  const copy = EXPERIENCE_COPY[lang] ?? EXPERIENCE_COPY.en;
  return {
    title: copy.title,
    subtitle: copy.subtitle,
    statusLine: fill(copy.statusLine, { years: YEARS_OF_EXPERIENCE }),
    jobs: JOBS.map((job) => ({
      ...job,
      ...copy.jobs[job.id],
      date: formatRange(job.start, job.end, lang),
    })),
  };
}
