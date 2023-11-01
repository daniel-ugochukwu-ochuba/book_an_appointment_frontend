import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../assests/stylesheets/details.css';

function HouseDetails() {
  const location = useLocation();
  const { house } = location.state;

  return (
    <section className="house-details">
      <img className="details-img" src={house.image} alt="house" />
      <div className="details-info">
        <h4>{house.name}</h4>
        <p>{house.address}</p>
        <p>{house.description}</p>
        <p>
          Price Per Day:
          {house.price_per_day}
          $
        </p>
        <p>Duration: 48 Months</p>
        <button type="button" className="reserve">Reserve ⧁</button>
      </div>
    </section>
  );
}

export default HouseDetails;
