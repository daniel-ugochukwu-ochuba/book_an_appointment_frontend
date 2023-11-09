import '../assests/stylesheets/houses.css';
import React from 'react';
import Reservation from './reservation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import '../assests/stylesheets/reserve.css';

const Reservations = () => (
  <>
    <section className="houses-section">
      <h2 className="reservation-title" style={{ textAlign: 'center' }}> Reservations</h2>

      <Reservation />
    </section>
  </>
);

export default Reservations;
