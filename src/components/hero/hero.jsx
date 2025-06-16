import React from 'react';
import './hero.css'
import linkedin from '../../assets/logos/linkedin.svg';
import githib from '../../assets/logos/github.svg'
const Hero = () => {
  return (
<div className="hero">

<div class="backdrop-container">
  <div className='fade-mask'>
  <div className="backdrop-left">WEB DEVELOPER &#183; AI ENGINEER &#183; PROMPT ENGINEERING &#183; WEB DEVELOPER &#183; AI ENGINEER &#183; PROMPT ENGINEERING &#183;  </div>
  <div className="backdrop-right">WEB DEVELOPER &#183; AI ENGINEER &#183; PROMPT ENGINEERING</div>
</div>
</div>    

  <h3 className="intro">Hey There I'm</h3>
  <h1 className="name">Sabih</h1>
  <p className="desc">Currently Studying Computer Science and AI</p>
  <div className="icons">
    <a href="https://www.linkedin.com/in/sabih-khan-a329a1228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app 
"><img src={linkedin} alt="" /></a>
    <a href="https://github.com/MSabihkhan"><img src={githib} alt="" /></a>
  </div>
  </div>
  );
};

export default Hero;
