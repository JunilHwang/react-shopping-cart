import { PropsWithChildren } from "react";
import styles from "./Cart.module.scss";

export default function CartTitle({ children }: PropsWithChildren) {
  return <h3 className={styles.cartTitle}>{children}</h3>;
}
