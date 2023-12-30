import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const fetchReservation = createAsyncThunk('reservation/fetchReservation',
  async () => {
    const token = Cookies.get('token');
    const response = await fetch('https://rails-6zfj.onrender.com/api/v1/reservations',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    const data = await response.json(); return data;
  });

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(fetchReservation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
