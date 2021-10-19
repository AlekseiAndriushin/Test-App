import { createAsyncThunk } from '@reduxjs/toolkit';
import NetworkService from '../../../API/NetworkService';

type User = {
  name: string | undefined;
  avatar_url: string | undefined;
  html_url: string | undefined;
  followers: number | undefined;
};

export const fetchUser = createAsyncThunk<User>(
  'user/fetch',
  NetworkService.getUser
);
