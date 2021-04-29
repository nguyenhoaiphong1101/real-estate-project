import React, { useState } from 'react';
import './styles.scss';
import { Image } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SectionSlideIntroduce() {
    const [slider, setSlider] = useState()
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className="slide-introduce">
            <Image.PreviewGroup>
                <Image className="img-large"
                    src="http://androthemes.com/themes/react/acres/assets/img/listing-single/6.jpg"
                />
                <br />
                <div className="slider">
                    <Slider ref={c => (setSlider(c))} {...settings}>
                        <Image width={242} height={180}
                            src="http://androthemes.com/themes/react/acres/assets/img/listing-single/1.jpg"
                        />
                        <Image width={242} height={180}
                            src="http://androthemes.com/themes/react/acres/assets/img/listing-single/2.jpg"
                        />
                        <Image width={242} height={180}
                            src="http://androthemes.com/themes/react/acres/assets/img/listing-single/3.jpg"
                        />
                        <Image width={242} height={180}
                            src="http://androthemes.com/themes/react/acres/assets/img/listing-single/4.jpg"
                        />
                        <Image width={242} height={180}
                            src="http://androthemes.com/themes/react/acres/assets/img/listing-single/5.jpg"
                        />
                    </Slider>
                </div>

            </Image.PreviewGroup>
        </div>
    );
}

export default SectionSlideIntroduce;