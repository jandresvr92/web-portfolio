import { TopologyProvider } from "@/lib/TopologyContext";
import TopologyScene from "./TopologyScene";

export default function CoreCanvas({ revealed }) {
  return (
    <TopologyProvider>
      <TopologyScene revealed={revealed} />
    </TopologyProvider>
  );
}