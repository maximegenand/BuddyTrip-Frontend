import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {

  },
});

export const { } = tripsSlice.actions;
export default tripsSlice.reducer;
