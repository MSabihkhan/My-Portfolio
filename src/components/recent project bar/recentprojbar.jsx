import './recentprojbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
const RecentProjbar = () => {
  return (
    <div className="recentbar" >
        <h2 className='Recent_text'>RECENT PROJECTS</h2>
        <Link className='seealllink' to="/projects">See all &#8594;</Link>
    </div>
  );
};

export default RecentProjbar;