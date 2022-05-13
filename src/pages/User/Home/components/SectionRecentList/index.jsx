import React, { useEffect, useState } from "react";
import { Button, Col, Row, Skeleton, Spin } from "antd";
import "./styles.scss";
import ThumbnailPrimary from "../../../../../components/Thumbnail/ThumbnailPrimary";
import { useDispatch, useSelector } from "react-redux";
import { loadListLatestNew } from "../../../../../actions/latestnew";
import qs from "query-string";
import { LoadingOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

function SectionRecentList() {
  const [seeMore, setSeeMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const listLatestNew = useSelector((state) => state.latestnew.listLatestNew);
  const loadingList = useSelector((state) => state.latestnew.loadingList);
  const paramsQuery = qs.parse(window.location.search);
  const location = useLocation();
  const type_apartment = paramsQuery.type_apartment
    ? paramsQuery.type_apartment
    : "BUY";
  const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!paramsQuery.highlight_province)
      dispatch(loadListLatestNew({ type_apartment }));
  }, [location.search]);
  return (
    <div className="section-recent-list">
      <div className="title">Bất động sản gần đây</div>
      {loadingList ? (
        <div className="skeleton-container container">
          <div className="wrapper-item">
            <div className="skeleton-item">
              <Skeleton.Button
                active
                style={{ width: "90%", height: "12px" }}
                className="item-input"
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
            </div>
          </div>
          <div className="wrapper-item">
            <div className="skeleton-item">
              <Skeleton.Button
                active
                style={{ width: "90%", height: "12px" }}
                className="item-input"
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
            </div>
          </div>
          <div className="wrapper-item">
            <div className="skeleton-item">
              <Skeleton.Button
                active
                style={{ width: "90%", height: "12px" }}
                className="item-input"
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
            </div>
          </div>
          <div className="wrapper-item">
            <div className="skeleton-item">
              <Skeleton.Button
                active
                style={{ width: "90%", height: "12px" }}
                className="item-input"
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
              <Skeleton.Button
                className="item-input"
                active
                style={{ width: "50%", height: "10px" }}
                shape="round"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Row className="container">
            {listLatestNew.map((item, index) =>
              index < 8 ? (
                <Col className="item" span={6} key={index}>
                  <ThumbnailPrimary listLatestNew={item} />
                </Col>
              ) : null
            )}
            {seeMore && !loading
              ? listLatestNew.map((item, index) =>
                  index >= 8 ? (
                    <Col className="item" span={6} key={index}>
                      <ThumbnailPrimary listLatestNew={item} />
                    </Col>
                  ) : null
                )
              : null}
          </Row>
          <Spin
            indicator={antIcon}
            spinning={loading}
            style={{ marginTop: "15px" }}
          ></Spin>
          <Button
            className="btn-more"
            style={{ display: `${seeMore ? "none" : "block"}` }}
            onClick={() => {
              setSeeMore(true);
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }}
          >
            Xem thêm
          </Button>
        </>
      )}
    </div>
  );
}

export default SectionRecentList;
