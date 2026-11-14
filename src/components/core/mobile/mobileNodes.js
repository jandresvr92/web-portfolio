import { CORE } from "../topology/layout";

// The mobile column: every node of the map, stacked in ascending order so the
// profile (01) opens the feed, followed by 02 through 05.
export const MOBILE_NODES = [
  {
    key: "profile",
    nodeId: "profile",
    index: "01",
    accent: "cyan",
    size: 300,
    asset: CORE.asset,
    profile: true,
  },
  {
    key: "deployment",
    nodeId: "projects",
    index: "02",
    accent: "purple",
    size: 260,
    asset: "/images/dioramas/proyectos-v6.png",
  },
  {
    key: "processing",
    nodeId: "stack",
    index: "03",
    accent: "orange",
    size: 260,
    asset: "/images/dioramas/stack.png",
  },
  {
    key: "operations",
    nodeId: "experience",
    index: "04",
    accent: "lime",
    size: 260,
    asset: "/images/dioramas/experiencia-v2.png",
  },
  {
    key: "hobbies",
    nodeId: "hobbies",
    index: "05",
    accent: "amber",
    size: 260,
    asset: "/images/dioramas/hobbies.png",
  },
];