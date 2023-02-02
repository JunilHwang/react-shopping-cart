import cx from "classnames";
import { MouseEventHandler, useCallback } from "react";
import { styleUtils } from "../../styles";
import { IconButton, Price } from "../atoms";
import { IProduct } from "../../types";
import { IconCart } from "../../assets/svgs";
import styles from "./Product.module.scss";

interface IProps extends IProduct {
  onClickCart?: (id: number) => void;
}

export default function ProductItem({
  id,
  name,
  imageUrl,
  price,
  onClickCart,
}: IProps) {
  const handeClickCartIcon: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      onClickCart?.(id);
    },
    [id, onClickCart]
  );

  return (
    <div className={styles.productItem}>
      <img src={imageUrl} alt={name} />

      <div
        className={cx(
          styleUtils.flex,
          styleUtils.justifyBetween,
          styleUtils.p5
        )}
      >
        <div className={styles.productInfo}>
          <span className={styles.productInfoName}>{name}</span>
          <Price className={styles.productInfoPrice} price={price} />
        </div>

        <IconButton icon={<IconCart />} onClick={handeClickCartIcon} />
      </div>
    </div>
  );
}
