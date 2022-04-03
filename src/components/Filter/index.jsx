import React from "react";
import "./styles.scss";
import { Col, Row, Tabs, Input, Button } from "antd";

const { TabPane } = Tabs;

function Filter(props) {
  return (
    <div className="filter">
      <Tabs
        defaultActiveKey="1"
        onChange={(e) => {
          console.log(e);
        }}
      >
        <TabPane tab={<p className="filter-tab">Mua</p>} key="1"></TabPane>
        <TabPane tab={<p className="filter-tab">Thuê</p>} key="2"></TabPane>
      </Tabs>
      <Row>
        <Col span={18} style={{ paddingRight: "8px" }}>
          <div className="input-search">
            <i class="fas fa-search"></i>
            <Input
              className="text-input"
              placeholder="Search name department"
            />
          </div>
        </Col>
        <Col span={3} className="col-filter">
          <Button className="btn-filter">
            <i class="fas fa-sliders-h"></i>Lọc
          </Button>
        </Col>
        <Col span={3} className="col-filter">
          <Button className="btn-search">Tìm kiếm</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Filter;
