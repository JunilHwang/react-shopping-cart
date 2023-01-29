import { PropsWithChildren, ReactNode } from "react";
import { styleUtils } from "../../styles";
import { DivideLine } from "../atoms";
import styles from "./Cart.module.scss";
import CartTitle from "./CartTitle";

interface IProps {
  top?: ReactNode;
  title: ReactNode;
}

export default function CartSectionLeft({
  top,
  title,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <section className={styles.cartLeftSection}>
      {top}

      <CartTitle>{title}</CartTitle>
      <DivideLine type="gray" className={styleUtils.mt10} />

      {children}
    </section>
  );
}
