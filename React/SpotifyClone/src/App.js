import React from 'react'
import Routing from './Routing';
import { createMuiTheme,ThemeProvider,responsiveFontSizes} from '@material-ui/core';
import Player from "./Functionality/Player/Player"




let theme = createMuiTheme({
    // breakpoints: {
    //     values: {
    //      ipad:768,
    //      ipad_pro:1024,
    //      surface:540,

    //     },
    //   },

 palette:{
     primary:{
         main:'#ffffff',
     },
     secondary:{
         main:'rgb(170,170,170)',  
     },
 },

typography:{
    fontFamily:'Nunito Sans',
h1:{fontFamily:'Nunito Sans',
fontWeight:'900',
},


h2:{fontFamily:'Nunito Sans',
fontWeight:'800',
height:'5rem'},

h3:{fontFamily:'Nunito Sans',
fontWeight:'600',
height:'3rem'}
},

 })

theme=responsiveFontSizes(theme);
 const App = () => {
    //  useEffect(()=>{
    //     localStorage.setItem('play',true);
    //  },[])
    return (
        
        <ThemeProvider theme={theme}>
                  <Player duration={localStorage.getItem('duration')} 
            percent={localStorage.getItem('percentage')} 
            time={localStorage.getItem('currentTime')} 
           playstate={localStorage.getItem('play')}
            />
            <Routing/>
        <div>
       
        </div>
        </ThemeProvider>
    )
}


export default App;