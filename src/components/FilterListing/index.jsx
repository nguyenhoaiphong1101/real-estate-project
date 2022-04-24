import { Button, Input, Select, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function FilterListing(props) {
  const listCategory = useSelector((state) => state.category.listCategory);
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
            className="select"
            placeholder="All"
          />
        </div>
        <div className="input-search">
          <i className="fas fa-search"></i>
          <Input className="text-input" placeholder="Search name department" />
        </div>
        <Space>
          <Button className="btn-filter">
            <i className="fas fa-sliders-h"></i>Lọc
          </Button>
          <Button className="btn-search">Tìm kiếm</Button>
        </Space>
      </div>
      <div className="tag-params">
        <div className="tag">
          Bé chi thúi <i className="fas fa-times"></i>
        </div>
        <div className="tag">
          Bé chi thúi <i className="fas fa-times"></i>
        </div>
        <div className="tag">
          Bé chi thúi <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}

export default FilterListing;
