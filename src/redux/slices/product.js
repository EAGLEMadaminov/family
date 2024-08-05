import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSingleProduct: false,
  selectedProduct: {},
  showHeadOptions: false,
  isChangeLike: false,
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
    manageHeadOptions: (state, action) => {
      state.showHeadOptions = action.payload;
    },
    checkLike: (state, action) => {
      state.isChangeLike = action.payload;
    },
  },
});

export const {
  showSingleProduct,
  getSelectedProduct,
  manageHeadOptions,
  checkLike,
} = productSlice.actions;
export default productSlice.reducer;
