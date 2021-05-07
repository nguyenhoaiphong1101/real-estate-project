import React from 'react';
import "./styles.scss"



function index(props) {
    return (
        <div className="sub-header">
            <div className="container">
                <div className="subheader-inner">
                    <h1 className="title">{props.title}</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a>
                                    <i className="fas fa-home"></i>
                                </a>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">
                                {props.title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default index;