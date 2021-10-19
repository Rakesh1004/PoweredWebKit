import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "./Sidebar.js";
import Player from "./Player/Player.js";
import "../styles/song.css";
import { url } from "../Auth/stats";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import Bottombar from "../Functionality/Bottombar";

const Song = () => {
  const { id } = useParams();
  const [thisSong, setThisSong] = useState();
  const [loading, setLoading] = useState(true);

  const [liked, setLiked] = useState();

  useEffect(() => {
    // if (
    //   /* eslint eqeqeq: 0 */ localStorage.getItem("song") != undefined ||
    //   localStorage.getItem("song") != null
    // ) {
      localStorage.removeItem("currentTime");
      localStorage.setItem("currentTime", 0);
  
      localStorage.removeItem("percentage");
      localStorage.setItem("percentage", 0);
    const getThisSong = async () => {
      const results = await fetch(`${url}track/${id}`);
      const data = await results.json();
      console.log(data);
      if (data !== undefined) {
        setThisSong(data);
        setLoading(false);
        // eslint-disable-next-line
        // localStorage.removeItem("song");
        // }
        
    
        localStorage.setItem("song", data.preview);
      }
    };

    getThisSong();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchLikedsongs = async () => {
      const user_id = localStorage.getItem("user_id");
      const access_token = localStorage.getItem("token");
      const results = await fetch(
        `${url}user/${user_id}/tracks&access_token=${access_token}`
      );
      const data = await results.json();
      if (data !== undefined) {
        console.log(data.data);
        // eslint-disable-next-line
        const checkforliked = data.data.find((song) => {
            /* eslint eqeqeq: 0 */
          if (song.id == `${id}`) {
            return true;
          }
          return false;
        });
        console.log(checkforliked);
        // eslint-disable-next-line
        if (checkforliked != null || checkforliked != undefined) {
          setLiked(true);
        }
      }
    };
    // eslint-disable-next-line
    if (
      localStorage.getItem("user_id") != undefined &&
      localStorage.getItem("token") != undefined
    ) {
      fetchLikedsongs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const likeSong = (track_id) => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("token");
    fetch(
      `${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
    setLiked(true);
  };

  const unlikeSong = (ID) => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("token");
    fetch(
      `${url}user/${user_id}/tracks&track_id=${ID}&access_token=${access_token}&request_method=delete`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
    setLiked(false);
  };

  if (localStorage.getItem("user_id") != undefined) {
    return (
      <div>
        <div className="middle">
          <Sidebar  />

          {!loading ? (
            <div className="current-song">
              <img src={thisSong.album.cover_big} alt="" />
              <div className="song-name">{thisSong.title}</div>

              <div>
                {" "}
                {liked ? (
                  <button
                    onClick={() => {
                      unlikeSong(`${id}`);
                    }}
                  >
                    <FavoriteSharpIcon />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      likeSong(`${id}`);
                    }}
                  >
                    <FavoriteBorderSharpIcon />
                  </button>
                )}{" "}
              </div>
            </div>
          ) : (
            <div className="current-song">
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={10000} //10 secs
                className="loader"
              />
            </div>
          )}
        </div>

        {/* {!loading ? <Player /> : <div className="empty-player"> </div>} */}
        <Bottombar />
      </div>
    );
  } else {
    return (
      <div>
        <div className="middle">
          <Sidebar />

          {!loading ? (
          
              <div className="current-song">
                <img src={thisSong.album.cover_big} alt="" />
                <div className="song-name">{thisSong.title}</div>
              </div>
          
          ) : (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={10000} //10 secs
              className="loader"
            />
          )}
          
        {!loading ? (
          <Player />
        ) : (
          <div className="empty-player"> </div>
        )}
        </div>
        <Bottombar />
      </div>
    );
  }
};

export default Song;
