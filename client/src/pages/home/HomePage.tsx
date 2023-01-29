import { DefaultLayout, Price } from "../../components";
import { ReactComponent as IconCart } from "../../assets/svgs/cart.svg";
import { dummyProducts } from "../../dummy";

export default function HomePage() {
  return (
    <DefaultLayout>
      <section className="product-container">
        {dummyProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />

            <div className="flex justify-between p-5">
              <div className="product-info">
                <span className="product-info__name">{product.name}</span>
                <Price className="product-info__price" price={product.price} />
              </div>
              <IconCart />
            </div>
          </div>
        ))}
      </section>
    </DefaultLayout>
  );
}
