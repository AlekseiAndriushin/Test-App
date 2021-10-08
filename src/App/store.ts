import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/Slices/cards/cardsSlice";
import gaearonReducer from "../features/Slices/Gaearon/gaearonSlice";
import followersReducer from '../features/Slices/followers/followersSlice'
import userReducer from '../features/Slices/User/userSlice';

export const store = configureStore({
	reducer: {
		cards: cardsReducer,
		gaearon: gaearonReducer,
		followers: followersReducer,
		user: userReducer
	},
});
export type RootState = ReturnType<typeof store.getState>;