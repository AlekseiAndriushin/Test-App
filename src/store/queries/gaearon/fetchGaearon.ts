import { createAsyncThunk } from '@reduxjs/toolkit';
import NetworkService from '../../../API/NetworkService';

export const fetchGaearon = createAsyncThunk(
  'gaearon/fetch',
  NetworkService.getGaearon
);
