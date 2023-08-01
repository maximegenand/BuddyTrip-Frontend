import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      "tokenTrip": "FFOzaNjn2L4z_tx23_tbixr2shBM29p0",
      "name": "Rome les mecs & filles",
      "dateStart": "2023-07-24T00:00:00.000Z",
      "dateEnd": "2023-08-02T00:00:00.000Z",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "user": {
        "tokenUser": "3dqVkFvE-QwQDTT4Zg0JlmLcNuO2D3xM",
        "username": "Ben"
      },
      "participants": [
        {
          "tokenUser": "N9k2ePqtGpDnS2lwiVvpaOUBBVRGT_3M",
          "username": "John"
        },
        {
          "tokenUser": "nyVbO_NO2cXcXjYAiGMqLuKFcDpwmZBQ",
          "username": "Barbie"
        },
        {
          "tokenUser": "1rbtH6kQHjePtTK2qZu0XAkWDK7Ubmt4",
          "username": "Ken"
        }
      ]
    },
    {
      "tokenTrip": "IX755iXN85pkpAqzHcqnw_Y2N4-FNEE8",
      "name": "Titre long de 50 caractères pour gérer l'affichage",
      "dateStart": "2023-09-15T00:00:00.000Z",
      "dateEnd": "2023-09-30T00:00:00.000Z",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "user": {
        "tokenUser": "N9k2ePqtGpDnS2lwiVvpaOUBBVRGT_3M",
        "username": "John"
      },
      "participants": [
        {
          "tokenUser": "3dqVkFvE-QwQDTT4Zg0JlmLcNuO2D3xM",
          "username": "Ben"
        },
        {
          "tokenUser": "nyVbO_NO2cXcXjYAiGMqLuKFcDpwmZBQ",
          "username": "Barbie"
        },
        {
          "tokenUser": "1rbtH6kQHjePtTK2qZu0XAkWDK7Ubmt4",
          "username": "Ken"
        }
      ]
    }
  ]
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    updateTrip: (state, action) => {
      const newState = state.value.filter(element => element.tokenTrip !== action.payload.tokenTrip);
      newState.push(action.payload);
      return state.value = newState;
    },
    addAllTrips: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTrip, addAllTrips } = tripsSlice.actions;
export default tripsSlice.reducer;
