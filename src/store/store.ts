import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/Cards/cardsSlice';
import gaearonReducer from './slices/Gaearon/gaearonSlice';
import followersReducer from './slices/Followers/followersSlice';
import userReducer from './slices/User/userSlice';
import authReducer from './slices/Auth/authSlice';

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
