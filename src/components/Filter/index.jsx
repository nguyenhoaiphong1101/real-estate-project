import React, { useState } from "react";
import "./styles.scss";
import {
  Col,
  Row,
  Tabs,
  Input,
  Button,
  Modal,
  Form,
  Radio,
  Select,
} from "antd";
import { acreage, price, quantity } from "../../constants/Config";

const { TabPane } = Tabs;

function Filter(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Form form={form} className="filter" layout="vertical">
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
          <Button className="btn-filter" onClick={showModal}>
            <i className="fas fa-sliders-h"></i>Lọc
          </Button>
        </Col>
        <Col span={3} className="col-filter">
          <Button className="btn-search">Tìm kiếm</Button>
        </Col>
      </Row>
      <Modal
        title={
          <span style={{ marginLeft: "290px" }}>
            {" "}
            <i
              style={{ fontSize: "18px", marginRight: "5px" }}
              className="fas fa-sliders-h"
            ></i>
            Lọc
          </span>
        }
        width={700}
        visible={isModalVisible}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-filter">
          <div className="group-filter-scroll">
            <div className="group-filter">
              <div className="label">Thể loại</div>
              <Form.Item name="category">
                <Radio.Group
                  style={{ width: "100%" }}
                  onChange={(e) => console.log(e)}
                >
                  <Row>
                    <Col span={11}>
                      <Radio style={{ display: "block" }} value={1}>
                        Tất cả
                      </Radio>
                      <Radio style={{ display: "block" }} value={2}>
                        Biệt thự
                      </Radio>
                    </Col>
                    <Col offset={2} span={11}>
                      <Radio style={{ display: "block" }} value={3}>
                        Căn hộ / Chung cư
                      </Radio>
                      <Radio style={{ display: "block" }} value={4}>
                        Đất nền
                      </Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="group-filter">
              <div className="label">Địa chỉ</div>
              <Row>
                <Col span={11}>
                  <Form.Item name="province">
                    <Select
                      className="select-custom"
                      placeholder="Thành phố"
                      options={[]}
                    />
                  </Form.Item>
                </Col>
                <Col offset={2} span={11}>
                  <Form.Item name="district">
                    <Select
                      className="select-custom"
                      placeholder="Quận/Huyện"
                      options={[]}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="group-filter">
              <Row>
                <Col span={11}>
                  <div className="label">Diện tích</div>

                  <Form.Item name="min-area">
                    <Select
                      className="select-custom"
                      placeholder="Từ"
                      options={acreage}
                    />
                  </Form.Item>
                </Col>
                <Col offset={2} span={11}>
                  <div className="label">Giá tiền</div>

                  <Form.Item name="max-area">
                    <Select
                      className="select-custom"
                      placeholder="Đến"
                      options={price}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="group-filter" style={{ borderBottom: "0" }}>
              <div className="label">Khác</div>
              <Row>
                <Col span={11}>
                  <Form.Item name="bedroom">
                    <Select
                      allowClear
                      placeholder="Số lượng phòng ngủ"
                      className="select-custom"
                      options={quantity}
                    />
                  </Form.Item>
                  <Form.Item name="toilet">
                    <Select
                      allowClear
                      placeholder="Số lượng nhà vệ sinh"
                      className="select-custom"
                      options={quantity}
                    />
                  </Form.Item>
                </Col>
                <Col offset={2} span={11}>
                  <Form.Item name="bathroom">
                    <Select
                      allowClear
                      placeholder="Số lượng phòng tắm"
                      className="select-custom"
                      options={quantity}
                    />
                  </Form.Item>
                  <Form.Item name="floor">
                    <Select
                      allowClear
                      placeholder="Số lượng tầng"
                      className="select-custom"
                      options={quantity}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="footer-modal-filter">
          <Button className="btn-filter" onClick={showModal}>
            Xoá lọc
          </Button>
          <Button className="btn-search">Tìm kiếm</Button>
        </div>
      </Modal>
    </Form>
  );
}

export default Filter;
