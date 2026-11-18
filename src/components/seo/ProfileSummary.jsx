import { useI18n } from "@/lib/i18n/I18nContext";
import { fill } from "@/lib/i18n/format";
import { CV_PATH } from "@/components/core/cvAsset";
import { experienceFor, YEARS_OF_EXPERIENCE } from "@/components/core/experience/experienceData";
import { projectsFor } from "@/components/core/projects/projectsData";
import { stackFor } from "@/components/core/stack/stackData";
import { GITHUB_URL, LINKEDIN_URL, PERSON } from "@/lib/site";

// The whole profile as plain, semantic text: a heading, the bio, the jobs, the
// projects and the stack. The map only shows this content when a room is
// opened, so without it search engines and screen readers would find little
// more than the room labels. It is visually hidden (sr-only), never different:
// it is built from the same data and copy the rooms render, in the active
// language.
export default function ProfileSummary() {
  const { lang, dict } = useI18n();
  const bio = dict.panels.hero.dossier.bio.map((part) => fill(part.text, { years: YEARS_OF_EXPERIENCE })).join("");
  const experience = experienceFor(lang);
  const projects = projectsFor(lang);
  const stack = stackFor(lang);

  return (
    <section className="sr-only" aria-labelledby="profile-summary-title">
      <h1 id="profile-summary-title">
        {PERSON.name} — {dict.meta.role}
      </h1>
      <p>{bio}</p>

      <h2>{experience.title}</h2>
      <ul>
        {experience.jobs.map((job) => (
          <li key={job.id}>
            <h3>
              {job.role} — {job.company}
            </h3>
            <p>{job.date}</p>
            <ul>
              {job.achievements.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2>{projects.title}</h2>
      <ul>
        {projects.active.map((project) => (
          <li key={project.id}>
            <h3>
              <a href={project.link}>{project.title}</a>
            </h3>
            <p>{project.desc}</p>
            <p>{project.tech.join(", ")}</p>
          </li>
        ))}
      </ul>

      <h2>{stack.title}</h2>
      <ul>
        {Object.values(stack.content)
          .flat()
          .map((blade) => (
            <li key={blade.id}>
              {blade.name}: {blade.desc}
            </li>
          ))}
      </ul>

      <ul>
        <li>
          <a href={LINKEDIN_URL}>LinkedIn</a>
        </li>
        <li>
          <a href={GITHUB_URL}>GitHub</a>
        </li>
        <li>
          <a href={CV_PATH}>CV (PDF)</a>
        </li>
      </ul>
    </section>
  );
}
