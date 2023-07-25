import React from "react";
import {Route, Routes} 
        from "react-router-dom";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Layout from "./components/Layout";
import Projects from "./components/Projects"  



function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="experience" element={< Experience/>} />
        <Route path="projects" element={< Projects/>} />
        </Route>
      </Routes>
  )
}

export default App;