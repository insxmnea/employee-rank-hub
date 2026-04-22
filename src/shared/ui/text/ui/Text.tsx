import React from "react";

export enum TextTheme {
  PRIMARY = "primary",
}

interface TextProps {
  theme?: TextTheme;
  children: React.ReactNode;
}

export const Text = ({ theme, children }: TextProps) => {
  return <div>{children}</div>;
};
