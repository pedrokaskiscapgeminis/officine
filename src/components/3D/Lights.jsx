import { memo } from "react";

function Lights() {
  return (
    <group>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </group>
  );
}

export default memo(Lights);
