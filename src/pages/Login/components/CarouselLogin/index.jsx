import React from 'react';
import './styles.scss'
import { Carousel } from 'antd';


function CarouselLogin() {
    return (
        <Carousel className="carousel" autoplay>
            <div className="carousellogin im1">
                <div className="acr-auth-quote">
                    <h6>Quote of the day</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id eligendi aperiam ea officia exercitationem inventore, quod accusamus pariatur repellat at rerum dignissimos eveniet quae expedita assumenda reiciendis corrupti consequuntur.</p>
                </div>
            </div>
            <div className="carousellogin im2">
                <div className="acr-auth-quote">
                    <h6>Quote of the day</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id eligendi aperiam ea officia exercitationem inventore, quod accusamus pariatur repellat at rerum dignissimos eveniet quae expedita assumenda reiciendis corrupti consequuntur.</p>
                </div>
            </div>
            <div className="carousellogin im3">
                <div className="acr-auth-quote">
                    <h6>Quote of the day</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id eligendi aperiam ea officia exercitationem inventore, quod accusamus pariatur repellat at rerum dignissimos eveniet quae expedita assumenda reiciendis corrupti consequuntur.</p>
                </div>
            </div>
        </Carousel>
    );
}

export default CarouselLogin;