import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type User = {
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

const initialState = {
	status: 'idle',
	error: null,
	user: undefined,
} as userState

const fetchUser = createAsyncThunk(
	'user/fetch',
	async () => {
		const response = await fetch(`https://api.github.com/users/AlexeyAndryushin`)
		return await response.json() as User
	}
)

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