import { lazy } from "react";

export const HomePage = lazy(() => import("./Home.jsx"));
export const CartPage = lazy(() => import("./Cart.jsx"));
export const OrderPage = lazy(() => import("./Order.jsx"));
export const CommentsPage = lazy(() => import("./Comments.jsx"));
export const RestaurantPage = lazy(() => import("./Restaurant.jsx"));
export const LikesPage = lazy(() => import("./Likes.jsx"));
export const UserOrderPage = lazy(() => import("./UserOrder.jsx"));
