import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSingleProduct: false,
  selectedProduct: {},
  showHeadOptions: false,
  isChangeLike: false,
  isChangeProductCount: false,
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
    manageProductCount: (state, action) => {
      state.isChangeProductCount = action.payload;
    },
  },
});

export const {
  showSingleProduct,
  getSelectedProduct,
  manageHeadOptions,
  checkLike,
  manageProductCount,
} = productSlice.actions;
export default productSlice.reducer;
