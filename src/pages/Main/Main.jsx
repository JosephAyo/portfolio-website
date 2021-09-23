import React, { useContext } from "react";
import "./style.scss";
import splash1 from "../../images/26934.png";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { DisplayContext } from "../../context/DisplayContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Main = () => {
  const { displayMode } = useContext(DisplayContext);

  return (
    <div className={displayMode === "dark" ? "App-main dark-mode" : "App-main"}>
      <div className="main ">
        <HeaderPanel />
        <div className="row home-section">
          <div className="col-md-7 hello">
            <p>
              Bienvenue, <br />
              Je suis Ayo.
            </p>
          </div>
          <div className="col-md-5 splash-container">
            <img alt="s" src={splash1} />
          </div>
        </div>
        <div className="row home-section">
          <div className="col-md-7 hello">
            <p>
              Bonjour, <br />
              Mes skills sont ici.
            </p>
          </div>
          <div className="col-md-5 splash-container">
            <img alt="s" src={splash1} />
          </div>
        </div>
        <div className="projects-section home-section">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="row home-section">
          <div className="col-md-7 hello">
            <p>
              Bonjour, <br />
              Je suis Ayo.
            </p>
          </div>
          <div className="col-md-5 splash-container">
            <img alt="s" src={splash1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
