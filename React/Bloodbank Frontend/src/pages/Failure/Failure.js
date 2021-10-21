import React from "react";
import "./Failure.css";

const Failure = () => {
  return (
    <div className="Failure">
      <img src="assets/images/crying.jpg" alt="" />
      <h1>
        Oops!!! Something went wrong
        <br />
        please try again later.
      </h1>
    </div>
  );
};

export default Failure;
