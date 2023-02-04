import { ICart, IOrder, IProduct } from "../types";
import { BaseStorage } from "./BaseStorage";
import { dummyCarts, dummyOrders, dummyProducts } from "./dummy";

interface TShoppingCartStorage {
  products: IProduct[];
  carts: ICart[];
  orders: IOrder[];
}

const KEY = "SHOPPING_CART_STORAGE";

class ShoppingCartStorage extends BaseStorage<TShoppingCartStorage> {
  constructor() {
    super(KEY);

    if (!super.getData()) {
      super.setData({
        products: dummyProducts,
        carts: dummyCarts,
        orders: dummyOrders,
      });
    }
  }
}

export const shoppingCartStorage = new ShoppingCartStorage();
