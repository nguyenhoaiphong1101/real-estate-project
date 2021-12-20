import { Popover } from 'antd';
import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import moment from 'moment';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { postFavorite } from '../../../api/favorite';
import Modal from 'antd/lib/modal/Modal';
import { API_URL } from '../../../constants/Config';
import Img from '../../../assets/images/noavatar.png'
import { changeCompare } from '../../../actions/user';

function ThumbnailPrimary(props) {
    const [image, setImage] = useState({});
    const [isCompare, setIsCompare] = useState(false)

    const listCompare = useSelector(state => ([...state.user.listCompare]))

    useEffect(() => {
        if (listCompare.filter(item => item === props?.listLatestNew?.id).length === 0) {
            setIsCompare(false)
        } else {
            setIsCompare(true)
        }
    }, [listCompare])


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


    const addCompare = () => {
        var temp = listCompare;
        if (listCompare.filter(item => item === props.listLatestNew?.id).length === 0 && listCompare.length < 3) {
            temp.push(props.listLatestNew?.id)
            dispatch(changeCompare(temp));
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
                    {/* <img className={`${props.classNameImg}`} src={image !== {} ? image?.url : ""} alt="listing" /> */}
                    <img className={`${props.classNameImg}`} src="https://thietkenoithat.com/Portals/0/xNews/uploads/2017/9/1/mau-thiet-ke-biet-thu-kinh-sang-trong-cao-cap3.jpg" alt="listing" />
                </a>
                <div class="listing-badges">
                    <span style={{ cursor: "default" }} className={`listing-badge ${props.listLatestNew?.status === "OPEN" ? "sale" : props.listLatestNew?.status === "PENDING" ? "sale-pending" : "sale-close"}`}>
                        {props.listLatestNew?.type_apartment}
                    </span>
                    {token ?
                        <span className={`listing-badge ${props.listLatestNew?.percent_suitable >= 80 ? "sale" :
                            props.listLatestNew?.percent_suitable >= 30 && props.listLatestNew?.percent_suitable < 80 ? "medium" : "short"
                            }`} style={{ cursor: "default" }} title={`Mức độ phù hợp ${props.listLatestNew?.percent_suitable < 20 ? "< 20" : props.listLatestNew?.percent_suitable}%`}>
                            {props.listLatestNew?.percent_suitable < 20 ? "< 20" : props.listLatestNew?.percent_suitable}%
                        </span>
                        :
                        <span className={`listing-badge short`} style={{ cursor: "default" }} title="Vui lòng đăng nhập để xem mức độ phù hợp">
                            <i class="fas fa-question"></i>
                        </span>
                    }

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
                        <a className="listing__body--img">
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
                <p class="listing-text">Mức độ phù hợp: 60%</p>
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
                    <span onClick={addCompare} style={isCompare ? { color: "#ccc ", cursor: "default" } : { color: "#0088a9", cursor: "pointer" }}><i style={{ fontSize: "12px" }} class="fas fa-plus"></i> {isCompare ? 'Đã so sánh' : 'So sánh'}</span>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailPrimary;