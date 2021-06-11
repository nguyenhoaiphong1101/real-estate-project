import React from 'react';
import './styles.scss';
import Button from '../../../../../components/Button';
import { useSelector } from 'react-redux';


function SectionBanner() {
    const user = useSelector(state => state.user.user)

    return (
        <div className="profile-section-banner-wrapper">
            <div className="profile-section-banner">
                <div className="container">
                    <div className="sub-header">
                        <img src="http://androthemes.com/themes/react/acres/assets/img/people/1.jpg" />
                        <div className="body">
                            <h3 className="text">{user?.full_name}</h3>
                            <span className="email">{user?.email}</span>
                        </div>
                        <Button value="Đăng bài viết" className="btn" icon="fas fa-plus" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionBanner;