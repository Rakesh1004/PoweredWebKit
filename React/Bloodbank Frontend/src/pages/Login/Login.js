import React, {
  useEffect,

  // eslint-disable-next-line no-unused-vars
  useState,
} from "react";
import axios from "axios";
import Sawo from "sawo";

import './Login.css'


const Login = () => {
  useEffect(() => {

    console.log(process.env.REACT_APP_SAWO_KEY);
    var config = {
      // should be same as the id of the container created on 3rd step
      containerID: "login-form-sawo",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "phone_number_sms",
      // Add the API key copied from 2nd step
      apiKey: process.env.REACT_APP_SAWO_KEY,
      // Add a callback here to handle the payload sent by sdk
      onSuccess: async(payload) => {
        console.log(payload);
        localStorage.setItem("user_id", payload.user_id);
        localStorage.setItem("identifier", payload.identifier);

        await axios.get(`${process.env.REACT_APP_BASE_URL}/sawo/${payload.user_id}`)
        .then((res)=>{
          console.log(res);
          console.log(res.data.check);
          /* eslint eqeqeq: 0 */
          if (res.data.check == "true") {
            window.location = "/selection";
            /* eslint eqeqeq: 0 */
          } else if (res.data.check == "false") {
            window.location = "/details";
          }
        })
        .catch((err)=>{
          console.log(err)
        })
        
      
      },
    };

    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
   <div className="login">
    <div className="centre">
      <div className="header-login">Bludy</div>
      <div className="sub-header-login">Your buddy to help you find a blood donor</div>
      <div
        id="login-form-sawo"
        style={{
          // marginTop: "10px",
          // marginLeft: "500px",
          margin: "auto",
          height: "40vh",
          width: "80vh",
          //  backgroundColor:"#861657"
        }}
        className="form"
      ></div>
      {/* <img src="../../public/assets/images/blood4.jpg"></img> */}
    </div>
    </div>
  );
};

export default Login;
