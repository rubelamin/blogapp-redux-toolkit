import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  blogs: [],
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async (rdo) => {
  const blogs = getBlogs(rdo);

  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
