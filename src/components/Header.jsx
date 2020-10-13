import React from 'react';

//img
import home from '../img/home.svg';
import about from '../img/about.svg';
import skills from '../img/skills.svg';
import work from '../img/work.svg';
import linkedin from '../img/linkedin.svg';
import github from '../img/github.svg';

export default function Header() {
    return (
        <header>
            <h3><span>p</span>h</h3>
            <nav>
                <a href="#home" className>
                    <img src={home} alt="home"/>
                </a>
                <a href="#about">
                    <img src={about} alt="about"/>
                </a>
                <a href="#skills">
                    <img src={skills} alt="skilss"/>
                </a>
                <a href="#work">
                    <img src={work} alt="work"/>
                </a>
            </nav>
            <ul>
                <li>
                <a href="https://www.linkedin.com/in/philippe-huynh-0a7151109/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin"/>
                </a>
                </li>
                <li>
                <a href="https://github.com/pw-yuu" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github"/>
                </a>
                </li>
            </ul>
        </header>
    )
}