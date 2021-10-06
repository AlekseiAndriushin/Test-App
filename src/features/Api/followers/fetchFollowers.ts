import { createAsyncThunk } from "@reduxjs/toolkit";
import { Followers } from "../../types/types";

export const fetchFollowers = createAsyncThunk<Followers[]>(
	"followers/fetch",
	async () => {
		try {
			const response = await fetch(`https://api.github.com/users/gaearon/followers`)
			const data: Followers[] = await response.json();
			return data;
		} catch (error) {
			console.log("Что-то пошло не так", error)
		}
	}
)