import React from 'react';
import PortfolioTile from '../tile/tile';
import './homegrid.css';
import solitaire from '../../assets/Projects-images/Solitaireimg.png'
import SUDUKO from '../../assets/Projects-images/SUDUKO.png'
import Portfolio from '../../assets/Projects-images/Portifolio.png';

const projects = [
    {
    title: 'Solitaire Game Simulation',
    category: 'DSA & C++',
    description: 'Console-based Solitaire game built in C++ as part of my Data Structures and Algorithms course. Implemented stacks, lists, and object-oriented design to simulate gameplay with undo functionality and validation.',
    technologies: ['C++','GitHub'],
    image: solitaire // Replace with actual filename if available
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
  }
];

const HomeGrid = () => {
  return (
    <div className="Home-grid">
      {projects.map((project, idx) => (
        <PortfolioTile key={idx} project={project} />
      ))}
    </div>
  );
};

export default HomeGrid;
