import React from "react";
import styles from "./Text.module.css";
import { classnames } from "@shared/lib/classnames";

export enum TextTheme {
  PRIMARY = "primary",
}

type TextSizes = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

interface TextProps {
  theme?: TextTheme;
  size?: TextSizes;
  className?: string;
  centered?: boolean;
  right?: boolean;
  children: React.ReactNode;
  bold?: boolean;
}

export const Text = ({
  theme = TextTheme.PRIMARY,
  children,
  className,
  size = "m",
  centered = false,
  right = false,
  bold = false,
}: TextProps) => {
  return (
    <p
      className={classnames(
        styles.Text,
        {
          [styles.centered]: centered,
          [styles.bold]: bold,
          [styles.right]: right,
        },
        [className, styles[size]],
      )}
    >
      {children}
    </p>
  );
};
