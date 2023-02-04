import { useEffect } from "react";
import { useAtom } from "jotai";
import { cartQuantityMapAtom } from "../globalStore";
import { ICart } from "../../../types";

export function useCartQuantity(carts: ICart[]) {
  const [quantityMap, setQuantityMap] = useAtom(cartQuantityMapAtom);

  useEffect(() => {
    setQuantityMap(
      carts.reduce((acc, { id }) => {
        acc[id] = quantityMap[id] || 1;
        return acc;
      }, {} as Record<string, number>)
    );
  }, [carts, quantityMap, setQuantityMap]);

  return [quantityMap, setQuantityMap] as const;
}
