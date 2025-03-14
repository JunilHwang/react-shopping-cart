import classnames from "classnames";
import { PropsWithChildren } from "react";
import { TButtonElementProps } from "../../../types";
import styles from "./Button.module.scss";

interface IProps extends Omit<TButtonElementProps, "type"> {
  nativeType?: "button" | "submit" | "reset";
  type?: "primary" | "normal";
  size?: "mini" | "small" | "full";
}

export default function Button({
  children,
  nativeType = "button",
  type = "primary",
  size = "small",
  className = "",
  ...props
}: PropsWithChildren<IProps>) {
  return (
    <button
      {...props}
      type={nativeType}
      className={classnames(
        styles.button,
        styles[size],
        styles[type],
        className
      )}
    >
      {children}
    </button>
  );
}
