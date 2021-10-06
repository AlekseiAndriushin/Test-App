import { createAsyncThunk } from "@reduxjs/toolkit";
import { Gaearon } from "../../types/types";

export const fetchGaearon = createAsyncThunk<Gaearon>(
	"gaearon/fetch",
	async () => {
		try {
			const response = await fetch(`https://api.github.com/users/gaearon`)
			const data: Gaearon = await response.json();
			return data;
		} catch (error) {
			console.log("Что-то пошло не так")
		}
	}
)