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
import Modal from 'antd/lib/modal/Modal';
import { API_URL } from '../../../constants/Config';
import Img from '../../../assets/images/noavatar.png'
import { isBuffer } from 'lodash';

function ThumbnailPrimary(props) {
    const [image, setImage] = useState({});


    const toTimeString = (seconds) => {
        if (seconds)
            return moment(seconds).format('DD-MM-YYYY');
    }

    const dispatch = useDispatch()
    const token = localStorage.getItem('access_token');


    const history = useHistory()
    const toDetailHome = () => {
        history.push(`/chi-tiet/${props?.listLatestNew?.id}`, props?.listLatestNew)
        if (props.isRender) {
            props.isRender();
        }
    }
    const [isFavorite, setIsFavorite] = useState();

    const setFavorite = () => {
        if (token) {
            setIsFavorite(!isFavorite);
            postFavorite.POST(props.listLatestNew?.id);
        } else {
            console.log("=====");
            setIsVisible(true);
        }
    }

    useEffect(() => {
        setIsFavorite(props?.listLatestNew?.favourite);
    }, [props?.listLatestNew?.favourite]);

    const [isVisible, setIsVisible] = useState(false);

    const handleOk = () => {
        history.push('/dang-nhap')
    }

    const handleCancel = () => {
        setIsVisible(false);
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


    const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;
    const getPhotosImgAvatar = (name) => `${API_URL}/public/image/avatar/${name}`;





    useEffect(() => {
        setIsFavorite(props?.listLatestNew?.favourite);
        let imgs = [];
        props?.listLatestNew?.photos?.forEach((item, index) => {
            imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
        });
        setImage(imgs[0]);
    }, [props?.listLatestNew]);
    return (
        <div className={`listing-primary ${props.className}`}>

            <Modal className='popup' title="Yêu cầu" visible={isVisible} onOk={handleOk} onCancel={handleCancel} okText="Đăng nhập">
                <p>Vui lòng đăng nhập để thực hiện thao tác !</p>
            </Modal>

            <div className="listing__thumbnail" >
                <a onClick={() => toDetailHome()}>
                    <img src={image !== {} ? image?.url : "http://androthemes.com/themes/html/acres/assets/img/listings-list/8.jpg"} alt="listing" />
                </a>
                <div class="listing-badges">
                    <span className={`listing-badge ${props.listLatestNew?.status === "OPEN" ? "sale" : props.listLatestNew?.status === "PENDING" ? "sale-pending" : "sale-close"}`}>
                        {props.listLatestNew?.type_apartment}
                    </span>
                </div>
                <div class="listing-controls" onClick={() => setFavorite()}>
                    <a class={isFavorite ? "favorite" : "un-favorite"}>
                        <i class="far fa-heart"></i>
                    </a>
                </div>
            </div>
            <div className="listing__body">
                <div className="author">
                    <div onClick={() => toDetailHome()}>
                        <a >
                            <img src={props.listLatestNew?.author?.avatar?.name ? getPhotosImgAvatar(props.listLatestNew?.author?.avatar?.name) : Img} alt="agent" />
                        </a>
                    </div>
                    <div className="media-body">
                        <h6>
                            {props.listLatestNew?.author?.full_name}
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