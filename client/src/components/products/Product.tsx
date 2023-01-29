import cx from "classnames";
import { styleUtils } from "../../styles";
import { Price } from "../atoms";
import { IProduct } from "../../types";
import { IconCart } from "../../assets/svgs";
import styles from "./Product.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps extends IProduct {}

export default function Product({ id, name, imageUrl, price }: IProps) {
  return (
    <div className={styles.productItem} key={id}>
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
        <IconCart />
      </div>
    </div>
  );
}
