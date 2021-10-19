import React, { useState } from "react";
import { url } from "../Auth/stats";
import AlbumOutlinedIcon from "@material-ui/icons/AlbumOutlined";
// import Sidebar from './Sidebar.js';
// import Player from './Player/Player';
import "../styles/Playlists/createplaylist.css";

import Bottombar from "../Functionality/Bottombar";
import CloseIcon from "@material-ui/icons/Close";
import { Typography, Box } from "@material-ui/core";
import QueueIcon from "@material-ui/icons/Queue";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
headerText:{

  [theme.breakpoints.up('lg')]:{fontSize: "6rem",
  fontFamily: "Nunito Sans",
  fontWeight: "900",
  marginLeft: "-5px",
  marginTop: "-20px",
},
 [theme.breakpoints.between('xs','md')]:{fontSize: "3rem",
  fontFamily: "Nunito Sans",
 fontWeight: "900",
 marginBottom: "-40px",
 marginLeft: "20px",}
                 
},

header_1_Text:{
  [theme.breakpoints.up('lg')]:{fontSize: "5rem",
  fontFamily: "Nunito Sans",
  fontWeight: "900",
  marginLeft: "5px",
  marginTop: "-10px",
},

}

}))


const bannerbuttonStyle = {
  width: "9rem",
  height: "10rem",
  margin: "25% 20%",
  color: "white",
  shadows: "10px 0 10px 0 black",
};

const CreatePlaylist = () => {
  const classes=useStyles()
  // const[myplaylists,setMyplaylists]=useState([])
  const [playlist, setPlaylist] = useState("");
  const [backDrop, setbackDrop] = useState("middle-create-playlist");
  //  const [newplaylist,setNewplaylist]=useState()
  // const [loading,setLoading]=useState(true)
  const [popup, setPopup] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    CreateNewPlaylist();
  };

  // const getMyPlaylists=async()=>{
  //   const user_id=localStorage.getItem('user_id')
  //   const access_token=localStorage.getItem('token')
  //   const results=await fetch(`${url}user/${user_id}/playlists&access_token=${access_token}`)
  //   const data=await results.json()
  //   console.log(data.data);
  //   if(data!==undefined){
  //       setMyplaylists(data.data);
  //        setLoading(false);
  //   }
  // }

  // const DeletePlaylist= async(playlistID)=>{
  //     const access_token=localStorage.getItem('token')
  //     const results=await fetch(`${url}playlist/${playlistID}&request_method=delete&access_token=${access_token}`)
  //     const data =await results.json()
  //     console.log(data)
  //     }

  const CreateNewPlaylist = async () => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("token");
    const results = await fetch(
      `${url}user/${user_id}/playlists&title=${playlist}&request_method=post&access_token=${access_token}`
    );
    const data = await results.json();
    console.log(data);
    //  setPlaylistID(data.id);
    //  if(data!==undefined){GetNewPlaylist();}
  };

  const creationCleanup = () => {
    alert(
      "You have successfully created a new playlist.Please check your Library to access the playlist"
    );
    //  window.location.reload();
    //  window.onload=getMyPlaylists();
    //  setPlaylist('');
  };

  const showThePoppup = () => {
    setPopup(!popup);
    setbackDrop("middle-create-playlist-blur");
  };

  const closeThePoppup = () => {
    setPopup(false);
    setbackDrop("middle-create-playlist");
  };

  return (
    <div className="CreatePlaylist">
      <div className={backDrop}>
        <Box display="flex" component="div" style={{ height: "51vh" }}>
          <Box component="div" className="banner-box-create-playlist">
            <span>
              <QueueIcon
                style={bannerbuttonStyle}
                className="liked-banner-box-icon"
              />
            </span>
          </Box>
          <Box mt={22} ml={1}>
            <Typography
              variant="subtitle2"
              color="primary"
              // style={{ marginLeft: "5px" }}
            >
              CREATE PLAYLIST
            </Typography>
            <Typography color="primary" className={classes.headerText}>
              
                New Playlist
           
            </Typography>
          </Box>
          <Box mt={33}>
            <CreateIcon
              onClick={() => {
                showThePoppup();
              }}
              style={{ color: "white", cursor: "pointer" }}
            />
          </Box>
        </Box>

        {popup ? (
          <div className="poppup">
            <span
              onClick={() => {
                closeThePoppup();
              }}
            >
              <CloseIcon className="close-icon" />
            </span>
            <Typography color="primary">
              <h1 className={classes.header_1_Text}
                
              >
                Create Playlist
              </h1>
            </Typography>
            <Box display="flex">
              <div className="create-playlist-form">
                <form onSubmit={handleSubmit} autoComplete="off">
                  <label htmlFor="playlist"></label>
                  <input
                    type="text"
                    name="playlist"
                    id="playlist-bar"
                    value={playlist}
                    onChange={(e) => setPlaylist(e.target.value)}
                    placeholder="Name of Your Playlist"
                  />
                  <button type="submit" onClick={() => creationCleanup()}>
                    Submit
                  </button>
                </form>
              </div>
              <Box
                component="div"
                className="banner-box-create-playlist"
                style={{
                  width: "15vw",
                  height: "25vh",
                  marginLeft: "60%",
                  marginTop: "8%",
                }}
              >
                <span>
                  <AlbumOutlinedIcon
                    style={{
                      width: "9rem",
                      height: "8rem",
                      margin: "15% 20%",
                      color: "white",
                      shadows: "10px 0 10px 0 black",
                    }}
                    className="liked-banner-box-icon"
                  />
                </span>
              </Box>
            </Box>
          </div>
        ) : (
          ""
        )}
        <div playlist-creation-grid>
          {/* <div className="add-new-playlist"></div>*/}

          {/*            
              <button onClick={()=>{DeletePlaylist()}}>Delete</button> */}
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default CreatePlaylist;
