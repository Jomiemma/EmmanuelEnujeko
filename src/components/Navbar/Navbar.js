import React, { useState } from "react";
import "./Navbar.css";
// import profile from "./profile.png";

function Navbar() {
  return (
    <section className="nav-container">
      <img src="/images/profile.png" alt="logo placeholder" id="logo" />
      <nav>
        <div className="nav-item">
          <a href="#home">Home</a>
        </div>
        <div className="nav-item">
          <a href="#skills">Skills</a>
        </div>
        <div className="nav-item">
          <a href="#projects">Projects</a>
        </div>
        <div className="nav-item">
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="theme-buttons">
        {/* <button>Dark Mode</button> */}
      </div>
    </section>
  );
}

export default Navbar;
