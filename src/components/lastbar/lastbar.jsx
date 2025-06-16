import React from 'react';
import './lastbar.css'
import library from '../../assets/logos/LOGO.svg'
const LastBar = () => {
  return (
    <div className="lastbar">
        <div className='Left-side'>
            <img className= "icon" src={library} alt="" />
        </div>
        <div className='Right-side'>
            <h1 className='tagline'>Turning ideas into <span className='S'>code, dreams </span>into reality.</h1>
        </div>
    </div>
  );
};

export default LastBar;