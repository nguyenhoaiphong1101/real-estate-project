import React from 'react';
import RecentItem from './Component/RecentItem';
import './styles.scss';
function RecentList() {

    return (
        <div className="recent-listing">
            <h4 className="title">Danh sách gần đây</h4>
            <div className="container-fluid wrapper">
                <RecentItem />
                <RecentItem />
                <RecentItem />
                <RecentItem />
            </div>
        </div>
    );
}

export default RecentList;