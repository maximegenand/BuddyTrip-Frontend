import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
        tokenEvent: "ertyuhgfdsdfghjfd",
        tokenTrip: "sqdlkjqldkjlkjl",
        user: {
            tokenUser: "gdd5g1q3f5g13g13s51s3dsf12",
            username: "Ben",
        },
        name: "Apéro d'arrivée",
        date: "2023-07-24T00:00:00.000Z",
        timeStart: "2023-07-24T18:00:00.000Z",
        timeEnd: "2023-07-24T00:00:00.000Z",
        place: "Centre ville",
        description: "Petite découverte de Rome après que tout le monde se soit installé.\r\n\r\nOn va tester quelques bars du centre-ville.",
        participants: [
            { tokenUser: "qsdmqlksdmsldfiojensdflksd", username: "John" },
            { tokenUser: "sfmlkfmokvmsoenzelknlk,mds", username: "Barbie" },
            { tokenUser: "sdf6gf1s6f1e65s1f6s51f65sd", username: "Ken" },
        ],
        infos: [
            { tokenInfo: "grtyrtyer", user: { tokenUser: "sfmlkfmokvmsoenzelknlk,mds", username: "Barbie" }, name: "Plan de la ville", type:"type/pdf", uri:"https://sebsauvage.net/pdf/pdfgratuit.pdf" }
        ]
    },
    {
        tokenEvent: "mxcvmxcvklxmcvlkm",
        tokenTrip: "eilsddlknckjbzedlikj",
        user: {
            tokenUser: "gdd5g1q3f5g13g13s51s3dsf12",
            username: "Ben",
        },
        name: "Twingo Travel",
        date: "2023-09-15T00:00:00.000Z",
        timeStart: "2023-09-15T18:00:00.000Z",
        timeEnd: "2023-07-15T18:00:00.000Z",
        place: "Lyon",
        seats: 5,
        description: "On part de Lyon avec ma Twingo !\r\n\r\nJ’ai 8 places, et s’il faut j’ai une remorque.",
        participants: [
            { tokenUser: "qsdmqlksdmsldfiojensdflksd", username: "John" },
            { tokenUser: "sfmlkfmokvmsoenzelknlk,mds", username: "Barbie" },
            { tokenUser: "sdf6gf1s6f1e65s1f6s51f65sd", username: "Ken" },
        ],
        infos: [
            { tokenInfo: "oazipazoeipoi", user: { tokenUser: "sdf6gf1s6f1e65s1f6s51f65sd", username: "Ken" }, name: "Vla la caisse", type:"type/jpeg", uri:"https://www.rs-automobiles.com/7045-large_default/renault-twingo-1993.jpg" }
        ]
    },
  ],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
        state.value.push = action.payload;
      },
    removeAllEvents: (state, action) => {
        state.value = [];
      },
  },
});

export const { addEvent, removeAllEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
