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
                <p className='aboutcontent' >I'm a Computer Science student at FAST National University, deeply passionate about building intelligent, full-stack applications that enhance productivity and automate workflows. I’m currently focused on integrating AI models with tools like Notion to create structured, ReAct-based agents capable of taking notes, generating code blocks, and managing structured knowledge across subjects like DSA, Algorithms, and AI.My tech stack includes React, Node.js, Express, SQL Server, and Google’s Gemini LLMs, and I’ve recently built a voice-controlled desktop assistant using Python and Gemini API. I'm also developing a portfolio of intelligent tools—such as a Notion-connected learning agent—that leverages LlamaIndex, ChromaDB, and function-calling APIs for dynamic course querying, note-taking, and summarization.Apart from backend automation, I have experience in UI/UX design with Figma, and I’ve cloned production-grade layouts like the Tesla homepage. I also enjoy building low-level logic games like Sudoku in Assembly and Klondike Solitaire in C++, showcasing my problem-solving roots.I thrive in collaborative, fast-paced environments and am always looking to contribute to impactful, AI-powered projects. Whether you need an LLM agent developer, full-stack engineer, or someone to bridge your product’s backend and user experience, I’m here to collaborate and innovate. Let’s build something intelligent together.</p>
                <a href={Resume} download><button className='Resumebutton'>Download Resume</button></a>
            </div>
        </div>
    );
};

export default About;