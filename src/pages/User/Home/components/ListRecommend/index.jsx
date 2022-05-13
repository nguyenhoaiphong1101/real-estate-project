import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";
import jwtDecode from "jwt-decode";
import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { loadListRecommend } from "../../../../../actions/recommend";
import ThumbnailRecomend from "../../../../../components/Thumbnail/ThumbnailRecommend";
import "./styles.scss";
import qs from "query-string";

function ListRecomend(props) {
  const slide = useRef(null);
  const [isIndex, setIsIndex] = useState(0);
  const listRecommend = useSelector((state) => state.recommend.listRecommend);
  const loading = useSelector((state) => state.recommend.loading);
  const paramsQuery = qs.parse(window.location.search);
  const type_apartment = paramsQuery.type_apartment
    ? paramsQuery.type_apartment
    : "BUY";

  const dispatch = useDispatch();

  const token = localStorage.getItem("access_token");
  useEffect(() => {
    if (!listRecommend.length)
      dispatch(
        loadListRecommend({
          user_id: token ? jwtDecode(token).id : null,
          type_apartment,
        })
      );
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setIsIndex(next);
    },
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
          {loading ? (
            <div className="skeleton-container">
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
            <div className="slick-slider-product">
              <button
                className={`button-prev ${isIndex === 0 ? "disable-btn" : ""}`}
                disabled={isIndex === 0}
                onClick={previous}
              >
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
              <button
                className={`button-next ${
                  isIndex === listRecommend.length - 4 ? "disable-btn" : ""
                }`}
                disabled={isIndex === listRecommend.length - 4}
                onClick={next}
              >
                <RightOutlined style={{ color: "black", fontSize: "16px" }} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListRecomend;
