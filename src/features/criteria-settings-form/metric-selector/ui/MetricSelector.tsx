// import { useMetricStore } from "entities/metric";
import styles from "./MetricSelector.module.scss";

export const MetricSelector = () => {
  // const { metrics, toggleMetric } = useMetricStore();

  return (
    <div className={styles.metricGrid}>
      {/* {metrics.map((metric) => (
        <label key={metric.id} className={styles.metricItem}>
          <input
            type="checkbox"
            checked={metric.selected}
            onChange={() => toggleMetric(metric.id)}
          />
          {metric.name}
        </label>
      ))} */}
    </div>
  );
};
