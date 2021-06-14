import React from 'react';
import './styles.scss';
import { Tabs } from 'antd';
import { Empty } from 'antd';
import ListingPost from './components/ListingPost';
import FormEdit from './components/FormEdit';
import ListingFavorite from './components/ListingFavorite';

const { TabPane } = Tabs;


function SectionBody() {
    return (
        <div className="profile-section-body-wrapper">
            <Tabs defaultActiveKey="1" tabPosition="left" className="tab-wrapper">
                <TabPane tab={
                    <div className="tab-item-wrapper">
                        <h1 className="tab-item">Chỉnh sửa thông tin</h1>
                    </div>
                } key="1">
                    <FormEdit />
                </TabPane>
                <TabPane tab={
                    <div className="tab-item-wrapper">
                        <h1 className="tab-item">Danh sách bài đăng</h1>
                    </div>
                } key="2">
                    <ListingPost />
                </TabPane>
                <TabPane tab={
                    <div className="tab-item-wrapper">
                        <h1 className="tab-item">Danh sách yêu thích</h1>
                    </div>
                } key="3">
                   <ListingFavorite />
                </TabPane>
               
            </Tabs>
        </div>
    );
}

export default SectionBody;