export interface IProduct {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetProductResponse extends IProduct {}

export interface PostProductRequest {
  product: Omit<IProduct, "id">;
}

/*
  /carts
*/

export interface ICart {
  id: number;
  product: IProduct;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetCartResponse extends ICart {}

export interface PostCartRequest {
  product: IProduct;
}

/*
  /orders
*/

export interface OrderDetail extends IProduct {
  quantity: number;
}

export interface Order {
  id: number;
  orderDetails: OrderDetail[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetOrderResponse extends Order {}

export interface PostOrderResponse {
  orderDetails: OrderDetail[];
}
