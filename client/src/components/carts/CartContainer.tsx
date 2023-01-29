import { PropsWithChildren } from "react";
import styles from "./Cart.module.scss";

export default function CartContainer({ children }: PropsWithChildren) {
  return <section className={styles.cartSection}>{children}</section>;
}
