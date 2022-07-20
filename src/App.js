import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import SingleProject from "./pages/SingleProject"
import Projects from "./pages/Projects"
import ProjectList from './components/ProjectList'
import NavBar from "./components/NavBar"



function App() {
  return (
    <div className="App">
      <p></p>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<SingleProject />} />
          <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
