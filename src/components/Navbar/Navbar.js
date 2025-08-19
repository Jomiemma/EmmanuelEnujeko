import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      setTheme("dark");
      document.body.className = "dark";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <section className="nav-container">
      <img src="/images/profile.png" alt="logo placeholder" id="logo" />
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav className={isOpen ? "nav-links open" : "nav-links"}>
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
        {/* <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button> */}
      </div>
    </section>
  );
}

export default Navbar;
