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
                            <div className="flex">
                                <span className="tech-name">{row.name}</span>
                                <span className="tech-per">
                                    <div className="per-bar">
                                        <div style={{width:(row.mark),backgroundColor:"#007BFF",borderRadius:"20px",
                                    borderTopRightRadius:"0px",borderBottomRightRadius:"0px"}}>
                                        {row.mark}
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
