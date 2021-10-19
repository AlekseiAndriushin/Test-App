import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type FollowersState = {
  isLoading: boolean;
  error: string | null;
  followers: Followers[];
};

type Followers = {
  login: string;
  avatar_url: string;
};

const initialState: FollowersState = {
  isLoading: false,
  error: null,
  followers: [],
};

const fetchFollowers = createAsyncThunk<Followers[]>(
  'followers/fetch',
  async () => {
    const response = await fetch('https://api.github.com/users/gaearon');
    const data: Followers[] = await response.json();
    return data;
  }
);

const followersSlice = createSlice({
  name: 'followers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollowers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchFollowers.fulfilled, (state, action) => {
      state.followers = action.payload;
      state.isLoading = false;
    });
  },
});

export const selectStatus = (state: RootState) => state.followers.isLoading;

export default followersSlice.reducer;
