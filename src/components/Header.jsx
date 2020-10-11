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
            <h1><span>p</span>h</h1>
            <nav>
                <a href="" className>
                    <img src={home} alt="home"/>
                </a>
                <a href="">
                    <img src={about} alt="about"/>
                </a>
                <a href="">
                    <img src={skills} alt="skilss"/>
                </a>
                <a href="">
                    <img src={work} alt="work"/>
                </a>
            </nav>
            <ul>
                <li>
                <a href="">
                    <img src={linkedin} alt="linkedin"/>
                </a>
                </li>
                <li>
                <a href="">
                    <img src={github} alt="github"/>
                </a>
                </li>
            </ul>
        </header>
    )
}