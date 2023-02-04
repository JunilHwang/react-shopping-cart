import cx from "classnames";
import { ReactNode, useMemo } from "react";
import { styleUtils } from "../../styles";
import { DivideLine, NumberInput, Price } from "../atoms";
import { IProduct } from "../../types";
import { IconTrash } from "../../assets/svgs";
import { CartQuantity } from "../../domain";
import styles from "./Cart.module.scss";

interface IProps {
  checkbox?: ReactNode;
  product: IProduct;
  quantity: number;
  onChangeQuantity?: (quantity: number) => void;
}

export default function CartItem({
  checkbox,
  product,
  quantity,
  onChangeQuantity,
}: IProps) {
  const checkboxIfExists = useMemo(
    () =>
      checkbox && (
        <div className={cx(styleUtils.mt10, styleUtils.mr10)}>{checkbox}</div>
      ),
    [checkbox]
  );

  return (
    <div>
      <div className={styleUtils.flex}>
        {checkboxIfExists}

        <div className={styles.cartItem}>
          <div
            className={cx(styleUtils.flex, styleUtils.gap15, styleUtils.mt10)}
          >
            <img
              className={cx(styleUtils.w144, styleUtils.h144)}
              src={product.imageUrl}
              alt={product.name}
            />
            <span className={styles.cartName}>{product.name}</span>
          </div>

          <div
            className={cx(
              styleUtils.flexColCenter,
              styleUtils.justifyEnd,
              styleUtils.gap15
            )}
          >
            <IconTrash />
            <NumberInput
              defaultValue={CartQuantity.MIN}
              min={CartQuantity.MIN}
              max={CartQuantity.MAX}
              onChange={onChangeQuantity}
            />
            <Price
              className={styles.cartPrice}
              price={product.price * quantity}
            />
          </div>
        </div>
      </div>
      <DivideLine type="thin" className={styleUtils.mt10} />
    </div>
  );
}
