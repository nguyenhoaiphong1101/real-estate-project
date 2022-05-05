import { Button, Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import qs from "query-string";
import FormFilter from "../FormFilter";
import {
  selectAreaFrom,
  selectAreaTo,
  selectPriceFrom,
  selectPriceTo,
} from "../../constants/DataConfig";
import {
  clearObject,
  objectToQueryString,
  quantity,
} from "../../constants/Config";
import { useHistory, useLocation } from "react-router-dom";

function FilterListing(props) {
  const listCategory = useSelector((state) => state.category.listCategory);
  const listProvince = useSelector((state) => state.search.province);
  const listDistrict = useSelector((state) => state.search.district);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [params, setParams] = useState({});
  const [listTag, setListTag] = useState([]);
  const location = useLocation();

  const paramsQuery = qs.parse(window.location.search);
  const [search, setSearch] = useState(paramsQuery.search || undefined);
  const [category_id, setCategory_id] = useState(
    Object.keys(paramsQuery).length
      ? paramsQuery.category_id
        ? parseInt(paramsQuery.category_id)
        : undefined
      : undefined
  );
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(paramsQuery).length) {
      setListTag([...getListTag()]);
      setIsModalVisible(false);
      setCategory_id(
        paramsQuery.category_id ? parseInt(paramsQuery.category_id) : undefined
      );
    }
  }, [location.search]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = (values) => {
    setIsModalVisible(false);
    setParams(values);
  };

  const onFilter = () => {
    var paramsSearch = { ...params };
    paramsSearch.search = search;
    paramsSearch.category_id = category_id;
    history.push(`?${objectToQueryString(clearObject(paramsSearch))}&page=1`);
  };

  const getListTag = () => {
    if (Object.keys(paramsQuery).length) {
      var list = [];
      for (let key in paramsQuery) {
        switch (key) {
          case "category_id": {
            list.push({
              key: "category_id",
              title: listCategory.filter(
                (item) => item.id === parseInt(paramsQuery[key])
              )[0]?.name,
              value: paramsQuery[key],
            });
            break;
          }
          case "district_id": {
            list.push({
              key: "district_id",
              title:
                "Quận/huyện: " +
                listDistrict.filter(
                  (item) => item.id === parseInt(paramsQuery[key])
                )[0]?.name,
            });
            break;
          }
          case "province_id": {
            list.push({
              key: "province_id",
              title:
                "Thành phố: " +
                listProvince.filter(
                  (item) => item.id === parseInt(paramsQuery[key])
                )[0]?.name,
            });
            break;
          }
          case "bedroom_quantity": {
            list.push({
              key: "bedroom_quantity",
              title:
                "Số phòng ngủ: " +
                quantity.filter(
                  (item) => item.value === parseInt(paramsQuery[key])
                )[0]?.label,
            });
            break;
          }
          case "toilet_quantity": {
            list.push({
              key: "toilet_quantity",
              title:
                "Số nhà vệ sinh: " +
                quantity.filter(
                  (item) => item.value === parseInt(paramsQuery[key])
                )[0]?.label,
            });
            break;
          }
          case "bathroom_quantity": {
            list.push({
              key: "bathroom_quantity",
              title:
                "Số phòng tắm: " +
                quantity.filter(
                  (item) => item.value === parseInt(paramsQuery[key])
                )[0]?.label,
            });
            break;
          }
          case "floor_quantity": {
            list.push({
              key: "floor_quantity",
              title:
                "Số tầng: " +
                quantity.filter(
                  (item) => item.value === parseInt(paramsQuery[key])
                )[0]?.label,
            });
            break;
          }
          case "area_from": {
            list.push({
              key: "area",
              title:
                "Diện tích: " +
                `${
                  selectAreaFrom.filter(
                    (item) => item.value === parseInt(paramsQuery.area_from)
                  )[0]?.label
                } - ${
                  selectAreaTo.filter(
                    (item) => item.value === parseInt(paramsQuery.area_to)
                  )[0]?.label
                }`,
            });
            break;
          }
          case "price_from": {
            list.push({
              key: "price",
              title:
                "Giá tiền: " +
                `${
                  selectPriceFrom.filter(
                    (item) => item.value === parseInt(paramsQuery.price_from)
                  )[0].label
                } - ${
                  selectPriceTo.filter(
                    (item) => item.value === parseInt(paramsQuery.price_to)
                  )[0].label
                }`,
            });
            break;
          }

          default:
            break;
        }
      }
      list
        .sort(function (a, b) {
          if (a.key === "price") {
            return -1;
          }
          return 0;
        })
        .sort(function (a, b) {
          if (a.key === "district_id") {
            return -1;
          }
          return 0;
        })
        .sort(function (a, b) {
          if (a.key === "province_id") {
            return -1;
          }
          return 0;
        })
        .sort(function (a, b) {
          if (a.key === "category_id") {
            return -1;
          }
          return 0;
        });
      return list;
    } else {
      return [];
    }
  };

  // useEffect(() => {
  //   if (Object.keys(paramsQuery).length) {

  //     setCategory_id(paramsQuery.category_id)
  //   } else {
  //     getContact({ page });
  //   }
  // }, [window.location.search]);

  return (
    <div className="section-filter-listing">
      <div className="filter-listing">
        <div className="select-category">
          <div className="title">Thể loại</div>
          <Select
            options={listCategory.map((item) => {
              return {
                value: item.id,
                label: item.name,
              };
            })}
            value={category_id}
            onChange={(e) => {
              setCategory_id(e);
            }}
            className="select"
            placeholder="All"
          />
        </div>
        <div className="input-search">
          <i className="fas fa-search"></i>
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="text-input"
            placeholder="Search name department"
          />
        </div>
        <Space>
          <Button className="btn-filter" onClick={showModal}>
            <i className="fas fa-sliders-h"></i>Lọc
          </Button>
          <Button className="btn-search" onClick={onFilter}>
            Tìm kiếm
          </Button>
        </Space>
      </div>
      {listTag.length ? (
        <div className="tag-params">
          {listTag.map((item, index) => (
            <div key={index} className="tag">
              {item.title}{" "}
              <i
                onClick={() => {
                  var listParamsTag = { ...paramsQuery };
                  if (item.key === "area") {
                    delete listParamsTag.area_from;
                    delete listParamsTag.area_to;
                  } else if (item.key === "price") {
                    delete listParamsTag.price_from;
                    delete listParamsTag.price_to;
                  } else if (item.key === "province_id") {
                    delete listParamsTag.province_id;
                    delete listParamsTag.district_id;
                  } else {
                    delete listParamsTag[item.key];
                  }
                  history.push(
                    `?${objectToQueryString(
                      clearObject({ ...listParamsTag, page: 1 })
                    )}`
                  );
                }}
                className="fas fa-times"
              ></i>
            </div>
          ))}
        </div>
      ) : null}

      <FormFilter
        listing={true}
        isModalVisible={isModalVisible}
        onFilter={onFilter}
        search={search}
        category_id={category_id}
        handleCancel={handleCancel}
        setParams={setParams}
      />
    </div>
  );
}

export default FilterListing;
