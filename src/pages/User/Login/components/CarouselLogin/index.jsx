import React from "react";
import "./styles.scss";
import { Carousel } from "antd";

function CarouselLogin() {
  return (
    <Carousel className="carousel" autoplay>
      <div className="carousellogin im1"></div>
      <div className="carousellogin im2"></div>
      <div className="carousellogin im3"></div>
    </Carousel>
  );
}

export default CarouselLogin;
