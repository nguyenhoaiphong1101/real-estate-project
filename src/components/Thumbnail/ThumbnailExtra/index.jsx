import { Popover } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loadDetailHome } from '../../../actions/detailhome';
import { postFavorite } from '../../../api/favorite';
import Button from '../../Button';
import './styles.scss';

function ThumbnailExtra(props) {

    const [isVisible, setIsVisible] = useState(false);

    const handleOk = () => {
        history.push('/dang-nhap')
    }

    const handleCancel = () => {
        setIsVisible(false);
    }

    const toTimeString = (seconds) => {
        if (seconds)
            return moment(seconds).format('DD-MM-YYYY');
    }


    const dispatch = useDispatch()
    const history = useHistory()

    const token = localStorage.getItem('access_token');

    const toDetailHome = () => {
        // if (token) {
        //     dispatch(loadDetailHome(props?.listLatestNew?.id, jwtDecode(token).id))
        // }
        // else {
        //     dispatch(loadDetailHome(props?.listLatestNew?.id))
        // }
        history.push(`/chi-tiet/${props?.listLatestNew?.id}`, props?.listLatestNew)

    }

    const toUpdatePost = () => {
        history.push(`/chinh-sua/${props?.listLatestNew?.id}`, props?.listLatestNew)
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
            <Modal className='popup' title="Yêu cầu" visible={isVisible} onOk={handleOk} onCancel={handleCancel} okText="Đăng nhập">
                <p>Vui lòng đăng nhập để thực hiện thao tác !</p>
            </Modal>

            <div className="listing__thumbnail" >
                <a onClick={() => toDetailHome()}>
                    <img src="http://androthemes.com/themes/html/acres/assets/img/listings-list/8.jpg" alt="listing" />
                </a>
                <div className="listing-badges">
                    <span className="listing-badge sale" >
                        {props.listLatestNew?.type_apartment}
                    </span>
                    <br />

                    {history.location.pathname === '/trang-ca-nhan' ?
                        <span style={{ marginTop: "15px", display: "block" }} className={`listing-badge ${props.listLatestNew?.status === "OPEN" ? "sale" : props.listLatestNew?.status === "PENDING" ? "sale-pending" : "sale-close"}`} >
                            {props.listLatestNew?.status}
                        </span>
                        :
                        null
                    }
                    {/* <span style={{ marginTop: "15px", display: "block" }} className={`listing-badge ${props.listLatestNew?.status === "OPEN" ? "sale" : props.listLatestNew?.status === "PENDING" ? "sale-pending" : "sale-close"}`} >
                        {props.listLatestNew?.status}
                    </span> */}
                </div>
                <div class="listing-controls" onClick={() => setFavorite()}>
                    <a class={isFavorite ? "favorite" : "un-favorite"}>
                        <i class="far fa-heart"></i>
                    </a>
                </div>
            </div>
            <div className="listing__body">
                <div className="author" >
                    {/* onClick={() => toDetailHome()} */}
                    <div onClick={() => toDetailHome()}>
                        <a >
                            <img src="http://androthemes.com/themes/react/acres/assets/img/listing-single/6.jpg" alt="agent" />
                        </a>
                    </div>
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
                <h5 onClick={() => toDetailHome()} className="listing-title">
                    <p title="Iris Watson, Frederick Nebraska 20620">
                        {props.listLatestNew?.address}
                    </p>
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
                {props?.type ?
                    <div className="listing-gallery-wrapper">
                        <Button value="Chỉnh sửa" className="view-detail" onClick={() => toUpdatePost()}></Button>
                    </div>
                    :
                    <div className="listing-gallery-wrapper">
                        <Button value="Xem chi tiết" className="view-detail" onClick={() => toDetailHome()}></Button>
                    </div>
                }
            </div>
        </div>
    );
}

export default ThumbnailExtra;