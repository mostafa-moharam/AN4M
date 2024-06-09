import React from "react";
import { IoClose } from "react-icons/io5";
import "./css/overlay.css";

const Overlay = (props) => {
  return (
    <div className="overlayContent">
      {props.button}
      <div
        id="myNav"
        className="overlay"
        style={{ height: `${props.overlayToggler ? "100%" : "0%"}` }}
      >
        <button className="closeButton" onClick={props.handleOverlay}>
          <IoClose />
        </button>
        <div className="overlay-content">{props.children}</div>
      </div>
    </div>
  );
};

export default Overlay;
