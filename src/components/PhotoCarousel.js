import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './PhotoCarousel.css';

const photos = [
  '/w1.png',
  '/w2.png',
  '/w3.png'
];

const PhotoCarousel = () => {
  return (
    <section className="carousel-section">
      <h2>Momentos que perduran</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {photos.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Foto ${index + 1}`} className="carousel-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PhotoCarousel;
