import { createAsyncThunk } from "@reduxjs/toolkit";
import { Followers } from "./followersSlice";

export const fetchFollowers = createAsyncThunk<Followers[]>(
	"followers/fetch",
	async () => {
		const response = await fetch(`https://api.github.com/users/gaearon/followers`)
		const data: Followers[] = await response.json();
		return data;
	}
)