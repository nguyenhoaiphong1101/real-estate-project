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
            <div className="sub-header">
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className="title">Danh sách</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a>
                                        <i className="fas fa-home"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Danh sách
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div classNameName="container">
                <Row>
                    <Col span={9} classNameName="sidebar-left">
                        <FilterListings />
                        <RecentList />
                        <MortgageCalculator />
                    </Col>
                    <Col span={15} classNameName="sidebar-right">
                        <ListHome />
                    </Col>
                </Row>

            </div>
        </div>
    );
}

export default Listings;