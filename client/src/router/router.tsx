import { createBrowserRouter } from "react-router-dom";
import { CartPage, HomePage, OrderListPage } from "../pages";

const router = createBrowserRouter([
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
    element: <div>Order</div>,
  },
  {
    path: "/order-list",
    element: <OrderListPage />,
  },
  {
    path: "/orderDetail",
    element: <div>OrderDetail</div>,
  },
]);

export default router;
