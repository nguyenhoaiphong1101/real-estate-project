import React, { useEffect, useState } from "react";
import { loadDistrict } from "../../actions/search";
import {
  clearObject,
  objectToQueryString,
  quantity,
} from "../../constants/Config";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Modal, Form, Select, Slider, Input } from "antd";
import "./styles.scss";
import {
  listSelectArea,
  selectAreaFrom,
  selectAreaTo,
  selectPriceTo,
} from "../../constants/DataConfig";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import { ArrowRightOutlined } from "@ant-design/icons";

function FormFilter(props) {
  const [priceTo, setPriceTo] = useState(0);
  const [priceFrom, setPriceFrom] = useState(0);
  const [areaTo, setAreaTo] = useState(0);
  const [areaFrom, setAreaFrom] = useState(0);
  const location = useLocation();
  const paramsQuery = qs.parse(location.search);
  const history = useHistory();

  const listDistrict = useSelector((state) => state.search.district);
  const listProvince = useSelector((state) => state.search.province);
  const listCategory = useSelector((state) => state.category.listCategory);

  const [form] = Form.useForm();

  useEffect(() => {
    if (Object.keys(paramsQuery).length) {
      form.setFieldsValue({
        ...paramsQuery,
        province_id: paramsQuery.province_id
          ? parseInt(paramsQuery.province_id)
          : undefined,
        district_id: paramsQuery.district_id
          ? parseInt(paramsQuery.district_id)
          : undefined,
        price_to: paramsQuery.price_to
          ? parseInt(paramsQuery.price_to)
          : undefined,
        price_from: paramsQuery.price_from
          ? parseInt(paramsQuery.price_from)
          : undefined,
        toilet_quantity: paramsQuery.toilet_quantity
          ? parseInt(paramsQuery.toilet_quantity)
          : undefined,
        bedroom_quantity: paramsQuery.bedroom_quantity
          ? parseInt(paramsQuery.bedroom_quantity)
          : undefined,
        floor_quantity: paramsQuery.floor_quantity
          ? parseInt(paramsQuery.floor_quantity)
          : undefined,
        bathroom_quantity: paramsQuery.bathroom_quantity
          ? parseInt(paramsQuery.bathroom_quantity)
          : undefined,
      });
      setAreaFrom(paramsQuery.area_from);
      setAreaTo(paramsQuery.area_to === "-1" ? NaN : paramsQuery.area_to);
      setPriceFrom(paramsQuery.price_from / minPrice);
      setPriceTo(
        paramsQuery.price_to === "-1" ? NaN : paramsQuery.price_to / minPrice
      );
    }
  }, [location.search]);

  const dispatch = useDispatch();

  //10 tỷ = 10 000 000 000
  const minPrice = 1000000;
  const numberPriceSlider = 100;

  const onFilter = (values) => {
    var paramsSearch = { ...values };
    paramsSearch.area_from = areaFrom.toString() === "NaN" ? 0 : areaFrom;
    paramsSearch.area_to = areaTo.toString() === "NaN" ? -1 : areaTo;
    paramsSearch.price_from =
      priceFrom.toString() === "NaN" ? 0 : priceFrom * minPrice;
    paramsSearch.price_to =
      priceTo.toString() === "NaN" ? -1 : priceTo * minPrice;
    paramsSearch.search = props.search;
    if (props.listing) {
      paramsSearch.category_id = props.category_id;
    }
    history.push(
      `/${
        props.type_apartment === "BUY" ? "nha-dat-ban" : "nha-dat-thue"
      }?${objectToQueryString(clearObject(paramsSearch))}`
    );
  };

  const infoArea = () => {
    return areaFrom && areaTo
      ? `${areaFrom}m2 - ${areaTo}m2`
      : areaFrom && !areaTo
      ? `>= ${areaFrom}m2`
      : !areaFrom && areaTo
      ? `0m2 - ${areaTo}m2`
      : "Tất cả diện tích";
  };

  const parsePrice = (value) => {
    if (value >= 1000) {
      if (value - parseInt(value / 1000) * 1000 > 0)
        return (
          parseInt(value / 1000).toString() +
          " tỷ " +
          (value - parseInt(value / 1000) * 1000).toString() +
          " triệu"
        );
      else return (value / 1000).toString() + " tỷ";
    } else {
      return value.toString() + " triệu";
    }
  };

  const infoPrice = () => {
    return priceFrom && priceTo
      ? `${parsePrice(priceFrom)} - ${parsePrice(priceTo)}`
      : priceFrom && !priceTo
      ? `>= ${parsePrice(priceFrom)}`
      : !priceFrom && priceTo
      ? `0 triệu - ${parsePrice(priceTo)}`
      : "Tất cả giá tiền";
  };

  const valuePriceSlider = () => {
    let priceFromSlide = priceFrom.toString()
      ? priceFrom / numberPriceSlider
      : undefined;
    let priceToSlide = priceTo.toString()
      ? priceTo / numberPriceSlider
      : undefined;
    if (
      priceFromSlide.toString() !== "NaN" &&
      priceToSlide.toString() !== "NaN"
    ) {
      if (priceToSlide >= 100 && priceFromSlide >= 100) {
        return [100, 100];
      } else if (priceToSlide >= 100 && priceFromSlide < 100) {
        return [priceFromSlide, 100];
      } else {
        return [priceFromSlide, priceToSlide];
      }
    } else {
      if (
        priceFromSlide.toString() !== "NaN" &&
        priceToSlide.toString() === "NaN"
      )
        return [priceFromSlide, 100];
      else return [0, 0];
    }
  };

  const valueAreaSlider = () => {
    let areFromSlide = areaFrom.toString() ? areaFrom / 10 : undefined;
    let areaToSlide = areaTo.toString() ? areaTo / 10 : undefined;
    if (areFromSlide.toString() !== "NaN" && areaToSlide.toString() !== "NaN") {
      if (areaToSlide >= 100 && areFromSlide >= 100) {
        return [100, 100];
      } else if (areaToSlide >= 100 && areFromSlide < 100) {
        return [areFromSlide, 100];
      } else {
        return [areFromSlide, areaToSlide];
      }
    } else {
      if (areFromSlide.toString() !== "NaN" && areaToSlide.toString() === "NaN")
        return [areFromSlide, 100];
      else return [0, 0];
    }
  };

  const selectProvince = (e) => {
    dispatch(loadDistrict(e));
  };

  return (
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
      className="form-filter"
      width={700}
      visible={props.isModalVisible}
      footer={false}
      forceRender
      onCancel={() => props.handleCancel(form.getFieldsValue())}
    >
      <Form form={form} onFinish={onFilter} layout="vertical">
        <div className="modal-filter">
          <div className="group-filter-scroll">
            {props.listing ? null : (
              <div className="group-filter">
                <div className="label">Thể loại</div>
                <Row>
                  <Col span={11}>
                    <Form.Item name="category_id">
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
            )}

            <div className="group-filter">
              <div className="label">Địa chỉ</div>
              <Row>
                <Col span={11}>
                  <Form.Item name="province_id">
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
                  <Form.Item name="district_id">
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
              <div className="label">Diện tích ( {infoArea()} )</div>
              <Row>
                <Col span={11}>
                  <Input
                    type={"number"}
                    className="input-filter"
                    value={areaFrom}
                    onBlur={() => {
                      if (areaFrom > areaTo) {
                        let temp = areaTo;
                        setAreaTo(areaFrom);
                        setAreaFrom(temp);
                      }
                    }}
                    onChange={(e) => {
                      setAreaFrom(e.target.valueAsNumber);
                    }}
                    placeholder="Từ"
                  />
                </Col>
                <Col span={2} className="flex-center">
                  <ArrowRightOutlined />
                </Col>
                <Col span={11}>
                  <Input
                    value={areaTo}
                    type={"number"}
                    onBlur={() => {
                      if (areaFrom > areaTo) {
                        let temp = areaTo;
                        setAreaTo(areaFrom);
                        setAreaFrom(temp);
                      }
                    }}
                    onChange={(e) => {
                      setAreaTo(e.target.valueAsNumber);
                    }}
                    className="input-filter"
                    placeholder="Đến"
                  />
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Slider
                    range
                    value={valueAreaSlider()}
                    onChange={(e) => {
                      setAreaFrom(e[0] * 10);
                      setAreaTo(e[1] * 10);
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="group-filter">
              <div className="label">Giá tiền ( {infoPrice()} )</div>
              <Row>
                <Col span={11}>
                  <Input
                    type={"number"}
                    className="input-filter"
                    value={priceFrom}
                    onBlur={() => {
                      if (priceFrom > priceTo) {
                        let temp = priceTo;
                        setPriceTo(priceFrom);
                        setPriceFrom(temp);
                      }
                    }}
                    onChange={(e) => {
                      setPriceFrom(e.target.valueAsNumber);
                    }}
                    placeholder="Từ"
                  />
                </Col>
                <Col span={2} className="flex-center">
                  <ArrowRightOutlined />
                </Col>
                <Col span={11}>
                  <Input
                    value={priceTo}
                    type={"number"}
                    onBlur={() => {
                      if (priceFrom > priceTo) {
                        let temp = priceTo;
                        setPriceTo(priceFrom);
                        setPriceFrom(temp);
                      }
                    }}
                    onChange={(e) => {
                      setPriceTo(e.target.valueAsNumber);
                    }}
                    className="input-filter"
                    placeholder="Đến"
                  />
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Slider
                    range
                    step={0.01}
                    value={valuePriceSlider()}
                    onChange={(e) => {
                      setPriceFrom(parseInt(e[0] * 100));
                      setPriceTo(parseInt(e[1] * 100));
                    }}
                  />
                </Col>
              </Row>
            </div>

            <div className="group-filter" style={{ borderBottom: "0" }}>
              <div className="label">Khác</div>
              <Row>
                <Col span={11}>
                  <Form.Item name="bedroom_quantity">
                    <Select
                      allowClear
                      placeholder="Số lượng phòng ngủ"
                      className="select-custom"
                      options={quantity}
                    />
                  </Form.Item>
                  <Form.Item name="toilet_quantity">
                    <Select
                      allowClear
                      placeholder="Số lượng nhà vệ sinh"
                      className="select-custom"
                      options={quantity}
                    />
                  </Form.Item>
                </Col>
                <Col offset={2} span={11}>
                  <Form.Item name="bathroom_quantity">
                    <Select
                      allowClear
                      placeholder="Số lượng phòng tắm"
                      className="select-custom"
                      options={quantity}
                    />
                  </Form.Item>
                  <Form.Item name="floor_quantity">
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
              setPriceFrom();
              setAreaTo(0);
              setAreaFrom(0);
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
  );
}

export default FormFilter;
