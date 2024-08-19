import React from 'react';
import { Carousel } from 'antd';
import '../styles/PromotionCarousel.css'; // Import CSS cho carousel

const PromotionCarousel = () => {
    return (
        <Carousel autoplay>
            <div className="carousel-slide">
                <img src="https://via.placeholder.com/1200x300?text=Promotion+1" alt="Promotion 1" />
            </div>
            <div className="carousel-slide">
                <img src="https://via.placeholder.com/1200x300?text=Promotion+2" alt="Promotion 2" />
            </div>
            <div className="carousel-slide">
                <img src="https://via.placeholder.com/1200x300?text=Promotion+3" alt="Promotion 3" />
            </div>
        </Carousel>
    );
};

export default PromotionCarousel;
