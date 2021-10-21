import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import "./RequestEdit.css";

const RequestEdit = ({ setEdit, id }) => {
  const handleEdit = async (e) => {
    e.preventDefault();

    await axios
      .put(`${process.env.REACT_APP_BASE_URL}/bloodrequest/edit/${id}`, {
        name,
        address: {
          addressLine1: line1,
          addressLine2: line2,
          city,
          state,
        },
        bloodgroup: blood,
        uid,
        reason,
        phno: contact,
      })
      .then((res) => {
        console.log(res);
        setEdit(false);
        //  window.location = `/user/bloodrequest/${id}`;
      })

      .catch((err) => console.log(err));
  };
  // eslint-disable-next-line no-unused-vars
  const [request, setRequest] = useState([]);
  const uid = localStorage.getItem("user_id");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const [blood, setBlood] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState("");
  const [reason, setReason] = useState("");

  // const{id}=useParams()

  useEffect(() => {
    const getUserRequest = async () => {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/bloodrequest/${id}`)
        .then((res) => {
          console.log(res);
          setTimeout(() => setLoading(false), 2000);
          setRequest(res.data);
          setName(res.data.name);
          setContact(res.data.phno);
          setBlood(res.data.bloodgroup);
          setLine1(res.data.address.addressLine1);
          setLine2(res.data.address.addressLine2);
          setCity(res.data.address.city);
          setState(res.data.address.state);
          setReason(res.data.reason);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUserRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !loading ? (
    <div>
      <div className="Receiver">
        <div className="receiverLeft">
          <img src="assets/images/blood_donation.png" alt="" />
        </div>
        <div className="receiverRight">
          <div className="FormWrapper">
            <h1>Blood Request Form</h1>
            <div className="Form">
              <form autoComplete="off">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
                <label>
                  Contact Number:
                  <input
                    type="contact"
                    name="contact"
                    placeholder="Contact"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </label>
                <label>
                  Blood-Group:
                  <input
                    type="text"
                    name="group"
                    placeholder="Blood-Group"
                    value={blood}
                    onChange={(e) => {
                      setBlood(e.target.value);
                    }}
                  />
                </label>
                <label>
                  Address:
                  <input
                    value={line1}
                    type="text"
                    name="address_line1"
                    placeholder="Address Line 1"
                    onChange={(e) => {
                      setLine1(e.target.value);
                    }}
                  />
                  <input
                    value={line2}
                    type="text"
                    name="address_line2"
                    placeholder="Address Line 2"
                    onChange={(e) => {
                      setLine2(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                </label>
                <label>
                  Reason:
                  <textarea
                    placeholder="Describe your situation in short .Remember a good description can instantly get you a donor"
                    value={reason}
                    onChange={(e) => {
                      setReason(e.target.value);
                    }}
                  ></textarea>
                </label>
                {/* <label>
                  Pincode:
                  <input type="text" name="pin" />
                </label> */}
              </form>
              <button onClick={handleEdit} className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default RequestEdit;
