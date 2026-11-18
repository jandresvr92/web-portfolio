import { CORE, NODES } from "../topology/layout";

// The mobile column: every node of the map, stacked in ascending order so the
// profile (01) opens the feed, followed by 02 through 05. Index, accent, size
// and artwork come from the desktop layout, so both views stay in step.
export const MOBILE_NODES = [
  { key: "profile", nodeId: CORE.id, index: CORE.index, accent: CORE.accent, size: CORE.size, asset: CORE.asset, profile: true },
  ...NODES.map((node) => ({
    // `key` names the node's copy in dictionaries (clusters.<key>).
    key: node.dossier,
    nodeId: node.id,
    index: node.index,
    accent: node.accent,
    size: node.size,
    asset: node.asset,
  })),
].sort((a, b) => a.index.localeCompare(b.index));
