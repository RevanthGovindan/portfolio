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
                        <span>Revanth G</span>
                    </div>
                </div>
                <div className="description">
                    <span style={{ textAlign: "justify" }}>
                        Hi, I'm full stack developer, I enjoy building applications from scratch,I love to
                        solve complex problems in <a href="https://www.hackerrank.com/Revanth_G" target="_blank"
                        rel="noopener noreferrer">
                            Hackerrank</a> and <a href="http://app.e-box.co.in" target="_blank"
                            rel="noopener noreferrer">Ebox</a> platforms.
                        I can proudly say that leadership is my best quality.
                        My hobbies are hearing musics, watching movies and riding in bike.
                    </span><br />
                    <span className="flex" onClick={() => props.changeTab()}>
                        <a>Let's discuss</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
