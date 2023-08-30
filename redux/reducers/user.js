import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: {
    /*
    token: "eBD1ruzHBo5CjEThIajyKnVjvy0pEWiv",
    username: "John",
*/
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
