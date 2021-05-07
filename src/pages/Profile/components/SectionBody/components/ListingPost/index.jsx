import { List, Tabs } from 'antd';
import React from 'react';
import ThumbnailExtra from '../../../../../../components/Thumbnail/ThumbnailExtra';
import './styles.scss';

const { TabPane } = Tabs;

const listData = [];

for (let i = 0; i < 23; i++) {
    listData.push({
        title: `${i}`,
    });
}

function ListingPost() {
    return (
        <List className="listing-post-profile"
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 4,
            }}
            dataSource={listData}
            renderItem={item => (
                <List.Item className="item"
                    key={item.title}
                >
                    <ThumbnailExtra />
                </List.Item>
            )}
        >
        </List>
    );
}

export default ListingPost;