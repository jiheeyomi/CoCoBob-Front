import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import {
  PostListState,
  PostListData,
  PostSuccessData,
} from '../../types/types';

const initialState: PostListState = {
  error: {
    loading: false,
    error: null,
  },
  data: null,
  success: null,
};
export const postsListSlice = createSlice({
  name: 'postsList',
  initialState,
  reducers: {
    postsList(state) {
      state.error.loading = true;
      state.error.error = null;
    },
    postsListSuccess(state, action: PayloadAction<PostSuccessData[]>) {
      state.error.loading = false;
      state.error.error = null;
      state.success = action.payload;
    },
    postsListFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
  },
});

export const { postsList, postsListSuccess, postsListFailure } =
  postsListSlice.actions;

export default postsListSlice.reducer;
