import { ReactNode } from "react";
import styles from "./Table.module.css";

interface TableProps {
  children: ReactNode;
}

export const Table = ({ children }: TableProps) => {
  return <table className={styles.table}>{children}</table>;
};
