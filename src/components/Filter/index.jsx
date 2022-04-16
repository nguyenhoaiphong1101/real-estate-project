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
import { useDispatch, useSelector } from "react-redux";
import { loadDistrict } from "../../actions/search";
import {
  selectAreaFrom,
  selectAreaTo,
  selectPriceFrom,
  selectPriceTo,
} from "../../constants/DataConfig";

const { TabPane } = Tabs;

function Filter(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [priceTo, setPriceTo] = useState(selectPriceTo);
  const [priceFrom, setPriceFrom] = useState(selectPriceFrom);
  const [areaTo, setAreaTo] = useState(selectAreaTo);
  const [areaFrom, setAreaFrom] = useState(selectAreaFrom);
  const listDistrict = useSelector((state) => state.search.district);
  const listProvince = useSelector((state) => state.search.province);
  const listCategory = useSelector((state) => state.category.listCategory);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  console.log(listProvince);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const selectProvince = (e) => {
    dispatch(loadDistrict(e));
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
              console.log(form.getFieldsValue());
            }}
          >
            Tìm kiếm
          </Button>
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
        <Form form={form} onFinish={onFilter} layout="vertical">
          <div className="modal-filter">
            <div className="group-filter-scroll">
              <div className="group-filter">
                <div className="label">Thể loại</div>
                <Row>
                  <Col span={11}>
                    <Form.Item name="category">
                      <Select
                        className="select-custom"
                        placeholder="Thể loại bất động sản"
                        allowClear
                        options={listCategory.map((item) => {
                          return {
                            value: item.id,
                            label: item.name,
                          };
                        })}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div className="group-filter">
                <div className="label">Địa chỉ</div>
                <Row>
                  <Col span={11}>
                    <Form.Item name="province">
                      <Select
                        className="select-custom"
                        placeholder="Thành phố"
                        options={listProvince.map((item) => {
                          return {
                            value: item.id,
                            label: item.name,
                          };
                        })}
                        onChange={selectProvince}
                      />
                    </Form.Item>
                  </Col>
                  <Col offset={2} span={11}>
                    <Form.Item name="district">
                      <Select
                        className="select-custom"
                        placeholder="Quận/Huyện"
                        options={listDistrict.map((item) => {
                          return {
                            value: item.id,
                            label: item.name,
                          };
                        })}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div className="group-filter">
                <div className="label">Diện tích</div>
                <Row>
                  <Col span={11}>
                    <Form.Item name="area_from">
                      <Select
                        className="select-custom"
                        placeholder="Từ"
                        options={areaFrom}
                        onChange={(e) => {
                          setAreaTo(
                            selectAreaTo.filter(
                              (item) => item.value > e || item.value === -1
                            )
                          );
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col offset={2} span={11}>
                    <Form.Item name="area_to">
                      <Select
                        className="select-custom"
                        placeholder="Đến"
                        options={areaTo}
                        onChange={(e) => {
                          setAreaFrom(
                            e === -1
                              ? selectAreaFrom
                              : selectAreaFrom.filter((item) => item.value < e)
                          );
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div className="group-filter">
                <div className="label">Giá tiền</div>
                <Row>
                  <Col span={11}>
                    <Form.Item name="price_from">
                      <Select
                        className="select-custom"
                        placeholder="Từ"
                        options={priceFrom}
                        onChange={(e) => {
                          setPriceTo(
                            selectPriceTo.filter(
                              (item) => item.value > e || item.value === -1
                            )
                          );
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col offset={2} span={11}>
                    <Form.Item name="price_to">
                      <Select
                        className="select-custom"
                        placeholder="Đến"
                        options={priceTo}
                        onChange={(e) => {
                          setPriceFrom(
                            e === -1
                              ? selectPriceFrom
                              : selectPriceFrom.filter((item) => item.value < e)
                          );
                        }}
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
            <Button
              className="btn-filter"
              onClick={() => {
                form.resetFields();
                dispatch(loadDistrict());
                setPriceTo(selectPriceTo);
                setPriceFrom(selectPriceFrom);
              }}
            >
              Xoá lọc
            </Button>
            <Form.Item style={{ margin: "0" }}>
              <Button className="btn-search" htmlType="submit">
                Tìm kiếm
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Filter;
