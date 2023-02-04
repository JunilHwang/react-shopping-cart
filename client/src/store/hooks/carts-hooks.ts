import { useMutation, useQuery } from "react-query";
import { cartService } from "../../services";

const QUERY_KEY = "carts";

export function useCarts() {
  const {
    isLoading,
    data: carts = [],
    refetch: refetchCarts,
  } = useQuery(QUERY_KEY, () => cartService.fetchCarts());

  return { isLoading, carts, refetchCarts };
}

export function useCartAdd() {
  const { mutate: addCart, isSuccess: addedCart } = useMutation(
    QUERY_KEY,
    cartService.addCart
  );

  return {
    addCart,
    addedCart,
  };
}

export function useCartsDelete() {
  const { mutate: deleteCarts, isSuccess: deletedCarts } = useMutation(
    QUERY_KEY,
    cartService.deleteCarts
  );

  return {
    deleteCarts,
    deletedCarts,
  };
}
