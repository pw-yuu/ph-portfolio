import React from 'react';

import html from '../img/html.svg';
import css from '../img/css.svg';
import javascript from '../img/javascript.svg';
import react from '../img/react.svg';
import redux from '../img/redux.svg';
import node from '../img/node.svg';
import express from '../img/express.svg';
import sass from '../img/sass.svg';
import vue from '../img/vue.svg';
import postgres from '../img/postgres.svg';


export default function Skills() {

    return (
        <article id="skills" className="skills-area">
            <section>
                <h2>Skills & Technologies</h2>
                <p>My main area of work is in Front-ENd development. I also have some experience working with Back-End technologies.</p>
                
                <div>
                    <img src={html} alt="html"/>
                    <img src={css} alt="css"/>
                    <img src={javascript} alt="javascript"/>
                    <img src={react} alt="react"/>
                    <img src={redux} alt="redux"/>
                    <img src={vue} alt="vue"/>
                    <img src={sass} alt="sass"/>
                    <img src={node} alt="node"/>
                    <img src={express} alt="express"/>
                    <img src={postgres} alt="postgres"/>
                </div>
            </section>
        </article>
    )
}