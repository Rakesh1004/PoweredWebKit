 
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./LandingSectionReceiver.css";
import Navbar from "../../../components/Navbar/Navbar";


import Footer from "../../../components/Footer/Footer";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import Fade from "react-reveal/Fade";
const uid = localStorage.getItem("user_id");


const LandingSectionReceiver = () => {
  // eslint-disable-next-line no-unused-vars
  const [laoding, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getUserRequests = async () => {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/userrequests/${uid}`)

        .then((res) => {
          console.log(res.data);
          setRequests(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUserRequests();
  }, []);
  return (
    <div>
      <Fade top>
        <Navbar />
      </Fade>
      <div className="hero-section">
        <Fade left>
          <div className="hero-section-text">
            <div className="hero-section-textwrapper">
              <div className="subtitle_1">Welcome to the Bludy community</div>
              <div className="heading">Worry not we will find you a donor </div>
              <div className="subtitle_2">
                When you have joined the Bludy community your request can be seen by all the people in your current city 
              </div>
              <div>
                <span>
                  <InvertColorsIcon
                    style={{ color: "white", width: "85px", height: "160px" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="hero-section-image">
            {/* <img
                style={{ width: "100%", height: "100%" }}
                src={img}
                alt=""
              ></img> */}
          </div>
        </Fade>
      </div>

      <div className="user-requests" id="user-requests">
        <div className="heading">KEEP A TRACK OF YOUR REQUESTS</div>

        <div className="request-grid">
          {requests.map((request) => {
            // eslint-disable-next-line no-unused-vars
            const { reason, bloodgroup, status, address, _id,name,phno } = request;
            return (
              <div
                className="request-box"
                style={
                  !status
                    ? { backgroundColor: "#880808" }
                    : { backgroundColor: "green" }
                }
              >
                <div className="left">
                  <div className="request-box-field">{name}</div>
                  <div className="request-box-field">{bloodgroup}</div>

                  <div className="request-box-field">{address.city}</div>
                  <div className="request-box-field">{phno}</div>
                  <div className="request-box-reason">
                    <p>{reason}</p>
                  </div>
                </div>

                <div className="right">
                  <img src="assets/images/drop.png" alt="" className="drop" />

                  <button
                    className="know-more-btn"
                    onClick={() =>
                      (window.location = `/user/bloodrequest/${_id}`)
                    }
                  >
                    KNOW MORE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingSectionReceiver;