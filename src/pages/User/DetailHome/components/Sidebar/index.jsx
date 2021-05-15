import React from 'react';
import ContactForm from './components/ContactForm';
import RecentList from './components/RecentList';
import './styles.scss';

function SideBar() {
    return (
        <div className="sidebar">
            <ContactForm />
            <RecentList />
        </div>
    );
}

export default SideBar;