import styles from "./DeltaIcon.module.css";

interface DeltaIconProps {
  delta?: "up" | "down";
}

export const DeltaIcon = ({ delta }: DeltaIconProps) => {
  if (!delta) return null;

  return delta === "up" ? (
    <div className={styles.upIcon}>
      <i className="nf nf-fa-caret_up"></i>
    </div>
  ) : (
    <div className={styles.downIcon}>
      <i className="nf nf-fa-caret_down"></i>
    </div>
  );
};
