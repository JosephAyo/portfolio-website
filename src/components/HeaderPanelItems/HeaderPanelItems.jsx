import React from "react";

const HeaderPanelItems = ({itemName, sectionIndex}) => {
  return (
    <div
      className="col-md-1 section-tag"
      onClick={() =>
        window.scrollTo({
          top: window.innerHeight * sectionIndex,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <p>{itemName}</p>
    </div>
  );
};

export default HeaderPanelItems;
