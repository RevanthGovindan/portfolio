import React from 'react';
import user from '../assets/user.jpeg';

function Home() {
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
                    <span style={{textAlign:"justify"}}>
                        Hi, I'm full stack developer, I enjoy building applications from scratch,I love to
                        solve complex problems in <a href="">Hackerrank</a> and <a href="">Ebox</a> platforms.
                        I can say leadership is my best quality.
                        My hobbies are hearing musics, watching movies and riding in bike.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
