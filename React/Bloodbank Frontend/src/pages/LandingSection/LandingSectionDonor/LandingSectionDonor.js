import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LandingSectionDonor.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const LandingSectionDonor = () => {

 const[requests,setRequests]=useState([])
 const uid=localStorage.getItem("user_id")
 useEffect(()=>{
   const findDonorRequests = async () => {
     await axios
       .get(`${process.env.REACT_APP_BASE_URL}/donor/${uid}`)

       .then((res) => {
         console.log(res);

         setRequests(res.data);
       })

       .catch((err) => {
         console.log(err);
       });
   };

   findDonorRequests();

   // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])



  return (
    <>
      <Navbar />
      <div className="Donor">
        <div className="donorLeft">
          <img src="assets/animated/blood_donation_campagin.gif" alt="" />
        </div>
        <div className="donorRight">
          <div className="wrapper">
            <div className="subtitle_1">Welcome to the Bludy community</div>
            <div className="heading">Come Let's make a difference</div>
            <div className="subtitle_2">
              You can save someone's life today.Check for the available requests
              in your Donor dashboard.
            </div>
            {/* <button className="butn">Schedule your donation</button> */}
          </div>
        </div>
      </div>

      <div className="donor-requests" id="donor-requests">
        <div className="heading">DONATE NOW</div>

        <div className="request-grid">
          {requests.map((request) => {
            // eslint-disable-next-line no-unused-vars
            const { reason, bloodgroup, status, address, _id, name, phno } =
              request;
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
                      (window.location = `/bloodrequest/${_id}`)
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
    </>
  );
};

export default LandingSectionDonor;
