import React from "react";
import {NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="navbar">
        {/* <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link> */}
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <p>home</p>
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/About">
            <p>about</p>
          </NavLink>

          <NavLink activeclassname="active" className="experience-link" to="/Experience">
            <p>experience</p>
          </NavLink>

          <NavLink activeclassname="active" className="experience-link" to="/Projects">
            <p>projects</p>
          </NavLink>          
        </nav>
      </div>
  )
}

export default Navbar