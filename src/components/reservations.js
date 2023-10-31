/* eslint-disable radix */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import Reservation from './reservation';

function Reservations() {
  useEffect(() => {
    const nextBtn = document.querySelector('.right-nav');
    const prevBtn = document.querySelector('.left-nav');
    const container = document.querySelector('.mainContainerCarouselFinal');
    const slide = document.querySelector('.slideTemplate');

    let nbclick = 0;
    const nbSlide = 10;

    if (!nextBtn || !prevBtn || !container || !slide) {
      console.error('One or more elements not found');
      return;
    }

    function updateScroll() {
      const screenWidth = parseInt(
        getCS(container).getPropertyValue('--screenWidth').replace('px', ''),
      );
      const slideWidth = parseInt(
        getCS(slide).getPropertyValue('--slideWidth').replace('px', ''),
      );
      const scrollAmount = ((screenWidth - slideWidth) / 1) * nbclick;
      container.scroll({ left: scrollAmount, behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', () => {
      if (nbclick > 0) {
        nbclick -= 1;
        updateScroll();
      }
    });

    // eslint-disable-next-line no-unused-vars
    const { style: containerStyle, getComputedStyle: getCS } = window;
    nextBtn.addEventListener('click', () => {
      if (nbclick < nbSlide - 1) {
        nbclick += 1;
        updateScroll();
      }
    });
  }, []);
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
