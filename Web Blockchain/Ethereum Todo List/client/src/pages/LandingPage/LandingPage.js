import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notes from '../../components/Notes/Notes'
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Notes/>
            <Footer/>
        </div>
    )
}

export default LandingPage
