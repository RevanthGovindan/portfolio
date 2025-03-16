import React from 'react';
import user from '../assets/user.jpeg';

function Home(props) {
    return (
        <div className="fillwidth home-container">
            <div className="headers">
                <span>Myself</span>
            </div>
            <div className="home">
                <div className="my-name">
                    <div className="img-body">
                        <img className="my-image" src={user} alt="Avatar" />
                    </div>
                    <div className="name-body">
                        <span className="name-text">Revanth G </span>
                        {/* <span>B.Tech - IT</span> */}
                    </div>
                </div>
                <div className="description">
                    <div>
                        Thank you for visiting, I'm a passionate full-stack developer who loves building applications from scratch and solving complex
                        problems on platforms like
                        <a style={{marginLeft:5}} href="https://www.hackerrank.com/Revanth_G" target="_blank" rel="noopener noreferrer">Hackerrank</a>, 
                        <a style={{marginLeft:5}} href="http://app.e-box.co.in" target="_blank" rel="noopener noreferrer">Ebox</a> and 
                        <a style={{marginLeft:5}} href="https://leetcode.com/u/revanthji14/" target="_blank" rel="noopener noreferrer">Leetcode</a>. 
                        I primarily work with Golang and JavaScript,but I don't restrict myself to any language.
                        I focus on writing reusable, efficient code. Leadership and responsibility are my strongest qualities, 
                        and I take pride in driving projects forward. Beyond coding,
                        I'm keen on exploring personal finance and investments. In my free time,
                        I enjoy listening to music, watching movies, and riding.
                    </div>
                    <span className="flex contact-link" onClick={() => props.changeTab()}>
                        Let's discuss
                    </span>
                    <br />
                    <span className="flex contact-link">
                        <a href="https://drive.google.com/file/d/1ParF-IS6d5LPlzvdUcF9-_mByeYh9MIi/view?usp=sharing"
                            target="_blank" rel="noreferrer">
                            Download My Resume
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
