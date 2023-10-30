import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions';
import '../../styles/auth.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await dispatch(login(username, password));
      navigate('/houses'); // Redirect to /houses upon successful login
    } catch (error) {
      setError(error.message); // Set the error message received from the action
    }
  };

  const handleSignup = () => {
    navigate('/register');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Login</h1>
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
        <button onClick={handleLogin} type="button" className="login-button">Login</button>
        {error && <p className="error">{error}</p>}
        <p className="signup-link">
          Don&apos;t have an account?
          {' '}
          <button type="button" className="login-url" onClick={handleSignup}>Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
