import React from 'react';
import './styles.scss';
import { Row, Col } from "antd";
import SectionBanner from './components/SectionBanner';
import SectionBody from './components/SectionBody';



function Profile() {
    return (
        <div>
            <SectionBanner />
            <SectionBody />
        </div>
    );
}

export default Profile;