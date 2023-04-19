import React, { useEffect, useState, useRef } from "react";
import { useGeneral } from "../context";
import { useSpring, animated } from "react-spring";
import { projectDisplay, projectDisplayOut } from "../helper";
import { projects } from "../data";
import img from "../images/drippypic.png";
import "../Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { location, setLocation } = useGeneral();
  const thing = useSpring({
    left: location === "right" ? "0" : "100vw",
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
      precision: 0.0001,
    },
  });
  return (
    <animated.div style={thing} className="container2">
      <div className="contact-form">
        <div className="cf-title">My projects !</div>
        <div className="projects">
          {projects.map((ele, i) => {
            return (
              <ProjectCard
                title={ele.title}
                url={ele.url}
                desc={ele.desc}
                index={i}
              />
            );
          })}
        </div>

        <button className="cf-button" onClick={() => setLocation("center")}>
          Go Back
        </button>
      </div>
    </animated.div>
  );
};

export default Projects;
