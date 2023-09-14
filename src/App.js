import React from "react";
import {Outlet, Route, Routes} 
        from "react-router-dom";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Layout from "./components/Layout";
import Projects from "./Pages/Projects"  
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="experience" element={< Experience/>} />
        <Route path="projects" element={< Projects/>} />
        </Route>
        
      </Routes>

    </div>
      
  )
}

export default App;