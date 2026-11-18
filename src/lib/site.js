// Public origin of the production site. Social previews (og:image, og:url)
// need absolute URLs, so they are built from it. Update it if the domain changes.
export const SITE_URL = "https://jandres-vr.vercel.app";

// Who the site is about. Search engines read these through the JSON-LD in the
// root route and the hidden profile summary (see lib/seo.js). The unaccented
// spelling is listed so both forms of the name point at the same person.
export const PERSON = {
  name: "Jaime Andrés Vélez Rojas",
  alternateNames: ["Jaime Andres Velez Rojas", "Jaime Vélez Rojas", "Jaime Velez Rojas"],
  jobTitle: "Full-stack Developer",
  locality: "Medellín",
  country: "CO",
};

// Professional profiles: linked from the profile node and listed as sameAs in
// the JSON-LD.
export const LINKEDIN_URL = "https://www.linkedin.com/in/jandresvr/";
export const GITHUB_URL = "https://github.com/jandresvr92";

// 1200×630 share card shown by LinkedIn, WhatsApp, X, Slack…
export const OG_IMAGE = { path: "/images/og/og-image.jpg", width: 1200, height: 630 };
