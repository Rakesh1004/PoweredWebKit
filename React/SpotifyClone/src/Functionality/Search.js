import React, { useState } from "react";
import "../styles/search.css";
import { url } from "../Auth/stats.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Grid, Typography, Box } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
import img from "../styles/dog.png";

// const useStyles=makeStyles({
// subText:{
//   '&:hover':{
//     color:'white',
//     cursor:'pointer'
//   },
//   color:"grey"
// }

// })


// import FormControl from '@material-ui/core/FormControl';

const Search = () => {

// const classes=useStyles();
  //useState has been used for taking the input from the form and also taking the input after the API has been called
const [searchvalue, setSearchvalue] = useState("");
const [searchresult, setSearchresult] = useState("x");

  //default Loader comprising of 3 dots
const [loading, setLoading] = useState(false);
  // eslint-disable-next-line

  //not yet used this can be used to show the like button beside the songs..
  // const [liked,setLiked]=useState();

const [show, setShow] = useState(false);

const [showerror, setShowerror] = useState(false);

  //these have also not been yet utilized but can easily be integrated in the web application so that playlists can be added from beside the songs
  //  const [playlistspopup,setPlaylistspopup]=useState(false);
  //  const[myplaylists,setMyplaylists]=useState([]);

  //fetching the results of the form control input
const fetchDeezer = async () => {
const results = await fetch(`${url}search?q=${searchvalue}`);
const data = await results.json();
    //  console.log(data.data) ;
    setSearchresult(data);
    /* eslint eqeqeq: 0 */
    if (data.data.length == 0) {
      setShow(false);
      setShowerror(true);
    }
  };

  //function to handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetchDeezer();
    if (searchresult !== undefined && searchresult !== "x") {
      setLoading(false);
      setShow(true);
    }
  };

  // const showPlaylistspopup=()=>{
  //    setPlaylistspopup(true)
  // }

  // eslint-disable-next-line
  // const likeSong=(track_id)=>{
  //   const user_id=localStorage.getItem('user_id')
  //   const access_token=localStorage.getItem('token')
  //  fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
  //  .then((res)=> res.json())
  //   .then((res)=>console.log(res))
  //   setLiked(true)
  // }
  // eslint-disable-next-line
  //  const unlikeSong=(track_id)=>{
  //         const user_id=localStorage.getItem('user_id')
  //         const access_token=localStorage.getItem('token')
  //        fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=delete&track_id=${track_id}`)
  //        .then((res)=> res.json())
  //         .then((res)=>console.log(res))
  //         setLiked(false)
  //       }

  //  const unlikeSong=async(ID)=>{
  //    const user_id=localStorage.getItem('user_id')
  //    const access_token=localStorage.getItem('token');
  //    const results =await fetch(`${url}user/${user_id}/tracks&track_id=${ID}&access_token=${access_token}&request_method=delete`)
  //    const data= await results.json();
  //    console.log(data);
  //    setLiked(!liked);
  //  }
  //  const getMyPlaylists=async()=>{
  //    try{const user_id=localStorage.getItem('user_id')
  //    const access_token=localStorage.getItem('token')
  //    const results=await fetch(`${url}user/${user_id}/playlists&access_token=${access_token}`)
  //    const data=await results.json()
  //    console.log(data.data);
  //    if(data!==undefined){
  //        setMyplaylists(data.data);
  //        // setLoading(false);
  //    }}
  //    catch(err){
  //       console.error(err)
  //    }
  // }

  // useEffect(() => {
  //    getMyPlaylists()
  // }, [])

  return (
    <div className="search">
      <div className="search-area">
        <div className="bar">
          <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="search"></label>
            <input
              type="text"
              name="search"
              placeholder="Artists,Albums and Songs"
              id="search-bar"
              value={searchvalue}
              onChange={(e) => setSearchvalue(e.target.value)}
            />
            <button type="submit">
              <SearchOutlinedIcon />
            </button>
          </form>

          {loading ? (
            <div className="search-area">
              <Loader
                type="ThreeDots"
                color="white"
                height={100}
                width={100}
                timeout={10000} //10 secs
                className="loader"
              />
            </div>
          ) : (
            <div>
              {show ? (
                <Grid container style={{ height: "6vh", alignItems: "center" }} >
                  <Grid
                    container
                    item
                    xs={1}
                    style={{ borderBottom: "0.5px white" }}
                  ></Grid>

                  {/* <div></div> */}
                  <Grid container item xs={6} >
                    <Typography
                      style={{ fontSize: "0.8rem" }}
                      color="secondary"
            
                    >
                      TITLE
                    </Typography>
                  </Grid>
                  <Grid container item xs={3}>
                    <Typography
                      style={{ fontSize: "0.8rem" }}
                      color="secondary"
                     
                    >
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
              ) : null}

              {show ? (
                searchresult.data.map((searcher) => {
                  const { album, artist, id, title } = searcher;
                  //  const addtoThisPlaylist=async(ID,id)=>{
                  //    // const user_id=localStorage.getItem('user_id')
                  //    const access_token=localStorage.getItem('token')
                  //    const results=await fetch(`${url}playlist/${ID}/tracks&songs=${id}&order=${id}&request_method=post&access_token=${access_token}`)
                  //    const data=await results.json();
                  //    console.log(data);
                  //    window.location.reload();
                  // }
                  // eslint-disable-next-line
                  {
                    /* {playlistspopup?(<div id={searcher.id} className="playlistspopup">
                   {/* <button onClick={setPlaylistspopup(false)}><CancelSharpIcon/></button> */
                  }
                  // eslint-disable-next-line
                  {
                    /* {myplaylists.map((playlists)=>{
              return <h1 onClick={()=>{addtoThisPlaylist(`${playlists.id}`,`${id}`)}}>{playlists.title}</h1>
            })}
            </div>
            ):""
            } */
                  }
                  // eslint-disable-next-line
                  // eslint-disable-next-line
                  {
                    /* {liked? <button onClick={()=>{likeSong(searcher.id)}}><AiTwotoneLike/></button>:<button onClick={()=>{unlikeSong(searcher.id)}}><BiLike/></button>} */
                  }
                  // eslint-disable-next-line
                  {
                    /* {playing? <button onClick={setPlaying(!playing)}><h3>pause</h3></button>:<button onClick={setPlaying(!playing)}><h3>play</h3></button>}  */
                  }
                  // eslint-disable-next-line
                  {
                    /* <button onClick={()=>{showPlaylistspopup()}}><AddBoxSharpIcon className="add-icon"/></button> */
                  }
                  // eslint-disable-next-line
                  {
                    /* <a href={`/this/song/${searcher.id}`}> */
                  }
                  // eslint-disable-next-line
                  {
                    /* <div></div> */
                  }

                  return (
                    <Box>
                      <Grid
                        container
                        item
                        lg={12}
                        xs={12}
                        key={searcher.id}
                        style={{ alignItems: "center" }}
                        onClick={() => {
                          window.location.href = `/this/song/${id}`;
                        }}
                        className="search-box"
                      >
                        <Grid contianer item style={{ width: "40px" }}>
                          <img src={artist.picture_small} alt="" />{" "}
                        </Grid>
                        <Grid container item lg={5} xs={4} >
                          <Grid container item lg={12} xs={12} >
                            <Typography
                              color="primary"
                              style={{ fontSize: "1rem" }}
                            >
                              {title}
                            </Typography>
                          </Grid>
                          <Grid container item lg={12} xs={12}>
                            <Typography
                              // color="secondary"
                              style={{ fontSize: "0.9rem" }}
                              
                              // className={classes.subText}
                            >
                              {" "}
                              {artist.name}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid contianer item lg={6} xs={5}>
                          <Typography
                            style={{ fontSize: "0.9rem" }}
                            // color="secondary"
                          
                          >
                            {album.title}
                          </Typography>
                        </Grid>
                        {/* </a> */}
                      </Grid>
                    </Box>
                  );
                })
              ) : showerror ? (
                <Box display="flex" justifyContent="space-between">
                  <Grid container>
                    <Grid container item lg={6}>
                      <Typography
                        variant="h2"
                        style={{
                          color: "white",
                          position: "absolute",
                          top: "20%",
                        }}
                      >
                        No results found....
                      </Typography>
                    </Grid>
                    <Grid container item lg={6}>
                      <img
                        src={img}
                        alt=""
                        style={{
                          position: "absolute",
                          left: "50%",
                          width: "20%",
                          height: "40%",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
