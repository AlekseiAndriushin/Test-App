import { createAsyncThunk } from '@reduxjs/toolkit';
import { GithubAPI } from '../../../api/githubApi';

const prefix = 'github/';
const getGaearonPrefix = `${prefix}fetchUser`;

export const fetchUser = createAsyncThunk(
  getGaearonPrefix,
	  async () => {
    const response = await GithubAPI.getUser();
    return response.data;
  }
);