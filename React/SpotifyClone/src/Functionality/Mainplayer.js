import React, { useEffect, useState } from "react";
import "../styles/mainplayer.css";

import { url } from "../Auth/stats";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Typography from "@material-ui/core/Typography";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@material-ui/core";

const styleForTitle = {
  marginLeft: "4%",
  marginTop: "2%",
};

const Mainplayer = () => {
  const [deezer, setDeezer] = useState();
  const [deezer_1, setDeezer_1] = useState();
  const [deezer_2, setDeezer_2] = useState();
  const [deezer_3, setDeezer_3] = useState();
  const [deezer_4, setDeezer_4] = useState();
  const [deezer_5, setDeezer_5] = useState();
  // eslint-disable-next-line
  const [deezer_6, setDeezer_6] = useState();
  const [deezer_11, setDeezer_11] = useState();
  const [deezer_12, setDeezer_12] = useState();
  const [deezer_13, setDeezer_13] = useState();

  const [deezer_15, setDeezer_15] = useState();
  const [deezer_16, setDeezer_16] = useState();
  const [deezer_17, setDeezer_17] = useState();
  const [deezer_18, setDeezer_18] = useState();
  const [deezer_19, setDeezer_19] = useState();
  const [deezer_20, setDeezer_20] = useState();
  const [deezer_21, setDeezer_21] = useState();
  const [deezer_22, setDeezer_22] = useState();
  const [deezer_23, setDeezer_23] = useState();

  const [deezer_7, setDeezer_7] = useState();
  const [deezer_8, setDeezer_8] = useState();

  const [deezer_10, setDeezer_10] = useState();
  // eslint-disable-next-line
  const [usercheck, setUsercheck] = useState(false);
  // eslint-disable-next-line
  const [user, setUser] = useState();
  // const[recent,setRecent]=useState()
  // const[recommend,setRecommend]=useState()

  //Fetching user details
  const getUser = async () => {
    const results = await fetch(
      `${url}user/me&access_token=${localStorage.getItem("token")}`
    );
    const data = await results.json();
    localStorage.setItem("user_id", data.id);
    setUser(data);
    // console.log(user)
  };

  //Individual playlists

  const deezerCharts_1 = async () => {
    const results = await fetch(`${url}playlist/1479458365`);
    const data = await results.json();
    console.log(data);
    setDeezer([data]);
  };
  const deezerCharts_2 = async () => {
    const results = await fetch(`${url}playlist/00000000005`);
    const data = await results.json();
    console.log(data);
    setDeezer_1([data]);
  };
  const deezerCharts_3 = async () => {
    const results = await fetch(`${url}playlist/00001001007`);
    const data = await results.json();
    console.log(data);
    setDeezer_2([data]);
  };
  const deezerCharts_4 = async () => {
    const results = await fetch(`${url}playlist/5052700044`);
    const data = await results.json();
    console.log(data);
    setDeezer_3([data]);
  };

  const deezerCharts_5 = async () => {
    const results = await fetch(`${url}playlist/8847611602`);
    const data = await results.json();
    console.log(data);
    setDeezer_4([data]);
  };
  const deezerCharts_6 = async () => {
    const results = await fetch(`${url}playlist/668126235`);
    const data = await results.json();
    console.log(data);
    setDeezer_5([data]);
  };
  const deezerCharts_12 = async () => {
    const results = await fetch(`${url}playlist/1306931615`);
    const data = await results.json();
    console.log(data);
    setDeezer_11([data]);
  };
  const deezerCharts_13 = async () => {
    const results = await fetch(`${url}playlist/4884313904`);
    const data = await results.json();
    console.log(data);
    setDeezer_12([data]);
  };
  const deezerCharts_14 = async () => {
    const results = await fetch(`${url}playlist/5182240424`);
    const data = await results.json();
    console.log(data);
    setDeezer_13([data]);
  };

  //  const deezerCharts_15=async()=>{
  //     const results =await fetch(`${url}playlist/233093672`)
  //      const data= await results.json()
  //      console.log(data);
  //      setDeezer_14([data]);
  //  }
  const deezerCharts_16 = async () => {
    const results = await fetch(`${url}playlist/4549247104`);
    const data = await results.json();
    console.log(data);
    setDeezer_15([data]);
  };
  const deezerCharts_17 = async () => {
    const results = await fetch(`${url}playlist/6399369944`);
    const data = await results.json();
    console.log(data);
    setDeezer_16([data]);
  };
  const deezerCharts_18 = async () => {
    const results = await fetch(`${url}playlist/1996494362`);
    const data = await results.json();
    console.log(data);
    setDeezer_17([data]);
  };
  const deezerCharts_19 = async () => {
    const results = await fetch(`${url}playlist/5104249748`);
    const data = await results.json();
    console.log(data);
    setDeezer_18([data]);
  };
  const deezerCharts_20 = async () => {
    const results = await fetch(`${url}playlist/789123393`);
    const data = await results.json();
    console.log(data);
    setDeezer_19([data]);
  };
  const deezerCharts_21 = async () => {
    const results = await fetch(`${url}playlist/1276857251`);
    const data = await results.json();
    console.log(data);
    setDeezer_20([data]);
  };
  const deezerCharts_22 = async () => {
    const results = await fetch(`${url}playlist/8487199702`);
    const data = await results.json();
    console.log(data);
    setDeezer_21([data]);
  };
  const deezerCharts_23 = async () => {
    const results = await fetch(`${url}playlist/8971696142`);
    const data = await results.json();
    console.log(data);
    setDeezer_22([data]);
  };
  const deezerCharts_24 = async () => {
    const results = await fetch(`${url}playlist/8971690942`);
    const data = await results.json();
    console.log(data);
    setDeezer_23([data]);
  };

  //Mapper charts -top charts
  const deezerCharts_7 = async () => {
    const results = await fetch(`${url}chart`);
    const data = await results.json();
    console.log(data);
    setDeezer_6(data.albums.data);
  };
  const deezerCharts_8 = async () => {
    const results = await fetch(`${url}chart`);
    const data = await results.json();
    console.log(data);
    setDeezer_7(data.tracks.data);
  };
  const deezerCharts_9 = async () => {
    const results = await fetch(`${url}chart`);
    const data = await results.json();
    console.log(data);
    setDeezer_8(data.playlists.data);
  };
  //  const deezerCharts_10=async()=>{
  //     const results =await fetch(`${url}chart`)
  //      const data= await results.json()
  //      console.log(data);
  //      setDeezer_9(data.podcasts.data);
  //  }
  const deezerCharts_11 = async () => {
    const results = await fetch(`${url}chart`);
    const data = await results.json();
    console.log(data);
    setDeezer_10(data.artists.data);
  };

  //    const recentPlayed=async()=>{
  //     const user_id=localStorage.getItem('user_id')
  //     const results=await fetch(`${url}user/${user_id}/history&access_token=${localStorage.getItem('token')}`)
  //     const data=await results.json()
  //     console.log(data)
  //     if(data!==undefined){
  //         setRecent(data)
  //     }
  //    }
  //    const recommendations=async()=>{
  //     const user_id=localStorage.getItem('user_id')
  //     const results=await fetch(`${url}user/${user_id}/recommendations/tracks&access_token=${localStorage.getItem('token')}`)
  //     const data=await results.json()
  //     console.log(data)
  //     if(data!==undefined){
  //         setRecommend(data)
  //     }
  //    }

  useEffect(() => {
    deezerCharts_1();
    deezerCharts_2();
    deezerCharts_3();
    deezerCharts_4();
    deezerCharts_5();
    deezerCharts_6();
    deezerCharts_12();
    deezerCharts_7();
    deezerCharts_8();
    deezerCharts_9();
    // deezerCharts_10();
    deezerCharts_11();
    deezerCharts_12();
    deezerCharts_13();
    deezerCharts_14();
    // deezerCharts_15();
    deezerCharts_16();
    deezerCharts_17();
    deezerCharts_18();
    deezerCharts_19();
    deezerCharts_20();
    deezerCharts_21();

    deezerCharts_22();

    deezerCharts_23();
    deezerCharts_24();

    // eslint-disable-next-line
    getUser();

    if (localStorage.getItem("user_token") !== undefined) {
      setUsercheck(true);
    }

    // if(localStorage.getItem('user_id')!==undefined){recentPlayed();
    // recommendations();
    // }
  }, []);

  // const addToLibrary=()=>{
  // //    fetch(`${url}user/albums&request_method=`)
  // }

  if (
    deezer !== undefined &&
    deezer_1 !== undefined &&
    deezer_2 !== undefined &&
    deezer_3 !== undefined &&
    deezer_4 !== undefined &&
    deezer_5 !== undefined &&
    // &&deezer_6!==undefined

    deezer_7 !== undefined &&
    deezer_8 !== undefined &&
    deezer_10 !== undefined &&
    deezer_11 !== undefined &&
    deezer_12 !== undefined &&
    deezer_13 !== undefined &&
    deezer_15 !== undefined &&
    deezer_16 !== undefined &&
    deezer_17 !== undefined &&
    deezer_18 !== undefined &&
    deezer_19 !== undefined &&
    deezer_20 !== undefined &&
    deezer_21 !== undefined &&
    deezer_22 !== undefined &&
    deezer_23 !== undefined
  )
    return (
      <div className="mainplayer">
        {/* <div className="banner-overlay"></div>
<{usercheck?<Typography variant='h3' >Welcome <span><Typography variant='h3'>{user.name}</Typography></span>!</Typography>:<Typography variant='h3'>welcome</Typography>}
<div className="banner-overlay"></div>*/}
        <Carousel 
        className="carousel"
          // style={{ height: "54vh"}}
          showStatus={false}
          stopOnHover
          thumbWidth={100}
          showThumbs={false}
          showArrows={true}
          infiniteLoop
          autoPlay
        >
          <div
           className="carousel-images-container"
            style={{
              height: "95%",
              margin: "auto",
              width: "95%",
              position:'absolute',
              top:'-15%',
              left:'2.5%'
              // marginTop: "2",
            }}
          >
            <img
             className="carousel-images"
              src={deezer_3[0].picture_xl}
              alt=""
             
            />
            {/* <Button style={{height:'3rem',width:'10rem',backgroundColor:'#1DB954',position:'absolute',top:'50vh',right:'10vh',borderRadius:'25px',cursor:'pointer'}}><Typography variant="h6" color='primary' style={{fontWeight:'700'}}>PLAY NOW</Typography></Button>*/}
          </div>
          <div
           className="carousel-images-container"
            style={{
             height:'95%',
              width: "95%",
              margin: "auto",
              position:'absolute',
              top:'-15%',
              left:'2.5%'
             
            }}
          >
            <img
              
              src={deezer_4[0].picture_xl}
              alt=""
              style={{
                // position: 'absolute',
                // left: '2.5%',
                // top: '-10%',
                // width: "95%",
                // width: "95%",
                // marginTop: "2%",
              }}
            />
            {/* <Button style={{height:'3rem',width:'10rem',backgroundColor:'#1D954',position:'absolute',top:'50vh',right:'10vh',borderRadius:'25px',cursor:'pointer'}}><Typography variant="h6" color='primary' style={{fontWeight:'700'}}>PLAY NOW</Typography></Button>*/}
          </div>

          <div
          className="carousel-images-container"
            style={{
              height: "95%",
              margin: "auto",
              width: "95%",
              left:'2.5%'
              // marginTop: "2%",
            }}
          >
            <img
         
              src={deezer_7[1].album.cover_xl}
              alt=""
              style={{
                // borderRadius: "20px",
                // position: 'absolute',
                // left: '2.5%',
                // top: '-10%',
                // width: "95%",
                // marginTop: "2%",
              }}
            />
            {/*  <Button
    
    // onClick={()=>{window.location.href=`playlist/${deezer_11.id}`}} 
    
    style={{height:'3rem',width:'10rem',backgroundColor:'#1DB954',position:'absolute',top:'50vh',right:'10vh',borderRadius:'25px',cursor:'pointer'}}><Typography variant="h6" color='primary' style={{fontWeight:'700'}}>PLAY NOW</Typography></Button>*/}
          </div>
        </Carousel>

        {/* <div className="title"><h4>RECENTLY PLAYED</h4></div>
    <div className="arrange">
{recent.data.map((song)=>{
        const{title,album,id}=song
        return <div  className="box">
        <Link to={`this/song/${id}`}>
        <img src={album.cover_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        <button>PLAY</button>
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
        {/* </div>
    })}
    </div>         */}

        <Typography
          variant="h2"
          color="primary"
          style={{ marginTop: "4%", marginLeft: "4%" }}
        >
          PLAYLISTS
        </Typography>

        <Box component="div" className="arrange">
          {deezer.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <Box
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </Box>
            );
          })}

          {deezer_1.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}

          {deezer_2.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}

          {deezer_11.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}

          {deezer_12.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}

          {deezer_13.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}

          {deezer_15.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}

          {deezer_16.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}

          {deezer_17.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
          {deezer_18.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
        </Box>

        <Typography style={styleForTitle} variant="h2" color="primary">
          THE GOOD OLD DAYS
        </Typography>
        <div className="arrange">
          {deezer_3.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}

          {deezer_4.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}

          {deezer_5.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
          {deezer_19.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
          {deezer_20.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
          {deezer_21.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
          {deezer_22.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
          {deezer_23.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
          {deezer_21.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
        </div>

        {/*</div><Typography 


// style={styleForTitle}
// variant='h3'
// color='primary'>TOP ALBUMS</Typography>
// <div className="arrange">
// {deezer_6.map((song)=>{
//         const{title,cover_medium,id}=song
//         return <div  className="box" onClick={()=>{window.location.href=`album/${id}`}}>
      
//         <img src={cover_medium}alt=""/>
//         <h4>{title}</h4>
      

//         {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> 
   </div>
//     })}
//     </div>*/}

        <Typography style={styleForTitle} variant="h2" color="primary">
          TOP TRACKS
        </Typography>
        <div className="arrange">
          {deezer_7.map((song) => {
            const { title, album, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `this/song/${id}`;
                }}
              >
                <img src={album.cover_medium} alt="" />
                <h4>{title}</h4>

                {/* <button>PLAY</button> */}
                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
        </div>

        <Typography style={styleForTitle} variant="h2" color="primary">
          TOP PLAYLISTS
        </Typography>
        <div className="arrange">
          {deezer_8.map((song) => {
            const { title, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `playlist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{title}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
        </div>

        <Typography style={styleForTitle} variant="h2" color="primary">
          TOP ARTISTS
        </Typography>
        <div className="arrange">
          {deezer_10.map((song) => {
            const { name, picture_medium, id } = song;
            return (
              <div
                className="box"
                onClick={() => {
                  window.location.href = `artist/${id}`;
                }}
              >
                <img src={picture_medium} alt="" />
                <h4>{name}</h4>

                {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  return (
    <div className="mainplayer">
      <Loader
        type="ThreeDots"
        color="white"
        height={100}
        width={100}
        timeout={20000} //20sec
        className="loader"
      />
    </div>
  );
};
export default Mainplayer;
