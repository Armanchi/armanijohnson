import React from "react";
import Intro from "./Components/Intro";
import './Shared/globalStyles.css'
import About from "./Components/About";
import background from './assets/background.jpg'

function App() {
  return (
    <>
    <img src={background} alt="background" className="Background" />
    <div className="App">
      <Intro />
      <About />
    </div>
    </>
  );
}

export default App;
