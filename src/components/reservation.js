/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';
import { fetchReservation } from '../redux/reservation/reservationSlice';

const Reservation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservation());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.reservations);
  return (
    <div className="slideTemplate">
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
        {reservations.map((slide) => (
          <SwiperSlide key={slide.id} style={{ display: 'flex' }} className="reservation-slide">
            <div className="square">
              <img className="house-img" src={slide.house_image} alt="house" />
            </div>
            <div className="details">
              <div className="border-radius" />
              <h3>{slide.house_name}</h3>
              <p>
                Days reserverd:&nbsp;
                {slide.number_of_days}
              </p>
              <p>
                startting date:&nbsp;
                {slide.start_date}
              </p>
              <p>
                Price Per day:&nbsp;
                {slide.price / slide.number_of_days}
              </p>
              <p>
                Total Amount:&nbsp;
                {slide.price}
              </p>
            </div>
            <div className="circle-icons">
              <img className="circle-icon" src="https://cdn-icons-png.flaticon.com/128/665/665209.png" alt="icons" />
              <img className="circle-icon" src="https://cdn-icons-png.flaticon.com/128/665/665228.png" alt="icons" />
              <img className="circle-icon" src="https://cdn-icons-png.flaticon.com/128/665/665211.png" alt="icons" />
            </div>
          </SwiperSlide>
        ))}
        <div className="prev">◁</div>
        <div className="next">▷</div>
      </Swiper>
    </div>
  );
};

export default Reservation;
