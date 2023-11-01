import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { getHouseByName } from '../../redux/actions';
import '../../assests/stylesheets/add-reservation.css';

const ReserveHouse = () => {
//   const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    numberOfDays: 0,
    startDate: '',
  });
  const [errors, setErrors] = useState({});
  const [house, setHouse] = useState({});
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      try {
        const fetchedHouse = await getHouseByName(value);
        setHouse(fetchedHouse);
        setSubmitEnabled(true);
      } catch (error) {
        if (error.message === 'House not found') {
          setHouse({});
          setSubmitEnabled(false);
          setErrors({ ...errors, message: 'House not found' });
        }
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'numberOfDays' ? parseInt(value, 10) : value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      isValid = false;
      errors.name = 'Name is required.';
    }

    if (!formData.startDate.trim()) {
      isValid = false;
      errors.name = 'Start Date is required.';
    }

    if (formData.numberOfDays <= 0) {
      isValid = false;
      errors.name = 'numberOfDays is required.';
    }

    setErrors(errors);
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      numberOfDays: 0,
      startDate: '',
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!submitEnabled) {
      e.preventDefault();
      return;
    }

    if (validateForm()) {
    //   dispatch(addHouse(formData));
      resetForm();
      navigate('/reservations');
    }
  };

  return (
    <div className="add-reservation-container">
      <form className="add-reservation-form" onSubmit={handleSubmit}>
        <h2 className="add-reservation-title">Add Reservation</h2>
        <div className="inputs-fields">
          <input
            type="text"
            name="name"
            id="name"
            className="input-house-name"
            value={formData.name}
            placeholder="Enter the house name"
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="date"
            name="startDate"
            id="start_date"
            className="input-reservation-date"
            value={formData.startDate}
            onChange={handleChange}
          />
          {errors.startDate && <span className="error">{errors.startDate}</span>}
          <input
            type="number"
            name="numberOfDays"
            id="number_of_days"
            className="input-reservation-days"
            placeholder="Enter rental price per day"
            value={formData.numberOfDays}
            onChange={handleChange}
          />
        </div>
        {errors.numberOfDays && <span className="error">{errors.numberOfDays}</span>}
        <button className="add-reservation-button" type="submit">Reserve House</button>
      </form>
      {Object.keys(house).length ? (
        <div className="found-house-data">
          <h3>House Details:</h3>
          <p>
            Name:
            {house.name}
          </p>
          <p>
            Description:
            {house.description}
          </p>
          <p>
            Price per Day:
            {house.price_per_day}
          </p>
        </div>
      ) : (
        errors.message && <div className="error">{errors.message}</div>
      )}
    </div>
  );
};

export default ReserveHouse;
