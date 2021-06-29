import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadDetailHome } from '../../../actions/detailhome';
import SectionBanner from './components/SectionBanner';
import SectionBody from './components/SectionBody';
import './styles.scss';

function DetailHome() {
    const token = localStorage.getItem('access_token');
    const history = useHistory()
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) {
            dispatch(loadDetailHome(history?.location?.state?.id, jwtDecode(token).id));
        }
        else {
            dispatch(loadDetailHome(history?.location?.state?.id))
        }
    }, []);

    const isRender = () => {
        if (token) {
            dispatch(loadDetailHome(history?.location?.state?.id, jwtDecode(token).id));
        }
        else {
            dispatch(loadDetailHome(history?.location?.state?.id))
        }
    }

    return (
        <div>
            <SectionBanner />
            <SectionBody isRender={isRender} />
        </div>
    );
}

export default DetailHome;