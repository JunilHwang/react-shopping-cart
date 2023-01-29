import { ComponentProps, ReactNode } from "react";
import classnames from "classnames";
import { TElementProps } from "../../../types";
import Checkbox from "./Checkbox";
import styles from "./Checkbox.module.scss";

interface IProps extends TElementProps<HTMLDivElement> {
  checkbox: ComponentProps<typeof Checkbox>;
  label: ReactNode;
}

export default function CheckboxContainer({
  checkbox,
  label,
  className = "",
  ...props
}: IProps) {
  return (
    <div {...props} className={classnames(styles.checkboxContainer, className)}>
      <Checkbox {...checkbox} />
      <label className={styles.checkboxLabel} htmlFor={checkbox.name}>
        {label}
      </label>
    </div>
  );
}
