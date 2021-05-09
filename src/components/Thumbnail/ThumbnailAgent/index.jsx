import React from 'react';
import "./styles.scss"
import Button from "../../Button"


function ThumbnailAgent(props) {
    return (
        <div className="acr-agent">
            <div className="listing-badge featured">
                <i className="fas fa-star"></i>
            </div>
            <div className="acr-dots-wrapper acr-agent-thumb">
                <div className="acr-dots">
                </div>
                <a href="#">
                    <img src="http://androthemes.com/themes/react/acres/assets/img/agents/1.jpg" alt="agent" />
                </a>
            </div>
            <div className="acr-agent-body">
                <h6>
                    <a href="#">Randy Blue</a>
                </h6>
                <span>Expert at Company</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum ab non amet ullam possimus aspernatur dolorem.  Ullam, tempore.</p>
                <Button value="View Profile" className="btn-custom"></Button>
            </div>
        </div>
    );
}

export default ThumbnailAgent;