import React, { useEffect } from "react";
import { Button, Col, Row } from "antd";
import "./styles.scss";
import ThumbnailPrimary from "../../../../../components/Thumbnail/ThumbnailPrimary";
import { useDispatch, useSelector } from "react-redux";
import { loadListLatestNew } from "../../../../../actions/latestnew";

function SectionRecentList() {
  const listLatestNew = useSelector((state) => state.latestnew.listLatestNew);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadListLatestNew());
  }, []);
  return (
    <div className="section-recent-list">
      <div className="title">Bất động sản gần đây</div>
      <Row className="container">
        {listLatestNew.map((item, index) => (
          <Col className="item" span={6} key={index}>
            <ThumbnailPrimary listLatestNew={item} />
          </Col>
        ))}
      </Row>
      {listLatestNew.length > 8 ? (
        <Button className="btn-more">Xem thêm</Button>
      ) : null}
    </div>
  );
}

export default SectionRecentList;
