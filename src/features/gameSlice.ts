import { createSlice } from '@reduxjs/toolkit';

interface GameState {
  host: string | null;
  inProgress: boolean;
  users: any[];
}

interface Player {
  username: string | null;
  chips: number | null;
}

const initialState: GameState = {
  host: null,
  inProgress: false,
  users: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.host = action.payload.host;
      state.inProgress = action.payload.inProgress;
      state.users = action.payload.users;
    },
  },
});

export const { setGame } = gameSlice.actions;
export default gameSlice.reducer;
