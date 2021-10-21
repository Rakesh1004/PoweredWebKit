import React, { useState, useEffect } from "react";

// import Sidebar from './Sidebar.js';
import { url } from "../Auth/stats";

import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
// import {Link} from "react-router-dom"
import "../styles/Playlists/myplaylists.css";
import Bottombar from "../Functionality/Bottombar";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import Box from "@material-ui/core/Box";
// import Button from '@material-ui/core/Button'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
const playlistBoxStyles = {
  height: "28vh",
};

const buttonStyle = {
  width: "7rem",
  height: "12rem",
  margin: "25% 30%",
  shadows: "10px 0 10px 0 black",
};

const MyPlaylists = () => {
  const [myplaylists, setMyplaylists] = useState([]);

  useEffect(() => {
    const getMyPlaylists = async () => {
      const user_id = localStorage.getItem("user_id");
      const access_token = localStorage.getItem("token");
      const results = await fetch(
        `${url}user/${user_id}/playlists&access_token=${access_token}`
      );
      const data = await results.json();
      console.log(data.data);
      if (data !== undefined) {
        setMyplaylists(data.data);
      }
    };
     getMyPlaylists();
     setMyplaylists(myplaylists);
  }, [myplaylists]);

  if (myplaylists !== undefined) {
    return (
      <div className="my-playlists">
        <div className="my-playlists-middle">
          <Box display="flex">
            <Box component="div" className="my-playlists-header-box">
              <span>
                <LibraryMusicIcon
                  style={buttonStyle}
                  className="banner-box-icon"
                />
              </span>
            </Box>

            <Box mt={22} ml={1}>
              <Typography variant="subtitle2" color="primary">
                COLLECTION
              </Typography>
              <Typography variant="h1" letterSpacing={1} color="primary">
                My Playlists
              </Typography>
            </Box>
          </Box>

          <div className="my-playlists-middle-boxes">
            {myplaylists.map((song) => {
              const deleteMyPlaylist = async (ID) => {
                // const user_id=localStorage.getItem('user_id')
                const access_token = localStorage.getItem("token");
                const results = await fetch(
                  `${url}playlist/${ID}&request_method=delete&access_token=${access_token}`
                );
                const data = await results.json();
                console.log(data);
                // window.location.reload();
              };

              const { id } = song;
              if (song.title !== "Loved Tracks") {
                return (
                  <Container
                    style={{ cursor: "pointer" }}
                    className="my-playlist-box-container"
                  >
                    <Box
                      component="div"
                      style={playlistBoxStyles}
                      key={song.id}
                      onClick={() => {
                        window.location.href = `/user/playlist/${id}`;
                      }}
                    >
                      {/* <h1>{song.creator}</h1> */}

                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                          textAlign: "center",
                        }}
                        src={song.picture_medium}
                        alt=""
                      />
                      <Typography
                        variant="h6"
                        color="primary"
                        style={{ fontWeight: "200", textAlign: "center" }}
                      >
                        {song.title}
                      </Typography>
                    </Box>

                    <Box mt={4}></Box>

                    <span
                      style={{
                        cursor: "pointer",
                        color: "white",
                        position: "relative",
                        top: "-7vh",
                      }}
                      onClick={() => {
                        deleteMyPlaylist(`${id}`);
                      }}
                    >
                      <DeleteSharpIcon className="delete-icon" />
                    </span>
                  </Container>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="empty-player"></div>
        <Bottombar />
      </div>
    );
  }
  return <h1>loading..</h1>;
};

export default MyPlaylists;
