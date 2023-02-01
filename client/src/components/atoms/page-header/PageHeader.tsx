import cx from "classnames";
import { PropsWithChildren } from "react";
import { styleUtils } from "../../../styles";
import { DivideLine } from "../divide";
import styles from "./PageHeader.module.scss";

export default function PageHeader({ children }: PropsWithChildren) {
  return (
    <header className={cx(styleUtils.flexColCenter, styleUtils.mt20)}>
      <h2 className={styles.pageHeader}>{children}</h2>
      <DivideLine className={styleUtils.mt20} />
    </header>
  );
}
