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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setIsIndex(next);
    },
  };

  const listHighlight = useSelector((state) => state.highlight.listHighlight);
  const listProvince = useSelector((state) => state.search.province);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadListHighlight());
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
                defaultValue={1}
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
          <button
            className={`button-prev ${isIndex === 0 ? "disable-btn" : ""}`}
            disabled={isIndex === 0}
            onClick={previous}
          >
            <LeftOutlined style={{ color: "black", fontSize: "16px" }} />
          </button>
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
          <button
            className={`button-next ${
              isIndex === listHighlight.length - 3 ? "disable-btn" : ""
            }`}
            disabled={isIndex === listHighlight.length - 3}
            onClick={next}
          >
            <RightOutlined style={{ color: "black", fontSize: "16px" }} />
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default ListAboutProduct;
