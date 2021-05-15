import React from 'react';
import "./styles.scss"

function Header(props) {
    return (
        <div className="admin-header">
            <div className="header">

                <a href="#default" className="logo">Admin</a>
                <div className="header-right">
                    <a className="active" href="#home">Logout</a>
                </div>
            </div>
        </div>
    );
}

export default Header;