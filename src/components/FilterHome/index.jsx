import React, { useState } from "react";
import "./styles.scss";
import { Col, Row, Tabs, Input, Button } from "antd";
import FormFilter from "../FormFilter";

const { TabPane } = Tabs;

function Filter(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [params, setParams] = useState({});

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = (values) => {
    setIsModalVisible(false);
    setParams(values);
  };

  const onFilter = (values) => {
    console.log(values);
  };
  return (
    <div className="filter">
      {props.type ? null : (
        <Tabs
          defaultActiveKey="1"
          onChange={(e) => {
            console.log(e);
          }}
        >
          <TabPane tab={<p className="filter-tab">Mua</p>} key="1"></TabPane>
          <TabPane tab={<p className="filter-tab">Thuê</p>} key="2"></TabPane>
        </Tabs>
      )}

      <Row style={{ marginTop: "10px" }}>
        <Col span={18} style={{ paddingRight: "8px" }}>
          <div className="input-search">
            <i className="fas fa-search"></i>
            <Input
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
          <Button
            className="btn-search"
            onClick={() => {
              console.log(params);
            }}
          >
            Tìm kiếm
          </Button>
        </Col>
      </Row>
      <FormFilter
        isModalVisible={isModalVisible}
        onFilter={onFilter}
        handleCancel={handleCancel}
        setParams={setParams}
      />
    </div>
  );
}

export default Filter;
