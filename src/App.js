import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter} 
        from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Layout from "./components/Layout";
import Projects from "./components/Projects"  



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={< Experience/>} />
        <Route path="projects" element={< Projects/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;