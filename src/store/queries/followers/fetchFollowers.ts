import { createAsyncThunk } from '@reduxjs/toolkit';
import { GithubAPI, IGetFollowers } from '../../../api/githubApi';

const prefix = 'github/';
const getFollowersPrefix = `${prefix}fetchFollowers`;

export const fetchFollowers = createAsyncThunk(
  getFollowersPrefix,
	  async (data: IGetFollowers) => {
    const response = await GithubAPI.getFollowers(data);
    return response.data;
  }
);