import { RankingFilters } from "src/features/ranking-filters";
import styles from "./RankingPage.module.scss";
import { EmployeeTree } from "src/widgets/ranking-tree";
// import { ThreeDVisualization } from "src/widgets/3d-visualization";

export const RankingPage = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.sidebar}>
        <RankingFilters />
      </div> */}
      <div className={styles.visualization}>
        <EmployeeTree />
        {/* <Toggle3DButton /> */}
      </div>

      {/* <div className={styles.visualization}>
        <ThreeDVisualization />
      </div> */}
    </div>
  );
};
