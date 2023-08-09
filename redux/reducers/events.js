import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      // On créé une nouvelle variable qui contient le store actuel + la nouvelle entrée
      const newEventsList = [...state.value, action.payload];
      // On trie la liste des events dans l'ordre chronologique
      newEventsList.sort((a, b) => new Date(a.timeStart) - new Date(b.timeStart));
      state.value = newEventsList;
    },
    addAllEvents: (state, action) => {
      // On trie la liste des events dans l'ordre chronologique
      action.payload.sort((a, b) => new Date(a.timeStart) - new Date(b.timeStart));
      state.value = action.payload;
    },
    updateEvent: (state, action) => {
      const newEventsList = state.value.map((data) => data.tokenEvent !== action.payload.tokenEvent ? data : action.payload);
      // On trie la liste des events dans l'ordre chronologique
      newEventsList.sort((a, b) => new Date(a.timeStart) - new Date(b.timeStart));
      state.value = newEventsList;
    },
    deleteEvent: (state, action) => {
      state.value = state.value.filter((data) => data.tokenEvent !== action.payload);
    },
    deleteAllEvents: (state, action) => {
      state.value = [];
    },
  },
});

export const { addEvent, addAllEvents, updateEvent, deleteEvent, deleteAllEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
