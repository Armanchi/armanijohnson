import React from 'react'
import '../styles/navbar.css'
import { Sidenav } from "rsuite";
import { EmailRounded } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';

const Navbar = () => {
    const links = [
        <a href='#intro'>home</a>,
        <a href='#about'>about</a>,
        <a href='#projects'>projects</a>
    ];
  return (
    <div className="nav">
          <Sidenav
            defaultOpenKeys={["3", "4"]}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                    <div>{link}</div>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
       
        <div className="logos" href="/">
          <a href="mailto:armanijohnson0104@gmail.com">
            <EmailRounded style={{ fontSize: 20 }}></EmailRounded>
          </a>
          <a href="https://github.com/Armanchi">
            <GitHub style={{ fontSize: 19 }}></GitHub>
          </a>
          <a href="https://www.linkedin.com/in/armani-d-johnson/">
            <LinkedIn style={{ fontSize: 21 }}></LinkedIn>
          </a>
        </div>
      </div>
    );
  }



export default Navbar;