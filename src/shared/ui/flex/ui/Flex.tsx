import { ReactNode } from "react";
import styles from "./Flex.module.css";

interface FlexProps {
  direction?: "column";
  justify?: "space-between";
  align?: "center";
  gap?: number;
  width?: string;
  children?: ReactNode;
  mb?: number;
}

export const Flex = ({
  width,
  direction,
  justify,
  align,
  gap,
  mb,
  children,
}: FlexProps) => {
  return (
    <div
      className={styles.flex}
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: `${gap}px`,
        width,
        marginBottom: `${mb}px`,
      }}
    >
      {children}
    </div>
  );
};
