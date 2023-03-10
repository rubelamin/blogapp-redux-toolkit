import { createSlice } from "@reduxjs/toolkit";
import { updateLike } from "./likeAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  likes: 0,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    likeAct: (state, action) => {
      updateLike(action.payload);
      //   state.savedPost.isSaved = action.payload;
    },
  },
});

export default likeSlice.reducer;
export const { likeAct } = likeSlice.actions;
