import { useQuery } from "react-query";
import { IProduct } from "../../../types";
import { productService } from "../../../services";

const QUERY_KEY = "products";

export function useProducts() {
  const { isLoading, data: products } = useQuery<IProduct[]>(
    QUERY_KEY,
    productService.fetchProducts
  );

  return { isLoading, products };
}
