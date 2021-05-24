import React from 'react';
import { useHistory } from 'react-router';
import { Form, Input } from "antd"
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
                <Form action="" className="admin-header-search">
                    <Input autoComplete="off" type="search" className="admin-header-search-input" placeholder="Search..."></Input>
                    <span className="admin-header-search-logo">
                        <i className="fas fa-search"></i>
                    </span>
                </Form>
                <div className="header-right">
                    <a className="active" href="" onClick={() => removeLocal()}>Logout</a>
                </div>
            </div>
        </div>
    );
}

export default Header;