import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls, Html } from "@react-three/drei";
import "./App.css";
import "./Camera.css";
import { useGeneral } from "./context";
import ControllerRender from "./components/ControllerRender";
import RocketRender from "./components/RocketRender";
import { Ufo } from "./components/Ufo";
import CTitle from "./components/CTitle";
import Background from "./components/BackgroundStars";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
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
function App() {
  const { location } = useGeneral();
  // const [camera, setCamera] = useState(null);  useThree(({camera}) => {

  return (
    <>
      <ContactForm />
      <AboutMe />
      <Projects />
      {location === "center" && <CTitle />}

      <Canvas
        width={window.innerWidth}
        height={window.innerHeight}
        camera={{ fov: 75, position: [0.5, 0, 0] }}
        style={{ zIndex: 1 }}
      >
        <Background />
        <Float
          speed={location === "center" && 2}
          floatIntensity={location === "center" && 0.25}
        >
          <ControllerRender />
        </Float>
        <Float speed={5} floatIntensity={1}>
          <Ufo />
        </Float>
        {location === "up" ? (
          <OrbitControls autoRotate={true} autoRotateSpeed={10} />
        ) : null}

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} intensity={2.4} />
          <Noise premultiply blendFunction={BlendFunction.ADD} />
          <Vignette offset={0.37} darkness={0.7} opacity={1} />
          <Scanline density={1.1} opacity={0.025} />
        </EffectComposer>
        <Html fullscreen position-z={0} position-x={0}>
          <CameraFrame />
        </Html>
      </Canvas>
    </>
  );
}

export default App;
