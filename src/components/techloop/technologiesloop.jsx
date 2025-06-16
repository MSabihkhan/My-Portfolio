import React from 'react';
import cplusplus from '../../assets/logos/cplusplus.svg';
import html from '../../assets/logos/html-5.svg';
import css from '../../assets/logos/css-3.svg';
import mongodb from '../../assets/logos/mongodb.svg';
import nodejs from '../../assets/logos/nodejs.svg';
import python from '../../assets/logos/python.svg';
import react from '../../assets/logos/react.svg';
import sql from '../../assets/logos/sql.svg';
import figma from '../../assets/logos/figma.svg';
import javascript from '../../assets/logos/javascript.svg';
import github from '../../assets/logos/github.svg';
import linkedin from '../../assets/logos/linkedin.svg';
import instagram from '../../assets/logos/instagram2.svg';
import './tech.css';
const Techloop = () => {
    return(
<div className='outer-container'>
    <div className='skill-container'>
        <h1>Skills</h1>
        <div className='fade-wrapper'>
            <div className="scroll-container">
                <div className="scroll-track">
                    <img src={cplusplus} alt="" />
                    <img src={javascript} alt="" />
                    <img src={figma} alt="" />
                    <img src={react} alt="" />
                    <img src={nodejs} alt="" />
                    <img src={sql} alt="" />
                    <img src={mongodb} alt="" />
                    <img src={python} alt="" />
                    <img src={css} alt="" />
                    <img src={html} alt="" />
                    <img src={cplusplus} alt="" />
                    <img src={javascript} alt="" />
                    <img src={figma} alt="" />
                    <img src={react} alt="" />
                    <img src={nodejs} alt="" />
                    <img src={sql} alt="" />
                    <img src={mongodb} alt="" />
                    <img src={python} alt="" />
                    <img src={css} alt="" />
                    <img src={html} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className='social-container'>
        <img src={linkedin} alt="" />
        <img src={github} alt="" />
        <img src={instagram} alt="" />
    </div>
</div>
    );
};
export default Techloop;