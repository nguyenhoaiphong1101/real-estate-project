import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postFavorite } from "../../../../../api/favorite";
import "./styles.scss";

function SectionPriceRange(props) {
  const detailHome = useSelector((state) => state.detailhome.detailHome);
  const [isVisible, setIsVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState();
  const history = useHistory();

  useEffect(() => {
    if (detailHome) {
      setIsFavorite(detailHome.favourite);
    }
  }, [detailHome]);

  const handleOk = () => {
    history.push("/dang-nhap");
  };

  const token = localStorage.getItem("access_token");

  const setFavorite = () => {
    if (token) {
      postFavorite.POST(detailHome.id).then((res) => {
        setIsFavorite(!isFavorite);
      });
    } else {
      setIsVisible(true);
    }
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  //new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.listLatestNew?.total_price)
  return (
    <div className="section-price-wrapper">
      <div className="section-price">
        <div className="area-price">
          <div className="price-min">
            <span>Giá cả</span>
            <h5>{detailHome.total_price}</h5>
          </div>
          <div className="price-min">
            <span>Diện tích</span>
            <h5>{detailHome.area} m2</h5>
          </div>
          <div className="btn-favorite" onClick={setFavorite}>
            <h5 style={{ color: isFavorite ? "#01bbbc" : "" }}>
              <i className="far fa-heart"></i> Yêu thích
            </h5>
          </div>
        </div>
      </div>
      <Modal
        className="popup"
        title="Yêu cầu"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đăng nhập"
      >
        <p>Vui lòng đăng nhập để thực hiện thao tác !</p>
      </Modal>
    </div>
  );
}

export default SectionPriceRange;
