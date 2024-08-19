import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import DashboardLayouts from "../../layouts/DashboardLayouts";
import {
  HomePage,
  CartPage,
  OrderPage,
  CommentsPage,
  RestaurantPage,
  LikesPage,
  UserOrderPage,
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
      {
        path: "/like",
        element: <LikesPage />,
      },
      {
        path: "/userorder",
        element: <UserOrderPage />,
      },
    ],
  },
]);
