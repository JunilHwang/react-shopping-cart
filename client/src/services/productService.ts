import { IProduct } from "../types";
import { shoppingCartStorage } from "../storages";

export const productService = {
  fetchProducts(): Promise<IProduct[]> {
    const shoppingCartData = shoppingCartStorage.getData();
    return Promise.resolve(shoppingCartData.products);
  },
};
