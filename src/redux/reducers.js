import { combineReducers } from 'redux';
// Action types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const STORE_USER_DATA = 'STORE_USER_DATA';
// Reducer for authentication state
const authenticationReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTRATION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

// Reducer for user data
const userReducer = (state = null, action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return action.payload;
    default:
      return state;
  }
};

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
});

export default rootReducer;
