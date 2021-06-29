import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

function SectionBanner() {
    const detailHome = useSelector(state => state.detailhome.detailHome)
    return (
        <div className="detail-section-banner-wrapper">
            <div className="detail-section-banner">
                <div className="container">
                    <div className="sub-header">
                        <span className="listing-badge">{detailHome?.type_apartment}</span>
                        <span className={`listing-badge-status ${detailHome?.status === "OPEN" ? 'open' : detailHome?.status === "PENDING" ? 'pending' : 'close'}`}>{detailHome?.status}</span>
                        <h1 className="title">{detailHome?.title}</h1>
                        <span className="address">
                            <i class="fas fa-map-marker-alt"></i>
                            {detailHome?.address}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionBanner;