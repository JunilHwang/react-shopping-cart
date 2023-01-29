import classnames from "classnames";
import { DefaultLayout, Price } from "../../components";
import { ReactComponent as IconCart } from "../../assets/svgs/cart.svg";
import { dummyProducts } from "../../dummy";
import styleUtils from "../../styles/modules/Utils.module.scss";
import styles from "./Product.module.scss";

export default function HomePage() {
  return (
    <DefaultLayout>
      <section className={styles.productContainer}>
        {dummyProducts.map((product) => (
          <div className={styles.productItem} key={product.id}>
            <img src={product.imageUrl} alt={product.name} />

            <div
              className={classnames(
                styleUtils.flex,
                styleUtils.justifyBetween,
                styleUtils.p5
              )}
            >
              <div className={styles.productInfo}>
                <span className={styles.productInfoName}>{product.name}</span>
                <Price
                  className={styles.productInfoPrice}
                  price={product.price}
                />
              </div>
              <IconCart />
            </div>
          </div>
        ))}
      </section>
    </DefaultLayout>
  );
}
