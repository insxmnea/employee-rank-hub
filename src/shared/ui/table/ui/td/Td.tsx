import React from "react";
import styles from "./Td.module.css";
import { classnames } from "@shared/lib/classnames";

interface TdProps {
  className?: string;
  centered?: boolean;
  right?: boolean;
  children: React.ReactNode;
  width?: string;
  title?: string;
}

export const Td = ({
  children,
  className,
  centered = false,
  right = false,
  width,
  title,
}: TdProps) => {
  return (
    <td
      className={classnames(
        styles.td,
        {
          [styles.centered]: centered,
          [styles.right]: right,
        },
        [className],
      )}
      style={{ width }}
      title={title}
    >
      {children}
    </td>
  );
};
