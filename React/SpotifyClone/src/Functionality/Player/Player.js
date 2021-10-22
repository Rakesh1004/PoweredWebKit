import React, { useState, useRef,useEffect} from "react";
import "../../styles/player.css";
import Slider from "./components/slider/Slider";
import ControlPanel from "./components/controls/ControlPanel";

const Player = ({percent,time,duration}) => {
  const [percentage, setPercentage] = useState(percent);
  const [isPlaying, setIsPlaying] = useState(true);
  // const [duration, setDuration] = useState(localStorage.getItem('duration'));
  const [currentTime, setCurrentTime] = useState(time);
  const song = localStorage.getItem("song");
  const audioRef = useRef();
  //  if(song==undefined||song==null){setIsPlaying(false)}

  useEffect(()=>{
    const audio = audioRef.current;
     /* eslint eqeqeq: 0 */
     
    if(currentTime!=undefined){
      audio.currentTime=currentTime;

    }
    // audio.currentTime=0;
 
   // eslint-disable-next-line
  },[])

// useEffect(()=>{
//   setIsPlaying(playstate)
// },[playstate])


  const onChange = (e) => {
    const audio = audioRef.current;
   audio.currentTime=(audio.duration/100)*e.target.value;
   setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 1.0;

    // eslint-disable-next-line
    if (isPlaying == false) {
      setIsPlaying(true);
      audio.currentTime=currentTime;
      audio.play();
      // localStorage.removeItem('play');
      // localStorage.setItem('play',false);
      // localStorage.removeItem('song')
    }
    // eslint-disable-next-line
    if (isPlaying == true) {
      setIsPlaying(false);
      audio.currentTime=currentTime;
      audio.pause();

    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
    localStorage.setItem('currentTime',currentTime);
    localStorage.setItem('percentage',percent)
  };

  return (
    <div className="player">
      <div className="app-container">
        <ControlPanel
          play={play}
          isPlaying={!isPlaying}
          duration={duration}
          currentTime={currentTime}
          percentage={percentage}
        />
        <Slider percentage={percentage} onChange={onChange} />
        <audio
         currentTime={currentTime}
          controls
          loop
          autoplay='true'
          percentage={percentage}
          preload="auto"
          ref={audioRef}
          onTimeUpdate={getCurrDuration}

         
          onLoadedData={(e) => {
            localStorage.setItem('duration',e.currentTarget.duration.toFixed(2));

          }}
          src={song}
        ></audio>
      </div>
    </div>
  );
};

export default Player;
