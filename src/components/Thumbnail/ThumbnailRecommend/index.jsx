import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadDetailHome } from '../../../actions/detailhome';
import './styles.scss'

function ThumbnailRecomend(props) {

    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch()
    const history = useHistory()
    const toDetailHome = () => {
        history.push(`/chi-tiet/${props?.list?.id}`,props?.list)
    }
    return (
        <div className="recomend-item" >
            {/* <a><img  src="http://androthemes.com/themes/react/acres/assets/img/categories/3.jpg" alt="#" /></a> */}
            <div className="recomend-img" onClick={() => toDetailHome()}></div>
            <div className="recomend-item-body">
                <h5 className="recommend-title" onClick={() => toDetailHome()}>{props.list?.title}</h5>
                <span>{props.list?.address}</span>
                <br/>
                <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.list?.total_price)}</span>
            </div>
        </div>

    );
}

export default ThumbnailRecomend;