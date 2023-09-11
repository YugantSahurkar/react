import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
   
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>

            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
 
  );
}

export default App;
