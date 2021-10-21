import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "./Sidebar.js";
import "../styles/artist.css";
import { url } from "../Auth/stats";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Bottombar from "../Functionality/Bottombar";
import { Grid, Typography } from "@material-ui/core";

const Artist = () => {
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
  const [thisArtist, setThisArtist] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getThisArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getThisArtist = async () => {
    const results = await fetch(`${url}artist/${id}/top`);
    const data = await results.json();
    console.log(data);
    if (data !== undefined) {
      setThisArtist(data.data);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="middle">
        <Sidebar />

        <div className="playlist-area">
          <div className="artist-banner"></div>
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
            thisArtist.map((song) => {
              //    function soundPlay(src){
              //     const sound=new Howl({
              //        src

              //     })
              //     sound.play()
              //  }
              const { id, album, artist, title } = song;
              return (
                <Grid
                  container
                  onClick={() => {
                    window.location.href = `/this/song/${id}`;
                  }}
                  key={id}
                  className="playlistsong"
                >
                  {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3>*/}
                  <Grid container items style={{ width: "20px" }}></Grid>

                  <Grid container items style={{ width: "40px" }}>
                    {" "}
                    <img src={album.cover_small} alt="la" />
                  </Grid>
                  <Grid container item lg={5} xs={5}>
                    <Grid container items lg={12} xs={12}>
                      <Typography color="primary" style={{ fontSize: "1rem" }}>
                        {title}
                      </Typography>
                    </Grid>
                    <Grid container items lg={12} xs={12}>
                      <Typography
                        color="secondary"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {artist.name}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container items lg={6} xs={4}>
                    <Typography
                      color="secondary"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {album.title}
                    </Typography>
                  </Grid>

                  <Grid container items></Grid>
                </Grid>
              );
            })
          ) : (
            <Loader
              type="ThreeDots"
              color="white"
              height={100}
              width={100}
              timeout={10000} //10 secs
              // className="loader"
              id="loader-artist"
            />
          )}
        </div>
      </div>
      <div className="empty-player"></div>
      <Bottombar />
    </div>
  );
};
export default Artist;
