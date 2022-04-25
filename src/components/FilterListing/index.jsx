import { Button, Form, Input, Select, Space } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import qs from "query-string";
import FormFilter from "../FormFilter";

function FilterListing(props) {
  const listCategory = useSelector((state) => state.category.listCategory);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [params, setParams] = useState({});
  const paramsQuery = qs.parse(window.location.search);
  const [category_id, setCategory_id] = useState(
    Object.keys(paramsQuery).length
      ? parseInt(paramsQuery.category_id)
      : undefined
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = (values) => {
    setIsModalVisible(false);
    setParams(values);
  };

  const onFilter = (values) => {
    console.log(values);
  };

  const renderTag = () => {
    if (Object.keys(paramsQuery).length) {
      var listTag = [];
      for (let key in paramsQuery) {
        switch (key) {
          case "category_id": {
            listTag.push({
              key: "category_id",
              title: listCategory.filter(
                (item) => item.id === parseInt(paramsQuery[key])
              )[0]?.name,
              value: paramsQuery[key],
            });
            break;
          }
          default:
            break;
        }
      }
      return listTag.map((item, index) => (
        <div key={index} className="tag">
          {item.title} <i className="fas fa-times"></i>
        </div>
      ));
    } else {
      return null;
    }
  };
  // useEffect(() => {
  //   if (Object.keys(paramsQuery).length) {

  //     setCategory_id(paramsQuery.category_id)
  //   } else {
  //     getContact({ page });
  //   }
  // }, [window.location.search]);

  console.log(paramsQuery);
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
          <Input className="text-input" placeholder="Search name department" />
        </div>
        <Space>
          <Button className="btn-filter" onClick={showModal}>
            <i className="fas fa-sliders-h"></i>Lọc
          </Button>
          <Button className="btn-search">Tìm kiếm</Button>
        </Space>
      </div>
      <div className="tag-params">
        {/* {listCategory.length ? renderTag() : null} */}
        {renderTag()}
        {/* <div className="tag">
          Bé chi thúi <i className="fas fa-times"></i>
        </div>
        <div className="tag">
          Bé chi thúi <i className="fas fa-times"></i>
        </div>
        <div className="tag">
          Bé chi thúi <i className="fas fa-times"></i>
        </div> */}
      </div>
      <FormFilter
        listing={true}
        isModalVisible={isModalVisible}
        onFilter={onFilter}
        handleCancel={handleCancel}
        setParams={setParams}
      />
    </div>
  );
}

export default FilterListing;
