import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../assests/stylesheets/details.css';

const HouseDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { house } = location.state;

  const handleReserveClick = () => {
    navigate(`/reserve-house?name=${house.name}`);
  };

  return (
    <section className="house-details">
      <img className="details-img" src={house.image} alt="house" />
      <div className="details-info">
        <h4>
          {house.name}
          <br />
          <p className="h3">-  $200 deposit upon any House</p>
        </h4>
        <div className="details-price">
          <p>finance Fee</p>
          <p>
            {house.price_per_day / 4}
            $
          </p>
        </div>
        <div className="details-price">
          <p>Option to pucharse fee</p>
          <p>
            {house.price_per_day / 3}
            $
          </p>
        </div>
        <div className="details-price">
          <p>Toal Amount payable</p>
          <p>
            {house.price_per_day * 48 * 30}
            $
          </p>
        </div>
        <div className="details-price">
          <p>Duration</p>
          <p>48 months</p>
        </div>
        <div className="details-apr">
          <p className="apr">5.9% APR</p>
          <p> Representative</p>
        </div>
        <div className="details-button">
          <button type="button" className="reserve" onClick={handleReserveClick}>
            Reserve
            <img src="https://img.icons8.com/?size=24&id=JV9QvsUAUkOM&format=png" alt="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HouseDetails;
