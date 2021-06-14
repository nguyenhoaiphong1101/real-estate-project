import React, { useEffect } from 'react';
import './styles.scss';
import SectionBanner from './components/SectionBanner';
import SectionBody from './components/SectionBody';
import { useDispatch } from 'react-redux';
import { loadCountry, loadProvince } from '../../../actions/search';
import { getInfoUser } from '../../../actions/user';



function Profile() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInfoUser());
        dispatch(loadCountry());
        dispatch(loadProvince());

    }, [])
    const token = localStorage.getItem('access_token');

    return (
        <div>
            <SectionBanner />
            <SectionBody />
        </div>
    );
}

export default Profile;