import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../assests/stylesheets/houses.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';

import { fetchHouses, deleteHouse } from '../redux/reservation/houseSlice';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function DeleteHouses() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const handleDeleteHouse = (houseId) => {
    dispatch(deleteHouse(houseId));
  };

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
        {houses.map((house) => (
          <SwiperSlide key={house.id} style={{ display: 'flex' }} className="house">
            <div className="circle">
              <img className="house-img" src={house.image} alt="house" />
            </div>
            <div className="details">
              <h3>{house.name}</h3>
              <button
                type="button"
                className="delete-btn"
                onClick={() => {
                  const shouldDelete = window.confirm('Are you sure you want to delete this house?');
                  if (shouldDelete) {
                    handleDeleteHouse(house.id);
                  }
                }}
              >
                Delete

              </button>
            </div>
          </SwiperSlide>
        ))}
        <div className="prev">«</div>
        <div className="next">»</div>
      </Swiper>
    </section>
  );
}

export default DeleteHouses;
