
// One node's isometric artwork on its own, used by the mobile column (scaled)
// and the node sheet (filling its frame).
export default function NodeDiagram({ node, scale = 0.42, fill = false }) {
  if (fill) {
    return (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <img
          src={node.asset}
          alt=""
          draggable={false}
          className="h-full w-full select-none object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="shrink-0" style={{ transform: `scale(${scale})`, perspective: "1400px" }}>
        <img src={node.asset} alt="" draggable={false} className="w-[440px] select-none object-contain" />
      </div>
    </div>
  );
}
