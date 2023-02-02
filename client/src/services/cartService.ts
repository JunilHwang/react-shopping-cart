import { apiClient } from "../clients";
import { ICart, IProduct } from "../types";

const BASE_URI = "/carts";

export const cartService = {
  fetchCarts(): Promise<ICart[]> {
    return apiClient.get<ICart[]>(BASE_URI).then((response) => response.data);
  },

  addCart(product: IProduct): Promise<void> {
    return apiClient
      .post(BASE_URI, { product })
      .then((response) => response.data);
  },
};
