import { useAtom } from "jotai/index";
import { useCallback } from "react";
import { orderDetailsAtom } from "../globalStore";
import { cartsToOrderDetails } from "../../../domain";
import { ICart } from "../../../types";

export function useOrderDetails(
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
