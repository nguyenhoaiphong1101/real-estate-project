import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadListLatestNew } from "../../../../../../../actions/latestnew";
import ThumbnailSecondary from "../../../../../../../components/Thumbnail/ThumbnailSecondary";
import "./styles.scss";
function RecentList(props) {
  const listLatestNew = useSelector((state) => state.latestnew.listLatestNew);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadListLatestNew());
  }, []);

  return (
    <div className="recent-listing" style={{ marginTop: "20px" }}>
      <h4 className="title">Danh sách gần đây</h4>
      <div className="container-fluid wrapper">
        {listLatestNew.map((item, index) => {
          if (index < 4)
            return (
              <ThumbnailSecondary
                key={index}
                listLatestNew={item}
                isRender={props.isRender}
              />
            );
        })}
      </div>
    </div>
  );
}

export default RecentList;
