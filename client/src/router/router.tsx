import { createHashRouter } from "react-router-dom";
import { CartPage, HomePage, OrderListPage, OrderPage } from "../pages";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/detail",
    element: <div>Detail</div>,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/order-list",
    element: <OrderListPage />,
  },
  {
    path: "/order-detail",
    element: <div>order detail</div>,
  },
]);

export default router;
