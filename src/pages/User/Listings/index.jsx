import { Row, Tabs, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FilterListing from "../../../components/FilterListing";
import { listMapSort } from "../../../constants/DataConfig";
import GridHome from "./components/GridHome";
import ListHome from "./components/ListHome";
import qs from "query-string";
import "./styles.scss";
import { clearObject, objectToQueryString } from "../../../constants/Config";
const { TabPane } = Tabs;

const { Option } = Select;

function Listings(props) {
  const location = useLocation();
  const history = useHistory();
  const paramsQuery = qs.parse(location.search);
  const [sort, setSort] = useState();

  useEffect(() => {
    if (paramsQuery.sort_by && paramsQuery.sort_direction) {
      setSort(
        listMapSort.find(
          (item) =>
            item.sort.sort_by === paramsQuery.sort_by &&
            item.sort.sort_direction === paramsQuery.sort_direction
        ).value
      );
    } else {
      setSort("ID");
    }
  }, [location.search]);
  const handleChange = (value) => {
    let optionSort = listMapSort.find((item) => item.value === value).sort;
    history.push(
      `?${objectToQueryString(
        clearObject({
          ...paramsQuery,
          ...optionSort,
        })
      )}`
    );
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
                  value={sort}
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
                  <ListHome typeListing={props.title} />
                </TabPane>
                <TabPane tab={<i className="fas fa-th-large"></i>} key="2">
                  <GridHome typeListing={props.title} />
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
