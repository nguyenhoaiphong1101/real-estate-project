import React from "react";
import { Col, Row } from "antd";
import "./styles.scss";
import { useHistory } from "react-router-dom";

function SectionFunction() {
  const history = useHistory();
  return (
    <div className="section-function">
      <div className="container">
        <Row>
          <Col span={12} style={{ paddingRight: "20px" }}>
            <div className="item-wrapper">
              <i className="flaticon-sales-agent item--blue"></i>
              <div className="content">
                <h4>Mua nhà?</h4>
                <p>
                  Bạn muốn tìm một căn nhà để định cư lâu dài? Đây sẽ là sự lựa
                  chọn phù hợp dành cho bạn
                </p>
                <a
                  onClick={() => {
                    history.push("/nha-dat-ban");
                  }}
                  className="btn-link item--blue"
                >
                  Tìm hiểu thêm
                  <i className="fas fa-arrow-right item--blue"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col span={12} style={{ paddingLeft: "20px" }}>
            <div className="item-wrapper">
              <i className="flaticon-sold item--green"></i>
              <div className="content">
                <h4>Thuê nhà</h4>
                <p>
                  Bạn muốn thay đổi không gian sống? Nhiều sự lựa chọn hấp dẫn
                  đang chờ đợi bạn.
                </p>
                <a
                  onClick={() => {
                    history.push("/nha-dat-thue");
                  }}
                  className="btn-link item--green"
                >
                  Tìm hiểu thêm
                  <i className="fas fa-arrow-right item--green"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SectionFunction;
