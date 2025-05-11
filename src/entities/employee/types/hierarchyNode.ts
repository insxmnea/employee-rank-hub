import { Employee } from "./employee";

export type HierarchyNode = Employee & {
  children: HierarchyNode[];
};
