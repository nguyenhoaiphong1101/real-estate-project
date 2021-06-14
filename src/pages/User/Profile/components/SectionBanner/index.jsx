import React from 'react';
import './styles.scss';
import Button from '../../../../../components/Button';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function SectionBanner() {
    const user = useSelector(state => state.user.user)
    const history = useHistory();

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
                        <Button onClick={()=>{history.push('/dang-bai')}} value="Đăng bài viết" className="btn" icon="fas fa-plus" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionBanner;