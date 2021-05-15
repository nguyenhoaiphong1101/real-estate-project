import React from 'react';
import ThumbnailSecondary from '../../../../../../../components/Thumbnail/ThumbnailSecondary';
import './styles.scss';
function RecentList() {

    return (
        <div className="recent-listing">
            <h4 className="title">Danh sách gần đây</h4>
            <div className="container-fluid wrapper">
                <ThumbnailSecondary />
                <ThumbnailSecondary />
                <ThumbnailSecondary />
                <ThumbnailSecondary />
            </div>
        </div>
    );
}

export default RecentList;