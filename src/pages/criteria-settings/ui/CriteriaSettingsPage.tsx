// import {
//   MetricSelector,
//   WeightSlider,
//   ModelSelector,
// } from "features/criteria-settings-form";
import styles from "./CriteriaSettingsPage.module.scss";

export const CriteriaSettingsPage = () => {
  return (
    <div className={styles.page}>
      <h1>Настройка критериев ранжирования</h1>
      {/* <MetricSelector />
      <WeightSlider />
      <ModelSelector /> */}
      <button className={styles.saveButton}>Сохранить настройки</button>
    </div>
  );
};
