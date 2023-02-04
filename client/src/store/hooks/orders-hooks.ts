import { useMutation, useQuery } from "react-query";
import { orderService } from "../../services";

const QUERY_KEY = "orders";

export function useOrders() {
  const { isLoading, data: orders } = useQuery(QUERY_KEY, () =>
    orderService.fetchOrders()
  );

  return {
    orders,
    isLoading,
  };
}

export function useOrderAdd() {
  const { mutate: addOrder, isSuccess: addedOrder } = useMutation(
    QUERY_KEY,
    orderService.addOrder
  );

  return {
    addOrder,
    addedOrder,
  };
}
