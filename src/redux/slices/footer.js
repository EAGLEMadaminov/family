import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isChangeCount: false,
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    showAccount: (state, action) => {
      state.isOpen = action.payload;
    },
    checkCount: (state, action) => {
      state.isChangeCount = action.payload;
    },
  },
});

export const { showAccount, checkCount } = footerSlice.actions;
export default footerSlice.reducer;
