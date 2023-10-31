import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHouse } from '../../redux/actions';
import '../../styles/add-house.css';

const AddHouse = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    price_per_day: '',
    image: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      isValid = false;
      errors.name = 'Name is required.';
    }

    if (!formData.address.trim()) {
      isValid = false;
      errors.address = 'Address is required.';
    }

    if (!formData.description.trim()) {
      isValid = false;
      errors.description = 'Description is required.';
    }

    if (!formData.price_per_day.trim()) {
      isValid = false;
      errors.price_per_day = 'Price per day is required.';
    }

    if (!formData.image.trim()) {
      isValid = false;
      errors.image = 'Image is required.';
    }

    setErrors(errors);
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      address: '',
      description: '',
      price_per_day: '',
      image: '',
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(addHouse(formData));
      resetForm();
    }
  };

  return (
    <div className="add-house-container">
      <h2 className="add-house-title">Add House</h2>
      <form className="add-house-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <div className="form-group">
          <input
            type="number"
            name="price_per_day"
            id="price_per_day"
            value={formData.price_per_day}
            onChange={handleChange}
          />
          {errors.price_per_day && <span className="error">{errors.price_per_day}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
          />
          {errors.image && <span className="error">{errors.image}</span>}
        </div>
        <button type="submit">Add House</button>
      </form>
    </div>
  );
};

export default AddHouse;
