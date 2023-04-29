import "./styles/App.css";
import "./styles/Camera.css";
import { useGeneral } from "./context";

import CTitle from "./components/Main/CTitle";
import ContactForm from "./components/Contact/ContactForm";
import Projects from "./components/Project/Projects";
import AboutMe from "./components/About/AboutMe";
import Skills from "./components/Skill/Skills";
import LoadScreen from "./components/LoadScreen";
import CanvasRender from "./components/Canvas";
import { useEffect, useState } from "react";
function App() {
  const { location, setLocation } = useGeneral();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return (
    <>
    <LoadScreen />
      {!loading && <>{location === "center" && <CTitle />}</>}
      <ContactForm />
      <AboutMe />
      <Projects />
      <Skills />
      <CanvasRender />
    </>
  );
}

export default App;
