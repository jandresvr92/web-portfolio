import { STACK } from "@/components/core/stack/stackData";
import { AVATAR_PATH } from "@/components/core/profileAsset";
import { GITHUB_URL, LINKEDIN_URL, PERSON, SITE_URL } from "./site";

// Technologies named on the stack's blades: "Angular & TypeScript" and
// "Git, GitHub & Vercel" become separate entries.
export const KNOWS_ABOUT = [
  ...new Set(
    Object.values(STACK)
      .flat()
      .flatMap((blade) => blade.name.split(/\s*(?:,|&)\s*/))
      .filter(Boolean)
  ),
];

// schema.org Person for search engines (https://schema.org/Person). Rendered
// as <script type="application/ld+json"> by the root route's head().
export function personJsonLd({ description }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.name,
    alternateName: PERSON.alternateNames,
    jobTitle: PERSON.jobTitle,
    description,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${AVATAR_PATH}`,
    sameAs: [LINKEDIN_URL, GITHUB_URL],
    address: { "@type": "PostalAddress", addressLocality: PERSON.locality, addressCountry: PERSON.country },
    knowsAbout: KNOWS_ABOUT,
  };
}
