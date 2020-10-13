import React from 'react';


//img
import pic from '../img/phi.jpg';

export default function Home() {
    return (
        <article id="home" className="home-area">
            <img src={pic} alt="profile_pic"/>
            <section>
                <h1>Hi, I'm Philippe.<br/>
                    Front-End Developer
                </h1>
                <p>@ Tokyo, JP</p>
                <a href="mailto:philippe.huynh91@gmail.com">
                    <button>Contact me</button>
                </a>
            </section>
        </article>
    )
}