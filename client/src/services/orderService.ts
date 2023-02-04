import { IOrder, IOrderDetail } from "../types";
import { shoppingCartStorage } from "../storages";
import { generateUniqId } from "./utils";

export const orderService = {
  fetchOrders(): Promise<IOrder[]> {
    const shoppingCartData = shoppingCartStorage.getData();
    return Promise.resolve(shoppingCartData.orders);
  },

  addOrder(orderDetails: IOrderDetail[]): Promise<void> {
    const shoppingCartData = shoppingCartStorage.getData();

    shoppingCartStorage.setData({
      ...shoppingCartData,
      orders: [
        ...shoppingCartData.orders,
        {
          id: generateUniqId(),
          orderDetails,
        },
      ],
    });

    return Promise.resolve();
  },
};
