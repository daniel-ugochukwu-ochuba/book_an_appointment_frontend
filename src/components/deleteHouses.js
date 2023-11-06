import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';

import '../assests/stylesheets/houses.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';

import { fetchUserHouses, deleteHouse } from '../redux/reservation/houseSlice';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function DeleteHouses() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserHouses());
  }, [dispatch]);

  const handleDeleteHouse = (houseId) => {
    dispatch(deleteHouse(houseId));
  };

  const houses = useSelector((state) => state.houses.houses);
  const status = useSelector((state) => state.houses.status);
  return (
    <section className="houses-section">
      <h2 className="houses-tittle">Delete House</h2>
      {status === 'loading' && (
        <div style={{
          display: 'block', margin: 'auto', width: '100px',
        }}
        >
          <ReactLoading type="cylon" color="#C3ACD0" height={67} width={75} />
        </div>
      )}
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
        {houses.length === 0 && (
        <h3 style={{ textAlign: 'center' }}>You have no houses yet</h3>
        )}
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
                    toast.success(`${house.name} deleted succesfully`);
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
