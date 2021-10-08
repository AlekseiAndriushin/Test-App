import { createAsyncThunk } from "@reduxjs/toolkit";
import NetworkService from "../NetworkService";

export type Followers = {
	login: string;
	avatar_url: string;
};



export const fetchFollowers = createAsyncThunk<Followers[]>(
	"followers/fetch",
	NetworkService.getGaearonApi
)