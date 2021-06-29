import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { API_URL } from '../../../constants/Config';
import './styles.scss'

function ThumbnailDetailRecommend(props) {

    const [image, setImage] = useState({});
    const history = useHistory()
    const toDetailHome = () => {
        history.push(`/chi-tiet/${props?.list?.id}`, props?.list)
    }

    const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;

    useEffect(() => {
        let imgs = [];
        props?.list?.photos?.forEach((item, index) => {
            imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
        });
        setImage(imgs[0]);
    }, [props?.list]);
    return (
        <div className="detail-recomend-item" >
            {/* <a><img  src="http://androthemes.com/themes/react/acres/assets/img/categories/3.jpg" alt="#" /></a> */}
            <div className="recomend-img" style={{ backgroundImage: `url(${image?.url})` }} onClick={() => toDetailHome()}></div>
            <div className="recomend-item-body">
                <h5 className="recommend-title" onClick={() => toDetailHome()}>{props.list?.title}</h5>
                <span>{props.list?.address}</span>
                <br />
                <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.list?.total_price)}</span>
            </div>
        </div>

    );
}

export default ThumbnailDetailRecommend;