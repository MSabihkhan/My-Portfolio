import React from 'react';
import './getintouch.css'
import linkedin2 from '../../assets/logos/linkedin2.svg'
import github from '../../assets/logos/github.svg'
import instagram  from '../../assets/logos/instagram.svg'
import { Link } from 'react-router-dom';
const Getintouch = () => {
  return (
    <div className='GetinTouch'>
        <div className='left-part'>
            <h1 className='GIT'>Get in Touch</h1>
            <p className='ContentofGIT'>If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas .</p>
        </div>
        <div className='right-part'>
            <p className='FMO'>Follow me on</p>
            <div className="icons">
                <a href="https://www.linkedin.com/in/sabih-khan-a329a1228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><img src={linkedin2} alt="" /></a>
                <a href="https://www.instagram.com/m.sabihkhan?igsh=MWl1NmQxaHN0NGQybw=="><img src={instagram} alt="" /></a>
                <a href="https://github.com/MSabihkhan"><img src={github} alt="" /></a>
            </div>
            <Link to ="/contact">
            <button className='contact-me'>Contact Me</button>
            </Link>
        </div>
    </div>
  );
};

export default Getintouch;
