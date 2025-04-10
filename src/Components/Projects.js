import React from 'react';
import ProjectBox from './ProjectBox';
import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <a href="https://fooddeliveryappreactjs-1.onrender.com/" target="_blank" rel="noopener noreferrer">
          <ProjectBox projectPhoto={a} projectName="Food Application" />
        </a>
        <a href="https://hotelbookingfront-next.vercel.app/" target="_blank" rel="noopener noreferrer">
          <ProjectBox projectPhoto={b} projectName="Hotel Management" />
        </a>
        <a href="https://timetable-yub1.onrender.com/" target="_blank" rel="noopener noreferrer">
          <ProjectBox projectPhoto={c} projectName="Time Table Website" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
