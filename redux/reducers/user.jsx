import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: {
    tokenUser: "gdd5g1q3f5g13g13s51s3dsf12",
    username: "John",
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.value.username = action.payload;
    },
    resetUser: (state, action) => {
      state.value = initialState.value;
    },
  },
});

export const { updateName, resetUser } = userSlice.actions;
export default userSlice.reducer;
