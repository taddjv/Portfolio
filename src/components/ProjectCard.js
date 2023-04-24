import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";
function ProjectCard({ title, gif, url, desc, tech, live, git }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && (
        <div onClick={() => setShow(false)} className="pd-background">
          <ProjectDetail
            title={title}
            gif={gif}
            desc={desc}
            tech={tech}
            live={live}
            git={git}
          />
        </div>
      )}

      <div onClick={() => setShow(true)} className="project">
        <div className="p-cover"></div>
        <div className="p-t-title">{title}</div>
        <div className="p-t-details">View Details</div>
        <img className="project-image" src={url} />
      </div>
    </>
  );
}

export default ProjectCard;
