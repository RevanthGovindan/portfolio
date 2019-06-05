import React from 'react';
import user from '../assets/user.jpeg';

function Home() {
    return (
        <div className="fillwidth">
            <div className="headers">
                <span>Home</span>
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
                    <span>
                        Hi, I'm full stack developer, I enjoy building applications from scratch,I love to
                        solve complex problems and always I will be commited to work.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
