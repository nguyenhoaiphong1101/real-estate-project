import { Button, Col, Row, Select, Carousel, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./styles.scss";
import ThumbnailPrimary from "../../../../../components/Thumbnail/ThumbnailPrimary";
import {
  LeftOutlined,
  LoadingOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { loadListHighlight } from "../../../../../actions/highlight";
import { useDispatch, useSelector } from "react-redux";
import qs from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import { objectToQueryString } from "../../../../../constants/Config";
import Images from "../../../../../constants/Images";
import jwtDecode from "jwt-decode";

function ListAboutProduct(props) {
  const [isIndex, setIsIndex] = useState(0);
  const listHighlight = useSelector((state) => state.highlight.listHighlight);
  const loadingList = useSelector((state) => state.highlight.loadingList);
  const paramsQuery = qs.parse(window.location.search);
  const type_apartment = paramsQuery.type_apartment
    ? paramsQuery.type_apartment
    : "BUY";

  const history = useHistory();
  const location = useLocation();
  const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setIsIndex(next);
    },
  };
  const token = localStorage.getItem("access_token");
  const user_id = token ? jwtDecode(token).id : null;

  const listProvince = useSelector((state) => state.search.province);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      loadListHighlight({
        province_id: paramsQuery.highlight_province
          ? parseInt(paramsQuery.highlight_province)
          : 1,
        type_apartment,
        user_id,
      })
    );
  }, [location]);

  const slide = useRef(null);

  const next = () => {
    slide.current.slickNext();
  };
  const previous = () => {
    slide.current.slickPrev();
  };

  return (
    <div className="list-about-product">
      <Row className="container card">
        <Col span={6} style={{ paddingRight: "5px", paddingBottom: "6px" }}>
          <div className="card-province">
            <div>
              <p className="title">B???t ?????ng s???n n???i b???t theo khu v???c</p>
              <Select
                className="select-province"
                style={{ minWidth: "fit-content" }}
                bordered={false}
                onChange={(e) => {
                  history.push(
                    `?${objectToQueryString({
                      ...paramsQuery,
                      highlight_province: e,
                    })}`
                  );
                }}
                defaultValue={
                  paramsQuery.highlight_province
                    ? parseInt(paramsQuery.highlight_province)
                    : 1
                }
                options={listProvince.map((item) => {
                  return {
                    value: item.id,
                    label: item.name,
                  };
                })}
              />
              <p className="title-quality">
                T??m th???y {listHighlight.length} tin ????ng
              </p>
            </div>
            <img src={Images.MARKET} alt="#" />
            <Button
              className="btn-more"
              onClick={() => {
                history.push(
                  `/${
                    type_apartment === "BUY" ? "nha-dat-ban" : "nha-dat-thue"
                  }?${objectToQueryString({
                    province_id: paramsQuery.highlight_province || 1,
                  })}`
                );
              }}
            >
              Xem th??m
            </Button>
          </div>
        </Col>

        <Col
          span={18}
          className={loadingList ? "card-loading" : "slick-slider-product"}
        >
          {loadingList ? (
            <Spin
              indicator={antIcon}
              spinning={true}
              style={{ marginTop: "15px" }}
            ></Spin>
          ) : (
            <>
              {listHighlight.length > 3 ? (
                isIndex === 0 ? null : (
                  <button className={`button-prev`} onClick={previous}>
                    <LeftOutlined
                      style={{ color: "black", fontSize: "16px" }}
                    />
                  </button>
                )
              ) : null}
              <Slider ref={slide} {...settings}>
                {listHighlight.map((item, index) => {
                  if (index < 10)
                    return (
                      <div
                        key={index}
                        style={{ paddingRight: "5px !important" }}
                      >
                        <ThumbnailPrimary listLatestNew={item} />
                      </div>
                    );
                })}
              </Slider>
              {listHighlight.length > 4 ? (
                parseInt(isIndex) === 7 ? null : (
                  <button className={`button-next`} onClick={next}>
                    <RightOutlined
                      style={{ color: "black", fontSize: "16px" }}
                    />
                  </button>
                )
              ) : null}
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ListAboutProduct;
