import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cards/cardsSlice';
import gaearonReducer from './slices/gaearon/gaearonSlice';
import followersReducer from './slices/followers/followersSlice';
import userReducer from './slices/user/userSlice';
import authReducer from './slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    gaearon: gaearonReducer,
    followers: followersReducer,
    user: userReducer,
    auth: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
