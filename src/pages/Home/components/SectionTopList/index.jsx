import React from 'react';
import { Col, Row } from 'antd';
import './styles.scss';
import ItemSlider from './components/ItemSlider';

function SectionTopList() {
    return (
        <div className="section-top-list">
            <div className="container">
                <div className="title-wrapper">
                    <h5 class="sub-title">Trending</h5>
                    <h2 class="title">Our Top Listing</h2>
                </div>
                <div className="slider">
                    <ItemSlider />
                </div>
            </div>
        </div >
    );
}

export default SectionTopList;