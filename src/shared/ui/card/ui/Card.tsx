import { ReactNode } from "react";
import styles from "./Card.module.css";
import { classnames } from "@shared/lib/classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={classnames(styles.card, {}, [className])}>{children}</div>
  );
};
