import { ICart, IProduct } from "../types";

export const CartQuantity = {
  MIN: 1,
  MAX: 20,
} as const;

export function cartsToOrderDetails(
  carts: ICart[],
  cartQuantityMap: Record<string, number>
) {
  const productMap: Record<string, IProduct> = carts.reduce(
    (map, { product }) => {
      map[product.id] = product;
      return map;
    },
    {} as Record<string, IProduct>
  );

  const productQuantityMap: Record<string, number> = carts.reduce(
    (map, { id, product }) => {
      map[product.id] = (map[product.id] || 0) + cartQuantityMap[id];
      return map;
    },
    {} as Record<string, number>
  );

  return Object.values(productMap).map((product) => ({
    ...product,
    quantity: productQuantityMap[product.id],
  }));
}
