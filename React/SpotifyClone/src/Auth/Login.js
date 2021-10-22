import React from "react";
import "../styles/login.css";
import { loginURL } from "./stats.js";

const Login = () => {
  //When logged in
  if (localStorage.getItem("token") !== null) {
    return (
      <div className="login">
        <div className="smooth-cover">
        <a
          href="/app"
          onClick={() => {
            localStorage.setItem("active", "homesection");
          }}
        >
          {" "}
          HOME
        </a>
      </div>
      </div>
    );
  }
  //When not logged in
  return (
    <div className="login">
      <a href={loginURL}> Login</a>
      <a
        href="/app"
        onClick={() => {
          localStorage.setItem("active", "homesection");
        }}
      >
        Continue without login
      </a>
    </div>
  );
};

export default Login;
