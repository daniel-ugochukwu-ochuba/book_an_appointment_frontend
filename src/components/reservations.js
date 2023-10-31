/* eslint-disable radix */
/* eslint-disable no-use-before-define */
import React from 'react';
import Reservation from './reservation';

function Reservations() {
  return (
    <>
      <h1 className="reservation-title"> Reservations</h1>
      <div className="containerVertical">
        <div className="slideContainer" data-interval="false">
          <div className="mainContainerCarouselFinal">
            <Reservation />
            <Reservation />
            <Reservation />
            <Reservation />
            <Reservation />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservations;
