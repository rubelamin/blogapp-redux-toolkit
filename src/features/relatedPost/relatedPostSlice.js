import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedPosts } from "./relatedPostAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  relatedPosts: [],
};

export const fetchRelatedPosts = createAsyncThunk(
  "posts/fetchRelatedPosts",
  async ({ id, tags }) => {
    const posts = getRelatedPosts({ id, tags });

    return posts;
  }
);

const relatedPostSlice = createSlice({
  name: "relatedPosts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedPosts.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedPosts = action.payload;
      })
      .addCase(fetchRelatedPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedPosts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedPostSlice.reducer;
