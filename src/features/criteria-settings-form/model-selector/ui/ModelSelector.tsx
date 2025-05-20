// import { Select } from "shared/ui/select";
// import { ML_MODELS } from "entities/metric/constants";
import { Select } from "@react-three/drei";
import styles from "./ModelSelector.module.scss";
import { useMetricStore } from "src/entities/metric/store";

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
