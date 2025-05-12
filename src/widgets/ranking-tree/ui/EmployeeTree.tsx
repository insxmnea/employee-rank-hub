import { Tree } from "react-d3-tree";
import styles from "./EmployeeTree.module.scss";
import { useEmployeeHierarchy } from "src/features/employee-hierarchy";
import { getRatingColor } from "src/shared/lib/rating-color/getRatingColor";

export const EmployeeTree = () => {
  // const { data, isLoading } = useEmployeeHierarchy();
  const { data } = useEmployeeHierarchy();

  const renderNode = ({ nodeDatum }: { nodeDatum: any }) => (
    <g className={styles.node}>
      <circle fill={getRatingColor(nodeDatum.rating)} r={20} />
      <text fill="black" dy=".3em" strokeWidth="1">
        {nodeDatum.name}
      </text>
    </g>
  );

  return (
    <div className={styles.treeContainer}>
      {data && <Tree data={data} renderCustomNodeElement={renderNode} />}
    </div>
  );
};
