import { PropsWithChildren } from "react";
import styles from "./Order.module.scss";

export default function OrderSection({ children }: PropsWithChildren) {
  return <section className={styles.orderSection}>{children}</section>;
}
