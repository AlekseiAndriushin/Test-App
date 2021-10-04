import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type CardId = string;

interface ICard {
	id: CardId;
	company: string;
	address: string;
	email: string;
	phone: string;
};

type CardsState = {
	card: ICard[];
};
export const selectCards = (state: RootState) => state.cards.card;
const initialState = {
	card: [],
} as CardsState;

export const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		addCard(
			state: CardsState,
			action: PayloadAction<ICard>
		) {
			state.card.push(action.payload);
		},
	},
});

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;