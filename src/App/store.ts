import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cards/cardsSlice";
import gaearonReducer from "../features/Api/gaearon/gaearonSlice";
import followersReducer from '../features/Api/followers/followersSlice'
import userReducer from '../features/Api/User/userSlice';
export const store = configureStore({
	reducer: {
		cards: cardsReducer,
		gaearon: gaearonReducer,
		followers: followersReducer,
		user: userReducer
	},
});
export type RootState = ReturnType<typeof store.getState>;