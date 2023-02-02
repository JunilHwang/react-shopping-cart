import { useQuery } from "react-query";
import { cartService } from "../../services";

export function useCarts() {
  const { isLoading, data: carts = [] } = useQuery("carts", () =>
    cartService.fetchCarts()
  );

  return { isLoading, carts };
}
