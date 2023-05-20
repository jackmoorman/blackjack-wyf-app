import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  host: null,
  inProgress: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.host = action.payload.host;
      state.inProgress = action.payload.inProgress;
    },
  },
});

export const { setGame } = gameSlice.actions;
export default gameSlice.reducer;
