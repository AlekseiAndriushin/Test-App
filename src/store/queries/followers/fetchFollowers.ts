import { createAsyncThunk } from '@reduxjs/toolkit';
import NetworkService from '../../../API/NetworkService';

export const fetchFollowers = createAsyncThunk(
  'followers/fetch',
  NetworkService.getFollowers
);
