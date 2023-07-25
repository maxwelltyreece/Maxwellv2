import React from "react";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub,faMaxcdn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//use app bar

const Navbar = () => {
  return (
    <nav class="text-Peach text-xs sm:text-lg">
      <div class="max-w-screen-xl flex flex-wrap justify-between content-center mx-auto py-4">
        
        <NavLink to="/" >
          <FontAwesomeIcon icon={faMaxcdn} size="lg"/>
        </NavLink>


        <div class="w-auto" >
          <ul class=" flex flex-row space-x-5 sm:space-x-10 ">
            <li className="hover:text-Jasmine delay-100">
              <NavLink exact="true" activeclassname="active" to="/">home</NavLink>
            </li>

            <li className="hover:text-Jasmine delay-100">
              <NavLink activeclassname="active" className="about-link" to="/About">about</NavLink>
            </li>

            <li className="hover:text-Jasmine delay-100">
              <NavLink activeclassname="active" className="experience-link" to="/Experience">experience</NavLink>
            </li>

            <li className="hover:text-Jasmine delay-100"> 
              <NavLink activeclassname="active" className="project-link" to="/Projects">projects</NavLink>    
            </li>
          </ul>                
        </div>
        
        <ul class="flex space-x-5 ">
          <li>
            <a href="mailto:maxwelltymartin@gmail.com" >
              <FontAwesomeIcon icon={faEnvelope} size="lg"/>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/maxwell-martin-188195206/"
              rel="noopener noreferrer"
              target="_blank"
              
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/maxwelltyreece"
              rel="noopener noreferrer"
              target="_blank"
              
            >
              <FontAwesomeIcon icon={faGithub} size="lg"/>
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
      
  )
}

export default Navbar