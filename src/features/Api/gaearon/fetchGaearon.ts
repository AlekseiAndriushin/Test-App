import { createAsyncThunk } from "@reduxjs/toolkit";
import { Gaearon } from "../../../components/Footer/Footer";
import NetworkService from "../NetworkService";

export const fetchGaearon = createAsyncThunk<Gaearon>(
	"gaearon/fetch",
	NetworkService.getGaearon
)