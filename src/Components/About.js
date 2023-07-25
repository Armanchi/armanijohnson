import React from 'react'
import '../styles/about.css'
import about from '../assets/about.jpg'

const About = () => {
  const one = (
    <p>
      Currently I am studying Applications Development with Java
      at Houston Community College{" "} 
      and React at <a href="https://codethedream.org/"> Code the Dream</a>. <br />
      I am interested in creating web pages and applications that 
      can be used to better lives.<br />
      <br/>I have experience creating with:
    </p>
  );
  const two = (
    <p>
      In my free time I enjoy reading, watching a lot of TV and movies, and
      attending concerts. I also enjoy my fair share of books.
    </p>
  );

  const tech_stack = [
    "Javascript",
    "React.js",
    "Node.js",
    "HTML & CSS"
  ];

  const tech_items = tech_stack.map(stack => <li>{stack}</li>);

  return (
    <>
    <div id='about'>
      <div>
        <span className='aboutTitle'>
            about me
        </span>
      </div>
    <div className='about-cont'>
      <div className='Description1'>
      {[one]}
      <ul className='Stack'>
           <li>{tech_items}</li>
      </ul>
      {[two]}
    </div>
    <div className='about-img'>
        <img src={about} alt='abt-img' />
    </div>
    </div>
   
    </div>
    </>
  )
}




export default About;