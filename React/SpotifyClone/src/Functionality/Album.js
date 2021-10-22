import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "./Sidebar.js";

import "../styles/song.css";
import { url } from "../Auth/stats";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../styles/album.css";
import { Grid, Typography, Box } from "@material-ui/core";
// import {Howl} from "howler";

import Bottombar from "../Functionality/Bottombar";

const Album = () => {
  // const likeSong=async(track_id)=>{
  //     const user_id=localStorage.getItem('user_id')
  //     const access_token=localStorage.getItem('token')
  //     const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
  //     const data=await results.json();
  //     console.log(data)
  //     setLiked(!liked)
  //   }
  // const[liked,setLiked]=useState(false)
  const { id } = useParams();
  const [thisAlbum, setThisAlbum] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getThisAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getThisAlbum = async () => {
    const results = await fetch(`${url}album/${id}`);
    const data = await results.json();
    console.log(data.tracks.data);
    /* eslint eqeqeq: 0 */
    if (data != undefined) {
      setThisAlbum(data.tracks);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="middle">
        <Sidebar />

        <div className="playlist-area">
          <div className="album-banner"></div>

          <Grid container style={{ height: "6vh", alignItems: "center" }}>
            <Grid
              container
              item
              xs={1}
              style={{ borderBottom: "0.5px white" }}
            ></Grid>

            {/* <div></div> */}
            <Grid container item xs={5}>
              <Typography style={{ fontSize: "0.8rem" }} color="secondary">
                TITLE
              </Typography>
            </Grid>
            <Grid container item xs={3}>
              <Typography style={{ fontSize: "0.8rem" }} color="secondary">
                ALBUM
              </Typography>
            </Grid>
            <Grid container item xs={2}>
              <Typography
                style={{ fontSize: "0.8rem" }}
                color="secondary"
              ></Typography>
            </Grid>
          </Grid>

          {!loading ? (
            thisAlbum.data.map((song) => {
              return (
                <Box key={song.id}>
                  <Grid
                    container
                    item
                    lg={12}
                    xs={12}
                    style={{ alignItems: "center" }}
                    onClick={() => {
                      window.location.href = `/this/song/${id}`;
                    }}
                    className="albumsong"
                  >
                    <Grid contianer item style={{ width: "40px" }}>
                      {" "}
                    </Grid>
                    <Grid container item lg={5} xs={6}>
                      <Grid container item lg={12} xs={12}>
                        <Typography
                          color="primary"
                          style={{ fontSize: "1rem" }}
                        >
                          {song.title}
                        </Typography>
                      </Grid>
                      <Grid container item lg={12} xs={12}>
                        <Typography
                          color="secondary"
                          style={{ fontSize: "0.9rem" }}
                        >
                          {" "}
                          {song.artist}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid contianer item lg={6} xs={8}>
                      <Typography
                        style={{ fontSize: "0.9rem" }}
                        color="secondary"
                      >
                        {song.duration}
                      </Typography>
                    </Grid>
                    {/* </a> */}
                  </Grid>
                </Box>
              );
            })
          ) : (
            <Loader
              type="ThreeDots"
              color="white"
              height={100}
              width={100}
              timeout={10000} //3 secs
              className="loader"
            />
          )}
        </div>
      </div>
      <div className="empty-player"></div>
      <Bottombar />
    </div>
  );
};

export default Album;
