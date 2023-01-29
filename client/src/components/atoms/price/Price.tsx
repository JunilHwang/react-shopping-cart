import { TNormalElementProps } from "../../../types";
import { convertToNumberFormat } from "../../../utils";

interface IProps extends TNormalElementProps<HTMLSpanElement> {
  price: number;
}

export default function Price({ price, ...props }: IProps) {
  return <span {...props}>{convertToNumberFormat(price)}원</span>;
}
