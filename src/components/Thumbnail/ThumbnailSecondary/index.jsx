import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeCompare } from '../../../actions/user';
import { API_URL } from '../../../constants/Config';
import './styles.scss';
function ThumbnailSecondary(props) {

    const [image, setImage] = useState({});


    const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;

    const history = useHistory()
    const toDetailHome = () => {
        history.push(`/chi-tiet/${props?.listLatestNew?.id}`, props?.listLatestNew)
        if (props.isRender) {
            props.isRender();
        }
    }

    const listCompare = useSelector(state => state.user.listCompare)
    const dispatch = useDispatch();

    const addCompare = () => {
        var temp = listCompare;
        if (listCompare.filter(item => item === props.list?.id).length === 0 && listCompare.length < 3) {
            temp.push(props.listLatestNew?.id)
            dispatch(changeCompare(temp));
        }
    }

    useEffect(() => {
        let imgs = [];
        props?.listLatestNew?.photos?.forEach((item, index) => {
            imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
        });
        setImage(imgs);
    }, [props?.listLatestNew]);

    return (
        <div class="listing listing-secondary">
            <div class="listing-thumbnail">
                <a>
                    <img src={image[0]?.url} alt="listing" onClick={() => toDetailHome()} />
                </a>
            </div>
            <div class="listing-body">
                <h6 class="listing-title">
                    <a title="Iris Watson, Frederick Nebraska 20620" onClick={() => toDetailHome()}>
                        {props.listLatestNew?.address}</a>
                </h6>
                <div className='flex-compare'>
                    <span class="listing-price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.listLatestNew?.total_price)}</span>
                    <span onClick={addCompare} style={{ color: "#0088a9", cursor: "pointer" }}><i style={{ fontSize: "12px" }} class="fas fa-plus"></i> So sánh</span>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailSecondary;