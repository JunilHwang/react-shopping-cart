import { TElementProps } from "../../../types";
import { convertToNumberFormat } from "../../../utils";

interface IProps extends TElementProps<HTMLSpanElement> {
  price: number;
}

export default function Price({ price, ...props }: IProps) {
  return <span {...props}>{convertToNumberFormat(price)}원</span>;
}
