import { apiClient } from "../clients";
import { IProduct } from "../types";

const BASE_URI = "/products";

export const productService = {
  fetchProducts(): Promise<IProduct[]> {
    return apiClient
      .get<IProduct[]>(BASE_URI)
      .then((response) => response.data);
  },
};
