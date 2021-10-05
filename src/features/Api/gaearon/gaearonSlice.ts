import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { fetchGaearon } from "./fetchGaearon";

export type Gaearon = {
	name: string;
	avatar_url: string;
	company: string;
};

type GaearonState = {
	status: "loading" | "idle";
	error: string | null;
	gaearon: Gaearon;
};

const initialState = {
	status: 'idle',
	error: null,
	gaearon: undefined,
} as GaearonState

export const gaearonSlice = createSlice({
	name: "gaearon",
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchGaearon.pending, (state) => {
			state.status = "loading";
			state.error = null;
		})
		builder.addCase(fetchGaearon.fulfilled,
			(state, action) => {
				state.gaearon = action.payload
				state.status = "idle"
			})
	}

})

export const selectStatus = (state: RootState) => state.gaearon.status

export default gaearonSlice.reducer