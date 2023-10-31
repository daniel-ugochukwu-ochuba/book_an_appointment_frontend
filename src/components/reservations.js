import '../assests/stylesheets/houses.css';
import React from 'react';
import Reservation from './reservation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import '../assests/stylesheets/reserve.css';

function Reservations() {
  return (
    <>
      <section className="houses-section">
        <h1 className="reservation-title" style={{ textAlign: 'center' }}> Reservations</h1>

        <Reservation />
      </section>
    </>
  );
}

export default Reservations;
