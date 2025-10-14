import { ButtonHTMLAttributes } from "react";
import * as styles from "./Button.module.scss";
import { classnames } from "@shared/lib/classnames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button
      className={classnames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
