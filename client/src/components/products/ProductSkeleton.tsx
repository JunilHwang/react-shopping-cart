import cx from "classnames";
import styles from "./Product.module.scss";

interface IProps {
  count: number;
}

export default function ProductSkeleton({ count }: IProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, key) => (
        <div
          key={key}
          className={cx(styles.productItem, styles.productSkeleton)}
        >
          <div className={styles.productSkeletonThumbnail} />
          <div className={cx(styles.productSkeletonInfo)} />
        </div>
      ))}
    </>
  );
}
