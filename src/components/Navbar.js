import React from "react";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//use app bar

const Navbar = () => {
  return (
    <nav class="bg-Space font-comfortaa text-Khaki">
      <div class="max-w-screen-xl flex flex-wrap justify-between content-center mx-auto py-4">
        
        <NavLink to="/" >
          logo
        </NavLink>

        <div class="w-full md:block md:w-auto" id="navbar-default">
          <ul class=" flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <NavLink exact="true" activeclassname="active" to="/">home</NavLink>
            </li>

            <li>
              <NavLink activeclassname="active" className="about-link" to="/About">about</NavLink>
            </li>

            <li>
              <NavLink activeclassname="active" className="experience-link" to="/Experience">experience</NavLink>
            </li>

            <li>
              <NavLink activeclassname="active" className="project-link" to="/Projects">projects</NavLink>    
            </li>
          </ul>                
        </div>
        
        <ul class="flex space-x-5 ">
          <li>
            <a href="mailto:maxwelltymartin@gmail.com" >
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/maxwell-martin-188195206/"
              rel="noopener noreferrer"
              target="_blank"
              
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/maxwelltyreece"
              rel="noopener noreferrer"
              target="_blank"
              
            >
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
      
  )
}

export default Navbar