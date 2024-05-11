import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isChangeSelectCount: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    checkSelectCount: (state, action) => {
      state.isChangeSelectCount = action.payload;
    },
  },
});

export const { checkSelectCount } = cartSlice.actions;
export default cartSlice.reducer;
