import { combineReducers } from 'redux';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const STORE_USER_DATA = 'STORE_USER_DATA';
const ADD_HOUSE_SUCCESS = 'ADD_HOUSE_SUCCESS';

const authenticationReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTRATION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return action.payload;
    default:
      return state;
  }
};

const houseReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_HOUSE_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
  houses: houseReducer,
});

export default rootReducer;
