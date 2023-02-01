import { apiClient } from "../clients";
import { IOrder } from "../types";

const BASE_URI = "/orders";

export const orderService = {
  fetchProducts(): Promise<IOrder[]> {
    return apiClient.get<IOrder[]>(BASE_URI).then((response) => response.data);
  },
};
