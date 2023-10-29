import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions';

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(register(username, password));
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleRegister} type="button">Register</button>
    </div>
  );
};

export default Register;
