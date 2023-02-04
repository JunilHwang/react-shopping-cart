import { PropsWithChildren, ReactNode } from "react";
import cx from "classnames";
import { Button, DivideLine } from "../atoms";
import { styleUtils } from "../../styles";
import styles from "./Cart.module.scss";
import CartTitle from "./CartTitle";

interface IProps {
  title: ReactNode;
  buttonLabel: ReactNode;
  disabled?: boolean;
}

export default function CartSectionRight({
  children,
  title,
  buttonLabel,
  disabled,
}: PropsWithChildren<IProps>) {
  return (
    <section className={styles.cartRightSection}>
      <div className={styles.cartRightSectionTop}>
        <CartTitle>{title}</CartTitle>
      </div>

      <DivideLine type="thin" />

      <div className={styles.cartRightSectionBottom}>
        {children}
        <div
          className={cx(
            styleUtils.flexCenter,
            styleUtils.mt30,
            styleUtils.mx10
          )}
        >
          <Button
            type="primary"
            size="full"
            className={styleUtils.flexCenter}
            disabled={disabled}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
