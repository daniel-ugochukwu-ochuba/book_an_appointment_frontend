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
  return (
    <section>
      <h2>Houses</h2>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
      >
        <SwiperSlide className="house">
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
        <SwiperSlide className="house">
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
        <SwiperSlide className="house">
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
        <SwiperSlide className="house">
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
        <SwiperSlide className="house">
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
        <SwiperSlide className="house">
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
        <SwiperSlide className="house">
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
        <SwiperSlide className="house">
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
        <SwiperSlide className="house">
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
        <div className="prev">«</div>
        <div className="next">»</div>
      </Swiper>
    </section>
  );
}

export default Houses;
