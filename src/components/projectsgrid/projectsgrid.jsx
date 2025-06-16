import React from 'react';
import PortfolioTile from '../tile/tile';
import './projectsgrid.css';
import solitaire from '../../assets/Projects-images/Solitaireimg.png'
import ssimg from '../../assets/Projects-images/stylesync.jpg'
import SUDUKO from '../../assets/Projects-images/SUDUKO.png'
import Portfolio from '../../assets/Projects-images/Portifolio.png';
import unishare from '../../assets/Projects-images/unishare.jpg'
const projects = [
  {
  title: 'Solitaire Game Simulation',
  category: 'DSA & C++',
  description: 'Console-based Solitaire game built in C++ as part of my Data Structures and Algorithms course. Implemented stacks, lists, and object-oriented design to simulate gameplay with undo functionality and validation.',
  technologies: ['C++','GitHub'],
  image: solitaire // Replace with actual filename if available
},
  {
  title: 'StyleSync – AI Wardrobe App',
  category: 'Startup Pitch',
  description: 'Pitched an AI-powered wardrobe management app at FAST Business Club’s Ideathon. Focused on personal style, sustainability, and digital closet collaboration.',
  technologies: [],
  image: ssimg // Replace with actual image filename
},
  {
  title: 'Interactive Sudoku Game',
  category: 'Game Development',
  description: 'Feature-rich Sudoku game with mouse-controlled input, hints, puzzle validation, and immersive graphics built as a semester project.',
  technologies: [],
  image: SUDUKO // Replace with the actual image filename
},
  {
  title: 'Personal Portfolio Website',
  category: 'Full Stack Web',
  description: 'Built a responsive portfolio website using React and Node with animations, hover effects, and a Gmail-integrated contact form.',
  technologies: ['React', 'Node.js', 'HTML', 'CSS', 'Figma','Github'],
  image: Portfolio // Replace with your actual screenshot filename
},
  {
  title: 'Unishare – Classified Ads Platform',
  category: 'Full Stack Web',
  description: 'A React and Node-based platform for university students to rent/lend resources, with real-time search, category filters, email alerts, and secure auth using bcrypt and SQL procedures.',
  technologies: ['React', 'Node.js', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  image: unishare // Replace with your actual screenshot filename
}
];

const ProjectsGrid = () => {
  return (
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <PortfolioTile key={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
