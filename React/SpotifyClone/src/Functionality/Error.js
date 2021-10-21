import React from "react";

import Bottombar from "../Functionality/Bottombar";

import { Typography } from "@material-ui/core";

const Error = () => {
  return (
    <div className="error">
      <div className="mainplayer">
        <div style={{ color: "white" }}>
          <Typography variant="h6">
            Sorry you need to{" "}
            <span>
              {" "}
              <a style={{ color: "red" }} href="/">
                Login
              </a>
            </span>
            to access this feature
          </Typography>
        </div>
      </div>

      {/*<div className="empty-player">
    </div>*/}
      <Bottombar />
    </div>
  );
};

export default Error;
