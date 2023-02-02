import { useQuery } from "react-query";
import { orderService } from "../../services";

export function useOrders() {
  const { isLoading, data: orders } = useQuery("orders", () =>
    orderService.fetchOrders()
  );

  return {
    orders,
    isLoading,
  };
}
