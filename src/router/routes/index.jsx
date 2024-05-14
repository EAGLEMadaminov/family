import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import DashboardLayouts from "../../layouts/DashboardLayouts";
import {
  HomePage,
  MenuPage,
  CartPage,
  OrderPage,
  CommentsPage,
  RestaurantPage,
} from "../../Pages";

export const router = createBrowserRouter([
  {
    paht: "/",
    element: (
      <DashboardLayouts>
        <Suspense fallback={<>...loading</>}>
          <Outlet />
        </Suspense>
      </DashboardLayouts>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/comments",
        element: <CommentsPage />,
      },
      {
        path: "/category/:id",
        element: <RestaurantPage />,
      },
    ],
  },
]);
