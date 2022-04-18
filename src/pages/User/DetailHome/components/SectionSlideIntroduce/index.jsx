import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Image } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../../../../../constants/Config";
import { useSelector } from "react-redux";

function SectionSlideIntroduce() {
  const [slider, setSlider] = useState();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const detailHome = useSelector((state) => state.detailhome.detailHome);

  const [image, setImage] = useState([]);

  const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;

  const listImage = () => {
    image.map((item, index) => {
      return <Image key={index} width={242} height={180} src={item.url} />;
    });
  };

  useEffect(() => {
    let imgs = [];
    detailHome?.photos?.forEach((item, index) => {
      imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
    });
    setImage(imgs);
  }, [detailHome]);
  return (
    <div className="slide-introduce">
      <Image.PreviewGroup>
        <Image className="img-large" src={image[0]?.url} />
        <br />
        <div className="slider">
          <Slider ref={(c) => setSlider(c)} {...settings}>
            {image.map((item, index) => {
              if (index > 0)
                return (
                  <Image key={index} width={242} height={180} src={item?.url} />
                );
            })}
          </Slider>
        </div>
      </Image.PreviewGroup>
    </div>
  );
}

export default SectionSlideIntroduce;
