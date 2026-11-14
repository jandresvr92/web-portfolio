import { AnimatePresence, motion } from "framer-motion";
import { useTopology } from "@/lib/TopologyContext";
import NodeDirectory from "./NodeDirectory";
import StatusMonitor from "./StatusMonitor";

// Screen-space HUD of the desktop map: the node directory at the top-left and
// the status console under it. While a node's dossier is open the directory
// steps aside, so the detail keeps the screen.
export default function InteractiveDirectorHub() {
  const { activeNode } = useTopology();

  return (
    <>
      <AnimatePresence initial={false}>
        {!activeNode && (
          <motion.div
            key="directory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.16 } }}
            className="absolute left-7 top-7 z-30"
          >
            <NodeDirectory />
          </motion.div>
        )}
      </AnimatePresence>

      <StatusMonitor className="absolute bottom-7 left-7 z-30" />
    </>
  );
}