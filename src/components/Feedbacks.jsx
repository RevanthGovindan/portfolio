import React, { useState } from 'react';
import { feedback } from '../constants';

function Feedbacks() {
    const [activeOne, setActive] = useState(0);
    const totalLength = feedback.length;
    return (
        <div className="feedback fillwidth fillheight">
            <div className="headers">
                <span>Feedbacks</span>
            </div>
            <div className="flex feedback-body">
                <button className="back-btn" disabled={activeOne === 0}
                    onClick={() => { setActive(activeOne - 1) }}>
                    <span className="glyphicon glyphicon-menu-left"></span>
                </button>
                <div className="feedback-description">
                    <div className="review">{feedback[activeOne].feedback}</div>
                    <div className="by">- {feedback[activeOne].by}</div>
                    <div className="by-position">{feedback[activeOne].position}</div>
                </div>
                <button className="forward-btn" disabled={activeOne === (totalLength - 1)}
                    onClick={() => { setActive(activeOne + 1) }}>
                    <span className="glyphicon glyphicon-menu-right"></span>
                </button>
            </div>
        </div>
    );
}

export default Feedbacks;
