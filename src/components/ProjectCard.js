import React from "react";
const url =
  "https://images.ctfassets.net/hrltx12pl8hq/3kr5Ng3EogZMpcWCtYMeqT/668eddf01d66cbd5a338127288f2616f/Business_.jpg?fit=fill&w=480&h=270";
// "https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80";
function ProjectCard({ title, gif, img, desc, index }) {
  return (
    <div className="project">
      <div className="p-top">
        <div className="p-t-title">{title}</div>
        <div className="p-t-buttons">
          <button className="p-t-button">Live Site</button>
          <button className="p-t-button">Github</button>
        </div>
        <img className="project-image" src={url} />
      </div>
      <div className="p-t-border">
        <div className="p-t-desc">
          <div className="p-t-d-title">{title}</div>
          <div className="p-t-d-desc">{desc}</div>
          <div className="p-t-d-logos"></div>
        </div>
      </div>

      {/* <div class="box">
        <img
          class="project"
          src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
      </div> */}
    </div>
  );
}

export default ProjectCard;
