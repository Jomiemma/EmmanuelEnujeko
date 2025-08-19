import "./App.css";
import "./styles/theme.css";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
