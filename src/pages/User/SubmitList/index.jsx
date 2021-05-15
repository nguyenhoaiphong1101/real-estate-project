import React from 'react';
import "./styles.scss";
import SubHeader from "../../../components/SubHeader";
import { Row, Col } from "antd";
import { Tabs } from 'antd';
import BasicInfomation from "./components/BasicInfomation"
import Gallery from "./components/Gallery"
import Details from "./components/Details"
import Features from "./components/Features"


function SubmitList(props) {
    return (
        <div className="sublist">
            <SubHeader title="Submit Listing" />
            <div className="container">
                <Tabs className="container-tab" defaultActiveKey="1" tabPosition="left" >
                    <Tabs.TabPane tab={
                        <div className="nav-item">
                            <span>01</span>
                            <a href="#" >Basic Information</a>
                        </div>
                    } key="1">
                        <BasicInfomation />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <div className="nav-item">
                            <span>02</span>
                            <a href="#" >Gallery</a>
                        </div>
                    } key="2">
                        <Gallery />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <div className="nav-item">
                            <span>03</span>
                            <a href="#" >Features</a>
                        </div>
                    } key="3">
                        <Features />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <div className="nav-item">
                            <span>04</span>
                            <a href="#" >Details</a>
                        </div>
                    } key="4">
                        <Details />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default SubmitList;