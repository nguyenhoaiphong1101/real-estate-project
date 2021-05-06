import React from 'react';
import Button from '../../../../../../components/Button';
import { Popover } from 'antd';
import { Col, Row } from 'antd';
import './styles.scss';

function ItemSlider() {
    const content = (
        <div className="popup-content-wrapper">
            <ul className="popup-content">
                <li><i class="fas fa-phone"></i>Call Agent</li>
                <li><i class="fas fa-th-list"></i>Send Message</li>
                <li><i class="fas fa-star"></i>Book Tour</li>
            </ul>
        </div>
    );
    return (
        <div className="item-slider" style={{ backgroundImage: "URL('http://androthemes.com/themes/react/acres/assets/img/listings/3.jpg')" }}>
            <div className="item-wrapper">
                <div className="item">
                    <div className="listing-primary">
                        <div className="listing__body">
                            <h5 class="listing-title">
                                <a title="Iris Watson, Frederick Nebraska 20620">
                                    Iris Watson, Frederick Nebraska 20620
                    </a>
                            </h5>
                            <div className="author">
                                <a>
                                    <img src="http://androthemes.com/themes/react/acres/assets/img/listing-single/6.jpg" alt="agent" />
                                </a>
                                <div className="media-body">
                                    <h6>
                                        Vũ Khánh
                    </h6>
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
                </div>
            </div>
        </div >
    );
}

export default ItemSlider;