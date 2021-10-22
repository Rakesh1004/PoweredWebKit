import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
      <div className="nav">
        <div className="nav-header-container">EthList</div>
        <div className="nav-menu-container">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar
