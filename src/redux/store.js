import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import reservationReducer from './reservation/reservationSlice';
import housesReducer from './reservation/houseSlice';

export default configureStore({
  reducer: {
    reducer: reducers,
    reservations: reservationReducer,
    houses: housesReducer,
  },
});
