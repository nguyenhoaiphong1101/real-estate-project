import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import ThumbnailRecomend from "../../../../../components/Thumbnail/ThumbnailRecommend";
import "./styles.scss";

function ListRecomend(props) {
  const slide = useRef(null);
  const listRecommend = useSelector((state) => state.recommend.listRecommend);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const next = () => {
    slide.current.slickNext();
  };
  const previous = () => {
    slide.current.slickPrev();
  };

  return (
    <div>
      <div className="container">
        <div className="title-recomend">
          <h2>Có thể bạn sẽ quan tâm</h2>
          <div className="slick-slider-product">
            <button className="button-prev" onClick={previous}>
              <LeftOutlined style={{ color: "black", fontSize: "16px" }} />
            </button>
            <div>
              <Slider ref={slide} {...settings}>
                {listRecommend.map((item, index) => {
                  if (index < 10)
                    return (
                      <div key={index}>
                        <ThumbnailRecomend list={item} />
                      </div>
                    );
                })}
              </Slider>
            </div>
            <button className="button-next" onClick={next}>
              <RightOutlined style={{ color: "black", fontSize: "16px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListRecomend;
