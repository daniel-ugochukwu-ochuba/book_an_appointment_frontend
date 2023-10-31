/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';
import { fetchReservation } from '../redux/reservation/reservationSlice';

function Reservation() {
  const slides = Array.from({ length: 10 }, (_, index) => index + 1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservation());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.reservations);
  console.log(reservations);
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
              <div className="days-info">
                <p className="reserved-date">
                  Start:
                  {' '}
                  <em>20 oct 2023</em>
                  {' '}
                </p>
                <p className="days">
                  Days:
                  {' '}
                  <strong>23</strong>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="prev">«</div>
        <div className="next">»</div>
      </Swiper>
    </div>
  );
}

export default Reservation;
