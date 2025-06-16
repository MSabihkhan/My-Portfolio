import React from 'react';
import './about.css'
const Header = (props) => {
  return (
    <div className = 'about-header' >
        <h1 className='about'>{props.head}</h1>
    </div>
  );
};
export default Header ;
