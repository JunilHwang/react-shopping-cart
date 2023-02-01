import { useQuery } from "react-query";
import { DefaultLayout, Product } from "../../components";
import { IProduct } from "../../types";
import { productService } from "../../services";

export default function HomePage() {
  const { isLoading, data: products } = useQuery<IProduct[]>("products", () =>
    productService.fetchProducts()
  );

  return (
    <DefaultLayout>
      <Product.Container>
        {isLoading ? (
          <Product.Skeleton count={4} />
        ) : (
          products?.map((product) => (
            <Product.Item key={product.id} {...product} />
          ))
        )}
      </Product.Container>
    </DefaultLayout>
  );
}
