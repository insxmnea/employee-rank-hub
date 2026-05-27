import { ReactNode } from "react";
import styles from "./Thead.module.css";

interface TheadProps {
  children: ReactNode;
}

export const Thead = ({ children }: TheadProps) => {
  return (
    <thead className={styles.thead}>
      <tr>{children}</tr>
    </thead>
  );
};
