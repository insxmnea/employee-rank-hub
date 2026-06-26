import { Subdivisions } from "@entities/subdivision";
import { Edge, Node } from "@xyflow/react";
import { getEmployeeColor, getEmployeeColorByTopsis } from "./getEmployeeColor";

export const subdivisionDataToFlowElements = (
  subdivisions: Subdivisions | undefined,
) => {
  const position = { x: 0, y: 0 };
  const nodes: Node[] = [
    {
      id: "root",
      type: "default",
      data: { label: "Генеральный директор" },
      position,
      style: {
        backgroundColor: "#e6f7ff",
        border: "1px solid #ccc",
      },
    },
  ];
  const edges: Edge[] = [];

  if (!subdivisions) return { nodes, edges };

  subdivisions.forEach((subdivision) => {
    const subdivisionId = `subdivision-${subdivision.id}`;
    const subdivisionNode: Node = {
      id: subdivisionId,
      type: "default",
      data: { label: subdivision.name },
      position,
      style: {
        backgroundColor: "#e6f7ff",
        border: "1px solid #ccc",
      },
    };

    nodes.push(subdivisionNode);

    let edge: Edge = {
      id: `root-${subdivisionId}`,
      source: "root",
      target: subdivisionId,
      type: "smoothstep",
      animated: false,
    };

    if (subdivision.idTopSubdivision) {
      const topSubdivisionId = `subdivision-${subdivision.idTopSubdivision}`;

      edge = {
        id: `${topSubdivisionId}-${subdivisionId}`,
        source: topSubdivisionId,
        target: subdivisionId,
        type: "smoothstep",
        animated: false,
      };
    }

    edges.push(edge);

    subdivision.employees.forEach((employee) => {
      const employeeId = `employee-${employee.id}`;
      const employeeNode: Node = {
        id: employeeId,
        data: { label: `${employee.firstName} ${employee.lastName}` },
        position,
        style: {
          backgroundColor: getEmployeeColorByTopsis(employee.topsisScore),
        },
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
