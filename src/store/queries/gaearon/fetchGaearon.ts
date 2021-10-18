import { createAsyncThunk } from '@reduxjs/toolkit';
import NetworkService from '../../../API/NetworkService';

type Gaearon = {
  name: string;
  avatar_url: string;
  company: string;
};

export const fetchGaearon = createAsyncThunk<Gaearon>(
  'gaearon/fetch',
  NetworkService.getGaearon
);
