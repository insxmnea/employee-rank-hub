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
      <text fill="#ebdbb2" dy="2.3em" dx="-3.5em" strokeWidth="0.1">
        {nodeDatum.name}
      </text>
      <text fill="#ebdbb2" dy="3.3em" dx="-3.5em" strokeWidth="0">
        Experience: {nodeDatum.experience}
      </text>
      <text
        fill={getRatingColor(nodeDatum.rating)}
        dy="4.3em"
        dx="-3.5em"
        strokeWidth="0"
      >
        Rating: {nodeDatum.rating}
      </text>
      <text fill="#ebdbb2" dy="5.3em" dx="-3.5em" strokeWidth="0">
        Position: {nodeDatum.position}
      </text>

      <text fill="#ebdbb2" dy="6.3em" dx="-3.5em" strokeWidth="0">
        Department: {nodeDatum.department}
      </text>
    </g>
  );

  return (
    <div className={styles.treeContainer}>
      {data && (
        <Tree
          data={data}
          renderCustomNodeElement={renderNode}
          orientation="vertical"
          nodeSize={{ x: 300, y: 150 }}
        />
      )}
    </div>
  );
};
