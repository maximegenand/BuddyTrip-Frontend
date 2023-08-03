import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: [/*
    {
      "tokenEvent": "UqsJhATSBSZqpgBXCDlDFyyYZdmsTS4A",
      "tokenTrip": "FFOzaNjn2L4z_tx23_tbixr2shBM29p0",
      "category": "activity",
      "name": "Apéro d'arrivée",
      "date": "2023-07-24T00:00:00.000Z",
      "timeStart": "2023-07-24T18:00:00.000Z",
      "place": "Centre ville",
      "description": "Petite découverte de Rome après que tout le monde se soit installé.\r\n\r\nOn va tester quelques bars du centre-ville.",
      "user": {
        "tokenUser": "1rbtH6kQHjePtTK2qZu0XAkWDK7Ubmt4",
        "username": "Ken"
      },
      "participants": [
        {
          "tokenUser": "1rbtH6kQHjePtTK2qZu0XAkWDK7Ubmt4",
          "username": "Ken"
        }
      ],
      "infos": [
        {
          "tokenInfo": "grRCnfG91EZCK3XwgmSitMDz5cMozgCM",
          "user": {
            "tokenUser": "1rbtH6kQHjePtTK2qZu0XAkWDK7Ubmt4",
            "username": "Ken"
          },
          "name": "Plan de la ville",
          "type": "type/pdf",
          "uri": "https://sebsauvage.net/pdf/pdfgratuit.pdf"
        }
      ]
    },
    {
      "tokenEvent": "2XKxuo2My8T_ZAC84RuCO4gXx4ohWxL5",
      "tokenTrip": "IX755iXN85pkpAqzHcqnw_Y2N4-FNEE8",
      "category": "travel",
      "name": "Twingo Travel",
      "date": "2023-09-15T00:00:00.000Z",
      "timeStart": "2023-09-15T14:00:00.000Z",
      "timeEnd": "2023-09-15T18:00:00.000Z",
      "place": "Lyon",
      "description": "On part de Lyon avec ma Twingo !\r\n\r\nJ’ai 8 places, et s’il faut j’ai une remorque.",
      "seats": 5,
      "user": {
        "tokenUser": "N9k2ePqtGpDnS2lwiVvpaOUBBVRGT_3M",
        "username": "John"
      },
      "participants": [
        {
          "tokenUser": "N9k2ePqtGpDnS2lwiVvpaOUBBVRGT_3M",
          "username": "John"
        }
      ],
      "infos": [
        {
          "tokenInfo": "1-fqnzyhBKsE9RkpLAr5GYexugPVZJEN",
          "user": {
            "tokenUser": "nyVbO_NO2cXcXjYAiGMqLuKFcDpwmZBQ",
            "username": "Barbie"
          },
          "name": "Vla la caisse",
          "type": "type/jpeg",
          "uri": "https://www.rs-automobiles.com/7045-large_default/renault-twingo-1993.jpg"
        }
      ]
    }*/
  ],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.value.push = action.payload;
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
