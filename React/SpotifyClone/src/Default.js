import React from 'react';
import './styles/default.css';

import Sidebar from './Functionality/Sidebar.js';
import Mainplayer from "./Functionality/Mainplayer.js"
// import Player from './Functionality/Player/Player.js';
import MyLibrary from './Functionality/MyLibrary'
import Search from "./Functionality/Search"
import Liked from "./Functionality/Liked"
import CreatePlaylist from "./Functionality/CreatePlaylist"
import ErrorSection from "./Functionality/Error" 
import Myplaylists from "./Functionality/MyPlaylists"
import Bottombar from "./Functionality/Bottombar"

const Default=()=>{

  // const[loadforStorage,setLoadforStorage]=useState(false)
// useEffect(() => {window.addEventListener('storage',window.location.reload())

// console.log(loadforStorage)

// }
// ,[])

  return (
    
  <div className="App">
    
    <div className="middle">
    <Sidebar />

    
  {/* eslint eqeqeq: 0 */localStorage.getItem('active')=="homesection"&&<Mainplayer/>}
   {localStorage.getItem('active')=="searchsection"&&<Search/>}
   {localStorage.getItem('active')=="librarysection"&&<MyLibrary/>}
   {localStorage.getItem('active')=="likedsection"&&<Liked/>} 
   {localStorage.getItem('active')=="createplaylistsection"&&<CreatePlaylist/>}
   {localStorage.getItem('active')=="errorsection"&&<ErrorSection/>}
   {localStorage.getItem('active')=="myplaylistssection"&&<Myplaylists/>}
    </div>
{/* <Player></Player> */}
    <Bottombar/>
  </div>
);

}

export default Default;

