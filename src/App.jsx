import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
      
        
            <Link className="kalvium dec" to="/"><h1>KALVIUM❤️</h1></Link>
          
          <div className="about">
          
            
              <Link to="/contact" className="dec"><h1>Contact</h1></Link>
          
              <Link to="/about" className="dec"><h1>About</h1></Link>
            
          </div>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;