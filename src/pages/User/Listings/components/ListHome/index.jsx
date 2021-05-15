import React from 'react';
import { List } from 'antd';
import "./styles.scss";
import ThumbnailExtra from '../../../../../components/Thumbnail/ThumbnailExtra'



const listData = [];

for (let i = 0; i < 23; i++) {
    listData.push({
        title: `${i}`,
    });
}

function ListHome(props) {
    return (
        <List className="list-home"
            itemLayout="vertical"
            size="large"
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

export default ListHome;