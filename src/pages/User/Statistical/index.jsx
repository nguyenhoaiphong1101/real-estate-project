import React, { useEffect, useState } from "react";
import { Select, Row, Col, Tooltip, message, Spin } from "antd";
import { Bar, Doughnut, Line, Radar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import "./styles.scss";
import jwt_decode from "jwt-decode";
import ThumbnailPrimary from "../../../components/Thumbnail/ThumbnailPrimary";
import ThumbnailExtra from "../../../components/Thumbnail/ThumbnailExtra";
import {
  selectAreaFrom,
  selectAreaTo,
  selectPriceFrom,
  selectPriceTo,
} from "../../../constants/DataConfig";
import { province } from "../../../api/searchApi";
import { getStatistic, getStatisticRank } from "../../../api/userApi";
import { BarChartOutlined, LoadingOutlined } from "@ant-design/icons";

function Statistical(props) {
  const [targetChart, setTargetChart] = useState([
    {
      id: "1",
      title: "Giá trị",
    },
    {
      id: "2",
      title: "Diện tích",
    },
  ]);
  const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;
  const [typeChart, setTypeChart] = useState("1");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [priceFromCate, setPriceFromCate] = useState("");
  const [priceToCate, setPriceToCate] = useState("");
  const [areaFromCate, setAreaFromCate] = useState("");
  const [areaToCate, setAreaToCate] = useState("");
  const [priceFromTar, setPriceFromTar] = useState("");
  const [priceToTar, setPriceToTar] = useState("");
  const [areaFromTar, setAreaFromTar] = useState("");
  const [areaToTar, setAreaToTar] = useState("");
  const [listCity, setListCity] = useState([]);
  const [listHot, setListHot] = useState([]);
  const [listInfo, setListInfo] = useState([]);
  const [listRank, setListRank] = useState([]);
  const [categoryChart, setCategoryChart] = useState("1");
  const [target, setTarget] = useState("1");
  const [from, setFrom] = useState("100000000");
  const [to, setTo] = useState("100000000");
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const [dataChart, setDataChart] = useState({
    // label: "",
    // labelColumn: [],
    // color: "rgb(255, 214, 115,0.5)",
    // colorBorder: "rgba(255, 214, 115,1)",
    // data: [],
  });

  useEffect(() => {
    province.GET().then((res) => {
      setListCity(res);
    });
    getStatisticRank.GET().then((res) => {
      setListRank(res);
    });
    return () => {
      setListCity([]);
    };
  }, []);

  const changeTarger = (e) => {
    setTarget("");
    if (e === "1") {
      setTargetChart([
        {
          id: "1",
          title: "Giá trị",
        },
        {
          id: "2",
          title: "Diện tích",
        },
      ]);
    }
    if (e === "2") {
      setTargetChart([
        {
          id: "3",
          title: "Thành phố",
        },
        {
          id: "1",
          title: "Giá trị",
        },
      ]);
    }
    if (e === "3") {
      setTargetChart([
        {
          id: "3",
          title: "Thành phố",
        },
        {
          id: "2",
          title: "Diện tích",
        },
      ]);
    }
  };

  const onCompare = () => {
    var params = {};
    setLoading(true);
    if (categoryChart && target) {
      if (categoryChart === "1") {
        if (
          target === "2" &&
          (areaToTar || areaToTar === 0) &&
          (areaFromTar || areaFromTar === 0) &&
          city
        ) {
          if (areaFromTar >= (areaToTar === -1 ? 1100 : areaToTar)) {
            message.error("Giá trị bắt đầu phải nhỏ hơn giá trị kết thúc !");
            return;
          } else {
            params = {
              statistic: "CITY",
              criteria: "AREA",
              statistic_city_id: city,
              criteria_from: areaFromTar,
              criteria_to: areaToTar,
            };
          }
        } else {
          if (
            target === "1" &&
            (priceToTar || priceToTar === 0) &&
            (priceFromTar || priceFromTar === 0) &&
            city
          ) {
            if (
              priceFromTar >= (priceToTar === -1 ? 11000000000 : priceToTar)
            ) {
              message.error("Giá trị bắt đầu phải nhỏ hơn giá trị kết thúc !");
              return;
            } else {
              params = {
                statistic: "CITY",
                criteria: "PRICE",
                statistic_city_id: city,
                criteria_from: priceFromTar,
                criteria_to: priceToTar,
              };
            }
          } else {
            message.error("Bạn vui lòng chọn đủ thông tin!");
            return;
          }
        }
      }
      if (categoryChart === "2") {
        if (
          target === "3" &&
          (areaToCate || areaToCate === 0) &&
          (areaFromCate || areaFromCate === 0)
        ) {
          if (areaFromCate >= (areaToCate === -1 ? 1100 : areaToCate)) {
            message.error("Giá trị bắt đầu phải nhỏ hơn kết thúc !");
            return;
          } else {
            params = {
              statistic: "AREA",
              criteria: "CITY",
              statistic_from: areaFromCate,
              statistic_to: areaToCate,
            };
          }
        } else {
          if (
            target === "1" &&
            (priceToTar || priceToTar === 0) &&
            (priceFromTar || priceFromTar === 0) &&
            (areaToCate || areaToCate === 0) &&
            (areaFromCate || areaFromCate === 0)
          ) {
            if (
              priceFromTar >= (priceToTar === -1 ? 11000000000 : priceToTar) ||
              areaFromCate >= (areaToCate === -1 ? 1100 : areaToCate)
            ) {
              message.error("Giá trị bắt đầu phải nhỏ hơn giá trị kết thúc !");
              return;
            } else {
              params = {
                statistic: "AREA",
                criteria: "PRICE",
                statistic_from: areaFromCate,
                statistic_to: areaToCate,
                criteria_from: priceFromTar,
                criteria_to: priceToTar,
              };
            }
          } else {
            message.error("Bạn vui lòng chọn đủ thông tin !");
            return;
          }
        }
      }
      if (categoryChart === "3") {
        if (
          target === "3" &&
          (priceToCate || priceToCate === 0) &&
          (priceFromCate || priceFromCate === 0)
        ) {
          if (
            priceFromCate >= (priceToCate === -1 ? 11000000000 : priceToCate)
          ) {
            message.error("Giá trị bắt đầu phải nhỏ hơn giá trị kết thúc !");
            return;
          } else {
            params = {
              statistic: "PRICE",
              criteria: "CITY",
              statistic_from: priceFromCate,
              statistic_to: priceToCate,
            };
          }
        } else {
          if (
            target === "2" &&
            (priceToCate || priceToCate === 0) &&
            (priceFromCate || priceFromCate === 0) &&
            (areaToTar || areaToTar === 0) &&
            (areaFromTar || areaFromTar === 0)
          ) {
            if (
              priceFromCate >=
                (priceToCate === -1 ? 11000000000 : priceToCate) ||
              areaFromTar >= (areaToTar === -1 ? 1100 : areaToTar)
            ) {
              message.error("Giá trị bắt đầu phải nhỏ hơn giá trị kết thúc !");
              return;
            } else {
              params = {
                statistic: "PRICE",
                criteria: "AREA",
                statistic_from: priceFromCate,
                statistic_to: priceToCate,
                criteria_from: areaFromTar,
                criteria_to: areaToTar,
              };
            }
          } else {
            message.error("Bạn vui lòng chọn đủ thông tin !");
            return;
          }
        }
      }
    } else {
      message.error("Bạn vui lòng chọn đủ thông tin !");
      return;
    }

    if (token !== null) {
      params.user_id = jwt_decode(token).id;
    }
    getStatistic.GET(params).then((res) => {
      setLoading(false);
      if (categoryChart === "1") {
        setDataChart({
          label: `Thống kê theo thành phố ( tiêu chí dựa trên : ${
            target === "1" ? "giá trị" : "diện tích"
          } )`,
          labelColumn: res.labels,
          color: "rgb(255, 214, 115,0.5)",
          colorBorder: "rgba(255, 214, 115,1)",
          data: res.data,
        });
      }
      if (categoryChart === "2") {
        setDataChart({
          label: `Thống kê theo diện tích ( tiêu chí dựa trên : ${
            target === "1" ? "giá trị" : "thành phố"
          } )`,
          labelColumn: res.labels,
          color: "rgba(149,125,173,0.5)",
          colorBorder: "rgba(149,125,173,1)",
          data: res.data,
        });
      }
      if (categoryChart === "3") {
        setDataChart({
          label: `Thống kê theo giá trị ( tiêu chí dựa trên : ${
            target === "2" ? "diện tích" : "thành phố"
          } )`,
          labelColumn: res.labels,
          color: "rgba(149,125,173,0.5)",
          colorBorder: "rgba(149,125,173,1)",
          data: res.data,
        });
      }
      setListHot(res.highLightApartments);
      setListInfo(res.totalStatisticDto);
    });
  };

  return (
    <div className="main-statis">
      <div className="sub-header">
        <div className="container">
          <div className="subheader-inner">
            <h1 className="title">{props.title}</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>
                    <i className="fas fa-home"></i>
                  </a>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  {props.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="content-statis">
        <h1 className="title">Biểu đồ thống kê</h1>
        <div className="list-search">
          <Row>
            <Col span={18}>
              <Row>
                <Col span={8}>
                  <div className="group-search">
                    <div className="label-item">
                      <label>Thống kê : </label>
                    </div>
                    <Select
                      className="select"
                      value={categoryChart}
                      onChange={(e) => {
                        setCategoryChart(e);
                        changeTarger(e);
                        setCity("");
                        setAreaFromCate("");
                        setAreaToCate("");
                        setAreaFromTar("");
                        setAreaToTar("");
                        setPriceFromCate("");
                        setPriceFromTar("");
                        setPriceToCate("");
                        setPriceToTar("");
                      }}
                      style={{ width: 160 }}
                    >
                      <Select.Option value="1">Theo thành phố</Select.Option>
                      <Select.Option value="2">Theo diện tích</Select.Option>
                      <Select.Option value="3">Theo giá trị</Select.Option>
                    </Select>
                  </div>
                </Col>
                {categoryChart === "1" ? (
                  <Col span={8}>
                    <div className="group-search">
                      <div className="label-item">
                        <label>Thành phố : </label>
                      </div>
                      <Select
                        className="select"
                        value={city ? city : ""}
                        onChange={(e) => {
                          setCity(e);
                        }}
                        style={{ width: 160 }}
                      >
                        {listCity
                          ? listCity.map((item) => {
                              return (
                                <Select.Option key={item.id} value={item.id}>
                                  {item.name}
                                </Select.Option>
                              );
                            })
                          : null}
                      </Select>
                    </div>
                  </Col>
                ) : null}
                {categoryChart === "1" ? null : categoryChart === "2" ? (
                  <Col span={8}>
                    <div className="group-search">
                      <div className="label-item">
                        <label>Bắt đầu :</label>
                      </div>
                      <Select
                        className="select"
                        value={areaFromCate}
                        onChange={(e) => {
                          setAreaFromCate(e);
                        }}
                        style={{ width: 160 }}
                      >
                        {selectAreaFrom.map((item) => {
                          return (
                            <Select.Option key={item.id} value={item.value}>
                              {item.label}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </Col>
                ) : (
                  <Col span={8}>
                    <div className="group-search">
                      <div className="label-item">
                        <label>Bắt đầu :</label>
                      </div>
                      <Select
                        className="select"
                        value={priceFromCate}
                        onChange={(e) => {
                          setPriceFromCate(e);
                        }}
                        style={{ width: 160 }}
                      >
                        {selectPriceFrom.map((item) => {
                          return (
                            <Select.Option key={item.id} value={item.value}>
                              {item.label}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </Col>
                )}

                {categoryChart === "1" ? null : categoryChart === "2" ? (
                  <Col span={8}>
                    <div className="group-search">
                      <div className="label-item">
                        <label>Kết thúc:</label>
                      </div>
                      <Select
                        className="select"
                        value={areaToCate}
                        onChange={(e) => {
                          setAreaToCate(e);
                        }}
                        style={{ width: 160 }}
                      >
                        {selectAreaTo.map((item) => {
                          return (
                            <Select.Option key={item.id} value={item.value}>
                              {item.label}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </Col>
                ) : (
                  <Col span={8}>
                    <div className="group-search">
                      <div className="label-item">
                        <label>Kết thúc:</label>
                      </div>
                      <Select
                        className="select"
                        value={priceToCate}
                        onChange={(e) => {
                          setPriceToCate(e);
                        }}
                        style={{ width: 160 }}
                      >
                        {selectPriceTo.map((item) => {
                          return (
                            <Select.Option key={item.id} value={item.value}>
                              {item.label}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </Col>
                )}
              </Row>
              <Row>
                <Col span={8}>
                  <div className="group-search">
                    <div className="label-item">
                      <label>Tiêu chí :</label>
                    </div>
                    <Select
                      className="select"
                      onChange={(e) => {
                        setTarget(e);
                        setAreaFromTar("");
                        setAreaToTar("");
                        setPriceToTar("");
                        setPriceFromTar("");
                      }}
                      value={target}
                      style={{ width: 160 }}
                    >
                      {targetChart.map((item) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.title}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </div>
                </Col>
                {target === "3" || target === "" ? null : target === "2" ? (
                  <Col span={8}>
                    <div className="group-search">
                      <div className="label-item">
                        <label>Bắt đầu :</label>
                      </div>
                      <Select
                        className="select"
                        value={areaFromTar}
                        onChange={(e) => {
                          setAreaFromTar(e);
                        }}
                        style={{ width: 160 }}
                      >
                        {selectAreaFrom.map((item) => {
                          return (
                            <Select.Option key={item.id} value={item.value}>
                              {item.label}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </Col>
                ) : (
                  <Col span={8}>
                    <div className="group-search">
                      <div className="label-item">
                        <label>Bắt đầu :</label>
                      </div>
                      <Select
                        className="select"
                        value={priceFromTar}
                        onChange={(e) => {
                          setPriceFromTar(e);
                        }}
                        style={{ width: 160 }}
                      >
                        {selectPriceFrom.map((item) => {
                          return (
                            <Select.Option key={item.id} value={item.value}>
                              {item.label}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </Col>
                )}
                {target === "3" || target === "" ? null : target === "2" ? (
                  <Col span={8}>
                    <div className="group-search">
                      <div className="label-item">
                        <label>Kết thúc:</label>
                      </div>
                      <Select
                        className="select"
                        value={areaToTar}
                        onChange={(e) => {
                          setAreaToTar(e);
                        }}
                        style={{ width: 160 }}
                      >
                        {selectAreaTo.map((item) => {
                          return (
                            <Select.Option key={item.id} value={item.value}>
                              {item.label}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </Col>
                ) : (
                  <Col span={8}>
                    <div className="group-search">
                      <div className="label-item">
                        <label>Kết thúc:</label>
                      </div>
                      <Select
                        className="select"
                        value={priceToTar}
                        onChange={(e) => {
                          setPriceToTar(e);
                        }}
                        style={{ width: 160 }}
                      >
                        {selectPriceTo.map((item) => {
                          return (
                            <Select.Option key={item.id} value={item.value}>
                              {item.label}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </div>
                  </Col>
                )}
              </Row>
            </Col>
            <Col className="column-btn" span={6}>
              <button type="submit" className="btn-submit" onClick={onCompare}>
                Thống kê
              </button>
            </Col>
          </Row>
        </div>
        <Row className="main-chart">
          <Col
            className={
              Object.keys(dataChart).length
                ? "left-chart"
                : "left-chart flex-center"
            }
            span={18}
          >
            <Spin
              indicator={antIcon}
              spinning={loading}
              style={{ maxHeight: "100%" }}
            >
              {Object.keys(dataChart).length ? (
                <>
                  <div className="group-search">
                    <label>Biểu đồ:</label>
                    <Select
                      className="select"
                      defaultValue="1"
                      onChange={(e) => {
                        setTypeChart(e);
                      }}
                      style={{ width: 150 }}
                    >
                      <Select.Option value="1">Cột</Select.Option>
                      <Select.Option value="2">Đường</Select.Option>
                      <Select.Option value="3">Radar</Select.Option>
                    </Select>
                  </div>

                  <div>
                    {typeChart === "1" ? (
                      <Bar
                        className="chart"
                        height={500}
                        data={{
                          labels: dataChart.labelColumn,
                          datasets: [
                            {
                              label: dataChart.label,
                              data: dataChart.data,
                              backgroundColor: dataChart.color,
                              borderColor: dataChart.colorBorder,
                              hoverBackgroundColor: dataChart.colorBorder,
                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                        }}
                      />
                    ) : typeChart === "2" ? (
                      <Line
                        className="chart"
                        height={500}
                        data={{
                          labels: dataChart.labelColumn,
                          datasets: [
                            {
                              label: dataChart.label,
                              data: dataChart.data,
                              fill: true,
                              pointBorderWidth: 5,
                              tension: 0.2,
                              backgroundColor: dataChart.color,
                              borderColor: dataChart.colorBorder,
                              hoverBackgroundColor: dataChart.colorBorder,
                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                        }}
                      />
                    ) : (
                      <Radar
                        className="chart"
                        height={500}
                        data={{
                          labels: dataChart.labelColumn,
                          datasets: [
                            {
                              label: dataChart.label,
                              data: dataChart.data,
                              backgroundColor: dataChart.color,
                              borderColor: dataChart.colorBorder,
                              hoverBackgroundColor: dataChart.colorBorder,
                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                        }}
                      />
                    )}
                  </div>
                </>
              ) : (
                <div
                  className="flex-center"
                  style={{ flexDirection: "column" }}
                >
                  <BarChartOutlined
                    style={{ fontSize: "200px", color: "#e5e5eb" }}
                  />
                  <p className="warning-title">
                    Vui lòng chọn dữ liệu thống kê
                  </p>
                </div>
              )}
            </Spin>
          </Col>
          <Col span={6}>
            <div className="right-chart">
              <div className="group-item">
                <i
                  className="far fa-clipboard"
                  style={{ color: "rgb(149,125,173)" }}
                ></i>
                <div>
                  <label>Số lượng bất động sản</label>
                  <p>
                    {listInfo.total_apartment
                      ? listInfo.total_apartment
                      : "Chưa cập nhật"}
                  </p>
                </div>
              </div>
              <div className="group-item">
                <i
                  className="far fa-money-bill-alt"
                  style={{ color: "#61c7c7" }}
                ></i>
                <div>
                  <label>Tổng giá trị khu vực</label>
                  <p>
                    {listInfo.total_price
                      ? listInfo.total_price
                      : "Chưa cập nhật"}
                  </p>
                </div>
              </div>
              <div className="group-item">
                <i className="fas fa-coins" style={{ color: "#ffd673" }}></i>
                <div>
                  <label>Giá trị trung bình</label>
                  <p>
                    {listInfo.average_price
                      ? listInfo.average_price
                      : "Chưa cập nhật"}
                  </p>
                </div>
              </div>
              <div className="group-item">
                <i
                  className="fas fa-chart-area"
                  style={{ color: "#ffa852" }}
                ></i>
                <div>
                  <label>Tổng diện tích khu vưc</label>
                  <p>
                    {listInfo.total_square
                      ? listInfo.total_square
                      : "Chưa cập nhật"}
                  </p>
                </div>
              </div>
              <div className="group-item">
                <i className="fas fa-mountain" style={{ color: "#a6570a" }}></i>
                <div>
                  <label>Diện tích trung bình</label>
                  <p>
                    {listInfo.average_square
                      ? listInfo.average_square
                      : "Chưa cập nhật"}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="rating">
          <Col span={24}>
            <h1 className="title-rating">Bảng đánh giá xếp hạng</h1>
          </Col>
          <Col span={8}>
            <div className="group-rating">
              <label>Bài đăng</label>
              <p>
                <span style={{ color: "#ffda81" }}>1st.</span>{" "}
                {listRank?.total_posts
                  ? listRank?.total_posts[0]
                  : "Chưa cập nhật"}
              </p>
              <p>
                <span style={{ color: "#c1c3c4" }}>2nd.</span>{" "}
                {listRank?.total_posts
                  ? listRank?.total_posts[1]
                  : "Chưa cập nhật"}
              </p>
              <p>
                <span style={{ color: "#754821" }}>3rd.</span>{" "}
                {listRank?.total_posts
                  ? listRank?.total_posts[2]
                  : "Chưa cập nhật"}
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div className="group-rating">
              <label style={{ color: "#61c7c7" }}>Tổng giá trị</label>
              <p>
                <span style={{ color: "#ffda81" }}>1st.</span>{" "}
                {listRank?.total_prices
                  ? listRank?.total_prices[0]
                  : "Chưa cập nhật"}
              </p>
              <p>
                <span style={{ color: "#c1c3c4" }}>2nd.</span>{" "}
                {listRank?.total_prices
                  ? listRank?.total_prices[1]
                  : "Chưa cập nhật"}
              </p>
              <p>
                <span style={{ color: "#754821" }}>3rd.</span>{" "}
                {listRank?.total_prices
                  ? listRank?.total_prices[2]
                  : "Chưa cập nhật"}
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div className="group-rating">
              <label style={{ color: "#ffa852" }}>Tổng diện tích</label>
              <p>
                <span style={{ color: "#ffda81" }}>1st.</span>{" "}
                {listRank?.total_areas
                  ? listRank?.total_areas[0]
                  : "Chưa cập nhật"}
              </p>
              <p>
                <span style={{ color: "#c1c3c4" }}>2nd.</span>{" "}
                {listRank?.total_areas
                  ? listRank?.total_areas[1]
                  : "Chưa cập nhật"}
              </p>
              <p>
                <span style={{ color: "#754821" }}>3rd.</span>{" "}
                {listRank?.total_areas
                  ? listRank?.total_areas[2]
                  : "Chưa cập nhật"}
              </p>
            </div>
          </Col>
        </Row>

        {listHot.length >= 2 && listHot.length <= 3 ? (
          listHot.length === 3 ? (
            <Row>
              <Col span={24}>
                <h1
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    marginTop: "30px",
                    marginBottom: "40px",
                  }}
                >
                  Một số bất động sản nổi bật liên quan đến thống kê
                </h1>
              </Col>
              <Col span={16}>
                <Col style={{ paddingBottom: "20px" }} span={24}>
                  <ThumbnailExtra listLatestNew={listHot[0]} />
                </Col>
                <Col span={24}>
                  <ThumbnailExtra listLatestNew={listHot[1]} />
                </Col>
              </Col>
              <Col span={8} style={{ paddingLeft: "10px" }}>
                <ThumbnailPrimary listLatestNew={listHot[2]} />
              </Col>
            </Row>
          ) : (
            <Row>
              <Col span={24}>
                <h1
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "2.2rem",
                    marginTop: "60px",
                    marginBottom: "40px",
                  }}
                >
                  Một số bất động sản nổi bật liên quan đến thống kê
                </h1>
              </Col>
              <Col span={12}>
                <ThumbnailPrimary listLatestNew={listHot[0]} />
              </Col>
              <Col span={12}>
                <ThumbnailPrimary listLatestNew={listHot[1]} />
              </Col>
            </Row>
          )
        ) : null}
      </div>
    </div>
  );
}

export default Statistical;
