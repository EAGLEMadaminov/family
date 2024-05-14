import { configureStore } from "@reduxjs/toolkit";
import {
  MainReducer,
  CartReducer,
  HeadReducer,
  FooterReducer,
  ProductReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    main: MainReducer,
    head: HeadReducer,
    footer: FooterReducer,
    product: ProductReducer,
  },
});
