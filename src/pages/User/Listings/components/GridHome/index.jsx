import React from 'react';
import { List } from 'antd';
import "./styles.scss";
import ThumbnailPrimary from '../../../../../components/Thumbnail/ThumbnailPrimary'


const listData = [];

for (let i = 0; i < 23; i++) {
    listData.push({
        title: `${i}`,
    });
}

function GridHome(props) {
    return (
        <List className="grid-home"
            grid={{ gutter: 16, column: 2 }}
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
                    <ThumbnailPrimary />
                </List.Item>
            )}
        >
        </List>
    );
}

export default GridHome;