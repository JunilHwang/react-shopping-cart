import cx from "classnames";
import { ReactNode, useMemo } from "react";
import { styleUtils } from "../../styles";
import { DivideLine, IconButton, NumberInput, Price } from "../atoms";
import { IProduct } from "../../types";
import { IconTrash } from "../../assets/svgs";
import { CartQuantity } from "../../domain";
import { Modal, useModalConfirm } from "../modals";
import styles from "./Cart.module.scss";

interface IProps {
  checkbox?: ReactNode;
  product: IProduct;
  quantity: number;
  onChangeQuantity?: (quantity: number) => void;
  onDelete?: () => void;
}

export default function CartItem({
  checkbox,
  product,
  quantity,
  onChangeQuantity,
  onDelete,
}: IProps) {
  const confirmModal = useModalConfirm();
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
            <IconButton icon={<IconTrash />} onClick={confirmModal.open} />
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

      <Modal.Confirm
        title="정말로 삭제하시겠습니까?"
        show={confirmModal.show}
        onClose={confirmModal.close}
        onComplete={onDelete}
      />
    </div>
  );
}
