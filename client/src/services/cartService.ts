import { ICart, IProduct } from "../types";
import { shoppingCartStorage } from "../storages";
import { generateUniqId } from "./utils";

export const cartService = {
  fetchCarts(): Promise<ICart[]> {
    const shoppingCartData = shoppingCartStorage.getData();
    return Promise.resolve(shoppingCartData.carts);
  },

  addCart(product: IProduct): Promise<void> {
    const shoppingCartData = shoppingCartStorage.getData();
    const cart: ICart = {
      id: generateUniqId(),
      product,
    };

    shoppingCartStorage.setData({
      ...shoppingCartData,
      carts: [...shoppingCartData.carts, cart],
    });

    return Promise.resolve();
  },
};
