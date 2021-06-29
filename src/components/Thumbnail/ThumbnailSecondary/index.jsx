import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../constants/Config';
import './styles.scss';
function ThumbnailSecondary(props) {

    const [image, setImage] = useState({});


    const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;


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
                    <img src={image[0]?.url} alt="listing" />
                </a>
            </div>
            <div class="listing-body">
                <h6 class="listing-title">
                    <a title="Iris Watson, Frederick Nebraska 20620">
                        {props.listLatestNew?.address}</a>
                </h6>
                <span class="listing-price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.listLatestNew?.total_price)}
                </span>
            </div>
        </div>
    );
}

export default ThumbnailSecondary;