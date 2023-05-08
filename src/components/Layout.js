import React from 'react';
import { Routes, Route, useLocation} from "react-router-dom";
import About from './About';
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import { AnimatePresence } from "framer-motion";

function Layout () {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter
    className='bg-Space font-comfortaa h-screen'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={< Experience/>} />
        <Route path="projects" element={< Projects/>} />
        </Route>
      </Routes>
    </AnimatePresence>
        

  )
}

export default Layout;
