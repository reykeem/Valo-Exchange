import React from "react";
import "../styles/item.css";

function ItemPreview(props) {
  const { popupHandler, details } = props;
  return (
    <div className="item-preview" onClick={() => popupHandler(details)}>
      <div className="item-container">
        <img src={props.url} />
        <p id="weaponNameOnMarketplace">{props.name}</p>
      </div>
    </div>
  );
}

export default ItemPreview;
