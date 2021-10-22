import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <h1>Visit us at</h1>
        <div className="image">
          <img src="assets/images/fb.png" alt="" />
          <img src="assets/images/instawhite.jpg" alt="" />
          <img src="assets/images/linkden.png" alt="" />
        </div>
        <h4> &copy; Copyright: Full Slack Developers</h4>
      </div>
    </div>
  );
};

export default Footer;
