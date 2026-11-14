import { createContext, useCallback, useContext, useMemo, useState } from "react";

const TopologyContext = createContext(null);

// Shared hover/selection of the desktop map, so the director hub and the
// dioramas highlight each other in both directions.
export function TopologyProvider({ children }) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeNode, setActiveNode] = useState(null);

  const openNode = useCallback((id) => {
    setHoveredNode(null);
    setActiveNode(id);
  }, []);

  const closeNode = useCallback(() => setActiveNode(null), []);

  const value = useMemo(
    () => ({ hoveredNode, setHoveredNode, activeNode, openNode, closeNode }),
    [hoveredNode, activeNode, openNode, closeNode]
  );

  return <TopologyContext.Provider value={value}>{children}</TopologyContext.Provider>;
}

export function useTopology() {
  const context = useContext(TopologyContext);
  if (!context) throw new Error("useTopology must be used inside TopologyProvider");
  return context;
}
