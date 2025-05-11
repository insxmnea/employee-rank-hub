// import { Slider } from "shared/ui/slider";
// import { useMetricStore } from "entities/metric";
import styles from "./WeightSlider.module.scss";

export const WeightSlider = () => {
  // const { selectedMetrics, updateWeight } = useMetricStore();

  return (
    <div className={styles.sliderContainer}>
      {/* {selectedMetrics.map((metric) => (
        <div key={metric.id} className={styles.sliderItem}>
          <label>{metric.name}</label>
          <Slider
            min={0}
            max={100}
            value={[metric.weight]}
            onValueChange={([value]) => updateWeight(metric.id, value)}
          />
          <span>{metric.weight}%</span>
        </div>
      ))} */}
    </div>
  );
};
