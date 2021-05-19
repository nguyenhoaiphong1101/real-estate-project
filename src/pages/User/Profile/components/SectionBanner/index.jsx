import React from 'react';
import './styles.scss';
import Button from '../../../../../components/Button';



function SectionBanner() {
    return (
        <div className="profile-section-banner-wrapper">
            <div className="profile-section-banner">
                <div className="container">
                    <div className="sub-header">
                        <img src="http://androthemes.com/themes/react/acres/assets/img/people/1.jpg" />
                        <div className="body">
                            <h3 className="text">Vũ Khánh</h3>
                            <span className="email">18520903@gm.uit.edu.vn</span>
                        </div>
                        <Button value="Đăng bài viết" className="btn" icon="fas fa-plus" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionBanner;