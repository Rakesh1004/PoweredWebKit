import React, { useState
// , useEffect
 } from "react";
import "./Details.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import Fab from "@material-ui/core/Fab";

const Details = () => {
  const [name, setName] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [blood, setBlood] = useState("");
  const [email, setEmail] = useState("");

  const [displayName, setDisplayName] = useState(true);
  const [displayEmail, setDisplayEmail] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(false);
  const [displayBlood, setDisplayBlood] = useState(false);

  const uid = localStorage.getItem("user_id");
  const phno = localStorage.getItem("identifier");

  const useStyles = makeStyles({
    textField: {
      color: "white",
      width: "80%",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit")
    console.log(uid)
    console.log(phno)
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/postsawo/`, {
        name,
        email,
        address: {
          addressLine1: line1,
          addressLine2: line2,
          city,
          state,
        },
        bloodgroup: blood,
        uid,
        phno,
      })

      .then((res) => {
        console.log(res);
        window.location = "/selection";
      })
      .catch((err) => {
        console.log(err);
      });


  };

  const classes = useStyles();

  return (
    <div className="details">
      <div className="user-details-form">
        <div className="user-details-form-inner">
          <form>
            {displayName ? (
              <div className="detail-field">
                <TextField
                  style={{ color: "white" }}
                  className={classes.textField}
                  label="Name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></TextField>
                <div className="nav-icons">
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowForwardIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayName(false);
                          setDisplayEmail(true);
                        }}
                      />
                    </Fab>
                  </span>
                </div>
              </div>
            ) : null}
            {displayEmail ? (
              <div className="detail-field">
                <TextField
                  className={classes.textField}
                  label="Email-Address"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></TextField>
                <div className="nav-icons">
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowBackIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayName(true);
                          setDisplayEmail(false);
                        }}
                      />
                    </Fab>
                  </span>
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowForwardIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayEmail(false);
                          setDisplayLocation(true);
                        }}
                      />
                    </Fab>
                  </span>
                </div>
              </div>
            ) : null}

            {displayLocation ? (
              <div className="detail-field">
                <TextField
                  className={classes.textField}
                  label="Address Line 1"
                  required
                  value={line1}
                  onChange={(e) => {
                    setLine1(e.target.value);
                  }}
                ></TextField>
                <TextField
                  className={classes.textField}
                  label="Address Line 2"
                  required
                  value={line2}
                  onChange={(e) => {
                    setLine2(e.target.value);
                  }}
                ></TextField>
                <TextField
                  className={classes.textField}
                  required
                  label="City"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                ></TextField>

                <TextField
                  className={classes.textField}
                  required
                  label="State"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                ></TextField>

                <div className="nav-icons">
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowBackIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayEmail(true);
                          setDisplayLocation(false);
                        }}
                      />
                    </Fab>
                  </span>

                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowForwardIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayLocation(false);
                          setDisplayBlood(true);
                        }}
                      />
                    </Fab>
                  </span>
                </div>
              </div>
            ) : null}
            {displayBlood ? (
              <div className="detail-field">
                <TextField
                  className={classes.textField}
                  label="Blood-Type"
                  required
                  value={blood}
                  onChange={(e) => {
                    setBlood(e.target.value);
                  }}
                ></TextField>
                <div className="nav-icons">
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowBackIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayLocation(true);
                          setDisplayBlood(false);
                        }}
                      />
                    </Fab>
                  </span>

                  <button
                    onClick={handleSubmit}
                    className="submit-button-details"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
