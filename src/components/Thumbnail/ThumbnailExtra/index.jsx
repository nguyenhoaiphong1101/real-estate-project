import { Popover } from 'antd';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loadDetailHome } from '../../../actions/detailhome';
import Button from '../../Button';
import './styles.scss';

function ThumbnailExtra(props) {

    const toTimeString = (seconds) => {
        if (seconds)
            return moment(seconds).format('DD-MM-YYYY');
    }
    

    const dispatch = useDispatch()
    const history = useHistory()

    const token = localStorage.getItem('access_token');

    const toDetailHome = () => {
        if (token) {
            dispatch(loadDetailHome(props?.listLatestNew?.id, jwtDecode(token).id))
        }
        else {
            dispatch(loadDetailHome(props?.listLatestNew?.id, null))
        }
        history.push('/chi-tiet')
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
        <div className="listing-extra">
            <div className="listing__thumbnail">
                <a>
                    <img src="http://androthemes.com/themes/html/acres/assets/img/listings-list/8.jpg" alt="listing" />
                </a>
                <div className="listing-badges">
                    <span className="listing-badge sale">
                        Giảm giá
                    </span>
                </div>
                <div className="listing-controls">
                    <a className="favorite">
                        <i className="far fa-heart"></i>
                    </a>
                </div>
            </div>
            <div className="listing__body">
                <div className="author">
                    <a>
                        <img src="http://androthemes.com/themes/react/acres/assets/img/listing-single/6.jpg" alt="agent" />
                    </a>
                    <div className="media-body">
                        <h6>{props.listLatestNew?.created_by?.username}</h6>
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
                <h5 className="listing-title">
                    <a title="Iris Watson, Frederick Nebraska 20620">
                        {props.listLatestNew?.address}
                    </a>
                </h5>
                <span className="listing-price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.listLatestNew?.total_price)}</span>
                <p className="listing-text">{props.listLatestNew?.title}</p>
                <div className="acr-listing-icons">
                    <div className="acr-listing-icon">
                        <i className="flaticon-pillow"></i>
                        <span className="acr-listing-icon-value">{props.listLatestNew?.bedroom_quantity}</span>
                    </div>
                    <div className="acr-listing-icon">
                        <i className="flaticon-bathtub"></i>
                        <span className="acr-listing-icon-value">{props.listLatestNew?.bathroom_quantity}</span>
                    </div>
                    <div className="acr-listing-icon">
                        <i className="flaticon-ruler"></i>
                        <span className="acr-listing-icon-value">{props.listLatestNew?.area}</span>
                    </div>
                </div>
                <div className="listing-gallery-wrapper">
                    <Button value="Xem chi tiết" className="view-detail" onClick={() => toDetailHome()}></Button>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailExtra;