import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Title />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
