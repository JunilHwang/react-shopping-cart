import cx from "classnames";
import { styleUtils } from "../../styles";
import { DivideLine } from "../atoms";
import { IOrderDetail } from "../../types";
import styles from "./Order.module.scss";

export default function OrderDetailItem({
  name,
  imageUrl,
  quantity,
}: IOrderDetail) {
  return (
    <div>
      <div className={styleUtils.flex}>
        <div className={styles.orderContainer}>
          <div
            className={cx(styleUtils.flex, styleUtils.gap15, styleUtils.mt10)}
          >
            <img
              className={cx(styleUtils.w144, styleUtils.h144)}
              src={imageUrl}
              alt={name}
            />
            <div className={cx(styleUtils.flexCol, styleUtils.gap15)}>
              <span>{name}</span>
              <span>수량: {quantity}</span>
            </div>
          </div>
        </div>
      </div>
      <DivideLine type="thin" className={styleUtils.mt10} />
    </div>
  );
}
