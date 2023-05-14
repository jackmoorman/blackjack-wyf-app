import { createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: null,
  discord_id: null,
  email: null,
  username: null,
  chips: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.discord_id = action.payload.discord_id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.chips = action.payload.chips;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
