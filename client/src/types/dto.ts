export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetProductResponse extends Product {}

export interface PostProductRequest {
  product: Omit<Product, "id">;
}

/*
  /carts
*/

export interface Cart {
  id: number;
  product: Product;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetCartResponse extends Cart {}

export interface PostCartRequest {
  product: Product;
}

/*
  /orders
*/

export interface OrderDetail extends Product {
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
