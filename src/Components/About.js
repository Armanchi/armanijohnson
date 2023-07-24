import React from 'react'
import '../styles/about.css'
import about from '../assets/about.jpg'

const About = () => {
  const one = (
    <p>
      Currently I am studying Applications Development with Java
      at <a href="https://www.hccs.edu/">Houston Community College</a>{" "} 
      and React at <a href="https://codethedream.org/"> Code the Dream</a>. <br />
      I am interested in any type of web development where I can 
      use problem solving creatively.<br />
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