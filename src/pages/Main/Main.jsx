import React, { useContext } from "react";
import "./style.scss";
import splash1 from "../../images/26934.png";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { DisplayContext } from "../../context/DisplayContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ReactComponent as ReactBlack } from "../../images/ReactBlack.svg";
import { ReactComponent as ReactWhite } from "../../images/ReactWhite.svg";
import { ReactComponent as NodeJSBlack } from "../../images/NodeJSBlack.svg";
import { ReactComponent as NodeJSWhite } from "../../images/NodeJSWhite.svg";
import { ReactComponent as ReactNativeBlack } from "../../images/ReactNativeBlack.svg";
import { ReactComponent as ReactNativeWhite } from "../../images/ReactNativeWhite.svg";
import { ReactComponent as TypescriptBlack } from "../../images/TypescriptBlack.svg";
import { ReactComponent as TypescriptWhite } from "../../images/TypescriptWhite.svg";

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
        <div className="projects-section home-section">
          <div className="skill-circle">
            <div className="svg-container">
              {displayMode === "dark" ? <ReactWhite /> : <ReactBlack />}
            </div>
          </div>
          <div className="skill-circle">
            <div className="svg-container">
              {displayMode === "dark" ? <NodeJSWhite /> : <NodeJSBlack />}
            </div>
          </div>
          <div className="skill-circle">
            <div className="svg-container">
              {displayMode === "dark" ? (
                <ReactNativeWhite />
              ) : (
                <ReactNativeBlack />
              )}
            </div>
          </div>
          <div className="skill-circle">
            <div className="svg-container">
              {displayMode === "dark" ? (
                <TypescriptWhite />
              ) : (
                <TypescriptBlack />
              )}
            </div>
          </div>
        </div>
        <div className="projects-section home-section">
          <ProjectCard name='Citi-monitor'/>
          <ProjectCard name='Audiobook app'/>
          <ProjectCard name='Bloom research website'/>
          <ProjectCard name='E-agric'/>
          <ProjectCard name='Theme-organizer'/>
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
