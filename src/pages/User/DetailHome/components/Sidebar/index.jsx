import React from 'react';
import ContactForm from './components/ContactForm';
import RecentList from './components/RecentList';
import './styles.scss';

function SideBar(props) {
    return (
        <div className="sidebar">
            <ContactForm />
            <RecentList isRender={props.isRender}/>
        </div>
    );
}

export default SideBar;