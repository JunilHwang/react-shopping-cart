import { apiClient } from "../clients";
import { ICart } from "../types";

const BASE_URI = "/carts";

export const cartService = {
  fetchProducts(): Promise<ICart[]> {
    return apiClient.get<ICart[]>(BASE_URI).then((response) => response.data);
  },
};
