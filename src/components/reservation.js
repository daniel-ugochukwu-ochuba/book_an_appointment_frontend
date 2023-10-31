/* eslint-disable react/prop-types */

import React from 'react';

function Reservation() {
  return (
    <div className="slideTemplate">
      <div className="reserved-item">
        <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" className="reserved-image" alt="house" />
        <div className="reserved-info">
          <h2 className="reserved-name">Urban Loft</h2>
          <p className="reserved-description">Experience coastal living in this beautiful seaside cottage. Walk to the beach, enjoy ocean views, and BBQ on the spacious deck.</p>
          <p className="reserved-location">
            {' '}
            <svg xmlns="http://www.w3.org/2000/svg" className="location" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
            Downtown, New York City, NY
          </p>
          <p className="reserved-price">$250/night</p>
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
      </div>
    </div>
  );
}

export default Reservation;
