import React from "react";
import styles from "./Text.module.css";
import { classnames } from "@shared/lib/classnames";

export enum TextTheme {
  PRIMARY = "primary",
}

interface TextProps {
  theme?: TextTheme;
  size?: "m" | "l" | "xl";
  className?: string;
  children: React.ReactNode;
}

export const Text = ({
  theme = TextTheme.PRIMARY,
  children,
  className,
  size = "m",
}: TextProps) => {
  return (
    <p className={classnames(styles.Text, {}, [className, styles[size]])}>
      {children}
    </p>
  );
};
