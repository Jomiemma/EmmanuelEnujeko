import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import FindMe from "../../reusables/FindMe";

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
          <FindMe />
        </div>
        <div className="home-right">
          <img src="/images/profile.png" alt="profile" id="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
