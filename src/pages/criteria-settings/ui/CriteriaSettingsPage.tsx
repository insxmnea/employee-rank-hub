// import {
//   MetricSelector,
//   WeightSlider,
//   ModelSelector,
// } from "features/criteria-settings-form";
import { MetricSelector } from "src/features/criteria-settings-form/metric-selector";
import styles from "./CriteriaSettingsPage.module.scss";
import { WeightSlider } from "src/features/criteria-settings-form/weight-slider";
import { ModelSelector } from "src/features/criteria-settings-form/model-selector";

export const CriteriaSettingsPage = () => {
  return (
    <div className={styles.page}>
      <h1>Настройка критериев ранжирования</h1>
      <MetricSelector />
      <WeightSlider />
      <ModelSelector />
      <button className={styles.saveButton}>Сохранить настройки</button>
    </div>
  );
};
