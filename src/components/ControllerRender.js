import React from "react";
import { OrbitControls } from "@react-three/drei";
import { NController } from "./NController";
import Text from "./text";
import { useGeneral } from "../context";

const ControllerRender = () => {
  const { location } = useGeneral();
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 1, 3]} intensity={1} />
      <pointLight position={[1, 0, 0]} intensity={0.1} />
      <pointLight position={[1, 1, 3]} intensity={1} />
      {location === "center" && (
        <OrbitControls
          minAzimuthAngle={60 * (Math.PI / 180)}
          maxAzimuthAngle={120 * (Math.PI / 180)}
          minPolarAngle={60 * (Math.PI / 180)}
          maxPolarAngle={120 * (Math.PI / 180)}
          enableDamping={true}
          enableZoom={false}
          enablePan={true}
        />
      )}
      {/* <gridHelper /> */}
      <NController />
      <Text />
    </>
  );
};

export default ControllerRender;
