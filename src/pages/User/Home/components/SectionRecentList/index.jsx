import React, { useEffect } from "react";
import { Button, Col, Row } from "antd";
import "./styles.scss";
import { listDemoProduct } from "../../../../../constants/Config";
import ThumbnailPrimary from "../../../../../components/Thumbnail/ThumbnailPrimary";

function SectionRecentList() {
  return (
    <div className="section-recent-list">
      <div className="title">Bất động sản gần đây</div>
      <Row className="container">
        {listDemoProduct.map((item, index) => (
          <Col className="item" span={6} key={index}>
            <ThumbnailPrimary listLatestNew={item} />
          </Col>
        ))}
      </Row>
      <Button className="btn-more">Xem thêm</Button>
    </div>
  );
}

export default SectionRecentList;
