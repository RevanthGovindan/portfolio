import React, { useState } from 'react';
import { db, fbPerformance } from '../firebase';

function Contact() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    function onSendClick() {
        if (name === "" || number === "" || message === "") {
            alert("Fields should not be empty!");
        } else {
            let contact = fbPerformance.trace("CONTACT");
            contact.start();
            db.collection("contacts").add({
                name: name,
                number: number,
                message: message
            })
                .then(function () {
                    contact.stop();
                    setName("");
                    setNumber("");
                    setMessage("");
                    alert("I will contact you soon!")
                })
                .catch(function (error) {
                    setName("");
                    setNumber("");
                    setMessage("");
                    alert("Error Occured, Please try after some time...")
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
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="number-input">
                        <input type="text" placeholder="Email/Number" onChange={(e) => setNumber(e.target.value)} value={number} />
                    </div>
                    <div className="message-input">
                        <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message} />
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => { onSendClick() }}>
                            Send
                        </button>
                    </div>
                </div>
                <div className="social-media">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/revanth-g-a15468126" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://github.com/RevanthGovindan" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.facebook.com/revanth.kumar.92505" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook-official"></i></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.instagram.com/revanth____" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram"></i></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.quora.com/profile/Revanth-65" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-quora"></i></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://api.whatsapp.com/send?phone=919488808412" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
