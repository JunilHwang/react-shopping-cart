import { TElementProps } from "../../../types";
import { convertToNumberFormat } from "../../../utils";

interface IProps extends TElementProps<HTMLSpanElement> {
  price: number;
  quantity: number;
}

export default function PriceAndQuantity({
  price,
  quantity,
  ...props
}: IProps) {
  return (
    <span {...props}>
      {convertToNumberFormat(price)}원 / 수량: {quantity}개
    </span>
  );
}
