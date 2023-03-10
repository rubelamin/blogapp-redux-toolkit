import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: "",
  selectedValue: "",
};

const filterSlice = createSlice({
  name: "filtered",
  initialState,
  reducers: {
    savedStatus: (state, action) => {
      state.saved = action.payload;
    },
    selectedItem: (state, action) => {
      state.selectedValue = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { savedStatus, selectedItem } = filterSlice.actions;
