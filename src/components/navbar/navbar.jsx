import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='header'>
      <Link className='links' to="/">Home</Link>
      <Link className='links' to="/about">About</Link>
      <Link className='links' to="/projects">Projects</Link>
      <Link className='links' to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;