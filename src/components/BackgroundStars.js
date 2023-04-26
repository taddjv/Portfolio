import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stars, Shadow } from "@react-three/drei";
import * as THREE from "three";
import { Depth } from "@react-three/postprocessing";

const Background = () => {
  const backgroundRef = useRef();
  useFrame(() => {
    backgroundRef.current.rotation.y += 0.0001;
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh scale={1} position-y={0.125} ref={backgroundRef}>
        <sphereGeometry />
        <meshMatcapMaterial color={"#444444"} side={THREE.BackSide} />

        <Sparkles count={100} opacity={0.05} speed={0} color={"white"} />
        <Sparkles count={100} opacity={0.05} speed={0} color={"white"} />
        <Sparkles count={100} opacity={0.05} speed={0} color={"white"} />
        <Sparkles count={100} opacity={0.05} speed={0} color={"white"} />
      </mesh>
    </>
  );
};

export default Background;
