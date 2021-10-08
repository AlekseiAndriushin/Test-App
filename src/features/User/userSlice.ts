import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchUser } from "../Api/User/fetchUser";

type User = {
	name: string | undefined;
	avatar_url: string | undefined;
	html_url: string | undefined;
	followers: number | undefined;
};

type userState = {
	status: "loading" | "idle";
	error: string | null;
	user: User;
};

const initialState: userState = {
	status: 'idle',
	error: null,
	user: undefined,
} as userState

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.pending, (state) => {
			state.status = "loading";
			state.error = null;
		})
		builder.addCase(fetchUser.fulfilled,
			(state, action) => {
				state.user = action.payload
				state.status = "idle"
			})
	}

})

export const selectStatus = (state: RootState) => state.user.status

export default userSlice.reducer