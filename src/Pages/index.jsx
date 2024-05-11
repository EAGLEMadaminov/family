import { lazy } from "react";

export const HomePage = lazy(() => import("./Home.jsx"));
export const MenuPage = lazy(() => import("./Menu.jsx"));
export const CartPage = lazy(() => import("./Cart.jsx"));
export const PurchasePage = lazy(() => import("./Purchase.jsx"));
export const CommentsPage = lazy(() => import("./Comments.jsx"));
export const RestaurantPage = lazy(() => import("./Restaurant.jsx"));
