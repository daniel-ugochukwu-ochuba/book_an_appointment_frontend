/* eslint-disable radix */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
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
        <div className="controlerFinalCarousel">
          <div className="left-nav">
            <img
              src="https://www.htmlcssbuttongenerator.com/image/arrowLeft.png"
              height="12px"
              width="12px"
              alt="controler to the right"
            />
          </div>
          <div className="right-nav">
            <img
              src="https://www.htmlcssbuttongenerator.com/image/arrowLeft.png"
              height="12px"
              width="12px"
              alt="controler to the right"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservations;
