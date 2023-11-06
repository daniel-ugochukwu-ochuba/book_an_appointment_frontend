import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addHouse } from '../../redux/actions';
import '../../assests/stylesheets/add-house.css';

const AddHouse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    price_per_day: '',
    image: '',
  });
  const [errors, setErrors] = useState({});
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isImageValid, setIsImageValid] = useState(true);

  const [isImageLoading, setIsImageLoading] = useState(true);
  const imageTester = new Image();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'image') {
      setBackgroundImage(e.target.value);
    
    }
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
    } else if (!isImageValid || isImageLoading) {
      isValid = false;
      errors.image = 'Invalid image URL.';
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
      navigate('/houses');
    }
  };

  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
  };

  return (
    <div className="add-house-body" style={pageStyle}>
      <div className="add-house-container">
        <form className="add-house-form" onSubmit={handleSubmit}>
          <h2 className="add-house-title">Add House</h2>
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
            type="text"
            name="address"
            placeholder="Enter the house address"
            id="address"
            className="input-house-address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
          <textarea
            name="description"
            id="description"
            className="input-house-description"
            placeholder="Enter the house description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}
          <input
            type="number"
            name="price_per_day"
            id="price_per_day"
            className="input-house-price"
            placeholder="Enter rental price per day"
            value={formData.price_per_day}
            onChange={handleChange}
          />
          {errors.price_per_day && <span className="error">{errors.price_per_day}</span>}
          <input
            type="text"
            name="image"
            id="image"
            className="input-house-image"
            placeholder="Enter the house image url"
            value={formData.image}
            onChange={handleChange}
          />
          
          {errors.image && !isImageValid && <span className="error">{errors.image}</span>}
          <button className="add-house-button" type="submit">Add House</button>
        </form>
      </div>
    </div>
  );
};

export default AddHouse;
