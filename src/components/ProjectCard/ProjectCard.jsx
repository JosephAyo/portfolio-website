import React from "react";
import "./style.scss";
import splash1 from "../../images/26934.png";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="card-img">
        <img alt="s" src={splash1} />
      </div>
      <div className="description">
        <div className="view-btn">
          <p>view</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
