import React from "react";
import Intro from "./Components/Intro";
import './Shared/globalStyles.css'
import About from "./Components/About";
import background from './assets/background.jpg'
import Projects from "./Components/Projects";
// import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <img src={background} alt="background" className="Background" />
    <div className="App">
      <Intro />
      <About />
      <Projects />
      {/* <Footer /> */}
    </div>
    </>
  );
}

export default App;
