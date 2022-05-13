import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import qs from "query-string";

const imgs = [
  "https://nelo.com.vn/wp-content/uploads/2021/07/E_Photo-1-pts-1-scaled.jpg",
  "https://nelo.com.vn/wp-content/uploads/2021/06/b-25-2.jpg",
  "https://nelo.com.vn/wp-content/uploads/2021/07/a-3-2-scaled.jpg",
  "https://nelo.com.vn/wp-content/uploads/2021/06/D-2-2-scaled.jpg",
  "https://nelo.com.vn/wp-content/uploads/2021/07/6-1-scaled.jpg",
];

function Category(props) {
  const listCategory = useSelector((state) => state.category.listCategory);
  // const dispatch = useDispatch();
  const history = useHistory();
  const paramsQuery = qs.parse(window.location.search);
  const type_apartment = paramsQuery.type_apartment
    ? paramsQuery.type_apartment
    : "BUY";

  // const valueSearch = (value) => {
  //     dispatch(loadListFilter(value, null, null, null, null));
  //     history.push('/nha-dat-ban', { from: '/' });
  // }

  return (
    <div className="category">
      <div className="title">Bất động sản theo thể loại</div>
      <div className="row-project-fe list-project-fe">
        {listCategory.map((item, index) =>
          index < 5 ? (
            <div key={index} className="column">
              <a
                onClick={() => {
                  history.push(
                    `/${
                      type_apartment === "BUY" ? "nha-dat-ban" : "nha-dat-thue"
                    }?category_id=${item.id}`
                  );
                }}
              >
                <img
                  src={imgs[index]}
                  width="2560"
                  height="1440"
                  data-src={imgs[index]}
                  alt="#"
                  className="litespeed-loaded"
                />
                <span>
                  {item.name} ({item.totalItem})
                </span>
              </a>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Category;
