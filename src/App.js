import React from "react";
import Intro from "./Components/Intro";
import './Shared/globalStyles.css'
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div div className="App">
    <div className="content">
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
      <Navbar />
    </div>
  );
}

export default App;
