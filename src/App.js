import React from "react";
import Intro from "./Components/Intro";
import './Shared/globalStyles.css'
import About from "./Components/About";
import background from './assets/background.jpg'
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div div className="App">
    <img src={background} alt="background" className="Background" />
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
