import React from 'react';
import '../assests/stylesheets/houses.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function Houses() {
  const slides = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <section className="houses-section">
      <h2>Houses</h2>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide} style={{ display: 'flex' }} className="house">
            <div className="circle">
              <div className="house-img" />
            </div>
            <div className="details">
              <h3>NAME</h3>
              <p>address: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Price Per Day: 100$</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="prev">«</div>
        <div className="next">»</div>
      </Swiper>
    </section>
  );
}

export default Houses;
