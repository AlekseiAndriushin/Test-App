import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export type Followers = {
	login: string;
	avatar_url: string;
};

type FollowersState = {
	status: "loading" | "idle";
	error: string | null;
	followers: Followers[];
};

const initialState = {
	status: 'idle',
	error: null,
	followers: [],
} as FollowersState

const fetchFollowers = createAsyncThunk<Followers[]>(
	'followers/fetch',
	async () => {
		const response = await fetch(`https://api.github.com/users/gaearon`)
		const data: Followers[] = await response.json()
		return data;
	}
)

export const followersSlice = createSlice({
	name: "followers",
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchFollowers.pending, (state) => {
			state.status = "loading";
			state.error = null;
		})
		builder.addCase(fetchFollowers.fulfilled,
			(state, { payload }) => {
				state.followers.push(...payload)
				state.status = "idle"
			})
	}
})

export const selectStatus = (state: RootState) => state.followers.status

export default followersSlice.reducer