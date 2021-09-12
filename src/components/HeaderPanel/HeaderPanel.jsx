import React, { useState, useEffect } from "react";
import "./style.scss";

const HeaderPanel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler, { passive: true });
    };
  }, []);

  const scrollHandler = () => {
    setScrollPosition(window.pageYOffset);
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
        <div className="col-md-1 section-tag">
          <p>Home</p>
        </div>
        <div className="col-md-1 section-tag">
          <p>Skills</p>
        </div>
        <div className="col-md-1 section-tag">
          <p>Projects</p>
        </div>
        <div className="col-md-1 section-tag">
          <p>Contact</p>
        </div>
        <div className="col-md-1 switch-tag">
          <p>switch</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderPanel;
