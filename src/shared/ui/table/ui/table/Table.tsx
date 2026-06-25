import { ReactNode } from "react";
import styles from "./Table.module.css";
import { classnames } from "@shared/lib/classnames";

interface TableProps {
  children: ReactNode;
  className?: string;
}

export const Table = ({ children, className }: TableProps) => {
  return (
    <table className={classnames(styles.table, {}, [className])}>
      {children}
    </table>
  );
};
