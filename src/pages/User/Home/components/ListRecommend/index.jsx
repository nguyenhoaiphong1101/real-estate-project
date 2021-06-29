import React, { useEffect } from 'react';
import "./styles.scss"
import Slider from "react-slick";
import { useRef } from 'react';
import ThumbnailRecomend from '../../../../../components/Thumbnail/ThumbnailRecommend';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { loadListRecommend } from '../../../../../actions/recommend';
import jwtDecode from 'jwt-decode';

function ListRecomend(props) {

    const slide = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const next = () => {
        slide.current.slickNext();
    }
    const previous = () => {
        slide.current.slickPrev();
    }


    const listRecommend = useSelector(state => state.recommend.listRecommend);





    return (
        <div>
            <div className="container">
                <div className="title-recomend">
                    <h2>Danh sách phù hợp với bạn</h2>
                    <div className="slick-slider">
                        <button className="button-prev" onClick={previous}>
                            <LeftOutlined style={{ color: "black", fontSize: "16px" }} />
                        </button>
                        <div>
                            <Slider ref={slide} {...settings}>
                                {listRecommend.map((item, index) => {
                                    if (index < 10) return (<div key={item?.id}>
                                        <ThumbnailRecomend list={item} />
                                    </div>);
                                })}
                            </Slider>
                        </div>
                        <button className="button-next" onClick={next}>
                            <RightOutlined style={{ color: "black", fontSize: "16px" }} />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListRecomend;