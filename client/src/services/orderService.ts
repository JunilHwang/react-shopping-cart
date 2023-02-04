import { IOrder } from "../types";
import { shoppingCartStorage } from "../storages";

export const orderService = {
  fetchOrders(): Promise<IOrder[]> {
    const shoppingCartData = shoppingCartStorage.getData();
    return Promise.resolve(shoppingCartData.orders);
  },
};
