// Screenshot shown in each project card's visual area, keyed by project id.
// The files live in public/images/projects/ as 16:9 images (1280×720 .webp
// works well). The same image serves every locale, so it lives here rather
// than in the localized projectsData.js. A project without an entry keeps its
// Lucide glyph (see ProjectGlyph).
export const PROJECT_IMAGES = {
  skilltree: "/images/projects/skilltree.webp",
  platformer: "/images/projects/platformer.webp",
  "devops-diorama": "/images/projects/devops-diorama.webp",
  "bella-sasha-3d": "/images/projects/bella-sasha-3d.webp",
};
