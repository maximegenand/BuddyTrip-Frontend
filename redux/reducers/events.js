import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.value.push(action.payload);
    },
    addAllEvents: (state, action) => {
      state.value = action.payload
    },
    removeAllEvents: (state, action) => {
      state.value = [];
    },
  },
});

export const { addEvent, addAllEvents, removeAllEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
