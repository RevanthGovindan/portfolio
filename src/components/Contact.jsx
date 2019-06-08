import React, { useState } from 'react';
import { db } from '../firebase';

function Contact() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    function onSendClick() {

    }

    return (
        <div className="container contact fillwidth fillheight">
            <div className="headers">
                <span>Contact</span>
            </div>
            <div className="contact-body">
                <div className="inputs">
                    <div className="name-input">
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="number-input">
                        <input type="text" placeholder="Email/Number" onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className="message-input">
                        <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>
                <button onClick={() => { onSendClick() }}>
                    click
                </button>
            </div>
        </div>
    );
}

export default Contact;
