import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/types";
import RequestService from "../RequestService";

export const fetchUser = createAsyncThunk<User>(
	"user/fetch",
	async () => {
		const url = `https://api.github.com/users/AlexeyAndryushin`
		return RequestService.getRequest(url)
	}
)