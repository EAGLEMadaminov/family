import { configureStore } from "@reduxjs/toolkit";
import { MainReducer, CartReducer, HeadReducer } from "./slices";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    main: MainReducer,
    head: HeadReducer,
  },
});
