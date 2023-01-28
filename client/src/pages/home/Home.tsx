import { Header } from "../../components";
import { ReactComponent as IconCart } from "../../assets/svgs/cart.svg";
import { dummyProducts } from "../../dummy";

export default function Home() {
  return (
    <>
      <Header />

      <main className="container">
        <section className="product-container">
          {dummyProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.imageUrl} alt={product.name} />

              <div className="flex justify-between p-5">
                <div className="product-info">
                  <span className="product-info__name">{product.name}</span>
                  <span className="product-info__price">{product.price}</span>
                </div>
                <IconCart />
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
