import axios from 'axios';

// Action types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const STORE_USER_DATA = 'STORE_USER_DATA';

// Action creators
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

// Thunk action creators
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/auth/login', { username, password });
    const { token } = response.data;
    // Store the token in localStorage or cookies for future requests
    // ...
    dispatch(loginSuccess(token));
  } catch (error) {
    // Handle login error
    // ...
  }
};

export const register = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/auth/register', { username, password });
    const { token } = response.data;
    // Store the token in localStorage or cookies for future requests
    // ...
    dispatch(registrationSuccess(token));
  } catch (error) {
    // Handle registration error
    // ...
  }
};
