import classnames from "classnames";
import { styleUtils } from "../../styles";
import { Button, PriceAndQuantity } from "../atoms";
import { IOrderDetail } from "../../types";
import styles from "./Order.module.scss";

export default function OrderItem({
  id,
  imageUrl,
  name,
  price,
  quantity,
}: IOrderDetail) {
  return (
    <div className={styles.orderListItem} key={id}>
      <div
        className={classnames(
          styleUtils.flex,
          styleUtils.gap15,
          styleUtils.mt10
        )}
      >
        <img
          className={classnames(styleUtils.w144, styleUtils.h144)}
          src={imageUrl}
          alt={name}
        />
        <div className={classnames(styleUtils.flexCol, styleUtils.gap15)}>
          <span className={styles.orderName}>{name}</span>
          <PriceAndQuantity
            className={styles.orderInfo}
            price={price}
            quantity={quantity}
          />
        </div>
      </div>
      <Button
        className={classnames(styleUtils.flexCenter, styleUtils.alignSelfStart)}
      >
        장바구니
      </Button>
    </div>
  );
}
