import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Tabs } from "antd";
import { loadDistrict } from "../../../../../actions/search";
import { loadListFilter } from "../../../../../actions/listfilter";
import { useHistory } from "react-router";
import Filter from "../../../../../components/FilterHome";

const { TabPane } = Tabs;

const diameters = [];

function Banner(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDistrict());
  }, []);

  return (
    <div className="banner-home" style={{ marginBottom: "20px" }}>
      <div className="container">
        <div className="banner-item">
          <div className="banner-inner">
            <div className="banner-text">
              <h1 className="title text-white">Find Your Ideal Home Today</h1>
              <p className="subtitle text-white">
                Tìm kiếm nơi ở phù hợp cho bạn ngay hôm nay. Hàng nghìn sự lựa
                chọn hoàn hảo đang chờ đợi{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="banner-filter">
          <div className="title-search">Tìm kiếm bất động sản</div>
          <div className="card-filter">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
