import React from 'react';
import './about.css'
import Me from '../../assets/logos/Me2.jpg'
import Resume from '../../assets/Resume/Resume.pdf'
const About = () => {
    return(
        <div className='AboutMe'>
            <div className='imagesec'>
                <img src={Me} alt="" />
            </div>
            <div className='contentsec'>
                <p className='aboutcontent' >I'm a Computer Science student at SRM Institute of Science and Technology. My passion lies in building user-friendly solutions that enhance overall user experiences. I am currently focused on React Native, Expo, Firebase, and React, leveraging these technologies to create responsive and functional applications. One of my ongoing projects is Rescue Paws, a mobile app designed to facilitate the rescue and adoption of stray and pet dogs. The app will soon be published on the Play Store and App Store, and it incorporates AI-driven features to guide users through the adoption process. In addition to app development, I’ve led the design and development of platforms like the GitHub Community SRM website, which serves as an all-in-one platform for the community. I’ve also organized and managed events such as hackathons and workshops, mentoring others in UI/UX and graphic design. I thrive in Agile Scrum environments and believe collaboration and teamwork are essential to delivering successful projects. I’m always eager to work on impactful projects that challenge me to grow while also contributing to meaningful outcomes. So, whether you're looking for a dedicated developer, a creative designer, or a collaborative team member, I’m here to help bring ideas to life. Let’s connect and create innovative solutions together!</p>
                <a href={Resume} download><button className='Resumebutton'>Download Resume</button></a>
            </div>
        </div>
    );
};

export default About;