import { Col, Row, Tabs, Select } from "antd";
import React, { useState } from 'react';
import FilterListings from "./components/FilterListings";
import GridHome from './components/GridHome';
import ListHome from "./components/ListHome";
import MortgageCalculator from "./components/MortgageCalculator";
import RecentListings from './components/RecentListings';
import "./styles.scss";
const { TabPane } = Tabs;

const { Option } = Select;

function Listings(props) {

    const [sortBy, setSortBy] = useState();
    const [sortDirection, setSortDirection] = useState("ASC");

    const handleChange = (value) => {
        setSortBy(value);
    }
    const handleChangeDirection = (value) => {
        setSortDirection(value);
    }

    return (
        <div className="section-listhome">
            <div className="sub-header">
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className="title">{props.title}</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a>
                                        <i className="fas fa-home"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    {props.title}
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
                            <FilterListings typeListing={props.title} />
                            <RecentListings />
                        </Col>
                        <Col span={15} className="sidebar-right">
                            <div className="tab-wrapper">
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col offset={15} span={6} >
                                        <span >Sort by  </span>
                                        <Select style={{ paddingRight: "5px", width: 120 }} className="select"  defaultValue="ID" onChange={handleChange}>
                                            <Option value="ID">Mặc định</Option>
                                            <Option value="AREA">Diện tích</Option>
                                            <Option value="TOTAL_PRICE">Giá tiền</Option>
                                        </Select>
                                    </Col>
                                    <Col span={2}>
                                        <Select className="select" style={{ width: 120 }} defaultValue="ASC" onChange={handleChangeDirection}>
                                            <Option value="ASC">Tăng dần</Option>
                                            <Option value="DESC">Giảm dần</Option>
                                        </Select>
                                    </Col>
                                </Row>
                                <Tabs className="tab-custom" defaultActiveKey="2" tabPosition="top">
                                    <TabPane className="tab-item" tab={
                                        <i className="fas fa-th-list"></i>
                                    } key="1">
                                        <ListHome typeListing={props.title} sortBy={sortBy} sortDirection={sortDirection} />
                                    </TabPane>
                                    <TabPane tab={
                                        <i class="fas fa-th-large"></i>
                                    } key="2">
                                        <GridHome typeListing={props.title} sortBy={sortBy} sortDirection={sortDirection} />
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