import React, { useState, useEffect, useContext } from "react";
import "./style.scss";

import { DisplayContext } from "../../context/DisplayContext";
import HeaderPanelItems from "../HeaderPanelItems/HeaderPanelItems";

const sections = ["Home", "Skills", "Projects", "Contact"];
const HeaderPanel = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const { displayMode, setDisplayMode } = useContext(DisplayContext);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler, { passive: true });
    };
  }, []);

  const scrollHandler = () => {
    setScrollPosition(window.pageYOffset);
  };

  const setDisplayModeHandler = () => {
    if (displayMode === "light") {
      setDisplayMode("dark");
    } else {
      setDisplayMode("light");
    }
  };

  return (
    <div
      className={
        scrollPosition > 55 ? "header-panel transparent" : "header-panel"
      }
      onMouseEnter={() => setScrollPosition(0)}
      onMouseLeave={() => setScrollPosition(window.pageYOffset)}
    >
      <div className="row  align-items-center panel">
        <div className="col-md-7 profile">
          <p>Ayo</p>
        </div>
        {sections.map((section, index) => (
          <HeaderPanelItems itemName={section} sectionIndex={index} />
        ))}
        <div
          className="col-md-1 switch-tag"
          onClick={() => setDisplayModeHandler()}
        >
          <p>
            <i
              style={{ fontSize: "14px" }}
              class={displayMode === "dark" ? "far fa-moon" : "far fa-sun"}
              aria-hidden="true"
            ></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderPanel;
