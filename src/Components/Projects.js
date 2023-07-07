import React from 'react';
import '../styles/projects.css'
import { BsFolderFill } from "react-icons/bs";

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
    <>
      <div className='Projects'>
        <span className='ProjectsTitle'>Projects</span>
      </div>
      <div className='projectContainer'>
        <ul className='projectList'>
          {Object.entries(projects).map(([title, project]) => (
            <li className='projectCard' key={title}>
              <div className='projectHeader'>
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='projectTitle'> <BsFolderFill size={20} /> {title}</a>
              </div>
              <div className='projectDescription'>{project.desc}</div>
              <div className='projectTech'>{project.techStack}</div>
              {/* <div><BsFolderFill />{project.open}</div> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;