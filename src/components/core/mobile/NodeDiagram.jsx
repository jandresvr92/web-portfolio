import { Image } from "@/components/ui/image";
import DioramaTile from "../topology/DioramaTile";

// One node's diagram on its own, used by the mobile column and the node sheet.
// Nodes with supplied artwork show that room; the rest keep their CSS diorama.
export default function NodeDiagram({ node, scale = 0.5, fill = false }) {
  if (fill) {
    return (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        {node.asset ? (
          <Image
            src={node.asset}
            alt=""
            draggable={false}
            className="h-full w-full select-none object-contain"
          />
        ) : (
          <DioramaTile node={{ id: node.nodeId, accent: node.accent, size: node.size }} />
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="shrink-0" style={{ transform: `scale(${scale})`, perspective: "1400px" }}>
        {node.asset ? (
          <Image
            src={node.asset}
            alt=""
            draggable={false}
            className="w-[440px] select-none object-contain"
          />
        ) : (
          <DioramaTile node={{ id: node.nodeId, accent: node.accent, size: node.size }} />
        )}
      </div>
    </div>
  );
}