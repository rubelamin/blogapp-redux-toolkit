import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import postReducer from "../features/post/postSlice";
import relatedPostReducer from "../features/relatedPost/relatedPostSlice";
import filterReducer from "../features/filter/filterSlice";
import savedReducer from "../features/favourites/savedSlice";
import likeReducer from "../features/favourites/likeSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    post: postReducer,
    relatedPosts: relatedPostReducer,
    filtered: filterReducer,
    savedPost: savedReducer,
    liked: likeReducer,
  },
});
