import { useMutation, useQuery } from "react-query";
import { cartService } from "../../services";

const QUERY_KEY = "carts";

export function useCarts() {
  const { isLoading, data: carts = [] } = useQuery(QUERY_KEY, () =>
    cartService.fetchCarts()
  );

  return { isLoading, carts };
}

export function useCartsActions() {
  const { mutate: addCart } = useMutation(QUERY_KEY, cartService.addCart);

  return {
    addCart,
  };
}
