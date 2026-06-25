import { ReactNode } from "react";
import styles from "./Th.module.css";

interface ThProps {
  children: ReactNode;
  width?: string;
}

export const Th = ({ children, width }: ThProps) => {
  return (
    <th className={styles.th} style={{ width }}>
      {children}
    </th>
  );
};
