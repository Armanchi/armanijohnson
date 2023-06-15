import React from 'react'
import '../styles/about.css'

const About = () => {
  const one = (
    <p>
      Currently I am studying Computer Science
      at <a href="https://www.hccs.edu/">Houston Community College</a>{" "} 
      and React at <a href="https://codethedream.org/"> Code the Dream</a>. <br />
      I am interested in any type of web development where I can 
      use problem solving creatively.<br />
    </p>
  );
  const two = (
    <p>
      In my free time I enjoy reading, watching art history video essays on YouTube, and
      attending concerts and conventions.
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
    <div className='about'>
      <div>
        <span className='aboutTitle'>
            About me
        </span>
      </div>
    <div>
      <div className='Description1'>
      {[one]}
      <ul className='Stack'>
           <li>{tech_items}</li>
      </ul>
      {[two]}
    </div>
    </div>
    </div>
    </>
  )
}




export default About;