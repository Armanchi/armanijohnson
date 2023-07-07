import React from "react";
import "../styles/Intro.css";
import Typewriter from "typewriter-effect";
import { BsFillChatSquareFill } from "react-icons/bs";



const Intro = () => {
    return(
        <div className="Intro">
        <div className="main-container">
        <div className="typewriter">
        <Typewriter onInit={(typewriter)=> {typewriter
        .typeString("Hi, I'm Armani.")
        .pauseFor(1000)
        .start();
        }}
        />
        </div>
        <h2 className="subTitle">Software Developer.</h2>
        <div className="intro-desc">
            <div>
                <button className="intro-button"><a id = "an" href = "mailto:armanijohnson0104@gmail.com">{<BsFillChatSquareFill />} Hi there!</a></button>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Intro;
