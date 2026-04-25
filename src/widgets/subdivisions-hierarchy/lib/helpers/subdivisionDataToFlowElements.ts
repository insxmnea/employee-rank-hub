import { Subdivisions } from "@entities/subdivision";
import { Edge, Node } from "@xyflow/react";

export const subdivisionDataToFlowElements = (
  subdivisions: Subdivisions | undefined,
) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const position = { x: 0, y: 0 };

  if (!subdivisions) return { nodes, edges };

  subdivisions.forEach((subdivision) => {
    const subdivisionId = `subdivision-${subdivision.id}`;
    const subdivisionNode: Node = {
      id: subdivisionId,
      type: "default",
      data: { label: subdivision.name },
      position,
      style: { backgroundColor: "#f0f0f0", border: "1px solid #ccc" },
    };

    nodes.push(subdivisionNode);

    subdivision.employees.forEach((employee) => {
      const employeeId = `employee-${employee.id}`;
      const employeeNode: Node = {
        id: employeeId,
        data: { label: `${employee.firstName} ${employee.lastName}` },
        position,
        style: { backgroundColor: "#e6f7ff" },
      };
      nodes.push(employeeNode);

      const edge: Edge = {
        id: `${subdivisionId}-${employeeId}`,
        source: subdivisionId,
        target: employeeId,
        type: "smoothstep",
        animated: false,
      };
      edges.push(edge);
    });
  });

  return { nodes, edges };
};
