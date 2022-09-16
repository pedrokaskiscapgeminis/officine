import { Suspense, memo } from "react";
import { Canvas } from "react-three-fiber";
//import { EffectOutline } from "./Hover";
import Lights from "./Lights";
import Office from "./Office";
import Controls from "./Controls";

function Scene() {
  return (
    <Canvas>
      <Lights />
      <Controls />
      <Suspense fallback={null}>
        <Office />
      </Suspense>
    </Canvas>
  );
}

export default memo(Scene);
