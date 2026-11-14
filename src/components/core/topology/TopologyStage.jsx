import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nContext";
import { useTopology } from "@/lib/TopologyContext";
import {
  CORE,
  NODES,
  PLANE_SIZE,
  PLANE_TRANSFORM,
  STAGE_PERSPECTIVE,
  layoutIdFor,
  nodeById,
} from "./layout";
import NetworkLines from "./NetworkLines";
import DioramaNode from "./DioramaNode";
import NodeDetailView from "./NodeDetailView";

// The isometric network: a tilted floor carrying glowing routes and five
// semantic nodes. Opening any node hands over to a master-detail view through a
// shared element transition of that node's diorama.
export default function TopologyStage() {
  const { t } = useI18n();
  const { hoveredNode, setHoveredNode, activeNode, openNode, closeNode } = useTopology();

  const labelFor = (node) => `${node.index} // ${t(`nodes.${node.id}`)}`;
  const detailNode = activeNode ? nodeById(activeNode) : null;
  const dimmedFor = (id) => Boolean(hoveredNode) && hoveredNode !== id;

  return (
    <div className="absolute inset-0">
      <AnimatePresence initial={false}>
        {!detailNode && (
          <motion.div
            key="map"
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.22 } }}
          >
            <div
              className="shrink-0"
              style={{ perspective: `${STAGE_PERSPECTIVE}px` }}
            >
              <div
                className="relative [transform-style:preserve-3d]"
                style={{
                  width: PLANE_SIZE,
                  height: PLANE_SIZE,
                  transform: PLANE_TRANSFORM,
                }}
              >
                <NetworkLines />

                <DioramaNode
                  node={CORE}
                  label={labelFor(CORE)}
                  active={false}
                  hovered={hoveredNode === CORE.id}
                  dimmed={dimmedFor(CORE.id)}
                  layoutId={layoutIdFor(CORE.id)}
                  onSelect={openNode}
                  onHover={setHoveredNode}
                  onLeave={() => setHoveredNode(null)}
                />

                {NODES.map((node) => (
                  <DioramaNode
                    key={node.id}
                    node={node}
                    label={labelFor(node)}
                    active={false}
                    hovered={hoveredNode === node.id}
                    dimmed={dimmedFor(node.id)}
                    layoutId={layoutIdFor(node.id)}
                    onSelect={openNode}
                    onHover={setHoveredNode}
                    onLeave={() => setHoveredNode(null)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {detailNode && (
          <NodeDetailView key={detailNode.id} node={detailNode} onClose={closeNode} />
        )}
      </AnimatePresence>
    </div>
  );
}