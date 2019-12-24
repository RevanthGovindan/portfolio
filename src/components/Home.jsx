import React from 'react';
import user from '../assets/user.jpeg';

function Home(props) {
    return (
        <div className="fillwidth">
            <div className="headers">
                <span>My Self</span>
            </div>
            <div className="home">
                <div className="my-name">
                    <div className="img-body">
                        <img className="my-image" src={user} alt="Avatar" />
                    </div>
                    <div>
                        <span className="name-text">Revanth G </span>
                        {/* <span>B.Tech - IT</span> */}
                    </div>
                </div>
                <div className="description">
                    <div style={{ textAlign: "justify" }}>
                        Hi, I'm full stack developer, I enjoy building applications from scratch,I love to
                        solve complex problems in <a href="https://www.hackerrank.com/Revanth_G" target="_blank"
                            rel="noopener noreferrer">
                            Hackerrank</a> and <a href="http://app.e-box.co.in" target="_blank"
                                rel="noopener noreferrer">Ebox</a> platforms.
                I primarily use Javascript(with frameworks) and Java,but I'm
                ready to work on any language, I write reusable codes.
I can proudly say that leadership is my best quality.
My hobbies are listening to musics, watching movies and riding.
                    </div><br />
                    <span className="flex contact-link" onClick={() => props.changeTab()}>
                        Let's discuss
                    </span>
                    <br />
                    <span className="flex contact-link">
                        <a href="https://docs.google.com/document/u/0/d/1FtLL3BobScU0N0h4uAwfyJ4I59FXX_TrUfImcu0zOFc/export?format=pdf"
                            target="_blank">
                            Download me
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
