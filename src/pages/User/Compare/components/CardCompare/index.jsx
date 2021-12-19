import React from 'react';
import "./styles.scss"

function CardCompare(props) {
    return (
        <div className="card-compare">
            <div class="pricing-table">
                <h2 class="pricing-table__header">{props.item.title}</h2>
                <div className="card-img">
                    <img className="img" src="http://nhadep.org.vn/uploads/weblink/products47033.png" />
                </div>

                <h3 class="pricing-table__price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.item.total_price)}</h3>
                <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
                    Xem chi tiết
                </a>
                <ul class="pricing-table__list">
                    <li>Địa chỉ: {props.item?.address}</li>
                    <li>Thể loại: {props.item?.category_name}</li>
                    <li>Phòng ngủ: {props.item?.bedroom_quantity}</li>
                    <li>Phòng tắm: {props.item?.bathroom_quantity}</li>
                    <li>Số tầng: {props.item?.floor_quantity}</li>
                    <li>Nhà vệ sinh: {props.item?.toilet_quantity}</li>
                    <li>Nội thất: {props.item?.furniture}</li>
                    <li>Kích thước: {props.item?.area}m2</li>
                    <li>Tình trạng: {props.item?.type_apartment === "RENT" ? "Cho thuê" : "Bán"}</li>
                    <li>Mặt tiền: {props.item?.front_building}</li>
                    <li>Hướng nhà: {props.item?.house_building}</li>
                    <li>Hướng ban công: {props.item?.balcony_direction}</li>
                </ul>
            </div>
        </div>
    );
}

export default CardCompare;