import React from 'react';
import "./styles.scss"

function CardCompare(props) {
    return (
        <div className="card-compare">
            <div class="pricing-table">
                <h2 class="pricing-table__header">{props.title}</h2>
                <div className="card-img">
                    <img className="img" src={props.item.src} />
                </div>

                <h3 class="pricing-table__price">{props.price}</h3>
                <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
                    Xem chi tiết
                </a>
                <ul class="pricing-table__list">
                    <li className={props.keyIndex === 2 ? "high" : props.keyIndex === 1 ? "low" : ""}>Phòng ngủ: {props.item.phongngu}</li>
                    <li className={props.keyIndex === 3 ? "high" : props.keyIndex === 1 ? "low" : ""}>Phòng tắm: {props.item.phongtam}</li>
                    <li className={props.keyIndex === 3 ? "high" : props.keyIndex === 1 ? "low" : ""}>Số tầng: {props.item.sotang}</li>
                    <li className={props.keyIndex === 2 ? "high" : ""}>Nhà vệ sinh: {props.item.nvs}</li>
                    <li >Nội thất: {props.item.noithat}</li>
                    <li className={props.keyIndex === 3 ? "high" : props.keyIndex === 1 ? "low" : ""}>Kích thước: {props.item.kichthuoc}m2</li>
                    <li >Tình trạng: {props.item.tinhtrang}</li>
                    <li >Mặt tiền: {props.item.mattien}</li>
                    <li >Hướng nhà: {props.item.huongnha}</li>
                    <li >Hướng ban công: {props.item.huongbancong}</li>
                </ul>
            </div>
        </div>
    );
}

export default CardCompare;