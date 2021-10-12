import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/Slices/cards/cardsSlice";
import gaearonReducer from "../features/Slices/Gaearon/gaearonSlice";
import followersReducer from '../features/Slices/followers/followersSlice'
import userReducer from '../features/Slices/User/userSlice';
import authReducer from '../features/Slices/Auth/AuthService'

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