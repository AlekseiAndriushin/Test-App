import { createAsyncThunk } from "@reduxjs/toolkit";
import { Gaearon } from "../../../components/Footer/Footer";
import NetworkService from "../../../API/NetworkService";

export const fetchGaearon = createAsyncThunk<Gaearon>(
	"gaearon/fetch",
	NetworkService.getGaearon
)