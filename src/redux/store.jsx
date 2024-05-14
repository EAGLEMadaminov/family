import { configureStore } from "@reduxjs/toolkit";
import { MainReducer, CartReducer, HeadReducer, FooterReducer } from "./slices";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    main: MainReducer,
    head: HeadReducer,
    footer: FooterReducer,
  },
});
