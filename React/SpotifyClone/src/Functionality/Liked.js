import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { url } from "../Auth/stats";
import Bottombar from "../Functionality/Bottombar";
import "../styles/liked.css";
import { makeStyles } from "@material-ui/core/styles";



const useStyles=makeStyles((theme)=>({

headerText:{[theme.breakpoints.up('xs')]:{
  fontSize:'2.1rem',
  fontWeight:'900',
},
[theme.breakpoints.up('md')]:{
  fontSize:'7.6rem',
  fontWeight:'900'
},
[theme.breakpoints.between('sm','md')]:{
  fontSize:'5rem',
  fontWeight:'900'

},

[theme.breakpoints.between('md','lg')]:{
  fontSize:'6rem',
  fontWeight:'900',
},

},

bannerButton:{
  width: "7rem",
  height: "12rem",
  margin: "25% 30%",
  color: "white",
  shadows: "10px 0 10px 0 black",
  [theme.breakpoints.between('xs','sm')]:{
    width: "4rem",
    height: "12rem",
    margin: "-2% 28%",
    color: "white",
    shadows: "10px 0 10px 0 black",
    
  },




},

subText:{
  fontFamily:'Nunito Sans',
  color:'white',
  [theme.breakpoints.between('xs','sm')]:{
    fontSize:'0.7rem'
  }
  // marginLeft: "5px" 
},

titleBox:{
  marginTop:'13%',
  marginLeft:'2%',
  [theme.breakpoints.between('xs','sm')]:{
    marginTop:'40%',
    marginLeft:'1%',
  }
},
songSubText:{
  fontSize:'0.9rem',
  [theme.breakpoints.between('xs','sm')]:{
    fontSize:'0.8rem'
  }
}



}))


const Liked = () => {


const classes=useStyles()

  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState([]);

  // const bannerbuttonStyle = {
   
  // };

  const fetchLikedsongs = async () => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("token");
    const results = await fetch(
      `${url}user/${user_id}/tracks&access_token=${access_token}`
    );
    const data = await results.json();
    console.log(data.data);
    setLiked(data.data);
    if (liked !== undefined) {
      setLoading(false);
    }
  };

  useEffect(() => {
   fetchLikedsongs();
   setLiked(liked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liked]);

  const unlikeSong = async (ID) => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("token");
    const results = await fetch(
      `${url}user/${user_id}/tracks&track_id=${ID}&access_token=${access_token}&request_method=delete`
    );
    const data = await results.json();
    console.log(data);
    // window.location.reload();
  };

  return (
    <div className="liked-area">
      <Box display="flex">
        <Box component="div" className="banner-box">
          <span>
            <FavoriteIcon
              className={classes.bannerButton}
              // className="liked-banner-box-icon"
            />
          </span>
        </Box>

        <Box className={classes.titleBox}>
          <Typography
            className={classes.subText}
          >
             PLAYLIST
          </Typography>
          <Typography className={classes.headerText} letterSpacing={1} color="primary">
            Liked Songs
          </Typography>
        </Box>
      </Box>

      <Grid container className="liked-section-header">
      {/* <Grid container item style={{width:'5%'}}>
    
    </Grid> */}
        <Grid container item xs={1} lg={1} md={1} sm={1}>
          <Typography color="secondary" style={{ fontSize: "0.8rem" }}>
            #
          </Typography>
        </Grid>
        <Grid container item xs={5} lg={5} md={6} sm={6}>
          <Typography color="secondary" style={{ fontSize: "0.8rem" }}>
            {" "}
            TITLE
          </Typography>
        </Grid>
         {/* <Grid container item style={{width:'5%'}}>
    
        </Grid> */}
        <Grid container item style={{ width: "64px" }}></Grid>
        <Grid container item xs={2} lg={2} md={2} sm={2}>
          <Typography color="secondary" style={{ fontSize: "0.8rem" }}>
            ALBUM
          </Typography>
        </Grid>
       
        {/* <h3>TIME</h3> */}
      </Grid>

      {!loading ? (
        liked.map((song) => {
          const { id, album, artist, title } = song;
          return (
            <Box display="flex" className="entire-liked-song-container">
              <Box>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    unlikeSong(`${id}`);
                  }}
                >
                  <FavoriteIcon className="minus" />
                </span>
              </Box>

              <Grid
                container
                item
                xs={12}
                key={id}
                onClick={() => {
                  window.location.href = `/this/song/${id}`;
                }}
                className="likedsong"
              >
                {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3>*/}
                <Grid container item style={{ width: "50px" }}>
                  <img src={album.cover_small} alt="" />
                </Grid>
                <Grid container item lg={6} xs={6}>
                  <Grid container item lg={12} xs={12}>
                    <Typography color="primary" style={{ fontSize: "1rem" }}>
                      {title}
                    </Typography>
                  </Grid>
                  <Grid container item lg={12} xs={12}>
                    <Typography
                      // color="secondary"
                     className={classes.songSubText}
                    >
                      {" "}
                      {artist.name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item lg={2} xs={4}>
                  <Typography  className={classes.songSubText}>
                    {album.title}
                  </Typography>
                </Grid>
                {/* <h3>{time_add}</h3> */}
              </Grid>
            </Box>
          );
        })
      ) : (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          className="loader-playlist" //3 secs
        />
      )}

      {/* <div className="empty-player">
        
      </div>*/}
      <Bottombar />
    </div>
  );
};

export default Liked;
