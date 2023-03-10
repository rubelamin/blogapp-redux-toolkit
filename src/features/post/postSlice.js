import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./postAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  post: {},
};

export const fetchPost = createAsyncThunk("post/fetchPost", async (id) => {
  const post = getPost(id);

  return post;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.post = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default postSlice.reducer;
