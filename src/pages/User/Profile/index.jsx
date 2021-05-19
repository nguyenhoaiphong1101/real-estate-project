import React from 'react';
import './styles.scss';
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