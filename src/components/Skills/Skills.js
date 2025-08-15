import React, { useState } from "react";
import "./Skills.css";

function Skills() {
  const [selectCategory, setSelectedCategory] = useState("CSS FRAMEWORK");

  return (
    <section className="skill-container" id="skills">
      <div className="skill-left">
        <button onClick={() => setSelectedCategory("CSS FRAMEWORK")}>
          CSS FRAMEWORK
        </button>
        <button onClick={() => setSelectedCategory("FRONTEND")}>
          FRONTEND
        </button>
        {/* COME BACK AND ADD SOMETHINGS */}
      </div>
      <div className="skill-right">
        {selectCategory === "CSS FRAMEWORK" && (
          <div>
            <p>
              CSS frameworks supercharge my creativity, giving me a reliable
              toolkit to speed up development and simplify design work. They
              help me craft fully responsive layouts while ensuring smooth,
              consistent performance across all browsers.
            </p>
            <div>
              <p>CSS/CSS3</p>
              <p>Tailwind CSS</p>
            </div>
          </div>
        )}
        {selectCategory === "FRONTEND" && (
          <div>
            <p>
              Frontend development is the craft of designing the digital spaces
              users see and engage with. My expertise in frontend tools allows
              me to build engaging interfaces, smooth interactions, and
              enjoyable user experiences. I see these tools as the bridge that
              brings my ideas to life on my audience’s screens.
            </p>
            <div>
              <p>React</p>
              <p>HTML/HTML5</p>
              <p>React Query</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
