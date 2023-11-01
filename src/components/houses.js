import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
          <SwiperSlide
            key={slide.id}
            style={{ display: 'flex' }}
            className="house"
          >
            <Link className="link" to={`/houses/${slide.id}`} state={{ house: slide }}>
              <div className="circle">
                <img className="house-img" src={slide.image} alt="house" />
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
            </Link>
          </SwiperSlide>
        ))}
        <div className="prev">◁</div>
        <div className="next">▷</div>
      </Swiper>
    </section>
  );
}

export default Houses;
