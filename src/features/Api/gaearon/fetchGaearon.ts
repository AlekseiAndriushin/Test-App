import { createAsyncThunk } from "@reduxjs/toolkit";
import { Gaearon } from "../../types/types";
import RequestService from "../RequestService";

export const fetchGaearon = createAsyncThunk<Gaearon>(
	"gaearon/fetch",
	async () => {
		const url = (`https://api.github.com/users/gaearon`)
		return RequestService.getRequest(url)

	}
)