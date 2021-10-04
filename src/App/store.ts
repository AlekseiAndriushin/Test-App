import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cards/cardsSlice";
import gaearonReducer from '../features/Api/gaearonSlice'
export const store = configureStore({
	reducer: {
		cards: cardsReducer,
		gaearon: gaearonReducer
	},
});
export type RootState = ReturnType<typeof store.getState>;