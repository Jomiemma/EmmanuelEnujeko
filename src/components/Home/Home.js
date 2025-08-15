import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <div className="home-left">
          <p>Welcome,</p>
          <h2>
            Hi, I'm{" "}
            <span id="blue-letter" style={{ color: "blueviolet" }}>
              {" "}
              Emmanuel Enujeko{" "}
            </span>
            a
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer.",
                  "Web3 Analyst.",
                  "Graphic Designer.",
                  "Digital Marketer.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="home-desc">
            I'm Emmanuel Enujeko, a React developer passionate about building
            clean, functional, and creative web projects. I enjoy solving tricky
            problems, refining UI/UX, and adding unique touches like animations
            and polished visuals. Every project I build brings me closer to a
            professional, fully-featured portfolio that reflects my skills and
            style.
          </p>
          <div className="link-container">
            <p className="link-txt">Find me online.</p>
            <div className="links">
              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://facebook.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="home-right">
          <img src="/images/profile.png" alt="profile" id="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
