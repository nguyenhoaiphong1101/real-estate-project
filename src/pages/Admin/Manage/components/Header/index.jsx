import React from 'react';
import { useHistory } from 'react-router';
import "./styles.scss"

function Header(props) {
    const history = useHistory();

    const removeLocal = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('role')
        history.push('/')
    }
    return (
        <div className="admin-header">
            <div className="header">
                <a href="#default" className="logo">Admin</a>
                <div className="header-right">
                    <a className="active" href="" onClick={() => removeLocal()}>Logout</a>
                </div>
            </div>
        </div>
    );
}

export default Header;