import { createAsyncThunk } from "@reduxjs/toolkit";
import RequestService from "../RequestService";

export type Followers = {
	login: string;
	avatar_url: string;
};

export const fetchFollowers = createAsyncThunk<Followers[]>(
	"followers/fetch",

	async () => {
		const url = `https://api.github.com/users/gaearon/followers`
		return RequestService.getRequest(url)
	}
)