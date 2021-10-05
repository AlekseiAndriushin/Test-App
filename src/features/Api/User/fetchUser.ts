import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./userSlice";

export const fetchUser = createAsyncThunk<User>(
	"user/fetch",
	async () => {

		const response = await fetch(`https://api.github.com/users/AlexeyAndryushin`)
		const data: User = await response.json();
		return data;
	}
)