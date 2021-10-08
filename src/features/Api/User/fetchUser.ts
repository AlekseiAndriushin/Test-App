import { createAsyncThunk } from "@reduxjs/toolkit";
import RequestService from "../RequestService";

type User = {
	name: string | undefined;
	avatar_url: string | undefined;
	html_url: string | undefined;
	followers: number | undefined;
};

export const fetchUser = createAsyncThunk<User>(
	"user/fetch",
	async () => {
		const url = `https://api.github.com/users/AlexeyAndryushin`
		return RequestService.getRequest(url)
	}
)