import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CardId = string;
type taken = boolean;
interface ICard {
	id: CardId;
	company: string;
	address: string;
	email: string;
	phone: string;
	taken: taken;
};

type CardsState = {
	card: ICard[];
};
const initialState: CardsState = {
	card: [],
};

const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		addCard(
			state: CardsState,
			action: PayloadAction<ICard>
		) {
			state.card.unshift(action.payload);
		},
		toggleCard(
			state: CardsState,
			action: PayloadAction<CardId>
		) {
			const index = state.card.findIndex(
				({ id }) => id === action.payload);
			state.card[index].taken = !state.card[index].taken;
		}
	},
});

export const { addCard, toggleCard } = cardsSlice.actions;

export default cardsSlice.reducer;