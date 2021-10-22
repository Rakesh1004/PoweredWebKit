import React, { useState, useEffect } from "react";
// import{app_id,secret} from './stats'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "../styles/loading.css";
const Loading = () => {
  const [code, setCode] = useState();
  const tokenURL = `${process.env.REACT_APP_TOKEN_URL}${code}`;
  useEffect(() => {
    getCode();
    if (code !== undefined) {
      fetchToken();
    }
  });

  //Handling the code and getting access token after redirecting

  const handleRedirect = () => {
    window.location.href = "/app";
    localStorage.setItem("active", "homesection");
  };
  const getCode = () => {
    let link = window.location.search;
    const urlParams = new URLSearchParams(link);
    const key = urlParams.get("code");
    setCode(key);
    // if(code!==undefined){
    //     var clean_uri =link.substring(0, link.indexOf("?"));
    //     window.history.replaceState({}, document.title, clean_uri);
    // }
  };
  const fetchToken = async () => {
    const results = await fetch(tokenURL);
    const data = await results.json();
    if (data !== undefined) {
      localStorage.setItem("token", data.access_token);
    }
    handleRedirect();
  };

  //Default loader until the page loads

  return (
    <div className="loading">
      <Loader
        type="ThreeDots"
        color="white"
        height={100}
        width={100}
        timeout={20000} //3 secs
        className="loader"
      />
    </div>
  );
};
export default Loading;
