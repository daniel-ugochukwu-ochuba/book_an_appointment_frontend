import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/actions';
import '../../assests/stylesheets/auth.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await dispatch(register(username, password));
      navigate('/houses'); // Redirect to /houses upon successful login
    } catch (error) {
      setError(error.message); // Set the error message received from the action
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Register</h1>
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input-field"
          />
        </div>
        <button onClick={handleRegister} type="button" className="login-button">Register</button>
        {error && <p className="error">{error}</p>}
        <p className="signup-link">
          Already have an account?
          {' '}
          <button type="button" className="login-url" onClick={handleLogin}>Login</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
