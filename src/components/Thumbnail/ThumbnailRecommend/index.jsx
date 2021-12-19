import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeCompare } from '../../../actions/user';
import { API_URL } from '../../../constants/Config';
import './styles.scss'

function ThumbnailRecomend(props) {

    const user = useSelector(state => state.user.user);
    const [image, setImage] = useState({});
    const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;
    const dispatch = useDispatch()
    const history = useHistory()

    const listCompare = useSelector(state => state.user.listCompare)

    const addCompare = () => {
        var temp = listCompare;
        if (listCompare.filter(item => item === props.list?.id).length === 0 && listCompare.length < 3) {
            temp.push(props.list?.id)
            dispatch(changeCompare(temp));
        }
    }
    useEffect(() => {
        let imgs = [];
        props?.list?.photos?.forEach((item, index) => {
            imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
        });
        setImage(imgs[0]);
    }, [props?.list]);
    const toDetailHome = () => {
        history.push(`/chi-tiet/${props?.list?.id}`, props?.list)
    }
    return (
        <div className="recomend-item" >
            {/* <a><img  src="http://androthemes.com/themes/react/acres/assets/img/categories/3.jpg" alt="#" /></a> */}
            <div className="recomend-img" style={{ backgroundImage: `url(${image?.url})` }} onClick={() => toDetailHome()}></div>
            <div className="recomend-item-body">
                <h5 className="recommend-title" onClick={() => toDetailHome()}>{props.list?.title}</h5>
                <span>{props.list?.address}</span>
                <br />
                <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.list?.total_price)}</span>
                <br />
                <span onClick={addCompare} className='hoverCompare' style={{ color: "#fff", cursor: "pointer" }}><i style={{ fontSize: "12px" }} class="fas fa-plus"></i> So sánh</span>
            </div>
        </div>

    );
}

export default ThumbnailRecomend;