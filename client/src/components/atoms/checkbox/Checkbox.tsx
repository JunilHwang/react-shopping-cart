import classnames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.scss";

type TInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Checkbox({
  className = "",
  ...props
}: Omit<TInputProps, "type">) {
  return (
    <input
      {...props}
      type="checkbox"
      className={classnames(styles.checkbox, className)}
    />
  );
}
