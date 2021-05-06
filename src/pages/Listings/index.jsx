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
            <div className="container">
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
        </div>
    );
}

export default Listings;