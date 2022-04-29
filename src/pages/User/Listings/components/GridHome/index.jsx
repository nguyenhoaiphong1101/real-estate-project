import React, { useEffect, useState } from "react";
import { List } from "antd";
import "./styles.scss";
import ThumbnailPrimary from "../../../../../components/Thumbnail/ThumbnailPrimary";
import { useDispatch, useSelector } from "react-redux";
import { loadListSearch } from "../../../../../actions/listsearch";
import jwtDecode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import {
  clearObject,
  objectToQueryString,
} from "../../../../../constants/Config";

function GridHome(props) {
  const listSearch = useSelector((state) => state.listsearch.listSearch);
  const totalItem = useSelector((state) => state.listsearch.totalItem);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const paramsQuery = qs.parse(window.location.search);
  const page = Object.keys(paramsQuery).length ? paramsQuery.page - 1 : 0;
  const type_apartment = location.pathname === "/nha-dat-ban" ? "BUY" : "RENT";

  useEffect(() => {
    if (Object.keys(paramsQuery).length) {
      dispatch(
        loadListSearch(
          clearObject({
            ...paramsQuery,
            type_apartment,
          })
        )
      );
    }
  }, [location.search]);

  // useEffect(() => {
  //     dispatch(loadListSearch(1, 2));
  // }, [])

  return (
    <List
      className="grid-home"
      grid={{ column: 4 }}
      pagination={{
        onChange: (page) => {
          history.push(
            `?${objectToQueryString(
              clearObject({
                ...paramsQuery,
                page,
              })
            )}`
          );
        },
        current: page + 1,
        pageSize: 12,
        total: totalItem,
        showSizeChanger: false,
      }}
      dataSource={listSearch}
      renderItem={(item) => (
        <List.Item className="item" key={item.id}>
          <ThumbnailPrimary listLatestNew={item} />
        </List.Item>
      )}
    ></List>
  );
}

export default GridHome;
