import React, { useState } from "react";
import "./styles.scss";
import { Col, Row, Tabs, Input, Button } from "antd";
import FormFilter from "../FormFilter";
import { clearObject, objectToQueryString } from "../../constants/Config";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

function Filter(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [params, setParams] = useState({});
  const [search, setSearch] = useState();
  const history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = (values) => {
    setIsModalVisible(false);
    setParams(values);
  };

  const onFilter = () => {
    var paramsSearch = { ...params };
    paramsSearch.search = search;
    history.push(
      `/${props.type}?${objectToQueryString(
        clearObject(paramsSearch)
      ).toString()}`
    );
  };
  return (
    <div className="filter">
      <Tabs
        defaultActiveKey={props.type}
        onChange={(e) => {
          props.setType(e);
        }}
      >
        <TabPane
          tab={<p className="filter-tab">Mua</p>}
          key="nha-dat-ban"
        ></TabPane>
        <TabPane
          tab={<p className="filter-tab">Thuê</p>}
          key="nha-dat-thue"
        ></TabPane>
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
              placeholder="Search name department"
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
        typeHome={props.type}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        setParams={setParams}
        search={search}
      />
    </div>
  );
}

export default Filter;
