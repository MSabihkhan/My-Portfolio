import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import About from './pages/aboutpage';
import Projects from './pages/projectspage';
import Contact from './pages/Contact';
import Projectdetailpage from './pages/Projectdetailpage';
import Navbar from './components/navbar/navbar';
import LastBar from './components/lastbar/lastbar';

const dummyProject = {
  title: 'Portfolio',
  type: 'Frontend',
  previewImage: 'https://via.placeholder.com/400x250?text=Portfolio+Preview', // Replace with a local asset if needed
  description:
    'This project is a portfolio website developed using ReactJS. It showcases my skills, projects, and services. It features a modern and clean design with smooth navigation and responsive layout.',
  techStack: ['React', 'JavaScript', 'CSS', 'Figma'],
  demoLink: 'https://example.com/demo',
  githubLink: 'https://github.com/example/portfolio',
  features: [
    {
      title: 'Responsive Design',
      description:
        'The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.',
    },
    {
      title: 'Modern UI/UX',
      description:
        'The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography throughout the site.',
    },
  ],
};


function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page" element={<Projectdetailpage project = {dummyProject}/>} />
      </Routes>
      <LastBar/>
    </Router>
  );
}

export default App; // ✅ This line is required