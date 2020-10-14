import React from 'react';

//img
// import three from '../img/3d.svg';
// import color from '../img/color.svg';
// import web from '../img/web.svg';
// import flight from '../img/flight.svg';
// import game from '../img/game.svg';
// import pet from '../img/pet.svg';
// import sport from '../img/sport.svg';
// import translate from '../img/translate.svg';
// import tub from '../img/tub.svg';


export default function Home() {
    return (
        <article id="about" className="about-area">
            <section className="text-area">
                <h2>About me</h2>
                <p>I am a Front-end software engineer with a background in digital marketing, graphic & 3D design, <span>based in Tokyo</span>.</p>
                <p>My path to software engineering began while working closely with software engineer at my first workplace, where I learned and became interested in front-end engineering and eventually decide to pursue programming full-time.</p>
                <p>Since then, I have built numerous full-stack webapps and websites on Node/Express, leveraging JavaScript framework such as React. I have been working more on the front-end side of applications as this is the field I am particularly excited about.</p>
            </section>
            <section className="icon-area">
                {/* <img src={three} alt="3d"/>
                <img src={color} alt="color"/>
                <img src={web} alt="web"/>
                <img src={flight} alt="flight"/>
                <img src={game} alt="game"/>
                <img src={pet} alt="pet"/>
                <img src={sport} alt="sport"/>
                <img src={translate} alt="translate"/>
                <img src={tub} alt="tub"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="15rem" height="15rem"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.53 21.48C4.26 19.94 1.92 16.76 1.56 13H.06c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72.2-.61.2-.97c0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46s.07-.32.07-.48c0-.36-.06-.68-.18-.96s-.29-.51-.51-.69c-.2-.19-.47-.33-.77-.43C9.11 8.05 8.77 8 8.4 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34.23-.17.38-.22.3-.08.48-.08c.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49s-.14.27-.25.37c-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09h-.77v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4s.1.35.1.57c0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.44-.18-.93-.27-1.47-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27s.84-.43 1.16-.76c.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57s-.42-.87-.74-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12.01 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.45 4.84 18.3 0 12.01 0z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="15rem" height="15rem"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"/><circle cx="14.5" cy="13.5" r="1.5"/><circle cx="18.5" cy="10.5" r="1.5"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="15rem" height="15rem"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="15rem" height="15rem"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="15rem" height="15rem"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,9h10.5v3.5H4V9z M4,14.5 h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z"/></g></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="15rem" height="15rem"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="7" cy="6" r="2"/><path d="M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zM17.42 7.21c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06zm-4 0c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="15rem" height="15rem"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="15rem" height="15rem"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="15rem" height="15rem"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/></svg>
            </section>
        </article>
    )
}