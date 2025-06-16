import React from 'react';
import './projectdetail.css';
import { iconMap } from '../tile/iconMap'; // adjust the path as needed
import ME from '../../assets/logos/Me2.jpg'


const ProjectDetail = ({ project }) => {
  return (
    <>
    <div className='Detailview'>
    <div className='Image'>
        <img src={ME} alt="" />
    </div>
    <div className='Highlights'>
        <h1>Portolio</h1>
        <h3>Frontend</h3>
        <p>This project is a portfolio website developed using React.js. The website is designed to showcase the user's skills, projects, and services. It features a modern and clean design with smooth navigation and responsive layout.</p>
    
    <div className='Stack-and-buttons'>
        <h2>
            Tech Stack
        </h2>
        <div className="stack-icons">
              {project.techStack.map((tech, index) => (
                <img
                  key={index}
                  src={iconMap[tech] || iconMap['GitHub']} // fallback to GitHub icon or some default
                  alt={tech}
                  title={tech}
                />
              ))}
        </div>
        <div className="buttons">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    </div>
    </div>
    </div>
    <div className="features">
        <h3>Main Features</h3>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}><strong>{feature.title}:</strong><br />{feature.description}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectDetail;
