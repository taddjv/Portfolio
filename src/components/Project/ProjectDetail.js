import React from "react";

const ProjectDetail = ({ title, gif, desc, tech, live, git }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="projectDetail"
    >
      <div className="pd-pic">
        <img src={gif} className="pd-image" />
      </div>

      <div className="pd-content">
        <div className="pd-c-title">{title}</div>
        <div className="pd-c-about">
          <div className="pd-c-a-text">{desc}</div>
        </div>
        <div className="pd-c-tech">
          <div className="pd-c-t-name">
            {tech.map((ele) => (
              <button className="p-t-button">{ele}</button>
            ))}
          </div>
        </div>
        <div className="pd-c-buttons">
          <a
            href={git}
            target="_blank"
            rel="noreferrer"
            className="pd-c-button"
          >
            Github
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="pd-c-button"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
