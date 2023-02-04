import classnames from "classnames";
import { useCallback } from "react";
import { styleUtils } from "../../styles";
import { Button, PriceAndQuantity } from "../atoms";
import { IOrderDetail } from "../../types";
import styles from "./Order.module.scss";

interface IProps extends IOrderDetail {
  onClickCart?: (id: number) => void;
}

export default function OrderItem({
  id,
  imageUrl,
  name,
  price,
  quantity,
  onClickCart,
}: IProps) {
  const handleClickCart = useCallback(() => {
    onClickCart?.(id);
  }, [id, onClickCart]);

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
        onClick={handleClickCart}
      >
        장바구니
      </Button>
    </div>
  );
}
