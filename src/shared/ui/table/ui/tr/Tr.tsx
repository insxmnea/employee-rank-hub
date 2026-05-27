import { HTMLAttributes, ReactNode } from "react";
import styles from "./Tr.module.css";

interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export const Tr = ({ children, ...props }: TrProps) => {
  return (
    <tr className={styles.tr} {...props}>
      {children}
    </tr>
  );
};
