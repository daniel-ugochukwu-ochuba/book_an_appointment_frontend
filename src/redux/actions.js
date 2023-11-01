import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const STORE_USER_DATA = 'STORE_USER_DATA';
const ADD_HOUSE_SUCCESS = 'ADD_HOUSE_SUCCESS';

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

export const addHouseSuccess = (houseData) => ({
  type: ADD_HOUSE_SUCCESS,
  payload: houseData,
});

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://127.0.0.1:3000/api/v1/auth/login', { username, password });
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
    const response = await axios.post('http://127.0.0.1:3000/api/v1/auth/register', { username, password });
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

export const addHouse = (houseData) => async (dispatch) => {
  try {
    const token = Cookies.get('token');

    const response = await axios.post('http://127.0.0.1:3000/api/v1/houses', houseData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(`${houseData.name} house added succesfully`);
    dispatch(addHouseSuccess(response.data));
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      toast.error('something went wrong');
      throw new Error('Registration failed');
    }
  }
};

export const getHouseByName = async (name) => {
  try {
    const response = await axios.get(`http://127.0.0.1:3000//api/v1/houses/find_by_name?name=${name}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      toast.error('something went wrong');
      throw new Error('Something went wrong');
    }
  }
};
