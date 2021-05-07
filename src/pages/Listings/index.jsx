import { Col, Row, Tabs } from "antd";
import React from 'react';
import FilterListings from "./components/FilterListings";
import GridHome from './components/GridHome';
import ListHome from "./components/ListHome";
import MortgageCalculator from "./components/MortgageCalculator";
import RecentListings from './components/RecentListings';
import "./styles.scss";
const { TabPane } = Tabs;



function Listings(props) {
    return (
        <div className="section-listhome">
            <div className="sub-header">
                <div className="container">
                    <div class="subheader-inner">
                        <h1 class="title">Danh sách</h1>
                        <nav>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a>
                                        <i class="fas fa-home"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item" aria-current="page">
                                    Danh sách
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <Row>
                        <Col span={9} className="sidebar-left">
                            <FilterListings />
                            <RecentListings />
                            <MortgageCalculator />
                        </Col>
                        <Col span={15} className="sidebar-right">
                            <div className="tab-wrapper">
                                <Tabs className="tab-custom" defaultActiveKey="1" tabPosition="top">
                                    <TabPane className="tab-item" tab={
                                        <i className="fas fa-th-list"></i>
                                    } key="1">
                                        <ListHome />
                                    </TabPane>
                                    <TabPane tab={
                                        <i class="fas fa-th-large"></i>
                                    } key="2">
                                        <GridHome />
                                    </TabPane>
                                </Tabs>
                            </div>

                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
}

export default Listings;