import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: {
    token: "eBD1ruzHBo5CjEThIajyKnVjvy0pEWiv",
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
