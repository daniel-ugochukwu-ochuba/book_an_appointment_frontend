import axios from 'axios';
import Cookies from 'js-cookie';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const STORE_USER_DATA = 'STORE_USER_DATA';

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const registrationSuccess = (token) => ({
  type: REGISTRATION_SUCCESS,
  payload: token,
});

export const storeUserData = (userData) => ({
  type: STORE_USER_DATA,
  payload: userData,
});

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth/login', { username, password });
    const { token } = response.data;
    Cookies.set('token', token, { expires: 7 });

    dispatch(loginSuccess(token));
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error('Login failed');
    }
  }
};

export const register = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth/register', { username, password });
    const { token } = response.data;
    Cookies.set('token', token, { expires: 7 });

    dispatch(registrationSuccess(token));
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error('Registration failed');
    }
  }
};
