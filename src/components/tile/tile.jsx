import React from 'react';
import './tile.css';
import { iconMap } from './iconMap';

const PortfolioTile = ({ project }) => {
  return (
    <div className="portfolio-tile">
      <img
        src= {project.image}
        alt={project.title}
        className="preview-img"
      />

      <h2 className="tile-title">{project.title}</h2>
      <h3 className="tile-subtitle">{project.category}</h3>
      <p className="tile-description">{project.description}</p>

      <div className="tech-icons">
        {project.technologies.map((tech, idx) => (
          <img
            key={idx}
            src={iconMap[tech] || iconMap['GitHub']} // fallback to GitHub
            alt={tech}
            className="tech-icon"
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioTile;
