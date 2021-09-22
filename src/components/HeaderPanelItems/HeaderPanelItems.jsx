import React from "react";

const HeaderPanelItems = ({ itemName, onClickItem }) => {
  return (
    <div className="col-md-1 section-tag" onClick={() => onClickItem()}>
      <p>{itemName}</p>
    </div>
  );
};

export default HeaderPanelItems;
