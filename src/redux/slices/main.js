import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "uz",
};
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    checkLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { checkLang } = mainSlice.actions;

export default mainSlice.reducer;
