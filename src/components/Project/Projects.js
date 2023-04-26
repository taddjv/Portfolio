import React from "react";
import { useGeneral } from "../../context";
import { useSpring, animated } from "react-spring";
import PTitle from "./PTitle";
import { projects } from "../../data";
import "../../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { location, setLocation } = useGeneral();
  const thing = useSpring({
    left: location === "right" ? "0" : "-100vw",
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
      precision: 0.0001,
    },
  });
  return (
    <>
      <animated.div style={thing} className="container2">
        <PTitle />
        <div className="contact-form">
          <div className="projects">
            {projects.map((ele, i) => {
              return (
                <ProjectCard
                  title={ele.title}
                  url={ele.url}
                  gif={ele.gif}
                  desc={ele.desc}
                  tech={ele.tech}
                  git={ele.git}
                  live={ele.live}
                />
              );
            })}
          </div>
        </div>
        <button className="cf-button" onClick={() => setLocation("center")}>
          Go Back
        </button>
      </animated.div>
    </>
  );
};

export default Projects;
