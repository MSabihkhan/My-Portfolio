import Header from '../components/About/Header';
import About from '../components/About/aboutme';
import React from 'react';
import Techloop from '../components/techloop/technologiesloop';


const Aboutpage = () => {
  return (
  <>
  <Header head = 'ABOUT' />
  <About/>
  <Techloop/>
  </>
  );
};

export default Aboutpage;