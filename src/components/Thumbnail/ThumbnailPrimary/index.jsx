import { Popover } from 'antd';
import React from 'react';
import Button from '../../Button';
import moment from 'moment';
import './styles.scss';

function ThumbnailPrimary(props) {

    const toTimeString = (seconds) => {
        if (seconds)
            return moment(seconds).format('DD-MM-YYYY');
    }

    const content = (
        <div className="popup-content-wrapper">
            <ul className="popup-content">
                <li><i className="fas fa-phone"></i>Gọi chúng tôi</li>
                <li><i className="fas fa-th-list"></i>Nhắn tin</li>
                <li><i className="fas fa-star"></i>Đặt lịch</li>
            </ul>
        </div>
    );
    return (
        <div className={`listing-primary ${props.className}`}>
            <div className="listing__thumbnail">
                <a>
                    <img src="http://androthemes.com/themes/react/acres/assets/img/listings/1.jpg" alt="listing" />
                </a>
                <div class="listing-badges">
                    <span class="listing-badge sale">
                        Giảm giá
                    </span>
                </div>
                <div class="listing-controls">
                    <a class="favorite">
                        <i class="far fa-heart"></i>
                    </a>
                </div>
            </div>
            <div className="listing__body">
                <div className="author">
                    <a>
                        <img src="http://androthemes.com/themes/react/acres/assets/img/listing-single/6.jpg" alt="agent" />
                    </a>
                    <div className="media-body">
                        <h6>
                            {props.listLatestNew?.created_by?.username}
                        </h6>
                        <span>{toTimeString(props.listLatestNew?.created_at)}</span>
                    </div>
                    <div className="icon-wrapper">
                        <Popover className="popup" content={content} trigger="click">
                            <div className="icon">
                                <i className="fas fa-ellipsis-v">
                                </i>
                            </div>
                        </Popover>
                    </div>
                </div>
                <h5 class="listing-title">
                    <a title="Iris Watson, Frederick Nebraska 20620">
                        {props.listLatestNew?.address}
                    </a>
                </h5>
                <span class="listing-price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.listLatestNew?.total_price)}</span>
                <p class="listing-text">{props.listLatestNew?.title}</p>
                <div class="acr-listing-icons">
                    <div class="acr-listing-icon">
                        <i class="flaticon-pillow"></i>
                        <span class="acr-listing-icon-value">{props.listLatestNew?.bedroom_quantity}</span>
                    </div>
                    <div class="acr-listing-icon">
                        <i class="flaticon-bathtub"></i>
                        <span class="acr-listing-icon-value">{props.listLatestNew?.bathroom_quantity}</span>
                    </div>
                    <div class="acr-listing-icon">
                        <i class="flaticon-ruler"></i>
                        <span class="acr-listing-icon-value">{props.listLatestNew?.area}</span>
                    </div>
                </div>
                <div class="listing-gallery-wrapper">
                    <Button value="Xem chi tiết" className="view-detail"></Button>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailPrimary;