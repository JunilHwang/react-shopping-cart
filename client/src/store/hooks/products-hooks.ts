import { useQuery } from "react-query";
import { IProduct } from "../../types";
import { productService } from "../../services";

export function useProducts() {
  const { isLoading, data: products } = useQuery<IProduct[]>("products", () =>
    productService.fetchProducts()
  );

  return { isLoading, products };
}
