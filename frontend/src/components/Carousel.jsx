import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import afaziImage1 from '../assets/1.png';
import afaziImage2 from '../assets/2.png';
import afaziImage3 from '../assets/3.png';


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const containerStyle = {
        width: '95%',
        margin: '0 auto', // Ortalamak için
        justifyContent: 'center'
    };

    return (
        <div style={containerStyle}>
            <Slider {...settings}>
                <div>
                    <img src={afaziImage1} alt="Afazi ile ilgili görsel" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} />
                </div>
                <div>
                    <img src={afaziImage2} alt="Afazi ile ilgili görsel" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} />
                </div>
                <div>
                    <img src={afaziImage3} alt="Afazi ile ilgili görsel" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
