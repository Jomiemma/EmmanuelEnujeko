import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="project-container" id="projects">
      <div className="project-header">
        <p className="port-head">VISIT MY PORTFOLIO AND DROP YOUR FEEDBACK</p>
        <p className="port-intro">My Projects</p>
      </div>
      <div className="display-containers">
        <div className="display-squares">
          <a
            href="https://todo-app-test-lac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <img src="./images/todo-app.png" alt="Todo App" />
          </a>
          <p id="port-head-txt">Todo App</p>
          <a
            href="https://todo-app-test-lac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <p className="port-description">
              A simple Todo App built with HTML and CSS. Users can add, remove,
              and check off tasks.
            </p>
          </a>
        </div>

        <div className="display-squares">
          <a
            href="https://quote-generator-sepia-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <img
              src="./images/random-quote-generator.png"
              alt="Random Quote Generator"
            />
          </a>
          <p id="port-head-txt">Random Quote Generator</p>
          <a
            href="https://quote-generator-sepia-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <p className="port-description">
              Generates random quotes using React. Users can click to get a new
              quote.
            </p>
          </a>
        </div>

        <div className="display-squares">
          <a
            href="https://markdown-previewer-wine-iota.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <img src="./images/markdown-previewer.png" alt="" />
          </a>
          <p id="port-head-txt">Markdown Previewer</p>
          <a
            href="https://markdown-previewer-wine-iota.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
            // className="port-description"
          >
            <p className="port-description">
              A Markdown Previewer built with React. Users can type Markdown and
              see a live preview.
            </p>
          </a>
        </div>
        <div className="display-squares">
          <a
            href="https://drum-machine-six-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <img src="./images/drum-machine.png" />
          </a>
          <p id="port-head-txt">Drum Machine</p>
          <a
            href="https://drum-machine-six-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <p className="port-description">
              A drum machine built with React. Play different drum sounds using
              keyboard or clicks.
            </p>
          </a>
        </div>
        <div className="display-squares">
          <a
            href="https://javascript-calculator-plum.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <img src="./images/javascript-calc.png" />
          </a>
          <p id="port-head-txt">Javascript Calculator</p>
          <a
            href="https://javascript-calculator-plum.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <p className="port-description">
              A fully functional JavaScript calculator built with React,
              supporting basic operations.
            </p>
          </a>
        </div>
        <div className="display-squares">
          <a
            href="https://clk-work-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <img src="./images/clockwork-app.png" />
          </a>
          <p id="port-head-txt">Clock App</p>
          <a
            href="https://clk-work-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-link"
          >
            <p className="port-description">
              A clock application built with React. Displays current time and
              supports multiple formats.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
