import { Popover } from 'antd';
import React from 'react';
import Button from '../../Button';
import './styles.scss';

function ThumbnailExtra() {
    const content = (
        <div className="popup-content-wrapper">
            <ul className="popup-content">
                <li><i class="fas fa-phone"></i>Gọi chúng tôi</li>
                <li><i class="fas fa-th-list"></i>Nhắn tin</li>
                <li><i class="fas fa-star"></i>Đặt lịch</li>
            </ul>
        </div>
    );
    return (
        <div className="listing-extra">
            <div className="listing__thumbnail">
                <a>
                    <img src="http://androthemes.com/themes/html/acres/assets/img/listings-list/8.jpg" alt="listing" />
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
                        <h6>Vũ Khánh</h6>
                        <span>3 Tháng 3, 2020</span>
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
                        Iris Watson, Frederick Nebraska 20620
                    </a>
                </h5>
                <span class="listing-price">3,500$</span>
                <p class="listing-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="acr-listing-icons">
                    <div class="acr-listing-icon">
                        <i class="flaticon-pillow"></i>
                        <span class="acr-listing-icon-value">3</span>
                    </div>
                    <div class="acr-listing-icon">
                        <i class="flaticon-bathtub"></i>
                        <span class="acr-listing-icon-value">2</span>
                    </div>
                    <div class="acr-listing-icon">
                        <i class="flaticon-ruler"></i>
                        <span class="acr-listing-icon-value">2,499</span>
                    </div>
                </div>
                <div class="listing-gallery-wrapper">
                    <Button value="Xem chi tiết" className="view-detail"></Button>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailExtra;