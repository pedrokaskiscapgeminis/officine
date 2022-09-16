import { Leva, button, useControls } from "leva";
import { useGlobal } from "./useGlobal";

export default function AddLeva() {
  const saveCameraPos = useGlobal((state) => state.saveCameraPos);
  useControls({
    "Copy Camera Pos": button(() => saveCameraPos())
  });

  const showLeva = useGlobal((state) => state.showLeva);
  return <Leva collapsed hidden={!showLeva} />;
}
