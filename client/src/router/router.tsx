import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <div>List</div>,
  },
  {
    path: "/detail",
    element: <div>Detail</div>,
  },
  {
    path: "/cart",
    element: <div>Cart</div>,
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
