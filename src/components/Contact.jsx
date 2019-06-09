import React, { useState } from 'react';
import { db } from '../firebase';

function Contact() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    function onSendClick() {
        if (name === "" || number === "" || message === "") {
            alert("Fields should not be empty!");
        } else {
            db.collection("contacts").add({
                name: name,
                number: number,
                message: message
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        }
    }

    return (
        <div className="container contact fillwidth fillheight">
            <div className="headers">
                <span>Contact Me</span>
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
                    <div>
                        <button className="btn btn-primary" onClick={() => { onSendClick() }}>
                            Send
                        </button>
                    </div>
                </div>
                <div className="social-media">
                    <div>
                        <a href="https://www.linkedin.com/in/revanth-g-a15468126" target="_blank"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div>
                        <a href="https://github.com/RevanthGovindan" target="_blank"><i className="fa fa-github"></i></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/revanth.kumar.92505" target="_blank"><i className="fa fa-facebook-official"></i></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/revanth____" target="_blank"><i className="fa fa-instagram"></i></a>
                    </div>
                    <div>
                        <a href="https://www.quora.com/profile/Revanth-65" target="_blank"><i className="fa fa-quora"></i></a>
                    </div>
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=919488808412" target="_blank"><i className="fa fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
