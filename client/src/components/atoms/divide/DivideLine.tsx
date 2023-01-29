import classnames from "classnames";
import { TNormalElementProps } from "../../../types";
import styles from "./DivideLine.module.scss";

interface IProps extends TNormalElementProps<HTMLHRElement> {
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
