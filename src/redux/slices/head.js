import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showComments: false,
  showConnect: false,
};

const headSlice = createSlice({
  name: "head",
  initialState,
  reducers: {
    checkCommetsFunc: (state, action) => {
      state.showComments = action.payload;
    },
    manageConnect: (state, action) => {
      state.showConnect = action.payload;
    },
  },
});

export const { checkCommetsFunc, manageConnect } = headSlice.actions;
export default headSlice.reducer;
