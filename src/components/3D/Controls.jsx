import React, { useRef, memo, useEffect, useCallback } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  useProgress,
  Sphere
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useGlobal } from "../../globals/useGlobal";
import { useSpring, a } from "@react-spring/three";

function Controls() {
  const myCamera = useRef();
  const orbitControl = useRef();

  // Save three.js variables to be global
  const { gl, scene, camera } = useThree();
  const initThree = useGlobal((state) => state.initThree);
  useEffect(() => initThree({ gl, scene, camera, orbitControl }), [
    initThree,
    gl,
    scene,
    camera,
    orbitControl
  ]);

  // Save three.js variables to be global
  const { active, progress, errors, item, loaded, total } = useProgress();
  const initProgress = useGlobal((state) => state.initProgress);
  useEffect(
    () => initProgress({ active, progress, errors, item, loaded, total }),
    [active, progress, errors, item, loaded, total, initProgress]
  );

  const oEnabled = useGlobal((state) => state.oEnabled);
  const key = useGlobal((state) => state.pageCurKey);
  const { targetTo, cameraTo, fovTo } = useGlobal(
    useCallback((state) => state.getViewPositions(key), [key])
  );
  // const getViewPositions = useGlobal(
  //   useCallback((state) => state.getViewPositions, [key])
  // );
  // const { targetTo, cameraTo, fovTo } = useCallback(getViewPositions(key), [
  //   key
  // ]);
  //console.log({ targetTo, cameraTo, fovTo });
  const setEnabledTo = useGlobal((state) => state.setEnabledTo);
  const cameraMotion = { mass: 1, tension: 280, friction: 60 };

  const { sPos } = useSpring({
    sPos: cameraTo,
    config: cameraMotion,
    onStart: () => setEnabledTo(false),
    onRest: () => setEnabledTo(true)
  });
  const { sTarget } = useSpring({
    sTarget: targetTo,
    config: cameraMotion
  });
  const { sFOV } = useSpring({
    sFOV: fovTo,
    config: cameraMotion
  });

  const initCameraNav = useGlobal((state) => state.initCameraNav);
  useEffect(() => initCameraNav(sTarget, sPos, sFOV), []);

  const AOrbit = a(OrbitControls);
  const APerspectiveCamera = a(PerspectiveCamera);
  const ASphere = a(Sphere);

  useEffect(() => console.log(oEnabled), [oEnabled]);

  useFrame(() => orbitControl.current.update());
  return (
    <>
      <APerspectiveCamera makeDefault ref={myCamera} position={sPos} />
      <AOrbit ref={orbitControl} camera={myCamera.current} target={sTarget} />
      {/* <ASphere position={sTarget} args={[0.01, 10, 10]}>
        <meshBasicMaterial
          attach="material"
          color="hotpink"
          transparent
          opacity={0.5}
        />
      </ASphere> */}
    </>
  );
}
export default memo(Controls);
//e
