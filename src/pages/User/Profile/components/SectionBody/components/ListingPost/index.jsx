import { List, Spin, Tabs } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostUser } from "../../../../../../../actions/user";
import ThumbnailExtra from "../../../../../../../components/Thumbnail/ThumbnailExtra";
import "./styles.scss";
import { LoadingOutlined } from "@ant-design/icons";

function ListingPost() {
  const listPost = useSelector((state) => state.user.postUser.post);
  const totalItem = useSelector((state) => state.user.postUser.totalItem);
  const loadingList = useSelector((state) => state.user.loadingPost);
  const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostUser(null));
  }, []);

  return (
    <Spin
      indicator={antIcon}
      spinning={loadingList}
      style={{ maxHeight: "100%" }}
    >
      <List
        className="listing-favorite-profile"
        itemLayout="vertical"
        size="small"
        style={{ marginTop: "5px", padding: "0 25px" }}
        grid={{ column: 2 }}
        pagination={{
          onChange: (page) => {
            dispatch(
              getPostUser({
                page: page,
              })
            );
          },
          pageSize: 10,
          total: totalItem,
        }}
        dataSource={listPost}
        renderItem={(item) => (
          <List.Item
            className="item"
            style={{ borderBottom: "0", padding: "0 5px" }}
            key={item.id}
          >
            <ThumbnailExtra listLatestNew={item} edit={true} />
          </List.Item>
        )}
      ></List>
    </Spin>
  );
}

export default ListingPost;
