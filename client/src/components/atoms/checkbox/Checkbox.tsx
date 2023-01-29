import classnames from "classnames";
import { TInputElementProps } from "../../../types";
import styles from "./Checkbox.module.scss";

export default function Checkbox({
  className = "",
  ...props
}: Omit<TInputElementProps, "type">) {
  return (
    <input
      {...props}
      type="checkbox"
      className={classnames(styles.checkbox, className)}
    />
  );
}
