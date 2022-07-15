import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Project from "./pages/Project"
import Projects from "./pages/Projects"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
