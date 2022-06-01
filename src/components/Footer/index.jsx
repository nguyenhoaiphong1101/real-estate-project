import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./styles.scss";
import Images from "./../../constants/Images";
import qs from "query-string";
import { useLocation } from "react-router-dom";

function Footer(props) {
  const [type_apartment, set_type_apartment] = useState("BUY");
  const location = useLocation();
  const paramsQuery = qs.parse(location.search);
  useEffect(() => {
    set_type_apartment(paramsQuery.type_apartment || "BUY");
  }, [location]);
  return (
    <div className="footer-container">
      <div className="container">
        <div className="footer-top">
          <Row className="footer-col-wrap">
            <Col span={12} className="footer-col col-1">
              <img className="nav-logo" src={Images.LOGO} alt="logo" />
              <p>
                Tập trung vào chất lượng công trình, đảm bảo an toàn, dựng lên
                đẳng cấp và tạo ra lợi ích cho mọi người
              </p>
            </Col>
            <Col span={12} className="footer-col col-2">
              <Row className="align-right">
                <Col span={8}>
                  <h2>Danh mục</h2>
                  <ul>
                    <li>
                      <a
                        href={`/${
                          type_apartment === "BUY"
                            ? "nha-dat-ban"
                            : "nha-dat-thue"
                        }`}
                      >
                        Tìm kiếm
                      </a>
                    </li>
                    <li>
                      <a href="/dang-bai-viet">Thêm danh sách</a>
                    </li>
                    <li>
                      <a
                        href={`/${
                          type_apartment === "BUY"
                            ? "nha-dat-ban"
                            : "nha-dat-thue"
                        }`}
                      >
                        Danh sách
                      </a>
                    </li>
                    <li>
                      <a>Blog</a>
                    </li>
                  </ul>
                </Col>
                <Col span={8}>
                  <h2>Thông tin</h2>
                  <ul>
                    <li>
                      <a>Về chúng tôi</a>
                    </li>
                    <li>
                      <a>Liên hệ chúng tôi</a>
                    </li>
                    <li>
                      <a>Dịch vụ</a>
                    </li>
                    <li>
                      <a>FAQ</a>
                    </li>
                  </ul>
                </Col>
                <Col span={8}>
                  <h2>Pháp lý</h2>
                  <ul>
                    <li>
                      <a>Chính sách bảo mật</a>
                    </li>
                    <li>
                      <a>Chính sách hoàn trả</a>
                    </li>
                    <li>
                      <a>Chính sách Cookie</a>
                    </li>
                    <li>
                      <a>Điều khoản pháp lý</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <Row>
            <Col span={12}>
              <p>© Copyright 2022 - KTPM 2018</p>
            </Col>
            {/* <Col span={12}>
              <ul className="nav-link">
                <li>
                  <a href="/">Tìm nhà</a>
                </li>
                <li>
                  <a href="/">Thêm danh sách</a>
                </li>
                <li>
                  <a href="/">Xem đại lý</a>
                </li>
              </ul>
            </Col> */}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
