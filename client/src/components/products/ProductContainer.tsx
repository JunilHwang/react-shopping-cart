import { PropsWithChildren } from "react";
import styles from "./Product.module.scss";

export default function ProductContainer({ children }: PropsWithChildren) {
  return <section className={styles.productContainer}>{children}</section>;
}
