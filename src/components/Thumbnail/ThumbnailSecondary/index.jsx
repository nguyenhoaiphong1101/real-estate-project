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

    const [isCompare, setIsCompare] = useState(false)

    const listCompare = useSelector(state => ([...state.user.listCompare]))

    useEffect(() => {
        if (listCompare.filter(item => item === props?.listLatestNew?.id).length === 0) {
            setIsCompare(false)
        } else {
            setIsCompare(true)
        }
    }, [listCompare])
    const dispatch = useDispatch();

    const addCompare = () => {
        var temp = listCompare;
        if (listCompare.filter(item => item === props.listLatestNew?.id).length === 0 && listCompare.length < 3) {
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
        <div className="listing listing-secondary">
            <div className="listing-thumbnail">
                <a>
                    <img src={image[0]?.url} alt="listing" onClick={() => toDetailHome()} />
                </a>
            </div>
            <div className="listing-body">
                <h6 className="listing-title">
                    <a title="Iris Watson, Frederick Nebraska 20620" onClick={() => toDetailHome()}>
                        {props.listLatestNew?.address}</a>
                </h6>
                <div className='flex-compare'>
                    <span className="listing-price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.listLatestNew?.total_price)}</span>
                    <span onClick={addCompare} style={isCompare ? { color: "#ccc", cursor: "default" } : { color: "#0088a9", cursor: "pointer" }}><i style={{ fontSize: "12px" }} className="fas fa-plus"></i> {isCompare ? 'Đã so sánh' : 'So sánh'}</span>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailSecondary;