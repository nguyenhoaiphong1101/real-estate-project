import { Button, Col, Row, Select, Carousel } from "antd";
import React, { useRef } from "react";
import Slider from "react-slick";
import { listDemoProduct } from "../../../../../constants/Config";
import { listProvinceDemo } from "../../../../../constants/DataConfig";
import "./styles.scss";
import ThumbnailPrimary from "../../../../../components/Thumbnail/ThumbnailPrimary";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function ListAboutProduct(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

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
                showSearch
                className="select-province"
                style={{ minWidth: "fit-content" }}
                bordered={false}
                defaultValue={1}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                options={listProvinceDemo}
              />
              <p className="title-quality">Tìm thấy 40 tin đăng</p>
            </div>
            <Button className="btn-more">Xem thêm</Button>
          </div>
        </Col>
        <Col span={18} className="slick-slider-product">
          <button className="button-prev" onClick={previous}>
            <LeftOutlined style={{ color: "black", fontSize: "16px" }} />
          </button>
          <div>
            <Slider ref={slide} {...settings}>
              {listDemoProduct.map((item, index) => {
                if (index < 10)
                  return (
                    <div key={index} style={{ paddingRight: "5px !important" }}>
                      <ThumbnailPrimary listLatestNew={item} />
                    </div>
                  );
              })}
            </Slider>
          </div>
          <button className="button-next" onClick={next}>
            <RightOutlined style={{ color: "black", fontSize: "16px" }} />
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default ListAboutProduct;
