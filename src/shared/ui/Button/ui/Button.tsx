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
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    theme,
    children,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods = {
    [styles.square]: square,
  };

  return (
    <button
      className={classnames(styles.Button, mods, [
        className,
        styles[theme],
        styles[size],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
