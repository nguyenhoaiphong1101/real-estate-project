import React, { useState, useEffect } from "react";
import "./styles.scss";
import {
  Col,
  List,
  Modal,
  Select,
  Row,
  Input,
  Button,
  message,
  Spin,
} from "antd";
import ItemTarget from "./components/ItemTarget";
import {
  createTarget,
  deleteTarget,
  getTarget,
  updateTarget,
} from "../../../../../../../api/userApi";
import { province, district } from "../../../../../../../api/searchApi";
import { listCategoryApi } from "../../../../../../../api/category";
import { LoadingOutlined } from "@ant-design/icons";

function ListingTarget(props) {
  const [listProvince, setListProvince] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [update, setUpdate] = useState();
  const [loading, setLoading] = useState(false);
  const [listTarget, setListTarget] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [detail, setDetail] = useState();
  const [city, setCity] = useState();
  const [distr, setDistr] = useState();
  const [area, setArea] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [bathroom, setBathroom] = useState();
  const [floor, setFloor] = useState();
  const [bedroom, setBedroom] = useState();
  const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

  useEffect(() => {
    province.GET().then((res) => {
      setListProvince(res);
    });
    listCategoryApi.GET().then((res) => {
      setListCategory(res);
    });
    setLoading(true);
    getTarget.GET().then((res) => {
      setListTarget(res);
      setLoading(false);
    });
  }, []);

  const changeCity = (e) => {
    setCity(e);
    district.GET(e).then((res) => {
      setListDistrict(res);
    });
    setDistr();
  };

  const changeDistrict = (e) => {
    setDistr(e);
  };

  const changeCategory = (e) => {
    setCategory(e);
  };

  const updateItem = (item) => {
    district.GET(Number(item.province)).then((res) => {
      setListDistrict(res);
      setDistr(item.district ? Number(item.district) : null);
    });
    setUpdate(item.id);
    setCity(item.province ? Number(item.province) : null);
    setArea(item.area ? Number(item.area) : null);
    setCategory(item.category ? Number(item.category) : null);
    setPrice(Number(item.price));
    setBathroom(item.bathroom_quantity);
    setFloor(item.floor_quantity);
    setBedroom(item.bedroom_quantity);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    if (update) {
      if (
        !city &&
        !distr &&
        !area &&
        !category &&
        !price &&
        !bathroom &&
        !floor &&
        !bedroom
      ) {
        message.error("Vui l??ng nh???p ??t nh???t 1 th??ng tin !");
      } else {
        updateTarget
          .PUT({
            id: update,
            area,
            bathroom_quantity: bathroom,
            bedroom_quantity: bedroom,
            category,
            district_id: distr,
            floor_quantity: floor,
            price,
            province_id: city,
          })
          .then((res) => {
            getTarget.GET().then((res) => {
              setListTarget(res);
            });
            setLoading(false);
            setCity();
            setDistr();
            setArea();
            setCategory();
            setPrice();
            setBathroom();
            setFloor();
            setBedroom();
            setIsModalVisible(false);
          });
      }
    } else {
      if (
        !city &&
        !distr &&
        !area &&
        !category &&
        !price &&
        !bathroom &&
        !floor &&
        !bedroom
      ) {
        message.error("Vui l??ng nh???p ??t nh???t 1 th??ng tin !");
      } else {
        createTarget
          .POST({
            area,
            bathroom_quantity: bathroom,
            bedroom_quantity: bedroom,
            category,
            district_id: distr,
            floor_quantity: floor,
            price,
            province_id: city,
          })
          .then((res) => {
            getTarget.GET().then((res) => {
              setListTarget(res);
            });
            setLoading(false);
            setCity();
            setDistr();
            setArea();
            setCategory();
            setPrice();
            setBathroom();
            setFloor();
            setBedroom();
            setIsModalVisible(false);
          });
      }
    }
  };

  const deleteItem = (id) => {
    setLoading(true);
    deleteTarget.DELETE(id).then((res) => {
      getTarget.GET().then((res) => {
        setListTarget(res);
        setLoading(false);
      });
    });
  };

  const handleCancel = () => {
    setCity();
    setDistr();
    setArea();
    setCategory();
    setPrice();
    setBathroom();
    setFloor();
    setBedroom();
    setIsModalVisible(false);
  };

  return (
    <div className="listing-target">
      <Modal
        title={update ? "C???p nh???t m???c ti??u" : "Th??m m???c ti??u"}
        visible={isModalVisible}
        okText="Th??m"
        cancelText="H???y"
        width={800}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row>
          <Col className="form-group" span={11}>
            <label>Th??nh ph???</label>
            <Select
              value={city}
              className="select-target"
              onChange={changeCity}
            >
              {listProvince.length > 0
                ? listProvince.map((item) => {
                    return (
                      <Select.Option key={item.id} value={item.id}>
                        {item.name}
                      </Select.Option>
                    );
                  })
                : null}
            </Select>
          </Col>

          <Col className="form-group" offset={1} span={11}>
            <label>Qu???n huy???n</label>
            <Select
              value={distr}
              className="select-target"
              onChange={changeDistrict}
            >
              {listDistrict.length > 0
                ? listDistrict.map((item) => {
                    return (
                      <Select.Option key={item.id} value={item.id}>
                        {item.name}
                      </Select.Option>
                    );
                  })
                : null}
            </Select>
          </Col>
          <Col className="form-group" span={11}>
            <label>Th??? lo???i</label>
            <Select
              value={category}
              className="select-target"
              onChange={changeCategory}
            >
              {listCategory.length > 0
                ? listCategory.map((item) => {
                    return (
                      <Select.Option key={item.id} value={item.id}>
                        {item.name}
                      </Select.Option>
                    );
                  })
                : null}
            </Select>
          </Col>
          <Col className="form-group" offset={1} span={11}>
            <label>Di???n t??ch</label>
            <Input
              value={area}
              type="number"
              onChange={(e) => {
                setArea(e.target.value);
              }}
            />
          </Col>
          <Col className="form-group" span={11}>
            <label>Gi?? ti???n</label>
            <Input
              value={price}
              type="number"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Col>
          <Col className="form-group" offset={1} span={11}>
            <label>S??? t???ng</label>
            <Input
              value={floor}
              type="number"
              onChange={(e) => {
                setFloor(e.target.value);
              }}
            />
          </Col>
          <Col className="form-group" span={11}>
            <label>S??? ph??ng t???m</label>
            <Input
              value={bathroom}
              type="number"
              onChange={(e) => {
                setBathroom(e.target.value);
              }}
            />
          </Col>
          <Col className="form-group" offset={1} span={11}>
            <label>S??? ph??ng ng???</label>
            <Input
              value={bedroom}
              type="number"
              onChange={(e) => {
                setBedroom(e.target.value);
              }}
            />
          </Col>
        </Row>
      </Modal>

      <Modal
        title="Chi ti???t m???c ti??u"
        visible={isDetail}
        width={800}
        onCancel={() => {
          setIsDetail(false);
        }}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              setIsDetail(false);
            }}
          >
            X??c nh???n
          </Button>,
        ]}
      >
        <Row>
          <Col className="form-group-detail" span={11}>
            <label>Th??nh ph???</label>
            <p>{detail?.province_name}</p>
          </Col>
          <Col className="form-group-detail" offset={1} span={11}>
            <label>Qu???n/huy???n</label>
            <p>{detail?.district_name}</p>
          </Col>
          <Col className="form-group-detail" span={11}>
            <label>Th??? lo???i</label>
            <p>{detail?.category_name}</p>
          </Col>
          <Col className="form-group-detail" offset={1} span={11}>
            <label>Di???n t??ch</label>
            {detail?.area ? (
              <p>{Number(detail?.area).toLocaleString("vi-VN")}m2</p>
            ) : (
              <p>Ch??a c???p nh???t</p>
            )}
          </Col>
          <Col className="form-group-detail" span={11}>
            <label>Gi?? ti???n</label>
            <p>
              {detail?.price
                ? new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(detail.price)
                : "Ch??a c???p nh???t"}
            </p>
          </Col>
          <Col className="form-group-detail" offset={1} span={11}>
            <label>S??? t???ng</label>
            <p>
              {detail?.floor_quantity
                ? detail?.floor_quantity
                : "Ch??a c???p nh???t"}
            </p>
          </Col>
          <Col className="form-group-detail" span={11}>
            <label>S??? ph??ng t???m</label>
            <p>
              {detail?.bathroom_quantity
                ? detail?.bathroom_quantity
                : "Ch??a c???p nh???t"}
            </p>
          </Col>
          <Col className="form-group-detail" offset={1} span={11}>
            <label>S??? ph??ng ng???</label>
            <p>
              {detail?.bedroom_quantity
                ? detail?.bedroom_quantity
                : "Ch??a c???p nh???t"}
            </p>
          </Col>
        </Row>
      </Modal>

      <p className="title">Danh s??ch m???c ti??u quan t??m</p>
      <p
        className="button-add"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        <i className="far fa-plus-square"></i> Th??m m???c ti??u
      </p>
      <Spin
        indicator={antIcon}
        spinning={loading}
        style={{ maxHeight: "100%" }}
      >
        <List
          className="listing-post-profile"
          itemLayout="vertical"
          size="small"
          dataSource={listTarget}
          pagination={{
            pageSize: 10,
          }}
          renderItem={(item) => (
            <List.Item
              className="item"
              style={{ borderBottom: "0" }}
              key={item.id}
            >
              <ItemTarget
                detail={(detail) => {
                  setDetail(detail);
                  setIsDetail(true);
                }}
                updateItem={updateItem}
                deleteItem={deleteItem}
                item={item}
              />
            </List.Item>
          )}
        ></List>
      </Spin>
    </div>
  );
}

export default ListingTarget;
