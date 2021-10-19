import React, {
  // eslint-disable-next-line no-unused-vars
  useEffect,
  useState,
} from "react";
import axios from "axios";
import "./ReceiverForm.css";

const ReceiverForm = () => {
  const uid = localStorage.getItem("user_id");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const [blood, setBlood] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/bloodrequest`, {
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
        window.location = "/receiver";
      })

      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="Receiver">
        <div className="receiverLeft">
          <img src="assets/images/blood_donation.png" alt="" />
        </div>
        <div className="receiverRight">
          <div className="FormWrapper">
            <h1>Blood Request Form</h1>
            <div className="Form">
              <form autoComplete="off" >
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
              <button onClick={handleSubmit} className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiverForm;
