import { AlgorithmCard } from "src/features/scenario-comparsion-chart/algorithm-card";
import styles from "./ScenarioComparison.module.scss";

export const ScenarioComparisonPage = () => {
  // const { selectedAlgorithm, setAlgorithm } = useAlgorithmStore();

  return (
    <div className={styles.grid}>
      {/* {algorithms.map((algorithm) => (
        <AlgorithmCard
          key={algorithm.id}
          algorithm={algorithm}
          isSelected={selectedAlgorithm?.id === algorithm.id}
          onSelect={setAlgorithm}
        />
      ))} */}
    </div>
  );
};
