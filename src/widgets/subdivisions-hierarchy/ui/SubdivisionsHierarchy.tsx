import { useTranslation } from "react-i18next";
import { subdivisionQueries } from "@entities/subdivision/api/subdivision.queries";
import { useQuery } from "@tanstack/react-query";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  DefaultEdgeOptions,
  Edge,
  FitViewOptions,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodeDrag,
  OnNodesChange,
  ReactFlow,
} from "@xyflow/react";
import { useCallback, useState } from "react";
import { subdivisionDataToFlowElements } from "../lib/helpers";

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const onNodeDrag: OnNodeDrag = (_, node) => {
  console.log("drag event", node.data);
};

interface SubdivisionsHierarchyProps {}

export const SubdivisionsHierarchy = (props: SubdivisionsHierarchyProps) => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery(subdivisionQueries.allSubdivisions());

  const { nodes: flowNodes, edges: flowEdges } = subdivisionDataToFlowElements(
    data?.data,
  );

  const [nodes, setNodes] = useState<Node[]>(flowNodes);
  const [edges, setEdges] = useState<Edge[]>(flowEdges);

  console.log(data?.data);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  if (isLoading) return null;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDrag={onNodeDrag}
        fitView
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
};
