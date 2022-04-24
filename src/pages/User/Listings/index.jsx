import { Row, Tabs, Select } from "antd";
import React, { useState } from "react";
import FilterListing from "../../../components/FilterListing";
import GridHome from "./components/GridHome";
import ListHome from "./components/ListHome";
import "./styles.scss";
const { TabPane } = Tabs;

const { Option } = Select;

function Listings(props) {
  const [sortBy, setSortBy] = useState();
  const [sortDirection, setSortDirection] = useState("ASC");

  const handleChange = (value) => {
    setSortBy(value);
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
        <div style={{ width: "100%" }}>
          <div className="title-filter">Tìm kiếm thông tin bất động sản</div>
          <FilterListing />
        </div>
        <div className="container">
          <Row>
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
