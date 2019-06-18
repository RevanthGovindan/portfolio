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
                        <span>Revanth G </span>
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
                        I can proudly say that leadership is my best quality.
                        My hobbies are listening to musics, watching movies, riding and travelling.
                    </div><br />
                    <span className="flex contact-link" onClick={() => props.changeTab()}>
                        Let's discuss
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
