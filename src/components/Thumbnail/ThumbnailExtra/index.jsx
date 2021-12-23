import { Popover } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { postFavorite } from '../../../api/favorite';
import { API_URL } from '../../../constants/Config';
import Button from '../../Button';
import './styles.scss';
import Img from '../../../assets/images/noavatar.png'
import { deletePost } from '../../../api/userApi';
import { changeCompare, getPostUser } from '../../../actions/user';

function ThumbnailExtra(props) {

    const [isVisible, setIsVisible] = useState(false);
    const [image, setImage] = useState({});
    const [isCompare, setIsCompare] = useState(false)

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

    const listCompare = useSelector(state => ([...state.user.listCompare]))

    useEffect(() => {
        if (listCompare.filter(item => item === props?.listLatestNew?.id).length === 0) {
            setIsCompare(false)
        } else {
            setIsCompare(true)
        }
    }, [listCompare])




    const dispatch = useDispatch()
    const history = useHistory()


    const addCompare = () => {
        var temp = listCompare;
        if (listCompare.filter(item => item === props.listLatestNew?.id).length === 0 && listCompare.length < 3) {
            temp.push(props.listLatestNew?.id)
            dispatch(changeCompare(temp));
        }
    }

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

    const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;

    const getPhotosImgAvatar = (name) => `${API_URL}/public/image/avatar/${name}`;


    const toDeletePost = async () => {
        await deletePost.DELETE(props.listLatestNew?.id);
        dispatch(getPostUser());
    }


    useEffect(() => {
        setIsFavorite(props?.listLatestNew?.favourite);
        let imgs = [];
        props?.listLatestNew?.photos?.forEach((item, index) => {
            imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
        });
        setImage(imgs[0]);
    }, [props?.listLatestNew]);


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
                {/* <div className="listing__thumbnail-image" style={{ backgroundImage: `url(${image !== {} ? image?.url : "http://androthemes.com/themes/html/acres/assets/img/listings-list/8.jpg"})` }} >

                </div> */}
                <a onClick={() => toDetailHome()}>
                    {/* <img className={`${props.classNameImg}`} src="https://thietkenoithat.com/Portals/0/xNews/uploads/2017/9/1/mau-thiet-ke-biet-thu-kinh-sang-trong-cao-cap3.jpg" alt="listing" /> */}
                    <img src={image !== {} ? image?.url : "http://androthemes.com/themes/html/acres/assets/img/listings-list/8.jpg"} alt="listing" />
                </a>
                <div className="listing-badges">
                    <span className="listing-badge sale" >
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
                    <br />
                    {history.location.pathname === '/trang-ca-nhan' ?
                        <span style={{ marginTop: "15px", display: "inline-block" }} className={`listing-status  ${props.listLatestNew?.status === "OPEN" ? "sale" : props.listLatestNew?.status === "PENDING" ? "sale-pending" : "sale-close"}`} >
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
                            <img src={props.listLatestNew?.author?.avatar?.name ? getPhotosImgAvatar(props.listLatestNew?.author?.avatar?.name) : Img} alt="agent" />
                        </a>
                    </div>
                    <div className="media-body">
                        <h6>{props.listLatestNew?.author?.full_name}</h6>
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
                    <div className="listing-gallery-wrapper" style={{ justifyContent: "left" }} >
                        <Button value="Chỉnh sửa" className="view-detail" onClick={() => toUpdatePost()}></Button>
                        <Button value="Xóa bài" className="view-detail-delete" onClick={() => toDeletePost()}></Button>
                    </div>
                    :
                    <div className="listing-gallery-wrapper">
                        <Button value="Xem chi tiết" className="view-detail" onClick={() => toDetailHome()}></Button>
                        <span onClick={addCompare} style={isCompare ? { color: "#ccc", cursor: "default" } : { color: "#0088a9", cursor: "pointer" }}><i style={{ fontSize: "12px" }} class="fas fa-plus"></i> {isCompare ? 'Đã so sánh' : 'So sánh'}</span>
                    </div>
                }
                {/* {history.location.pathname === '/trang-ca-nhan' ?
                    <div className="listing-gallery-wrapper">
                        <Button value="Xóa bài" className="view-detail" onClick={() => toUpdatePost()}></Button>
                    </div>
                    :
                    null
                } */}
            </div>
        </div>
    );
}

export default ThumbnailExtra;