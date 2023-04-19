import React from "react";

function Background() {
  return (
    <mesh position-x={-5} position-y={-1}>
      <color attach="background" args={["#323232"]} />
      <sphereGeometry />
      <meshStandardMaterial />
      {/* <Stars /> */}
    </mesh>
  );
}

export default Background;
