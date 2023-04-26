import React, { useState, useEffect } from "react";
import { useGeneral } from "../../context";
import { useSpring, animated } from "react-spring";
import STitle from "./STitle";
import { skills } from "../../data";
import "../../styles/Skills.css";

const Skills = () => {
  const { location, setLocation } = useGeneral();
  const [description, setDescription] = useState(null);
  const [name, setName] = useState(null);

  const thing = useSpring({
    left: location === "left" ? "0" : "100vw",
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
      precision: 0.0001,
    },
  });

  useEffect(()=> {
    const div = document.querySelector(".skills-desc")
    if (description) {
      div.style.border = "2px solid rgba(255,255,255,1)"
    } else {
      div.style.border = "2px solid rgba(255,255,255,0)"
    }
  })
  return (
    <animated.div style={thing} className="container4">
      <STitle />
      <div className="skills-desc">
        <div className="s-d-top"> {name}</div>

        <div className="s-d-bottom"> {description}</div>

        {/* hellooooo */}
      </div>
      <div className="skills">
        {skills.map((ele) => (
          <a
            onMouseEnter={() => {
              setDescription(ele.desc);
              setName(ele.name);
            }}
            onMouseLeave={() => {
              setDescription(null);
              setName(null);
            }}
            className="skill"
            href={ele.link}
            target="_blank"
            rel="noreferrer"
          >
            <img className="skill-img" src={ele.logo} />
          </a>
        ))}
      </div>
      <button className="cf-button" onClick={() => setLocation("center")}>
        Go Back
      </button>
    </animated.div>
  );
};

export default Skills;
