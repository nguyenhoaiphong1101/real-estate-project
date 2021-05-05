import React from 'react';
import "./styles.scss";
import { Col, Row } from "antd";
import FilterListings from "./components/FilterListings"
import ListHome from "./components/ListHome"
import MortgageCalculator from "./components/MortgageCalculator"
import RecentList from '../DetailHome/components/Sidebar/components/RecentList'



function Listings(props) {
    return (
        <div className="section-listhome">
            <Row>
                <Col span={9} className="sidebar-left">
                    <FilterListings />
                    <RecentList />
                    <MortgageCalculator />
                </Col>
                <Col span={15} className="sidebar-right">
                    <ListHome />
                </Col>
            </Row>
        </div>
    );
}

export default Listings;