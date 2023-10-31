import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import reservationReducer from './reservation/reservationSlice';

export default configureStore({
  reducer: {
    reducer: reducers,
    reservations: reservationReducer,
  },
});
