import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSingleProduct: false,
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showSingleProduct: (state, action) => {
      state.isOpenSingleProduct = action.payload;
    },
    getSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { showSingleProduct, getSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
