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

  addCartByProductId(productId: number): Promise<void> {
    const shoppingCartData = shoppingCartStorage.getData();
    const product = shoppingCartData.products.find(
      (product) => product.id === productId
    );

    if (!product) {
      return Promise.reject();
    }

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

  deleteCarts(ids: number[]) {
    const shoppingCartData = shoppingCartStorage.getData();

    shoppingCartStorage.setData({
      ...shoppingCartData,
      carts: shoppingCartData.carts.filter(({ id }) => !ids.includes(id)),
    });

    return Promise.resolve();
  },
};
