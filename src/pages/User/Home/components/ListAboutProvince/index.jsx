import { Button, Col, Row, Select, Carousel } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./styles.scss";
import ThumbnailPrimary from "../../../../../components/Thumbnail/ThumbnailPrimary";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { loadListHighlight } from "../../../../../actions/highlight";
import { useDispatch, useSelector } from "react-redux";

function ListAboutProduct(props) {
  const [isIndex, setIsIndex] = useState(0);
  const [province_id, setProvince_id] = useState(1);
  const listHighlight = useSelector((state) => state.highlight.listHighlight);

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

  const listProvince = useSelector((state) => state.search.province);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadListHighlight({ province_id }));
  }, []);

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
        <Col span={6} style={{ paddingRight: "5px" }}>
          <div className="card-province">
            <div>
              <p className="title">Bất động sản nổi bật theo khu vực</p>
              <Select
                className="select-province"
                style={{ minWidth: "fit-content" }}
                bordered={false}
                onChange={(e) => {
                  setProvince_id(e);
                }}
                value={province_id}
                options={listProvince.map((item) => {
                  return {
                    value: item.id,
                    label: item.name,
                  };
                })}
              />
              <p className="title-quality">Tìm thấy 40 tin đăng</p>
            </div>
            <Button className="btn-more">Xem thêm</Button>
          </div>
        </Col>
        <Col span={18} className="slick-slider-product">
          {listHighlight.length > 3 ? (
            isIndex === 0 ? null : (
              <button className={`button-prev`} onClick={previous}>
                <LeftOutlined style={{ color: "black", fontSize: "16px" }} />
              </button>
            )
          ) : null}
          <div>
            <Slider ref={slide} {...settings}>
              {listHighlight.map((item, index) => {
                if (index < 10)
                  return (
                    <div key={index} style={{ paddingRight: "5px !important" }}>
                      <ThumbnailPrimary listLatestNew={item} />
                    </div>
                  );
              })}
            </Slider>
          </div>
          {listHighlight.length > 3 ? (
            isIndex === listHighlight.length - 3 ? null : (
              <button className={`button-next`} onClick={next}>
                <RightOutlined style={{ color: "black", fontSize: "16px" }} />
              </button>
            )
          ) : null}
        </Col>
      </Row>
    </div>
  );
}

export default ListAboutProduct;
