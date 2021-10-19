import React, { useState, useEffect } from "react";
import "../styles/sidebar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../Auth/Login";
// import Bottombar from "../Functionality/Bottombar"
import { url } from "../Auth/stats";
import Typography from "@material-ui/core/Typography";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import LibraryMusicSharpIcon from "@material-ui/icons/LibraryMusicSharp";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Box } from "@material-ui/core";
import MeetingRoomSharpIcon from "@material-ui/icons/MeetingRoomSharp";
import { makeStyles } from "@material-ui/core/styles";


const useStyles=makeStyles((theme)=>({

sideHover:{"&:hover":{backgroundColor:'#2a2a2a'}}


}))


const Sidebar = () => {

  const classes=useStyles()

  const [myplaylists, setMyplaylists] = useState();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(localStorage.getItem("active"));
  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);

  const getMyPlaylists = async () => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("token");
    const results = await fetch(
      `${url}user/${user_id}/playlists&limit=5&access_token=${access_token}`
    );
    const data = await results.json();
    console.log(data.data);
    if (data !== undefined) {
      setMyplaylists(data);
      console.log(myplaylists);
    }
    if (myplaylists !== undefined) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    if (
      localStorage.getItem("user_id") != undefined &&
      localStorage.getItem("user_id") != null
    ) {
      getMyPlaylists();
    }

    // eslint-disable-next-line
  }, []);

  const removeItems = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("song");
    localStorage.removeItem("duration");
    localStorage.removeItem('currentTime');
    localStorage.removeItem('percentage')
  };

  // const forHomeSection=()=>{
  //     localStorage.setItem('homesection',1);
  //     localStorage.setItem('searchsection',0);
  //     localStorage.setItem('librarysection',0);
  //     localStorage.setItem('likedsection',0);
  // }

  if (localStorage.getItem("token") !== null) {
    return (
      <div className="sidebar">
        <Router>
          {" "}
          <Route exact path="/">
            <Login />
          </Route>
        </Router>
        <ul>
          <a
            href="/app"
            onClick={() => {
              setActive("homesection");
            }}
          >
            {" "}
            <Box
              maxHeight
              style={{ cursor: "pointer", marginBottom: "10px" }}
              display="flex"
              className={classes.sideHover}
            >
              {" "}
              <HomeIcon
                style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
              />
              <Typography variant="subtitle" style={{ marginTop: "2%" }}>
                Home
              </Typography>
            </Box>
          </a>
          <a
            href="/app"
            onClick={() => {
              setActive("searchsection");
            }}
          >
            {" "}
            <Box
              style={{ cursor: "pointer", marginBottom: "10px" }}
              display="flex"
              className={classes.sideHover}
            >
              {" "}
              <SearchSharpIcon
                style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
              />
              <Typography variant="subtitle" style={{ marginTop: "2%" }}>
                Search
              </Typography>
            </Box>
          </a>
          <a
            href="/app"
            onClick={() => {
              setActive("librarysection");
            }}
          >
            {" "}
            <Box
              maxHeight
              style={{ cursor: "pointer", marginBottom: "10px" }}
              display="flex"
              className={classes.sideHover}
            >
              {" "}
              <LibraryMusicSharpIcon
                style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
              />
              <Typography variant="subtitle" style={{ marginTop: "2%" }}>
                Your Library
              </Typography>
            </Box>
          </a>
          <a
            href="/"
            onClick={() => {
              removeItems();
            }}
          >
            <Box
              style={{ cursor: "maxHeightpointer", marginBottom: "10px" }}
              display="flex"
              className={classes.sideHover}
            >
              {" "}
              <MeetingRoomSharpIcon
                style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
              />
              <Typography variant="subtitle" style={{ marginTop: "2%" }}>
                Logout
              </Typography>
            </Box>
          </a>
          <h4 style={{ margin: "10px" }}>PLAYLISTS</h4>
          <a
            href="/app"
            onClick={() => {
              setActive("createplaylistsection");
            }}
          >
            {" "}
            <Box
              style={{ cursor: "pointer", marginBottom: "10px" }}
              display="flex"
              className={classes.sideHover}
            >
              <AddSharpIcon
                style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
              />
              <Typography
                variant="subtitle"
                style={{ marginTop: "2%" }}
                color="primary"
              >
                {" "}
                Create Playlist
              </Typography>
            </Box>
          </a>

          {!loading ? (
            <div>
              <h4>MY-PLAYLISTS</h4>

              {myplaylists.data.map((playlist) => {
                if (/* eslint eqeqeq: 0 */ playlist.title != "Loved Tracks") {
                  return (
                    <div className="sidebar-playlists">
                      <div
                        className="my-playlist-songs-sidebar"
                        style={{ color: "white" }}
                      >
                        <h4
                          onClick={() => {
                            window.location.href = `/user/playlist/${playlist.id}`;
                          }}
                        >
                          #{playlist.title}
                        </h4>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ) : null}

          <a
            href="/app"
            onClick={() => {
              setActive("likedsection");
            }}
          >
            <Box style={{ cursor: "pointer" }} display="flex" className={classes.sideHover}>
              <FavoriteIcon
                style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
                
              />
              <Typography variant="subtitle" style={{ marginTop: "2%" }}>
                Liked Songs
              </Typography>
            </Box>
          </a>
        </ul>
      </div>
    );
  }
  return (
    <div className="sidebar">
      <ul>
        <a
          href="/app"
          onClick={() => {
            setActive("homesection");
          }}
        >
          <Box style={{ cursor: "pointer" }} display="flex">
            {" "}
            <HomeIcon
              style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
            />
            <Typography variant="subtitle" style={{ marginTop: "2%" }}>
              Home
            </Typography>
          </Box>
        </a>
        <a
          href="/app"
          onClick={() => {
            setActive("searchsection");
          }}
        >
          <Box style={{ cursor: "pointer" }} display="flex">
            {" "}
            <SearchSharpIcon
              style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
            />
            <Typography variant="subtitle" style={{ marginTop: "2%" }}>
              Search
            </Typography>
          </Box>
        </a>
        <a
          href="/app"
          onClick={() => {
            setActive("errorsection");
          }}
        >
          <Box style={{ cursor: "pointer" }} display="flex">
            {" "}
            <LibraryMusicSharpIcon
              style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
            />
            <Typography
              variant="subtitle"
              color="primary"
              style={{ marginTop: "2%" }}
            >
              Your Library
            </Typography>
          </Box>
        </a>
        <a href="/" onClick={() => {
              removeItems();
            }}>
          <Box style={{ cursor: "pointer" }} display="flex">
            {" "}
            <LockOpenIcon
              style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
            />
            <Typography variant="subtitle" style={{ marginTop: "2%" }}>
              Login
            </Typography>
          </Box>
        </a>
        <h4 style={{ margin: "10px" }}>PLAYLISTS</h4>
        <a
          href="/app"
          onClick={() => {
            setActive("errorsection");
          }}
        >
          {" "}
          <Box style={{ cursor: "pointer" }} display="flex">
            {" "}
            <AddSharpIcon
              style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
            />
            <Typography variant="subtitle" style={{ marginTop: "2%" }}>
              Create Playlist
            </Typography>
          </Box>
        </a>
        <a
          href="/app"
          onClick={() => {
            setActive("errorsection");
          }}
        >
          <Box style={{ cursor: "pointer" }} display="flex">
            <FavoriteIcon
              style={{ color: "white", marginTop: "2%", marginLeft: "10%" }}
            />
            <Typography variant="subtitle" style={{ marginTop: "2%" }}>
              Liked Songs
            </Typography>
          </Box>
        </a>
      </ul>
    </div>
  );
};
export default Sidebar;
