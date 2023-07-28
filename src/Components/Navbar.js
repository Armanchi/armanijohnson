import React from 'react';
import '../styles/navbar.css';
import { Sidenav } from 'rsuite';
import { EmailRounded, LinkedIn, GitHub } from '@mui/icons-material';

const Navbar = () => {
  const links = [
    <a key="home" href="#Intro">home</a>,
    <a key="about" href="#about">about</a>,
    <a key="projects" href="#projects">projects</a>,
    <a key="contact" href="#contact">contact</a>
  ];

  return (
    <div className="nav">
      <Sidenav defaultOpenKeys={["3", "4"]} appearance={"subtle"}>
        <Sidenav.Body>
          <div className="sidebar-links">
            {links.map((link, i) => (
              <div key={i}>{link}</div>
            ))}
          </div>
          
          <div className="logos">
            <a href="https://www.linkedin.com/in/armani-d-johnson/">
              <LinkedIn style={{ fontSize: 21 }} />
            </a>
            <a href="https://github.com/Armanchi">
              <GitHub style={{ fontSize: 19 }} />
            </a>
            <a href="mailto:armanijohnson0104@gmail.com">
              <EmailRounded style={{ fontSize: 20 }} />
            </a>
          </div>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default Navbar;