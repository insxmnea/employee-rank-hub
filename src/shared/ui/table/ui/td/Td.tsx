import React from "react";
import styles from "./Td.module.css";
import { classnames } from "@shared/lib/classnames";

interface TdProps {
  className?: string;
  centered?: boolean;
  right?: boolean;
  children: React.ReactNode;
}

export const Td = ({
  children,
  className,
  centered = false,
  right = false,
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
    >
      {children}
    </td>
  );
};
