import { Popover } from "antd";
import { useSelector } from "react-redux";
import "./styles.scss";

function SectionPriceRange() {
  const detailHome = useSelector((state) => state.detailhome.detailHome);
  console.log(detailHome);

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
          <div className="btn-favorite">
            <h5>
              {" "}
              <i className="far fa-heart"></i> Yêu thích
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionPriceRange;
