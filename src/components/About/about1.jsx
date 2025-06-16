import React from 'react';
import './about1.css'
import { Link } from 'react-router-dom';
const About1 = () => {
  return (
    <div className='About1'>
    <p className='about-text'>About</p>
    <p className='about-content'>Hi there! I'm Muhammad Sabih-ud-din Khan, a passionate Computer Science student at the National University of Computer and Emerging Sciences, with a knack for turning innovative ideas into functional solutions. I specialize in full-stack development, AI-powered applications, and low-level programming, with expertise in Python, C++, JavaScript, React, Node.js, and SQL. My projects, like the voice-controlled assistant and the classified ads platform, reflect my love for blending creativity with technical precision. Beyond coding, I enjoy ideating sustainable tech solutions, leading teams, and diving into UI/UX design. Let's collaborate and build something extraordinary!</p>
    <Link to = '/about'>
    <button className='about-more-button'>More..</button>
    </Link>
    </div>
  );
};

export default About1;
