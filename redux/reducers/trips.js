import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
        tokenTrip: "sqdlkjqldkjlkjl",
        user: {
            tokenUser: "gdd5g1q3f5g13g13s51s3dsf12",
            username: "Ben",
            picture: "https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=900&t=st=1690554398~exp=1690554998~hmac=be6a913bf58c9dd234f651a692863dd0f6226ec13a4905152d3430d925c4fd9c",
        },
        name: "Rome les mecs",
        dateStart: "2023-07-24T00:00:00.000Z",
        dateEnd: "2023-08-02T00:00:00.000Z",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        participants: [
            { tokenUser: "qsdmqlksdmsldfiojensdflksd", username: "John" },
            { tokenUser: "sfmlkfmokvmsoenzelknlk,mds", username: "Barbie" },
            { tokenUser: "sdf6gf1s6f1e65s1f6s51f65sd", username: "Ken" },
        ],
    },
    {
        tokenTrip: "eilsddlknckjbzedlikj",
        user: {
            tokenUser: "sfmlkfmokvmsoenzelknlk,mds",
            username: "Barbie",
        },
        name: "Titre long de 50 caractères pour gérer l'affichage",
        dateStart: "2023-09-15T00:00:00.000Z",
        dateEnd: "2023-09-30T00:00:00.000Z",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        participants: [
            { tokenUser: "qsdmqlksdmsldfiojensdflksd", username: "John" },
            { tokenUser: "gdd5g1q3f5g13g13s51s3dsf12", username: "Ben", picture: "https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=900&t=st=1690554398~exp=1690554998~hmac=be6a913bf58c9dd234f651a692863dd0f6226ec13a4905152d3430d925c4fd9c" },
            { tokenUser: "sdf6gf1s6f1e65s1f6s51f65sd", username: "Ken" },
        ],
    }
  ],
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addAllTrips: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addAllTrips } = tripsSlice.actions;
export default tripsSlice.reducer;
