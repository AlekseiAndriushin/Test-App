import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/types";

export const fetchUser = createAsyncThunk<User>(
	"user/fetch",
	async () => {
		try {
			const response = await fetch(`https://api.github.com/users/AlexeyAndryushin`)
			const data: User = await response.json();
			return data;
		} catch (error) {
			console.log(error)
		}
	}
)