import { ButtonHTMLAttributes } from "react";
import * as styles from "./Button.module.scss";
import { classnames } from "@shared/lib/classnames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    theme,
    children,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      className={classnames(styles.Button, mods, [
        className,
        styles[theme],
        styles[size],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
