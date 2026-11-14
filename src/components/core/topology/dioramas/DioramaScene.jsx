import StudioDiorama from "./StudioDiorama";
import LabexDiorama from "./LabexDiorama";
import ServerDiorama from "./ServerDiorama";
import CampusDiorama from "./CampusDiorama";
import ParkDiorama from "./ParkDiorama";

const SCENES = {
  profile: StudioDiorama,
  projects: LabexDiorama,
  stack: ServerDiorama,
  experience: CampusDiorama,
  hobbies: ParkDiorama,
};

// The interior that stands on a pedestal, picked by the node it belongs to.
export default function DioramaScene({ id, lit }) {
  const Scene = SCENES[id];
  if (!Scene) return null;
  return <Scene lit={lit} />;
}