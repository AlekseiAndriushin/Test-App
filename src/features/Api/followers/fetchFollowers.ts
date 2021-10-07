import { createAsyncThunk } from "@reduxjs/toolkit";
import { Followers } from "../../types/types";
import RequestService from "../RequestService";

export const fetchFollowers = createAsyncThunk<Followers[]>(
	"followers/fetch",

	async () => {
		const url = `https://api.github.com/users/gaearon/followers`
		return RequestService.getRequest(url)
	}
)