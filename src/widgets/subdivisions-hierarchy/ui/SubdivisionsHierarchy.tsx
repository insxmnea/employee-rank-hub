import { useTranslation } from "react-i18next";
import { subdivisionQueries } from "@entities/subdivision/api/subdivision.queries";
import { useQuery } from "@tanstack/react-query";
import {
  Background,
  ConnectionLineType,
  Controls,
  DefaultEdgeOptions,
  Edge,
  FitViewOptions,
  Node,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useCallback, useEffect, useState } from "react";
import { subdivisionDataToFlowElements } from "../lib";
import { PageLoader } from "@widgets/page-loader";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { getLayoutedElements } from "@shared/lib";
import { EmployeeDetailsModal } from "@features/employee-details";
import styles from "./SubdivisionsHierarchy.module.css";
import { Text } from "@shared/ui/text";
import { SubdivisionDetailsModal } from "@features/subdivision-details";

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

export const SubdivisionsHierarchy = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery(subdivisionQueries.allSubdivisions());

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const [isSideModal, setIsSideModal] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string>();

  const [isSideSubdivisionModal, setIsSideSubdivisionModal] = useState(false);

  useEffect(() => {
    const { nodes: flowNodes, edges: flowEdges } =
      subdivisionDataToFlowElements(data?.data);

    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      flowNodes,
      flowEdges,
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [data?.data, setEdges, setNodes]);

  const onLayout = useCallback(
    (direction: string) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges, setEdges, setNodes],
  );

  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    const nodeType = node.id.split("-")[0];

    if (nodeType === "employee") {
      setIsSideModal(true);
      setSelectedNodeId(node.id.split("-")[1]);
    }

    if (nodeType === "subdivision") {
      console.log("none");
      setIsSideSubdivisionModal(true);
      setSelectedNodeId(node.id.split("-")[1]);
    }
  };

  const onCloseSideModal = () => {
    setIsSideModal(false);
  };

  if (isLoading) return <PageLoader />;

  return (
    <div style={{ width: "100%", height: "100%", color: "#000" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={() => {}}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
        proOptions={{ hideAttribution: true }}
        edgesReconnectable={false}
        onNodeClick={onNodeClick}
        nodesDraggable={false}
        nodesConnectable={false}
      >
        <Controls
          orientation="horizontal"
          position="bottom-right"
          showInteractive={false}
        />
        <Panel position="top-right">
          <div className={styles.legend}>
            <Text centered>{t("Легенда")}</Text>

            <div className={styles["legend-row"]}>
              <div className={styles["subdivision-legend"]}></div>
              <Text>- {t("Отделы")}</Text>
            </div>

            <div className={styles["legend-employees"]}>
              <Text>{t("Сотрудники")}</Text>
              <div className={styles["legend-row"]}>
                <div className={styles["high-rating"]}></div>
                <Text>- {t("Высокий рейтинг")}</Text>
              </div>
              <div className={styles["legend-row"]}>
                <div className={styles["middle-rating"]}></div>
                <Text>- {t("Средний рейтинг")}</Text>
              </div>
              <div className={styles["legend-row"]}>
                <div className={styles["low-rating"]}></div>
                <Text>- {t("Низкий рейтинг")}</Text>
              </div>
              <div className={styles["legend-row"]}>
                <div className={styles["no-rating"]}></div>
                <Text>- {t("Без рейтинга")}</Text>
              </div>
            </div>
          </div>

          <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={() => onLayout("TB")}
          >
            {t("горизонтально")}
          </Button>
          <Button
            className={styles.button}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={() => onLayout("LR")}
          >
            {t("вертикально")}
          </Button>
        </Panel>
        <Background />
      </ReactFlow>

      <EmployeeDetailsModal
        id={selectedNodeId ?? ""}
        isOpen={isSideModal}
        onClose={onCloseSideModal}
      />

      <SubdivisionDetailsModal
        id={selectedNodeId ?? ""}
        isOpen={isSideSubdivisionModal}
        onClose={() => setIsSideSubdivisionModal(false)}
      />
    </div>
  );
};
