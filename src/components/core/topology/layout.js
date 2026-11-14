// Geometry of the desktop diorama map. Node coordinates live in the tilted
// plane's own space (a square of PLANE_SIZE), so every pedestal stands on the
// grid: +X runs screen up-right, +Y screen down-right, -X down-left, -Y up-left.
export const PLANE_SIZE = 1200;
export const TILT_X = 60;
export const TILT_Z = -45;

// The stage's perspective, shared so a billboard pushed forward in depth can
// exactly cancel the size the projection adds.
export const STAGE_PERSPECTIVE = 2400;

export const PLANE_TRANSFORM = `rotateX(${TILT_X}deg) rotateZ(${TILT_Z}deg)`;
// Undoes the plane tilt, so an element faces the viewer while staying anchored
// to its position on the floor.
export const BILLBOARD_TRANSFORM = `rotateZ(${-TILT_Z}deg) rotateX(${-TILT_X}deg)`;

// `asset` swaps the pedestal for a supplied isometric room rendered as a
// billboard; nodes without one keep their CSS diorama.
export const CORE = {
  id: "profile",
  index: "01",
  accent: "cyan",
  x: 600,
  y: 600,
  size: 300,
  asset: "/assets/dioramas/sobre-mi-v3.png",
  // cut out of its black background and framed like the ring nodes, keeping the
  // centre room a step larger, with its front corner on the last row so the
  // cables converge on its base
  framing: { sourceAspect: 687 / 1024, contentFraction: 0.831, contentWidth: 290, baseDrop: 72 },
};

// `dossier` points at the localized copy in dictionaries (clusters.<dossier>).
export const NODES = [
  {
    id: "projects",
    index: "02",
    accent: "purple",
    dossier: "deployment",
    x: 200,
    y: 600,
    size: 260,
    asset: "/assets/dioramas/proyectos-v6.png",
    // cut out of its black background and framed like the other rooms, with its
    // front corner on the last row so the purple cable meets its base
    framing: { sourceAspect: 687 / 1024, contentFraction: 0.831, contentWidth: 250, baseDrop: 61 },
  },
  {
    id: "stack",
    index: "03",
    accent: "orange",
    dossier: "processing",
    x: 600,
    y: 200,
    size: 260,
    asset: "/assets/dioramas/stack.png",
    // cut out of its black background and framed like the other rooms, with its
    // front corner on the last row so the orange cable meets its base
    framing: { sourceAspect: 687 / 1024, contentFraction: 0.831, contentWidth: 250, baseDrop: 61 },
  },
  {
    id: "experience",
    index: "04",
    accent: "lime",
    dossier: "operations",
    x: 600,
    y: 1000,
    size: 260,
    asset: "/assets/dioramas/experiencia-v2.png",
    // cut out of its black background and framed like the other rooms, with its
    // front corner on the last row so the lime cable meets its base
    framing: { sourceAspect: 687 / 1024, contentFraction: 0.831, contentWidth: 250, baseDrop: 61 },
  },
  {
    id: "hobbies",
    index: "05",
    accent: "amber",
    dossier: "hobbies",
    x: 1000,
    y: 600,
    size: 260,
    asset: "/assets/dioramas/hobbies.png",
    // cut out of its black background and framed like the projects room, with
    // its front corner on the last row so the amber cable meets its base
    framing: { sourceAspect: 687 / 1024, contentFraction: 0.827, contentWidth: 250, baseDrop: 61 },
  },
];

// Shared element: a node's diorama morphs between the grid and the detail view.
export const layoutIdFor = (id) => `nodo-${id}`;
export const LAYOUT_SPRING = { type: "spring", stiffness: 210, damping: 30, mass: 0.9 };

export const ALL_NODES = [CORE, ...NODES];

export const nodeById = (id) => ALL_NODES.find((node) => node.id === id);
