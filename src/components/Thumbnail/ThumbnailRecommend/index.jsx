import React from 'react';
import './styles.scss'

function ThumbnailRecomend(props) {
    return (
        <div className="recomend-item" >
            {/* <a><img  src="http://androthemes.com/themes/react/acres/assets/img/categories/3.jpg" alt="#" /></a> */}
            <div className="recomend-img"></div>
            <div className="recomend-item-body">
                <h5><a>Tiêu đề</a></h5>
                <span>Địa chỉ</span>
                <br/>
                <span>Giá tiền</span>
            </div>
        </div>

    );
}

export default ThumbnailRecomend;