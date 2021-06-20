import React, { useEffect } from 'react';
import Button from '../../../../../../../components/Button';
import { Popover } from 'antd';
import { Col, Row } from 'antd';
import './styles.scss';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

function ItemSlider(props) {

    const toTimeString = (seconds) => {
        if (seconds)
            return moment(seconds).format('DD-MM-YYYY');
    }
    const history = useHistory();
    const toDetailHome = () => {
        // if (token) {
        //     dispatch(loadDetailHome(props?.listLatestNew?.id, jwtDecode(token).id))
        // }
        // else {
        //     dispatch(loadDetailHome(props?.listLatestNew?.id))
        // }
        history.push(`/chi-tiet/${props?.listHighlight?.id}`, props?.listHighlight)
    }

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
                                    {props.listHighlight?.address}
                                </a>
                            </h5>
                            <div className="author">
                                <a>
                                    <img src="http://androthemes.com/themes/react/acres/assets/img/listing-single/6.jpg" alt="agent" />
                                </a>
                                <div className="media-body">
                                    <h6>
                                        {props.listHighlight?.created_by?.username}
                                    </h6>
                                    <span>{toTimeString(props.listHighlight?.created_at)}</span>
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
                            <span class="listing-price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.listHighlight?.total_price)}</span>
                            <p class="listing-text">{props.listHighlight?.title}</p>
                            <div class="acr-listing-icons">
                                <div class="acr-listing-icon">
                                    <i class="flaticon-pillow"></i>
                                    <span class="acr-listing-icon-value">{props.listHighlight?.bedroom_quantity}</span>
                                </div>
                                <div class="acr-listing-icon">
                                    <i class="flaticon-bathtub"></i>
                                    <span class="acr-listing-icon-value">{props.listHighlight?.bathroom_quantity}</span>
                                </div>
                                <div class="acr-listing-icon">
                                    <i class="flaticon-ruler"></i>
                                    <span class="acr-listing-icon-value">{props.listHighlight?.area}</span>
                                </div>
                            </div>
                            <div class="listing-gallery-wrapper">
                                <Button value="Xem chi tiết" onClick={() => toDetailHome()} className="view-detail"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ItemSlider;