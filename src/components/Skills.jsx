import React from 'react';
import { skills } from '../constants';

function Skills() {
    return (
        <div className="skills fillwidth fillheight">
            <div className="headers">
                <span>My Skills</span>
            </div>
            <div className="skills-body">
                {
                    skills.map((row, key) => {
                        return (
                            <div className="flex" key={key}>
                                <span className="tech-name">{row.name}</span>
                                <span className="tech-per">
                                    <div className="per-bar">
                                        <div style={{
                                            width: (row.mark),
                                            backgroundColor: "#007BFF",
                                            borderRadius: "20px",
                                            borderTopRightRadius: "20px",
                                            borderBottomRightRadius: "20px",
                                        }}>
                                           <p className="percent-text">{row.mark}</p> 
                                        </div>
                                    </div>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Skills;
