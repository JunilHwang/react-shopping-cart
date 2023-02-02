import { ReactNode } from "react";
import cx from "classnames";
import { TNormalElementProps } from "../../../types";
import styles from "./Button.module.scss";

type TButtonProps = TNormalElementProps<HTMLButtonElement>;

interface IProps extends TButtonProps {
  icon: ReactNode;
}

export default function IconButton({ className = "", icon, ...props }: IProps) {
  return (
    <button className={cx(styles.iconButton, className)} {...props}>
      {icon}
    </button>
  );
}
