import { TNormalElementProps } from "../../../types";
import { convertToNumberFormat } from "../../../utils";

interface IProps extends TNormalElementProps<HTMLSpanElement> {
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
