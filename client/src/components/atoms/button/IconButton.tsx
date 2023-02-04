import { ReactNode } from "react";
import cx from "classnames";
import { TButtonElementProps } from "../../../types";
import styles from "./Button.module.scss";

interface IProps extends TButtonElementProps {
  icon: ReactNode;
}

export default function IconButton({ className = "", icon, ...props }: IProps) {
  return (
    <button className={cx(styles.iconButton, className)} {...props}>
      {icon}
    </button>
  );
}
