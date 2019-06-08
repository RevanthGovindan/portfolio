import React from 'react';
import { myWork } from '../constants';

function Work() {
    return (
        <div className="work fillwidth fillheight">
            <div className="headers">
                <span>My Work</span>
            </div>
            <div className="work-body">
                <div className="flex">
                    <div className="prod-name work-header">Product Name</div>
                    <div className="tech-name work-header">Technology</div>
                    <div className="desc-name work-header">Description</div>
                </div>
                {
                    myWork.map((row, key) => {
                        return (
                            <div className="flex">
                                <div className="prod-name">
                                    {row.productName}
                                </div>
                                <div className="tech-name">
                                    {row.technologies}
                                </div>
                                <div className="desc-name">
                                    {row.description}
                                </div>
                                <div className="divider">
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Work;
