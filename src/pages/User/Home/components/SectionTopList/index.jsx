import { Carousel } from 'antd';
import jwtDecode from 'jwt-decode';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadListHighlight } from '../../../../../actions/highlight';
import ItemSlider from './components/ItemSlider';
import './styles.scss';

function SectionTopList() {
    const [slider, setSlider] = useState()
    const carousel = useRef(null);

    const listHighlight = useSelector(state => state.highlight.listHighlight)
    const dispatch = useDispatch()
    const token = localStorage.getItem('access_token');

    useEffect(() => {
        dispatch(loadListHighlight({
            user_id: token ? jwtDecode(token).id : null
        }));
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  
    return (
        listHighlight.length <=0 ? '' 
        :
        <div className="section-top-list">
            <div className="container">
                <div className="title-wrapper">
                    <h5 className="sub-title">Nổi bật</h5>
                    <h2 className="title">Danh sách nổi bật của chúng tôi</h2>
                </div>
                <div className="slider">
                    <div className="arrows">
                        <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={() => { carousel.current.prev(); }} ></i>
                        <i className="slider-next fas fa-arrow-right slick-arrow" onClick={() => { carousel.current.next(); }} ></i>
                    </div>
                    <Carousel ref={carousel} {...settings} >
                        {listHighlight.map((item) =>
                            <ItemSlider listHighlight={item} />
                        )}
                    </Carousel>
                </div>
            </div>
        </div >
    );
}

export default SectionTopList;