import { createBrowserRouter } from "react-router-dom";
import { CartPage, HomePage } from "../pages";

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
    path: "/orderList",
    element: <div>OrderList</div>,
  },
  {
    path: "/orderDetail",
    element: <div>OrderDetail</div>,
  },
]);

export default router;
