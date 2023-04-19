import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls, Html } from "@react-three/drei";
import "./App.css";
import "./Camera.css";
import { useGeneral } from "./context";
import ControllerRender from "./components/ControllerRender";
import RocketRender from "./components/RocketRender";

import Background from "./components/BackgroundStars";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import CameraFrame from "./components/CameraFrame";
import {
  Bloom,
  EffectComposer,
  Scanline,
  Vignette,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useControls } from "leva";
const num = window.innerWidth;
function App() {
  const { location } = useGeneral();
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    if (location === "center") setCamera({ fov: 75, position: [0.5, 0, 0] });
  }, [location]);
  return (
    <>
      <ContactForm />
      <Projects />

      {/* <Float speed={5} floatIntensity={20}>
          <RocketRender />
        </Float> */}
      {/* {location === "center" && <div className="main-title">Hi, I'm Tadd</div>} */}

      <Canvas
        width={window.innerWidth}
        height={window.innerHeight}
        rotation={[10, 0, 0]}
        camera={{ fov: 75, position: [0.5, 0, 0] }}
        style={{ zIndex: 1 }}
      >
        <Background />
        <Float
          speed={location === "center" && 1}
          floatIntensity={location === "center" && 0.25}
        >
          <ControllerRender />
        </Float>

        {location === "up" && (
          <OrbitControls autoRotate={true} autoRotateSpeed={10} />
        )}
        {/* <color attach="background" args={["#323232"]} /> */}
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} intensity={2.4} />
          <Noise premultiply blendFunction={BlendFunction.ADD} />
          <Vignette offset={0.37} darkness={0.7} opacity={1} />
          <Scanline density={1.1} opacity={0.025} />
        </EffectComposer>
        <Html
          // prepend
          fullscreen
          position-z={0}
          position-x={0}
        >
          <CameraFrame />
        </Html>
      </Canvas>
    </>
  );
}

export default App;
