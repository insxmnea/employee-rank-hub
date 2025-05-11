import { RankingAlgorithm } from "src/entities/algorithm/types/algorithm";
import styles from "./AlgorithmCard.module.scss";

type AlgorithmCardProps = {
  algorithm: RankingAlgorithm;
  isSelected: boolean;
  onSelect: (algorithm: RankingAlgorithm) => void;
};

export const AlgorithmCard = ({ algorithm, ...props }: AlgorithmCardProps) => {
  return (
    <div
      // className={clsx(styles.card, props.isSelected && styles.selected)}
      onClick={() => props.onSelect(algorithm)}
    >
      <h3>{algorithm.name}</h3>
      <p>{algorithm.description}</p>
      <div className={styles.parameters}>
        {Object.entries(algorithm.parameters).map(([key, value]) => (
          <div key={key} className={styles.param}>
            <span>{key}:</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
