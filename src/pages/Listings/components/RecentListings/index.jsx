import React from 'react';
import ThumbnailSecondary from '../../../../components/Thumbnail/ThumbnailSecondary';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function RecentListings() {
    return (
        <Collapse defaultActiveKey={['1']} className="collapse collapse-recent">
            <Panel header={<h5 className="title">Danh sách gần đây</h5>} key="1">
                <div className="recent-listing filter-listings">
                    <div className="container-fluid wrapper">
                        <ThumbnailSecondary />
                        <ThumbnailSecondary />
                        <ThumbnailSecondary />
                        <ThumbnailSecondary />
                    </div>
                </div>
            </Panel>

        </Collapse>
    );
}

export default RecentListings;