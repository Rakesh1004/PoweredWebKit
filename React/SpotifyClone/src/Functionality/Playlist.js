import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

// import {Howl} from "howler";
import { url } from "../Auth/stats";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useParams } from "react-router-dom";
import "../styles/Playlists/playlistsongs.css";
import Bottombar from "../Functionality/Bottombar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Grid, Typography, Box } from "@material-ui/core";

const Playlist = () => {
  const { id } = useParams();
  const [deezer, setDeezer] = useState();
  const [loading, setLoading] = useState(true);
  // const[liked,setLiked]=useState(false)
  const fetchPlaylistsongs = async () => {
    const results = await fetch(`${url}playlist/${id}`);
    const data = await results.json();
    //  console.log(data.tracks.data);
    if (data !== undefined || data !== null) {
      setDeezer(data.tracks.data);
    }
    if (deezer !== undefined) {
      console.log(deezer);
    }
    if (data !== undefined) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylistsongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const showSearchSongsPopper=()=>{
  // <Search/>
  // }
  // const likeSong=async(track_id)=>{
  //   const user_id=localStorage.getItem('user_id')
  //   const access_token=localStorage.getItem('token')
  //   const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
  //   const data=await results.json();
  //   console.log(data)
  //   setLiked(!liked)
  // }
  return (
    <div className="playlists">
      <div className="middle">
        <Sidebar />
        <div className="playlist-area">
          <div className="playlist-banner"></div>

          <Grid container style={{ height: "6vh", alignItems: "center" }}>
            <Grid
              container
              item
              xs={1}
              style={{ borderBottom: "0.5px white" }}
            ></Grid>

            {/* <div></div> */}
            <Grid container item lg={5} xs={7}>
              <Typography style={{ fontSize: "0.8rem" }} color="secondary">
                TITLE
              </Typography>
            </Grid>
            <Grid container item lg={3} xs={4}>
              <Typography style={{ fontSize: "0.8rem" }} color="secondary">
                ALBUM
              </Typography>
            </Grid>
            <Grid container item xs={1}>
              <Typography
                style={{ fontSize: "0.8rem" }}
                color="secondary"
              ></Typography>
            </Grid>
          </Grid>
          {!loading ? (
            deezer.map((song) => {
              //    function soundPlay(src){
              //     const sound=new Howl({
              //        src
              //        // html5:true
              //     })
              //     sound.play()
              //  }
              const { id, album, title, artist } = song;

              return (
                <Box>
                  <Grid
                    container
                    onClick={() => {
                      window.location.href = `/this/song/${id}`;
                    }}
                    key={id}
                    className="playlistsong"
                  >
                    {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3>*/}
                    <Grid container items></Grid>

                    <Grid container items style={{ width: "40px" }}>
                      {" "}
                      <img src={album.cover} alt="la" />
                    </Grid>
                    <Grid container item lg={5} xs={6}>
                      <Grid container items lg={12} xs={12}>
                        <Typography
                          color="primary"
                          style={{ fontSize: "1rem" }}
                        >
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

                  {/* <button onClick={()=>{showSearchSongsPopper()}}>ADD SONGS TO THIS PLAYLIST</button> */}
                </Box>
              );
            })
          ) : (
            <div>
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={10000} //10 secs
                className="loader-playlist"
              />
            </div>
          )}
        </div>
      </div>
      <div className="empty-player"></div>
      <Bottombar />
    </div>
  );
};
export default Playlist;
