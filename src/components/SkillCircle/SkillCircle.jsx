import React, { useContext } from "react";
import "./style.scss";
import { DisplayContext } from "../../context/DisplayContext";
import { ReactComponent as ReactBlack } from "../../images/TypescriptBlack.svg";
import { ReactComponent as ReactWhite } from "../../images/ReactNativeWhite.svg";

const SkillCircle = () => {
  const { displayMode } = useContext(DisplayContext);

  return (
    <div className="skill-circle">
      <div className="svg-container">
        {displayMode === "dark" ? <ReactWhite /> : <ReactBlack />}
      </div>
    </div>
  );
};

export default SkillCircle;
