import { useMetricStore } from "src/entities/metric/store";
import styles from "./WeightSlider.module.scss";
import { Slider } from "src/shared/ui/slider";

export const WeightSlider = () => {
  const { metrics, actions } = useMetricStore();

  return (
    <div className={styles.sliderContainer}>
      {metrics.map((metric) => (
        <div key={metric.id} className={styles.sliderItem}>
          <label>{metric.name}</label>
          <Slider
            min={0}
            max={100}
            value={[metric.weight[0]]}
            onValueChange={([value]) => actions.updateWeight(metric.id, value)}
          />
          <span>{metric.weight}%</span>
        </div>
      ))}
    </div>
  );
};
