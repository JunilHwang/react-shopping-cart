import cx from "classnames";
import { Price } from "../atoms";
import { styleUtils } from "../../styles";

interface IProps {
  label: string;
  value: number;
}

export default function CartTotalPrice({ label, value }: IProps) {
  return (
    <div
      className={cx(
        styleUtils.flex,
        styleUtils.justifyBetween,
        styleUtils.p20,
        styleUtils.mt20
      )}
    >
      <span className={styleUtils.highlightText}>{label}</span>
      <Price className={styleUtils.highlightText} price={value} />
    </div>
  );
}
