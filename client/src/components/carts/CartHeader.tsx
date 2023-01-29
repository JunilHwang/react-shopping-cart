import cx from "classnames";
import { PropsWithChildren } from "react";
import { styleUtils } from "../../styles";
import { DivideLine } from "../atoms";
import styles from "./Cart.module.scss";

export default function CartHeader({ children }: PropsWithChildren) {
  return (
    <header className={cx(styleUtils.flexColCenter, styleUtils.mt20)}>
      <h2 className={styles.cartSectionTitle}>{children}</h2>
      <DivideLine className={styleUtils.mt20} />
    </header>
  );
}
