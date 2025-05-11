import { Select } from "shared/ui/select";
import { ML_MODELS } from "entities/metric/constants";
import styles from "./ModelSelector.module.scss";

export const ModelSelector = () => {
  const { selectedModel, setModel } = useMetricStore();

  return (
    <div className={styles.modelSelector}>
      <Select
        options={ML_MODELS}
        value={selectedModel}
        onChange={setModel}
        label="Выберите ML модель"
      />
      {selectedModel && (
        <div className={styles.modelDescription}>
          {ML_MODELS.find((m) => m.value === selectedModel)?.description}
        </div>
      )}
    </div>
  );
};
