import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
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

export const Button = ({
  className,
  theme = ButtonTheme.BACKGROUND,
  children,
  square = false,
  disabled = false,
  size = ButtonSize.M,
  ...otherProps
}: ButtonProps) => {
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
