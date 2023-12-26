import logo from "./logo.svg";
import React from "react";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import { Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
