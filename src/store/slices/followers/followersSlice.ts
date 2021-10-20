import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFollowers } from '../../queries/followers/fetchFollowers';
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

const followersSlice = createSlice({
  name: 'followers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollowers.pending, (state: FollowersState) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      fetchFollowers.fulfilled,
      (
        state: FollowersState,
        action: PayloadAction<FollowersState['followers']>
      ) => {
        state.followers = action.payload;
        state.isLoading = false;
      }
    );
  },
});

export const selectStatus = (state: RootState) => state.followers.isLoading;

export default followersSlice.reducer;
