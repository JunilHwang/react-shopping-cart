import { useAtom } from "jotai/index";
import { useCallback, useMemo } from "react";
import { orderDetailsAtom } from "../globalStore";
import { cartsToOrderDetails } from "../../../domain";
import { ICart } from "../../../types";

export function useGenerateOrderDetails(
  checkedIds: number[],
  quantityMap: Record<string, number>
) {
  const [, setOrderDetails] = useAtom(orderDetailsAtom);

  return useCallback(
    (carts: ICart[]) => {
      setOrderDetails(
        cartsToOrderDetails(
          carts.filter(({ id }) => checkedIds.includes(id)),
          quantityMap
        )
      );
    },
    [checkedIds, quantityMap, setOrderDetails]
  );
}

export function useOrderDetails() {
  const [orderDetails] = useAtom(orderDetailsAtom);

  const totalQuantity = useMemo(
    () => orderDetails.reduce((acc, { quantity }) => acc + quantity, 0),
    [orderDetails]
  );

  const totalPrice = useMemo(
    () =>
      orderDetails.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0
      ),
    [orderDetails]
  );

  return {
    orderDetails,
    totalQuantity,
    totalPrice,
  };
}
