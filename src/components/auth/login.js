import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login(username, password));
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
      <button onClick={handleLogin} type="button">Login</button>
    </div>
  );
};

export default Login;
