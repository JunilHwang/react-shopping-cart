import classnames from "classnames";
import { TElementProps } from "../../../types";
import styles from "./DivideLine.module.scss";

interface IProps extends TElementProps<HTMLHRElement> {
  type?: "black" | "gray" | "thin";
}

export default function DivideLine({
  type = "black",
  className = "",
  ...props
}: IProps) {
  console.log(type, styles[type]);

  return (
    <hr
      {...props}
      className={classnames(styles.divideLine, styles[type], className)}
    />
  );
}
