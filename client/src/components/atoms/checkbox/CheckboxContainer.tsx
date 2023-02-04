import { ComponentProps, ReactNode } from "react";
import classnames from "classnames";
import { TNormalElementProps } from "../../../types";
import Checkbox from "./Checkbox";
import styles from "./Checkbox.module.scss";

interface IProps extends ComponentProps<typeof Checkbox> {
  label: ReactNode;
  containerProps?: TNormalElementProps<HTMLDivElement>;
}

export default function CheckboxContainer({
  label,
  containerProps,
  ...props
}: IProps) {
  return (
    <div
      {...containerProps}
      className={classnames(
        styles.checkboxContainer,
        containerProps?.className
      )}
    >
      <Checkbox {...props} />
      <label className={styles.checkboxLabel} htmlFor={props.name}>
        {label}
      </label>
    </div>
  );
}
