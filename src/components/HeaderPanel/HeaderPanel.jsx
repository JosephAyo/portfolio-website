import React, { useState, useEffect, useContext } from "react";
import "./style.scss";

import { DisplayContext } from "../../context/DisplayContext";
import HeaderPanelItems from "../HeaderPanelItems/HeaderPanelItems";

const sections = ["Home", "Skills", "Projects", "Contact"];
const HeaderPanel = (props) => {
  const [showPanel, setShowPanel] = useState(true);
  const { displayMode, setDisplayMode } = useContext(DisplayContext);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler, { passive: true });
    };
  });

  const scrollHandler = () => {
    if (window.pageYOffset > 40) {
      setShowPanel(false);
    } else if (window.pageYOffset === 0) {
      setShowPanel(true);
    }
  };

  const setDisplayModeHandler = () => {
    if (displayMode === "light") {
      setDisplayMode("dark");
    } else {
      setDisplayMode("light");
    }
  };

  const headerItemClickHandler = (sectionIndex) => {
    window.scrollTo({
      top: window.innerHeight * sectionIndex,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-panel">
      <div
        className={showPanel ? "header-panel" : "header-panel transparent"}
        onMouseEnter={() => setShowPanel(true)}
        onMouseLeave={() => setShowPanel(false)}
      >
        <div className="row  align-items-center panel">
          <div className="col-md-7 profile">
            <p>Ayo</p>
          </div>
          {sections.map((section, index) => (
            <HeaderPanelItems
              itemName={section}
              sectionIndex={index}
              onClickItem={() => headerItemClickHandler(index)}
              key={index}
            />
          ))}
          <div
            className="col-md-1 switch-tag"
            onClick={() => setDisplayModeHandler()}
          >
            <p>
              <i
                style={{ fontSize: "14px" }}
                className={
                  displayMode === "dark" ? "far fa-moon" : "far fa-sun"
                }
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </div>
      </div>

      <div
        className={showPanel ? "mobile-panel show" : "mobile-panel"}
        onMouseEnter={() => setShowPanel(true)}
        onMouseLeave={() => setShowPanel(false)}
      >
        <div className="panel">
          {sections.map((section, index) => (
            <HeaderPanelItems
              itemName={section}
              sectionIndex={index}
              onClickItem={() => headerItemClickHandler(index)}
              key={index}
            />
          ))}
          <div
            className="col-md-1 switch-tag"
            onClick={() => setDisplayModeHandler()}
          >
            <p>
              <i
                style={{ fontSize: "14px" }}
                className={
                  displayMode === "dark" ? "far fa-moon" : "far fa-sun"
                }
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </div>
        <div className="panel-control">
          <div onClick={() => setShowPanel(!showPanel)}>
            <p>
              <i
                style={{ fontSize: "14px" }}
                className={showPanel ? "	fa fa-close" : "fas fa-angle-right"}
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPanel;
