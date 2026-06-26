import { ReactNode } from "react";
import styles from "./Grid.module.css";

interface GridProps {
  direction?: "column";
  justify?: "space-between";
  align?: "center" | "flex-end";
  gap?: number;
  width?: string;
  children?: ReactNode;
  mb?: number;
  mt?: number;
  gridTemplateColumns?: string;
}

export const Grid = ({
  gridTemplateColumns,
  width,
  direction,
  justify,
  align,
  gap,
  mb,
  mt,
  children,
}: GridProps) => {
  return (
    <div
      className={styles.Grid}
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: `${gap}px`,
        width,
        marginBottom: `${mb}px`,
        marginTop: `${mt}px`,
        gridTemplateColumns,
      }}
    >
      {children}
    </div>
  );
};
