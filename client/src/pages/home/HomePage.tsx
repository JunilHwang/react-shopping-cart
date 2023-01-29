import { DefaultLayout, Product, ProductContainer } from "../../components";
import { dummyProducts } from "../../dummy";

export default function HomePage() {
  return (
    <DefaultLayout>
      <ProductContainer>
        {dummyProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductContainer>
    </DefaultLayout>
  );
}
