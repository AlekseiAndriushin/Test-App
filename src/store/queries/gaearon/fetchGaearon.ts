import { createAsyncThunk } from '@reduxjs/toolkit';
import { GithubAPI } from '../../../api/githubApi';

const prefix = 'github/';
const getGaearonPrefix = `${prefix}fetchGaearon`;

export const fetchGaearon = createAsyncThunk(
  getGaearonPrefix,
	  async () => {
    const response = await GithubAPI.getGaearon();
    return response.data;
  }
);