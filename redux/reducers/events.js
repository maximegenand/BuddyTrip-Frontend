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
    updateEvent: (state, action) => {
      state.value = state.value.map((data) => data.tokenEvent !== action.payload.tokenEvent ? data : action.payload);
    },
    
    removeAllEvents: (state, action) => {
      state.value = [];
    },
  },
});

export const { addEvent, addAllEvents, removeAllEvents, updateEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
