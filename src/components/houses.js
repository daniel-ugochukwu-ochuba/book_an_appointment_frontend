import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../assests/stylesheets/houses.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';

import { fetchHouses } from '../redux/reservation/houseSlice';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function Houses() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const houses = useSelector((state) => state.houses.houses);

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
        {houses.map((slide) => (
          <SwiperSlide key={slide} style={{ display: 'flex' }} className="house">
            <div className="circle">
              <img className="house-img" src="https://img2.freepng.es/20180308/dte/kisspng-architectural-rendering-architecture-villa-archite-houses-5aa17fb6bd6679.1252901815205334307758.jpg" alt="house" />
            </div>
            <div className="details">
              <h3>{slide.name}</h3>
              <p>{slide.address}</p>
              <p>{slide.description}</p>
              <p>
                Price Per Day:
                {slide.price_per_day}
                $
              </p>
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
