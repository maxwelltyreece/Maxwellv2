import React from "react";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub,faMaxcdn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//use app bar

const Navbar = () => {
  return (
    <nav class="text-Peach text-lg bg-Space font-comfortaa">
      <div class="flex flex-row justify-between py-4 px-10">
        
        <NavLink to="/" >
          <FontAwesomeIcon icon={faMaxcdn} size="xl"/>
        </NavLink>


        <div class="w-auto" >
          <ul class=" flex flex-row space-x-5 sm:space-x-10 ">
            <li className="hover:text-Jasmine delay-100">
              <NavLink exact="true" activeclassname="active" to="/">home</NavLink>
            </li>

            <li className="hover:text-Jasmine delay-100">
              <NavLink activeclassname="active" className="experience-link" to="/Experience">experiences</NavLink>
            </li>

            <li className="hover:text-Jasmine delay-100"> 
              <NavLink activeclassname="active" className="project-link" to="/Projects">projects</NavLink>    
            </li>
          </ul>                
        </div>
        
        <ul class="flex space-x-5 ">
          <li>
            <a href="mailto:maxwelltymartin@gmail.com" >
              <FontAwesomeIcon icon={faEnvelope} size="xl"/>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/maxwell-martin-188195206/"
              rel="noopener noreferrer"
              target="_blank"
              
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/maxwelltyreece"
              rel="noopener noreferrer"
              target="_blank"
              
            >
              <FontAwesomeIcon icon={faGithub} size="xl"/>
            </a>
          </li>

        </ul>
      </div>
      
    </nav>
      
  )
}

export default Navbar