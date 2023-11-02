import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addReservation, getHouseByName } from '../../redux/actions';
import '../../assests/stylesheets/add-reservation.css';

const ReserveHouse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const houseNameFromQuery = queryParams.get('name');

  const [formData, setFormData] = useState({
    name: '',
    numberOfDays: 0,
    startDate: '',
  });

  const [errors, setErrors] = useState({});
  const [house, setHouse] = useState({});
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    if (houseNameFromQuery !== null) {
      (async () => {
        try {
          const fetchedHouse = await getHouseByName(houseNameFromQuery);
          setHouse(fetchedHouse);
          setSubmitEnabled(true);
          setFormData((prevData) => ({ ...prevData, name: fetchedHouse.name }));
        } catch (error) {
          if (error.message === 'House not found') {
            setHouse({});
            setSubmitEnabled(false);
            setErrors({ ...errors, message: 'House not found' });
          }
        }
      })();
    }
  }, [houseNameFromQuery]);

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
    setErrors({});

    if (!formData.name.trim()) {
      isValid = false;
      errors.name = 'Name is required.';
    }

    if (!formData.startDate.trim()) {
      isValid = false;
      errors.startDate = 'Start Date is required.';
    }

    if (formData.numberOfDays <= 0) {
      isValid = false;
      errors.numberOfDays = 'numberOfDays is required.';
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
      return;
    }

    if (validateForm()) {
      dispatch(addReservation(formData, house));
      resetForm();
      navigate('/reservations');
    } else if (!validateForm()) {
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
    }
  };

  return (
    <div className="add-reservation-container">
      <form className="add-reservation-form" onSubmit={handleSubmit}>
        <h2 className="add-reservation-title">Add Reservation</h2>
        <div className="inputs-fields">
          <div className="form-group">
            <label htmlFor="name">
              House Name:
              <input
                type="text"
                name="name"
                id="name"
                className="input-house-name"
                value={formData.name || houseNameFromQuery}
                placeholder="Enter the house name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="start_date">
              Start Date:
              <input
                type="date"
                name="startDate"
                id="start_date"
                className="input-reservation-date"
                value={formData.startDate}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="number_of_days">
              Number of Days:
              <input
                type="number"
                name="numberOfDays"
                id="number_of_days"
                className="input-reservation-days"
                placeholder="Enter rental price per day"
                value={formData.numberOfDays}
                onChange={handleChange}
              />
            </label>

          </div>
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
