import { Col, Row, Tabs, Select } from "antd";
import React, { useState } from "react";
import Filter from "../../../components/Filter";
import FilterListings from "./components/FilterListings";
import GridHome from "./components/GridHome";
import ListHome from "./components/ListHome";
import MortgageCalculator from "./components/MortgageCalculator";
import RecentListings from "./components/RecentListings";
import "./styles.scss";
const { TabPane } = Tabs;

const { Option } = Select;

function Listings(props) {
  const [sortBy, setSortBy] = useState();
  const [sortDirection, setSortDirection] = useState("ASC");

  const handleChange = (value) => {
    setSortBy(value);
  };
  const handleChangeDirection = (value) => {
    setSortDirection(value);
  };

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
            <div style={{ width: "100%", padding: "0 200px" }}>
              <div className="title-filter">
                Tìm kiếm thông tin bất động sản
              </div>
              <Filter type="BUY" />
            </div>
            <div className="tab-wrapper" style={{ width: "100%" }}>
              <div className="fil-sort">
                <span className="title">Sort by </span>
                <Select
                  className="select"
                  defaultValue="ID"
                  onChange={handleChange}
                >
                  <Option value="ID">Mặc định</Option>
                  <Option value="AREA_ASC">Diện tích - Tăng dần</Option>
                  <Option value="AREA_DESC">Diện tích - Giảm dần</Option>
                  <Option value="TOTAL_PRICE_ASC">Giá tiền - Tăng dần</Option>
                  <Option value="TOTAL_PRICE_DESC">Giá tiền - Giảm dần</Option>
                </Select>
              </div>
              <Tabs
                className="tab-custom"
                defaultActiveKey="2"
                tabPosition="top"
              >
                <TabPane
                  className="tab-item"
                  tab={<i className="fas fa-th-list"></i>}
                  key="1"
                >
                  <ListHome
                    typeListing={props.title}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                  />
                </TabPane>
                <TabPane tab={<i className="fas fa-th-large"></i>} key="2">
                  <GridHome
                    typeListing={props.title}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                  />
                </TabPane>
              </Tabs>
            </div>

            {/* </Col> */}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Listings;
