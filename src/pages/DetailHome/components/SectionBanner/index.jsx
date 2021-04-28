import React from 'react';
import './styles.scss';

function SectionBanner() {
    return (
        <div className="detail-section-banner-wrapper">
            <div className="detail-section-banner">
                <div className="container">
                    <div className="sub-header">
                        <span className="listing-badge">For Rent</span>
                        <h1 className="title">Iris Watson, Frederick Nebraska 20620</h1>
                        <span className="address">
                            <i class="fas fa-map-marker-alt"></i>
                            Iris Watson P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionBanner;