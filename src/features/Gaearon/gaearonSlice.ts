import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchGaearon } from "../Api/gaearon/fetchGaearon";
import { Gaearon } from "../types/types";

const initialState = {
	status: 'idle',
	error: null,
	gaearon: undefined,
}

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