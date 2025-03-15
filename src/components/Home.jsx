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
                    <div style={{ textAlign: "justify"}}>
                        Hi, I'm full stack developer, I enjoy building applications from scratch,I love to
                        solve complex problems in <a href="https://www.hackerrank.com/Revanth_G" target="_blank"
                            rel="noopener noreferrer">
                            Hackerrank</a> and <a href="http://app.e-box.co.in" target="_blank"
                            rel="noopener noreferrer">Ebox</a> platforms.
                I primarily use Javascript(with frameworks) and Java,also I will not restrict me to any language,
                I write reusable codes. I can proudly say that leadership and responsibility is my best quality.
                My hobbies are listening to musics, watching movies and riding.
                    </div><br />
                    <span className="flex contact-link" onClick={() => props.changeTab()}>
                        Let's discuss
                    </span>
                    <br />
                    <span className="flex contact-link">
                        <a href="https://drive.google.com/file/d/1ParF-IS6d5LPlzvdUcF9-_mByeYh9MIi/view?usp=sharing"
                            target="_blank">
                            Download My Resume
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
