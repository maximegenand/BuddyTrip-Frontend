import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import be from 'date-fns/locale/be/index';

const initialState = {
  value: []
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    updateTrip: (state, action) => {
      const newTripsList = state.value.map((data) => data.tokenTrip !== action.payload.tokenTrip ? data : action.payload);
      // On trie la liste des trips dans l'ordre chronologique
      newTripsList.sort((a, b) => new Date(a.dateStart) - new Date(b.dateStart));
      state.value = newTripsList;
    },
    addAllTrips: (state, action) => {
      // On trie la liste des trips dans l'ordre chronologique
      action.payload.sort((a, b) => new Date(a.dateStart) - new Date(b.dateStart));
      state.value = action.payload;
    },
    addTrip: (state, action) => {
      // On créé une nouvelle variable qui contient le store actuel + la nouvelle entrée
      const newTripsList = [...state.value, action.payload];
      // On push et on trie la liste des trips dans l'ordre chronologique
      newTripsList.sort((a, b) => new Date(a.dateStart) - new Date(b.dateStart));
      state.value = newTripsList;
    },
    deleteTrip: (state, action) => {
      state.value = state.value.filter((trip) => trip.tokenTrip !== action.payload);
    },
  },
});

export const { updateTrip, addAllTrips, addTrip, deleteTrip } = tripsSlice.actions;
export default tripsSlice.reducer;
