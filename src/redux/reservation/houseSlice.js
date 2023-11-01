import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHouses = createAsyncThunk(
  'reservation/fetchReservation',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/houses');
    const data = await response.json();
    return data;
  },
);

const initialState = {
  houses: [],
  status: 'idle',
  error: null,
};

export const HouseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.houses = action.payload;
      })
      .addCase(fetchHouses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default HouseSlice.reducer;
