import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchUser } from '../../queries/user/fetchUser';

type User = {
  name: string | undefined;
  avatar_url: string | undefined;
  html_url: string | undefined;
  followers: number | undefined;
};

type UserState = {
  isLoading: boolean;
  error: string | null;
  user: User;
};

const initialState: UserState = {
  isLoading: false,
  error: null,
  user: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
  },
});

export const selectStatus = (state: RootState) => state.user.isLoading;

export default userSlice.reducer;
