import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Col, Row, Tabs, Input, Button } from "antd";
import FormFilter from "../FormFilter";
import { clearObject, objectToQueryString } from "../../constants/Config";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";

const { TabPane } = Tabs;

function Filter(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [params, setParams] = useState({});
  const [search, setSearch] = useState();
  const location = useLocation();
  const history = useHistory();
  const paramsQuery = qs.parse(window.location.search);
  const [type_apartment, set_type_apartment] = useState();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = (values) => {
    setIsModalVisible(false);
    setParams(values);
  };

  useEffect(() => {
    set_type_apartment(
      paramsQuery.type_apartment ? paramsQuery.type_apartment : "BUY"
    );
  }, [location.search]);

  const onFilter = () => {
    var paramsSearch = { ...params };
    paramsSearch.search = search;
    history.push(
      `/${
        type_apartment === "BUY" ? "nha-dat-ban" : "nha-dat-thue"
      }?${objectToQueryString(clearObject(paramsSearch))}`
    );
  };
  return (
    <div className="filter">
      <Tabs
        activeKey={type_apartment}
        onChange={(e) => {
          history.push(`?${objectToQueryString({ type_apartment: e })}`);
        }}
      >
        <TabPane tab={<p className="filter-tab">Mua</p>} key="BUY"></TabPane>
        <TabPane tab={<p className="filter-tab">Thuê</p>} key="RENT"></TabPane>
      </Tabs>

      <Row style={{ marginTop: "10px" }}>
        <Col span={18} style={{ paddingRight: "8px" }}>
          <div className="input-search">
            <i className="fas fa-search"></i>
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="text-input"
              placeholder="Tìm kiếm bất động sản"
            />
          </div>
        </Col>
        <Col span={3} className="col-filter">
          <Button className="btn-filter" onClick={showModal}>
            <i className="fas fa-sliders-h"></i>Lọc
          </Button>
        </Col>
        <Col span={3} className="col-filter">
          <Button className="btn-search" onClick={onFilter}>
            Tìm kiếm
          </Button>
        </Col>
      </Row>
      <FormFilter
        type_apartment={type_apartment}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        setParams={setParams}
        search={search}
      />
    </div>
  );
}

export default Filter;
