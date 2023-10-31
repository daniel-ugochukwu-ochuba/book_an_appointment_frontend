import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHouses = createAsyncThunk(
  'reservation/fetchReservation',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/houses');
    const data = await response.json();
    return data;
  },
);

export const deleteHouse = createAsyncThunk(
  'house/deleteHouse',
  async (houseId) => {
    const response = await fetch(`http://localhost:3000/api/v1/houses/${houseId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      return houseId; // Return the ID of the deleted house
    }
    throw new Error('Failed to delete the house');
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
      })
      .addCase(deleteHouse.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteHouse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Remove the deleted house from the state
        state.houses = state.houses.filter((house) => house.id !== action.payload);
      })
      .addCase(deleteHouse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default HouseSlice.reducer;
