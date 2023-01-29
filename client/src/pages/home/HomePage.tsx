import { DefaultLayout, Product } from "../../components";
import { dummyProducts } from "../../dummy";

export default function HomePage() {
  return (
    <DefaultLayout>
      <Product.Container>
        {dummyProducts.map((product) => (
          <Product.Item key={product.id} {...product} />
        ))}
      </Product.Container>
    </DefaultLayout>
  );
}
