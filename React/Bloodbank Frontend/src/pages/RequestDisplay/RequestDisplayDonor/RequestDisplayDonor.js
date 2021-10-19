import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import { Map, GoogleApiWrapper } from "google-maps-react";

import Navbar from '../../../components/Navbar/Navbar'
import './RequestDisplayDonor.css'

const RequestDisplayDonor = () => {
  // eslint-disable-next-line no-unused-vars
  const [request, setRequest] = useState([]);

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [blood, setBlood] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [reason, setReason] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState("");

  const { id } = useParams();
  console.log(id);

  const acceptRequest = async () => {
    // console.log("Accept");

    await axios
      .put(`${process.env.REACT_APP_BASE_URL}/bloodrequest/edit/${id}`, {
        status: true,
      })
      .then((res) => {
        console.log(res);

        window.location = "/donor";
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getRequestInfo = async () => {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/bloodrequest/${id}`)
        .then((res) => {
          setRequest(res.data);
          setName(res.data.name);
          setContact(res.data.phno);
          setBlood(res.data.blood);
          setLine1(res.data.address.addressLine1);
          setLine2(res.data.address.addressLine2);
          setCity(res.data.address.city);
          setState(res.data.address.state);
          setReason(res.data.reason);
          setStatus(res.data.status);
          setTimeout(() => setLoading(false), 2000);

          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getRequestInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="single-request-display-Donor">
        <div className="display-left">{/* <img src=""></img> */}</div>
        <div className="display-right">
          {!loading ? (
            <div className="display-request-details">
              <div className="text">
                <h1 className="header-text">Name:</h1>
                <h1 style={{ color: "black" }}>{name}</h1>
              </div>
              <div className="text">
                <h1 className="header-text">Contact-Number:</h1>
                <h1 style={{ color: "black" }}>{contact}</h1>
              </div>
              <div className="text">
                <h1 className="header-text">Blood-Group:</h1>
                <h1 style={{ color: "black" }}>{blood}</h1>
              </div>
              <div className="text">
                <h1 className="header-text">Address-Line-1:</h1>
                <h1 style={{ color: "black" }}>{line1}</h1>
              </div>
              <div className="text">
                <h1 className="header-text">Address-Line-2 :</h1>
                <h1 style={{ color: "black" }}>{line2}</h1>
              </div>

              <div className="text">
                <h1 className="header-text">City:</h1>

                <h1 style={{ color: "black" }}>{city}</h1>
              </div>
              <div className="text">
                <h1 className="header-text">State:</h1>
                <h1 style={{ color: "black" }}>{state}</h1>
              </div>
              <div className="text">
                <h1 className="header-text">Reason:</h1>
                <h1 style={{ color: "black" }}>{reason}</h1>
              </div>

              <button onClick={acceptRequest} className="btn">
                ACCEPT THIS REQUEST
              </button>

              {/* <h2>Status: {status?"ACCEPTED":"PENDING"}</h2> */}
            </div>
          ) : null}

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default RequestDisplayDonor;

