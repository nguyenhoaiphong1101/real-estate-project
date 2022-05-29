import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Row, Col, Collapse } from "antd";
import Feature from "./components/Feature";
import { useSelector } from "react-redux";
import { CheckOutlined } from "@ant-design/icons";
function SectionFeatures() {
  const detailHome = useSelector((state) => state.detailhome.detailHome);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  console.log(detailHome);
  useEffect(() => {
    setArr1([
      {
        icon: "flaticon-pillow",
        label: "Phòng ngủ",
        value: detailHome?.apartment_detail?.bedroom_quantity + " phòng",
      },
      {
        icon: "flaticon-bathtub",
        label: "Phòng tắm",
        value: detailHome?.apartment_detail?.bathroom_quantity + " phòng",
      },
      {
        icon: "flaticon-ruler",
        label: "Số tầng",
        value: detailHome?.apartment_detail?.floor_quantity,
      },
    ]);
    setArr2([
      {
        icon: "flaticon-bathtub",
        label: "Nhà vệ sinh",
        value: detailHome?.apartment_detail?.toilet_quantity + " phòng",
      },
      {
        icon: "flaticon-ruler",
        label: "Kích thước",
        value: detailHome?.area + "m2",
      },
      {
        icon: "flaticon-new",
        label: "Tình trạng",
        value: detailHome?.type_apartment,
      },
    ]);
  }, [detailHome]);

  return (
    <div className="section-feature">
      <Collapse ghost defaultActiveKey={1}>
        <Collapse.Panel
          className="collapse-feature"
          header={<h4 className="title">Đặc điểm</h4>}
          key="1"
        >
          <div className="container-fluid wrapper">
            <div className="list-feature">
              <Row>
                <Col span={12}>
                  {arr1.map((item, index) => {
                    return (
                      <Feature
                        key={index}
                        icon={item?.icon}
                        label={item?.label}
                        value={item?.value}
                      />
                    );
                  })}
                </Col>
                <Col span={12}>
                  {arr2.map((item, index) => {
                    return (
                      <Feature
                        key={index}
                        icon={item?.icon}
                        label={item?.label}
                        value={item?.value}
                      />
                    );
                  })}
                </Col>
              </Row>
            </div>
          </div>
        </Collapse.Panel>
        {detailHome?.apartment_detail?.more_info.length &&
        detailHome?.apartment_detail?.more_info[0] ? (
          <Collapse.Panel
            className="collapse-feature"
            header={<h4 className="title">Thông tin thêm</h4>}
            key="2"
          >
            <Row>
              {detailHome.apartment_detail.more_info.map((item, index) => (
                <Col
                  key={index}
                  span={
                    detailHome.apartment_detail.more_info.length > 5 ? 12 : 24
                  }
                  className="more-tag"
                >
                  <i className="fas fa-check"></i>{" "}
                  <p>
                    {item.trim().charAt(0).toUpperCase() + item.trim().slice(1)}
                  </p>
                </Col>
              ))}
            </Row>
          </Collapse.Panel>
        ) : null}
      </Collapse>
    </div>
  );
}

export default SectionFeatures;
