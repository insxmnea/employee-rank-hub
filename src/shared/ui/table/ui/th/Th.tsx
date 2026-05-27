import { ReactNode } from "react";
import styles from "./Th.module.css";

interface ThProps {
  children: ReactNode;
}

export const Th = ({ children }: ThProps) => {
  return <th className={styles.th}>{children}</th>;
};
