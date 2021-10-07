import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cards/cardsSlice";
import gaearonReducer from "../features/Gaearon/gaearonSlice";
import followersReducer from '../features/followers/followersSlice'
import userReducer from '../features/User/userSlice';

export const store = configureStore({
	reducer: {
		cards: cardsReducer,
		gaearon: gaearonReducer,
		followers: followersReducer,
		user: userReducer
	},
});
export type RootState = ReturnType<typeof store.getState>;