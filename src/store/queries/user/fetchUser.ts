import { createAsyncThunk } from '@reduxjs/toolkit';
import NetworkService from '../../../API/NetworkService';

export const fetchUser = createAsyncThunk('user/fetch', NetworkService.getUser);
