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
        let idTemp = parseInt(history.location.pathname.slice(10));
        if (token) {
            dispatch(loadDetailHome(idTemp, jwtDecode(token).id));
        }
        else {
            dispatch(loadDetailHome(idTemp))
        }
    }, []);

    const isRender = () => {
        let idTemp = parseInt(history.location.pathname.slice(10));
        if (token) {
            dispatch(loadDetailHome(idTemp, jwtDecode(token).id));
        }
        else {
            dispatch(loadDetailHome(idTemp))
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