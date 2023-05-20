import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import loadingReducer from '../features/loadingSlice';
import gameReducer from '../features/gameSlice';

export const store = configureStore({
  reducer: {
    user: authReducer,
    loading: loadingReducer,
    gameState: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
