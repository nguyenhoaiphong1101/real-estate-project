import React, { useEffect } from "react";
import "./styles.scss";
import { Tabs } from "antd";
import { Empty } from "antd";
import ListingPost from "./components/ListingPost";
import FormEdit from "./components/FormEdit";
import ListingTarget from "./components/ListingTarget";
import ListingFavorite from "./components/ListingFavorite";
import { useDispatch } from "react-redux";

const { TabPane } = Tabs;

function SectionBody() {
  return (
    <div className="profile-section-body-wrapper">
      <Tabs defaultActiveKey="1" tabPosition="top" className="tab-wrapper">
        <TabPane
          tab={
            <div className="tab-item-wrapper">
              <h1 className="tab-item">Chỉnh sửa thông tin</h1>
            </div>
          }
          key="1"
        >
          <FormEdit />
        </TabPane>
        {/* <TabPane tab={
                    <div className="tab-item-wrapper">
                        <h1 className="tab-item">Danh sách bài đăng</h1>
                    </div>
                } key="2">
                    <ListingPost />
                </TabPane> */}
        <TabPane
          tab={
            <div className="tab-item-wrapper">
              <h1 className="tab-item">Danh sách bài đăng</h1>
            </div>
          }
          key="2"
        >
          <ListingPost />
        </TabPane>
        <TabPane
          tab={
            <div className="tab-item-wrapper">
              <h1 className="tab-item">Danh sách yêu thích</h1>
            </div>
          }
          key="3"
        >
          <ListingFavorite />
        </TabPane>
        {/* <TabPane
          tab={
            <div className="tab-item-wrapper">
              <h1 className="tab-item">Mục tiêu người dùng</h1>
            </div>
          }
          key="4"
        >
          <ListingTarget />
        </TabPane> */}
      </Tabs>
    </div>
  );
}

export default SectionBody;
