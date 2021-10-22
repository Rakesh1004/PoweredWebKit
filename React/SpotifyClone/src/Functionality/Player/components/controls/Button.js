import React from "react";
import "../../../../styles/controls/button.css";

function Button({ play, isPlaying }) {
  return (
    <div className="btn-container">
      <div onClick={play} className={isPlaying ? "btn-play" : "btn-stop"}></div>
    </div>
  );
}
export default Button;
