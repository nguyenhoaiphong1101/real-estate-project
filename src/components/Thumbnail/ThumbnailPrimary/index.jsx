import { Popover } from 'antd';
import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import moment from 'moment';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loadDetailHome } from '../../../actions/detailhome';
import jwtDecode from 'jwt-decode';
import { postFavorite } from '../../../api/favorite';

function ThumbnailPrimary(props) {

    

    const toTimeString = (seconds) => {
        if (seconds)
            return moment(seconds).format('DD-MM-YYYY');
    }

    const dispatch = useDispatch()
    const token = localStorage.getItem('access_token');


    const history = useHistory()
    const toDetailHome = () => {
        if (token) {
            dispatch(loadDetailHome(props?.listLatestNew?.id, jwtDecode(token).id))
        }
        else {
            dispatch(loadDetailHome(props?.listLatestNew?.id, null))
        }
        history.push('/chi-tiet')
    }
    const [isFavorite, setIsFavorite] = useState();

    const setFavorite =()=>{
        setIsFavorite(!isFavorite);
        postFavorite.POST(props.listLatestNew?.id);
    }

     useEffect(()  => {
        setIsFavorite(props?.listLatestNew?.favourite);
    },[props?.listLatestNew?.favourite]);

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
            <div className="listing__thumbnail" >
                <a onClick={() => toDetailHome()}>
                    <img src="http://androthemes.com/themes/react/acres/assets/img/listings/1.jpg" alt="listing" />
                </a>
                <div class="listing-badges">
                    <span class="listing-badge sale">
                        {props.listLatestNew?.type_apartment}
                    </span>
                </div>
                <div class="listing-controls" onClick={()=>setFavorite()}>
                    <a class={isFavorite?"favorite":"un-favorite"}>
                        <i class="far fa-heart"></i>
                    </a>
                </div>
            </div>
            <div className="listing__body">
                <div className="author">
                    <div onClick={() => toDetailHome()}>
                        <a >
                            <img src="http://androthemes.com/themes/react/acres/assets/img/listing-single/6.jpg" alt="agent" />
                        </a>
                    </div>
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
                <h5 class="listing-title" onClick={() => toDetailHome()}>
                    <p title="Iris Watson, Frederick Nebraska 20620">
                        {props.listLatestNew?.address}
                    </p>
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
                    <Button value="Xem chi tiết" className="view-detail" onClick={() => toDetailHome()}></Button>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailPrimary;