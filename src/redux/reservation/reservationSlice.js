import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchReservation = createAsyncThunk(
  'reservation/fetchReservation',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/reservations');
    const data = await response.json();
    return data;
  },
);

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
