import { getColorByPercent, getPercent } from "../helpers";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  value?: number;
  maxValue: number;
}

export const ProgressBar = ({ value, maxValue }: ProgressBarProps) => {
  const percent = getPercent({ value, maxValue });
  return (
    <div className={styles.progress_bar}>
      <div
        className={styles.progress_bar__fill}
        style={{
          width: `${percent}%`,
          backgroundColor: getColorByPercent(percent),
        }}
      ></div>
    </div>
  );
};
