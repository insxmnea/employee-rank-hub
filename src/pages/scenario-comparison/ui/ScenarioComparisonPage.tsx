import { AlgorithmCard } from "features/scenario-comparison-chart";
import { algorithms } from "entities/algorithm";
import styles from "./ScenarioComparsion.module.scss";

export const ScenarioComparisonPage = () => {
  const { selectedAlgorithm, setAlgorithm } = useAlgorithmStore();

  return (
    <div className={styles.grid}>
      {algorithms.map((algorithm) => (
        <AlgorithmCard
          key={algorithm.id}
          algorithm={algorithm}
          isSelected={selectedAlgorithm?.id === algorithm.id}
          onSelect={setAlgorithm}
        />
      ))}
    </div>
  );
};
