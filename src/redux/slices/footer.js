import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isChangeCount: false,
  isOpenInformation: {
    id: 0,
    show: false,
  },
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
    showInformation: (state, action) => {
      state.isOpenInformation = action.payload;
    },
  },
});

export const { showAccount, checkCount, showInformation } = footerSlice.actions;

export default footerSlice.reducer;
