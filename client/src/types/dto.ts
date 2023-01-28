export interface IProduct {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGetProductResponse extends IProduct {}

export interface IPostProductRequest {
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
export interface IGetCartResponse extends ICart {}

export interface IPostCartRequest {
  product: IProduct;
}

/*
  /orders
*/

export interface IOrderDetail extends IProduct {
  quantity: number;
}

export interface IOrder {
  id: number;
  orderDetails: IOrderDetail[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGetOrderResponse extends IOrder {}

export interface IPostOrderResponse {
  orderDetails: IOrderDetail[];
}
