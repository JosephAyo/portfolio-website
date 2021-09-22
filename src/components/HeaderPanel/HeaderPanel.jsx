import React, { useState, useEffect, useContext } from "react";
import "./style.scss";

import { DisplayContext } from "../../context/DisplayContext";
import HeaderPanelItems from "../HeaderPanelItems/HeaderPanelItems";

const sections = ["Home", "Skills", "Projects", "Contact"];
const HeaderPanel = (props) => {
  const [opaquePanel, setOpaquePanel] = useState(true);
  const [clickedToScroll, setClickedToScroll] = useState(false);
  const { displayMode, setDisplayMode } = useContext(DisplayContext);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler, { passive: true });
    };
  });

  const scrollHandler = () => {
    if (window.pageYOffset > 40 && !clickedToScroll) {
      setOpaquePanel(false);
    } else if (window.pageYOffset > 40) {
      setOpaquePanel(false);
    } else {
      setOpaquePanel(true);
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
    setClickedToScroll(true);
    setPanelOpaqueTemp(sectionIndex);
  };

  const setPanelOpaqueTemp = (sectionIndex) => {
    setOpaquePanel(true);
    if (sectionIndex !== 0)
      setTimeout(() => {
        setOpaquePanel(false);
      }, 1000);
    setClickedToScroll(false);
  };

  return (
    <div
      className={opaquePanel ? "header-panel" : "header-panel transparent"}
      onMouseEnter={() => setOpaquePanel(true)}
      onMouseLeave={() => setOpaquePanel(false)}
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
          />
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
      {/* <div className="panel">
        {sections.map((section, index) => (
          <HeaderPanelItems itemName={section} sectionIndex={index} />
        ))}
        <div
          className="switch-tag"
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
      </div> */}
    </div>
  );
};

export default HeaderPanel;
