import { createSlice } from "@reduxjs/toolkit";
import { updateSaved } from "./savedAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  savedPost: {},
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    savedAct: (state, action) => {
      updateSaved(action.payload);
      //   state.savedPost.isSaved = action.payload;
    },
  },
});

export default savedSlice.reducer;
export const { savedAct } = savedSlice.actions;
