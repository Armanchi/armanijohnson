import React from 'react';
import '../styles/about.css';
import about from '../assets/about.jpg';

const About = () => {
  const one = (
    <p>
      Currently, I am studying Computer Science
      at Houston Community College{" "} 
      and React at <a href="https://codethedream.org/">Code the Dream</a>. <br />
      I am interested in creating web pages and applications that 
      can be used by anyone to better lives. I love that coding requires you to
      continually expand your knowledge.<br />
      <br/>
      I have experience working with:
    </p>
  );

  const two = (
    <p>
      In my free time, I enjoy reading science fiction or mystery books, watching a lot of TV and movies, and
      attending concerts. 
    </p>
  );

  const tech_stack = [
    "Javascript",
    "React.js",
    "Node.js",
    "HTML & CSS"
  ];

  const tech_items = tech_stack.map((stack, i) => <li key={i}>{stack}</li>);

  return (
    <div id='about'>
      <div>
        <span className='aboutTitle'>
            about me
        </span>
      </div>
      <div className='about-cont'>
        <div className='Description1'>
          {one}
          <ul className='Stack'>
            {tech_items}
          </ul>
          {two}
        </div>
        <div className='about-img'>
          <img src={about} alt='abt-img' />
        </div>
      </div>
    </div>
  );
};

export default About;