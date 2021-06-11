import React, { useEffect } from 'react';
import './styles.scss';
import SectionBanner from './components/SectionBanner';
import SectionBody from './components/SectionBody';
import { useDispatch } from 'react-redux';
import { getInfoUser } from '../../../actions/user';
import { loadCountry, loadProvince } from '../../../actions/search';



function Profile() {
    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(loadCountry());
        dispatch(loadProvince());
    }, [])
    return (
        <div>
            <SectionBanner />
            <SectionBody />
        </div>
    );
}

export default Profile;