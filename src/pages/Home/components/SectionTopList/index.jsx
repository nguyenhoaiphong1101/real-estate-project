import { Carousel } from 'antd';
import React, { useState, useRef } from 'react';
import ItemSlider from './components/ItemSlider';
import './styles.scss';

function SectionTopList() {
    const [slider, setSlider] = useState()
    const carousel = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="section-top-list">
            <div className="container">
                <div className="title-wrapper">
                    <h5 class="sub-title">Nổi bật</h5>
                    <h2 class="title">Danh sách nổi bật của chúng tôi</h2>
                </div>
                <div className="slider">
                    <div className="arrows">
                        <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={() => { carousel.current.prev(); }} ></i>
                        <i className="slider-next fas fa-arrow-right slick-arrow" onClick={() => { carousel.current.next(); }} ></i>
                    </div>
                    <Carousel ref={carousel} {...settings} >
                        <ItemSlider />
                        <ItemSlider />
                    </Carousel>
                </div>
            </div>
        </div >
    );
}

export default SectionTopList;