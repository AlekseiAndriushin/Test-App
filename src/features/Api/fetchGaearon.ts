import { createAsyncThunk } from "@reduxjs/toolkit";
import { Gaearon } from './gaearonSlice'

const responseFunc = async () => await fetch(`https://api.github.com/users/gaearon`).then(console.log)
console.log(responseFunc)
export const fetchGaearon = createAsyncThunk<Gaearon>(
	"gaearon/fetch",
	async () => {
		const response = await fetch(`https://api.github.com/users/gaearon`)
		const data: Gaearon = await response.json();
		return data;
	}
)