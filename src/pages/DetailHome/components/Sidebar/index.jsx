import React from 'react';
import { Row, Col } from 'antd';
import './styles.scss';
import ContactForm from '../ContactForm';

function SideBar() {
    return (
        <div className="sidebar">
            <ContactForm />
        </div>
    );
}

export default SideBar;