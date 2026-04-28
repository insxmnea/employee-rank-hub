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
    setIsSideModal(true);
    setSelectedNodeId(node.id.split("-")[1]);
  };

  const onCloseSideModal = () => {
    setIsSideModal(false);
  };

  if (isLoading) return <PageLoader />;

  return (
    <div style={{ width: "100%", height: "100%" }}>
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
          <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={() => onLayout("TB")}
          >
            {t("vertical layout")}
          </Button>
          <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={() => onLayout("LR")}
          >
            {t("horizontal layout")}
          </Button>
        </Panel>
        <Background />
      </ReactFlow>

      <EmployeeDetailsModal
        id={selectedNodeId ?? ""}
        isOpen={isSideModal}
        onClose={onCloseSideModal}
      />
    </div>
  );
};
