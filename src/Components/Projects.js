import React from 'react';
import '../styles/projects.css';
import { FiGithub } from 'react-icons/fi';
import { BsFolderFill } from 'react-icons/bs';

const Projects = () => {
  const projects = {
    "Todo List": {
      desc:
        "A todo list application created for Code the Dream React course with React",
      techStack: "React",
      link: "https://github.com/Armanchi/react-cockatoo"
    },
    "Volunteer App": {
      desc:
        "A volunteer application created for Code the Dream with a React front end and a Node/Express back end",
      techStack: "React, Node.js",
      link: "https://github.com/Code-the-Dream-School/volunteer-back",
      open: "https://volunteerboard-d9r0.onrender.com/"
    },
    "MyMusicApp": {
      desc:
        "A music application used for streaming a user's favorite playlists created with React",
      techStack: "React",
      link: "https://github.com/Armanchi/MyMusicApp"
    }
  };

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">projects</span>
        <div className="link-container">
          <a href="https://github.com/Armanchi" className="hover-underline-animation">
            view my archive
          </a>
        </div>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <li key={i} className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <BsFolderFill className="folder" />
                </div>
                <a href={projects[key].link} className="git-Link">
                  {<FiGithub />}
                </a>
              </div>

              <div className="card-title">{key}</div>
              <div className="card-desc">{projects[key].desc}</div>
              <footer>
                <div className="card-tech">{projects[key].techStack}</div>
              </footer>
            </li>
          ))}
        </ul>
        {/* <ShowMore> */}
        {/* //TO DO: Figure out how to create a working show more/less button */}
        {/* </ShowMore> */}
      </div>
    </div>
  );
};

export default Projects;