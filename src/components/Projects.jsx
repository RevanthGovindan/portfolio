import React, { useState, useRef } from 'react';
import { myWork } from '../constants';

function RowItem(props) {
    const [showDescription, setShowDescription] = useState(false);
    const description = useRef(null);

    return (
        <div>
            <div className="prod mouse-pointer" onClick={(e) => { setShowDescription(!showDescription) }}>
                <div className="prod-name">
                    {props.row.productName}
                </div>
            </div>
            <div ref={description} className="prod-head" style={{
                maxHeight: (showDescription ? description.current.scrollHeight : 0),
                boxShadow: (showDescription ? "" : "none")
            }}>
                <div className={"prod-description text-justify"}>
                    <span><h5>Technologies :</h5></span>
                    {props.row.technologies}<br />
                    <span><h5>Description :</h5></span>
                    {props.row.description}<br />
                    {
                        props.row.url ?
                            <>
                                <span><h5>URL :</h5></span>
                                <a href={props.row.url} target="_blank" rel="noreferrer">{props.row.url}</a>
                            </> :
                            <></>
                    }
                </div>
            </div>
        </div>
    );
}


function Projects() {
    return (
        <div className="work fillwidth fillheight">
            <div className="work-body">
                {
                    myWork.map((row, key) => {
                        return (
                            <>
                                <div className="company-name" key={key}>
                                    <span>{row.company}</span>
                                </div>
                                {
                                    row.projects.map((project, proKey) => {
                                        return (
                                            <>
                                                <div className="prod-row" key={proKey}>
                                                    <RowItem row={project} />
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Projects;
